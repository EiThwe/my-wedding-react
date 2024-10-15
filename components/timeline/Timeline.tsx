// components/Timeline/Timeline.tsx
import React from "react";
import TimelineItem, { TimelineItemProps } from "./TimelineItem";

interface TimelineProps {
  items: Omit<TimelineItemProps, "index">[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative sm:block hidden">
      <div className="absolute inset-0 left-1/2 w-0.5 bg-secondary-400/20 transform -translate-x-1/2" />
      <div className="">
        {items.map((item, index) => (
          <TimelineItem
            key={index}
            index={index}
            {...item}
            isLast={index === items.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
