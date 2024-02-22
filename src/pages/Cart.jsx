import React, { useEffect, useState } from "react";
import { getCartProducts } from "../services/services";
import Button from "../components/Button/Index";
import EmptyCartIcon from "../components/Icons/EmptyCartIcon";

export default function Cart() {
  const [data, setData] = useState([]);

  const fetchCart = async () => {
    try {
      const response = await getCartProducts();
      const { data } = response;
      setData(data.map((item) => ({ ...item, quantity: 1 })));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const calculateTotalPrice = () => {
    return data.reduce(
      (total, product) => total + product.cartProduct.price * product.quantity,
      0
    );
  };

  const increaseQuantity = (productId) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.cartProduct.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.cartProduct.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const calculateTotalQuantity = () => {
    return data.reduce((total, product) => total + product.quantity, 0);
  };

  return (
    <div className="container pt-[50px]">
      <div className="pb-[20px] border-b-2">
        <p className="font-bold text-[28px] leading-7">
          შენს კალათაში {calculateTotalQuantity()} ნივთია
        </p>
      </div>
      <div className="flex justify-between mt-[30px]">
        <div className="flex flex-col gap-y-[20px]">
          {data.length > 0 ? (
            data.map((product) => (
              <div
                key={product?.cartProduct.id}
                className="bg-light-grey h-[84px] p-[12px] rounded-[12px] flex flex-row justify-between w-[700px]"
              >
                <img
                  src={product?.cartProduct.image}
                  alt={product?.cartProduct.title}
                />
                <div>
                  <h1>{product?.cartProduct.title}</h1>
                  <div className="bg-primary text-white flex justify-around items-center text-[12px] font-bold w-[120px] h-[30px] rounded-[30px]">
                    <button
                      onClick={() => decreaseQuantity(product.cartProduct.id)}
                    >
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(product.cartProduct.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <EmptyCartIcon />
          )}
        </div>
        <div className="p-[20px] w-[450px] h-[150px] bg-light-grey flex justify-center flex-col gap-y-[25px] rounded-[12px]">
          <div className="flex justify-between items-center ">
            <h2 className="text-black font-bold text-[20px]">
              გადასახდელი თანხა
            </h2>
            <span className="font-bold text-[20px]">
              {calculateTotalPrice().toFixed(2)}₾
            </span>
          </div>
          <div>
            <Button
              children="ყიდვა"
              className="bg-primary text-white w-[411px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
