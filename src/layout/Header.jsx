/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Search from "../components/search/Index";
import Button from "../components/button/Index";

// icons
import Logo from "../assets/Images/main-logo.svg";
import CartIcon from "../components/icons/CartIcon";
import UserIcon from "../components/icons/UserIcon";
import DotsIcon from "../components/icons/DotsIcon";
import Login from "../components/modals/Login";
import PhoneIcon from "../components/icons/PhoneIcon";
import useScrollDirection from "../hooks/UseScrollDirection";
// import { useCart } from "../context/CartContext";

export default function Header() {
  const navigate = useNavigate();
  // const { cartCount } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState();
  const scrollDirection = useScrollDirection();

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
      } transition-all duration-500 z-50 pb-[50px]`}
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
                title="ნავიგაცია"
                icon={<DotsIcon />}
                className="bg-primary text-white"
              />
            </Link>
            {/* Search */}
            <Search />
            {/* Buttons */}
            <div className="flex gap-[18px]">
              <Link to="/cart" className="relative">
                <Button
                  title="კალათა"
                  icon={<CartIcon width="24px" height="24px" />}
                  className="bg-white text-black"
                />

                {/* <span className="bg-primary text-white rounded-full absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center z-10">
                  {cartCount}
                </span> */}
              </Link>

              {localStorage.getItem("accessToken") ? (
                <Button
                  title="პროფილი"
                  icon={<UserIcon />}
                  className="bg-white text-black"
                  onClick={handleProfilePage}
                />
              ) : (
                <Button
                  title="შესვლა"
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
