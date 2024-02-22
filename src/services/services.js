import api from "./api";

const baseURL = import.meta.env.VITE_API_BASE_URL;

export const login = (data) => {
  return api.post(`${baseURL}/auth/login`, { ...data });
};

export const registration = (data) => {
  return api.post(`${baseURL}/auth/register`, { ...data });
};

export const getProducts = (data) => {
  return api.get(`${baseURL}/product`, { ...data });
};

export const getProduct = (cardId, data) => {
  return api.get(`${baseURL}/product/${cardId}`, { ...data });
};

export const getCategories = (data) => {
  return api.get(`${baseURL}/product-category`, { ...data });
};

export const getCartProducts = (data) => {
  return api.get(`${baseURL}/cart`, { ...data });
};

export const addCartProducts = (data) => {
  return api.post(`${baseURL}/cart`, { ...data });
};
