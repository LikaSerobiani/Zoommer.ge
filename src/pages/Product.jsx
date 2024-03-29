import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct, getProducts } from "../services/services";
import Breadcrumb from "../components/breadcrumb/Index";
import Button from "../components/button/Index";
import CartIcon from "../components/icons/CartIcon";
import { useCart } from "../context/Cart";
import SimilarProductsSlider from "../components/slider/SimilarProducts";
import LoginModal from "../components/modals/Login";
import { useLikedProducts } from "../context/LikedProducts";
import LikeIcon from "../components/icons/LikeIcon";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeSwitcher";

export default function ProductPage() {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();
  const { addLikedProduct, likedProducts, removeLikedProduct } =
    useLikedProducts();
  const [similarProducts, setSimilarProducts] = useState([]);
  const nav = useNavigate();
  const [categoryName, setCategoryName] = useState("");
  const isAuthenticated = localStorage.getItem("accessToken");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { t } = useTranslation("global");
  const { isDarkMode } = useTheme();

  const fetchData = async (productId) => {
    try {
      const response = await getProduct(productId);
      setProductData(response.data);
      setCategoryName(response.data.category_name);

      const similarResponse = await getProducts({
        categoryName: response.data.category_name,
      });

      const filteredSimilarProducts = similarResponse.data.products.filter(
        (product) => product.id !== productId
      );
      setSimilarProducts(filteredSimilarProducts);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("An error occurred while fetching data.");
    }
  };

  useEffect(() => {
    fetchData(productId);
  }, [productId]);

  const isProductLiked = likedProducts.some(
    (likedProduct) => likedProduct.likedProduct.id === productId
  );

  const handlePurchase = async () => {
    try {
      if (!isAuthenticated) {
        setShowLoginModal(true);

        return;
      }

      nav(`/payment`, { state: { productData } });
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddToCart = () => {
    try {
      if (!isAuthenticated) {
        setShowLoginModal(true);
        return;
      }
      addToCart(productData);
    } catch (error) {
      console.error(error);
    }
  };

  const breadcrumbs = [
    { label: t("breadCrumb.main"), path: "/" },
    {
      label: categoryName ? categoryName : "product category",
      path: `/products?categoryName=${categoryName}`,
    },
    { label: productData?.title || "Product title" },
  ];

  return (
    <div className="container">
      <div className="flex lg:flex-row lg:justify-between items-center sm:flex-col">
        <div className="flex flex-col">
          {/* breadcrumb menu */}
          <div className="bread-crumb">
            <nav className="border-b-2 border-light-grey pb-[20px] mb-[20px] w-[700px] sm:w-[500px]">
              <ul className="flex flex-row gap-5">
                {breadcrumbs.map((breadcrumb, index) => (
                  <Breadcrumb
                    key={index}
                    label={breadcrumb.label}
                    path={breadcrumb.path}
                    isLast={index === breadcrumbs.length - 1}
                  />
                ))}
              </ul>
            </nav>
          </div>
          {/* information */}
          <div className="flex lg:justify-between mb-[50px] relative sm:gap-5">
            <div className="flex flex-col gap-3">
              <p
                className={`text-[16px] leading-4 font-bold  ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                {productData ? productData.title : ""}
              </p>
              <img
                src={productData?.image}
                alt={productData?.title || "Product"}
                className="w-full h-56 object-contain"
              />
            </div>

            <div
              className="absolute cursor-pointer right-0"
              onClick={() =>
                isProductLiked
                  ? removeLikedProduct(likedProducts[0].id)
                  : addLikedProduct(productData)
              }
            >
              <LikeIcon color={isProductLiked ? "red" : "grey"} />{" "}
            </div>
            {/* Description */}
            <div>
              <p
                className={` lg:w-[400px] sm:w-[200px] ${
                  isDarkMode ? "text-white" : "text-dark-grey"
                }`}
              >
                {productData ? productData.description : ""}
              </p>
            </div>
          </div>
        </div>
        {/* price section */}
        <div className="p-[20px] lg:w-[450px] h-[200px] bg-light-grey flex justify-center flex-col gap-y-[25px] rounded-[12px] sm:w-[500px] sm:items-center">
          <div className="text-[20px] flex gap-5 lg:items-center">
            <h1 className="text-primary font-bold">
              {t("prices.productPrice")}
            </h1>
            {productData?.salePrice ? (
              <div className="flex gap-2 items-center">
                <span className="text-primary">{productData?.salePrice}₾</span>
                <span className="line-through text-base">
                  {productData?.price} ₾
                </span>
              </div>
            ) : (
              <span>{productData?.price}₾</span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-[20px]">
            <Button
              title={t("buttons.purchase")}
              className="bg-primary text-white rounded-[12px] text-[13px] w-[411px]"
              onClick={handlePurchase}
            />

            <Button
              title={t("buttons.addToCart")}
              className={`bg-orange rounded-[12px] text-[13px] w-[411px] ${
                isDarkMode ? "text-white" : "text-black"
              }`}
              icon={
                <CartIcon
                  width="20px"
                  height="20px"
                  color={isDarkMode ? "#ffffff" : "#000000"}
                />
              }
              onClick={handleAddToCart}
            />
          </div>
        </div>
      </div>

      {similarProducts.length > 0 && (
        <div className="mt-[50px]">
          <h3 className="font-bold text-xl mb-[20px] text-primary">
            {t("sliders.similarProducts")}
          </h3>
          <div className="similar-products">
            <SimilarProductsSlider similarProducts={similarProducts} />
          </div>
        </div>
      )}
      {showLoginModal && (
        <LoginModal
          showModal={showLoginModal}
          handleClose={() => setShowLoginModal(false)}
        />
      )}
    </div>
  );
}
