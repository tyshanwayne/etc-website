import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToServices = () => {
    const yOffset = -96;
    const scroll = () => {
      const el = document.getElementById("services");
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
  };

  return (
    <footer className="py-12 text-white bg-et-purple-dark">
      <div className="grid gap-12 px-6 mx-auto max-w-7xl md:grid-cols-3">
        {/* LOGO + TAGLINE */}
        <div>
          <h2 className="text-2xl font-bold">Empower Through Care</h2>
          <p className="mt-2 text-sm">
            Supporting individuals with disabilities with care, dignity, and
            empowerment.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              {/* Scroll to Services section */}
              <button
                onClick={scrollToServices}
                className="text-left hover:underline"
              >
                Services
              </button>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/news" className="hover:underline">
                Blogs & Events
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* SOCIALS */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Connect With Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="transition hover:text-et-teal">
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </a>
            <a href="#" className="transition hover:text-et-teal">
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
            <a href="#" className="transition hover:text-et-teal">
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-sm text-center text-gray-300">
        &copy; {new Date().getFullYear()} Empower Through Care. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
