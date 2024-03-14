import React from "react";
import Categories from "../components/categories/Categories";
import Products from "../components/products/Products";
import MainSlider from "../components/slider/Main";

export default function Home() {
  return (
    <div className="container">
      <div className="flex gap-[65px]">
        <Categories />
        <MainSlider />
      </div>
      <Products />
    </div>
  );
}
