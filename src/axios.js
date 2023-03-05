import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL
    ? process.env.REACT_APP_API_URL
    : "http://127.0.0.1:8000",
});

// instance.interceptors.request.use((config) => {
//   config.headers.authorization = window.localStorage.getItem("token");
//   return config;
// });

export default instance;
