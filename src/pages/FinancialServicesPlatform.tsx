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

const FinancialServicesPlatform = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-techori-blue/10 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Financial Services Platform</h1>
              <p className="text-lg text-gray-600 mb-8">
                A secure digital platform for financial services with real-time transaction processing,
                robust security, and intuitive user experience.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="bg-techori-purple/10 text-techori-purple px-4 py-2 rounded-full text-sm font-medium">
                  FinTech
                </span>
                <span className="bg-techori-blue/10 text-techori-blue px-4 py-2 rounded-full text-sm font-medium">
                  Banking
                </span>
                <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                  Payment Processing
                </span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                  Enterprise Solution
                </span>
              </div>
              <div className="flex gap-4">
                <Button asChild>
                  <Link to="/contact">Request Demo</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/portfolio">Back to Portfolio</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
              <div className="relative aspect-video w-full max-w-lg rounded-xl overflow-hidden shadow-2xl">
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-techori-purple/80 to-techori-blue/80"
                  style={{ 
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225' viewBox='0 0 400 225' fill='none'%3E%3Crect width='400' height='225' fill='%230ea5e9' opacity='0.2'/%3E%3Crect x='150' y='100' width='100' height='60' rx='5' stroke='%230ea5e9' stroke-width='5' fill='%230ea5e9' opacity='0.5'/%3E%3Ccircle cx='200' cy='75' r='25' stroke='%230ea5e9' stroke-width='5' fill='%230ea5e9' opacity='0.7'/%3E%3Cpath d='M200 130 L195 120 L205 120 Z' fill='%23FFFFFF'/%3E%3C/svg%3E")`,
                    backgroundSize: "cover", 
                    backgroundPosition: "center" 
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center px-4">
                    <CreditCard size={64} className="mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">Financial Services Platform</h3>
                    <p className="text-white/80">Secure Digital Banking & Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Project Overview</h2>
          
          <Tabs defaultValue="challenge" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="challenge">The Challenge</TabsTrigger>
              <TabsTrigger value="solution">Our Solution</TabsTrigger>
              <TabsTrigger value="results">Results</TabsTrigger>
            </TabsList>
            <TabsContent value="challenge" className="p-6 border rounded-lg bg-gray-50">
              <h3 className="text-xl font-bold mb-4">The Challenge</h3>
              <p className="text-gray-700 mb-4">
                A regional financial institution faced competitive pressure from digitally-native fintech 
                startups. They needed to modernize their offerings while ensuring compliance with industry regulations:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Legacy systems with limited integration capabilities</li>
                <li>Stringent security and compliance requirements</li>
                <li>Need for real-time transaction processing</li>
                <li>Customer expectations for modern digital experience</li>
                <li>Increasing transaction volumes straining existing infrastructure</li>
              </ul>
            </TabsContent>
            <TabsContent value="solution" className="p-6 border rounded-lg bg-gray-50">
              <h3 className="text-xl font-bold mb-4">Our Solution</h3>
              <p className="text-gray-700 mb-4">
                We developed a comprehensive financial services platform with these key features:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Cloud-native architecture with microservices for scalability</li>
                <li>Military-grade encryption and multi-factor authentication</li>
                <li>Real-time payment processing with fraud detection</li>
                <li>Digital wallet and contactless payment integration</li>
                <li>Mobile-first, responsive design for all banking services</li>
                <li>API gateway for third-party integrations and open banking</li>
                <li>Comprehensive audit and compliance reporting</li>
              </ul>
            </TabsContent>
            <TabsContent value="results" className="p-6 border rounded-lg bg-gray-50">
              <h3 className="text-xl font-bold mb-4">Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-lg mb-2 text-techori-purple">216%</h4>
                  <p className="text-gray-700">Increase in digital transaction volume</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-lg mb-2 text-techori-purple">40%</h4>
                  <p className="text-gray-700">Reduction in operational costs</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-lg mb-2 text-techori-purple">28%</h4>
                  <p className="text-gray-700">Growth in customer acquisition</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-lg mb-2 text-techori-purple">99.99%</h4>
                  <p className="text-gray-700">Platform uptime with zero security breaches</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Technology Stack</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Package className="h-12 w-12 text-techori-purple mb-4" />
              <h3 className="text-xl font-bold mb-2">Backend</h3>
              <ul className="text-gray-700 space-y-1">
                <li>Java Spring Boot</li>
                <li>Node.js Microservices</li>
                <li>Apache Kafka</li>
                <li>Redis Cache</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Database className="h-12 w-12 text-techori-purple mb-4" />
              <h3 className="text-xl font-bold mb-2">Data Layer</h3>
              <ul className="text-gray-700 space-y-1">
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Elasticsearch</li>
                <li>AWS RDS</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <CreditCard className="h-12 w-12 text-techori-purple mb-4" />
              <h3 className="text-xl font-bold mb-2">Payments</h3>
              <ul className="text-gray-700 space-y-1">
                <li>Stripe Integration</li>
                <li>ACH Processing</li>
                <li>Wire Transfer System</li>
                <li>ISO 20022 Compliance</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <ShieldCheck className="h-12 w-12 text-techori-purple mb-4" />
              <h3 className="text-xl font-bold mb-2">Security</h3>
              <ul className="text-gray-700 space-y-1">
                <li>OAuth 2.0 & OpenID Connect</li>
                <li>AES-256 Encryption</li>
                <li>WAF & DDoS Protection</li>
                <li>PCI DSS Compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-techori-purple to-techori-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Modernize Your Financial Services</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us help you build a secure, scalable financial platform that meets regulatory requirements
            while delivering exceptional customer experiences.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-techori-purple hover:bg-gray-100">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/portfolio">Explore More Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FinancialServicesPlatform;
