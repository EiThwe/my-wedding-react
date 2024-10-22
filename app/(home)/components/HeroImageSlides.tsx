"use client";
import MyCarousel from "@/components/MyCarousel";
import React from "react";
import CountDown from "./CountDown";

const HeroImageSlides = () => {
  const slides = [
    {
      imageSrc: "https://i.postimg.cc/GtWL74Lx/photo-2024-09-20-16-14-13.jpg",
      alt: "hero-img-1",
    },
    {
      imageSrc: "https://i.postimg.cc/Z5mrqcpZ/photo-2024-09-20-16-14-10.jpg",
      alt: "hero-img-2",
    },
    {
      imageSrc: "https://i.postimg.cc/Zqh6CLN4/photo-2024-09-20-16-14-09.jpg",
      alt: "hero-img-3",
    },
    {
      imageSrc: "https://i.postimg.cc/vmBx1SBR/photo-2024-09-20-16-14-12.jpg",
      alt: "hero-img-4",
    },
  ];

  return (
    <section>
      <div className="relative">
        <MyCarousel slides={slides} />
        <div className="absolute top-0 left-0 bg-black bg-opacity-30 h-full w-full flex flex-col lg:gap-2 gap-5 justify-center items-center">
          <p className="lg:text-[5rem] text-[3.5rem] font-parisienne font-light text-white">
            Denny & Thwe
          </p>
          <div className="flex gap-3 items-center justify-center">
            <hr className="w-14" />
            <p className="text-white uppercase text-center font-medium text-lg tracking-wider">
              5 Jan 2025
            </p>
            <hr className="w-14" />
          </div>
          <div className="lg:mt-16 mt-8">
            <CountDown targetDate="5 Jan 2025" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroImageSlides;
