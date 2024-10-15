import Link from "next/link";
import React from "react";

const NavigationLinks = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 lg:block hidden">
      <div className="flex justify-center items-center uppercase tracking-wide text-sm">
        <nav className="flex space-x-8">
          <Link
            href="#"
            className="border-b-2 border-transparent text-secondary hover:border-primary hover:text-primary px-3 py-5 text-sm font-semibold tracking-wide"
          >
            Home
          </Link>
          <Link
            href="#invitation"
            className="border-b-2 border-transparent text-secondary hover:border-primary hover:text-primary px-3 py-5 text-sm font-semibold tracking-wide"
          >
            Invitation
          </Link>
          <Link
            href="#happy-couple"
            className="border-b-2 border-transparent text-secondary hover:border-primary hover:text-primary px-3 py-5 text-sm font-semibold tracking-wide"
          >
            Happy Couple
          </Link>
          <Link
            href="#our-story"
            className="border-b-2 border-transparent text-secondary hover:border-primary hover:text-primary px-3 py-5 text-sm font-semibold tracking-wide"
          >
            Our Story
          </Link>
          <Link
            href="#our-moments"
            className="border-b-2 border-transparent text-secondary hover:border-primary hover:text-primary px-3 py-5 text-sm font-semibold tracking-wide"
          >
            Our Moments
          </Link>
          <Link
            href="#location-guide"
            className="border-b-2 border-transparent text-secondary hover:border-primary hover:text-primary px-3 py-5 text-sm font-semibold tracking-wide"
          >
            Location
          </Link>
          <Link
            href="#attendance"
            className="border-b-2 border-transparent text-secondary hover:border-primary hover:text-primary px-3 py-5 text-sm font-semibold tracking-wide"
          >
            Attendance
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NavigationLinks;
