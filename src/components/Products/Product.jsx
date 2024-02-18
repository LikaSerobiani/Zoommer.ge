// Product.js
import React from "react";
import Button from "../Button/Index";
import CartIcon from "../Icons/CartIcon";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const nav = useNavigate();

  const handleClick = (productId) => {
    nav(`/product/${productId}`);
  };

  return (
    <div>
      <div
        className="flex gap-[8px] flex-col h-[303px] bg-white justify-center cursor-pointer"
        onClick={() => handleClick(product.id)}
      >
        <div>
          <img src={product.image} className="h-[160px]" />
        </div>
        <div className="flex flex-col justify-start">
          <p className="font-bold text-[17px] w-[150px]">₾{product.price}</p>
          <h3>{product.title}</h3>
          <p className="font-medium">{product.description}</p>
        </div>
      </div>
      <div>
        <Button
          children="დამატება"
          className="bg-orange text-black rounded-[5px] text-[13px] "
          icon={<CartIcon width="20px" height="20px" />}
        />
      </div>
    </div>
  );
};

export default Product;
