import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaSun, FaMoon } from "react-icons/fa"; // Import icons+
import logo from "../assets/images/logo1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Apply dark mode class to <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out ${
          isFixed ? "fixed top-0 left-0 w-full shadow-md z-50" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex items-center">
               <img
                           src={logo}
                           alt="Virtual Assistant 2"
                           style={ { width: "230px", height: "auto" }}
                         />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="/"
                className="text-gray-700 dark:text-gray-300 hover:text-green-500 text-lg mr-1"
              >
                Home
              </a>
                   <a
                href="#about"
                className="text-gray-700 dark:text-gray-300 hover:text-green-500 text-lg mr-1"
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-700 dark:text-gray-300 hover:text-green-500 text-lg mr-1"
              >
                Services
                
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 dark:text-gray-300 hover:text-green-500 text-lg mr-1"
              >
                Testimonials
              </a>
              {/* <button
              className="text-lg bg-[#0BB5B5] hover:bg-[#0A9E9E] text-white px-4 py-2 rounded-lg">
              <FaPhoneAlt className="inline text-lg mb-1 mr-1" /> Book A Call
            </button> */}
              <a
                href="#contactform" // Replace with your real link
                rel="noopener noreferrer"
                className="inline-flex items-center text-lg bg-[#0BB5B5] hover:bg-[#0A9E9E] text-white px-4 py-2 rounded-lg"
              >
                <FaPhoneAlt className="inline text-lg mb-1 mr-1" /> Book A Call
              </a>

               {/* Dark Mode Toggle */}
              {/* <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-gray-700 dark:text-gray-300 text-2xl ml-4"
              >
              {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon />}
              </button> */}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 dark:text-gray-300 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-2">
            <a href="#" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-green-500 dark:hover:bg-gray-800">
              Overview
            </a>
            <a href="#" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-green-500 dark:hover:bg-gray-800">
              Services
            </a>
            <a href="#" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-green-500 dark:hover:bg-gray-800">
              Testimonials
            </a>
            <button className="block bg-green-500 hover:bg-green-600 text-white px-4 py-2 mx-4 mt-2 rounded-lg">
              Book A Call
            </button>
          </div>
        )}
      </nav>

      {/* Padding to prevent content from being hidden behind the fixed navbar */}
      {/* <div className={isFixed ? "pt-24" : ""}></div> */}
    </>
  );
};

export default Navbar;
