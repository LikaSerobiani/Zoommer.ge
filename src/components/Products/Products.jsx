import React, { useState, useEffect } from "react";
import PromotionsSlider from "../slider/Promotions";
import AllProductsSlider from "../slider/AllProducts";
import { getProducts } from "../../services/services";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [saleProducts, setSaleProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch all products
        const allProductsResponse = await getProducts({}, false);
        if (allProductsResponse.data.products) {
          setAllProducts(allProductsResponse.data.products);
        }

        // Fetch only sale products
        const saleProductsResponse = await getProducts({}, true);
        if (saleProductsResponse.data.products) {
          setSaleProducts(saleProductsResponse.data.products);
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <AllProductsSlider products={allProducts} />

          <PromotionsSlider products={saleProducts} />
        </>
      )}
    </div>
  );
};

export default Products;
