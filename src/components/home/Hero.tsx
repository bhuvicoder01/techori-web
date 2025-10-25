'use client'

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";
import { Link } from "react-router-dom";
import TechoriAnimation from "./Threejs";
import NoticePopup from '@/components/home/NoticePopup';

export default function TechoriPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-start overflow-hidden">
      {/* Notice Popup */}
      <NoticePopup />

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex flex-col items-center justify-center bg-gradient-to-b from-black via-neutral-900 to-black text-center px-4">
        <div className="absolute inset-0 opacity-10">
          <TechoriAnimation />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-lg"
        >
          Welcome to Techori
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-neutral-300 text-lg md:text-xl max-w-2xl leading-relaxed"
        >
          Empowering businesses through innovation, technology, and collaboration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex gap-4 justify-center"
        >
          <Link to="/explore">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-pink-500/30 transition-all">
              Explore Services
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
              Contact Us
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* 3D Spline Section */}
      <section className="w-full flex justify-center py-20 px-4">
        <Card className="relative w-full max-w-6xl h-[550px] md:h-[600px] bg-black/95 overflow-hidden rounded-2xl border border-white/10 shadow-xl">
          {/* Background glow */}
          <Spotlight
            className="-top-40 left-10 md:left-60 md:-top-20 opacity-80"
            fill="white"
          />

          <div className="flex flex-col md:flex-row h-full">
            {/* Left Text Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 p-8 md:p-12 z-10 flex flex-col justify-center"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-500 leading-tight">
                Interactive 3D Experience
              </h2>
              <p className="mt-5 text-neutral-300 text-base md:text-lg max-w-lg leading-relaxed">
                Elevate your interface with immersive 3D visuals powered by Spline. 
                Create engaging and realistic experiences your users will love.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 w-fit bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-pink-500/30 transition-all"
              >
                Explore More
              </motion.button>
            </motion.div>

            {/* Right 3D Scene */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="flex-1 relative"
            >
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </Card>
      </section>
    </div>
  );
}
