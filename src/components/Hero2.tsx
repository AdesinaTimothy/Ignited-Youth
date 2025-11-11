import Image from "next/image";

interface HeroSectionProps {
  imageSrc: string;
  imageAlt?: string;
  heading: string;
  description: string;
  overlayOpacity?: number;
}

export default function HeroSection({
  imageSrc,
  imageAlt = "Hero background",
  heading,
  description,
  overlayOpacity = 70,
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
      <div className="relative z-10 flex h-full items-center">
        <div className="container max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-2xl">
            {/* Heading */}
            <h1 className="text-3xl mt-10 md:text-4xl font-bold text-white mb-6">
              {heading}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
