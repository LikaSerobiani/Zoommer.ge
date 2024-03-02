import React from "react";
import Product from "../products/Product";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function SmartphonesSlider({ products }) {
  if (!products) {
    return null;
  }
  const smartPhones = products.filter((product) =>
    product.category_name.includes("სმარტფონები")
  );

  return (
    <div className="relative">
      <h2 className="mb-4 text-xl font-bold">სმარტფონები</h2>

      <Swiper spaceBetween={32} slidesPerView={7}>
        {smartPhones.map((product) => (
          <SwiperSlide key={product.id}>
            <Product product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
