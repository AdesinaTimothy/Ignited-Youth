"use client";

import AutoSlider from "@/components/AutoSlider";
import ChurchFooter from "@/components/ChurchFooter";
import Container from "@/components/Container";
import Countdown from "@/components/Countdown";

import HeroSection from "@/components/Hero";
import Navbar from "@/components/NavBar";
import TestimonyCarousel from "@/components/TestimonyCarousel";
import UpcomingEvent from "@/components/UpcomingEvent";
import UpperAutoSlider from "@/components/UpperAutoSlider";
import UpperFaq from "@/components/UpperFaq";
import UpperRoomVision from "@/components/UpperRoomVision";
import { Bus } from "lucide-react";
import React from "react";
import { HiOutlineClock } from "react-icons/hi";

const nextUpperRoom = new Date("2025-11-14T19:00:00Z");

const testimonies = [
  {
    name: "Sarah A.",
    message:
      "The last Upper Room meeting was life-changing for me. I came in feeling heavy and distant from God, but during worship, I felt His presence so strongly that I couldn’t hold back tears. The atmosphere was filled with such hunger and purity — everyone was genuinely seeking more of Him. By the end of the night, I left renewed, restored, and filled with peace. It reminded me that true intimacy with God comes from simply being still before Him in worship.",
  },
  {
    name: "Michael O.",
    message:
      "Each Upper Room meeting feels like a divine appointment. At the last one, I experienced a deep sense of breakthrough in my prayer life. The moment we all began praying together, it felt like heaven opened over us. I had been praying for clarity about my next steps, and during that session, God spoke to my heart so clearly. The presence of God was so tangible, and it reignited my passion for prayer and fellowship with the Holy Spirit.",
  },
  {
    name: "Chiamaka E.",
    message:
      "I’ll never forget the last Upper Room. From the first song to the final prayer, it was a holy encounter. There was a unity in worship that was beyond words — everyone was completely focused on God. I felt chains breaking off and hearts being healed all around me. For me personally, it was a moment of surrender and renewal. I left that night knowing that God is still moving in mighty ways among His people when we create space for Him.",
  },
];

function page() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <section id="menu-bar" className="flex-shrink-0">
        <Navbar />
      </section>

      <main className="flex-grow">
        <section id="Hero-Section" className="w-full  bg-[#1C21EB]">
          <HeroSection
            imageSrc="/images/hero.jpg"
            imageAlt="Church community background"
            heading="The Upper Room"
            highlightedText="Experience"
            emoji="🔥"
            subheading="WORSHIP || PRAYER || INTIMACY"
            description="...an atmosphere of worship, prayer and fresh encounters"
            overlayOpacity={70}
          />
        </section>

        <section className="w-full  py-10 bg-blue-50">
          <Container className="flex flex-col ">
            <UpperRoomVision />
          </Container>
        </section>

        <section className="w-full py-10 ">
          <Container className="flex flex-col gap-14">
            <TestimonyCarousel testimonies={testimonies} />;
          </Container>
        </section>

        <section className="w-full py-12 bg-gradient-to-b from-black/95 to-black/100 relative">
          <Container className="flex flex-col gap-14">
            {/* Section Heading */}
            <div className="flex flex-col mb-10 gap-2 items-start md:items-center justify-start">
              <h1 className="text-[30px] md:text-[40px] font-bold text-white text-left md:text-center">
                Next UpperRoom Meeting
              </h1>
              <p className="text-md md:text-lg max-w-[500px] md:max-w-[700px] text-gray-200 text-left md:text-center">
                Plan and Prepare for the next upperRoom meeting
              </p>
            </div>

            {/* Event + Countdown + Bus */}
            <div className="flex flex-col gap-12  md:flex-row items-start justify-between md:gap-12  md:px-0 relative">
              {/* Radial Glow Behind Event Card */}
              <div className="absolute -z-10 top-0 left-1/2 transform -translate-x-1/2 w-full max-w-xl h-full rounded-xl bg-gradient-to-b from-yellow-500/20 via-yellow-500/10 to-transparent blur-3xl" />

              <div className="w-full md:w-1/2 lg:w-2/5">
                <UpcomingEvent
                  image="/images/upper.jpeg"
                  title="HolyGhost Experience"
                  description="Join us for the upcoming UpperRoom meeting, it promises to be an inspiring and unforgettable experience 🔥💫!"
                />
              </div>

              {/* Countdown + Bus */}
              <div className="flex flex-col items-start justify-start gap-10">
                {/* Countdown */}
                <div>
                  <p className="flex items-center text-sm gap-2 bg-yellow-500 text-gray-900  px-3 py-1 rounded-full mb-4 shadow-lg">
                    <HiOutlineClock className="w-5 h-5 md:w-6 md:h-6" />
                    Next Upper Room Meeting Starts In
                  </p>
                  <Countdown targetDate={nextUpperRoom} />
                </div>

                {/* Bus Service Card */}
                <div className="flex flex-col items-start justify-start bg-gray-900 rounded-2xl p-6 w-full max-w-md shadow-xl border border-gray-700">
                  {/* Bus Service Badge */}
                  <p className="flex items-center justify-center text-sm gap-2 bg-yellow-500 text-gray-900 f px-3 py-1 rounded-full mb-6 text-md shadow-lg">
                    <Bus className="w-4 h-4 md:w-5 md:h-5" />
                    Bus Service
                  </p>

                  {/* Pickup Point */}
                  <p className="text-white font-semibold text-md mb-2">
                    Pickup Point
                  </p>
                  <p className="text-gray-300 text-sm  mb-4">
                    Novotel, Union St, Wolverhampton, WV1 2JN
                  </p>

                  {/* Timing */}
                  <p className="text-white font-semibold text-md mb-2">
                    Timings
                  </p>
                  <p className="text-gray-300 text-sm mb-1">
                    6:30PM - 7:20PM - From Novotel to Church
                  </p>
                  <p className="text-gray-300 text-sm mb-4">
                    10:00PM - 11:00PM - Return from Church to Novotel
                  </p>

                  {/* Driver */}
                  <p className="text-white font-semibold text-md mb-2">
                    Driver
                  </p>
                  <p className="text-gray-300 text-sm">ROB - 07955875793</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="w-full py-10 bg-blue-50">
          <Container className="flex gap-6 flex-col lg:flex-row lg:gap-14 items-start justify-between">
            <div className="w-full gap-4  md:min-w-[400px] md:gap-8 md:basis-[30%] flex flex-col items-start">
              <div className="px-4 py-3 border-2 border-[#1C21EB] rounded-full max-w-[280px]">
                <p className="text-[16px] text-[#1C21EB]">
                  Answers to Your Questions
                </p>
              </div>
              <h2 className="text-[30px] md:text-[40px] font-bold text-gray-900 mb-1">
                Frequently <br /> Asked Questions
              </h2>
              <p className="text-black text-[16px] max-w-[450]">
                Everything you need to know about UpperRoom meeting
              </p>
            </div>

            <div className="w-full md:basis-[70%]">
              <UpperFaq />
            </div>
          </Container>
        </section>

        <section className="w-full py-10 bg-blue-50">
          <UpperAutoSlider />
        </section>
      </main>

      <section id="footer" className="flex-shrink-0">
        <ChurchFooter />
      </section>
    </div>
  );
}

export default page;
