import axios from "axios";

const accessToken =
  typeof window !== "undefined" && JSON.stringify(localStorage.getItem("accessToken") || "");

const apiClient = axios.create({
  baseURL: "/api",
  withCredentials: true,
  headers: {
    Authorization: accessToken,
  },
});

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

apiClient.interceptors.response.use(
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
            return apiClient(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      return new Promise((resolve, reject) => {
        const localToken = localStorage.getItem("accessToken") || "";
        apiClient
          .post("/auth/refresh-tokens", {
            accessToken: JSON.parse(localToken)?.split(" ")[1],
          })
          .then(({ data }) => {
            localStorage.setItem("accessToken", data.accessToken);
            apiClient.defaults.headers.common["Authorization"] = data.accessToken;
            originalRequest.headers["Authorization"] = data.accessToken;
            processQueue(null, data.accessToken);
            resolve(apiClient(originalRequest));
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
  },
);

export { apiClient };
