import { Api, LoginResponse } from "@/shared/api/api-generated";

const accessToken =
  typeof window !== "undefined" &&
  JSON.stringify(localStorage.getItem("accessToken") || "");

let isRefreshing = false;
let failedQueue: any[] = [];

const httpClient = new Api({
  baseURL: "/",
  withCredentials: true,
  headers: {
    Authorization: accessToken,
  },
});

const httpClientInstance = httpClient.instance;
const apiClient = httpClient.api;

const processQueue = (
  error: any,
  token: LoginResponse["accessToken"] | null
) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

httpClientInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers["Authorization"] = token;
            return httpClientInstance(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      return new Promise((resolve, reject) => {
        apiClient
          .authControllerRefreshTokens()
          .then(({ data }) => {
            localStorage.setItem("accessToken", data.accessToken);
            httpClientInstance.defaults.headers.common["Authorization"] =
              data.accessToken;
            originalRequest.headers["Authorization"] = data.accessToken;
            processQueue(null, data.accessToken);
            resolve(httpClientInstance(originalRequest));
          })
          .catch((err) => {
            processQueue(err, null);
            reject(err);
          })
          .finally(() => {
            isRefreshing = false;
          });
      });
    }

    return Promise.reject(error);
  }
);

export { apiClient, httpClient };
