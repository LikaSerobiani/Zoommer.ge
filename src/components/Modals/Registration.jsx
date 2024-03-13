import React, { useState } from "react";
import Modal from "./Modal";
import Input from "../input/Index";
import Button from "../button/Index";
import { registration } from "../../services/services";
import Success from "./Success";
import Error from "./Error";
import { useTranslation } from "react-i18next";

const Registration = ({ showModal, handleClose, onRegistered }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const { t } = useTranslation("global");

  const handleRegister = async () => {
    try {
      setErrors({});

      const validationMessages = {
        required: t("modals.validation.required"),
        phoneNumberLengthErrorMessage: t(
          "modals.registration.validation.phoneNumberLength"
        ),
        passwordLengthErrorMessage: t(
          "modals.registration.validation.passwordLength"
        ),
        confirmPasswordErrorMessage: t(
          "modals.registration.validation.confirmPassword"
        ),
        emailFormatErrorMessage: t(
          "modals.registration.validation.emailFormat"
        ),
      };

      if (
        !firstName ||
        !lastName ||
        !email ||
        !password ||
        !phoneNumber ||
        !confirmPassword
      ) {
        setErrors({
          message: validationMessages.required,
        });
        return;
      }

      const errors = {};

      if (phoneNumber.length !== 9) {
        errors.phoneNumber = validationMessages.phoneNumberLengthErrorMessage;
      }

      if (password.length < 8) {
        errors.password = validationMessages.passwordLengthErrorMessage;
      }
      if (password !== confirmPassword) {
        errors.confirmPassword = validationMessages.confirmPasswordErrorMessage;
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        errors.email = validationMessages.emailFormatErrorMessage;
      }

      if (Object.keys(errors).length > 0) {
        setErrors(errors);
        return;
      }

      const response = await registration({
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        email,
        password,
      });

      if (response.status === 201) {
        setShowSuccessModal(true);
        handleClose();
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setPhoneNumber("");
      } else if (response.status === 400) {
        const errorMessage = response.message[0].message;
        setErrors({ phoneNumber: errorMessage });
        setShowErrorModal(true);
        handleClose();
      }
    } catch (error) {
      console.error("Registration Error:", error);
      setShowErrorModal(true);
    }
  };

  return (
    <>
      <Modal isModalOpen={showModal} onClose={handleClose}>
        <div className="flex justify-center flex-col gap-4">
          <h2 className="text-center text-2xl font-bold">
            {t("modals.registrationModal")}
          </h2>

          {errors.message && (
            <div className="text-red-500 text-sm">{errors.message}</div>
          )}

          <div className="flex gap-4 flex-col items-center">
            <Input
              type="text"
              placeholder={t("placeholders.firstName")}
              id="firstNameInput"
              value={firstName}
              onChange={(e) => setFirstName(e)}
            />
            <Input
              type="text"
              placeholder={t("placeholders.lastName")}
              id="lastNameInput"
              value={lastName}
              onChange={(e) => setLastName(e)}
            />
            <Input
              type="email"
              placeholder={t("placeholders.email")}
              id="emailInput"
              value={email}
              onChange={(e) => setEmail(e)}
            />
            {errors.email && (
              <div className="text-red-500 text-sm">{errors.email}</div>
            )}
            <Input
              type="text"
              id="phoneNumberInput"
              placeholder={t("placeholders.phoneNumber")}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e)}
            />
            {errors.phoneNumber && (
              <div className="text-red-500 text-sm">{errors.phoneNumber}</div>
            )}
            <Input
              type="password"
              placeholder={t("placeholders.password")}
              id="passwordInput"
              value={password}
              onChange={(e) => setPassword(e)}
            />
            {errors.password && (
              <div className="text-red-500 text-sm">{errors.password}</div>
            )}
            <Input
              type="password"
              placeholder={t("placeholders.repeatPassword")}
              id="confirmPasswordInput"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e)}
            />
            {errors.confirmPassword && (
              <div className="text-red-500 text-sm">
                {errors.confirmPassword}
              </div>
            )}
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handleRegister}
              title={t("modals.registrationModal")}
              className="bg-primary text-white w-full"
              type="submit"
            />
          </div>
        </div>
      </Modal>
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

export default Registration;
