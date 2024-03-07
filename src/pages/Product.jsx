import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProduct } from "../services/services";
import Breadcrumb from "../components/breadcrumb/Index";
import Button from "../components/button/Index";
import CartIcon from "../components/icons/CartIcon";
import { useCart } from "../context/CartContext";

export default function ProductPage() {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProduct(productId);
        setProductData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
      }
    };

    fetchData();
  }, [productId]);

  const breadcrumbs = [
    { label: "მთავარი", path: "/" },
    {
      label: productData?.category_name
        ? productData.category_name
        : "product category",
      path: `/category/${productData?.category_id}`,
    },
    { label: productData?.title || "Product title" },
  ];

  return (
    <div className="my-[30px]">
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
            <div className="flex gap-x-10">
              <div>
                <p className="text-[14px] leading-4 font-bold text-black">
                  {productData ? productData.title : ""}
                </p>
                <img
                  src={productData?.image}
                  alt={productData?.title || "Product"}
                  className="w-full h-56 object-contain"
                />
              </div>
              <div>
                <p className="text-gray-500">
                  {productData ? productData.description : ""}
                </p>
              </div>
            </div>
          </div>
          {/* price section */}
          <div className="p-[20px] w-[450px] h-[150px] bg-light-grey flex justify-center flex-col gap-y-[25px] rounded-[12px]">
            {/* Buttons */}
            <div className="flex flex-col gap-[20px]">
              <Link to="/payment">
                <Button
                  children="ყიდვა"
                  className="bg-primary text-white rounded-[12px] text-[13px] w-[411px]"
                />
              </Link>
              <Button
                children="დამატება"
                className="bg-orange text-black rounded-[12px] text-[13px] w-[411px]"
                icon={<CartIcon width="20px" height="20px" />}
                onClick={() => addToCart(productData)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
