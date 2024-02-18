/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function Category({ category, onSelectCategory, isSelected }) {
  const handleClick = () => {
    onSelectCategory(category);
  };

  return (
    <div
      className={`cursor-pointer font-bold text-secondary ${
        isSelected ? "bg-black text-white" : ""
      } p-2 rounded-md`}
      onClick={handleClick}
    >
      {category.name}
    </div>
  );
}
