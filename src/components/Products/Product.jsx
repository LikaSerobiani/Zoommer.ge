import React from "react";
import Button from "../button/Index";
import CartIcon from "../icons/CartIcon";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useLikedProducts } from "../../context/LikedProductsContext";
import LikeIcon from "../icons/LikeIcon";
import { useTranslation } from "react-i18next";

const Product = ({ product }) => {
  const { addToCart } = useCart();
  const { addLikedProduct, likedProducts, removeLikedProduct } =
    useLikedProducts();
  const { t } = useTranslation("global");

  const nav = useNavigate();

  const isProductLiked = likedProducts.some(
    (likedProduct) => likedProduct.likedProduct.id === product.id
  );

  const handleProductClick = (productId) => {
    nav(`/product/${productId}`);
  };

  const renderPrice = () => {
    if (product.salePrice) {
      return (
        <div className="flex gap-2 items-center">
          <span className="text-secondary">{product.salePrice}₾</span>
          <span className="line-through text-sm">{product.price} ₾</span>
        </div>
      );
    }
    return <span>{product.price}₾</span>;
  };

  return (
    <div className="relative h-80 w-52 bg-white rounded-lg p-2 cursor-pointer">
      <div
        className="absolute top-0 right-0 m-2 "
        onClick={() =>
          isProductLiked
            ? removeLikedProduct(likedProducts[0].id)
            : addLikedProduct(product)
        }
      >
        <LikeIcon color={isProductLiked ? "red" : "grey"} />
      </div>

      <div className="flex gap-2 flex-col ">
        <div onClick={() => handleProductClick(product.id)}>
          <img
            src={product.image}
            className="h-40 object-contain"
            alt={product.title}
          />
          <div className="flex flex-col justify-start">
            <div className="font-bold text-lg">{renderPrice()}</div>
            <h3 className="line-clamp-1">{product.title}</h3>
          </div>
        </div>

        <div className="flex flex-row gap-2">
          <Button
            title={t("buttons.addToCart")}
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
