/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Sidebar({ onItemClick }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const { t } = useTranslation("global");

  const handleItemClick = (page) => {
    onItemClick(page);
    setSelectedItem(page);
  };

  return (
    <ul className="text-grey-600 flex flex-col border-r-2 h-full gap-5 p-4 cursor-pointer w-[150px]">
      <li
        onClick={() => handleItemClick("Profile")}
        style={{ fontWeight: selectedItem === "Profile" ? "bold" : "normal" }}
      >
        {t("sideBar.profile")}
      </li>
      <li
        onClick={() => handleItemClick("Purchase")}
        style={{ fontWeight: selectedItem === "Purchase" ? "bold" : "normal" }}
      >
        {t("sideBar.orders")}
      </li>
      <li
        onClick={() => handleItemClick("WishList")}
        style={{ fontWeight: selectedItem === "WishList" ? "bold" : "normal" }}
      >
        {t("sideBar.wishList")}
      </li>
    </ul>
  );
}
