import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrevSlideIcon from "../icons/PrevSlideIcon";
import NextSlideIcon from "../icons/NextSlideIcon";
import Product from "../products/Product";
import { useTheme } from "../../context/ThemeSwitcher";

export default function DefaultSlider({ title, products }) {
  const { isDarkMode } = useTheme();

  if (!products) {
    return null;
  }

  const sliderRef = useRef(null);

  const settings = {
    arrows: false,
    dots: false,
    speed: 600,
    slidesToShow: 5.7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3.1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
    ],
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
    <div className="relative mt-[50px]">
      <h2
        className={`mb-4 text-xl font-bold ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h2>

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
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Slider>
    </div>
  );
}
