
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const Testimonial = ({ quote, author, position, company }: TestimonialProps) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow h-full bg-white">
      <CardContent className="pt-6">
        <svg
          className="h-8 w-8 text-techori-purple mb-4"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="text-gray-700 mb-6">{quote}</p>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-600 font-bold">{author.charAt(0)}</span>
          </div>
          <div className="ml-3">
            <p className="font-medium text-gray-900">{author}</p>
            <p className="text-sm text-gray-500">{position}, {company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "TECHORI transformed our digital presence completely. Their web development team created an intuitive, responsive site that has significantly increased our customer engagement and online sales.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "RetailMax"
    },
    {
      quote: "The public Wi-Fi solution provided by TECHORI has been a game-changer for our business. Our customers love the reliable connectivity, and we've seen increased foot traffic as a result.",
      author: "Michael Chen",
      position: "Operations Manager",
      company: "CafeConnect"
    },
    {
      quote: "Working with TECHORI's robotics team has revolutionized our warehouse operations. The automation system they implemented has increased efficiency by 40% and significantly reduced errors.",
      author: "David Rodriguez",
      position: "Logistics Director",
      company: "GlobalShip Logistics"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what some of our clients have to say about
            working with TECHORI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
