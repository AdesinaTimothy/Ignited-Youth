import Image from "next/image";
import { Search } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Optimized Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Church community background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="text-center max-w-3xl">
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mt-30 mb-6">
            Welcome to Ignited Youth! We are glad to have you
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-100 mb-8">
            There is a place for you. Join us every Sunday at a Celebration
            Church near you.
          </p>
        </div>
      </div>
    </div>
  );
}
