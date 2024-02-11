import { create } from "zustand";
import axios from "axios";

export const useStore = create((set) => ({
  products: [],
  cart: [],

  cartCount: 0,

  fetchProducts: async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}product`
      );
      const products = response.data.products;
      set({ products });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },

  addToCart: async (productId) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}cart`,
        { productId }
      );
      set((state) => ({
        cart: response.data.cart,
        cartCount: state.cartCount + 1,
      }));
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  },

  removeFromCart: async (productId) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_BASE_URL}cart/${productId}`,
        {
          productId,
        }
      );
      set((state) => ({
        cart: response.data.cart,
        cartCount: state.cartCount - 1,
      }));
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  },

  toggleLike: async (productId) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}like`,
        { productId }
      );

      set({ likedProducts: response.data.likedProducts });
    } catch (error) {
      console.error("Error toggling like for product:", error);
    }
  },
}));

export default useStore;
