import Image from "next/image"; // Adjust the path as needed
import { Slide } from "./types";
import { twMerge } from "tailwind-merge";
import useIsMobile from "@/hooks/useIsMobile";

const CarouselItem: React.FC<Slide> = ({ mobileSrc, desktopSrc, position }) => {
  const isMobile = useIsMobile();

  return (
    <div className="h-[750px] relative">
      <Image
        src={isMobile ? mobileSrc : desktopSrc}
        alt="hero"
        width={1024}
        height={512}
        className={twMerge("w-full h-full object-cover", position)}
      />
      <div className="absolute top-0 left-0 bg-black bg-opacity-30 w-full h-full" />
    </div>
  );
};

export default CarouselItem;
