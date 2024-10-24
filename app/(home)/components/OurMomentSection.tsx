"use client"; // Ensure this directive if you're using client-side rendering
import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import { motion } from "framer-motion"; // Import motion from framer-motion

const OurMomentSection = () => {
  const images = [
    {
      src: "https://i.postimg.cc/sfGZmrhV/photo-2024-09-20-16-14-17-3.jpg",
      alt: "timeline-1",
      span: "row-span-2 lg:h-auto sm:h-[372px]",
    },
    {
      src: "https://i.postimg.cc/dtvtCPRN/photo-2024-09-20-16-14-16-4.jpg",
      alt: "timeline-2",
      span: "lg:h-[220px] sm:h-[180px]",
    },
    {
      src: "https://i.postimg.cc/XJf6NqPj/photo-2024-09-20-16-14-17-2.jpg",
      alt: "timeline-3",
      span: "row-span-2 lg:h-auto sm:h-[372px]",
    },
    {
      src: "https://i.postimg.cc/c452SfJ7/photo-2024-09-20-16-14-17.jpg",
      alt: "timeline-4",
      span: "lg:h-[220px] sm:h-[180px]",
    },
    {
      src: "https://i.postimg.cc/zX1SRBcm/photo-2024-09-20-16-14-16-6.jpg",
      alt: "timeline-5",
      span: "lg:h-[200px] sm:h-[180px]",
    },
    {
      src: "https://i.postimg.cc/2SkQ2tY2/photo-2024-09-20-16-14-14.jpg",
      alt: "timeline-6",
      span: "lg:h-[200px] sm:h-[180px]",
    },
    {
      src: "https://i.postimg.cc/25YPcr6g/photo-2024-09-20-16-14-16-5.jpg",
      alt: "timeline-7",
      span: "lg:h-[200px] sm:h-[180px]",
    },
  ];

  return (
    <section id="our-moments" className="container lg:py-20 py-16">
      <SectionHeader
        title="captured moments"
        description="These photos showcase the milestones of our love story, reflecting our joy, laughter, and cherished memories together."
      />
      <div className="grid sm:grid-rows-3 sm:grid-cols-3 grid-cols-1 lg:gap-5 sm:gap-3 gap-2 mt-8">
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
