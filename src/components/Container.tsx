import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  noCenter?: boolean;
}

const Container = ({ children, noCenter, className = "" }: ContainerProps) => {
  return (
    <div
      className={` ${
        noCenter ? " " : "mx-auto "
      }max-w-7xl  px-6 py-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
