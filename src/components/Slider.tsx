import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import UnitCard from "./UnitCard";

function Slider() {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="flex-none w-75 pl-6">
              <UnitCard
                image="/images/event1.jpg"
                title="Youth Worship Night"
                date="October 27, 2025"
                description="Join us for a night of worship, inspiration, and connection with other young believers."
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Slider;
