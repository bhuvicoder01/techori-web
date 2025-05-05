import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const TechoriAnimation = () => {
  const mountRef = useRef(null);
  const animationFrameId = useRef(null);

  useEffect(() => {
    // Scene Setup for the "t" Sprite
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(128, 112);
    mountRef.current.appendChild(renderer.domElement);

    // Load the "t" Image as a Texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("techori3.png"); // Replace with actual image path

    // Create a Sprite with the Texture
    const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(80, 80, 1); // Adjust size to fit the canvas
    scene.add(sprite);

    camera.position.z = 90;

    // Particle System for Background
    let particleScene, particleCamera, particleRenderer, particleSystem, positions, velocities;
    const particleCanvas = document.getElementById("particle-canvas");

    if (particleCanvas) {
      particleScene = new THREE.Scene();
      particleCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      particleRenderer = new THREE.WebGLRenderer({ alpha: true, canvas: particleCanvas });
      particleRenderer.setSize(window.innerWidth, window.innerHeight);

      const particles = new THREE.BufferGeometry();
      const particleCount = 1000;
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
    }

    // Animation Loop
    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);

      // Pulsating Scale Animation for the "t" Sprite
      const time = Date.now() * 0.001;
      const scale = 80 + Math.sin(time) * 5; // Base scale 80, oscillate by ±5
      sprite.scale.set(scale, scale, 1);

      // Animate Particles if Particle System Exists
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

      renderer.render(scene, camera);
    };

    animate();

    // Handle Window Resize for Particles
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

      // Cleanup Renderer
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }

      // Cleanup Particle Renderer
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (particleCanvas && particleRenderer) {
        particleRenderer.dispose();
      }
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default TechoriAnimation;