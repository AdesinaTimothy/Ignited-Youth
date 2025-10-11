"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface Position {
  left: number;
  width: number;
  opacity: number;
}

export const SlideTabsExample: React.FC = () => {
  return <SlideTabs />;
};

const SlideTabs: React.FC = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() =>
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }))
      }
      className="relative mx-auto flex w-fit rounded-full border-2 border-wh bg-blue-600 p-1"
    >
      {["Home", "About", "Programmes", "Gallery", "Blog"].map((label) => (
        <Tab key={label} setPosition={setPosition}>
          {label}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
};

interface TabProps {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
}

const Tab: React.FC<TabProps> = ({ children, setPosition }) => {
  const ref = useRef<HTMLLIElement | null>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

interface CursorProps {
  position: Position;
}

const Cursor: React.FC<CursorProps> = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};
