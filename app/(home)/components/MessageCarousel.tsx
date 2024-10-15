/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import config from "@/app/config";
import ResponsiveCard from "@/components/ResponsiveCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

// const slides = [
//   {
//     name: "Thwe Thwe",
//     message:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos inventore maiores consequatur qui tempore voluptates non, provident officia aliquam illum assumenda voluptatum dolores ad ipsum, deserunt ducimus blanditiis obcaecati placeat.",
//   },
//   {
//     name: "John Doe",
//     message:
//       "Congratulations on this beautiful journey! May your love continue to grow stronger with every passing day. Wishing you all the best for the future.",
//   },
//   {
//     name: "Jane Smith",
//     message:
//       "Sending you my love and warmest wishes as you begin this new chapter. May your life together be filled with happiness, joy, and love.",
//   },
//   {
//     name: "Michael Brown",
//     message:
//       "Wishing you a lifetime of love and happiness. Your wedding day will come and go, but may your love forever grow!",
//   },
//   {
//     name: "Emily Davis",
//     message:
//       "Congratulations on your wedding! May the love and happiness you feel today shine through the years. Best wishes for your future together.",
//   },
//   {
//     name: "Chris Johnson",
//     message:
//       "May your marriage be filled with laughter, love, and adventure. Congratulations and best wishes as you start this beautiful journey!",
//   },
// ];
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
      console.log(response);
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
