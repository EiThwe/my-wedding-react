import React from "react";
import SectionHeader from "./SectionHeader";
import Timeline from "@/components/timeline/Timeline";
import MobileTimeline from "@/components/timeline/MobileTimeline";

const items = [
  {
    date: "27 Nov 2022",
    title: "First Meet",
    description:
      "This was the day our journey began. Like a new project kickoff, we met for the first time, sharing smiles and stories that would eventually build the foundation of our relationship.",
    imgUrl: "https://i.postimg.cc/Wzv5wmk6/timeline-1-min.png",
    index: 0,
  },
  {
    date: "9 Jan 2024",
    title: "Anni Date",
    description:
      "Our first anniversary date, a milestone celebrating our growing bond. Like the design phase of a project, we refined our connection, understanding each other more deeply and solidifying our future plans.",
    imgUrl: "https://i.postimg.cc/wvMdXpDQ/timeline-2-min.png",
    index: 1,
  },
  {
    date: "9 Jun 2024",
    title: "Proposal",
    description:
      "A defining moment, the proposal was like moving from concept to implementation. We committed to our future, promising to continue building a life together, much like developing core features of a shared project.",
    imgUrl: "https://i.postimg.cc/ydc2X8k9/timeline-3-min.png",
    index: 2,
  },
  {
    date: "14 July 2024",
    title: "Engagement",
    description:
      "Our engagement marked the official commitment, similar to the testing phase of a project. We ensured our relationship was ready for the next big step, promising to support each other through all challenges ahead.",
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
        description="Our love story is a lifelong project, continuously evolving and growing, as we build, optimize, and celebrate together."
      />
      <div className=" w-full lg:py-[5rem] py-8 lg:px-16 sm:px-5 px-8 mt-8 shadow-2xl rounded-sm">
        <Timeline items={items} />
        <MobileTimeline items={items} />
      </div>
    </section>
  );
};

export default OurStorySection;
