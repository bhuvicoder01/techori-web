import React, { FC } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Wifi,
  BarChart,
  Users,
  Shield,
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

interface UseCase {
  industry: string;
  description: string;
  benefits: string[];
}

const WiFiSolutions: FC = () => {
  const features: Feature[] = [
    {
      icon: <Wifi className="h-10 w-10 text-techori-purple" />,
      title: "Captive Portal",
      description: "Custom branded login pages with multiple authentication methods.",
      features: ["Social Login", "SMS Verification", "Email Capture", "Custom Forms"],
    },
    {
      icon: <BarChart className="h-10 w-10 text-techori-purple" />,
      title: "Analytics Dashboard",
      description: "Comprehensive insights into WiFi usage and customer behavior.",
      features: ["User Demographics", "Visit Frequency", "Dwell Time", "Custom Reports"],
    },
    {
      icon: <Users className="h-10 w-10 text-techori-purple" />,
      title: "Marketing Tools",
      description: "Leverage WiFi as a powerful marketing and engagement channel.",
      features: ["Email Marketing", "SMS Campaigns", "Surveys", "Promotions"],
    },
    {
      icon: <Shield className="h-10 w-10 text-techori-purple" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security features to protect your network and users.",
      features: ["Data Encryption", "Compliance Reports", "Access Controls", "Content Filtering"],
    },
  ];

  const useCases: UseCase[] = [
    {
      industry: "Retail",
      description: "Engage shoppers, collect valuable customer data, and drive repeat visits.",
      benefits: ["Customer Analytics", "Personalized Marketing", "Increased Dwell Time"],
    },
    {
      industry: "Hospitality",
      description: "Enhance guest experience with reliable WiFi while gathering insights.",
      benefits: ["Guest Satisfaction", "Service Upselling", "Operational Efficiency"],
    },
    {
      industry: "Events & Venues",
      description: "Provide high-density WiFi for attendees while collecting event analytics.",
      benefits: ["Attendee Engagement", "Sponsor Opportunities", "Traffic Flow Analysis"],
    },
    {
      industry: "Healthcare",
      description: "Secure WiFi solutions that comply with healthcare regulations.",
      benefits: ["Patient Satisfaction", "HIPAA Compliance", "Separate Guest Networks"],
    },
    {
      industry: "Education",
      description: "Campus-wide WiFi with content filtering and access controls.",
      benefits: ["Student Connectivity", "Resource Access", "Campus Safety"],
    },
    {
      industry: "Municipalities",
      description: "Public WiFi networks for cities, parks, and public spaces.",
      benefits: ["Citizen Services", "Tourism Support", "Digital Inclusion"],
    },
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://via.placeholder.com/600x400?text=WiFi+Solutions";
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-techori-purple/10 to-techori-blue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Public WiFi Solutions</h1>
            <p className="text-xl text-gray-700 mb-8">
              Reliable, secure, and high-performance wireless connectivity solutions
            </p>
            <Button
              asChild
              className="bg-techori-purple hover:bg-techori-blue transform hover:-translate-y-1 transition-all shadow-xl"
              aria-label="Request a demo for WiFi solutions"
            >
              <Link to="/contact">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Enterprise-Grade WiFi Solutions</h2>
              <p className="text-gray-700 mb-6">
                Our public WiFi solutions provide reliable and secure connectivity for businesses,
                events, and public spaces, all while generating valuable customer insights.
              </p>
              <p className="text-gray-700 mb-6">
                From captive portals with custom branding to advanced analytics dashboards, our
                solutions help you leverage WiFi as a powerful marketing and customer engagement tool.
              </p>
              <div className="space-y-4">
                {[
                  "High-performance WiFi networks for any environment",
                  "Custom branded captive portals for user authentication",
                  "Advanced analytics and customer insights",
                  "Multi-location management from a single dashboard",
                  "Enterprise-grade security and compliance",
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
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
                alt="WiFi Solutions"
                className="w-full h-auto object-cover"
                onError={handleImageError}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Powerful features to enhance your guest WiFi experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 rounded-lg bg-techori-purple/10 flex items-center justify-center mb-6 group-hover:bg-techori-purple/20 transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-700 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-techori-purple" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Industry Solutions</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Tailored WiFi solutions for various industries and use cases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-techori-purple"
              >
                <h3 className="text-xl font-bold mb-3">{useCase.industry}</h3>
                <p className="text-gray-700 mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-techori-purple" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-techori-purple to-techori-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your WiFi Experience?</h2>
            <p className="text-xl opacity-90 mb-8">
              Contact us today to learn how our WiFi solutions can benefit your business.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-techori-purple hover:bg-gray-100 hover:text-techori-blue px-8 transform hover:-translate-y-1 transition-all shadow-xl"
              aria-label="Request a demo for WiFi solutions"
            >
              <Link to="/contact">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WiFiSolutions;
