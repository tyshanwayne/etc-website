import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = (id) => {
    const yOffset = -96;
    const scroll = () => {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scroll, 100);
    } else {
      scroll();
    }

    setMenuOpen(false);
  };

  const services = [
    "transport",
    "arts-crafts",
    "skills-training",
    "health-wellbeing",
    "outreach-support",
    "daily-living-supports",
    "community-access",
    "education-support",
    "therapeutic-supports",
    "group-activities",
    "outdoor-adventures",
    "mentorship",
  ];

  return (
    <nav className="sticky top-0 z-50 w-full shadow bg-secondary-bg text-et-blue">
      <div className="flex items-center justify-between h-24 px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/etc-logo-text.png"
            alt="ETC Logo"
            className="object-contain w-auto h-16 md:h-20"
          />
        </Link>

        {/* DESKTOP LINKS */}
        <div className="items-center hidden gap-8 text-base font-medium lg:flex">
          <Link to="/" className="transition hover:text-et-green">
            Home
          </Link>
          <div className="relative group">
            <button
              onClick={() => scrollTo("services")}
              className="transition hover:text-et-green"
            >
              Services ▾
            </button>
            <div className="absolute left-0 z-50 invisible mt-2 transition-all duration-200 bg-white rounded shadow-md opacity-0 group-hover:visible group-hover:opacity-100 w-52 text-et-blue">
              {services.map((s) => (
                <button
                  key={s}
                  onClick={() => scrollTo(s)}
                  className="block w-full px-4 py-2 text-left hover:bg-et-blue hover:text-white"
                >
                  {s.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                </button>
              ))}
            </div>
          </div>
          <Link to="/about" className="transition hover:text-et-green">
            About Us
          </Link>
          <Link to="/news" className="transition hover:text-et-green">
            Blogs & Events
          </Link>
          <Link to="/contact" className="transition hover:text-et-green">
            Contact Us
          </Link>
        </div>

        {/* CTA + HAMBURGER */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            to="/findsupport"
            className="px-3 shadow-md hover:shadow-lg py-2 md:px-4 md:py-2.5 text-white bg-et-teal hover:bg-et-teal-dark rounded-full text-sm md:text-[15px] lg:text-base font-semibold transition"
          >
            FIND SUPPORT
          </Link>
          <Link
            to="/join"
            className="px-3 py-2 md:px-4 md:py-2.5 shadow-md hover:shadow-lg text-et-teal border-2 border-et-teal rounded-full text-sm md:text-[15px] lg:text-base font-semibold hover:bg-et-teal hover:text-white transition"
          >
            BECOME A CARER
          </Link>

          {/* HAMBURGER (far right, only mobile) */}
          <button
            className="ml-2 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="px-4 pb-6 space-y-2 text-sm font-medium lg:hidden sm:px-6 bg-secondary-bg">
          <Link
            to="/"
            className="block py-2"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <details className="group">
            <summary className="py-2 cursor-pointer">Services</summary>
            <div className="pl-4 space-y-1">
              {services.map((s) => (
                <button
                  key={s}
                  onClick={() => scrollTo(s)}
                  className="block w-full py-1 text-left"
                >
                  {s.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                </button>
              ))}
            </div>
          </details>
          <Link
            to="/about"
            className="block py-2"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/news"
            className="block py-2"
            onClick={() => setMenuOpen(false)}
          >
            Blogs & Events
          </Link>
          <Link
            to="/contact"
            className="block py-2"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
