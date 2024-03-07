import React, { useState, useEffect } from "react";
import PromotionsSlider from "../slider/Promotions";
import AllProductsSlider from "../slider/AllProducts";
import { getProducts } from "../../services/services";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        if (response.data.products) {
          setProducts(response.data.products);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <AllProductsSlider products={products} />
      <PromotionsSlider products={products} />
    </div>
  );
};

export default Products;
