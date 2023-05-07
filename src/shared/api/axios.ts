import axios, { InternalAxiosRequestConfig } from "axios";

const getCookie = (name: string) => {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

const $axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL
});

const axiosInterceptors = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  config.headers.Authorization = `Bearer ${getCookie("token")}`;
  return config;
}

$axios.interceptors.request.use(axiosInterceptors);

export { $axios };