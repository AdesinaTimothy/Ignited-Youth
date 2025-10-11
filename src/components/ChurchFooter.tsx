import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  Clock,
} from "lucide-react";

const ChurchFooter = () => {
  return (
    <footer className="w-full text-white bg-gradient-to-r from-[#1C21EB] via-[#2429F0] to-[#1C21EB] shadow-lg text-footer-text px-4">
      <div id="container" className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-7 grid-cols-1  lg:grid-cols-3 lg:gap-20 mb-10">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className=" text-2xl font-bold text-footer-accent mb-2">
              Our Mission
            </h3>
            <p className="text-sm max-w-xl leading-relaxed">
              Sharing God's love and grace with our community through worship,
              Prayer, and service. Join us as we grow together in faith.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className=" text-2xl font-bold text-footer-accent mb-">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 hover:text-footer-accent transition-colors duration-300"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+44 7983 826229</span>
              </a>
              <a
                href="mailto:info@church.com"
                className="flex  items-center gap-2 hover:text-footer-accent transition-colors duration-300"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="break-all">
                  ignitedyouth@rccgjccwolverhampton.org
                </span>
              </a>
              <a
                href="https://maps.google.com"
                className="flex items-start gap-2 hover:text-footer-accent transition-colors duration-300"
              >
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  Jubilee House, 114 Spring Rd, Lanesfield
                  <br />
                  Wolverhampton WV4 6JT
                </span>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-footer-accent mb-3">
              Stay Connected
            </h3>
            <p className="text-sm opacity-90 mb-4">
              Visits our Social Media account today
            </p>

            <div className="flex gap-3 pt-1">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-footer-text/10 flex items-center justify-center hover:bg-footer-accent transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-footer-text/10 flex items-center justify-center hover:bg-footer-accent transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-footer-text/10 flex items-center justify-center hover:bg-footer-accent transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-footer-text/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-75">
              © {new Date().getFullYear()} Ignited Youths. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="hover:text-footer-accent transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-footer-accent transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ChurchFooter;

{
  /* Service Times */
}
{
  /* <div className="space-y-4">
            <h3 className=" text-2xl font-bold text-footer-accent mb-2">
              Service Times
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-footer-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[16px]">Sunday Worship</p>
                  <p className="opacity-90">
                    9:00 AM & 11:00 AM (First Service)
                  </p>
                  <p className="opacity-90">
                    11:00 AM & 11:40 AM (Sunday School)
                  </p>
                  <p className="opacity-90">
                    11:00 AM & 1:30 PM (Second Service)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-footer-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[16px]">
                    Wednesday Bible Study
                  </p>
                  <p className="opacity-90">7:00 PM (Online)</p>
                </div>
              </div>
            </div>
          </div> */
}
