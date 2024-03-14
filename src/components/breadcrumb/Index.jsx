import React from "react";
import { Link } from "react-router-dom";
import RightArrow from "../icons/RightArrow";
import { useTheme } from "../../context/ThemeSwitcher";

export default function Breadcrumb({ label, path, isLast }) {
  const { isDarkMode } = useTheme();

  return (
    <li
      className={`flex items-center gap-5 cursor-pointer text-[16px] leading-[19px] font-bold ${
        isDarkMode ? "text-white" : "text-black"
      }`}
    >
      <Link to={path}>{label}</Link>
      {!isLast && (
        <RightArrow color={isDarkMode ? "#ffffff" : "#000000"} />
      )}{" "}
    </li>
  );
}
