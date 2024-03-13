/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Search from "../components/search/Index";
import Button from "../components/button/Index";

// Icons
import Logo from "../assets/Images/main-logo.svg";
import CartIcon from "../components/icons/CartIcon";
import UserIcon from "../components/icons/UserIcon";
import DotsIcon from "../components/icons/DotsIcon";
import Login from "../components/modals/Login";
import PhoneIcon from "../components/icons/PhoneIcon";
import useScrollDirection from "../hooks/UseScrollDirection";
import { useCart } from "../context/CartContext";

export default function Header() {
  const navigate = useNavigate();
  const { cartProducts } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState();
  const scrollDirection = useScrollDirection();
  const { t } = useTranslation("global");

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
      } transition-all duration-500 pb-[50px] z-50`}
    >
      <div className="bg-primary py-3">
        <div className="container flex items-center justify-between">
          <div className="flex gap-[10px]">
            <PhoneIcon />
            <span className="text-white font-bold text-[13px] flex cursor-pointer transition-transform transform-gpu hover:scale-110">
              *7007 / +995 (32) 2 60 30 60
            </span>
          </div>
        </div>
      </div>

      <div className="bg-light-grey w-[100%] h-[70px] flex justify-center">
        <div className="container flex flex-row items-center justify-between">
          {/* Logo */}
          <div>
            <Link to="/">
              <img
                src={Logo}
                alt="Zoommer logo"
                className="w-[151px] h-[40px] cursor-pointer"
              />
            </Link>
          </div>

          <div className="flex gap-[20px]">
            {/* Navigation button */}
            <Link to="/categories">
              <Button
                title={t("header.navigation")}
                icon={<DotsIcon />}
                className="bg-primary text-white"
              />
            </Link>
            {/* Search */}
            <Search />
            {/* Buttons */}
            <div className="flex gap-[5px]">
              <Link to="/cart">
                <Button
                  title={t("header.cart")}
                  icon={<CartIcon width="24px" height="24px" />}
                  className="bg-white text-black"
                />
              </Link>

              {cartProducts.length > 0 && (
                <span className="bg-primary rounded-full text-white relative top-[-10px] right-[20px] w-6 h-6 text-center">
                  {cartProducts.reduce((total, item) => total + item.count, 0)}
                </span>
              )}

              {localStorage.getItem("accessToken") ? (
                <Button
                  title={t("header.profile")}
                  icon={<UserIcon />}
                  className="bg-white text-black"
                  onClick={handleProfilePage}
                />
              ) : (
                <Button
                  title={t("header.logIn")}
                  icon={<UserIcon />}
                  className="bg-white text-black"
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
