import React from "react";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#why-us" },
  { name: "Services", href: "#services" },
];

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-primary-900 py-8 px-6 md:px-16 lg:px-32 z-50">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src= "assets/logo-white.svg"
            alt="Logo"
            className="w-32 md:w-40 lg:w-56 mb-4"
          />
          <p className="text-sm text-slate-50 italic text-center md:text-left">
            Building the future, one step at a time.
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 items-center md:items-start flex-grow-0">
          {navLinks.map((link) => (
            <li key={link.name} className="relative overflow-hidden">
              <div className="spin-container flex flex-col relative transition-transform duration-500 ease-in-out">
                <a
                  href={link.href}
                  className="text-slate-50 text-xl uppercase font-light text-center md:text-left"
                >
                  {link.name}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
