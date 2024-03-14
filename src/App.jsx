/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Layouts
import Header from "./layout/Header";
import Footer from "./layout/Footer";
// Pages
import HomePage from "./pages/Home";
import ProfilePage from "./pages/Profile";
import NavigationPage from "./pages/Navigation";
import Payment from "./pages/Payment";
import AboutUs from "./pages/navigation/AboutUs";
import CorporateSales from "./pages/navigation/CorporateSales";
import PaymentMethod from "./pages/payments/PaymentMethods";
import CartPage from "./pages/Cart";
import ProductPage from "./pages/Product";
import ProductsPage from "./pages/Products";
import { CartProvider } from "./context/Cart";
import { LikedProductsProvider } from "./context/LikedProducts";
import { ThemeProvider } from "./context/ThemeSwitcher.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <LikedProductsProvider>
        {" "}
        <CartProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/product/:productId" element={<ProductPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/categories" element={<NavigationPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/corporate-sales" element={<CorporateSales />} />
              <Route path="/payment-methods" element={<PaymentMethod />} />
            </Routes>
            <Footer />
          </Router>
        </CartProvider>
      </LikedProductsProvider>
    </ThemeProvider>
  );
}
