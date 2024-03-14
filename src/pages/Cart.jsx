import React from "react";
import Button from "../components/button/Index";
import EmptyCartIcon from "../components/icons/EmptyCartIcon";
import TrashIcon from "../components/icons/TrashIcon";
import { useCart } from "../context/Cart";
import { useNavigate } from "react-router-dom";
import { addCartProducts, removeCartProducts } from "../services/services";
import { useTranslation } from "react-i18next";

export default function Cart() {
  const { cartProducts, setCartProducts, removeFromCart } = useCart();
  const { t } = useTranslation("global");

  const nav = useNavigate();

  const calculateTotalPrice = () => {
    return cartProducts.reduce(
      (total, product) => total + product.cartProduct.price * product.count,
      0
    );
  };

  const increaseCount = async (productId) => {
    addCartProducts({ product_id: productId })
      .then(() => {
        const updatedData = cartProducts.map((item) =>
          item.cartProduct.id === productId
            ? { ...item, count: item.count + 1 }
            : item
        );
        setCartProducts(updatedData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const decreaseQuantity = async (productId) => {
    removeCartProducts(productId, false)
      .then(() => {
        const updatedData = cartProducts.map((item) =>
          item.id === productId
            ? { ...item, count: item.count > 1 ? item.count - 1 : 1 }
            : item
        );

        setCartProducts(updatedData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handlePurchase = async () => {
    try {
      const productData = {
        totalPrice: calculateTotalPrice(),
        totalItems: cartProducts.reduce((total, item) => total + item.count, 0),
      };

      nav(`/payment`, { state: { productData } });
    } catch (error) {
      console.error(error);
    }
  };

  const productItemActions = (product) => {
    return (
      <>
        <div className="bg-primary text-white flex justify-around items-center text-[12px] font-bold w-[120px] h-[30px] rounded-[30px]">
          <div className="flex gap-3 items-center">
            <div className="bg-orange-600 text-white flex justify-around items-center text-[12px] font-bold w-[100px] h-[30px] rounded-[30px]">
              <button
                onClick={() => decreaseQuantity(product.id)}
                disabled={product.count <= 1}
                className={`${product.count <= 1 && "opacity-50"}`}
              >
                -
              </button>

              <span>{product.count}</span>
              <button onClick={() => increaseCount(product.cartProduct.id)}>
                +
              </button>
            </div>
          </div>
        </div>
        <button onClick={() => removeFromCart(product.id, true)}>
          <TrashIcon />
        </button>
      </>
    );
  };

  const cartItemCount = cartProducts.reduce(
    (total, item) => total + item.count,
    0
  );

  return (
    <div className="container">
      <div className="pb-[20px] border-b-2">
        <p className="font-bold text-[28px] leading-7">
          {t("cartItemCount.total", { count: cartItemCount })}
        </p>
      </div>
      <div className="flex justify-between mt-[30px]">
        <div className="flex flex-col gap-y-[20px]">
          {cartProducts.length > 0 ? (
            cartProducts.map((product) => (
              <div
                key={product?.cartProduct.id}
                className="bg-light-grey h-[84px] p-[12px] rounded-[12px] flex flex-row justify-between w-[700px]"
              >
                <div className="flex gap-2">
                  <img
                    src={product?.cartProduct.image}
                    alt={product?.cartProduct.title}
                    className="w-[60px] h-[60px] rounded-[12px]"
                  />
                  <h1>{product?.cartProduct.title}</h1>
                </div>
                <div className="flex gap-3 items-center">
                  {productItemActions(product)}
                </div>
              </div>
            ))
          ) : (
            <EmptyCartIcon />
          )}
        </div>
        {cartProducts.length > 0 && (
          <div className="p-[20px] w-[450px] h-[150px] bg-light-grey flex justify-center flex-col gap-y-[25px] rounded-[12px]">
            <div className="flex justify-between items-center ">
              <h2 className="text-black font-bold text-[20px]">
                {t("prices.totalPrice")}
              </h2>
              <span className="font-bold text-[20px] text-primary">
                {calculateTotalPrice().toFixed(2)}₾
              </span>
            </div>
            <div>
              <Button
                title={t("buttons.purchase")}
                className="bg-primary text-white w-[411px]"
                onClick={handlePurchase}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
