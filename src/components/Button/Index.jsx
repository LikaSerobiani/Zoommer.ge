/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export default function Button({ title, icon, onClick, className, type }) {
  const buttonClasses = `flex justify-center items-center w-[130px] rounded-[12px] cursor-pointer py-2.5 px-2.5 font-bold gap-[10px] text-[15px] ${className}`;

  return (
    <button className={buttonClasses} onClick={onClick} type={type}>
      {icon}
      {title}
    </button>
  );
}
