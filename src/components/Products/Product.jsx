import React from "react";
import Button from "../button/Index";
import CartIcon from "../icons/CartIcon";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useLikedProducts } from "../../context/LikedProductsContext";
import LikeIcon from "../icons/LikeIcon";

const Product = ({ product }) => {
  const { addToCart } = useCart();
  const { addLikedProduct } = useLikedProducts();

  const nav = useNavigate();

  const handleProductClick = (productId) => {
    nav(`/product/${productId}`);
  };

  return (
    <div className="relative h-80 w-52 bg-white rounded-lg p-2 cursor-pointer">
      <div
        className="absolute top-0 right-0 m-2 "
        onClick={() => addLikedProduct(product)}
      >
        <LikeIcon />
      </div>
      <div className="flex gap-2 flex-col ">
        <div onClick={() => handleProductClick(product.id)}>
          <img
            src={product.image}
            className="h-40 object-contain"
            alt={product.title}
          />
          <div className="flex flex-col justify-start">
            <div className="font-bold text-lg">
              {product.salePrice ? (
                <div className="flex gap-2 items-center">
                  <span className="text-secondary">{product.salePrice}₾</span>
                  <span className="line-through text-sm">
                    {product.price} ₾
                  </span>
                </div>
              ) : (
                <span>{product.price}₾</span>
              )}
            </div>

            <h3 className="line-clamp-1">{product.title}</h3>
          </div>
        </div>

        <div className="flex flex-row gap-2">
          <Button
            title="დამატება"
            className="bg-orange text-black rounded-md text-sm"
            icon={<CartIcon width="20px" height="20px" />}
            onClick={() => addToCart(product)}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
