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
const HealthcareDataPlatform = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-techori-blue/10 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Healthcare Data Platform</h1>
              <p className="text-lg text-gray-600 mb-8">
                A comprehensive healthcare analytics platform that transforms patient data into 
                actionable insights, improving clinical outcomes and operational efficiency.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="bg-techori-purple/10 text-techori-purple px-4 py-2 rounded-full text-sm font-medium">
                  Healthcare Analytics
                </span>
                <span className="bg-techori-blue/10 text-techori-blue px-4 py-2 rounded-full text-sm font-medium">
                  HIPAA Compliant
                </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  AI-Powered Insights
                </span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                  Patient Outcomes
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
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225' viewBox='0 0 400 225' fill='none'%3E%3Crect width='400' height='225' fill='%2322c55e' opacity='0.2'/%3E%3Ccircle cx='200' cy='112.5' r='65' stroke='%2322c55e' stroke-width='5' fill='none'/%3E%3Cpath d='M170 112.5 L190 132.5 L230 92.5' stroke='%2322c55e' stroke-width='8' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                    backgroundSize: "cover", 
                    backgroundPosition: "center" 
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center px-4">
                    <FileChartLine size={64} className="mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">Healthcare Data Platform</h3>
                    <p className="text-white/80">Transforming Patient Care with Analytics</p>
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
                A leading healthcare provider needed to consolidate patient data from multiple systems 
                and transform it into actionable insights for clinical staff. They faced challenges with:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Siloed data across disparate systems and departments</li>
                <li>Compliance requirements for sensitive patient information</li>
                <li>Clinical staff lacking easy access to relevant patient insights</li>
                <li>Limited ability to identify trends and optimize care protocols</li>
                <li>Need for real-time monitoring of key performance indicators</li>
              </ul>
            </TabsContent>
            <TabsContent value="solution" className="p-6 border rounded-lg bg-gray-50">
              <h3 className="text-xl font-bold mb-4">Our Solution</h3>
              <p className="text-gray-700 mb-4">
                We developed a comprehensive healthcare data platform that addresses these challenges through:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Centralized data lake architecture with robust ETL pipelines</li>
                <li>HIPAA-compliant security framework with role-based access controls</li>
                <li>AI-powered analytics engine for predictive patient outcomes</li>
                <li>Intuitive dashboards customized for different clinical roles</li>
                <li>Real-time alerts for critical patient conditions</li>
                <li>Integration with existing electronic health record systems</li>
              </ul>
            </TabsContent>
            <TabsContent value="results" className="p-6 border rounded-lg bg-gray-50">
              <h3 className="text-xl font-bold mb-4">Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-lg mb-2 text-techori-purple">32%</h4>
                  <p className="text-gray-700">Reduction in average length of stay</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-lg mb-2 text-techori-purple">18%</h4>
                  <p className="text-gray-700">Decrease in readmission rates</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-lg mb-2 text-techori-purple">45%</h4>
                  <p className="text-gray-700">Faster clinical decision-making</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-lg mb-2 text-techori-purple">$4.2M</h4>
                  <p className="text-gray-700">Annual operational cost savings</p>
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
              <Database className="h-12 w-12 text-techori-purple mb-4" />
              <h3 className="text-xl font-bold mb-2">Data Management</h3>
              <ul className="text-gray-700 space-y-1">
                <li>AWS Redshift</li>
                <li>Apache Kafka</li>
                <li>MongoDB Atlas</li>
                <li>Azure Data Lake</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <FileChartLine className="h-12 w-12 text-techori-purple mb-4" />
              <h3 className="text-xl font-bold mb-2">Analytics</h3>
              <ul className="text-gray-700 space-y-1">
                <li>TensorFlow</li>
                <li>Python Data Science Stack</li>
                <li>R Statistical Computing</li>
                <li>Power BI Embedded</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Package className="h-12 w-12 text-techori-purple mb-4" />
              <h3 className="text-xl font-bold mb-2">Backend</h3>
              <ul className="text-gray-700 space-y-1">
                <li>Node.js</li>
                <li>GraphQL API</li>
                <li>Docker & Kubernetes</li>
                <li>Microservices Architecture</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <CheckCircle className="h-12 w-12 text-techori-purple mb-4" />
              <h3 className="text-xl font-bold mb-2">Security</h3>
              <ul className="text-gray-700 space-y-1">
                <li>HIPAA Compliance Framework</li>
                <li>Multi-factor Authentication</li>
                <li>End-to-end Encryption</li>
                <li>Audit Logging & Monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-techori-purple to-techori-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Healthcare Data?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our healthcare data platform can help improve patient outcomes
            and operational efficiency at your organization.
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

export default HealthcareDataPlatform;
