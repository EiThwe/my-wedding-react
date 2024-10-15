import React from "react";
import SectionHeader from "./SectionHeader";
import MessageCarousel from "./MessageCarousel";

const MessageSection = () => {
  return (
    <section className="py-20 lg:px-32 px-4">
      <SectionHeader
        title="Best Wishes"
        description="Your heartfelt words mean the world to us. Please share your love and blessings for our future together."
      />
      <MessageCarousel />
    </section>
  );
};

export default MessageSection;
