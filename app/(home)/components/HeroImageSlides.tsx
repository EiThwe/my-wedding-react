"use client";
import MyCarousel from "@/components/MyCarousel";
import React from "react";
import CountDown from "./CountDown";

const slides = [
  {
    imageSrc: "https://i.postimg.cc/kXgTKTCp/hero-1-1.jpg",
    alt: "hero-img-1",
    position: "object-center",
  },
  {
    imageSrc: "https://i.postimg.cc/6QJVjcsw/hero-2.jpg",
    alt: "hero-img-2",
    position: "object-top",
  },
  {
    imageSrc: "https://i.postimg.cc/8c6P0RgQ/hero-3.jpg",
    alt: "hero-img-3",
    position: "object-top",
  },
  {
    imageSrc: "https://i.postimg.cc/L4ctvSrw/hero-4-1.jpg",
    alt: "hero-img-4",
    position: "object-bottom",
  },
];

const HeroImageSlides = () => {
  return (
    <section>
      <div className="relative">
        <MyCarousel slides={slides} />
        <div className="absolute top-[32%] left-0 w-full flex flex-col lg:gap-0 gap-5 justify-center items-center">
          <p className="lg:text-[4.5rem] text-[3.5rem] font-parisienne font-light text-white">
            Denny & Thwe
          </p>
          <div className="flex gap-3 items-center justify-center">
            <hr className="w-14" />
            <p className="text-white uppercase text-center font-medium text-lg tracking-wider">
              5 Jan 2025
            </p>
            <hr className="w-14" />
          </div>
          <div className=" mt-8">
            <CountDown targetDate="5 Jan 2025" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroImageSlides;
