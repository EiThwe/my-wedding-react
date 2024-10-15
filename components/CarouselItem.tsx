import Image from "next/image"; // Adjust the path as needed
import { Slide } from "./types";

const CarouselItem: React.FC<Slide> = ({ imageSrc }) => {
  return (
    <div className="h-[560px]">
      <Image
        src={imageSrc}
        alt="hero"
        width={1024}
        height={512}
        className="w-full h-full object-cover"
      />
    
    </div>
  );
};

export default CarouselItem;
