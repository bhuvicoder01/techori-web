import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const TechoriAnimation = () => {
  const animationFrameId = useRef(null);

  useEffect(() => {
    // Particle System Setup
    let particleScene, particleCamera, particleRenderer, particleSystem, positions, velocities;
    const particleCanvas = document.getElementById("particle-canvas");

    if (particleCanvas) {
      particleScene = new THREE.Scene();
      particleCamera = new THREE.PerspectiveCamera(110, window.innerWidth / window.innerHeight, 0.1, 1000);
      particleRenderer = new THREE.WebGLRenderer({ alpha: true, canvas: particleCanvas });
      particleRenderer.setSize(window.innerWidth, window.innerHeight);

      const particles = new THREE.BufferGeometry();
      const particleCount = 1000;
      positions = new Float32Array(particleCount * 3);
      velocities = new Float32Array(particleCount * 5);

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
    }

    // Animation Loop
    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);

      // Animate Particles
      if (particleCanvas && particleSystem) {
        for (let i = 0; i < 1000; i++) {
          positions[i * 3] += velocities[i * 3];
          positions[i * 3 + 1] += velocities[i * 3 + 1];
          positions[i * 3 + 2] += velocities[i * 3 + 2];

          if (Math.abs(positions[i * 3]) > 500) velocities[i * 3] *= -1;
          if (Math.abs(positions[i * 3 + 1]) > 500) velocities[i * 3 + 1] *= -1;
          if (Math.abs(positions[i * 3 + 2]) > 500) velocities[i * 3 + 2] *= -1;
        }

        particleSystem.geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        particleRenderer.render(particleScene, particleCamera);
      }
    };

    animate();

    // Handle Window Resize
    const handleResize = () => {
      if (particleCanvas) {
        particleCamera.aspect = window.innerWidth / window.innerHeight;
        particleCamera.updateProjectionMatrix();
        particleRenderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      // Cancel Animation Frame
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }

      // Cleanup Particle Renderer
      window.removeEventListener("resize", handleResize);
      if (particleCanvas && particleRenderer) {
        particleRenderer.dispose();
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <canvas id="particle-canvas" className="absolute top-0 left-0 w-full h-full" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-6xl font-bold flex items-center justify-center space-x-1">
          {"TECHORI".split("").map((char, index) => (
            <span
              key={index}
              className={`inline-block transition-all duration-200 ease-out hover:scale-125 hover:${
                Math.random() > 0.5 ? "translate-y-[-15px]" : "translate-y-[15px]"
              } hover:rotate-6 ${index === 0 ? "text-orange-600" : "text-white"}`}
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              {char}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default TechoriAnimation;