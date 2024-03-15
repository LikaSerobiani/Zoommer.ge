import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeSwitcher";
import { useCart } from "../context/Cart";
import useScrollDirection from "../hooks/UseScrollDirection";

import Search from "../components/search/Index";
import Button from "../components/button/Index";

// Icons
import Logo from "../assets/Images/main-logo.svg";
import CartIcon from "../components/icons/CartIcon";
import UserIcon from "../components/icons/UserIcon";
import DotsIcon from "../components/icons/DotsIcon";
import Login from "../components/modals/Login";
import PhoneIcon from "../components/icons/PhoneIcon";

export default function Header() {
  const navigate = useNavigate();
  const { cartProducts } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState();
  const scrollDirection = useScrollDirection();
  const { t } = useTranslation("global");
  const { isDarkMode, toggleTheme } = useTheme();

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleProfilePage = () => {
    navigate("/profile");
  };

  return (
    <header
      className={`sticky ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } transition-all duration-500  pb-[50px] z-50`}
    >
      <div className="py-3 bg-primary">
        <div className="container flex items-center justify-between ">
          <div className="flex gap-[10px]">
            <PhoneIcon />
            <span className="text-white font-bold text-[13px] flex cursor-pointer transition-transform transform-gpu hover:scale-110">
              *7007 / +995 (32) 2 60 30 60
            </span>
          </div>
          <div>
            <button
              onClick={toggleTheme}
              className="bg-white hover:bg-primary text-black rounded-[20px] text-[13px] px-2 font-bold"
            >
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`w-[100%] h-[70px] flex justify-center ${
          isDarkMode ? "dark:bg-black text-white" : "bg-light-grey text-black"
        }`}
      >
        <div className="container flex flex-row items-center justify-between">
          {/* Logo */}
          <div>
            <Link to="/">
              <img
                src={Logo}
                alt="Zoommer logo"
                className="lg:w-[151px] h-[40px] cursor-pointer sm:w-[120px] md:w-[130px]"
              />
            </Link>
          </div>

          <div className="flex gap-[20px]">
            {/* Navigation button */}
            <Link to="/categories">
              <Button
                title={t("header.navigation")}
                icon={<DotsIcon />}
                className="text-white bg-primary sm:w-[110px] sm:gap-1 lg:w-[130px] lg:gap-3"
              />
            </Link>
            {/* Search */}
            <Search />
            {/* Buttons */}
            <div className="flex gap-1">
              <Link to="/cart">
                <Button
                  title={t("header.cart")}
                  icon={
                    <CartIcon
                      width="20px"
                      height="20px"
                      color={isDarkMode ? "#ffffff" : "#000000"}
                    />
                  }
                  className={`sm:w-[80px] lg:w-[130px] ${
                    isDarkMode
                      ? "dark:bg-primary text-white"
                      : "bg-white text-black"
                  }`}
                />
              </Link>

              {cartProducts.length > 0 && (
                <span
                  className={`rounded-full relative top-[-10px] right-[20px] w-6 h-6 text-center ${
                    isDarkMode ? "bg-white text-black" : "bg-primary text-white"
                  }`}
                >
                  {cartProducts.reduce((total, item) => total + item.count, 0)}
                </span>
              )}

              {localStorage.getItem("accessToken") ? (
                <Button
                  title={t("header.profile")}
                  icon={<UserIcon color={isDarkMode ? "#ffffff" : "#000000"} />}
                  className={`sm:w-[90px] lg:w-[130px] ${
                    isDarkMode
                      ? "dark:bg-primary text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={handleProfilePage}
                />
              ) : (
                <Button
                  title={t("header.logIn")}
                  icon={<UserIcon color={isDarkMode ? "#ffffff" : "#000000"} />}
                  className={`sm:w-[100px] lg:w-[130px] ${
                    isDarkMode
                      ? "dark:bg-primary text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={handleShow}
                />
              )}
              <Login
                showModal={showModal}
                handleClose={handleClose}
                onLoggedIn={handleLogin}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
