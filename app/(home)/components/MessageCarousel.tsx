/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import config from "@/app/config";
import ResponsiveCard from "@/components/ResponsiveCard";
import { decryptor } from "@/lib/encryption";
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
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get(`${config.BASE_URL}registrations`);
        const { iv, encryptedData } = response.data;

        // Decrypt the fetched data
        const decryptedData = decryptor(iv, encryptedData);

        // Set the decrypted data in the state
        setSlides((decryptedData as any) ?? []);
      } catch (error) {
        console.error("Error fetching or decrypting data:", error);
      }
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
