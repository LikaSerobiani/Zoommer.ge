import React from "react";
import { useLikedProducts } from "../../context/LikedProductsContext";
import TrashIcon from "../icons/TrashIcon";
import { useCart } from "../../context/CartContext";
import Button from "../button/Index";
import CartIcon from "../icons/CartIcon";
import { useNavigate } from "react-router-dom";

export default function WishList() {
  const { likedProducts, removeLikedProduct } = useLikedProducts();
  const { addToCart } = useCart();
  const nav = useNavigate();

  const handleProductClick = (productId) => {
    nav(`/product/${productId}`);
  };

  return (
    <div className="flex flex-wrap">
      {likedProducts.map((product) => (
        <div key={product?.likedProduct.id} className="relative">
          <button
            className="absolute top-0 right-[30px] m-2 cursor-pointer"
            onClick={() => removeLikedProduct(product.id)}
          >
            <TrashIcon />
          </button>
          <div className="flex gap-2 flex-col h-80 w-52 bg-white rounded-lg p-2 cursor-pointer">
            <div onClick={() => handleProductClick(product.id)}>
              <img
                src={product?.likedProduct.image}
                className="h-40 object-contain"
                alt={product?.likedProduct.title}
              />
              <div className="flex flex-col justify-start">
                <div className="font-bold text-lg">
                  {product?.likedProduct.salePrice ? (
                    <div className="flex gap-2 items-center">
                      <span className="text-secondary">
                        {product?.likedProduct.salePrice}₾
                      </span>
                      <span className="line-through text-sm ">
                        {product?.likedProduct.price} ₾
                      </span>
                    </div>
                  ) : (
                    <span>{product?.likedProduct.price}₾</span>
                  )}
                </div>

                <h3 className="line-clamp-1">{product?.likedProduct.title}</h3>
              </div>
            </div>

            <div className="flex flex-row gap-2">
              <Button
                title="დამატება"
                className="bg-orange text-black rounded-md text-sm"
                icon={<CartIcon width="20px" height="20px" />}
                onClick={() => addToCart(product)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
