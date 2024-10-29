"use client";
import MyCarousel from "@/components/MyCarousel";
import React from "react";
import CountDown from "./CountDown";
import useIsMobile from "@/hooks/useIsMobile";

const HeroImageSlides = () => {
  const isMobile = useIsMobile();

  const slides = [
    {
      imageSrc: isMobile
        ? "https://i.postimg.cc/xddSHYNb/8M1A4634.jpg" // Mobile image
        : "https://i.postimg.cc/26p1BShZ/16-20-Frame-MT-AL-8-M1-A4673.jpg", // Desktop image
      alt: "hero-img-1",
      position: "object-center",
    },
    {
      imageSrc: isMobile
        ? "https://i.postimg.cc/x8XCPMkM/8M1A4636.jpg" // Mobile image
        : "https://i.postimg.cc/L8QpWQs4/8M1A4613.jpg", // Desktop image
      alt: "hero-img-2",
      position: "object-top",
    },
    {
      imageSrc: isMobile
        ? "https://i.postimg.cc/44vZr8Gy/8M1A4633.jpg" // Mobile image
        : "https://i.postimg.cc/htXDKR6Q/hero-4.jpg", // Desktop image
      alt: "hero-img-3",
      position: "object-top",
    },
    {
      imageSrc: isMobile
        ? "https://i.postimg.cc/hjPbcywn/8M1A4611.jpg" // Mobile image
        : "https://i.postimg.cc/Hs8F6Wyx/8M1A4675.jpg", // Desktop image
      alt: "hero-img-4",
      position: "object-bottom",
    },
  ];

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
          <div className="mt-8">
            <CountDown targetDate="5 Jan 2025" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImageSlides;
