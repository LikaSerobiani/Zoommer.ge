/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Input = ({ type, id, value, placeholder, onChange }) => {
  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    if (onChange) {
      onChange(inputValue);
    }
  };

  return (
    <input
      type={type || "text"}
      id={id}
      value={value}
      placeholder={placeholder}
      className="focus:outline-none font-bold text-base w-full bg-light-grey px-[16px] py-[16px] rounded-[16px]"
      onChange={handleInputChange}
    />
  );
};

export default Input;
