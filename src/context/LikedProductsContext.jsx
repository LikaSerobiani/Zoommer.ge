/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getLikedProducts,
  addProductToLiked,
  removeProductFromLiked,
} from "../services/services";

const LikedProductsContext = createContext();

export const LikedProductsProvider = ({ children }) => {
  const [likedProducts, setLikedProducts] = useState([]);

  const fetchLikedProducts = async () => {
    try {
      const response = await getLikedProducts();
      setLikedProducts(response.data);
    } catch (error) {
      console.error("Error fetching liked products:", error);
    }
  };

  useEffect(() => {
    fetchLikedProducts();
  }, []);

  const addLikedProduct = async (product) => {
    try {
      const isProductInLikedProducts = likedProducts.some(
        (likedProduct) => likedProduct.likedProduct.id === product.id
      );

      if (!isProductInLikedProducts) {
        const response = await addProductToLiked({ product_id: product.id });
        fetchLikedProducts();
      } else {
        console.log("Product is already in wishList.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeLikedProduct = async (productId) => {
    try {
      await removeProductFromLiked(productId);
      setLikedProducts(
        likedProducts.filter((product) => product.id !== productId)
      );
    } catch (error) {
      console.error("Error removing product from wishList:", error);
    }
  };

  return (
    <LikedProductsContext.Provider
      value={{
        likedProducts,
        addLikedProduct,
        removeLikedProduct,
      }}
    >
      {children}
    </LikedProductsContext.Provider>
  );
};
export const useLikedProducts = () => useContext(LikedProductsContext);
