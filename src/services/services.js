import api from "./api";

const baseURL = import.meta.env.VITE_API_BASE_URL;

export const login = (data) => {
  return api.post(`${baseURL}/auth/login`, { ...data });
};

export const refreshAccessToken = (data) => {
  return api.post(`${baseURL}/auth/update-tokens`, { ...data });
};

export const registration = (data) => {
  return api.post(`${baseURL}/auth/register`, { ...data });
};

export const getProducts = (params) => {
  return api.get("/product", { params });
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

export const removeCartProducts = (productId, removeAll) => {
  return api.delete(`${baseURL}/cart/${productId}?removeAll=${removeAll}`);
};

export const getUserDetails = () => {
  return api.get(`${baseURL}/user/current-user`);
};

export const updateUserDetails = (userData) => {
  return api.put(`${baseURL}/user`, userData);
};

export const purchaseProducts = (data) => {
  return api.post(`${baseURL}/purchases`, { ...data });
};

export const getPurchases = (data) => {
  return api.get(`${baseURL}/purchases`, { ...data });
};
