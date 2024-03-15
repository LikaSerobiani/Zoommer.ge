import React, { useState, useEffect } from "react";
import Category from "./Category";
import { getCategories } from "../../services/services";
import { useNavigate } from "react-router-dom";

export default function Categories() {
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

  const handleSelectCategory = async (categoryName) => {
    navigate(`/products?categoryName=${categoryName}`);
  };

  return (
    <div>
      <div className="flex lg:flex-col lg:justify-center lg:w-[240px] lg:h-[330px] rounded-lg bg-light-grey md:flex-row sm:flex-row">
        {categories.map((category) => (
          <Category
            key={category.id}
            category={category}
            onSelectCategory={handleSelectCategory}
          />
        ))}
      </div>
    </div>
  );
}
