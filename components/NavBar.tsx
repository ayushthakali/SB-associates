"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState(false);
  const [aboutUsOptions, setAboutUsOptions] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="w-full h-20 flex items-center justify-between p-5 bg-[#2B303A] shadow-lg text-white fixed top-0 z-1">
      <Link
        href="/"
        className="text-2xl lg:text-3xl font-light tracking-widest hover:scale-103 transition-transform flex items-center gap-4"
      >
        S.B. THAKALI & ASSOCIATES
      </Link>

      <div className="hidden lg:flex gap-20 mr-12 font-light text-xl">
        <div className="relative group">
          <Link
            href="/services"
            className={`hover:scale-110 hover:text-[#C9EC51] transition-all duration-300 relative px-2 py-1 flex items-end gap-3 ${
              isActive("/services") ? "text-[#C9EC51]" : ""
            }`}
            onMouseEnter={() => setOptions(true)}
            onMouseLeave={() => setOptions(false)}
          >
            Services
            <IoIosArrowDown
              className={`transition-all duration-300 ease-out ${
                options ? "rotate-180 text-[#C9EC51]" : "rotate-0"
              }`}
            />
          </Link>

          <div
            className={`
          absolute top-full left-0  mt-5
          border-t-4 border-[#C9EC51]
          backdrop-blur-sm
          transition-all duration-300 ease-out
          ${
            options
              ? "opacity-100 translate-y-0 scale-100 visible"
              : "opacity-0 -translate-y-4 scale-95 invisible"
          }
        `}
            onMouseEnter={() => setOptions(true)}
            onMouseLeave={() => setOptions(false)}
          >
            <ul className="text-sm bg-[#2B303A] w-40 md:w-48 p-3 py-4 space-y-1 tracking-wide shadow-2xl rounded-b-lg border border-gray-600">
              {["Advisory", "Audit & Assurance", "Legal", "Tax", "NFRS"].map(
                (item, index) => (
                  <Link
                    href={`/services/${item.toLowerCase().replace(/\s+/g, "")}`}
                    key={item}
                  >
                    <li
                      className={`
                  hover:bg-white hover:text-black p-3 rounded-md transition-all duration-200 cursor-pointer transform hover:translate-x-1 animate-in fade-in slide-in-from-top-1
                `}
                      style={{
                        animationDelay: `${index * 50}ms`,
                        animationFillMode: "both",
                      }}
                    >
                      {item}
                    </li>
                  </Link>
                )
              )}
            </ul>
          </div>
        </div>

        <Link
          href="/industries"
          className={` hover:scale-110 hover:text-[#C9EC51] transition-transform px-2 py-1 ${
            isActive("/industries") ? "text-[#C9EC51]" : ""
          }`}
        >
          Industries
        </Link>

        <div className="relative group">
          <Link
            href="/about/aboutus"
            className={`hover:scale-110 hover:text-[#C9EC51] transition-all duration-300 relative px-2 py-1 flex items-end gap-3 ${
              isActive("/about/aboutus") ? "text-[#C9EC51]" : ""
            }`}
            onMouseEnter={() => setAboutUsOptions(true)}
            onMouseLeave={() => setAboutUsOptions(false)}
          >
            About
            <IoIosArrowDown
              className={`transition-all duration-300 ease-out ${
                aboutUsOptions ? "rotate-180 text-[#C9EC51]" : "rotate-0"
              }`}
            />
          </Link>

          <div
            className={`
          absolute top-full left-0  mt-5 border-t-4 border-[#C9EC51] backdrop-blur-sm transition-all duration-300 ease-out
          ${
            aboutUsOptions
              ? "opacity-100 translate-y-0 scale-100 visible"
              : "opacity-0 -translate-y-4 scale-95 invisible"
          }
        `}
            onMouseEnter={() => setAboutUsOptions(true)}
            onMouseLeave={() => setAboutUsOptions(false)}
          >
            <ul className="text-sm bg-[#2B303A] w-40 md:w-48 p-3 py-4 space-y-1 tracking-wide shadow-2xl rounded-b-lg border border-gray-600">
              {["About Us", "Meet Our Founder"].map((item, index) => (
                <Link
                  href={`/about/${item.toLowerCase().replace(/\s+/g, "")}`}
                  key={item}
                >
                  <li
                    className={`
                  hover:bg-white hover:text-black p-3 rounded-md transition-all duration-200 cursor-pointer transform hover:translate-x-1 animate-in fade-in slide-in-from-top-1
                `}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animationFillMode: "both",
                    }}
                  >
                    {item}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>

        <Link
          href="/contact"
          className={`hover: hover:scale-110 hover:bg-white transition-transform px-2 py-1 bg-[#C9EC51] text-black rounded-2xl ${
            isActive("/contact") ? "bg-[#C9EC51] " : ""
          }`}
        >
          Contact
        </Link>
      </div>

      {
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white ">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      }

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#2B303A] flex flex-col items-center gap-4 py-4 lg:hidden">
          <Link
            onClick={() => setIsOpen(false)}
            href="/services"
            className=" hover:text-[#C9EC51]"
          >
            Services
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href="/industries"
            className=" hover:text-[#C9EC51]"
          >
            Industries
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href="/about/aboutus"
            className=" hover:text-[#C9EC51]"
          >
            About Us
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href="/about/meetourfounder"
            className=" hover:text-[#C9EC51]"
          >
            Meet Our Founder
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href="/contact"
            className=" hover:text-[#C9EC51]"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
