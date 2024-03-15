import React from "react";

export default function Category({ category, onSelectCategory }) {
  const handleClick = () => {
    onSelectCategory(category.name);
  };

  return (
    <div onClick={handleClick}>
      <div className="cursor-pointer px-3 py-3 gap-2">
        <span className="font-black text-black lg:text-[14px] hover:text-primary sm:text-[11px]">
          {category.name}
        </span>
      </div>
    </div>
  );
}
