/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState } from "react";
import Modal from "./Modal";
import Input from "../input/Index";
import Button from "../button/Index";
import Registration from "./Registration";
import { login } from "../../services/services";
import Success from "./Success";
import Error from "./Error";
import { useTranslation } from "react-i18next";

const Login = ({ showModal, handleClose, onLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errors, setErrors] = useState({});
  const { t } = useTranslation("global");

  const validationMessage = {
    required: t("modals.validation.required"),
  };
  const handleLogin = async () => {
    try {
      setErrors({});

      if (!email || !password) {
        setErrors({ message: validationMessage.required });
        return;
      }

      const response = await login({
        email: email,
        password: password,
      });

      const { access_token, refresh_token } = response.data;
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("refreshToken", refresh_token);

      onLoggedIn(true);
      handleClose();
      setEmail("");
      setPassword("");

      if (response.status === 201) {
        setShowSuccessModal(true);
      } else {
        setShowErrorModal(true);
      }
    } catch (error) {
      setShowErrorModal(true);
      handleClose();
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
          <h2 className="text-center text-2xl font-bold">
            {t("modals.logInModal")}
          </h2>
          {errors.message && (
            <div className="text-red-500 text-sm">{errors.message}</div>
          )}
          <div className="flex gap-4 flex-col items-center">
            <Input
              type="email"
              id="emailInput"
              placeholder={t("placeholders.email")}
              value={email}
              onChange={(e) => setEmail(e)}
            />

            <Input
              type="password"
              placeholder={t("placeholders.password")}
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
              {t("modals.notRegistered")}
            </span>
          </div>
          <div className="flex justify-center" onClick={handleLogin}>
            <Button
              title={t("buttons.signIn")}
              className="bg-primary text-white w-full"
            />
          </div>
        </div>
      </Modal>
      <Registration
        showModal={showRegistrationModal}
        handleClose={handleCloseRegistrationModal}
      />
      <Success
        title={t("modals.successMessage")}
        showModal={showSuccessModal}
        handleClose={() => setShowSuccessModal(false)}
      />
      <Error
        title={t("modals.errorMessage")}
        showModal={showErrorModal}
        handleClose={() => setShowErrorModal(false)}
      />
    </>
  );
};

export default Login;
