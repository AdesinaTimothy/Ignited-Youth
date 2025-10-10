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
                image="/images/Football.png"
                title="Youth Worship Night"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 md:left-4 z-10" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 md:right-4 z-10" />
      </Carousel>
    </div>
  );
}

export default Slider;
