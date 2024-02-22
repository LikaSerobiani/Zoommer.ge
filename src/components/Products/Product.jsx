import React from "react";
import Button from "../Button/Index";
import CartIcon from "../Icons/CartIcon";
import { useNavigate } from "react-router-dom";
import { addCartProducts } from "../../services/services";
import { useCart } from "../../context/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useCart();
  const nav = useNavigate();

  const handleClick = (productId) => {
    nav(`/product/${productId}`);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();

    const { id } = product;

    try {
      addCartProducts({ product_id: id });
      addToCart(product);
    } catch (error) {
      console.error(error);
    }
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
          onClick={(e) => handleAddToCart(e)}
        />
      </div>
    </div>
  );
};

export default Product;
