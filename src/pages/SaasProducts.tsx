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

const SaasProducts: FC = () => {
  const products: Product[] = [
    {
      title: "CRM Software",
      description: "Comprehensive customer relationship management solution to manage leads, customers, and sales pipelines.",
      features: ["Contact Management", "Sales Pipeline", "Email Integration", "Analytics Dashboard"],
      category: "Business",
    },
    {
      title: "ERP Software",
      description: "Integrated enterprise resource planning system for managing business processes across your organization.",
      features: ["Financial Management", "Inventory Control", "HR Management", "Business Intelligence"],
      category: "Business",
    },
    {
      title: "Hotel Management",
      description: "Complete hotel management system for bookings, guest management, and operations.",
      features: ["Reservation System", "Guest Management", "Housekeeping", "Revenue Management"],
      category: "Hospitality",
    },
    {
      title: "E-Commerce Management",
      description: "All-in-one platform for managing your online store, products, orders, and customers.",
      features: ["Product Catalog", "Order Processing", "Payment Integration", "Customer Management"],
      category: "Retail",
    },
    {
      title: "LMS Software",
      description: "Learning management system for educational institutions, training centers, and corporate learning.",
      features: ["Course Management", "Student Tracking", "Assessment Tools", "Content Library"],
      category: "Education",
    },
    {
      title: "Hospital Management",
      description: "Comprehensive solution for managing hospital operations, patients, and medical records.",
      features: ["Patient Records", "Appointment Scheduling", "Billing", "Pharmacy Management"],
      category: "Healthcare",
    },
  ];

  const categories: Category[] = [
    {
      industry: "Hospitality",
      products: ["Hotel Management", "Restaurant Management", "Online Food Order Management"],
    },
    {
      industry: "Healthcare",
      products: ["Hospital Management", "Clinic Management", "Pharmacy Management"],
    },
    {
      industry: "Education",
      products: ["School Management", "LMS", "Coaching Classes Management"],
    },
    {
      industry: "Retail",
      products: ["E-Commerce Management", "Shop & Showroom Management", "Inventory Management"],
    },
    {
      industry: "Business",
      products: ["CRM Software", "ERP Software", "HRMS Software", "Project Management"],
    },
    {
      industry: "Financial",
      products: ["Accounting Software", "Loan Management", "Payment Gateway"],
    },
    {
      industry: "Transportation",
      products: ["Logistics & Transport Management", "Vehicle & Taxi Management"],
    },
    {
      industry: "Others",
      products: ["Gym Management", "NGO Management", "Repair & Workshop Management"],
    },
  ];

  const benefits: Benefit[] = [
    {
      icon: <Cloud className="h-12 w-12 text-techori-purple" />,
      title: "Rapid Deployment",
      description: "Get up and running quickly with our pre-built solutions, avoiding lengthy development cycles.",
    },
    {
      icon: <Package className="h-12 w-12 text-techori-purple" />,
      title: "Cost-Effective",
      description: "Reduce costs with subscription-based pricing instead of large upfront development investments.",
    },
    {
      icon: <Zap className="h-12 w-12 text-techori-purple" />,
      title: "Continuous Improvement",
      description: "Benefit from regular updates and new features as our products evolve with industry needs.",
    },
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://via.placeholder.com/600x400?text=SaaS+Products";
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-techori-purple/10 to-techori-blue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">SaaS Products</h1>
            <p className="text-xl text-gray-700 mb-8">
              25+ ready-to-use software solutions for various industries and business needs
            </p>
            <Button
              asChild
              className="bg-techori-purple hover:bg-techori-blue transform hover:-translate-y-1 transition-all shadow-xl"
              aria-label="Request a demo for SaaS products"
            >
              <Link to="/contact">Request Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Ready-to-Use Software Solutions</h2>
              <p className="text-gray-700 mb-6">
                Our SaaS (Software as a Service) products are designed to solve specific business
                challenges across various industries, providing immediate value without the time
                and cost of custom development.
              </p>
              <p className="text-gray-700 mb-6">
                Each solution can be deployed quickly and customized to match your brand and
                specific requirements, allowing you to focus on your core business while we
                handle the technology.
              </p>
              <div className="space-y-4">
                {[
                  "Quick deployment and implementation",
                  "Subscription-based pricing with no large upfront investment",
                  "Regular updates and new features",
                  "Technical support and maintenance included",
                  "White-labeling options available",
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
                alt="SaaS Products"
                className="w-full h-auto object-cover"
                onError={handleImageError}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured SaaS Products</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our most popular software solutions across different industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <Badge className="bg-techori-purple/10 text-techori-purple border-none mb-4">
                  {product.category}
                </Badge>
                <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 group-hover:translate-x-1 transition-all duration-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-techori-purple" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button
                  asChild
                  variant="ghost"
                  className="text-techori-purple hover:text-techori-blue hover:bg-transparent p-0 group-hover:font-semibold transition-all duration-300"
                  aria-label={`Learn more about ${product.title}`}
                >
                  <Link
                    to={`/products/${product.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center"
                  >
                    Learn More
                    <Zap className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Solutions by Industry</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Explore our industry-specific software solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold mb-4 text-techori-purple">{category.industry}</h3>
                <ul className="space-y-2">
                  {category.products.map((product, idx) => (
                    <li key={idx}>
                      <Link
                        to={`/products/${product.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-gray-700 hover:text-techori-purple transition-colors flex items-center gap-2"
                        aria-label={`View ${product} details`}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-techori-purple" />
                        {product}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of Our SaaS Products</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Why businesses choose our ready-to-use software solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="mx-auto w-20 h-20 rounded-full bg-techori-purple/10 flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-techori-purple to-techori-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl opacity-90 mb-8">
              Contact us today to explore our SaaS products and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-techori-purple hover:bg-gray-100 hover:text-techori-blue px-8 transform hover:-translate-y-1 transition-all shadow-xl"
                aria-label="Request a demo for SaaS products"
              >
                <Link to="/contact">Request a Demo</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 transform hover:-translate-y-1 transition-all"
                aria-label="View all SaaS products"
              >
                <Link to="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SaasProducts;
