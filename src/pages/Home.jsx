import React, { useState, useEffect } from "react";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import { getProducts } from "../services/services";

export default function Home() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();

      if (response.data && response.data.products) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <Categories />
      <Products products={products} />
    </div>
  );
}
