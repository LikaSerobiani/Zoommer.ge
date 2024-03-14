import React from "react";

export default function Category({ category, onSelectCategory }) {
  const handleClick = () => {
    onSelectCategory(category.name);
  };

  return (
    <div onClick={handleClick}>
      <div className="cursor-pointer px-3 py-3 flex items-center gap-2">
        <img src={category.image} />
        <span className="font-black text-black text-[14px] hover:text-primary">
          {category.name}
        </span>
      </div>
    </div>
  );
}
