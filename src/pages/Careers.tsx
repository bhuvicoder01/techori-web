
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { GraduationCap, Users, Building, Briefcase, ArrowRight } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "We are looking for an experienced Full Stack Developer to join our team and help build innovative solutions for our clients.",
      responsibilities: [
        "Design and develop scalable web applications using modern frameworks",
        "Collaborate with cross-functional teams to define and implement new features",
        "Ensure the technical feasibility of UI/UX designs",
        "Optimize applications for maximum speed and scalability"
      ],
      requirements: [
        "5+ years of experience in full stack development",
        "Proficiency in JavaScript/TypeScript, React, Node.js, and modern frameworks",
        "Experience with database design and optimization",
        "Strong problem-solving skills and attention to detail"
      ]
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Hybrid",
      type: "Full-time",
      description: "Join our design team to create intuitive and engaging user experiences for web and mobile applications.",
      responsibilities: [
        "Create wireframes, prototypes, and high-fidelity designs",
        "Conduct user research and usability testing",
        "Collaborate with developers to ensure design implementation",
        "Maintain design systems and documentation"
      ],
      requirements: [
        "3+ years of experience in UX/UI design",
        "Proficiency in design tools like Figma, Adobe XD, or Sketch",
        "Portfolio demonstrating strong visual design skills",
        "Understanding of accessibility standards and responsive design"
      ]
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Help us build and maintain our cloud infrastructure and deployment pipelines.",
      responsibilities: [
        "Design and implement CI/CD pipelines",
        "Manage cloud infrastructure using IaC principles",
        "Monitor system performance and troubleshoot issues",
        "Implement security best practices across all systems"
      ],
      requirements: [
        "3+ years of experience in DevOps or SRE roles",
        "Experience with AWS, Azure, or GCP",
        "Knowledge of containerization and orchestration tools",
        "Scripting and automation skills"
      ]
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "On-site",
      type: "Full-time",
      description: "Oversee the successful execution of client projects from inception to delivery.",
      responsibilities: [
        "Lead project planning and execution",
        "Manage client relationships and expectations",
        "Coordinate cross-functional teams",
        "Track project progress and ensure timely delivery"
      ],
      requirements: [
        "5+ years of experience in project management",
        "PMP certification or equivalent",
        "Strong communication and leadership skills",
        "Experience with Agile methodologies"
      ]
    }
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "We offer competitive salaries, performance bonuses, and equity options for all full-time positions.",
      icon: <Building className="h-10 w-10 text-techori-purple mb-4" />
    },
    {
      title: "Professional Growth",
      description: "Continuous learning opportunities, conference attendance, and dedicated time for professional development.",
      icon: <GraduationCap className="h-10 w-10 text-techori-purple mb-4" />
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs to support your well-being.",
      icon: <Users className="h-10 w-10 text-techori-purple mb-4" />
    },
    {
      title: "Work-Life Balance",
      description: "Flexible working hours, remote options, generous PTO, and paid parental leave.",
      icon: <Briefcase className="h-10 w-10 text-techori-purple mb-4" />
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-techori-purple/10 to-techori-blue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-700 mb-8">
              Build your career at TECHORI and work on innovative projects that make a difference
            </p>
            <Button asChild className="bg-techori-purple hover:bg-techori-blue">
              <a href="#open-positions">View Open Positions</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Join TECHORI?</h2>
              <p className="text-gray-700 mb-4">
                At TECHORI, we believe that our success is directly tied to the quality and happiness of our team. We've created a workplace where innovation thrives, collaboration is encouraged, and personal growth is prioritized.
              </p>
              <p className="text-gray-700 mb-4">
                Working with us means being part of a diverse team of talented professionals who are passionate about technology and committed to delivering exceptional solutions for our clients.
              </p>
              <p className="text-gray-700">
                We value initiative, creativity, and a growth mindset. If you're looking for a challenging and rewarding environment where you can make an impact, TECHORI might be the perfect place for you.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                alt="TECHORI team collaboration" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Employee Benefits</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We take care of our team with comprehensive benefits and perks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col items-center text-center">
                  {benefit.icon}
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Explore our current job openings and find your next opportunity
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div>
                      <CardTitle className="text-2xl">{position.title}</CardTitle>
                      <p className="text-techori-purple">{position.department}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
                        {position.location}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
                        {position.type}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{position.description}</p>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="responsibilities">
                      <AccordionTrigger className="text-left font-semibold">Responsibilities</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-5 space-y-1">
                          {position.responsibilities.map((item, idx) => (
                            <li key={idx} className="text-gray-700">{item}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="requirements">
                      <AccordionTrigger className="text-left font-semibold">Requirements</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-5 space-y-1">
                          {position.requirements.map((item, idx) => (
                            <li key={idx} className="text-gray-700">{item}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
                <CardFooter>
                  <Button className="bg-techori-purple hover:bg-techori-blue">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
            <p className="text-lg text-gray-700 mb-8">
              Don't see a position that matches your skills? We're always looking for talented individuals to join our team. Send us your resume, and we'll keep it on file for future opportunities.
            </p>
            <Button asChild className="bg-techori-purple hover:bg-techori-blue">
              <a href="mailto:careers@techori.com">Send Your Resume</a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-techori-purple to-techori-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Building the Future</h2>
            <p className="text-xl opacity-90 mb-8">
              Be part of a team that's revolutionizing how businesses leverage technology.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-techori-purple hover:bg-gray-100 px-8">
                <a href="#open-positions">View Positions</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
