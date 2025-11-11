import React from "react";

export interface TeamCardProps {
  image: string;
  name: string;
  role: string;
  className?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  image,
  name,
  role,
  className,
}) => {
  return (
    <div
      className={`relative w-full rounded-xl overflow-hidden shadow-lg group ${
        className || ""
      }`}
    >
      {/* Background image with zoom on hover */}
      <img
        src={image}
        alt={name}
        className="object-cover w-full h-full transform group-hover:scale-105 brightness-90 group-hover:brightness-100 transition-all duration-500"
      />

      {/* Gradient overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

      {/* Overlay info card */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md rounded-md shadow-lg px-3 py-3 w-11/12 transform transition-all duration-300 group-hover:-translate-y-3">
        <h3 className="text-sm md:text-sm font-bold text-gray-900">{name}</h3>
        <p className="text-sm md:text-sm text-gray-600">{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
