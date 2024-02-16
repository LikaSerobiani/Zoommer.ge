/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import { getProducts } from "../services/services";
export default function Home() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = getProducts();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <Categories />
      <Products products={products} />
    </div>
  );
}
