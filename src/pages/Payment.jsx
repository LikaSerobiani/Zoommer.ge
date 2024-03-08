/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Button from "../components/button/Index";
import { getPurchases } from "../services/services";

export default function PaymentPage() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [cardNumberError, setCardNumberError] = useState("");
  const [cardHolderError, setCardHolderError] = useState("");
  const [expiryMonthError, setExpiryMonthError] = useState("");
  const [expiryYearError, setExpiryYearError] = useState("");
  const [cvcError, setCvcError] = useState("");

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 16) {
      setCardNumber(value);
      setCardNumberError(
        value.length !== 16 ? "Card number must be 16 digits" : ""
      );
    }
  };

  const handleCardHolderChange = (e) => {
    setCardHolder(e.target.value);
    setCardHolderError(
      e.target.value.trim() === "" ? "Cardholder name is required" : ""
    );
  };

  const handleExpiryMonthChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 2) {
      const month = Math.min(parseInt(value, 10), 12)
        .toString()
        .padStart(2, "0");
      setExpiryMonth(month);
      setExpiryMonthError(
        value.length !== 2 || parseInt(value, 10) > 12
          ? "Expiry month must be between 01 and 12"
          : ""
      );
    }
  };

  const handleExpiryYearChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 2) {
      setExpiryYear(value);
      setExpiryYearError(
        value.length !== 2 ? "Expiry year must be 2 digits" : ""
      );
    }
  };

  const handleCvcChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 3) {
      setCvc(value);
      setCvcError(value.length !== 3 ? "CVC must be 3 digits" : "");
    }
  };

  const handleSubmit = async () => {
    if (cardNumber.length !== 16) {
      setCardNumberError("Card number must be 16 digits");
      return;
    }
    if (cardHolder.trim() === "") {
      setCardHolderError("Cardholder name is required");
      return;
    }
    if (expiryMonth.length !== 2 || parseInt(expiryMonth, 10) > 12) {
      setExpiryMonthError("Expiry month must be between 01 and 12");
      return;
    }
    if (expiryYear.length !== 2) {
      setExpiryYearError("Expiry year must be 2 digits");
      return;
    }
    if (cvc.length !== 3) {
      setCvcError("CVC must be 3 digits");
      return;
    }

    setCardNumberError("");
    setCardHolderError("");
    setExpiryMonthError("");
    setExpiryYearError("");
    setCvcError("");
    try {
      const response = await getPurchases();

      console.log("Purchase data:", response.data);

      setSuccessMessage("You bought successfully!");

      // Clear form fields
      setCardNumber("");
      setCardHolder("");
      setExpiryMonth("");
      setExpiryYear("");
      setCvc("");
      setSuccessMessage("You bought successfully!");
    } catch (error) {
      console.error("Error processing payment:", error);
      // Handle error scenario
      setErrorMessage(
        "An error occurred while processing your payment. Please try again later."
      );
    }
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };
  return (
    <div className="custom-container">
      <div className="mt-10">
        <h1 className="text-2xl font-bold text-orange-600 border-b border-gray-200 pb-2 mb-4">
          გადაიხადე აქ
        </h1>
        <div className="max-w-md mx-auto bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="text-center">
            <span className="text-white font-serif font-bold text-xl">
              VISA
            </span>
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="cardNumber"
            >
              Card Number
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline ${
                cardNumberError ? "border-red-500" : ""
              }`}
              id="cardNumber"
              type="text"
              placeholder="XXXX XXXX XXXX XXXX"
              value={cardNumber}
              onChange={handleCardNumberChange}
            />
            {cardNumberError && (
              <p className="text-red-500 text-xs italic">{cardNumberError}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="cardHolder"
            >
              Cardholder Name
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline ${
                cardHolderError ? "border-red-500" : ""
              }`}
              id="cardHolder"
              type="text"
              placeholder="Full Name"
              value={cardHolder}
              onChange={handleCardHolderChange}
            />
            {cardHolderError && (
              <p className="text-red-500 text-xs italic">{cardHolderError}</p>
            )}
          </div>
          <div className="flex">
            <div className="w-1/2 mr-2">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="expiryMonth"
              >
                Expiry Month
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline ${
                  expiryMonthError ? "border-red-500" : ""
                }`}
                id="expiryMonth"
                type="text"
                placeholder="MM"
                value={expiryMonth}
                onChange={handleExpiryMonthChange}
              />
              {expiryMonthError && (
                <p className="text-red-500 text-xs italic">
                  {expiryMonthError}
                </p>
              )}
            </div>
            <div className="w-1/2 ml-2">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="expiryYear"
              >
                Expiry Year
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline ${
                  expiryYearError ? "border-red-500" : ""
                }`}
                id="expiryYear"
                type="text"
                placeholder="YY"
                value={expiryYear}
                onChange={handleExpiryYearChange}
              />
              {expiryYearError && (
                <p className="text-red-500 text-xs italic">{expiryYearError}</p>
              )}
            </div>
          </div>
          <div className="mb-4 mt-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="cvc"
            >
              CVC
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline ${
                cvcError ? "border-red-500" : ""
              }`}
              id="cvc"
              type="text"
              placeholder="XXX"
              value={cvc}
              onChange={handleCvcChange}
            />
            {cvcError && (
              <p className="text-red-500 text-xs italic">{cvcError}</p>
            )}
          </div>
          {successMessage && (
            <p className="text-green-500 text-sm font-bold">{successMessage}</p>
          )}
          <Button
            className="bg-[#1f2028] hover:bg-gray-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSubmit}
          >
            გადახდა
          </Button>
        </div>
      </div>
    </div>
  );
}
