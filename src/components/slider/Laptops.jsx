import React from "react";

import Product from "../products/Product";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function LaptopsSlider({ products }) {
  if (!products) {
    return null;
  }
  const laptops = products.filter((product) =>
    product.category_name.includes("ლეპტოპები")
  );
  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">ლეპტოპები</h2>
      <Swiper spaceBetween={32} slidesPerView={7}>
        {laptops.map((product) => (
          <SwiperSlide key={product.id}>
            <Product product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
