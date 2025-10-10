import Image from "next/image";

function UnitCard({ image, title }: { image: string; title: string }) {
  return (
    <div className="bg-white border-2 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden max-w-sm">
      <div className="relative w-full aspect-[4/5]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
          quality={100}
          priority
        />
      </div>
    </div>
  );
}

export default UnitCard;
