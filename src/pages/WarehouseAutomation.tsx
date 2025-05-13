import React, { FC } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle, Zap, Cloud, Package } from "lucide-react";

interface Product {
  title: string;
  description: string;
  features: string[];
  category: string;
}

interface Category {
  industry: string;
  products: string[];
}

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WarehouseAutomation = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#F97316]/10 to-techori-purple/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-[#F97316] text-white">Robotics</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Warehouse Automation System</h1>
            <p className="text-xl text-gray-700 mb-8">
              An advanced robotics system for warehouse inventory management, logistics, and fulfillment optimization.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["Autonomous Robots", "Computer Vision", "Machine Learning", "IoT", "Inventory Management", "Fleet Control"].map((tech, index) => (
                <Badge key={index} variant="outline" className="border-[#F97316]/30 bg-white">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-gray-700 mb-4">
                A leading e-commerce company needed to optimize their warehouse operations to handle increasing order volumes and improve fulfillment efficiency while reducing operational costs.
              </p>
              <p className="text-gray-700 mb-4">
                TECHORI designed and implemented a comprehensive warehouse automation system featuring a fleet of autonomous robots, computer vision-based inventory tracking, and an AI-powered orchestration platform that optimizes picking, packing, and shipping processes.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="border rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-[#F97316]">65%</p>
                  <p className="text-sm text-gray-600">Efficiency Increase</p>
                </div>
                <div className="border rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-[#F97316]">32</p>
                  <p className="text-sm text-gray-600">Autonomous Robots</p>
                </div>
                <div className="border rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-[#F97316]">99.8%</p>
                  <p className="text-sm text-gray-600">Inventory Accuracy</p>
                </div>
                <div className="border rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-[#F97316]">40%</p>
                  <p className="text-sm text-gray-600">Operating Cost Reduction</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#F97316]/10 to-techori-purple/10 rounded-xl p-8 shadow-lg h-96 flex items-center justify-center">
              <div className="w-full h-full rounded-lg bg-white shadow-inner flex items-center justify-center">
                <div className="bg-gradient-to-br from-[#F97316]/20 to-techori-purple/20 w-5/6 h-4/5 rounded-lg shadow-lg flex items-center justify-center">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225' viewBox='0 0 400 225' fill='none'%3E%3Crect width='400' height='225' fill='%23F97316' opacity='0.2'/%3E%3Crect x='125' y='75' width='150' height='100' rx='10' stroke='%23F97316' stroke-width='5' fill='%23F97316' opacity='0.5'/%3E%3Ccircle cx='150' cy='150' r='15' stroke='%23F97316' stroke-width='5' fill='%23FFFFFF'/%3E%3Ccircle cx='250' cy='150' r='15' stroke='%23F97316' stroke-width='5' fill='%23FFFFFF'/%3E%3Crect x='175' y='50' width='50' height='25' rx='5' stroke='%23F97316' stroke-width='5' fill='%23F97316' opacity='0.7'/%3E%3C/svg%3E" 
                    alt="Warehouse Automation System" 
                    className="w-4/5 h-auto rounded shadow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Components Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">System Components</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our warehouse automation solution comprises several integrated components that work together seamlessly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Boxes className="h-12 w-12 text-[#F97316]" />,
                title: "Autonomous Mobile Robots",
                description: "Fleet of AMRs equipped with sensors for navigation and object manipulation."
              },
              {
                icon: <ScanBarcode className="h-12 w-12 text-[#F97316]" />,
                title: "Inventory Management",
                description: "RFID and computer vision based real-time inventory tracking system."
              },
              {
                icon: <Settings className="h-12 w-12 text-[#F97316]" />,
                title: "Orchestration Platform",
                description: "AI-powered system for optimizing robot movement and task allocation."
              },
              {
                icon: <Package className="h-12 w-12 text-[#F97316]" />,
                title: "Fulfillment Integration",
                description: "Seamless integration with existing ERP and fulfillment systems."
              }
            ].map((component, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">{component.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{component.title}</h3>
                <p className="text-gray-700">{component.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Phases Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Implementation Phases</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              The project was executed in a phased approach to minimize disruption to ongoing operations.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {[
              {
                phase: "PHASE 1",
                title: "Infrastructure Preparation",
                description: "Warehouse assessment, network installation, and environment mapping for robot navigation.",
                duration: "2 months"
              },
              {
                phase: "PHASE 2",
                title: "Pilot Deployment",
                description: "Initial deployment of 5 robots and core inventory management system in a designated zone.",
                duration: "3 months"
              },
              {
                phase: "PHASE 3",
                title: "Full-Scale Implementation",
                description: "Warehouse-wide deployment of the complete robot fleet and integration with all systems.",
                duration: "4 months"
              },
              {
                phase: "PHASE 4",
                title: "Optimization & Training",
                description: "Fine-tuning of AI algorithms, system optimization, and staff training.",
                duration: "3 months"
              }
            ].map((phase, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <div className="flex flex-col md:flex-row md:items-center mb-4">
                  <div className="bg-[#F97316] text-white text-sm font-semibold py-1 px-3 rounded-full mb-2 md:mb-0 md:mr-4 inline-block w-max">
                    {phase.phase}
                  </div>
                  <h3 className="text-xl font-semibold">{phase.title}</h3>
                  <div className="ml-auto text-sm text-gray-500 mt-2 md:mt-0">{phase.duration}</div>
                </div>
                <div className="pl-0 md:pl-12">
                  <p className="text-gray-700">{phase.description}</p>
                  {index < 3 && <div className="border-l-2 border-dashed border-gray-200 h-8 ml-6 my-2"></div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Spotlight Section */}
      <section className="py-16 bg-gradient-to-r from-[#F97316]/10 to-techori-purple/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technology Spotlight</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Key technological innovations that make this warehouse automation system particularly effective.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Computer Vision & Object Recognition",
                description: "Deep learning algorithms enable robots to recognize and handle various products with 99.9% accuracy, adapting to new items without reprogramming."
              },
              {
                title: "Fleet Orchestration AI",
                description: "Advanced algorithms optimize robot paths and task assignments in real-time, avoiding collisions and maximizing throughput based on current warehouse conditions."
              },
              {
                title: "Digital Twin Integration",
                description: "A digital twin of the warehouse provides real-time simulation and predictive analytics for continuous system optimization and scenario planning."
              },
              {
                title: "Human-Robot Collaboration",
                description: "Collaborative features enable seamless interaction between human workers and robots, with sophisticated safety systems and intuitive interfaces."
              }
            ].map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[#F97316]">{tech.title}</h3>
                <p className="text-gray-700">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Measurable Results</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              The warehouse automation system delivered significant improvements across multiple metrics.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#F97316]/5 to-techori-purple/5 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4">Operational Improvements</h3>
              <ul className="space-y-3">
                {[
                  "65% increase in order processing speed",
                  "40% reduction in operating costs",
                  "75% decrease in picking errors",
                  "60% improvement in space utilization"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#F97316] mr-2">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#F97316]/5 to-techori-purple/5 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4">Business Impact</h3>
              <ul className="space-y-3">
                {[
                  "ROI achieved within 14 months of full deployment",
                  "Ability to handle 3x order volume with same physical space",
                  "Improved worker safety with zero accidents",
                  "Ability to scale operations during peak periods"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#F97316] mr-2">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-6">
              <svg className="w-12 h-12 text-[#F97316] mx-auto mb-4 opacity-20" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-xl italic text-gray-700 mb-4">
                "The warehouse automation system developed by TECHORI has revolutionized our fulfillment operations. Not only have we seen dramatic improvements in efficiency and accuracy, but the system's adaptability has allowed us to scale operations during peak seasons without additional staffing."
              </p>
              <div className="font-medium text-gray-900">Jennifer Lopez</div>
              <div className="text-sm text-gray-500">VP of Operations, Global E-commerce Company</div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Related Projects</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Explore other projects that showcase our expertise in automation and logistics.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Retail Solution",
                category: "IoT",
                description: "IoT-based retail management system with inventory tracking.",
                link: "/portfolio/smart-retail"
              },
              {
                title: "Enterprise Web Portal",
                category: "Web Development",
                description: "Comprehensive web portal for enterprise resource management.",
                link: "/portfolio/enterprise-web-portal"
              },
              {
                title: "Smart City Wi-Fi Network",
                category: "Public Wi-Fi",
                description: "City-wide Wi-Fi network with analytics capabilities.",
                link: "/portfolio/smart-city-wifi"
              }
            ].map((project, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <Badge className="mb-2 bg-gray-100 text-gray-800">{project.category}</Badge>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <Button asChild variant="ghost" className="p-0 text-[#F97316] hover:text-techori-purple hover:bg-transparent">
                    <Link to={project.link}>View Project →</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#F97316] to-techori-purple text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Automate Your Operations?</h2>
            <p className="text-xl opacity-90 mb-8">
              Let's discuss how our robotics and automation solutions can transform your business workflow
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-[#F97316] hover:bg-gray-100">
                <Link to="/contact">Request a Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/services/robotics">Explore Robotics Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WarehouseAutomation;
