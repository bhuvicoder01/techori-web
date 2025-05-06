import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f90e7c4a-3d40-4c50-9506-87dc536dfda8");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-techori-purple/10 to-techori-blue/10">
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
                details: ["+91 75660 72349", "+91 626844240"],
                action: "Give us a call",
              },
              {
                icon: <Mail className="h-10 w-10 text-techori-purple" />,
                title: "Email Us",
                details: [
                  "info@techori.in",
                  "info@rishishwarindustry.in",
                  "support@techori.in",
                ],
                action: "Send an email",
              },
              {
                icon: <MapPin className="h-10 w-10 text-techori-purple" />,
                title: "Visit Us",
                details: [
                  "Rishishwar Industry Private limited, Mahadaji Nagar, Lashkar, Gird, Gwalior, Madhya Pradesh, Bharat - 474001",
                ],
                action: "Get directions",
              },
              {
                icon: <MessageSquare className="h-10 w-10 text-techori-purple" />,
                title: "Live Chat",
                details: ["Available 10 AM - 07 PM", "Monday to Saturday"],
                action: "Start a chat",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="border-none shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700">
                      {detail}
                    </p>
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
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Send Us a Message</h2>
            <Card>
              <CardContent className="p-6">
                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="Your Email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Your Message"
                      rows={5}
                    />
                  </div>
                  <input
                    type="hidden"
                    name="access_key"
                    value="f90e7c4a-3d40-4c50-9506-87dc536dfda8"
                  />
                  <Button type="submit" className="w-full">
                    Submit Form
                  </Button>
                  {result && (
                    <p className="text-center text-gray-700 mt-4">{result}</p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
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
                  answer:
                    "TECHORI provides a range of IT services including web and mobile app development, IT infrastructure solutions, public Wi-Fi deployments, and robotics development. We tailor our services to meet the specific needs of each client.",
                },
                {
                  question: "How long does a typical project take?",
                  answer:
                    "Project timelines vary depending on complexity and scope. A simple website may take 2-4 weeks, while a comprehensive enterprise solution could take several months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements.",
                },
                {
                  question: "Do you offer support after project completion?",
                  answer:
                    "Yes, we offer various post-launch support and maintenance packages to ensure your solution remains up-to-date and functions optimally. Our team is always available to address any issues or implement new features as needed.",
                },
                {
                  question: "What is your pricing structure?",
                  answer:
                    "We offer flexible pricing models including fixed-price contracts, time and materials, and retainer arrangements. The most appropriate model depends on your project type and requirements. Contact us for a personalized quote.",
                },
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Contact us today to discuss how TECHORI can help transform your
              business with innovative technology solutions.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-techori-purple hover:bg-gray-100 px-8"
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;