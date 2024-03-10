import React, { useState } from "react";
import Modal from "./Modal";
import Input from "../input/Index";
import Button from "../button/Index";
import { registration } from "../../services/services";
import Success from "./Success";
import Error from "./Error";

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

  const handleRegister = async () => {
    try {
      setErrors({});

      if (
        !firstName ||
        !lastName ||
        !email ||
        !password ||
        !phoneNumber ||
        !confirmPassword
      ) {
        setErrors({ message: "გთხოვთ შეავსოთ ყველა ველი" });
        return;
      }

      const errors = {};

      if (phoneNumber.length !== 9) {
        errors.phoneNumber = "ტელეფონის ნომერი უნდა იყოს 9 ციფრიანი";
      }

      if (password.length < 8) {
        errors.password = "პაროლი უნდა იყოს 8 სიმბოლოზე მეტი ან ტოლი";
      }
      if (password !== confirmPassword) {
        errors.confirmPassword = "პაროლი არასწორია";
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        errors.email = "ელფოსტა უნდა იყოს მოქმედი ელფოსტის მისამართი";
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
          <h2 className="text-center text-2xl font-bold">რეგისტრაცია</h2>

          {errors.message && (
            <div className="text-red-500 text-sm">{errors.message}</div>
          )}

          <div className="flex gap-4 flex-col items-center">
            <Input
              type="text"
              placeholder="სახელი"
              id="firstNameInput"
              value={firstName}
              onChange={(e) => setFirstName(e)}
            />
            <Input
              type="text"
              placeholder="გვარი"
              id="lastNameInput"
              value={lastName}
              onChange={(e) => setLastName(e)}
            />
            <Input
              type="email"
              placeholder="ელ.ფოსტა"
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
              placeholder="ტელეფონის ნომერი"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e)}
            />
            {errors.phoneNumber && (
              <div className="text-red-500 text-sm">{errors.phoneNumber}</div>
            )}
            <Input
              type="password"
              placeholder="პაროლი"
              id="passwordInput"
              value={password}
              onChange={(e) => setPassword(e)}
            />
            {errors.password && (
              <div className="text-red-500 text-sm">{errors.password}</div>
            )}
            <Input
              type="password"
              placeholder="დაადასტურეთ პაროლი"
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
              title="რეგისტრაცია"
              className="bg-primary text-white w-full"
              type="submit"
            />
          </div>
        </div>
      </Modal>
      <Success
        title="წარმატებული რეგისტრაცია"
        showModal={showSuccessModal}
        handleClose={() => setShowSuccessModal(false)}
      />
      <Error
        title="მომხმარებელი უკვე დარეგისტრირებულია"
        showModal={showErrorModal}
        handleClose={() => setShowErrorModal(false)}
      />
    </>
  );
};

export default Registration;
