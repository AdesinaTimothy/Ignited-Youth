import Image from "next/image";
import React from "react";

function UnitCard({
  image,
  title,
  date,
  description,
}: {
  image: string;
  title: string;
  date: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden max-w-sm">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>

      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{date}</p>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
        <button className="mt-3 bg-green-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-green-700 transition">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default UnitCard;
