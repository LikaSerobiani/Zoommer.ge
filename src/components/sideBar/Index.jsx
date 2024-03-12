/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function Sidebar({ onItemClick }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (page) => {
    onItemClick(page);
    setSelectedItem(page);
  };

  return (
    <ul className="text-grey-600 flex flex-col border-r-2 h-full gap-5 p-4 cursor-pointer">
      <li
        onClick={() => handleItemClick("Profile")}
        style={{ fontWeight: selectedItem === "Profile" ? "bold" : "normal" }}
      >
        პროფილი
      </li>
      <li
        onClick={() => handleItemClick("Purchase")}
        style={{ fontWeight: selectedItem === "Purchase" ? "bold" : "normal" }}
      >
        შეკვეთები
      </li>
      <li
        onClick={() => handleItemClick("WishList")}
        style={{ fontWeight: selectedItem === "WishList" ? "bold" : "normal" }}
      >
        ვიშლისტი
      </li>
    </ul>
  );
}
