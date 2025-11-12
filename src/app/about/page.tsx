"use client";

import AboutSection from "@/components/AboutSection";
import BelieveSection from "@/components/Believe";
import ChurchFooter from "@/components/ChurchFooter";
import ContactForms from "@/components/ContactForms";
import Container from "@/components/Container";
import Hero2 from "@/components/Hero2";
import MissionVisionSection from "@/components/MissionVissionSection";
import Navbar from "@/components/NavBar";
import Slider3 from "@/components/Slider3";
import React from "react";

function page() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <section id="menu-bar" className="flex-shrink-0">
        <Navbar />
      </section>

      <main className="flex-grow">
        <section id="Hero-Section" className="w-full bg-[#1C21EB] ">
          <Hero2
            heading="About Us"
            imageSrc="/images/hero2.jpg"
            description="Learn about Ignited youths, our purpose, and our dedication to empowering young people to live boldly for Christ and share His gospel with others
            ."
            overlayOpacity={50}
          />
        </section>

        <section className="w-full py-10 bg-blue-50">
          <Container className="flex flex-col gap-14">
            <AboutSection
              title="Who are we?"
              description={`We are a vibrant youth community dedicated to helping young
                individuals discover their purpose, grow in faith, and find a
                supportive place to belong. We strive to empower the next generation
                with values, love, and encouragement, guiding them to make a
                meaningful impact in their communities. As the youth branch of
                RCCG Jubilee Christian Centre, Wolverhampton, we are committed to
                creating an environment where young people can thrive spiritually,
                socially, and personally. Join us and become part of a growing
                ßcommunity that celebrates faith, friendship, and purpose.`}
              imageSrc="/images/roll1.jpg"
            />
          </Container>
        </section>

        <section className="w-full py-8 bg-blue-0 border-b-1">
          <Container className="flex flex-col gap-14">
            <MissionVisionSection
              cards={[
                {
                  title: "Our Mission",
                  points: [
                    "Empower youth to grow spiritually and socially",
                    "Provide a supportive and dynamic environment",
                    "Promote biblical values in everyday life",
                  ],
                },
                {
                  title: "Our Vision",
                  points: [
                    "Build a vibrant youth community rooted in faith",
                    "Inspire young people to live with purpose",
                    "Create leaders who positively impact their communities",
                  ],
                },
              ]}
            />
          </Container>
        </section>

        <section className="w-full py-10 bg-blue-0">
          <Container className="flex flex-col gap-14">
            <BelieveSection
              cards={[
                {
                  title: "The Word of God",
                  description:
                    "We believe in and teach the undiluted Word of God, emphasizing its power to transform lives and build strong spiritual foundations.",
                },
                {
                  title: "Prayer & Faith",
                  description:
                    "We believe in the power of effective prayer and the exercise of faith as essential components of our Christian walk.",
                },
                {
                  title: "Holiness",
                  description:
                    "We emphasize holiness and righteousness as our core spiritual values, teaching our people how to live Christ-focused lives.",
                },
              ]}
            />
          </Container>
        </section>

        <section className="w-full pt-10 pb-10  bg-[#1C21EB]">
          <Container className="flex flex-col ">
            <div className="flex flex-col gap-2 items-start md:items-center justify-start">
              <h1 className="text-[30px] text-white md:text-[40px] font-bold">
                Meet the Ignite Team
              </h1>
              <p className="text-[16px] max-w-[700] text-white text-start md:text-center">
                Get to know the vibrant leaders of JCC Ignited Youths,
                passionate about faith, purpose, and empowering the next
                generation to live boldly for Christ.
              </p>
            </div>

            <div className="mt-8">
              <Slider3 />
            </div>
          </Container>
        </section>

        <section className="w-full pt-10 bg-gray-50 pb-10 ">
          <Container className="flex flex-col ">
            <ContactForms />
          </Container>
        </section>
      </main>

      <section id="footer" className="flex-shrink-0">
        <ChurchFooter />
      </section>
    </div>
  );
}

export default page;
