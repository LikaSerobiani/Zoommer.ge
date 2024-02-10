/* eslint-disable no-unused-vars */
import React from "react";
import SearchIcon from "../../components/Icons/SearchIcon";

export default function Search() {
  return (
    <div className="flex items-center gap-[15px] bg-white w-[410px] rounded-xl border border-primary py-2.5 px-2.5 cursor-pointer ">
      {/* Icon */}
      <SearchIcon />
      {/* Search input */}
      <input
        type="text"
        placeholder="ძიება"
        className="focus:outline-none font-bold text-sm text-dark-grey w-[90%]"
      />
    </div>
  );
}
