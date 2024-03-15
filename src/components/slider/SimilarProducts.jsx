import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Product from "../products/Product";
import "swiper/css";

export default function SimilarProductsSlider({ similarProducts }) {
  return (
    <Swiper
      spaceBetween={100}
      breakpoints={{
        640: {
          spaceBetween: 200,
          slidesPerView: 4,
        },
        768: {
          spaceBetween: 100,
          slidesPerView: 4,
        },
        1024: {
          spaceBetween: 100,
          slidesPerView: 7,
        },
      }}
    >
      {similarProducts.map((product) => (
        <SwiperSlide key={product.id}>
          <Product product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
