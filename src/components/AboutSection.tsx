import Link from "next/link";
import React from "react";
import Image from "next/image";

function AboutSection() {
  return (
    <section className="w-full ">
      <div className="w-full flex items-start gap-15 flex-col lg:flex-row md:gap-30 lg:items-center lg:justify-between">
        {/* Left Side: Text */}
        <div className="w-full md:w-[50%]">
          <h2 className="text-[30px] md:text-5xl font-bold text-[#1C21EB] mb-4">
            About Us
          </h2>
          <p className="text-gray-700 text-md md:text-lg mb-8">
            We are a vibrant youth community dedicated to helping young
            individuals discover their purpose, grow in faith, and find a
            supportive place to belong. We strive to empower the next generation
            with values, love, and encouragement, guiding them to make a
            meaningful impact in their communities. As the youth branch of{" "}
            <Link
              href="https://rccgjccwolverhampton.org/"
              className="text-[#1C21EB] font-semibold hover:underline"
            >
              RCCG Jubilee Christian Centre, Wolverhampton
            </Link>
            , we are committed to creating an environment where young people can
            thrive spiritually, socially, and personally. Join us and become
            part of a growing community that celebrates faith, friendship, and
            purpose.
          </p>
          <button className="px-15 py-3 bg-[#3134dd] text-white text-lg font-semibold rounded-lg hover:bg-yellow-600 transition">
            Learn more
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="w-full h-130 md:w-[50%] relative rounded-full md:h-120">
          <Image
            src="/images/about.jpg"
            alt="About Us"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
