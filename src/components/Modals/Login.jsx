/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState } from "react";
import Modal from "./Modal";
import Input from "../Input/Index";
import Button from "../Button/Index";
import Registration from "./Registration";
import { login } from "../../services/services";

const Login = ({ showModal, handleClose, onLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  const handleLogin = async () => {
    try {
      const response = login({
        email: email,
        password: password,
      });

      const { access_token, refresh_token } = response;

      localStorage.setItem("accessToken", access_token);
      onLoggedIn(true);
      handleClose(true);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Login Error:", error);
    }
  };
  const handleShowRegistrationModal = () => {
    setShowRegistrationModal(true);
  };

  const handleCloseRegistrationModal = () => {
    setShowRegistrationModal(false);
  };

  return (
    <>
      <Modal isModalOpen={showModal} onClose={handleClose}>
        <div className="flex justify-center flex-col gap-4">
          <h2 className="text-center text-2xl font-bold">ავტორიზაცია</h2>

          <div className="flex gap-4 flex-col items-center">
            <Input
              type="email"
              id="emailInput"
              placeholder="ელ.ფოსტა"
              value={email}
              onChange={(e) => setEmail(e)}
            />
            <Input
              type="password"
              placeholder="პაროლი"
              id="passwordInput"
              value={password}
              onChange={(e) => setPassword(e)}
            />
          </div>
          <div className="flex justify-end">
            <span
              className="cursor-pointer"
              onClick={handleShowRegistrationModal}
            >
              არ ხარ დარეგისტრირებული?
            </span>
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handleLogin}
              children="შესვლა"
              className="bg-primary text-white w-full"
            />
          </div>
        </div>
      </Modal>
      <Registration
        showModal={showRegistrationModal}
        handleClose={handleCloseRegistrationModal}
      />
    </>
  );
};

export default Login;
