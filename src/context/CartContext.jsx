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

  return (
    <CartContext.Provider value={{ cartProducts, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
