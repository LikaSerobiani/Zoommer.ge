/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export default function Button({ children, icon, onClick, className }) {
  const buttonClasses = `flex justify-center items-center w-[130px] rounded-[12px] cursor-pointer py-2.5 px-2.5 font-bold gap-[10px] text-[15px] ${className}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {icon}
      {children}
    </button>
  );
}
