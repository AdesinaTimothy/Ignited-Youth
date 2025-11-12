"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimony {
  name: string;
  message: string;
}

interface TestimonyCarouselProps {
  testimonies: Testimony[];
  autoPlay?: boolean;
  interval?: number;
}

const TestimonyCarousel: React.FC<TestimonyCarouselProps> = ({
  testimonies,
  autoPlay = true,
  interval = 8000, // 8 seconds per slide
}) => {
  const [current, setCurrent] = useState(0);

  // Auto-rotate
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonies.length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, testimonies.length]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonies.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? testimonies.length - 1 : prev - 1));

  return (
    <section className="w-full py-2">
      <div className="max-w-4xl mx-auto md:text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Testimonies from last{" "}
          <span className="text-yellow-500">Upper Room</span> meeting
        </h2>
        <p className="text-md md:text-lg text-align md:text-center text-gray-600 max-w-3xl mx-auto">
          Hear what God is doing in the lives of our community members. Each
          story reminds us of His faithfulness and transforming power made
          available during every upperRoom meetings.
        </p>

        <div className="relative overflow-hidden mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="bg-gray-100 p-8 md:p-10 rounded-3xl shadow-md"
            >
              <p className="text-gray-700 text-md md:text-lg leading-relaxed mb-6">
                “{testimonies[current].message}”
              </p>
              <h3 className="text-lg font-semibold text-gray-900">
                — {testimonies[current].name}
              </h3>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={prevSlide}
            aria-label="Previous testimony"
            className="p-3 rounded-full bg-white shadow-md hover:bg-yellow-500 hover:text-white transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next testimony"
            className="p-3 rounded-full bg-white shadow-md hover:bg-yellow-500 hover:text-white transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-3 mt-5">
          {testimonies.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                current === index
                  ? "bg-yellow-500 w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonyCarousel;
