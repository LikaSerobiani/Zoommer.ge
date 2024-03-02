/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function Category({ category }) {
  return (
    <div className="cursor-pointer px-3 py-3 hover:bg-white border-b border-white">
      <span className="font-black text-black text-[14px]">{category.name}</span>
    </div>
  );
}
