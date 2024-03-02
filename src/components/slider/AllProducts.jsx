import React from "react";

import Product from "../products/Product";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function AllProductsSlider({ products }) {
  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">ყველა პროდუქტი</h2>
      <Swiper spaceBetween={32} slidesPerView={7}>
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Product product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
