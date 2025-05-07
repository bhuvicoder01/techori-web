import React, { FC } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Bot,
  Factory,
  BrainCircuit,
  Cpu,
} from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

interface Industry {
  industry: string;
  description: string;
  applications: string[];
}

interface Process {
  step: string;
  title: string;
  description: string;
}

const RoboticsDevelopment: FC = () => {
  const services: Service[] = [
    {
      icon: <Bot className="h-10 w-10 text-techori-purple" />,
      title: "Custom Robotics",
      description: "Tailored robotics solutions designed for your specific business needs.",
      features: ["Custom Design", "Prototype Development", "Testing & Validation", "Deployment"],
    },
    {
      icon: <Factory className="h-10 w-10 text-techori-purple" />,
      title: "Industrial Automation",
      description: "Streamline manufacturing and production processes with robotics.",
      features: ["Process Automation", "Quality Control", "Robotic Arms", "Assembly Lines"],
    },
    {
      icon: <BrainCircuit className="h-10 w-10 text-techori-purple" />,
      title: "AI & Computer Vision",
      description: "Intelligent robotics systems powered by advanced AI algorithms.",
      features: ["Machine Learning", "Computer Vision", "Predictive Analytics", "Decision Systems"],
    },
    {
      icon: <Cpu className="h-10 w-10 text-techori-purple" />,
      title: "Robotics Software",
      description: "Custom software solutions for controlling and monitoring robotics systems.",
      features: ["Control Systems", "User Interfaces", "Data Analytics", "Remote Monitoring"],
    },
  ];

  const industries: Industry[] = [
    {
      industry: "Manufacturing",
      description: "Automate production lines, improve quality control, and increase output.",
      applications: ["Assembly Automation", "Quality Inspection", "Packaging", "Material Handling"],
    },
    {
      industry: "Healthcare",
      description: "Enhance patient care and streamline medical operations.",
      applications: ["Surgical Assistance", "Laboratory Automation", "Medication Management", "Disinfection"],
    },
    {
      industry: "Agriculture",
      description: "Increase farming efficiency and reduce labor costs.",
      applications: ["Crop Monitoring", "Harvesting", "Irrigation Systems", "Weed Control"],
    },
    {
      industry: "Logistics & Warehousing",
      description: "Optimize storage, picking, and shipping operations.",
      applications: ["Inventory Management", "Order Fulfillment", "Autonomous Transport", "Sorting Systems"],
    },
    {
      industry: "Retail",
      description: "Transform customer experiences and store operations.",
      applications: ["Customer Service", "Inventory Tracking", "Store Navigation", "Security"],
    },
    {
      industry: "Research & Education",
      description: "Advance scientific research and educational programs.",
      applications: ["Research Assistance", "Educational Robots", "Lab Automation", "Data Collection"],
    },
  ];

  const processes: Process[] = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "Understanding your specific needs and defining project objectives.",
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Creating the robotics system design and building functional prototypes.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Building the solution and conducting rigorous testing to ensure performance.",
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Implementing the solution and providing ongoing maintenance and support.",
    },
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://via.placeholder.com/600x400?text=Robotics+Development";
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-techori-purple/10 to-techori-blue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Robotics Development</h1>
            <p className="text-xl text-gray-700 mb-8">
              Cutting-edge robotics solutions to automate processes and enhance productivity
            </p>
            <Button
              asChild
              className="bg-techori-purple hover:bg-techori-blue transform hover:-translate-y-1 transition-all shadow-xl"
              aria-label="Discuss your robotics project"
            >
              <Link to="/contact">Discuss Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-2xl transform hover:rotate-2 transition-all duration-500 order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                alt="Robotics Development"
                className="w-full h-auto object-cover"
                onError={handleImageError}
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Advanced Robotics Solutions</h2>
              <p className="text-gray-700 mb-6">
                Our robotics development team combines expertise in mechanical engineering,
                artificial intelligence, and software development to create innovative robotics
                solutions that automate processes and enhance productivity.
              </p>
              <p className="text-gray-700 mb-6">
                Whether you need industrial automation, autonomous vehicles, or custom robotics
                for specific applications, we can help you leverage the power of robotics to
                transform your business operations.
              </p>
              <div className="space-y-4">
                {[
                  "Custom robotics design and development",
                  "Industrial automation solutions",
                  "AI-powered robotics systems",
                  "IoT and sensor integration",
                  "Robotics software development",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-techori-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Robotics Services</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Comprehensive robotics solutions for various industries and applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 rounded-lg bg-techori-purple/10 flex items-center justify-center mb-6 group-hover:bg-techori-purple/20 transition-all">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-techori-purple" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our robotics solutions are transforming operations across multiple industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-techori-purple"
              >
                <h3 className="text-xl font-bold mb-3">{industry.industry}</h3>
                <p className="text-gray-700 mb-4">{industry.description}</p>
                <div className="space-y-2">
                  {industry.applications.map((application, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-techori-purple" />
                      <span className="text-gray-700">{application}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              A systematic approach to designing and implementing robotics solutions
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-techori-purple to-techori-blue" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processes.map((process, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 relative z-10 transform hover:-translate-y-2">
                    <div className="md:absolute md:-top-12 md:left-1/2 md:transform md:-translate-x-1/2 bg-gradient-to-r from-techori-purple to-techori-blue text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 md:mb-0">
                      {process.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3 mt-6">{process.title}</h3>
                    <p className="text-gray-700">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-techori-purple to-techori-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Automate Your Business?</h2>
            <p className="text-xl opacity-90 mb-8">
              Contact our team today to discuss how our robotics solutions can transform your operations.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-techori-purple hover:bg-gray-100 hover:text-techori-blue px-8 transform hover:-translate-y-1 transition-all shadow-xl"
              aria-label="Schedule a consultation for robotics solutions"
            >
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RoboticsDevelopment;
