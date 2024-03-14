import React, { useState, useEffect } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import Button from "../button/Index";
import Success from "../modals/Success";
import { useNavigate } from "react-router-dom";
import { purchaseProducts } from "../../services/services";
import { useTranslation } from "react-i18next";

const PaymentForm = ({ paymentParams }) => {
  const [showLocationForm, setShowLocationForm] = useState(true);
  const [showCardForm, setShowCardForm] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [userLocation, setUserLocation] = useState("");
  const [userLocationError, setUserLocationError] = useState("");
  const { t } = useTranslation("global");
  const nav = useNavigate();

  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({});

  const currentYear = new Date().getFullYear() % 100;

  const handleLocationSubmit = (evt) => {
    evt.preventDefault();

    if (!userLocation) {
      setUserLocationError(t("payment.location"));
      return;
    }
    localStorage.setItem("userLocation", userLocation);
    setShowLocationForm(false);
    setShowCardForm(true);
  };

  useEffect(() => {
    const savedLocation = localStorage.getItem("userLocation");
    if (savedLocation) {
      setUserLocation(savedLocation);
      setShowLocationForm(false);
      setShowCardForm(true);
    }
  }, []);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
    setErrors({ ...errors, [name]: null });
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await purchaseProducts(paymentParams);

      console.log("Purchase data:", response.data);
      setShowSuccessModal(true);

      setState({
        number: "",
        expiry: "",
        cvc: "",
        name: "",
        focus: "",
      });

      setTimeout(() => {
        nav("/");
      }, 3000);
    } catch (error) {
      console.error("Error processing payment:", error);
      setErrorMessage(
        "An error occurred while processing your payment. Please try again later."
      );
    }
  };

  const validationMessages = {
    required: t("payment.validation.required"),
    invalidCardNumber: t("payment.validation.invalidCardNumber"),
    invalidName: t("payment.validation.invalidName"),
    invalidExpiryDate: t("payment.validation.invalidExpiryDate"),
    expiryYearRange: t("payment.validation.expiryYearRange", {
      minYear: currentYear,
      maxYear: currentYear + 10,
    }),
    invalidExpiryMonth: t("payment.validation.invalidExpiryMonth"),
    invalidCVC: t("payment.validation.invalidCVC"),
  };

  // validations
  const validateForm = () => {
    const errors = {};

    if (!state.number) {
      errors.number = validationMessages.required;
    } else if (!/^\d{16}$/.test(state.number)) {
      errors.number = validationMessages.invalidCardNumber;
    }

    if (!state.name) {
      errors.name = validationMessages.required;
    }

    if (!state.expiry) {
      errors.expiry = validationMessages.required;
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(state.expiry)) {
      errors.expiry = validationMessages.invalidExpiryDate;
    } else {
      const [month, year] = state.expiry.split("/");
      if (
        parseInt(year, 10) < currentYear ||
        parseInt(year, 10) > currentYear + 10
      ) {
        errors.expiry = validationMessages.expiryYearRange;
      }
      if (parseInt(month, 10) < 1 || parseInt(month, 10) > 12) {
        errors.expiry = validationMessages.invalidExpiryMonth;
      }
    }

    if (!state.cvc) {
      errors.cvc = validationMessages.required;
    } else if (!/^\d{3,4}$/.test(state.cvc)) {
      errors.cvc = validationMessages.invalidCVC;
    }

    return errors;
  };

  return (
    <div className="container">
      <div>
        <div className="flex items-center justify-center">
          {showLocationForm && (
            <form
              onSubmit={handleLocationSubmit}
              className="flex flex-col gap-y-[10px] items-center w-[500px] h-[37vh]"
            >
              <label htmlFor="location" className="font-bold text-[18px]">
                {t("payment.location")}
              </label>
              <input
                type="text"
                id="location"
                value={userLocation}
                onChange={(e) => {
                  setUserLocation(e.target.value);
                  setUserLocationError("");
                }}
                className="focus:outline-none font-bold text-base w-full bg-light-grey px-[16px] py-[16px] rounded-[16px]"
              />
              {userLocationError && (
                <div className="error-message">{userLocationError}</div>
              )}
              <Button
                type="submit"
                title={t("buttons.submit")}
                className="bg-primary text-white w-full cursor-pointer"
              />
            </form>
          )}
        </div>
        {showCardForm && (
          <div className="flex flex-col gap-5 items-center">
            <>
              <Cards
                number={state.number}
                expiry={state.expiry}
                cvc={state.cvc}
                name={state.name}
                focused={state.focus}
              />
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-y-[10px] w-[280px]"
              >
                <input
                  type="number"
                  name="number"
                  placeholder="Card Number"
                  value={state.number}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  className={`border ${
                    errors.number ? "border-red-500" : "border-gray-500"
                  } px-4 py-2 rounded-md`}
                />

                {errors.number && (
                  <div className="error-message">{errors.number}</div>
                )}
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={state.name}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  className={`border ${
                    errors.number ? "border-red-500" : "border-gray-500"
                  } px-4 py-2 rounded-md`}
                />
                {errors.name && (
                  <div className="error-message">{errors.name}</div>
                )}
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY Expiry"
                  value={state.expiry}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  className={`border ${
                    errors.number ? "border-red-500" : "border-gray-500"
                  } px-4 py-2 rounded-md`}
                />
                {errors.expiry && (
                  <div className="error-message">{errors.expiry}</div>
                )}
                <input
                  type="number"
                  name="cvc"
                  placeholder="CVC"
                  value={state.cvc}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  className={`border ${
                    errors.number ? "border-red-500" : "border-gray-500"
                  } px-4 py-2 rounded-md`}
                />
                {errors.cvc && (
                  <div className="error-message">{errors.cvc}</div>
                )}
                <Button
                  type="submit"
                  title={t("buttons.submit")}
                  className="bg-primary text-white w-full"
                />
              </form>
              {successMessage && (
                <div className="success-message">{successMessage}</div>
              )}
              {errorMessage && (
                <div className="error-message">{errorMessage}</div>
              )}
            </>
          </div>
        )}
        {showSuccessModal && (
          <Success
            title={t("payment.successMessage")}
            showModal={showSuccessModal}
            handleClose={() => setShowSuccessModal(false)}
          />
        )}
      </div>
    </div>
  );
};

export default PaymentForm;
