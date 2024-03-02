import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation } from "swiper";

import FirstImage from "../../assets/Images/first-main-image.webp";
import SecondImage from "../../assets/Images/second-main-image.webp";
import ThirdImage from "../../assets/Images/third-main-image.webp";
import FourthImage from "../../assets/Images/fourth-main-image.webp";
// import PrevSlideIcon from "../icons/PrevSlideIcon";
// import NextSlideIcon from "../icons/NextSlideIcon";
// import Button from "../button/Index";
const imagePaths = [FirstImage, SecondImage, ThirdImage, FourthImage];

// SwiperCore.use([Navigation]);

export default function MainSlider() {
  // const swiperRef = React.useRef(null);

  // const handlePrevClick = () => {
  //   if (swiperRef.current) {
  //     swiperRef.current.slidePrev();
  //   }
  // };

  // const handleNextClick = () => {
  //   if (swiperRef.current) {
  //     swiperRef.current.slideNext();
  //   }
  // };
  return (
    <div className="relative">
      {" "}
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
      {/* Custom Buttons */}
      {/* <div className="absolute top-1/2 left-1 transform -translate-y-1/2 z-10 flex justify-center items-center cursor-pointer rounded-full shadow-md">
        <Button onClick={handlePrevClick}>
          <PrevSlideIcon />
        </Button>
      </div>
      <div className="absolute top-1/2 right-1 transform -translate-y-1/2 z-10 flex justify-center items-center cursor-pointer rounded-full shadow-md">
        <Button onClick={handleNextClick}>
          <NextSlideIcon />
        </Button>
      </div> */}
    </div>
  );
}
