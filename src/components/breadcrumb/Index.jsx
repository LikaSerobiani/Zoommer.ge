import React from "react";
import { Link } from "react-router-dom";
import RightArrow from "../icons/RightArrow";

export default function Breadcrumb({ label, path, isLast }) {
  return (
    <li className="flex items-center gap-5 cursor-pointer text-[16px] leading-[19px] font-bold">
      <Link to={path}>{label}</Link>
      {!isLast && <RightArrow className="w-4 h-4 ml-1 text-gray-500" />}{" "}
    </li>
  );
}
