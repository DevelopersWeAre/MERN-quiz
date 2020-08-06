import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

// TODO - Add the response interceptors (error handling).

// This is base url, in the case that there is a value in env it takes that, otherwise it takes the string on the right.
const BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:8080/api/v1";

// Simple unauthed api instance.
export const API = axios.create({ baseURL: BASE_URL });

// Authorized api instance
export const AUTH_API = axios.create({ baseURL: BASE_URL });

// Interceptor that before each call embeds the Bearer token into the header
AUTH_API.interceptors.request.use(
  config => {
    let token = localStorage.getItem(ACCESS_TOKEN);

    config.headers = { ...config.headers, Authorization: `Bearer ${token}` };

    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
