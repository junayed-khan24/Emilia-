import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <NavLink to="/" className="text-3xl font-regular font-normal text-black">
            Emilia
          </NavLink>


          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center text-lg font-normal font-regular">
            <NavLink to="/" end className={navClass}>Home</NavLink>
            <NavLink to="/about" className={navClass}>About</NavLink>
            <NavLink to="/portfolio" className={navClass}>Portfolio</NavLink>
            <NavLink to="/blog" className={navClass}>Blog</NavLink>
            <NavLink to="/contact" className={navClass}>Contact</NavLink>
          </div>


          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <span className="text-2xl">✕</span>
              ) : (
                <span className="text-2xl">☰</span>
              )}
            </button>
          </div>

        </div>
      </div>


      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-3 text-center">

          <NavLink to="/" end className={navClass} onClick={() => setIsOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/about" className={navClass} onClick={() => setIsOpen(false)}>
            About
          </NavLink>

          <NavLink to="/portfolio" className={navClass} onClick={() => setIsOpen(false)}>
            Portfolio
          </NavLink>

          <NavLink to="/blog" className={navClass} onClick={() => setIsOpen(false)}>
            Blog
          </NavLink>

          <NavLink to="/contact" className={navClass} onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
