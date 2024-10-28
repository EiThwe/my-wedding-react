/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Header from "./components/Header";
import WeddingAnnouncement from "./components/WeddingAnnouncement";

import HeroImageSlides from "./components/HeroImageSlides";
import GreetingSection from "./components/GreetingSection";
import InvitationSection from "./components/InvitationSection";
import RegistrationFormSection from "./components/RegistrationFormSection";
import OurStorySection from "./components/OurStorySection";
import FooterSection from "./components/FooterSection";
import OurMomentSection from "./components/OurMomentSection";
import LocationSection from "./components/LocationSection";
import MessageSection from "./components/MessageSection";

const page = () => {
  return (
    <main>
      <WeddingAnnouncement />
      <Header />
      <section className="overflow-x-hidden">
        <HeroImageSlides />
        <InvitationSection />
        <GreetingSection />
        <OurStorySection />
        <OurMomentSection />
        <LocationSection />
        <MessageSection />
        <RegistrationFormSection />
        <FooterSection />
      </section>
    </main>
  );
};

export default page;
