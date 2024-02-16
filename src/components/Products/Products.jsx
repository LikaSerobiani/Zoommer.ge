// Products.js
import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
  return (
    <div className="flex gap-[20px] mt-[100px]">
      {products &&
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Products;
