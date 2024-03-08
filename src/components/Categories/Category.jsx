/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

export default function Category({ category }) {
  return (
    <Link to={"/products"}>
      <div className="cursor-pointer px-3 py-3 hover:bg-white border-b border-white flex items-center gap-2">
        <img src={category.image} />
        <span className="font-black text-black text-[14px]">
          {category.name}
        </span>
      </div>
    </Link>
  );
}
