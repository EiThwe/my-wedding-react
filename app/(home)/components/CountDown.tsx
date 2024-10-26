"use client";

import React, { useState, useEffect } from "react";

interface PropsType {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountDown: React.FC<PropsType> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isMounted, setIsMounted] = useState(false); // Check if mounted

  // Helper function to calculate time left
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  // On mount, set up the countdown
  useEffect(() => {
    setIsMounted(true); // Mark as mounted

    // Update the time left right away
    setTimeLeft(calculateTimeLeft());

    // Set up an interval to update time left every second
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clean up the interval on unmount
    return () => clearInterval(intervalId);
  }, [targetDate]); // Dependency only on targetDate

  // Pad numbers to display in two digits
  const padNumber = (num: number) => String(num).padStart(2, "0");

  // Create timer components dynamically
  const timerComponents: JSX.Element[] = Object.keys(timeLeft).map((interval) => (
    <div
      key={interval}
      className="flex flex-col sm:gap-2 gap-1 items-center sm:min-w-24 min-w-20 sm:p-4 py-4 px-1 bg-primary-800 rounded-lg text-primary-100 shadow-lg"
    >
      <span className="sm:text-4xl text-xl font-semibold">
        {padNumber(timeLeft[interval as keyof TimeLeft])}
      </span>
      <span className="uppercase sm:text-sm text-xs">{interval}</span>
    </div>
  ));

  // Prevent rendering the countdown until the component is mounted
  if (!isMounted) {
    return null; // Render nothing while waiting for client-side mount
  }

  return (
    <div className="flex sm:space-x-7 space-x-1">
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className="text-4xl text-white">Time&apos;s up!</span>
      )}
    </div>
  );
};

export default CountDown;
