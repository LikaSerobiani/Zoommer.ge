import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getCartProducts,
  addCartProducts,
  removeCartProducts,
} from "../services/services";
import { toast } from "react-toastify";
import LoginModal from "../components/modals/Login";
import { useTranslation } from "react-i18next";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { t } = useTranslation("global");

  const fetchCartItems = () => {
    setLoading(true);

    const isAuthenticated = localStorage.getItem("accessToken");

    if (isAuthenticated) {
      getCartProducts()
        .then((response) => {
          setCartProducts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching cart items:", error);
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
      console.log("User is unauthorized. Not fetching cart products.");
      setCartProducts([]);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const addToCart = (product) => {
    const isAuthenticated = localStorage.getItem("accessToken");

    if (!isAuthenticated) {
      setShowLoginModal(true);
      return;
    }

    setLoading(true);

    addCartProducts({ product_id: product.id })
      .then(() => {
        toast.success(t("toastifyMessages.addToCart"), {
          position: "top-right",
        });
        fetchCartItems();
      })
      .catch((error) => {
        setError(error);
        toast.error("მოხდა შეცდომა", {
          position: "top-right",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const removeFromCart = (productId, removeAll) => {
    setLoading(true);

    removeCartProducts(productId, removeAll)
      .then(() => {
        setCartProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
        );
        toast.success(t("toastifyMessages.removeFromCart"), {
          position: "top-right",
        });
      })
      .catch((error) => {
        toast.error("მოხდა შეცდომა", {
          position: "top-right",
        });
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const value = {
    cartProducts,
    setCartProducts,
    fetchCartItems,
    addToCart,
    removeFromCart,
    loading,
    error,
  };
  return (
    <CartContext.Provider value={value}>
      {children}
      {showLoginModal && (
        <LoginModal
          showModal={showLoginModal}
          handleClose={() => setShowLoginModal(false)}
        />
      )}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
