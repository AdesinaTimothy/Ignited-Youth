import React from "react";

interface CardData {
  title: string;
  points: string[]; // Array of bullet points
}

interface MissionVisionSectionProps {
  cards: CardData[];
}

const MissionVisionSection: React.FC<MissionVisionSectionProps> = ({
  cards,
}) => {
  return (
    <section className="py-6">
      <div className="container max-w-7xl mx-auto ">
        {/* Section Heading */}
        <div className="text-left md:text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-md text-gray-600 max-w-4xl mx-auto">
            We are committed to guiding young people with purpose and faith.
            Here’s how we approach our mission and vision:
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-200 "
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {card.title}
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {card.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
