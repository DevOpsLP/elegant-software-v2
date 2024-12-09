import React, { useState, useEffect, useRef } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const lastScrollY = useRef<number>(0); // To track the last scroll position

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll behavior for the parallax container
  useEffect(() => {
    const handleScroll = () => {
      const parallaxContainer = document.querySelector(".parallax-effect") as HTMLElement;
      const currentScrollY = parallaxContainer?.scrollTop || 0;

      // Scrolling down, hide the navbar
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsVisible(false);
      }

      // Scrolling up, show the navbar
      if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }

      // Update last scroll position
      lastScrollY.current = currentScrollY;
    };

    // Attach the scroll event listener to the parallax container
    const parallaxContainer = document.querySelector(".parallax-effect") as HTMLElement;
    if (parallaxContainer) {
      parallaxContainer.addEventListener("scroll", handleScroll);
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      if (parallaxContainer) {
        parallaxContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // Smooth scrolling with offset
  const handleNavigation = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const offset = 120; // Set offset value
      const sectionPosition = section.offsetTop - offset;

      // Scroll to the adjusted position
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });

      // Close the mobile menu after navigation
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out bg-slate-100 bg-opacity-30 shadow-md ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center cursor-pointer">
          <img src="/assets/logo.png" alt="Elegant Software Logo" className="w-36" />
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          {["Home", "Why Us", "Services", "Contact"].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                onClick={(e) => handleNavigation(e, link.toLowerCase().replace(" ", "-"))}
                className="text-gray-800 hover:text-primary-500 transition duration-300 text-lg"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden inset-0 text-center bg-slate-100 pb-44 flex items-center justify-center overflow-hidden min-h-screen">
          <ul className="flex flex-col space-y-8">
            {["Home", "Why Us", "Services", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  onClick={(e) => {
                    handleNavigation(e, link.toLowerCase().replace(" ", "-"));
                    setIsMenuOpen(false); // Close the menu after clicking
                  }}
                  className="text-gray-800 text-5xl hover:text-primary-500 transition duration-300 text-center"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}


    </nav>
  );
};

export default Navbar;
