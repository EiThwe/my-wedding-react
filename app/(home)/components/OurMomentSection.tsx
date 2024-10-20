import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

const OurMomentSection = () => {
  return (
    <section id="our-moments" className="container lg:py-20 py-16">
      <SectionHeader
        title="captured moments"
        description="These photos showcase the milestones of our love story, reflecting our joy, laughter, and cherished memories together."
      />
      <div className="grid sm:grid-rows-3 sm:grid-cols-3 grid-cols-1 lg:gap-5 sm:gap-3 gap-2 mt-8">
        <div className=" row-span-2 lg:h-auto sm:h-[372px]">
          <Image
            src={
              "https://i.postimg.cc/sfGZmrhV/photo-2024-09-20-16-14-17-3.jpg"
            }
            alt="timeline-1"
            width={512}
            height={1024}
            className="w-full h-full"
          />
        </div>

        <div className="lg:h-[220px] sm:h-[180px] ">
          <Image
            src={
              "https://i.postimg.cc/dtvtCPRN/photo-2024-09-20-16-14-16-4.jpg"
            }
            alt="timeline-1"
            width={512}
            height={1024}
            className="w-full h-full"
          />
        </div>
        <div className="row-span-2 lg:h-auto sm:h-[372px] ">
          <Image
            src={
              "https://i.postimg.cc/XJf6NqPj/photo-2024-09-20-16-14-17-2.jpg"
            }
            alt="timeline-1"
            width={512}
            height={1024}
            className="w-full h-full"
          />
        </div>

        <div className="lg:h-[220px] sm:h-[180px] ">
          <Image
            src={"https://i.postimg.cc/c452SfJ7/photo-2024-09-20-16-14-17.jpg"}
            alt="timeline-1"
            width={512}
            height={1024}
            className="w-full h-full"
          />
        </div>
        <div className="lg:h-[200px] sm:h-[180px] ">
          <Image
            src={
              "https://i.postimg.cc/zX1SRBcm/photo-2024-09-20-16-14-16-6.jpg"
            }
            alt="timeline-1"
            width={512}
            height={1024}
            className="w-full h-full"
          />
        </div>
        <div className=" lg:h-[200px]  sm:h-[180px] ">
          <Image
            src={"https://i.postimg.cc/2SkQ2tY2/photo-2024-09-20-16-14-14.jpg"}
            alt="timeline-1"
            width={512}
            height={1024}
            className="w-full h-full"
          />
        </div>
        <div className=" lg:h-[200px] sm:h-[180px] ">
          <Image
            src={
              "https://i.postimg.cc/25YPcr6g/photo-2024-09-20-16-14-16-5.jpg"
            }
            alt="timeline-1"
            width={512}
            height={1024}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default OurMomentSection;
