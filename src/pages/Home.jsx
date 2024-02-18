import React, { useState, useEffect } from "react";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import { getProducts } from "../services/services";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
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

  const onSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter(
        (product) => product.category_name === selectedCategory.name
      )
    : products;

  return (
    <div className="container">
      <Categories onSelectCategory={onSelectCategory} />
      <Products products={filteredProducts} />
    </div>
  );
}
