import Image from "next/image";
import { FiLink } from "react-icons/fi";

type UnitCardProps = {
  image: string;
  title: string;
  description: string;
  onRegister?: () => void;
};

function UpcomingEvent({
  image,
  title,
  description,
  onRegister,
}: UnitCardProps) {
  return (
    <div className="bg-white  rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden max-w-sm">
      {/* Image Section */}
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

      {/* Content Section */}
      <div className="p-4 flex flex-col items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-gray-800 text-center">
          {title}
        </h3>

        <p className="text-[16px] text-gray-900 ">{description}</p>

        <button
          onClick={onRegister}
          className="w-full cursor-pointer flex items-center justify-center gap-3 bg-black text-white text-md font-medium px-6 py-3 rounded-md hover:bg-gray-800 transition-colors duration-300"
        >
          {" "}
          <FiLink className="w-5 h-5" /> Register
        </button>
      </div>
    </div>
  );
}

export default UpcomingEvent;
