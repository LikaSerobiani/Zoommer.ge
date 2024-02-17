/* eslint-disable no-unused-vars */
import React from "react";

import { useState, useEffect } from "react";
import Category from "./Category";
import { getCategories } from "../../services/services";

export default function Categories() {
  const [categories, setCategories] = useState([]);

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

  return (
    <div className="flex flex-row gap-[65px] font-medium justify-center mt-[20px]">
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
}
