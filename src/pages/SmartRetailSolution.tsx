import React, { FC } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { CheckCircle, Zap, Cloud, Package, Store, Database, SearchCheck } from "lucide-react";

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

const SmartRetailSolution = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-techori-blue/10 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Smart Retail Solution</h1>
              <p className="text-lg text-gray-600 mb-8">
                An IoT-based retail management system that transforms inventory tracking and 
                customer behavior analysis, creating smarter shopping experiences.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="bg-techori-purple/10 text-techori-purple px-4 py-2 rounded-full text-sm font-medium">
                  IoT Technology
                </span>
                <span className="bg-techori-blue/10 text-techori-blue px-4 py-2 rounded-full text-sm font-medium">
                  Retail Analytics
                </span>
                <span className="bg-rose-100 text-rose-800 px-4 py-2 rounded-full text-sm font-medium">
                  Inventory Management
                </span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                  Customer Experience
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
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225' viewBox='0 0 400 225' fill='none'%3E%3Crect width='400' height='225' fill='%23f43f5e' opacity='0.2'/%3E%3Crect x='150' y='75' width='100' height='100' stroke='%23f43f5e' stroke-width='5' fill='%23f43f5e' opacity='0.4'/%3E%3Cpath d='M150 75 L130 55 L270 55 L250 75' stroke='%23f43f5e' stroke-width='5' fill='none'/%3E%3Cpath d='M250 175 L270 155 L270 55' stroke='%23f43f5e' stroke-width='5' fill='none'/%3E%3Crect x='175' y='100' width='50' height='50' stroke='%23f43f5e' stroke-width='5' fill='%23FFFFFF'/%3E%3C/svg%3E")`,
                    backgroundSize: "cover", 
                    backgroundPosition: "center" 
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center px-4">
                    <Store size={64} className="mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">Smart Retail Solution</h3>
                    <p className="text-white/80">IoT-Powered Retail Intelligence</p>
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
                A national retail chain struggled with inventory management and lacked insights into customer 
                shopping behaviors. They faced several key challenges:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Frequent inventory discrepancies and stockouts</li>
                <li>Inability to track customer journeys through stores</li>
                <li>Manual processes for shelf monitoring and restocking</li>
                <li>Limited data on product performance and placement effectiveness</li>
                <li>Rising competition from online retailers</li>
              </ul>
            </TabsContent>
            <TabsContent value="solution" className="p-6 border rounded-lg bg-gray-50">
              <h3 className="text-xl font-bold mb-4">Our Solution</h3>
              <p className="text-gray-700 mb-4">
                We developed a comprehensive IoT-based retail management system with these key components:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>RFID-enabled inventory tracking with real-time updates</li>
                <li>Smart shelves with weight sensors for automatic stock monitoring</li>
                <li>Computer vision systems for customer flow analysis</li>
                <li>Heat mapping of customer movement patterns</li>
                <li>Digital signage integrated with customer proximity detection</li>
                <li>Mobile app for store associates with inventory alerts</li>
                <li>Centralized analytics dashboard for management insights</li>
              </ul>
            </TabsContent>
            <TabsContent value="results" className="p-6 border rounded-lg bg-gray-50">
              <h3 className="text-xl font-bold mb-4">Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-lg mb-2 text-techori-purple">96%</h4>
                  <p className="text-gray-700">Inventory accuracy rate</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-lg mb-2 text-techori-purple">35%</h4>
                  <p className="text-gray-700">Reduction in stockout situations</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-lg mb-2 text-techori-purple">22%</h4>
                  <p className="text-gray-700">Increase in average transaction value</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-lg mb-2 text-techori-purple">$1.8M</h4>
                  <p className="text-gray-700">Annual labor cost savings</p>
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
              <Store className="h-12 w-12 text-techori-purple mb-4" />
              <h3 className="text-xl font-bold mb-2">IoT Hardware</h3>
              <ul className="text-gray-700 space-y-1">
                <li>RFID Sensors</li>
                <li>Bluetooth Beacons</li>
                <li>Weight-sensing Shelves</li>
                <li>IP Cameras with Vision AI</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Database className="h-12 w-12 text-techori-purple mb-4" />
              <h3 className="text-xl font-bold mb-2">Data Platform</h3>
              <ul className="text-gray-700 space-y-1">
                <li>Azure IoT Hub</li>
                <li>AWS TimeStream</li>
                <li>Snowflake Data Lake</li>
                <li>Real-time Processing (Kafka)</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <SearchCheck className="h-12 w-12 text-techori-purple mb-4" />
              <h3 className="text-xl font-bold mb-2">Analytics</h3>
              <ul className="text-gray-700 space-y-1">
                <li>Computer Vision</li>
                <li>Predictive Inventory AI</li>
                <li>Customer Journey Analysis</li>
                <li>Heat mapping Engine</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Package className="h-12 w-12 text-techori-purple mb-4" />
              <h3 className="text-xl font-bold mb-2">Applications</h3>
              <ul className="text-gray-700 space-y-1">
                <li>Mobile Associate App</li>
                <li>Management Dashboard</li>
                <li>REST API Services</li>
                <li>ERP Integration Layer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-techori-purple to-techori-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Retail Experience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how our IoT-powered smart retail solution can help you enhance inventory management,
            gain customer insights, and boost sales.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-techori-purple hover:bg-gray-100">
              <Link to="/contact">Schedule a Demo</Link>
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

export default SmartRetailSolution;
