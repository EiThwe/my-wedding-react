import Image from "next/image";
import React from "react";
import SocialIcons from "./SocialIcons";

const FooterSection = () => {
  return (
    <footer className="!w-full lg:pt-20 pt-16">
      <div className=" relative min-h-screen py-16 bg-cover bg-[url('https://i.postimg.cc/zDpdgcj0/Premium-Vector-Abstract-splashed-watercolor-textured-background.jpg')] bg-no-repeat">
        <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-70 flex flex-col items-center justify-center">
          <div className="relative sm:w-[450px] sm:h-[450px] w-[300px] h-[300px] flex justify-center items-center">
            <Image
              width={512}
              height={512}
              className="sm:w-[450px] sm:h-[450px] w-[300px] h-[300px absolute top-0 left-0"
              src={"https://i.postimg.cc/T2mdKHnN/leaves-frame.png"}
              alt="img-frame"
            />
            <Image
              width={512}
              height={512}
              className="sm:w-[300px] sm:h-[300px] w-[200px] h-[200px] rounded-full"
              src={
                "https://i.postimg.cc/W4BMrMFN/photo-2024-09-20-16-14-16.jpg"
              }
              alt="couple-img"
            />
          </div>
          <p className="sm:text-[5rem] text-[3rem] font-parisienne">
            Thank You
          </p>
          <SocialIcons />
          <p className="text-secondary/50 mt-4 text-center">
            Feel free to contact <span className="text-primary-300">TCUBE</span>{" "}
            to create your own customized invitation website
          </p>
          <p className="text-secondary/50 mt-4">
            &#169; 2024 by <span className="text-primary-300">TCUBE</span>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
