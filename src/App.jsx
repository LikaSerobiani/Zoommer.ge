/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Layouts
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer";
// Pages
import HomePage from "./pages/Home";
import ProfilePage from "./pages/Profile";
import CategoriesPage from "./pages/Categories";
import AboutUs from "./pages/Navigation/AboutUs";
import TermsAndConditions from "./pages/Navigation/TermsAndConditions";
import CorporateSales from "./pages/Navigation/CorporateSales";
import DeliveryService from "./pages/Navigation/DeliveryService";
import Career from "./pages/Navigation/Career";
import TradeIn from "./pages/Navigation/TradeIn";
import PaymentMethod from "./pages/Payments/PaymentMethods";
import Warranty from "./pages/Payments/Warranty";
import Installment from "./pages/Payments/Installment";
import ReturnItem from "./pages/Payments/ReturnItem";
import HowToBuyOnline from "./pages/Payments/HowToBuyOnline";
import CartPage from "./pages/Cart";
import ProductPage from "./pages/Product";
// import { createContext } from "react";

// export const ProductsContext = createContext(null);

export default function App() {
  // const storedProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];

  // const [products, setProducts] = useState(storedProducts);
  // const [productsLength, setProductsLength] = useState(products.length);
  return (
    // <ProductsContext.Provider
    //   value={{ products, setProducts, productsLength, setProductsLength }}
    // >
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/product/:cardId" element={<ProductPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
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
    // </ProductsContext.Provider>
  );
}
