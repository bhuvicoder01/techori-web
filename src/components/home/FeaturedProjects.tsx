
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  link: string;
}

const ProjectCard = ({ title, category, description, imageSrc, link }: ProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div
        className="aspect-video bg-gray-100 w-full"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="inline-block px-3 py-1 bg-techori-purple/80 text-white text-xs font-medium rounded-full mb-2">
          {category}
        </span>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
        <Link
          to={link}
          className="inline-flex items-center text-white bg-techori-blue hover:bg-techori-purple px-4 py-2 rounded-md text-sm font-medium transition-colors"
        >
          View Project
        </Link>
      </div>
    </div>
  );
};

const FeaturedProjects = () => {
  // Dummy project data - in a real application, this would come from an API or CMS
  const projects = [
    {
      title: "Enterprise Web Portal",
      category: "Web Development",
      description: "A comprehensive web portal for enterprise resource management and team collaboration.",
      imageSrc: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225' viewBox='0 0 400 225' fill='none'%3E%3Crect width='400' height='225' fill='%239b87f5' opacity='0.2'/%3E%3Cpath d='M200 112.5 L150 75 L200 37.5 L250 75 L200 112.5' stroke='%239b87f5' stroke-width='5' fill='%239b87f5' opacity='0.7'/%3E%3Cpath d='M150 150 L100 112.5 L150 75 L200 112.5 L150 150' stroke='%239b87f5' stroke-width='5' fill='%239b87f5' opacity='0.5'/%3E%3Cpath d='M250 150 L200 112.5 L250 75 L300 112.5 L250 150' stroke='%239b87f5' stroke-width='5' fill='%239b87f5' opacity='0.5'/%3E%3Cpath d='M200 187.5 L150 150 L200 112.5 L250 150 L200 187.5' stroke='%239b87f5' stroke-width='5' fill='%239b87f5' opacity='0.3'/%3E%3C/svg%3E",
      link: "/portfolio/enterprise-web-portal",
    },
    {
      title: "Smart City Wi-Fi Network",
      category: "Public Wi-Fi",
      description: "A city-wide Wi-Fi network deployment providing connectivity to residents and visitors.",
      imageSrc: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225' viewBox='0 0 400 225' fill='none'%3E%3Crect width='400' height='225' fill='%231EAEDB' opacity='0.2'/%3E%3Ccircle cx='200' cy='112.5' r='50' stroke='%231EAEDB' stroke-width='5' fill='none'/%3E%3Cpath d='M150 112.5 C150 85 172.5 62.5 200 62.5 C227.5 62.5 250 85 250 112.5' stroke='%231EAEDB' stroke-width='5' fill='none'/%3E%3Cpath d='M125 112.5 C125 71.5 158 38.5 200 38.5 C242 38.5 275 71.5 275 112.5' stroke='%231EAEDB' stroke-width='5' fill='none' opacity='0.7'/%3E%3Cpath d='M100 112.5 C100 58 144 14 200 14 C256 14 300 58 300 112.5' stroke='%231EAEDB' stroke-width='5' fill='none' opacity='0.4'/%3E%3C/svg%3E",
      link: "/portfolio/smart-city-wifi",
    },
    {
      title: "Warehouse Automation System",
      category: "Robotics",
      description: "An advanced robotics system for warehouse inventory management and logistics.",
      imageSrc: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225' viewBox='0 0 400 225' fill='none'%3E%3Crect width='400' height='225' fill='%23F97316' opacity='0.2'/%3E%3Crect x='125' y='75' width='150' height='100' rx='10' stroke='%23F97316' stroke-width='5' fill='%23F97316' opacity='0.5'/%3E%3Ccircle cx='150' cy='150' r='15' stroke='%23F97316' stroke-width='5' fill='%23FFFFFF'/%3E%3Ccircle cx='250' cy='150' r='15' stroke='%23F97316' stroke-width='5' fill='%23FFFFFF'/%3E%3Crect x='175' y='50' width='50' height='25' rx='5' stroke='%23F97316' stroke-width='5' fill='%23F97316' opacity='0.7'/%3E%3C/svg%3E",
      link: "/portfolio/warehouse-automation",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-xl">
              Explore our recent work and see how we've helped businesses transform their digital presence.
            </p>
          </div>
          <Button asChild variant="outline" className="border-techori-purple text-techori-purple hover:bg-techori-purple hover:text-white mt-4 md:mt-0">
            <Link to="/portfolio">View All Projects</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              description={project.description}
              imageSrc={project.imageSrc}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
