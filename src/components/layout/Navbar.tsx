import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import * as THREE from "three";

const NavItem = ({ href, children, className, closeMenu }) => (
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
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    // Particle System Setup
    let particleScene, particleCamera, particleRenderer, particleSystem, positions, velocities;
    const particleCanvas = canvasRef.current;

    if (particleCanvas) {
      particleScene = new THREE.Scene();
      particleCamera = new THREE.PerspectiveCamera(75, window.innerWidth / particleCanvas.clientHeight, 0.1, 1000);
      particleRenderer = new THREE.WebGLRenderer({ alpha: true, canvas: particleCanvas });
      particleRenderer.setSize(window.innerWidth, particleCanvas.clientHeight);

      const particles = new THREE.BufferGeometry();
      const particleCount = 700;
      positions = new Float32Array(particleCount * 3);
      velocities = new Float32Array(particleCount * 3);

      // Initialize positions and velocities
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 1000;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 1000;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 1000;
        velocities[i * 3] = (Math.random() - 0.5) * 0.5;
        velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.5;
        velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
      }

      particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const particleMaterial = new THREE.PointsMaterial({
        color: 0xff4500,
        size: 2,
        transparent: true,
        opacity: 0.6,
      });

      particleSystem = new THREE.Points(particles, particleMaterial);
      particleScene.add(particleSystem);

      particleCamera.position.z = 15;

      // Animation Loop
      const animate = () => {
        animationFrameId.current = requestAnimationFrame(animate);

        for (let i = 0; i < particleCount; i++) {
          // Update positions
          positions[i * 3] += velocities[i * 3];
          positions[i * 3 + 1] += velocities[i * 3 + 1];
          positions[i * 3 + 2] += velocities[i * 3 + 2];

          // Boundary checks with NaN prevention
          if (Math.abs(positions[i * 3]) > 500 || isNaN(positions[i * 3])) {
            velocities[i * 3] *= -1;
            positions[i * 3] = Math.max(-500, Math.min(500, positions[i * 3]));
          }
          if (Math.abs(positions[i * 3 + 1]) > 500 || isNaN(positions[i * 3 + 1])) {
            velocities[i * 3 + 1] *= -1;
            positions[i * 3 + 1] = Math.max(-500, Math.min(500, positions[i * 3 + 1]));
          }
          if (Math.abs(positions[i * 3 + 2]) > 500 || isNaN(positions[i * 3 + 2])) {
            velocities[i * 3 + 2] *= -1;
            positions[i * 3 + 2] = Math.max(-500, Math.min(500, positions[i * 3 + 2]));
          }
        }

        particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        particleRenderer.render(particleScene, particleCamera);
      };

      animate();

      // Handle Window Resize
      const handleResize = () => {
        particleCamera.aspect = window.innerWidth / particleCanvas.clientHeight;
        particleCamera.updateProjectionMatrix();
        particleRenderer.setSize(window.innerWidth, particleCanvas.clientHeight);
      };

      window.addEventListener("resize", handleResize);

      // Cleanup
      return () => {
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
        }
        window.removeEventListener("resize", handleResize);
        particleRenderer.dispose();
      };
    }
  }, []);

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

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className={`w-full fixed top-0 z-50 shadow-sm ${isHomePage ? "bg-black/30 backdrop-blur-md" : "bg-black"}`}>
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-[-1]"
      />
      <div className="container mx-auto px-4 py-4 flex items-center justify-between relative">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <img
              src={isHomePage ? "/techori2.png" : "/techori-alt.png"}
              alt="Techori Logo"
              className="h-10 w-auto"
            />
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
          className={`md:hidden w-full absolute right-0 top-full py-4 shadow-lg ${
            isHomePage ? "bg-black/80 backdrop-blur-md" : "bg-black"
          } ${isClosing ? "slide-out-right" : "slide-in-right"}`}
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