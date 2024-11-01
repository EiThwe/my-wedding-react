import { useState } from "react";
import Image from "next/image";
import { BsSuitHeartFill } from "react-icons/bs";

interface PropsType {
  message: string;
  name: string;
}

const COUNT_LIMIT = 95;

const ResponsiveCard = ({ message, name }: PropsType) => {
  const [messageCount, setMessageCount] = useState(COUNT_LIMIT);

  // Handler to toggle the expanded state
  // const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="relative cursor-pointer lg:w-[380px] sm:w-[350px] h-[300px] border-4 border-double border-primary-200 shadow-md overflow-hidden bg-primary-100/10">
      <Image
        width={512}
        height={512}
        className="w-[200px] h-[200px] absolute lg:-bottom-[25%] lg:-left-[25%] -bottom-[28%] -left-[28%]"
        src="https://i.postimg.cc/GtyKgVfg/Download-Watercolor-Floral-Flower-Design-Watercolor-Flower-Arrangements-Floral-Watercolor-Flower-D.png"
        alt="left-flower"
      />
      <Image
        width={512}
        height={512}
        className="w-[200px] h-[200px] absolute lg:-top-[25%] lg:-right-[25%] -top-[28%] -right-[28%]"
        src="https://i.postimg.cc/GtyKgVfg/Download-Watercolor-Floral-Flower-Design-Watercolor-Flower-Arrangements-Floral-Watercolor-Flower-D.png"
        alt="right-flower"
      />

      <div className="flex flex-col justify-center items-center h-full gap-2 px-4">
        <p className="text-3xl font-parisienne font-medium text-secondary-300">
          Best Wishes
        </p>
        <div
          onClick={() =>
            messageCount !== COUNT_LIMIT
              ? setMessageCount(COUNT_LIMIT)
              : setMessageCount(message?.length)
          }
          className={`text-[15px] w-[240px] text-center text-secondary-300  max-h-[100px] overflow-y-auto scrollbar-none`}
        >
          {message?.slice(0, messageCount)}
          {message?.length > COUNT_LIMIT && messageCount == COUNT_LIMIT && (
            <span>...</span>
          )}
        </div>

        <BsSuitHeartFill className="text-primary-400" />
        <p className="text-[15px] text-secondary-300 font-medium">{name}</p>
      </div>
    </div>
  );
};

export default ResponsiveCard;
