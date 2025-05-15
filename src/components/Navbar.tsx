// src/components/NavbarTailwind.tsx
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const pages = ["Home", "About", "Projects", "Contact" ,"Skills"];

export default function NavbarTailwind() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-tr from-[#0f0f0f] via-[#1f1f1f] to-[#151515] text-white w-full fixed top-0 left-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold tracking-wide">
            <span className="text-white">Gaya</span>
            <span className="text-red-500">Shan</span>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 ml-auto">
            {pages.map((page) => (
              <ScrollLink
                key={page}
                to={page.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="text-yellow-500"
                className="hover:text-yellow-500 transition cursor-pointer"
              >
                {page}
              </ScrollLink>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pt-4 pb-3 space-y-3 bg-black shadow">
          {pages.map((page) => (
            <ScrollLink
              key={page}
              to={page.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="text-yellow-500"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-100 transition cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              {page}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  );
}
