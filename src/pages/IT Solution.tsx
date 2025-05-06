import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Wrench,
  Shield,
  Cloud,
  Database,
} from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

interface Process {
  step: string;
  title: string;
  description: string;
}

const ITSolutions: FC = () => {
  const services: Service[] = [
    {
      icon: <Wrench className="h-10 w-10 text-techori-purple" />,
      title: "Network Infrastructure",
      description: "Design, implementation, and maintenance of robust network infrastructure.",
      features: ["LAN/WAN Solutions", "VPN Configuration", "Wireless Networks", "Network Monitoring"],
    },
    {
      icon: <Shield className="h-10 w-10 text-techori-purple" />,
      title: "Cybersecurity",
      description: "Protect your business from cyber threats with comprehensive security solutions.",
      features: ["Threat Detection", "Data Encryption", "Security Audits", "Employee Training"],
    },
    {
      icon: <Cloud className="h-10 w-10 text-techori-purple" />,
      title: "Cloud Solutions",
      description: "Seamless migration and management of your business applications in the cloud.",
      features: ["Cloud Migration", "SaaS Integration", "Hybrid Cloud", "Cloud Security"],
    },
    {
      icon: <Database className="h-10 w-10 text-techori-purple" />,
      title: "IT Management",
      description: "Proactive management and support for all your IT needs.",
      features: ["Remote Support", "IT Consulting", "Managed Services", "Disaster Recovery"],
    },
  ];

  const processes: Process[] = [
    {
      step: "01",
      title: "Assessment",
      description: "Thorough evaluation of your current IT infrastructure and business needs.",
    },
    {
      step: "02",
      title: "Planning",
      description: "Detailed solution design and implementation roadmap tailored to your requirements.",
    },
    {
      step: "03",
      title: "Implementation",
      description: "Careful execution of the plan with minimal disruption to your operations.",
    },
    {
      step: "04",
      title: "Ongoing Support",
      description: "Continuous monitoring, maintenance, and optimization of your IT systems.",
    },
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://via.placeholder.com/600x400?text=IT+Infrastructure";
  };

  return (
    <Layout>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-techori-purple/10 to-techori-blue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">IT Solutions</h1>
            <p className="text-xl text-gray-700 mb-8">
              Comprehensive IT infrastructure management and support services
            </p>
            <Button
              asChild
              className="bg-techori-purple hover:bg-techori-blue transform hover:-translate-y-1 transition-all shadow-xl"
              aria-label="Request a consultation for IT solutions"
            >
              <Link to="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Enterprise IT Infrastructure Solutions</h2>
              <p className="text-gray-700 mb-6">
                Our IT infrastructure solutions are designed to optimize your business operations,
                reduce downtime, and ensure your technology supports your business goals.
              </p>
              <p className="text-gray-700 mb-6">
                Whether you need complete IT management or support for your existing IT team,
                TECHORI provides scalable solutions that grow with your business.
              </p>
              <div className="space-y-4">
                {[
                  "24/7 IT support and monitoring",
                  "Network infrastructure design and implementation",
                  "Cloud migration and management",
                  "Cybersecurity solutions",
                  "Business continuity planning",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-techori-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl transform hover:rotate-2 transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                alt="IT Infrastructure"
                className="w-full h-auto object-cover"
                onError={handleImageError}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our IT Services</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Comprehensive technology solutions to keep your business running smoothly
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

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our IT Implementation Process</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              A structured approach to delivering IT solutions that meet your business needs
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your IT Infrastructure?</h2>
            <p className="text-xl opacity-90 mb-8">
              Contact our team today to discuss how our IT solutions can transform your business.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-techori-purple hover:bg-gray-100 hover:text-techori-blue px-8 transform hover:-translate-y-1 transition-all shadow-xl"
              aria-label="Get started with IT solutions"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ITSolutions;
