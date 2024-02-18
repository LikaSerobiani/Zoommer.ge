// Categories.js
import React, { useState, useEffect } from "react";
import Category from "./Category";
import { getCategories } from "../../services/services";

export default function Categories({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

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

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className="flex flex-row gap-[65px] font-medium justify-center mt-[20px]">
      {categories.map((category) => (
        <Category
          key={category.id}
          category={category}
          onSelectCategory={handleSelectCategory}
          isSelected={selectedCategory && selectedCategory.id === category.id}
        />
      ))}
    </div>
  );
}
