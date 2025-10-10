"use client";

import Navbar from "@/components/NavBar";
import ChurchFooter from "@/components/ChurchFooter";
import Faq from "@/components/Faq";
import Container from "@/components/Container";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <section id="menu-bar" className="flex-shrink-0">
        <Navbar />
      </section>

      <main className="flex-grow">
        <section className="w-full pt-30 pb-10 bg-red-50">
          <Container className="flex flex-col ">
            <div className="flex flex-col gap-2 items-start md:items-center justify-start">
              <h1 className="text-[32px] md:text-[40px] font-bold">
                INTEREST TEAMS
              </h1>
              <p className="text-[20px] max-w-[700] text-start md:text-center">
                Looking for opportunities to grow and serve God? We have
                different group and units in the Ignited youth that you can join
              </p>
            </div>

            <div className="mt-8">
              <Slider />
            </div>
          </Container>
        </section>

        <section className="w-full py-30 bg-blue-50">
          <Container className="flex gap-6 flex-col lg:flex-row lg:gap-14 items-start justify-between">
            <div className="w-full gap-4  md:min-w-[400px] md:gap-8 md:basis-[30%] flex flex-col items-start">
              <div className="px-4 py-3 border-2 border-purple-800 rounded-full max-w-[280px]">
                <p className="text-md text-purple-800">
                  Answers to Your Questions
                </p>
              </div>
              <h2 className="text-[32px] md:text-[40px] font-bold text-gray-900 mb-1">
                Frequently <br /> Asked Questions
              </h2>
              <p className="text-black text-[20px] max-w-[450]">
                Everything you need to know about joining the Ignited Youth
                Church/Community
              </p>
            </div>

            <div className="w-full md:basis-[70%]">
              <Faq />
            </div>
          </Container>
        </section>
      </main>

      <section id="footer" className="flex-shrink-0">
        <ChurchFooter />
      </section>
    </div>
  );
}
