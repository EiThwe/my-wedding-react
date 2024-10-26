"use client"; // Ensure this directive if you're using client-side rendering
import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import { motion } from "framer-motion"; // Import motion from framer-motion

const OurMomentSection = () => {
  const images = [
    
    {
      src: "https://i.postimg.cc/BbqfdT5C/8M1A4651.jpg",
      alt: "timeline-1",
      span: "row-span-2 lg:h-auto sm:h-[372px]",
    },
    {
      src: "https://i.postimg.cc/R0ZBsQRQ/8M1A4647.jpg",//https://i.postimg.cc/65xNJNcQ/8M1A4657.jpg
      alt: "timeline-2",
      span: "row-span-2 lg:h-auto sm:h-[372px]",
    },
    {
      src: "https://i.postimg.cc/vHBpfH0D/8M1A4654.jpg", //https://i.postimg.cc/vHBpfH0D/8M1A4654.jpg
      alt: "timeline-3",
      span: " row-span-2 lg:h-auto sm:h-[372px]",
    },
    {
      src: "https://i.postimg.cc/QNRy9kKY/8M1A4638.jpg",
      alt: "timeline-4",
      span: "row-span-2 lg:h-auto sm:h-[372px]",
    },
    {
      src: "https://i.postimg.cc/rp0VJNg0/8M1A4664.jpg",
      alt: "timeline-5",
      span: "lg:h-[220px] sm:h-[180px]",
    },
    {
      src: "https://i.postimg.cc/65xNJNcQ/8M1A4657.jpg", //https://i.postimg.cc/65xNJNcQ/8M1A4657.jpg
      alt: "timeline-6",
      span: "row-span-2 lg:h-auto sm:h-[372px]",
    },
    {
      src: "https://i.postimg.cc/NFktCNWD/8M1A4641.jpg",
      alt: "timeline-7",
      span: "lg:h-[220px] sm:h-[180px]",
    },
  ];

  return (
    <section id="our-moments" className="container lg:py-20 py-16">
      <SectionHeader
        title="captured moments"
        description="These photos showcase the milestones of our love story, reflecting our joy, laughter, and cherished memories together."
      />
      <div className="grid sm:grid-rows-4 sm:grid-cols-3 grid-cols-1 lg:gap-5 sm:gap-3 gap-2 mt-8">
        {images.map((image, index) => (
          <motion.div
            key={index} // Use index as key (consider unique IDs if available)
            initial={{ opacity: 0 }} // Start hidden
            whileInView={{ opacity: 1 }} // Fade in when in view
            transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered delay based on index
            viewport={{ once: true }}
            className={image.span} // Use span from image object
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={512}
              height={1024}
              className="w-full h-full"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurMomentSection;
