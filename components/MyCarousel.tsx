import React from "react";
import Slider from "react-slick";
// Adjust the path as needed
import { Slide } from "./types"; // Adjust the path as needed
import CarouselItem from "./CarouselItem";

interface MyCarouselProps {
  slides: Slide[];
}

const MyCarousel: React.FC<MyCarouselProps> = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    // draggable: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative overflow-hidden">
      <Slider className="max-w-[100vw]" {...settings}>
        {slides.map((slide, index) => (
          <CarouselItem key={index} {...slide} />
        ))}
      </Slider>
    </div>
  );
};

export default MyCarousel;
