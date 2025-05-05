
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-20 bg-techori-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl opacity-90 mb-4">
            Partner with TECHORI for innovative IT solutions that drive growth and enhance your competitive edge.
          </p>
          <p className="text-lg font-semibold mb-8 techori-gradient-text">INNOVATION IS OUR PASSION</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-techori-dark hover:bg-gray-100 px-8">
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
