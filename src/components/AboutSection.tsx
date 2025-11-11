import React from "react";
import Link from "next/link";
import Image from "next/image";

interface AboutSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  buttonText?: string;
  buttonLink?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  description,
  imageSrc,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="w-full">
      <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        {/* Left Side: Text */}
        <div className="w-full lg:w-[50%]">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>

          <p className="text-gray-700 text-md md:text-lg mb-8">{description}</p>

          {/* Render button only if both text & link are provided */}
          {buttonText && buttonLink && (
            <Link
              href={buttonLink}
              className="inline-block px-6 py-3 bg-[#3134dd] text-white text-lg font-semibold rounded-lg hover:bg-yellow-600 transition"
            >
              {buttonText}
            </Link>
          )}
        </div>

        {/* Right Side: Image */}
        <div className="w-full h-[400px] lg:w-[45%] relative rounded-xl overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
