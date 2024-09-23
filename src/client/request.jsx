import axios from "axios";

const client = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
  maxContentLength: Infinity,
  maxBodyLength: Infinity,
  withCredentials: true,
});

client.interceptors.request.use(
  function (config) {
    config.headers = {
      ...config.headers,
      TokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxMSIsIkhldEhhblN0cmluZyI6IjE3LzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczOTc1MDQwMDAwMCIsIm5iZiI6MTcwOTc0NDQwMCwiZXhwIjoxNzM5ODk4MDAwfQ.qvs2zsWDKR2CRt273FQIadSYJzZM-hCro_nsLVpa-Wg`,
    };
    const tail = config?.url?.split("/")[config?.url?.split("/")?.length - 1];
    const token = localStorage.getItem("access_token");
    if (
      token &&
      tail?.toLowerCase() !== "dangnhap" &&
      tail?.toLowerCase() !== "dangky"
    ) {
      config.headers.Token = `${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (err) {
    const status = err.response?.status || 500;
    switch (status) {
      case 401: {
        return Promise.reject(err.response?.data);
      }
      case 403: {
        return Promise.reject(err.response?.data);
      }

      case 400: {
        return Promise.reject(err.response?.data);
      }

      case 404: {
        return Promise.reject(err.response?.data);
      }

      case 409: {
        return Promise.reject(err.response?.data);
      }

      case 422: {
        return Promise.reject(err.response?.data);
      }

      default: {
        return Promise.reject(err.response?.data);
      }
    }
  }
);
export { client };
