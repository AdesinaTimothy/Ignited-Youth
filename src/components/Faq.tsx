import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Faq() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto mt-1">
        <Accordion
          className="border-1 border-[#1C21EB] px-4 py-1 rounded-2xl mb-4"
          type="single"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <p className="text-[19px] font-semibold">
                What time are your Sunday Services
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-[19px]">
                Our usual Sunday Service is usually as follow
              </p>
              <div className="flex flex-col gap-1 mt-2">
                <p className="text-[16px] font-semibold">
                  - First Service: 9:15am - 11:00am.
                </p>

                <p className="text-[16px] font-semibold">
                  - Sunday School: <span>11:00am - 11:45am</span>
                </p>

                <p className="text-[16px] font-semibold">
                  - Sunday Service: 11:45am - 1:15am.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="max-w-7xl mx-auto mt-1">
        <Accordion
          className="border-1 border-[#1C21EB] px-4 py-1 mb-4 rounded-2xl"
          type="single"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <p className="text-[19px] font-semibold">
                I'm new to the faith and have questions
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-[16px]">
                Absolutely!. We're a mission-minded community passionate about
                walking people on their faith joirney. Reach out to us via the
                visit us page and someone from our tream will be glad to connect
                with you.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="max-w-7xl mx-auto mt-1">
        <Accordion
          className="border-1 border-[#1C21EB] px-4 py-1 mb-4 rounded-2xl"
          type="single"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <p className="text-[19px] font-semibold">
                How can I find a community that fits me
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-[16px]">
                Whether you're a teenager, married, single, or over 30, there's
                a place for you here! We have vibrant communities for different
                life stages and interests. Head over to our Communuties Page to
                explore and get plugged in.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="max-w-7xl mx-auto mt-1">
        <Accordion
          className="border-1 border-[#1C21EB] px-4 py-1 mb-4 rounded-2xl"
          type="single"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <p className="text-[19px] font-semibold">
                What does Ignited Youth Believe?
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-[16px] ">
                Here at ignited youth, we are Christ-centered. Word-focused
                church with a strong emphasis on evangelism and spiritual
                growth. We believe:
              </p>
              <div className="flex flex-col gap-1 mt-2">
                <p className="text-[16px]">
                  - The Bible is God's infallible word and our ultimate guide.
                </p>

                <p className="text-[16px]">
                  - Jesus Christ is the Son of God, who dies for our sins and
                  rose again for our salvation.
                </p>

                <p className="text-[16px]">
                  - Every believer is empowered by the Holy Spirit to live a
                  victorious life.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default Faq;
