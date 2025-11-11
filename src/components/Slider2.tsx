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

function Slider2() {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="flex-none w-75 pl-6">
            <UnitCard
              image="/images/football.webp"
              title="Youth Worship Night"
            />
          </CarouselItem>
          <CarouselItem className="flex-none w-75 pl-6">
            <UnitCard
              image="/images/football.webp"
              title="Youth Worship Night"
            />
          </CarouselItem>
          <CarouselItem className="flex-none w-75 pl-6">
            <UnitCard
              image="/images/football.webp"
              title="Youth Worship Night"
            />
          </CarouselItem>
          <CarouselItem className="flex-none w-75 pl-6">
            <UnitCard
              image="/images/football.webp"
              title="Youth Worship Night"
            />
          </CarouselItem>
          <CarouselItem className="flex-none w-75 pl-6">
            <UnitCard
              image="/images/football.webp"
              title="Youth Worship Night"
            />
          </CarouselItem>
          <CarouselItem className="flex-none w-75 pl-6">
            <UnitCard
              image="/images/football.webp"
              title="Youth Worship Night"
            />
          </CarouselItem>
          <CarouselItem className="flex-none w-75 pl-6">
            <UnitCard
              image="/images/football.webp"
              title="Youth Worship Night"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 md:left-4 z-10" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 md:right-4 z-10" />
      </Carousel>
    </div>
  );
}

export default Slider2;
