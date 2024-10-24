"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface PropsType {
  title: string;
  description: string;
}

const SectionHeader = ({ title, description }: PropsType) => {
  // Split the description into separate lines
  const descriptionLines = description.split("\n");

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Animate the image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Initial state for image
        whileInView={{ opacity: 1, y: 0 }} // Animate to visible state when in view
        transition={{ duration: 1.5 }} // Animation duration for image
        viewport={{ once: true }}
      >
        <Image
          width={512}
          height={512}
          className="w-[100px] h-[100px]"
          alt="Flower Icon"
          src="https://i.postimg.cc/Y2FDcYs6/Download-Marigold-Flower-Marigold-Flower-Png-Marigold-Flower-Watercolor-Png-Transparent-Backgroun.jpg"
        />
      </motion.div>

      <div className="space-y-3 text-center">
        {/* Animate the title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }} // Initial state for title
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible state when in view
          transition={{ duration: 1.5 }} // Animation duration for title
          viewport={{ once: true }}
          className="sm:text-4xl text-[2rem] uppercase font-semibold text-secondary"
        >
          {title}
        </motion.h2>

        {/* Animate each line of description separately */}
        {descriptionLines.map((line, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }} // Initial state for description lines
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible state when in view
            transition={{ duration: 1.5, delay: index * 0.2 }} // Staggered delay based on the line index
            viewport={{ once: true }}
            className="sm:w-[500px] w-full font-normal text-gray-400 leading-7"
          >
            {line}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

export default SectionHeader;
