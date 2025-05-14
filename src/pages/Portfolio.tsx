
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Filter, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


const Portfolio = () => {
  const [activeFilter, setActiveFilter] = React.useState("all");

  const projects = [
    {
      title: "Global Logistics Dashboard",
      description: "A comprehensive logistics management system with real-time tracking and analytics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      category: "it-solutions",
      tags: ["Enterprise", "Dashboard", "Analytics"]
    },
    {
      title: "EcoSmart Mobile App",
      description: "An IoT-enabled mobile application for smart home energy management.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
      category: "web-app",
      tags: ["Mobile", "IoT", "Energy"]
    },
    {
      title: "City Park Wi-Fi Network",
      description: "Public Wi-Fi infrastructure deployment across multiple city parks with user analytics.",
      image: "https://images.unsplash.com/photo-1517404215738-15263e9f9178",
      category: "wifi",
      tags: ["Public", "Infrastructure", "Analytics"]
    },
    {
      title: "Industrial Automation System",
      description: "Robotics solution for automating manufacturing processes in an automotive plant.",
      image: "https://images.unsplash.com/photo-1581093458791-9b7cc1812039",
      category: "robotics",
      tags: ["Manufacturing", "Automation", "AI"]
    },
    {
      title: "HealthTrack Patient Portal",
      description: "A secure web portal connecting patients with healthcare providers and services.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      category: "web-app",
      tags: ["Healthcare", "Security", "UX"]
    },
    {
      title: "Retail Analytics Platform",
      description: "In-store Wi-Fi solution providing customer behavior analytics for retail chains.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc",
      category: "wifi",
      tags: ["Retail", "Analytics", "Customer Insights"]
    }
  ];

  // SaaS Products Data
  const saasProducts = [
    {
      title: "CloudDesk CRM",
      description: "Complete customer relationship management with AI-powered insights and automation.",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603",
      category: "saas",
      tags: ["CRM", "AI", "Cloud"]
    },
    {
      title: "TaskFlow Project Management",
      description: "Streamline team collaboration and project tracking with intuitive workflow tools.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      category: "saas",
      tags: ["Project Management", "Collaboration", "Enterprise"]
    },
    {
      title: "DataInsight Analytics",
      description: "Business intelligence platform with customizable dashboards and automated reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      category: "saas",
      tags: ["Analytics", "Business Intelligence", "Reporting"]
    },
    {
      title: "SecureVault Cloud Storage",
      description: "Enterprise-grade secure storage solution with advanced encryption and access controls.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      category: "saas",
      tags: ["Storage", "Security", "Cloud"]
    }
  ];

  // Combine projects and SaaS products for filtering
  const allProjects = [...projects, ...saasProducts];
  
  const filteredProjects = activeFilter === "all" 
    ? allProjects 
    : allProjects.filter(project => project.category === activeFilter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-techori-purple/10 to-techori-blue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-700 mb-8">
              Showcasing our most innovative and impactful projects
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button 
              variant={activeFilter === "all" ? "default" : "outline"} 
              className={activeFilter === "all" ? "bg-techori-purple hover:bg-techori-purple/90" : ""}
              onClick={() => setActiveFilter("all")}
            >
              All Projects
            </Button>
            <Button 
              variant={activeFilter === "saas" ? "default" : "outline"} 
              className={activeFilter === "saas" ? "bg-techori-purple hover:bg-techori-purple/90" : ""}
              onClick={() => setActiveFilter("saas")}
            >
              SaaS Products
            </Button>
            <Button 
              variant={activeFilter === "it-solutions" ? "default" : "outline"} 
              className={activeFilter === "it-solutions" ? "bg-techori-purple hover:bg-techori-purple/90" : ""}
              onClick={() => setActiveFilter("it-solutions")}
            >
              IT Solutions
            </Button>
            <Button 
              variant={activeFilter === "web-app" ? "default" : "outline"} 
              className={activeFilter === "web-app" ? "bg-techori-purple hover:bg-techori-purple/90" : ""}
              onClick={() => setActiveFilter("web-app")}
            >
              Web & App
            </Button>
            <Button 
              variant={activeFilter === "wifi" ? "default" : "outline"} 
              className={activeFilter === "wifi" ? "bg-techori-purple hover:bg-techori-purple/90" : ""}
              onClick={() => setActiveFilter("wifi")}
            >
              Wi-Fi Solutions
            </Button>
            <Button 
              variant={activeFilter === "robotics" ? "default" : "outline"} 
              className={activeFilter === "robotics" ? "bg-techori-purple hover:bg-techori-purple/90" : ""}
              onClick={() => setActiveFilter("robotics")}
            >
              Robotics
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="pt-6">
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="bg-gray-100">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="text-techori-purple hover:text-techori-blue hover:bg-transparent p-0">
                    <a href="#" className="flex items-center">
                      View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>

      {/* Team Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Expert Teams</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              With over 25+ ready-to-use software solutions and specialized teams, we deliver excellence across various technology domains.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Product Development", 
                description: "Expert developers and designers who build cutting-edge SaaS products from concept to market.",
                stats: "10+ products launched"
              },
              { 
                title: "Cloud Solutions", 
                description: "Certified cloud architects designing scalable infrastructure for enterprise applications.",
                stats: "100+ cloud migrations"
              },
              { 
                title: "AI & Machine Learning", 
                description: "Data scientists and ML engineers implementing intelligent solutions across industries.",
                stats: "25+ AI models deployed"
              },
              { 
                title: "Security & Compliance", 
                description: "Specialists ensuring data protection and regulatory compliance for critical systems.",
                stats: "Zero breaches record"
              },
              { 
                title: "DevOps & Automation", 
                description: "Engineers streamlining development workflows and deployment pipelines.",
                stats: "50+ CI/CD pipelines built"
              },
              { 
                title: "Customer Success", 
                description: "Dedicated support professionals ensuring client satisfaction and system reliability.",
                stats: "98% client retention"
              }
            ].map((team, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="pt-6">
                  <CardTitle className="text-xl mb-3">{team.title}</CardTitle>
                  <p className="text-gray-700 mb-4">{team.description}</p>
                  <div className="text-sm font-semibold text-techori-purple">{team.stats}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: "30+", label: "SaaS Solutions" },
              { number: "80+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "150+", label: "Expert Team Members" }
            ].map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-techori-purple/10 to-techori-blue/10 p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-techori-purple mb-2">{stat.number}</div>
                <p className="text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted By</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Some of the companies that have partnered with TECHORI
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="h-20 w-full flex items-center justify-center">
                <div className="bg-gray-300 h-10 w-36 rounded-md"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-techori-purple to-techori-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Project with TECHORI</h2>
            <p className="text-xl opacity-90 mb-8">
              Let us help you build the next innovative solution for your business
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-techori-purple hover:bg-gray-100 px-8">
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
