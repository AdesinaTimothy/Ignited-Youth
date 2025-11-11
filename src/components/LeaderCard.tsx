import React from "react";

interface LeaderCardProps {
  image: string;
  name: string;
  role: string;
}

export default function LeaderCard({ image, name, role }: LeaderCardProps) {
  return (
    <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-lg group">
      {/* Background image */}
      <img
        src={image}
        alt={name}
        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
      />

      {/* Overlay card */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md rounded-xl shadow-md px-4 py-2 text-center w-11/12">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
}
