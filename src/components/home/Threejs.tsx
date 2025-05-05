import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";

const TechoriAnimation = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(128, 128);
    mountRef.current.appendChild(renderer.domElement);

    const loader = new FontLoader();
    loader.load(
      "https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",
      (font) => {
        const geometry = new TextGeometry("t", {
          font: font,
          size: 80,
          height: 10,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 1,
          bevelSize: 1,
          bevelOffset: 0,
          bevelSegments: 5,
        });

        const material = new THREE.MeshPhongMaterial({
          color: 0xffffff,
          specular: 0x555555,
          shininess: 50,
        });

        const textMesh = new THREE.Mesh(geometry, material);
        textMesh.position.set(-45, -40, 10);
        scene.add(textMesh);

        const light = new THREE.DirectionalLight(0xffffff, 0.8);
        light.position.set(0, 1, 1);
        scene.add(light);

        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);

        camera.position.z = 130;

        const animate = () => {
          requestAnimationFrame(animate);
          textMesh.rotation.y += 0.02;
          renderer.render(scene, camera);
        };

        animate();
      }
    );

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default TechoriAnimation;