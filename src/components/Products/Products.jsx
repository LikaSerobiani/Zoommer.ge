// Products.js
import React, { useEffect } from "react";

import useStore from "../../Hooks/Store";
import Product from "./Product";

const Products = () => {
  const { fetchProducts, addToCart, removeFromCart, products } = useStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex gap-[20px] mt-[100px]">
      {products &&
        products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
    </div>
  );
};

export default Products;
