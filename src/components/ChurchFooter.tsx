import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  Clock,
} from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

const ChurchFooter = () => {
  return (
    <footer className="w-full bg-gradient-to-r text-white from-slate-900 via-purple-900 to-slate-900 shadow-lg text-footer-text px-4">
      <div id="container" className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-footer-accent mb-4">
              Our Mission
            </h3>
            <p className="text-sm leading-relaxed">
              Sharing God's love and grace with our community through worship,
              fellowship, and service. Join us as we grow together in faith.
            </p>
          </div>

          {/* Service Times */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-footer-accent mb-4">
              Service Times
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-footer-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold">Sunday Worship</p>
                  <p className="opacity-90">9:00 AM & 11:00 AM</p>
                  <p className="opacity-90">11:00 AM & 1:30 pm</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-footer-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold">Wednesday Bible Study</p>
                  <p className="opacity-90">7:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-footer-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold">Youth Group</p>
                  <p className="opacity-90">Fridays at 6:30 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-footer-accent mb-4">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 hover:text-footer-accent transition-colors duration-300"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(123) 456-7890</span>
              </a>
              <a
                href="mailto:info@church.com"
                className="flex items-center gap-2 hover:text-footer-accent transition-colors duration-300"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@church.com</span>
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-footer-accent transition-colors duration-300"
              >
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  123 Faith Street
                  <br />
                  Your City, ST 12345
                </span>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-footer-accent mb-4">
              Stay Connected
            </h3>
            <p className="text-sm opacity-90 mb-4">
              Subscribe to our newsletter for updates and inspiration.
            </p>
            {/* <div className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-footer-text/10 border-footer-text/20 text-footer-text placeholder:text-footer-text/50"
              />
              <button className="w-full bg-footer-accent hover:bg-footer-accent/90 text-foreground font-semibold">
                Subscribe
              </button>
            </div> */}
            <div className="flex gap-3 pt-4">
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
