import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getLikedProducts,
  addProductToLiked,
  removeProductFromLiked,
} from "../services/services";
import LoginModal from "../components/modals/Login";
import { toast } from "react-toastify";

const LikedProductsContext = createContext();

export const LikedProductsProvider = ({ children }) => {
  const [likedProducts, setLikedProducts] = useState([]);
  const isAuthenticated = localStorage.getItem("accessToken");
  const [showLoginModal, setShowLoginModal] = useState(false);

  const fetchLikedProducts = () => {
    getLikedProducts()
      .then((response) => {
        setLikedProducts(response.data);
      })
      .catch((error) => {
        toast.error("მოხდა შეცდომა", {
          position: "top-right",
        });
      });
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchLikedProducts();
    } else {
      setLikedProducts([]);
    }
  }, [isAuthenticated]);

  const addLikedProduct = (product) => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
      return;
    }

    const isProductInLikedProducts = likedProducts.some(
      (likedProduct) => likedProduct.likedProduct.id === product.id
    );

    if (!isProductInLikedProducts) {
      addProductToLiked({ product_id: product.id })
        .then((response) => {
          fetchLikedProducts();
        })
        .catch((error) => {
          toast.error("მოხდა შეცდომა", {
            position: "top-right",
          });
        });
    } else {
      console.log("Product is already in wishList.");
    }
  };

  const removeLikedProduct = (productId) => {
    removeProductFromLiked(productId)
      .then(() => {
        setLikedProducts((prevLikedProducts) =>
          prevLikedProducts.filter((product) => product.id !== productId)
        );
      })
      .catch((error) => {
        toast.error("მოხდა შეცდომა", {
          position: "top-right",
        });
      });
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
      {showLoginModal && (
        <LoginModal
          showModal={showLoginModal}
          handleClose={() => setShowLoginModal(false)}
        />
      )}
    </LikedProductsContext.Provider>
  );
};

export const useLikedProducts = () => useContext(LikedProductsContext);
