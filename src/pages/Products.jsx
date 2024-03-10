import React, { useState, useEffect } from "react";
import Product from "../components/products/Product";
import { getProducts } from "../services/services";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../components/breadcrumb/Index";

export default function ProductsPage() {
  const [productsData, setProductsData] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const categoryName = queryParams.get("categoryName");

  const handleFetchProducts = () => {
    getProducts({ categoryName })
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
  }, [location.search]);

  const breadcrumbs = [
    { label: "მთავარი", path: "/" },
    {
      label: categoryName ? categoryName : "product category",
      path: `/products?categoryName=${categoryName}`,
    },
  ];

  return (
    <div className="container">
      <ul className="flex gap-5 ">
        {breadcrumbs.map((breadcrumb, index) => (
          <Breadcrumb
            key={index}
            label={breadcrumb.label}
            path={breadcrumb.path}
            isLast={index === breadcrumbs.length - 1}
          />
        ))}
      </ul>
      <div className="flex flex-row ">
        {productsData?.length > 0 &&
          productsData.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
