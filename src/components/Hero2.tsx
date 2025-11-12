import { sub } from "framer-motion/client";
import Image from "next/image";
import Container from "./Container";

interface HeroSectionProps {
  imageSrc: string;
  imageAlt?: string;
  heading?: string;
  description?: string;
  overlayOpacity?: number;
  highlightedText?: string;
  emoji?: string;
  subheading?: string;
  heightClass?: string;
}

export default function HeroSection({
  imageSrc,
  imageAlt = "Hero background",
  heading,
  description,
  highlightedText,
  emoji,
  subheading,
  overlayOpacity = 70,
  heightClass = "h-[400px]",
}: HeroSectionProps) {
  return (
    <div className="relative h-[400px] w-full">
      {/* Optimized Background Image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        quality={85}
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity / 100 }}
      />

      {/* Content - Left Aligned  */}
      <div className=" relative z-10 flex items-center justify-start h-full">
        <Container className=" w-full">
          <div className="flex justify-start">
            <div className="text-left max-w-3xl">
              {/* Heading */}
              <h1 className="text-4xl font-bold md:text-[65px] leading-tight md:font-extrabold text-white mt-8 mb-4">
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
              <p className="text-md md:text-xl text-gray-100 mb-8">
                {description}
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
