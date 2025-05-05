
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const NavItem = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => (
  <li>
    <Link
      to={href}
      className={cn(
        "text-gray-700 hover:text-techori-orange hover:underline transition-colors duration-200",
        className
      )}
    >
      {children}
    </Link>
  </li>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
            <NavItem href="/">Home</NavItem>
            <NavItem href="/about">About Us</NavItem>
            <NavItem href="/services">Services</NavItem>
            <NavItem href="/portfolio">Portfolio</NavItem>
            <NavItem href="/careers">Careers</NavItem>
            <NavItem href="/contact">Contact</NavItem>
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
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 shadow-lg">
          <nav className="container mx-auto px-4">
            <ul className="flex flex-col space-y-3">
              <NavItem href="/" className="text-lg">Home</NavItem>
              <NavItem href="/about" className="text-lg">About Us</NavItem>
              <NavItem href="/services" className="text-lg">Services</NavItem>
              <NavItem href="/portfolio" className="text-lg">Portfolio</NavItem>
              <NavItem href="/careers" className="text-lg">Careers</NavItem>
              <NavItem href="/contact" className="text-lg">Contact</NavItem>
              <li className="pt-2 flex flex-col space-y-2">
                <Button asChild variant="outline" className="border-techori-orange text-techori-orange w-full">
                  <Link to="/contact">Get a Quote</Link>
                </Button>
                <Button asChild className="bg-gradient-to-r from-techori-orange to-techori-red hover:brightness-110 w-full">
                  <Link to="/login">Client Login</Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
