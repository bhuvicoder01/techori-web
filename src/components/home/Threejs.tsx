import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const TechoriAnimation = () => {
  const animationFrameId = useRef(null);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    // Handle Desktop Detection
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Particle System Setup
    let particleScene, particleCamera, particleRenderer, particleSystem, positions, velocities;
    const particleCanvas = canvasRef.current;

    if (particleCanvas) {
      particleScene = new THREE.Scene();
      particleCamera = new THREE.PerspectiveCamera(110, window.innerWidth / window.innerHeight, 0.1, 1000);
      particleRenderer = new THREE.WebGLRenderer({ alpha: true, canvas: particleCanvas });
      particleRenderer.setSize(window.innerWidth, window.innerHeight);

      const particles = new THREE.BufferGeometry();
      const particleCount = 500;
      positions = new Float32Array(particleCount * 3);
      velocities = new Float32Array(particleCount * 3);

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

      particleCamera.position.z = 500;

      // Animation Loop
      const animate = () => {
        animationFrameId.current = requestAnimationFrame(animate);

        for (let i = 0; i < particleCount; i++) {
          positions[i * 3] += velocities[i * 3];
          positions[i * 3 + 1] += velocities[i * 3 + 1];
          positions[i * 3 + 2] += velocities[i * 3 + 2];

          if (Math.abs(positions[i * 3]) > 500) velocities[i * 3] *= -1;
          if (Math.abs(positions[i * 3 + 1]) > 500) velocities[i * 3 + 1] *= -1;
          if (Math.abs(positions[i * 3 + 2]) > 500) velocities[i * 3 + 2] *= -1;
        }

        particleSystem.geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        particleRenderer.render(particleScene, particleCamera);
      };

      animate();

      // Handle Window Resize
      const handleResize = () => {
        particleCamera.aspect = window.innerWidth / window.innerHeight;
        particleCamera.updateProjectionMatrix();
        particleRenderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
        }
        window.removeEventListener("resize", handleResize);
        particleRenderer.dispose();
      };
    }
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const container = containerRef.current;
    if (!container) return;

    const letters = container.querySelectorAll(".letter");
    const repelDistance = 100; // Distance at which letters start repelling
    const maxDistance = 150; // Maximum distance letters can move
    const returnSpeed = 0.1; // Speed of returning to original position

    const originalPositions = Array.from(letters).map((letter) => ({
      x: letter.offsetLeft,
      y: letter.offsetTop,
    }));

    const handleMouseMove = (e) => {
      const containerRect = container.getBoundingClientRect();
      const mouseX = e.clientX - containerRect.left;
      const mouseY = e.clientY - containerRect.top;

      letters.forEach((letter, index) => {
        const letterRect = letter.getBoundingClientRect();
        const letterX = letterRect.left - containerRect.left + letterRect.width / 2;
        const letterY = letterRect.top - containerRect.top + letterRect.height / 2;

        const dx = mouseX - letterX;
        const dy = mouseY - letterY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < repelDistance) {
          const angle = Math.atan2(dy, dx);
          const repelStrength = (repelDistance - distance) / repelDistance;
          const moveX = -Math.cos(angle) * repelStrength * maxDistance;
          const moveY = -Math.sin(angle) * repelStrength * maxDistance;
          letter.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
          // Smoothly return to original position
          const currentTransform = letter.style.transform.match(/translate\(([^,]+)px,\s*([^)]+)px\)/);
          let currentX = currentTransform ? parseFloat(currentTransform[1]) : 0;
          let currentY = currentTransform ? parseFloat(currentTransform[2]) : 0;

          currentX += (0 - currentX) * returnSpeed;
          currentY += (0 - currentY) * returnSpeed;

          if (Math.abs(currentX) < 0.1 && Math.abs(currentY) < 0.1) {
            letter.style.transform = "translate(0, 0)";
          } else {
            letter.style.transform = `translate(${currentX}px, ${currentY}px)`;
          }
        }
      });
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDesktop]);

  return (
    <div className="relative w-full h-full" ref={containerRef}>
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-6xl sm:text-8xl font-bold flex items-center justify-center space-x-2">
          {"TECHORI".split("").map((char, index) => (
            <span
              key={index}
              className={`letter inline-block animate-fall ${
                index === 0 ? "text-orange-600" : "text-white"
              }`}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                animationDelay: `${index * 0.2}s`,
                transition: isDesktop ? "transform 0.1s ease-out" : "none",
              }}
            >
              {char}
            </span>
          ))}
        </h1>
      </div>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');

          .animate-fall {
            animation: fall 1s ease-out forwards;
            opacity: 0;
            transform: translateY(-100vh);
          }

          @keyframes fall {
            0% {
              opacity: 0;
              transform: translateY(-100vh);
            }
            60% {
              opacity: 1;
              transform: translateY(10px);
            }
            80% {
              transform: translateY(-5px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default TechoriAnimation;