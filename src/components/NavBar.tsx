import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ComingSoonTag from "./ComingSoon";

interface NavLink {
  label: string;
  href: string;
  comingSoon: boolean;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks: NavLink[] = [
    { label: "Home", href: "/", comingSoon: false },
    { label: "About", href: "/about", comingSoon: false },
    { label: "Upper Room 🔥", href: "/upperroom", comingSoon: false },
    // {
    //   label: "Ignite Conference 26 🔥",
    //   href: "/igniteConference26",
    //   comingSoon: true,
    // },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#1C21EB] via-[#2429F0] to-[#1C21EB] shadow-lg">
        <div id="container" className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Logo" width={200} height={200} />
            </div>

            {/* Menu Items - Center (Hidden on 768px and below) */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-lg font-medium relative transition-colors duration-300 ${
                    pathname === link.href
                      ? "text-white border-b-2 border-yellow-400"
                      : "text-gray-200 hover:text-white hover:border-b-2 hover:border-yellow-400 hover:pb-1"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Hamburger Icon */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-white transition-colors duration-300 focus:outline-none z-50 relative"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Page Menu Overlay */}
      <div
        className={`fixed inset-0 bg-gradient-to-r from-[#1C21EB] via-[#2429F0] to-[#1C21EB] shadow-lg z-40 flex items-center justify-center transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-white font-bold text-3xl md:text-6xl hover:text-purple-300 transition-all duration-300 hover:scale-110 ${
                isOpen ? "animate-fade-in" : ""
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {link.label}
              {link.comingSoon && <ComingSoonTag />}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
};

export default Navbar;
