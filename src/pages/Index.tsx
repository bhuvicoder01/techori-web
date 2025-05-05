
import React from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ServiceHighlights from "@/components/home/ServiceHighlights";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Testimonials from "@/components/home/Testimonials";
import CtaSection from "@/components/home/CtaSection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ServiceHighlights />
      <FeaturedProjects />
      <Testimonials />
      <CtaSection />
    </Layout>
  );
};

export default Index;
