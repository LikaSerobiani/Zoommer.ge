import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (product) => {
    const isProductInCart = cartProducts.some((p) => p.id === product.id);

    if (!isProductInCart) {
      setCartProducts((prevProducts) => [...prevProducts, product]);
    }
  };

  const removeFromCart = (productId) => {
    const isItemInCart = cartProducts.find(
      (product) => product.id === productId
    );

    if (isItemInCart.count === 1) {
      setCartProducts(
        cartProducts.filter((product) => product.id !== productId)
      );
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === productId
            ? { ...product, count: product.count - 1 }
            : product
        )
      );
    }
  };

  return (
    <CartContext.Provider value={{ cartProducts, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
