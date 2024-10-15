import Image from "next/image";
import React from "react";
interface PropsType {
  title: string;
  description: string;
}
const SectionHeader = ({ title, description }: PropsType) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        width={512}
        height={512}
        className="w-[100px] h-[100px]"
        alt="Flower Icon"
        src="https://i.postimg.cc/Y2FDcYs6/Download-Marigold-Flower-Marigold-Flower-Png-Marigold-Flower-Watercolor-Png-Transparent-Backgroun.jpg"
      />
      <div className="space-y-3 text-center">
        <h2 className="sm:text-4xl text-[2rem] uppercase font-semibold text-secondary">
          {title}
        </h2>
        <p className="sm:w-[500px] w-full font-normal text-gray-400 leading-7">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;
