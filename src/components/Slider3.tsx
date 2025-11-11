import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import TeamCard from "./TeamCad";

function Slider3() {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="flex-none w-78 pl-6">
            <TeamCard
              image="/images/somto.avif"
              name="Pastor Somtochukwu Igboanugo"
              role="Youth Pastor"
            />
          </CarouselItem>
          <CarouselItem className="flex-none w-78 pl-6">
            <TeamCard
              image="/images/somto.avif"
              name="John Doe"
              role="Youth Pastor"
            />
          </CarouselItem>
          <CarouselItem className="flex-none w-78 pl-6">
            <TeamCard
              image="/images/somto.avif"
              name="John Doe"
              role="Youth Pastor"
            />
          </CarouselItem>
          <CarouselItem className="flex-none w-78 pl-6">
            <TeamCard
              image="/images/somto.avif"
              name="John Doe"
              role="Youth Pastor"
            />
          </CarouselItem>
          <CarouselItem className="flex-none w-78 pl-6">
            <TeamCard
              image="/images/somto.avif"
              name="John Doe"
              role="Youth Pastor"
            />
          </CarouselItem>
          <CarouselItem className="flex-none w-78 pl-6">
            <TeamCard
              image="/images/somto.avif"
              name="John Doe"
              role="Youth Pastor"
            />
          </CarouselItem>
          <CarouselItem className="flex-none w-78 pl-6">
            <TeamCard
              image="/images/somto.avif"
              name="John Doe"
              role="Youth Pastor"
            />
          </CarouselItem>
          <CarouselItem className="flex-none w-78 pl-6">
            <TeamCard
              image="/images/somto.avif"
              name="John Doe"
              role="Youth Pastor"
            />
          </CarouselItem>
          <CarouselItem className="flex-none w-78 pl-6">
            <TeamCard
              image="/images/somto.avif"
              name="John Doe"
              role="Youth Pastor"
            />
          </CarouselItem>
          <CarouselItem className="flex-none w-78 pl-6">
            <TeamCard
              image="/images/somto.avif"
              name="John Doe"
              role="Youth Pastor"
            />
          </CarouselItem>
          <CarouselItem className="flex-none w-78 pl-6">
            <TeamCard
              image="/images/somto.avif"
              name="John Doe"
              role="Youth Pastor"
            />
          </CarouselItem>
          <CarouselItem className="flex-none w-78 pl-6">
            <TeamCard
              image="/images/somto.avif"
              name="John Doe"
              role="Youth Pastor"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 md:left-4 z-10" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 md:right-4 z-10" />
      </Carousel>
    </div>
  );
}

export default Slider3;
