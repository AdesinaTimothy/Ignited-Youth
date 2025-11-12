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

export default function page() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <section id="menu-bar" className="flex-shrink-0">
        <Navbar />
      </section>

      <main className="flex-grow">
        <section id="Hero-Section" className="w-full bg-[#1C21EB] ">
          <Hero2
            heading="Ignite Conference 2026"
            imageSrc="/images/hero2.jpg"
            description=" This is the dedicated page for the ignite Conference 2026, watch out on this page for more information
            ."
            overlayOpacity={70}
          />
        </section>
      </main>

      <section id="footer" className="flex-shrink-0">
        <ChurchFooter />
      </section>
    </div>
  );
}
