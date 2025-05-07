import React, { FC } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wrench, Code, Wifi, Bot, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy: FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-techori-purple/10 to-techori-blue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-700 mb-8">
              Your privacy matters to us. Learn how we protect your data.
            </p>
            <Button
              asChild
              className="bg-techori-purple hover:bg-techori-blue transform hover:-translate-y-1 transition-all shadow-xl"
              aria-label="Contact us about our privacy policy"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6">Last Updated: May 5, 2025</p>
            <h2 className="text-3xl font-bold mb-6">1. Introduction</h2>
            <p className="text-gray-700 mb-6">
              At TECHORI ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal data. 
              This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              or use our services.
            </p>
          </div>
        </div>
      </section>

      {/* Information We Collect Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">2. Information We Collect</h2>
            <p className="text-gray-700 mb-6">We may collect several types of information, including:</p>
            <ul className="space-y-4">
              {[
                {
                  title: "Personal Identification Information",
                  description: "Name, email address, phone number, and other similar contact details you provide when using our services.",
                  icon: <Wrench className="h-6 w-6 text-techori-purple" />,
                },
                {
                  title: "Business Information",
                  description: "Company name, job title, and business contact information.",
                  icon: <Code className="h-6 w-6 text-techori-purple" />,
                },
                {
                  title: "Technical Data",
                  description: "IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access our website.",
                  icon: <Wifi className="h-6 w-6 text-techori-purple" />,
                },
                {
                  title: "Usage Data",
                  description: "Information about how you use our website and services.",
                  icon: <Bot className="h-6 w-6 text-techori-purple" />,
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <strong className="text-gray-900">{item.title}:</strong> {item.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How We Use Your Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-6">We use your information for the following purposes:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "To provide and maintain our services",
                "To notify you about changes to our services",
                "To allow you to participate in interactive features of our services",
                "To provide customer support",
                "To gather analysis or valuable information so that we can improve our services",
                "To monitor the usage of our services",
                "To detect, prevent, and address technical issues",
                "To fulfill any other purpose for which you provide it",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-techori-purple mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Retention Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">4. Data Retention</h2>
            <p className="text-gray-700">
              We will retain your personal data only for as long as is necessary for the purposes set out in this privacy policy. 
              We will retain and use your data to the extent necessary to comply with our legal obligations, resolve disputes, 
              and enforce our policies.
            </p>
          </div>
        </div>
      </section>

      {/* Data Security Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">5. Data Security</h2>
            <p className="text-gray-700">
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal 
              information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
            </p>
          </div>
        </div>
      </section>

      {/* Your Data Protection Rights Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">6. Your Data Protection Rights</h2>
            <p className="text-gray-700 mb-6">Depending on your location, you may have the following rights:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "The right to access, update, or delete your information",
                "The right to rectification - to have your information corrected if it is inaccurate or incomplete",
                "The right to object to our processing of your personal data",
                "The right to restriction - to request that we restrict the processing of your personal information",
                "The right to data portability - to receive a copy of your personal data in a structured, machine-readable format",
                "The right to withdraw consent at any time where we relied on your consent to process your personal information",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-techori-purple mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Third-Party Links Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">7. Third-Party Links</h2>
            <p className="text-gray-700">
              Our website may contain links to third-party websites. We have no control over and assume no responsibility for the content, 
              privacy policies, or practices of any third-party sites or services.
            </p>
          </div>
        </div>
      </section>

      {/* Changes to This Privacy Policy Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">8. Changes to This Privacy Policy</h2>
            <p className="text-gray-700">
              We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page 
              and updating the "Last Updated" date.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-gradient-to-r from-techori-purple to-techori-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Have Questions?</h2>
            <p className="text-xl opacity-90 mb-8">
              If you have any questions about this privacy policy, please reach out to us.
            </p>
            <p className="text-lg mb-6">
              <strong>Email:</strong> privacy@techori.com<br />
              <strong>Address:</strong> 123 Tech Avenue, Innovation Park, CA 94088
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-techori-purple hover:bg-gray-100 hover:text-techori-blue px-8 transform hover:-translate-y-1 transition-all shadow-xl"
              aria-label="Contact us about our privacy policy"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;