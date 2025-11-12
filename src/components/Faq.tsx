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
                Who can join Ignited Youth?
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-[16px]">
                Everyone is welcome! Whether you’re new to faith, exploring
                spirituality, or already a follower of Christ, Ignited Youth is
                open to all young people who want to grow, learn, and connect in
                a supportive community.
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
                How can I get involved with Ignited Youth
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-[16px]">
                You can get involved by attending our events, volunteering for
                youth programs, or joining small groups and ministries. Reach
                out via our contact page or social media, and we’ll guide you on
                how to participate actively.
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
