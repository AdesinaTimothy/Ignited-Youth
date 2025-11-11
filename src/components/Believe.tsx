import React from "react";

interface CardData {
  title: string;
  description: string;
}

interface BelieveSectionProps {
  cards: CardData[];
}

const BelieveSection: React.FC<BelieveSectionProps> = ({ cards }) => {
  return (
    <section className="py-5">
      <div className="container w-full mx-auto">
        {/* Section Heading */}
        <div className="text-left md:text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            what we believe
          </h2>
          <p className="text-md text-gray-600 max-w-4xl mx-auto">
            We are committed to preaching the undiluted Word of God and creating
            a dynamic, relatable atmosphere where young people can grow
            spiritually, connect with peers, and live out biblical principles in
            their everyday lives."
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BelieveSection;
