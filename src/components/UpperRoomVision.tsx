import Image from "next/image";

import React from "react";

function UpperRoomVision() {
  return (
    <section className="w-full ">
      <div className="w-full flex items-start gap-15 flex-col lg:flex-row md:gap-30 lg:items-center lg:justify-between">
        {/* Left Side: Text */}
        <div className="w-full md:w-[50%]">
          <h2 className="text-3xl md:text-4xl font-bold  mb-4">
            UpperRoom’s Vision
          </h2>
          <p className="text-md md:text-lg text-gray-600 max-w-4xl mx-auto">
            UpperRoom is not just a program ,it’s a divine appointment. Every
            three months, we gather as a church family to retreat from the noise
            of everyday life and ascend into a place of deeper communion with
            God. It is a time devoted to intense prayer, heartfelt worship, and
            intimate fellowship with the Holy Spirit. In the UpperRoom, we come
            to seek God’s face, not just His hand to be refined, refreshed, and
            refilled for the journey ahead. Our vision is to raise a people who
            are anchored in God’s presence, sensitive to His leading, and
            empowered to influence their world through love and power. Each
            gathering is a spiritual reset, a moment where faith is
            strengthened, hearts are healed, and destinies are realigned to
            God’s purpose. The UpperRoom experience reminds us that revival
            begins in the secret place and that lasting transformation starts
            when believers dwell together in unity and expectation of God’s
            glory.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="w-full h-130 md:w-[50%] relative rounded-full md:h-120">
          <Image
            src="/images/roll3.jpg"
            alt="About Us"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default UpperRoomVision;
