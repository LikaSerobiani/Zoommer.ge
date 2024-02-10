/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// RegistrationModal.js
import React, { useState } from "react";
import axios from "axios";
import Modal from "./Modal";
import Input from "../Input/Index";
import Button from "../Button/Index";

const Registration = ({ showModal, handleClose, onRegistered }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/auth/register`,
        {
          firstName,
          lastName,
          email,
          phoneNumber,
          password,
        }
      );

      console.log(response);
      onRegistered(true);
      handleClose(true);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setPhoneNumber("");
    } catch (error) {
      console.error("Registration Error:", error);
    }
  };

  return (
    <Modal isModalOpen={showModal} onClose={handleClose}>
      <div className="flex justify-center flex-col gap-4">
        <h2 className="text-center text-2xl font-bold">რეგისტრაცია</h2>

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
          <Input
            type="text"
            id="phoneNumberInput"
            placeholder="ტელეფონის ნომერი"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e)}
          />
          <Input
            type="password"
            placeholder="პაროლი"
            id="passwordInput"
            value={password}
            onChange={(e) => setPassword(e)}
          />
        </div>

        <div className="flex justify-center">
          <Button
            onClick={handleRegister}
            children="რეგისტრაცია"
            className="bg-primary text-white w-full"
          />
        </div>
      </div>
    </Modal>
  );
};

export default Registration;
