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
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="text-center max-w-3xl">
          {/* Heading */}
          <h1 className="text-4xl font-bold md:text-[65px] leading-tight md:font-extrabold text-white mt-5 mb-6">
            Awakening Hearts and{" "}
            <span className="text-yellow-500">Igniting Purpose</span>
            💫
          </h1>

          {/* Subheading */}
          <p className="text-lg font-bold text-yellow-500 md:text-xl  mb-6">
            WORSHIP || PRAYER || INTIMACY
          </p>
          {/* Subheading */}
          <p className="text-md md:text-xl text-gray-100 mb-8">
            Discover a place to belong, grow in your faith, and ignite your
            purpose alongside a vibrant community of believers.
          </p>
        </div>
      </div>
    </div>
  );
}
