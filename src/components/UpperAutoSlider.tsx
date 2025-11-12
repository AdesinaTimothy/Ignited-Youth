// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const slides = [
//   "/images/roll1.jpg",
//   "/images/roll2.jpg",
//   "/images/roll3.jpg",
//   "/images/roll4.jpg",
//   "/images/roll8.jpg",
//   "/images/roll10.jpg",
// ];

// export default function UpperAutoSlider() {
//   return (
//     <div className="overflow-hidden w-full pt-10">
//       <motion.div
//         className="flex gap-4"
//         animate={{
//           x: ["0%", "-100%"], // continuous slide
//         }}
//         transition={{
//           ease: "linear",
//           duration: 10, // slower = smoother scroll
//           repeat: Infinity,
//         }}
//       >
//         {/* Duplicate slides for seamless infinite loop */}
//         {[...slides, ...slides].map((img, i) => (
//           <div
//             key={i}
//             className="relative flex-shrink-0 w-[300px] h-[375px] md:w-[360px] md:h-[450px] lg:w-[405px] lg:h-[506px] overflow-hidden rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
//           >
//             <Image
//               src={img}
//               alt={`slide-${i}`}
//               fill
//               sizes="(max-width: 768px) 100vw, 400px"
//               className="object-cover"
//               quality={100}
//               priority={i < 2}
//             />
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const slides = [
  "/images/roll1.jpg",
  "/images/roll2.jpg",
  "/images/roll3.jpg",
  "/images/roll4.jpg",
  "/images/roll8.jpg",
  "/images/roll10.jpg",
];

export default function UpperAutoSlider() {
  return (
    <div className="overflow-hidden w-full pt-10">
      <motion.div
        className="flex gap-4 will-change-transform"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }} // slightly slower for smoothness
      >
        {[...slides, ...slides].map((img, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-[300px] h-[375px] sm:w-[360px] sm:h-[450px] lg:w-[405px] lg:h-[506px] overflow-hidden rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            <Image
              src={img}
              alt={`slide-${i}`}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
              quality={75} // optimized for faster load
              priority={i < 2}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
