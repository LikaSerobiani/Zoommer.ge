import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getProduct,
  purchaseProducts,
  getProducts,
} from "../services/services";
import Breadcrumb from "../components/breadcrumb/Index";
import Button from "../components/button/Index";
import CartIcon from "../components/icons/CartIcon";
import { useCart } from "../context/CartContext";
import SimilarProductsSlider from "../components/slider/SimilarProducts";
import LoginModal from "../components/modals/Login";

export default function ProductPage() {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();
  const [similarProducts, setSimilarProducts] = useState([]);
  const nav = useNavigate();
  const [categoryName, setCategoryName] = useState("");
  const isAuthenticated = localStorage.getItem("accessToken");
  const [showLoginModal, setShowLoginModal] = useState(false);

  const fetchData = async () => {
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
    fetchData();
  }, [productId]);

  const handlePurchase = async () => {
    try {
      if (!isAuthenticated) {
        setShowLoginModal(true);

        return;
      }

      await purchaseProducts({
        totalPrice: productData.salePrice
          ? productData.salePrice
          : productData.price,
        totalItems: 1,
      });

      nav("/payment");
    } catch (error) {
      console.error(error);
    }
  };

  const breadcrumbs = [
    { label: "მთავარი", path: "/" },
    {
      label: categoryName ? categoryName : "product category",
      path: `/products?categoryName=${categoryName}`,
    },
    { label: productData?.title || "Product title" },
  ];

  return (
    <div className="container">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          {/* breadcrumb menu */}
          <div className="bread-crumb">
            <nav className="border-b-2 border-light-grey pb-[20px] mb-[20px] w-[700px]">
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
          <div className="flex justify-between">
            <div>
              <p className="text-[18px] leading-4 font-bold text-black">
                {productData ? productData.title : ""}
              </p>
              <img
                src={productData?.image}
                alt={productData?.title || "Product"}
                className="w-full h-56 object-contain"
              />
            </div>
            <div>
              <p className="text-gray-500 w-[400px]">
                {productData ? productData.description : ""}
              </p>
            </div>
          </div>
        </div>
        {/* price section */}
        <div className="p-[20px] w-[450px] h-[200px] bg-light-grey flex justify-center flex-col gap-y-[25px] rounded-[12px]">
          <div className="text-[20px] flex gap-5 items-center">
            <h1 className="text-primary font-bold">პროდუქტის ფასი:</h1>
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
              title="ყიდვა"
              className="bg-primary text-white rounded-[12px] text-[13px] w-[411px]"
              onClick={handlePurchase}
            />

            <Button
              title="დამატება"
              className="bg-orange text-black rounded-[12px] text-[13px] w-[411px]"
              icon={<CartIcon width="20px" height="20px" />}
              onClick={() => addToCart(productData)}
            />
          </div>
        </div>
      </div>

      {similarProducts.length > 0 && (
        <div>
          <h3 className="font-bold text-xl text-primary">მსგავსი პროდუქტები</h3>
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
