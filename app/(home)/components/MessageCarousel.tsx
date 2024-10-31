/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import config from "@/app/config";
import ResponsiveCard from "@/components/ResponsiveCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const settings = {
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024, // tablets and larger screens
      settings: {
        slidesToShow: 2, // show 2 slides on tablets
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 768, // smaller tablets
      settings: {
        slidesToShow: 2, // show 1 slide for smaller tablets
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 480, // mobile devices
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};
const MessageCarousel: React.FC = () => {
  const [slides, setSlide] = useState([]);
  useEffect(() => {
    const fetchMessage = async () => {
      const response = await axios.get(`${config.BASE_URL}registrations`);
      setSlide(response?.data ?? []);
    };
    fetchMessage();
  }, []);

  return (
    <div className="relative overflow-hidden mt-8">
      <Slider className="max-w-[100vw]" {...settings}>
        {slides.map((slide: any, index: number) => (
          <ResponsiveCard
            key={index}
            name={slide.name}
            message={slide.message}
          />
        ))}
      </Slider>
    </div>
  );
};

export default MessageCarousel;
