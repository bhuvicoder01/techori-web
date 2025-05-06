import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const TechoriAnimation = () => {
  const animationFrameId = useRef(null);
  const canvasRef = useRef(null);
  const textContainerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 640);

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
        setIsDesktop(window.innerWidth >= 640);
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

    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDesktop]);

  return (
    <div className="relative w-full h-full">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />
      <div
        ref={textContainerRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
      >
        <h1 className="text-6xl sm:text-8xl font-bold flex items-center justify-center space-x-2">
          {"TECHORI".split("").map((char, index) => {
            let style = {
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              letterSpacing: "0.05em",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              animationDelay: `${index * 0.2}s`,
            };

            if (isDesktop && textContainerRef.current) {
              const letter = textContainerRef.current.children[index];
              if (letter) {
                const rect = letter.getBoundingClientRect();
                const dx = mousePos.x - (rect.left + rect.width / 2);
                const dy = mousePos.y - (rect.top + rect.height / 2);
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 100; // Repulsion radius
                if (distance < maxDistance) {
                  const angle = Math.atan2(dy, dx);
                  const force = (maxDistance - distance) / maxDistance;
                  style.transform = `translate(${Math.cos(angle) * force * 50}px, ${Math.sin(angle) * force * 50}px)`;
                }
              }
            }

            return (
              <span
                key={index}
                className={`inline-block animate-fall ${
                  index === 0 ? "text-orange-600" : "text-white"
                } transition-transform duration-300 ease-out`}
                style={style}
              >
                {char}
              </span>
            );
          })}
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

          @media (max-width: 639px) {
            .animate-fall {
              transform: translateY(0) !important; /* Disable hover transform on mobile */
            }
          }
        `}
      </style>
    </div>
  );
};

export default TechoriAnimation;