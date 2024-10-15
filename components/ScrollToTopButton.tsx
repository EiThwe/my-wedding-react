"use client";
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll position to top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      <button
        onClick={scrollToTop}
        className={twMerge(
          "scroll-button w-12 h-12 flex justify-center items-center fixed sm:bottom-5 bottom-16 transition-all ease-in-out duration-500 right-5 bg-primary-300 text-primary-100 border-2 border-primary-400 rounded-full circle-shadow",
          isVisible ? "translate-y-0" : "translate-y-[5rem]"
        )}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
