import { fetchAuthSession } from "aws-amplify/auth";
import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:8080",
  headers: {
    Accept: "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  try {
    const session = await fetchAuthSession();
    if (
      session &&
      session.tokens?.accessToken
    ) {
      config.headers.Authorization = `Bearer ${session.tokens.accessToken}`;
    }
  } catch (error) {
    console.error("Erro ao adicionar o token JWT:", error);
  }
  return config;
});
