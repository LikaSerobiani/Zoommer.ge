import React from "react";
import PaymentForm from "../components/paymentForm/Index";
import { useCart } from "../context/CartContext";
import { useLocation } from "react-router-dom";

export default function PaymentPage() {
  const { cartProducts } = useCart();
  const location = useLocation();
  const productData = location.state ? location.state.productData : null;

  const { totalPrice, totalItems } = calculateTotal();

  function calculateTotal() {
    let totalPrice = 0;
    let totalItems = 0;

    if (cartProducts.length > 0) {
      totalPrice = cartProducts.reduce(
        (total, product) => total + product.cartProduct.price * product.count,
        0
      );
      totalItems = cartProducts.reduce((total, item) => total + item.count, 0);
    } else if (productData) {
      totalPrice = productData.salePrice
        ? productData.salePrice
        : productData.price;
      totalItems = 1;
    }

    return { totalPrice, totalItems };
  }

  return (
    <div>
      {(cartProducts.length > 0 || productData) && (
        <PaymentForm paymentParams={{ totalPrice, totalItems }} />
      )}
    </div>
  );
}
