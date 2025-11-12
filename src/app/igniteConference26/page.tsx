"use client";

import ChurchFooter from "@/components/ChurchFooter";
import Hero2 from "@/components/Hero2";

import Navbar from "@/components/NavBar";

export default function page() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <section id="menu-bar" className="flex-shrink-0">
        <Navbar />
      </section>

      <main className=" mt-20 flex-grow">
        <section id="Hero-Section" className="w-full h-auto bg-[#1C21EB] ">
          <Hero2
            heading="Ignite Conference 2026"
            imageSrc="/images/hero2.jpg"
            description=" Welcome to the dedicated page for the Ignite Conference 2026! Stay tuned here for more information.
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
