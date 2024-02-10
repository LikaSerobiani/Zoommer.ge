/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function Category({ category }) {
  return (
    <div className="cursor-pointer font-bold text-secondary">
      <h2>{category.name}</h2>
    </div>
  );
}
