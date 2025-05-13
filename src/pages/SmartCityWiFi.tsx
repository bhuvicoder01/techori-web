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

const SmartCityWiFi = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-techori-blue/10 to-techori-purple/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-techori-blue text-white">Public Wi-Fi</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Smart City Wi-Fi Network</h1>
            <p className="text-xl text-gray-700 mb-8">
              A comprehensive city-wide Wi-Fi network deployment providing connectivity to residents and visitors with advanced analytics.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["Cisco Meraki", "Cloud Management", "Wi-Fi 6", "IoT Sensors", "Big Data", "AI Analytics"].map((tech, index) => (
                <Badge key={index} variant="outline" className="border-techori-blue/30 bg-white">
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
            <div className="bg-gradient-to-br from-techori-blue/10 to-techori-purple/10 rounded-xl p-8 shadow-lg h-96 flex items-center justify-center">
              <div className="w-full h-full rounded-lg bg-white shadow-inner flex items-center justify-center">
                <div className="bg-gradient-to-br from-techori-blue/20 to-techori-purple/20 w-5/6 h-4/5 rounded-lg shadow-lg flex items-center justify-center">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225' viewBox='0 0 400 225' fill='none'%3E%3Crect width='400' height='225' fill='%231EAEDB' opacity='0.2'/%3E%3Ccircle cx='200' cy='112.5' r='50' stroke='%231EAEDB' stroke-width='5' fill='none'/%3E%3Cpath d='M150 112.5 C150 85 172.5 62.5 200 62.5 C227.5 62.5 250 85 250 112.5' stroke='%231EAEDB' stroke-width='5' fill='none'/%3E%3Cpath d='M125 112.5 C125 71.5 158 38.5 200 38.5 C242 38.5 275 71.5 275 112.5' stroke='%231EAEDB' stroke-width='5' fill='none' opacity='0.7'/%3E%3Cpath d='M100 112.5 C100 58 144 14 200 14 C256 14 300 58 300 112.5' stroke='%231EAEDB' stroke-width='5' fill='none' opacity='0.4'/%3E%3C/svg%3E" 
                    alt="Smart City Wi-Fi Network" 
                    className="w-4/5 h-auto rounded shadow"
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-gray-700 mb-4">
                A forward-thinking metropolitan area sought to provide universal Wi-Fi access throughout public spaces while gathering valuable data for urban planning and service optimization.
              </p>
              <p className="text-gray-700 mb-4">
                TECHORI designed and implemented a city-wide Wi-Fi network with 500+ access points, a secure cloud management platform, and an analytics dashboard that provides insights on public space utilization and movement patterns.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="border rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-techori-blue">2M+</p>
                  <p className="text-sm text-gray-600">Monthly Users</p>
                </div>
                <div className="border rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-techori-blue">500+</p>
                  <p className="text-sm text-gray-600">Access Points</p>
                </div>
                <div className="border rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-techori-blue">99.99%</p>
                  <p className="text-sm text-gray-600">Network Uptime</p>
                </div>
                <div className="border rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-techori-blue">45TB</p>
                  <p className="text-sm text-gray-600">Monthly Data</p>
                </div>
              </div>
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
              Our smart city Wi-Fi solution included innovative features to serve both citizens and city administrators.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Wifi className="h-12 w-12 text-techori-blue" />,
                title: "High-Density Coverage",
                description: "Optimized Wi-Fi 6 deployment for crowded areas with multi-gigabit bandwidth."
              },
              {
                icon: <Network className="h-12 w-12 text-techori-blue" />,
                title: "Mesh Network",
                description: "Self-healing mesh network architecture ensuring seamless coverage and redundancy."
              },
              {
                icon: <Package className="h-12 w-12 text-techori-blue" />,
                title: "IoT Integration",
                description: "Built-in support for city IoT devices such as sensors, cameras, and environmental monitors."
              },
              {
                icon: <Globe className="h-12 w-12 text-techori-blue" />,
                title: "Analytics Platform",
                description: "Advanced analytics dashboard providing real-time and historical data insights."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Implementation Process</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our structured approach ensured a successful city-wide deployment with minimal disruption.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {[
              {
                number: "01",
                title: "Site Survey & Network Planning",
                description: "Comprehensive RF surveys and coverage planning for optimal placement and configuration."
              },
              {
                number: "02",
                title: "Infrastructure Deployment",
                description: "Installation of access points, backhaul connectivity, and fiber network integration."
              },
              {
                number: "03",
                title: "Cloud Management Setup",
                description: "Configuration of cloud management platform with security policies and monitoring."
              },
              {
                number: "04",
                title: "Analytics Implementation",
                description: "Development and integration of the analytics platform with data processing pipeline."
              },
              {
                number: "05",
                title: "Testing & Optimization",
                description: "Comprehensive testing and performance optimization to ensure quality service."
              }
            ].map((step, index) => (
              <div key={index} className="relative flex mb-12 last:mb-0">
                <div className="mr-8 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-techori-blue/10 flex items-center justify-center text-2xl font-bold text-techori-blue">
                    {step.number}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                  {index < 4 && (
                    <div className="absolute left-8 top-16 w-0.5 h-10 bg-gray-200"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gradient-to-r from-techori-blue/10 to-techori-purple/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Project Results</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              The smart city Wi-Fi network has delivered significant benefits for both citizens and city administrators.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4">Public Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Free high-speed internet access throughout public spaces",
                  "Seamless connectivity for visitors and tourists",
                  "Enhanced digital inclusion for underserved communities",
                  "Supporting services like city information and emergency alerts"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-techori-blue mr-2">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4">Administrative Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Data-driven urban planning based on movement patterns",
                  "Optimized public transportation based on usage analytics",
                  "Enhanced public safety through connected infrastructure",
                  "Platform for future smart city initiatives and IoT deployment"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-techori-blue mr-2">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-techori-blue/5 to-techori-purple/5 rounded-xl shadow-lg p-8">
            <div className="text-center mb-6">
              <svg className="w-12 h-12 text-techori-blue mx-auto mb-4 opacity-20" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-xl italic text-gray-700 mb-4">
                "TECHORI's smart city Wi-Fi solution has transformed how our citizens engage with public spaces. The analytics platform has provided invaluable insights that have improved our urban planning and public service allocation."
              </p>
              <div className="font-medium text-gray-900">Michael Chen</div>
              <div className="text-sm text-gray-500">CTO, Metropolitan Technology Office</div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Related Projects</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Explore other projects that showcase our networking and analytics expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Retail Analytics Platform",
                category: "Wi-Fi",
                description: "In-store Wi-Fi with customer analytics for retail chains.",
                link: "/portfolio/retail-analytics"
              },
              {
                title: "Enterprise Web Portal",
                category: "Web Development",
                description: "Comprehensive web portal for enterprise resource management.",
                link: "/portfolio/enterprise-web-portal"
              },
              {
                title: "Smart Retail Solution",
                category: "IoT",
                description: "IoT-based retail management system with analytics.",
                link: "/portfolio/smart-retail"
              }
            ].map((project, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <Badge className="mb-2 bg-gray-100 text-gray-800">{project.category}</Badge>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <Button asChild variant="ghost" className="p-0 text-techori-blue hover:text-techori-purple hover:bg-transparent">
                    <Link to={project.link}>View Project →</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-techori-blue to-techori-purple text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need a Networking Solution?</h2>
            <p className="text-xl opacity-90 mb-8">
              Whether it's public Wi-Fi or enterprise networking, we can help you design and implement the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-techori-blue hover:bg-gray-100">
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/services/wifi">Explore Wi-Fi Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SmartCityWiFi;
