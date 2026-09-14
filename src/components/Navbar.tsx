import { useState } from "react";
import Logo from "../assets/logo-text.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={Logo} alt="Dev Stack" className="h-8" />
          </a>

          {/* Nav Links */}
          <ul className="flex items-center gap-8">
            <li>
              <a
                href="#"
                className="text-pink-500 font-medium hover:text-pink-600 transition"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#technologies"
                className="text-gray-500 font-medium hover:text-pink-500 transition"
              >
                Technologies
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="text-gray-500 font-medium hover:text-pink-500 transition"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="text-gray-500 font-medium hover:text-pink-500 transition"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="text-gray-500 font-medium hover:text-pink-500 transition"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Auth Buttons */}
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-gray-700 font-medium hover:text-pink-500 transition"
            >
              Sign In
            </a>

            <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden flex items-center justify-between">
          
          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 text-2xl w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

          {/* Center Logo */}
          <a href="#" onClick={closeMenu}>
            <img
              src={Logo}
              alt="Dev Stack"
              className="h-8"
            />
          </a>

          {/* Mobile Auth Buttons */}
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="text-gray-700 text-xs font-medium"
            >
              Sign In
            </a>

            <button className="bg-pink-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 border-t border-gray-100 pt-4">
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#"
                  onClick={closeMenu}
                  className="block text-pink-500 font-medium"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#technologies"
                  onClick={closeMenu}
                  className="block text-gray-600 font-medium hover:text-pink-500 transition"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  onClick={closeMenu}
                  className="block text-gray-600 font-medium hover:text-pink-500 transition"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  onClick={closeMenu}
                  className="block text-gray-600 font-medium hover:text-pink-500 transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="block text-gray-600 font-medium hover:text-pink-500 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;