
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    // For now, we'll just log a message
    console.log("Form submitted!");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-techori-purple/10 to-techori-blue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-700 mb-8">
              Get in touch with our team for inquiries, support, or to discuss your project
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Phone className="h-10 w-10 text-techori-purple" />,
                title: "Call Us",
                details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
                action: "Give us a call"
              },
              {
                icon: <Mail className="h-10 w-10 text-techori-purple" />,
                title: "Email Us",
                details: ["info@techori.com", "support@techori.com"],
                action: "Send an email"
              },
              {
                icon: <MapPin className="h-10 w-10 text-techori-purple" />,
                title: "Visit Us",
                details: ["123 Tech Boulevard", "San Francisco, CA 94105"],
                action: "Get directions"
              },
              {
                icon: <MessageSquare className="h-10 w-10 text-techori-purple" />,
                title: "Live Chat",
                details: ["Available 9 AM - 5 PM", "Monday to Friday"],
                action: "Start a chat"
              }
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700">{detail}</p>
                  ))}
                  <Button variant="link" className="text-techori-purple mt-4 p-0">
                    {item.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                <p className="text-gray-700 mb-6">
                  Fill out the form and our team will get back to you within 24 hours. We're here to answer any questions you may have about our services.
                </p>
                <div className="bg-techori-purple/10 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">What happens next?</h3>
                  <ol className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-techori-purple text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">1</span>
                      <span>We'll reach out to schedule a call to understand your needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-techori-purple text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">2</span>
                      <span>Our team will create a tailored proposal for your project</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-techori-purple text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">3</span>
                      <span>We'll collaborate to refine the approach and get started</span>
                    </li>
                  </ol>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+1 (555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please provide details about your project or inquiry..." 
                      className="min-h-32"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-techori-purple hover:bg-techori-blue">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Location</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Visit our headquarters in the heart of San Francisco's tech district
            </p>
          </div>
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            {/* In a real implementation, you would embed a Google Maps iframe or a map component here */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-500">Map would be displayed here</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-700">
                Common questions about our services and process
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "What services does TECHORI offer?",
                  answer: "TECHORI provides a range of IT services including web and mobile app development, IT infrastructure solutions, public Wi-Fi deployments, and robotics development. We tailor our services to meet the specific needs of each client."
                },
                {
                  question: "How long does a typical project take?",
                  answer: "Project timelines vary depending on complexity and scope. A simple website may take 2-4 weeks, while a comprehensive enterprise solution could take several months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements."
                },
                {
                  question: "Do you offer support after project completion?",
                  answer: "Yes, we offer various post-launch support and maintenance packages to ensure your solution remains up-to-date and functions optimally. Our team is always available to address any issues or implement new features as needed."
                },
                {
                  question: "What is your pricing structure?",
                  answer: "We offer flexible pricing models including fixed-price contracts, time and materials, and retainer arrangements. The most appropriate model depends on your project type and requirements. Contact us for a personalized quote."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-techori-purple to-techori-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl opacity-90 mb-8">
              Contact us today to discuss how TECHORI can help transform your business with innovative technology solutions.
            </p>
            <Button asChild size="lg" className="bg-white text-techori-purple hover:bg-gray-100 px-8">
              <a href="#" onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }}>Get in Touch</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
