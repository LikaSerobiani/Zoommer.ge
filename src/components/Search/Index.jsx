/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../services/services";
import SearchIcon from "../icons/SearchIcon";
import { useTranslation } from "react-i18next";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const { t } = useTranslation("global");

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (input.trim() !== "") {
        fetchData(input);
      } else {
        setSearchResults([]);
      }
    }, 300);

    return () => clearTimeout(timerId);
  }, [input]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const fetchData = async (query) => {
    try {
      const response = await getProducts({ search: query }, false);
      setSearchResults(response.data.products);

      const filteredResults = response.data.products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleResultClick = (productId) => {
    navigate(`/product/${productId}`);
    setSearchResults([]);
  };

  return (
    <div className="relative">
      <div className="items-center border border-orange-500 border-opacity-50 rounded-lg shadow-md p-3 cursor-pointer flex gap-4 w-[440px] h-[44px] bg-[#fff]">
        <SearchIcon />
        <input
          type="text"
          value={input}
          onChange={handleChange}
          className="outline-none w-full h-[17px] text-sm font-medium text-gray-600"
          placeholder={t("placeholders.search")}
        />
      </div>
      {searchResults.length > 0 && (
        <ul className="absolute z-10 left-0 mt-1 w-[440px] bg-white border border-gray-200 rounded-md flex flex-col gap-y-5">
          {searchResults.map((result) => (
            <li
              key={result.id}
              className="flex items-start p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleResultClick(result.id)}
            >
              <img
                src={result.image}
                alt={result.title}
                className="w- h-12 object-cover mr-4 rounded-md"
              />
              <div>
                <div className="text-sm font-medium text-gray-500">
                  {result.title}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
