"use client";

import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { title: "Hem", url: "/" },
    { title: "Verksamhet", url: "/verksamhet" },
    { title: "Värdegrund", url: "/vardegrund" },
    { title: "Personal", url: "/personal" },
    { title: "Sök plats", url: "/sok-plats" },
    { title: "Kontakt", url: "/kontakt" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isOpen
          ? "bg-white/95 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-[1200px] items-center justify-between px-[5%]">
        <a href="/" className="flex items-center gap-2.5">
          {/* Harp logo */}
          <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#F7C948" />
            <path d="M14 28V14C14 11.5 16 9 20 9C24 9 26 11.5 26 14" stroke="#0F3460" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="16" y1="16" x2="16" y2="28" stroke="#0F3460" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="20" y1="13" x2="20" y2="28" stroke="#0F3460" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="24" y1="16" x2="24" y2="28" stroke="#0F3460" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M12 28H28" stroke="#0F3460" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-[#0F3460]" style={{ fontFamily: "var(--font-display)" }}>
              Förskolan
            </span>
            <span className="text-lg font-bold text-[#F7C948]" style={{ fontFamily: "var(--font-display)" }}>
              Harpan
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              className="text-sm font-medium text-[#0F3460]/70 transition-colors hover:text-[#0F3460]"
            >
              {link.title}
            </a>
          ))}
          <a
            href="/sok-plats"
            className="rounded-full bg-[#F7C948] px-6 py-2.5 text-sm font-bold text-[#0F3460] shadow-[0_4px_16px_rgba(247,201,72,0.3)] transition-all hover:shadow-[0_6px_24px_rgba(247,201,72,0.4)] hover:brightness-105"
          >
            Sök plats
          </a>
        </div>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block h-[2px] w-5 rounded-full bg-[#0F3460] transition-all duration-300 ${
              isOpen ? "translate-y-[7px] -rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-5 rounded-full bg-[#0F3460] transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-5 rounded-full bg-[#0F3460] transition-all duration-300 ${
              isOpen ? "-translate-y-[7px] rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden bg-white transition-all duration-500 lg:hidden ${
          isOpen ? "max-h-[500px] pb-6 shadow-lg" : "max-h-0"
        }`}
      >
        <div className="px-[5%]">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              className="block border-b border-[#0F3460]/5 py-3.5 text-base font-medium text-[#0F3460]/80 transition-colors hover:text-[#0F3460]"
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </a>
          ))}
          <a
            href="/sok-plats"
            className="mt-5 flex items-center justify-center rounded-full bg-[#F7C948] px-6 py-3 text-base font-bold text-[#0F3460]"
            onClick={() => setIsOpen(false)}
          >
            Sök plats
          </a>
        </div>
      </div>
    </nav>
  );
};
