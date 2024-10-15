import React from "react";
import SectionHeader from "./SectionHeader";
import Timeline from "@/components/timeline/Timeline";
import MobileTimeline from "@/components/timeline/MobileTimeline";

const items = [
  {
    date: "27 Nov 2022",
    title: "First Meet",
    description:
      "Initial meeting with the team to outline the project's goals and deliverables.",
    imgUrl: "https://i.postimg.cc/Wzv5wmk6/timeline-1-min.png",
    index: 0,
  },
  {
    date: "9 Jan 2023",
    title: "Anni Date",
    description:
      "Started the design process for the user interface and experience.",

    imgUrl: "https://i.postimg.cc/wvMdXpDQ/timeline-2-min.png",
    index: 1,
  },
  {
    date: "9 Jun 2023",
    title: "Proposal",
    description:
      "Began developing the core features and components of the project.",
    imgUrl: "https://i.postimg.cc/ydc2X8k9/timeline-3-min.png",
    index: 2,
  },
  {
    date: "14 July 2023",
    title: "Engagement",
    description: "Initiated testing for functionality and performance.",
    imgUrl: "https://i.postimg.cc/NFbJp9Yy/timeline-4-min.png",
    index: 3,
  },
];

const OurStorySection = () => {
  return (
    <section
      id="our-story"
      className="lg:py-20 py-16 container flex flex-col justify-center items-center"
    >
      <SectionHeader
        title="Our Story"
        description="Please let us know if you'll be celebrating with us on our special day. Your response helps us plan for an unforgettable wedding!"
      />
      <div className=" w-full lg:py-[5rem] py-16 lg:px-16 sm:px-5 px-8 mt-8 shadow-2xl rounded-sm">
        <Timeline items={items} />
        <MobileTimeline items={items} />
      </div>
    </section>
  );
};

export default OurStorySection;
