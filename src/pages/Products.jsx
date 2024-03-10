import React, { useState, useEffect } from "react";
import Product from "../components/products/Product";
import { getProductsByCategory } from "../services/services";
import { useLocation } from "react-router-dom";

export default function ProductsPage() {
  const [productsData, setProductsData] = useState([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const category = queryParams.get("category");

  const handleFetchProducts = () => {
    getProductsByCategory(category)
      .then((response) => {
        const { products } = response.data;
        setProductsData(products);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    handleFetchProducts();
  }, [category]);

  return (
    <div className="flex flex-row container">
      {productsData?.length &&
        productsData.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </div>
  );
}
