
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building, Users, GraduationCap, Handshake, CheckCircle, Activity, Heart } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-techori-orange/10 to-techori-red/10 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 techori-gradient-text">About TECHORI</h1>
            <p className="text-xl text-gray-700 mb-8">
              Pioneering digital transformation with innovative IT solutions since 2018
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0% 100%)" }}></div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978" 
                alt="TECHORI team collaboration" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-techori-orange text-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="font-bold">Since 2018</p>
                <p>500+ Projects Delivered</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 techori-gradient-text">Our Mission & Vision</h2>
              <p className="text-gray-700 mb-4">
                At TECHORI, our mission is to empower businesses through technology, delivering innovative IT solutions that solve real-world problems and drive sustainable growth.
              </p>
              <p className="text-gray-700 mb-6">
                We envision a future where every business, regardless of size, can harness the full potential of technology to achieve operational excellence and competitive advantage in the digital landscape.
              </p>
              <div className="space-y-4">
                {[
                  "Deliver exceptional value through innovative IT solutions",
                  "Foster long-term partnerships built on trust and results",
                  "Stay at the forefront of technological advancements"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-techori-orange mr-2 flex-shrink-0" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 techori-gradient-text">Our Story</h2>
            <p className="text-gray-700">
              The journey that shaped who we are today
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-techori-orange/20"></div>
            
            {/* Timeline Items */}
            {[
              {
                year: "2018",
                title: "Our Beginning",
                description: "TECHORI was founded with a vision to bridge the gap between complex technology and practical business solutions."
              },
              {
                year: "2019",
                title: "Expanding Services",
                description: "Expanded our service offerings to include mobile app development and public Wi-Fi solutions."
              },
              {
                year: "2021",
                title: "Global Reach",
                description: "Established partnerships with international clients and opened our first overseas office."
              },
              {
                year: "2023",
                title: "Innovation Center",
                description: "Launched our Innovation Lab focused on robotics and emerging technologies."
              },
              {
                year: "Today",
                title: "Leading the Industry",
                description: "Now recognized as an industry leader with over 500 successful projects and clients worldwide."
              }
            ].map((item, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:ml-auto md:mr-[50%]' : 'md:mr-auto md:ml-[50%]'} md:w-[45%]`}>
                <div className="bg-white p-6 rounded-lg shadow-md relative z-10">
                  <div className="absolute top-6 hidden md:block 
                    ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} 
                    w-4 h-4 rounded-full bg-techori-orange"></div>
                  <span className="inline-block px-3 py-1 bg-techori-orange/10 text-techori-orange rounded-full text-sm font-semibold mb-3">{item.year}</span>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 techori-gradient-text">Our Core Values</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              The principles that guide everything we do at TECHORI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly push boundaries to create solutions that set new industry standards.",
                icon: <Activity className="h-10 w-10 text-techori-orange mb-4" />
              },
              {
                title: "Excellence",
                description: "We are committed to delivering the highest quality in every project we undertake.",
                icon: <GraduationCap className="h-10 w-10 text-techori-orange mb-4" />
              },
              {
                title: "Collaboration",
                description: "We believe in the power of teamwork, both internally and with our clients.",
                icon: <Users className="h-10 w-10 text-techori-orange mb-4" />
              },
              {
                title: "Integrity",
                description: "We operate with transparency, honesty, and ethical practices in all our dealings.",
                icon: <Handshake className="h-10 w-10 text-techori-orange mb-4" />
              },
              {
                title: "Client-Focused",
                description: "We prioritize understanding and meeting our clients' unique needs and goals.",
                icon: <Heart className="h-10 w-10 text-techori-orange mb-4" />
              },
              {
                title: "Accountability",
                description: "We take ownership of our work and stand behind every solution we deliver.",
                icon: <Building className="h-10 w-10 text-techori-orange mb-4" />
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="flex flex-col items-center text-center">
                  {value.icon}
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 techori-gradient-text">Meet Our Leadership Team</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              The talented professionals behind TECHORI's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Johnson",
                position: "CEO & Founder",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
                bio: "With 15+ years in the tech industry, Alex leads TECHORI's vision and strategy."
              },
              {
                name: "Samantha Chen",
                position: "CTO",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
                bio: "An expert in emerging technologies, Samantha drives our technical innovation."
              },
              {
                name: "Miguel Rodriguez",
                position: "Head of Development",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
                bio: "Miguel ensures all our development projects meet the highest standards."
              },
              {
                name: "Aisha Patel",
                position: "Lead Designer",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
                bio: "Aisha combines aesthetics and functionality to create exceptional user experiences."
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-techori-orange font-medium mb-2">{member.position}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-techori-dark text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "150+", label: "Happy Clients" },
              { number: "50+", label: "Team Members" },
              { number: "10+", label: "Countries Served" }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <p className="text-4xl md:text-5xl font-bold mb-2 techori-gradient-text">{stat.number}</p>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-techori-orange to-techori-red text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work with Us?</h2>
            <p className="text-xl opacity-90 mb-8">
              Partner with TECHORI to transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-techori-orange hover:bg-gray-100 px-8">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
