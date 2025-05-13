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

const EnterpriseWebPortal = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-techori-purple/10 to-techori-blue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-techori-purple text-white">Web Development</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Enterprise Web Portal</h1>
            <p className="text-xl text-gray-700 mb-8">
              A comprehensive web portal for enterprise resource management and team collaboration with advanced security features.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["React", "Node.js", "GraphQL", "MongoDB", "OAuth 2.0", "AWS"].map((tech, index) => (
                <Badge key={index} variant="outline" className="border-techori-purple/30 bg-white">
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
                A leading manufacturing corporation needed a centralized web portal to streamline operations, improve team collaboration, and securely manage resources across global offices.
              </p>
              <p className="text-gray-700 mb-4">
                TECHORI delivered a comprehensive enterprise web portal with role-based access control, real-time analytics dashboards, document management, and integration with existing enterprise systems.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="border rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-techori-purple">35%</p>
                  <p className="text-sm text-gray-600">Productivity Increase</p>
                </div>
                <div className="border rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-techori-purple">12,000+</p>
                  <p className="text-sm text-gray-600">Daily Active Users</p>
                </div>
                <div className="border rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-techori-purple">99.9%</p>
                  <p className="text-sm text-gray-600">Uptime</p>
                </div>
                <div className="border rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-techori-purple">40+</p>
                  <p className="text-sm text-gray-600">Custom Integrations</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-techori-purple/10 to-techori-blue/10 rounded-xl p-8 shadow-lg h-96 flex items-center justify-center">
              <div className="w-full h-full rounded-lg bg-white shadow-inner flex items-center justify-center">
                <div className="bg-gradient-to-br from-techori-purple/20 to-techori-blue/20 w-5/6 h-4/5 rounded-lg shadow-lg flex items-center justify-center">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225' viewBox='0 0 400 225' fill='none'%3E%3Crect width='400' height='225' fill='%239b87f5' opacity='0.2'/%3E%3Cpath d='M200 112.5 L150 75 L200 37.5 L250 75 L200 112.5' stroke='%239b87f5' stroke-width='5' fill='%239b87f5' opacity='0.7'/%3E%3Cpath d='M150 150 L100 112.5 L150 75 L200 112.5 L150 150' stroke='%239b87f5' stroke-width='5' fill='%239b87f5' opacity='0.5'/%3E%3Cpath d='M250 150 L200 112.5 L250 75 L300 112.5 L250 150' stroke='%239b87f5' stroke-width='5' fill='%239b87f5' opacity='0.5'/%3E%3Cpath d='M200 187.5 L150 150 L200 112.5 L250 150 L200 187.5' stroke='%239b87f5' stroke-width='5' fill='%239b87f5' opacity='0.3'/%3E%3C/svg%3E" 
                    alt="Enterprise Web Portal" 
                    className="w-4/5 h-auto rounded shadow"
                  />
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
              The enterprise portal included several advanced features to meet the client's specific requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Monitor className="h-12 w-12 text-techori-purple" />,
                title: "Custom Dashboard",
                description: "Role-specific dashboards with real-time analytics and KPI tracking."
              },
              {
                icon: <Server className="h-12 w-12 text-techori-purple" />,
                title: "Secure Document Management",
                description: "Advanced document storage with versioning and access controls."
              },
              {
                icon: <Globe className="h-12 w-12 text-techori-purple" />,
                title: "Global Access",
                description: "Optimized for global access with multi-region deployment and CDN integration."
              },
              {
                icon: <Users className="h-12 w-12 text-techori-purple" />,
                title: "Team Collaboration",
                description: "Integrated chat, video conferencing, and project management tools."
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
            <h2 className="text-3xl font-bold mb-4">Development Process</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our approach to building the enterprise portal followed a structured methodology to ensure success.
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 -ml-0.5 w-0.5 h-full bg-gray-200"></div>
            {[
              {
                title: "Discovery & Requirements",
                description: "Conducted stakeholder interviews and defined detailed technical requirements.",
                duration: "4 weeks"
              },
              {
                title: "UX/UI Design",
                description: "Created wireframes and interactive prototypes for user testing.",
                duration: "6 weeks"
              },
              {
                title: "Development & Integration",
                description: "Developed the core platform and integrated with existing enterprise systems.",
                duration: "16 weeks"
              },
              {
                title: "Testing & Security Audit",
                description: "Performed thorough testing and conducted third-party security audits.",
                duration: "4 weeks"
              },
              {
                title: "Deployment & Training",
                description: "Deployed to production and provided comprehensive user training.",
                duration: "3 weeks"
              }
            ].map((step, index) => (
              <div key={index} className="relative mb-8">
                <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-700 mb-1">{step.description}</p>
                    <span className="text-sm text-techori-purple font-medium">{step.duration}</span>
                  </div>
                  <div className="absolute left-1/2 -ml-3 w-6 h-6 rounded-full bg-techori-purple shadow"></div>
                  <div className="w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gradient-to-r from-techori-purple/10 to-techori-blue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-6">
              <svg className="w-12 h-12 text-techori-purple mx-auto mb-4 opacity-20" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-xl italic text-gray-700 mb-4">
                "The enterprise portal TECHORI developed has transformed how our global teams collaborate. The intuitive interface and powerful features have significantly improved productivity while maintaining the highest security standards."
              </p>
              <div className="font-medium text-gray-900">Sarah Johnson</div>
              <div className="text-sm text-gray-500">CIO, Global Manufacturing Corp</div>
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
              Explore other projects that showcase our expertise in enterprise solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Healthcare Data Platform",
                category: "Data Analytics",
                description: "A healthcare analytics platform for patient data insights.",
                link: "/portfolio/healthcare-data"
              },
              {
                title: "Financial Services Platform",
                category: "FinTech",
                description: "A secure digital platform for financial services.",
                link: "/portfolio/financial-services"
              },
              {
                title: "Smart Retail Solution",
                category: "IoT",
                description: "An IoT-based retail management system.",
                link: "/portfolio/smart-retail"
              }
            ].map((project, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <Badge className="mb-2 bg-gray-100 text-gray-800">{project.category}</Badge>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <Button asChild variant="ghost" className="p-0 text-techori-purple hover:text-techori-blue hover:bg-transparent">
                    <Link to={project.link}>View Project →</Link>
                  </Button>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your Enterprise Solution?</h2>
            <p className="text-xl opacity-90 mb-8">
              Let us help you create a custom enterprise solution tailored to your specific needs
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-techori-purple hover:bg-gray-100">
                <Link to="/contact">Request a Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/services/web-app">Explore Web Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EnterpriseWebPortal;
