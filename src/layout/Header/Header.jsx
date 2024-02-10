/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Images/main-logo.svg";
import Search from "./Search";
import Button from "../../components/Button/Index";
// Icons
import CartIcon from "../../components/Icons/CartIcon";
import UserIcon from "../../components/Icons/UserIcon";
import DotsIcon from "../../components/Icons/DotsIcon";
import Login from "../../components/Modals/Login";
import Success from "../../components/Modals/Success";
import PhoneIcon from "../../components/Icons/PhoneIcon";

export default function Header() {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState();

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowSuccessModal(true);
  };

  const handleProfilePage = () => {
    navigate("/profile");
  };

  return (
    <header>
      <div className="bg-primary py-3">
        <div className="container flex items-center justify-between">
          <div className="flex gap-[10px]">
            <PhoneIcon />
            <span className="text-white font-bold text-[13px] flex cursor-pointer transition-transform transform-gpu hover:scale-110">
              *7007 / +995 (32) 2 60 30 60
            </span>
          </div>
          <div>dark and light mode</div>
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
                children="ნავიგაცია"
                icon={<DotsIcon />}
                className="bg-primary text-white"
              />
            </Link>
            {/* Search */}
            <Search />
            {/* Buttons */}
            <div className="flex gap-[18px]">
              <Link to="/cart">
                <Button
                  children="კალათა"
                  icon={<CartIcon />}
                  className="bg-white text-black"
                />
              </Link>
              {isLoggedIn ? (
                <Button
                  children="პროფილი"
                  icon={<UserIcon />}
                  className="bg-white text-black"
                  onClick={handleProfilePage}
                />
              ) : (
                <Button
                  children="შესვლა"
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

              <Success
                title="წარმატებული ავტორიზაცია"
                showModal={showSuccessModal}
                handleClose={() => setShowSuccessModal(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
