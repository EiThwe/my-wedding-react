import React from "react";
import SectionHeader from "./SectionHeader";
import { GiBusStop } from "react-icons/gi";
import { IoBus } from "react-icons/io5";

import { PiStopCircleBold } from "react-icons/pi";

const busNumbers = [6, 15, 37, 43, 44, 55, 77, 90, 97, 103, 104, 105, 106, 107];
const LocationSection = () => {
  return (
    <section id="location-guide" className="container lg:py-20 py-16">
      <SectionHeader
        title="Location Guideline"
        description="Join us at 9 Mile Shan Monestry. Please review directions to ensure a smooth experience. We can't wait to celebrate!"
      />
      <div className="flex sm:flex-row flex-col lg:gap-10 sm:gap-5 gap-8 mt-8">
        <div className="sm:w-[80%] w-full lg:h-[450px] h-[400px] border-4 border-double border-primary-200 shadow-2xl rounded-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.9631920032048!2d96.15237757367467!3d16.8281820186768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c19464774f1785%3A0x5e2c632c2538939b!2s9%20Miles%20Shan%20Monastery!5e0!3m2!1sen!2ssg!4v1727319655597!5m2!1sen!2ssg"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="sm:w-[20%] w-full space-y-4 flex flex-col justify-center h-auto">
          <p className="flex gap-3 items-center">
            <GiBusStop size={30} className="text-secondary-300" />
            <span className="font-medium text-secondary-300">A1 bus stop</span>
          </p>
          <hr className="border border-dashed border-secondary-400/20" />
          <div className="space-y-3">
            <p className="flex gap-3 items-center">
              <IoBus size={20} className="text-secondary-300" />
              <span className="font-medium text-secondary-300">
                YBS Numbers
              </span>
            </p>
            <ul className="lg:ml-6 grid grid-cols-2 lg:gap-x-10 gap-y-2 gap-x-0">
              {busNumbers.map((busNumber, index) => (
                <li
                  key={index}
                  className="flex gap-1 items-center text-secondary-300"
                >
                  <PiStopCircleBold />
                  <span className="text-sm">{busNumber}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
