/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
import React from "react";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";

export default function Home() {
  return (
    <div className="container">
      <Categories />
      <Products />
    </div>
  );
}
