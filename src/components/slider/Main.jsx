import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import FirstImage from "../../assets/Images/first-main-image.webp";
import SecondImage from "../../assets/Images/second-main-image.webp";
import ThirdImage from "../../assets/Images/third-main-image.webp";
import FourthImage from "../../assets/Images/fourth-main-image.webp";

const imagePaths = [FirstImage, SecondImage, ThirdImage, FourthImage];

export default function MainSlider() {
  return (
    <Swiper spaceBetween={30} slidesPerView={1}>
      {imagePaths.map((imagePath, index) => (
        <SwiperSlide key={index}>
          <img
            src={imagePath}
            alt={`slider image ${index + 1}`}
            style={{ width: "895px", height: "350px" }}
            className="rounded-xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
