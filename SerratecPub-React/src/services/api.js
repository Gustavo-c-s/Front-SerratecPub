import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});


api.interceptors.response.use(
  response => response,
  error => {
    console.error("Erro na requisição:", error);
    return Promise.reject(error);
  }
);