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
import AboutUs from "./pages/navigation/AboutUs";
import TermsAndConditions from "./pages/navigation/TermsAndConditions";
import CorporateSales from "./pages/navigation/CorporateSales";
import DeliveryService from "./pages/navigation/DeliveryService";
import Career from "./pages/navigation/Career";
import TradeIn from "./pages/navigation/TradeIn";
import PaymentMethod from "./pages/payments/PaymentMethods";
import Warranty from "./pages/payments/Warranty";
import Installment from "./pages/payments/Installment";
import ReturnItem from "./pages/payments/ReturnItem";
import HowToBuyOnline from "./pages/payments/HowToBuyOnline";
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
          <Route path="/about-us" element={<AboutUs />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/corporate-sales" element={<CorporateSales />} />
          <Route path="/delivery-service" element={<DeliveryService />} />
          <Route path="/career" element={<Career />} />
          <Route path="/trade-in" element={<TradeIn />} />
          <Route path="/payment-methods" element={<PaymentMethod />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/installment" element={<Installment />} />
          <Route path="/return-item" element={<ReturnItem />} />
          <Route path="/how-to-buy-online" element={<HowToBuyOnline />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}
