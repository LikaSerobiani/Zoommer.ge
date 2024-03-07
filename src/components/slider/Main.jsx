import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrevSlideIcon from "../icons/PrevSlideIcon";
import NextSlideIcon from "../icons/NextSlideIcon";

import FirstImage from "../../assets/Images/first-main-image.webp";
import SecondImage from "../../assets/Images/second-main-image.webp";
import ThirdImage from "../../assets/Images/third-main-image.webp";
import FourthImage from "../../assets/Images/fourth-main-image.webp";

export default function MainSlider() {
  const sliderRef = useRef(null);

  const settings = {
    arrows: false,
    dots: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="relative max-w-[895px]">
      <div className="absolute top-1/2 left-1 transform -translate-y-1/2 z-10 flex justify-center items-center cursor-pointer rounded-full shadow-md">
        <button onClick={goToPrev}>
          <PrevSlideIcon />
        </button>
      </div>
      <div className="absolute top-1/2 right-1 transform -translate-y-1/2 z-10 flex justify-center items-center cursor-pointer rounded-full shadow-md">
        <button onClick={goToNext}>
          <NextSlideIcon />
        </button>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {[FirstImage, SecondImage, ThirdImage, FourthImage].map(
          (main, index) => (
            <div key={index}>
              <img
                src={main}
                alt={`Image ${index + 1}`}
                style={{ width: "895px", height: "330px" }}
                className="rounded-lg"
              />
            </div>
          )
        )}
      </Slider>
    </div>
  );
}
