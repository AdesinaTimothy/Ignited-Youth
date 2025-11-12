"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  targetDate: string | Date;
  className?: string;
}

const Countdown: React.FC<CountdownProps> = ({
  targetDate,
  className = "",
}) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
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

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div
      className={`flex gap-3 justify-center items-center flex-wrap ${className}`}
    >
      <TimeCard label="Days" value={timeLeft.days} color="yellow" />
      <TimeCard label="Hours" value={timeLeft.hours} color="blue" />
      <TimeCard label="Minutes" value={timeLeft.minutes} color="yellow" />
      <TimeCard label="Seconds" value={timeLeft.seconds} color="blue" />
    </div>
  );
};

interface TimeCardProps {
  label: string;
  value: number;
  color: "yellow" | "blue";
}

const TimeCard: React.FC<TimeCardProps> = ({ label, value, color }) => {
  const bgColor =
    color === "yellow"
      ? "bg-yellow-500 text-gray-900"
      : "bg-blue-600 text-white";

  return (
    <motion.div
      key={value} // Animate when value changes
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col items-center justify-center rounded-xl shadow-md px-3 py-2 min-w-[60px] sm:min-w-[70px] md:min-w-[80px] text-center ${bgColor}`}
    >
      <span className="text-xl md:text-3xl font-bold tabular-nums">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-xs sm:text-sm md:text-base font-semibold">
        {label}
      </span>
    </motion.div>
  );
};

export default Countdown;
