import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TechoriAnimation from "./Threejs";

const Hero = () => {
  return (
    <div className="relative bg-techori-dark text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 80 80\" width=\"80\" height=\"80\"%3E%3Cpath fill=\"%239C92AC\" fill-opacity=\"0.4\" d=\"M14 16H9v-2h5V9.87a4 4 0 1 1 2 0V14h5v2h-5v15.95A10 10 0 0 0 23.66 27l-3.46-2 8.2-2.2-2.9 5a12 12 0 0 1-21 0l-2.89-5 8.2 2.2-3.47 2A10 10 0 0 0 14 31.95V16zm40 40h-5v-2h5v-4.13a4 4 0 1 1 2 0V54h5v2h-5v15.95A10 10 0 0 0 63.66 67l-3.47-2 8.2-2.2-2.88 5a12 12 0 0 1-21.02 0l-2.88-5 8.2 2.2-3.47 2A10 10 0 0 0 54 71.95V56zm-39 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm40-40a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM15 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm40 40a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\"%3E%3C/path%3E%3C/svg%3E')",
        }}
      ></div>
      <div className="container mx-auto px-4 py-28 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Innovative IT Solutions for{" "}
              <span className="techori-gradient-text">Future-Ready</span>{" "}
              Businesses
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
              TECHORI delivers cutting-edge web & app development, public Wi-Fi solutions, and robotics
              innovation to transform your digital presence.
            </p>
            <p className="text-xl mb-8 font-semibold text-gray-300">
              INNOVATION IS OUR PASSION
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-techori-orange to-techori-red hover:brightness-110 text-white px-8">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-techori-dark px-8">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 animate-slide-up">
            <div className="relative">
              <div className="w-full h-80 md:h-96 bg-gradient-to-br from-techori-orange/20 to-techori-red/20 rounded-lg flex items-center justify-center relative">
                <div className="flex items-center">
                  <div className="w-20 h-24  md:h-32">
                    <TechoriAnimation />
                  </div>
                  <span className="text-6xl md:text-8xl font-bold techori-gradient-text">echori</span>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-techori-orange/30 rounded-full -mt-10 -mr-10 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-techori-red/30 rounded-full -mb-10 -ml-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;