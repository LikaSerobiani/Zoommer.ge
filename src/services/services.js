import api from "./api";

const baseURL = import.meta.env.VITE_API_BASE_URL;

export const login = (data) => {
  return api.post(`${baseURL}/auth/login`, { ...data });
};

export const getProducts = (data) => {
  return api.get(`${baseURL}/product`, { ...data });
};
