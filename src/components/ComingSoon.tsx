// components/ComingSoonTag.tsx
import { div } from "framer-motion/client";
import React from "react";

interface ComingSoonTagProps {
  text?: string;
  className?: string;
}

const ComingSoonTag: React.FC<ComingSoonTagProps> = ({
  text = "Coming Soon",
  className = "",
}) => {
  return (
    <span
      className={`ml-2 inline-flex text-[10px] font-semibold uppercase text-white bg-yellow-500 px-2.5 py-[5px] rounded-full shadow-sm animate-pulse ${className}`}
    >
      {text}
    </span>
  );
};

export default ComingSoonTag;
