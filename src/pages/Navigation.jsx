import React, { useState, useEffect } from "react";
import Category from "../components/categories/Category";
import { getCategories, getProducts } from "../services/services";
import { useNavigate } from "react-router-dom";
import Slider from "../components/slider/DefaultSlider";

export default function Categories() {
  const [allProducts, setAllProducts] = useState([]);

  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      // Fetch all products
      const allProductsResponse = await getProducts();
      if (allProductsResponse.data.products) {
        setAllProducts(allProductsResponse.data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSelectCategory = async (categoryName) => {
    navigate(`/products?categoryName=${categoryName}`);
  };

  return (
    <div className="container">
      <div className="border-b-[2px] border-light-grey pb-[30px] mb-[30px]">
        <h1 className="font-bold text-[18px] text-black leading-6">
          კატეგორიები
        </h1>
      </div>
      <div className="flex justify-between rounded-[12px]">
        {categories.map((category) => (
          <Category
            key={category.id}
            category={category}
            onSelectCategory={handleSelectCategory}
          />
        ))}
      </div>
      <Slider
        title="იქნებ აქაც მოგეძებნა სასურველი პროდუქტი?"
        products={allProducts}
      />
    </div>
  );
}
