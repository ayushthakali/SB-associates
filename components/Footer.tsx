import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#2B303A] text-gray-200 pt-12 pb-4">
      <div className="grid  md:grid-cols-4 gap-10 px-6 max-w-7xl mx-auto tracking-wide">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold mb-3">Find Us</h3>
          <p className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#C9EC51]" />
            Newroad, Pokhara
          </p>
          <p className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-[#C9EC51]" />
            +977 9817159856
          </p>
          <p className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-[#C9EC51]" />
            sbthakaliassociates@gmail.com
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "Industries", path: "/industries" },
              { name: "About Us", path: "/about/aboutus" },
              { name: "Contact", path: "/contact" },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  href={link.path}
                  className="inline-block hover:text-pink-400 hover:translate-x-1 transition duration-200 ease-in"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="border-l-4 border-[#C9EC51] rounded-xl px-4 py-2 ">
            <h2 className="text-lg font-bold mb-3">
              About S.B. THAKALI & ASSOCIATES
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed text-justify">
              Trusted partners in Accounting, Taxation, Audit, and Business
              Advisory. Delivering professional solutions tailored to your needs
              with integrity and excellence.
            </p>
          </div>
        </div>
      </div>

      <div className="text-gray-500 text-xs border-t border-gray-700 text-center mt-10 pt-4">
        © {new Date().getFullYear()} S.B. Thakali & Associates. All Rights
        Reserved.
      </div>
    </footer>
  );
}

export default Footer;
