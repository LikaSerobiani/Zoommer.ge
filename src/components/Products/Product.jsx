import React from "react";
import Button from "../button/Index";
import CartIcon from "../icons/CartIcon";
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
    <div className="flex gap-[8px] flex-col h-[303px] bg-white justify-center cursor-pointer">
      <div onClick={() => handleClick(product.id)}>
        <img
          src={product?.image}
          className="w-full h-40 object-contain"
          alt={product.title}
        />
        <div className="flex flex-col justify-start">
          <p className="font-bold text-[17px]">
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
          </p>
          <h3 className="line-clamp-1 w-[130px]">{product.title}</h3>
        </div>
      </div>
      <Button
        children="დამატება"
        className="bg-orange text-black rounded-[5px] text-[13px] "
        icon={<CartIcon width="20px" height="20px" />}
        onClick={handleAddToCart}
      />
    </div>
  );
};

export default Product;
