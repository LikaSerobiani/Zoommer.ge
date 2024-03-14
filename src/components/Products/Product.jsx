import React from "react";
import Button from "../button/Index";
import CartIcon from "../icons/CartIcon";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/Cart";
import { useLikedProducts } from "../../context/LikedProducts";
import LikeIcon from "../icons/LikeIcon";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeSwitcher";

const Product = ({ product }) => {
  const { addToCart } = useCart();
  const { addLikedProduct, likedProducts, removeLikedProduct } =
    useLikedProducts();
  const { t } = useTranslation("global");
  const { isDarkMode } = useTheme();

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
    <div className="relative w-44 bg-white rounded-lg p-2 cursor-pointer flex flex-col justify-center">
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

        <div className="flex flex-row gap-2 ">
          <Button
            title={t("buttons.addToCart")}
            className={`bg-orange rounded-md text-sm w-[170px] ${
              isDarkMode ? "text-white" : "text-black"
            }`}
            icon={
              <CartIcon
                width="20px"
                height="20px"
                color={isDarkMode ? "#ffffff" : "#000000"}
              />
            }
            onClick={() => addToCart(product)}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
