"use client"; // Ensure this directive if you're using client-side rendering
import React from "react";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { motion } from "framer-motion"; // Import motion from framer-motion

export interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  index: number;
  imgUrl?: string;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  description,
  index,
  imgUrl,
  isLast,
}) => {
  const isRight = index % 2 === 0;

  return (
    <div
      className={classNames(
        "relative flex mx-auto sm:max-w-[900px] w-full h-[250px] justify-between",
        {
          "flex-row-reverse": isRight,
        }
      )}
    >
      {/* Animated Image Section */}
      <motion.div
        className={classNames("w-1/2 flex items-center", {
          "justify-start pr-8": isRight,
          "justify-end pl-8": !isRight,
        })}
        initial={{ x: isRight ? 100 : -100, opacity: 0 }} // Start from the side and hidden
        whileInView={{ x: 0, opacity: 1 }} // Move to center and become visible
        transition={{ duration: 1.5 }} // Duration of the animation
        viewport={{ once: true }}
      >
        <Image
          src={imgUrl as string}
          alt="timeline-1"
          width={512}
          height={1024}
          className="w-[150px] h-[180px] object-contain"
        />
      </motion.div>

      {/* Animated Text Section */}
      <motion.div
        className={classNames("w-1/2", {
          "order-1 text-right pr-8": isRight,
          "order-2 text-left pl-8": !isRight,
          "flex items-center h-full": index !== 0,
        })}
        initial={{ x: isRight ? -100 : 100, opacity: 0 }} // Start from the side and hidden
        whileInView={{ x: 0, opacity: 1 }} // Move to center and become visible
        transition={{ duration: 1.5 }} // Duration of the animation
        viewport={{ once: true }}
      >
        <div className="content">
          <h3 className="mb-2 text-3xl font-medium font-parisienne text-secondary">
            {title}
          </h3>
          <span className=" font-semibold text-primary-300 rounded">
            {date}
          </span>
          <p className="text-gray-400 lg:w-[400px] mt-3">{description}</p>
        </div>
      </motion.div>

      <hr
        className={twMerge(
          "border border-secondary-400/20 w-[120px] border-dashed translate-y-3",
          isRight
            ? "lg:translate-x-6 translate-x-16"
            : "lg:-translate-x-6 -translate-x-16"
        )}
      />
      <div
        className={twMerge(
          "absolute top-0 left-1/2 w-6 h-6 rounded-full transform -translate-x-1/2 border-2",
          index === 0
            ? "bg-primary-300 border-primary-300"
            : "bg-white border-secondary-400/20"
        )}
      />
      {isLast && (
        <div className="absolute bottom-0 left-1/2 w-6 h-6 bg-primary-300 border-primary-300 rounded-full transform -translate-x-1/2 border-2" />
      )}
    </div>
  );
};

export default TimelineItem;
