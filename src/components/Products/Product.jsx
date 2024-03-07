import React from "react";
import Button from "../button/Index";
import CartIcon from "../icons/CartIcon";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useCart();
  const nav = useNavigate();

  const handleProductClick = (productId) => {
    nav(`/product/${productId}`);
  };

  return (
    <div className="flex gap-[8px] flex-col h-[303px] bg-white justify-center cursor-pointer">
      <div onClick={() => handleProductClick(product.id)}>
        <img
          src={product?.image}
          className="w-full h-40 object-contain"
          alt={product.title}
        />
        <div className="flex flex-col justify-start">
          <div className="font-bold text-[17px]">
            {product.salePrice ? (
              <div className="flex gap-2 items-center">
                {product.salePrice}₾
                <span className="line-through text-sm text-secondary">
                  {product.price} ₾
                </span>
              </div>
            ) : (
              `${product.price}₾`
            )}
          </div>

          <h3 className="line-clamp-1 w-[130px]">{product.title}</h3>
        </div>
      </div>
      <Button
        children="დამატება"
        className="bg-orange text-black rounded-[5px] text-[13px] "
        icon={<CartIcon width="20px" height="20px" />}
        onClick={() => addToCart(product)}
      />
    </div>
  );
};

export default Product;
