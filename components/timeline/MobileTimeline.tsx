import { TimelineItemProps } from "@/components/timeline/TimelineItem";
import React from "react";
interface PropsType {
  items: Omit<TimelineItemProps, "index">[];
}
const MobileTimeline = ({ items }: PropsType) => {
  return (
    <div className="space-y-10 sm:hidden block">
      {items.map((item, i) => (
        <div className="content" key={i}>
          <h3 className="mb-2 text-[1.7rem] font-medium font-parisienne">
            {item.title}
          </h3>
          <span className=" font-semibold text-primary-300  rounded">
            {item.date}
          </span>
          <p className="text-gray-600 lg:w-[400px] mt-3">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MobileTimeline;
