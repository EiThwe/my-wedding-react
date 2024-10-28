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
        <div className="sm:w-[80%] w-full lg:h-[450px] h-[400px] border-4 border-double border-primary-200 shadow-lg rounded-sm">
          <iframe
            title="Map showing our wedding location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1590.4526841920335!2d96.13943015033385!3d16.87506570605076!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1946471a8777b%3A0xa28e544102e99a0b!2zQXVuZyBNeWF5IEJvbmUgVGhhIFNoYW4gTW9uYXN0ZXJ5LCBQeWF5IFJkLCBZYW5nb24sIOC5gOC4oeC4teC4ouC4meC4oeC4siAo4Lie4Lih4LmI4LiyKQ!5e0!3m2!1sth!2sth!4v1729750093656!5m2!1sth!2sth"
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
