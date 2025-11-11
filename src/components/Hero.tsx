import Image from "next/image";

interface HeroSectionProps {
  imageSrc: string;
  imageAlt?: string;
  heading: string;
  highlightedText?: string;
  emoji?: string;
  subheading?: string;
  description: string;
  overlayOpacity?: number;
}

export default function HeroSection({
  imageSrc,
  imageAlt = "Hero background",
  heading,
  highlightedText,
  emoji,
  subheading,
  description,
  overlayOpacity = 70,
}: HeroSectionProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Optimized Background Image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-black Z-0"
        style={{ opacity: overlayOpacity / 100 }}
      />

      {/* Content */}
      <div className=" relative z-10 flex items-center justify-center h-full px-6">
        <div className="text-center max-w-3xl">
          {/* Heading */}
          <h1 className="text-4xl font-bold md:text-[65px] leading-tight md:font-extrabold text-white mt-5 mb-6">
            {heading}{" "}
            {highlightedText && (
              <span className="text-yellow-500">{highlightedText}</span>
            )}
            {emoji && emoji}
          </h1>

          {/* Subheading */}
          {subheading && (
            <p className="text-lg font-bold text-yellow-500 md:text-xl mb-6">
              {subheading}
            </p>
          )}

          {/* Description */}
          <p className="text-md md:text-xl text-gray-100 mb-8">{description}</p>
        </div>
      </div>
    </div>
  );
}
