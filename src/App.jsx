/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Layouts
import Header from "./layout/Header";
import Footer from "./layout/Footer";
// Pages
import HomePage from "./pages/Home";
import ProfilePage from "./pages/Profile";
import CategoriesPage from "./pages/Categories";
import Payment from "./pages/Payment";
import AboutUs from "./pages/navigation/AboutUs";
import CorporateSales from "./pages/navigation/CorporateSales";
import TradeIn from "./pages/navigation/TradeIn";
import PaymentMethod from "./pages/payments/PaymentMethods";
import ReturnItem from "./pages/payments/ReturnItem";
import CartPage from "./pages/Cart";
import ProductPage from "./pages/Product";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/product/:cardId" element={<ProductPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/corporate-sales" element={<CorporateSales />} />
          <Route path="/trade-in" element={<TradeIn />} />
          <Route path="/payment-methods" element={<PaymentMethod />} />
          <Route path="/return-item" element={<ReturnItem />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}
