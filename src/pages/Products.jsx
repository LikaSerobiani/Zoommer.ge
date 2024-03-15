import React, { useState, useEffect } from "react";
import Product from "../components/products/Product";
import { getProducts } from "../services/services";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../components/breadcrumb/Index";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import ReactPaginate from "react-paginate";
import LeftArrow from "../components/icons/LeftArrow";
import RightArrow from "../components/icons/RightArrow";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeSwitcher";

export default function ProductsPage() {
  const [productsData, setProductsData] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const { t } = useTranslation("global");
  const { isDarkMode } = useTheme();

  const categoryName = queryParams.get("categoryName");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const handleFetchProducts = () => {
    getProducts({ categoryName, minPrice, maxPrice, page, pageSize })
      .then((response) => {
        const { products } = response.data;
        setProductsData(products);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    handleFetchProducts();
  }, [location.search, minPrice, maxPrice, page, pageSize]);

  const breadcrumbs = [
    { label: t("breadCrumb.main"), path: "/" },
    {
      label: categoryName ? categoryName : "product category",
      path: `/products?categoryName=${categoryName}`,
    },
  ];
  const handleMinPriceChange = (e) => {
    setMinPrice(parseInt(e.target.value));
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(parseInt(e.target.value));
  };

  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1;
    setPage(selectedPage);
  };

  return (
    <div className="container">
      <ul className="flex gap-5">
        {breadcrumbs.map((breadcrumb, index) => (
          <Breadcrumb
            key={index}
            label={breadcrumb.label}
            path={breadcrumb.path}
            isLast={index === breadcrumbs.length - 1}
          />
        ))}
      </ul>
      {/* Filter */}
      <div className="flex lg:flex-row mt-10 gap-10 sm:justify-center">
        <div className="w-1/4 mt-10 flex flex-col gap-y-3">
          <InputRange
            minValue={0}
            maxValue={5000}
            value={{ min: minPrice, max: maxPrice }}
            onChange={(value) => {
              setMinPrice(value.min);
              setMaxPrice(value.max);
            }}
          />
          <div className="flex lg:flex-row justify-center mt-4 gap-4 md:flex-col sm:flex-col">
            <div className="flex items-center bg-white border border-primary py-[5px] px-2.5 rounded-md gap-2 ">
              <label htmlFor="minPrice" className="text-gray-600">
                MIN:
              </label>
              <input
                className="w-20 py-1"
                type="number"
                id="minPrice"
                value={minPrice}
                onChange={handleMinPriceChange}
              />
            </div>
            <div className="flex items-center bg-white border border-primary rounded-md gap-2 py-[5px] px-2.5">
              <label htmlFor="maxPrice" className="text-gray-600">
                MAX:
              </label>
              <input
                className="w-20 py-1"
                type="number"
                id="maxPrice"
                value={maxPrice}
                onChange={handleMaxPriceChange}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:w-3/4 items-center sm:w-[400px]">
          <div className="flex flex-wrap gap-6">
            {productsData?.length > 0 ? (
              productsData.map((product) => (
                <Product key={product.id} product={product} />
              ))
            ) : (
              <div className="flex flex-col justify-center mt-8">
                <p
                  className={`text-lg font-bold mb-4 ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  {t("productNotFound.title")}
                </p>
              </div>
            )}
          </div>
          <div className="mt-10 flex items-center">
            <div className="pagination rounded-md py-2 px-1">
              <ReactPaginate
                previousLabel={
                  <LeftArrow color={isDarkMode ? "#ffffff" : "#000000"} />
                }
                nextLabel={
                  <RightArrow color={isDarkMode ? "#ffffff" : "#000000"} />
                }
                pageCount={2}
                pageRangeDisplayed={8}
                onPageChange={handlePageClick}
                containerClassName="flex"
                pageClassName={`px-3 py-1 mx-1 rounded-md cursor-pointer ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
                activeClassName={`bg-gray-300 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
                previousClassName="py-1.5 px-2.5 border border-gray-300 rounded-md cursor-pointer flex items-center"
                nextClassName="py-1.5 px-2.5 border border-gray-300 rounded-md cursor-pointer flex items-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
