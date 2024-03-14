/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeSwitcher";

export default function Sidebar({ onItemClick }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const { t } = useTranslation("global");
  const { isDarkMode } = useTheme();

  const handleItemClick = (page) => {
    onItemClick(page);
    setSelectedItem(page);
  };

  return (
    <ul className="text-grey-600 flex flex-col border-r-2 h-full gap-5 p-4 cursor-pointer w-[150px]">
      <li
        onClick={() => handleItemClick("Profile")}
        style={{ fontWeight: selectedItem === "Profile" ? "bold" : "normal" }}
        className={`${isDarkMode ? "text-white" : "text-black"}`}
      >
        {t("sideBar.profile")}
      </li>
      <li
        onClick={() => handleItemClick("Purchase")}
        style={{ fontWeight: selectedItem === "Purchase" ? "bold" : "normal" }}
        className={`${isDarkMode ? "text-white" : "text-black"}`}
      >
        {t("sideBar.orders")}
      </li>
      <li
        onClick={() => handleItemClick("WishList")}
        style={{ fontWeight: selectedItem === "WishList" ? "bold" : "normal" }}
        className={`${isDarkMode ? "text-white" : "text-black"}`}
      >
        {t("sideBar.wishList")}
      </li>
    </ul>
  );
}
