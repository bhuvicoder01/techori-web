import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const NavItem = ({ href, children, className, closeMenu }: { href: string; children: React.ReactNode; className?: string; closeMenu: () => void }) => (
  <li>
    <Link
      to={href}
      className={cn(
        "text-white hover:text-techori-orange hover:underline transition-colors duration-200",
        className
      )}
      onClick={closeMenu}
    >
      {children}
    </Link>
  </li>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsClosing(true);
    } else {
      setIsMenuOpen(true);
      setIsClosing(false);
    }
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsClosing(true);
    }
  };

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 300); // Match animation duration (0.3s)
      return () => clearTimeout(timer);
    }
  }, [isClosing]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    // Listen for both mouse and touch events
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="w-full bg-black shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <img src="/techori2.png" alt="Techori Logo" className="h-10 w-auto" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <NavItem href="/" closeMenu={closeMenu}>Home</NavItem>
            <NavItem href="/about" closeMenu={closeMenu}>About Us</NavItem>
            <NavItem href="/services" closeMenu={closeMenu}>Services</NavItem>
            <NavItem href="/portfolio" closeMenu={closeMenu}>Portfolio</NavItem>
            <NavItem href="/careers" closeMenu={closeMenu}>Careers</NavItem>
            <NavItem href="/contact" closeMenu={closeMenu}>Contact</NavItem>
          </ul>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button asChild variant="outline" className="border-techori-orange text-techori-orange hover:bg-techori-orange hover:text-white">
            <Link to="/contact">Get a Quote</Link>
          </Button>
          <Button asChild className="bg-gradient-to-r from-techori-orange to-techori-red hover:brightness-110">
            <Link to="/login">Client Login</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button ref={toggleButtonRef} className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className={`md:hidden bg-black w-1/2  absolute right-0 py-4 shadow-lg ${isClosing ? 'slide-out-right' : 'slide-in-right'}`}
        >
          <nav className="container mx-auto px-4">
            <ul className="flex flex-col space-y-3">
              <NavItem href="/" className="text-lg" closeMenu={closeMenu}>Home</NavItem>
              <NavItem href="/about" className="text-lg" closeMenu={closeMenu}>About Us</NavItem>
              <NavItem href="/services" className="text-lg" closeMenu={closeMenu}>Services</NavItem>
              <NavItem href="/portfolio" className="text-lg" closeMenu={closeMenu}>Portfolio</NavItem>
              <NavItem href="/careers" className="text-lg" closeMenu={closeMenu}>Careers</NavItem>
              <NavItem href="/contact" className="text-lg" closeMenu={closeMenu}>Contact</NavItem>
              <li className="pt-2 flex flex-col space-y-2">
                <Button asChild variant="outline" className="border-techori-orange text-techori-orange w-full">
                  <Link to="/contact" onClick={closeMenu}>Get a Quote</Link>
                </Button>
                <Button asChild className="bg-gradient-to-r from-techori-orange to-techori-red hover:brightness-110 w-full">
                  <Link to="/login" onClick={closeMenu}>Client Login</Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
      <style>
        {`
          .slide-in-right {
            animation: slideInRight 0.3s ease-out forwards;
          }

          .slide-out-right {
            animation: slideOutRight 0.3s ease-in forwards;
          }

          @keyframes slideInRight {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(0);
            }
          }

          @keyframes slideOutRight {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(100%);
            }
          }
        `}
      </style>
    </header>
  );
};

export default Navbar;