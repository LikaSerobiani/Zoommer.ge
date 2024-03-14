import React from "react";
import PaymentForm from "../components/paymentForm/Index";
import { useLocation } from "react-router-dom";

export default function PaymentPage() {
  const location = useLocation();

  const productData = location.state ? location.state.productData : null;

  const { totalPrice, totalItems } = calculateTotal(productData);

  function calculateTotal(productData) {
    let totalPrice = 0;
    let totalItems = 0;

    if (productData?.id) {
      totalPrice = productData.salePrice
        ? productData.salePrice
        : productData.price;
      totalItems = 1;

      return { totalPrice, totalItems };
    } else {
      const { totalPrice, totalItems } = productData;
      return { totalPrice, totalItems };
    }
  }

  return (
    <div>
      <PaymentForm
        paymentParams={{
          totalPrice: productData ? totalPrice : productData?.totalPrice,
          totalItems: productData ? totalItems : productData?.totalItems,
        }}
      />
    </div>
  );
}
