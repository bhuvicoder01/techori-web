import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wrench, Code, Wifi, Bot, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <Helmet>
        <title>Privacy Policy | TECHORI</title>
        <meta name="description" content="TECHORI's Privacy Policy details how we collect, use, and protect your information." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">Last Updated: May 5, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              At TECHORI ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal data. 
              This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              or use our services.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p>We may collect several types of information, including:</p>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">
                <strong>Personal Identification Information:</strong> Name, email address, phone number, and other similar contact details you provide when using our services.
              </li>
              <li className="mb-2">
                <strong>Business Information:</strong> Company name, job title, and business contact information.
              </li>
              <li className="mb-2">
                <strong>Technical Data:</strong> IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access our website.
              </li>
              <li className="mb-2">
                <strong>Usage Data:</strong> Information about how you use our website and services.
              </li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">To provide and maintain our services</li>
              <li className="mb-2">To notify you about changes to our services</li>
              <li className="mb-2">To allow you to participate in interactive features of our services</li>
              <li className="mb-2">To provide customer support</li>
              <li className="mb-2">To gather analysis or valuable information so that we can improve our services</li>
              <li className="mb-2">To monitor the usage of our services</li>
              <li className="mb-2">To detect, prevent, and address technical issues</li>
              <li className="mb-2">To fulfill any other purpose for which you provide it</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Retention</h2>
            <p>
              We will retain your personal data only for as long as is necessary for the purposes set out in this privacy policy. 
              We will retain and use your data to the extent necessary to comply with our legal obligations, resolve disputes, 
              and enforce our policies.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal 
              information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Your Data Protection Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">The right to access, update, or delete your information</li>
              <li className="mb-2">The right to rectification - to have your information corrected if it is inaccurate or incomplete</li>
              <li className="mb-2">The right to object to our processing of your personal data</li>
              <li className="mb-2">The right to restriction - to request that we restrict the processing of your personal information</li>
              <li className="mb-2">The right to data portability - to receive a copy of your personal data in a structured, machine-readable format</li>
              <li className="mb-2">The right to withdraw consent at any time where we relied on your consent to process your personal information</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We have no control over and assume no responsibility for the content, 
              privacy policies, or practices of any third-party sites or services.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Changes to This Privacy Policy</h2>
            <p>
              We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page 
              and updating the "Last Updated" date.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy, please contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> privacy@techori.com<br />
              <strong>Address:</strong> 123 Tech Avenue, Innovation Park, CA 94088
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
