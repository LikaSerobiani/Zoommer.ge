import React from "react";
import Product from "../products/Product";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function PromotionsSlider({ products }) {
  if (!products) {
    return null;
  }
  const saleProducts = products.filter((product) => product.salePrice);

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">ფასდაკლებული პროდუქტები</h2>
      <Swiper spaceBetween={32} slidesPerView={7}>
        {saleProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <Product product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
