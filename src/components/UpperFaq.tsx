import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function UpperFaq() {
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
                Must I be a member of Ignited Youth to Attend Upper Room
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-[19px]">
                Not at all! The Upper Room meeting is open to everyone, and you
                are always warmly welcome to join us.
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
                Is there any DressCode for UpperRoom meeting
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-[16px]">
                There is no strict dress code for the UpperRoom meeting, but we
                encourage everyone to dress decently and respectfully while
                attending.
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
                Do I need to bring anything?
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-[16px]">
                Nope! Just bring yourself and an open heart. We recommend
                bringing a notebook or journal if you like to take notes, but
                nothing is required.
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
                Can I invite my friends?
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-[16px] ">
                Absolutely! Upper Room meetings are open to everyone, and we’d
                love for your friends to join. It’s a welcoming and friendly
                environment for anyone seeking God.
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
                What happens during an Upper Room meeting?
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-[16px] ">
                Upper Room meetings are all about **prayer, worship, and
                intimacy with God**. We spend time worshipping together,
                listening to God, and seeking His guidance. It’s a space to grow
                spiritually, be refreshed, and connect with others.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default UpperFaq;
