// /* eslint-disable no-unused-vars */ // Disable eslint warnings for unused variables

// import React, { useContext } from "react";
// import { ProductsContext } from "../App";

// import Product from "../components/Products/Product";

// export default function CartPage() {
//   const { products, setProducts } = useContext(ProductsContext);

//   const handleDelete = (productId) => {
//     const cardElement = document.getElementById(`product-card-${productId}`);

//     if (cardElement) {
//       cardElement.style.display = "none";
//     }

//     const updatedProducts = products.filter(
//       (product) => product.cartProductId !== productId
//     );

//     localStorage.removeItem("cartProducts", JSON.stringify(updatedProducts));
//     setProducts(updatedProducts);
//   };

//   return (
//     <>
//       <div className="flex flex-wrap gap-9 justify-center">
//         {products.map((product) => (
//           <Product
//             product={product}
//             key={product.cartProductId}
//             onDelete={handleDelete}
//           />
//         ))}
//       </div>
//     </>
//   );
// }
import React from "react";

export default function Cart() {
  return <div>cart</div>;
}
