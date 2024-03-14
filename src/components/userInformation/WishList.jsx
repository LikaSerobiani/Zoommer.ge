import React from "react";
import { useLikedProducts } from "../../context/LikedProducts";
import { useCart } from "../../context/Cart";
import Button from "../button/Index";
import CartIcon from "../icons/CartIcon";
import { useNavigate } from "react-router-dom";
import LikeIcon from "../icons/LikeIcon";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeSwitcher";

export default function WishList() {
  const { likedProducts, removeLikedProduct } = useLikedProducts();
  const { addToCart } = useCart();
  const nav = useNavigate();
  const { t } = useTranslation("global");
  const { isDarkMode } = useTheme();

  const handleProductClick = (productId) => {
    nav(`/product/${productId}`);
  };

  return (
    <div className="flex flex-wrap gap-y-6">
      <p
        className={`font-bold text-[20px] ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        {" "}
        {t("profilePage.wishList.title")}
      </p>
      <div className="border-b-2 w-full border-light-grey"></div>
      <div className="flex flex-wrap gap-[20px]">
        {likedProducts.map((product) => (
          <div key={product?.likedProduct.id} className="relative">
            <button
              className="absolute top-0 right-0 m-2 cursor-pointer"
              onClick={() => removeLikedProduct(product.id)}
            >
              <LikeIcon color="red" />
            </button>
            <div className="flex gap-2 flex-col w-44 bg-white rounded-lg p-2 cursor-pointer">
              <div onClick={() => handleProductClick(product.likedProduct.id)}>
                <img
                  src={product?.likedProduct.image}
                  className="h-40 object-contain"
                  alt={product?.likedProduct.title}
                />
                <div className="flex flex-col justify-start">
                  <div className="font-bold text-lg">
                    {product?.likedProduct.salePrice ? (
                      <div className="flex gap-2 items-center">
                        <span className="text-secondary">
                          {product?.likedProduct.salePrice}₾
                        </span>
                        <span className="line-through text-sm ">
                          {product?.likedProduct.price} ₾
                        </span>
                      </div>
                    ) : (
                      <span>{product?.likedProduct.price}₾</span>
                    )}
                  </div>

                  <h3 className="line-clamp-1">
                    {product?.likedProduct.title}
                  </h3>
                </div>
              </div>

              <div className="flex flex-row gap-2">
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
                  onClick={() => addToCart(product.likedProduct)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
