/* eslint-disable no-unused-vars */
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Category from "./Category";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/product-category`
      );
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-row gap-[65px] font-medium justify-center mt-[20px]">
      {categories.length === 0 ? (
        <p className="font-bold flex justify-center">Loading...</p>
      ) : (
        categories.map((category) => (
          <Category key={category.id} category={category} />
        ))
      )}
    </div>
  );
}
