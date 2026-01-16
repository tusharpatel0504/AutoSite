"use client";

import { useEffect } from "react";
import { Building2 } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const industries = [
    {
      icon: "👗",
      title: "Fashion & Apparel",
      description: "Smart chatbots that help customers find the perfect outfit and style advice",
    },
    {
      icon: "💄",
      title: "Beauty & Cosmetics",
      description: "AI assistants that recommend products based on skin type and preferences",
    },
    {
      icon: "🛒",
      title: "E-commerce",
      description: "Automated shopping assistants that guide customers through their purchase journey",
    },
    {
      icon: "💻",
      title: "IT & Technology",
      description: "Intelligent support systems that solve technical problems quickly",
    },
  ];

  const benefits = [
    {
      icon: "📈",
      title: "35% More Sales",
      description: "Our AI chatbots help turn more visitors into customers",
    },
    {
      icon: "💰",
      title: "60% Cost Savings",
      description: "Reduce your customer support team expenses significantly",
    },
    {
      icon: "⏰",
      title: "Save Time",
      description: "Automate repetitive tasks and focus on growing your business",
    },
    {
      icon: "⚡",
      title: "24/7 Support",
      description: "Your AI assistant works round the clock, never takes a break",
    },
  ];

  const values = [
    {
      icon: "✨",
      title: "Simple Solutions",
      description: "We make AI easy to use for everyone",
    },
    {
      icon: "🤝",
      title: "Customer First",
      description: "Your success is our success",
    },
    {
      icon: "🎯",
      title: "Real Results",
      description: "We focus on outcomes that matter to your business",
    },
  ];

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden bg-black">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-40 h-40 sm:w-64 sm:h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 sm:w-64 sm:h-64 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 mt-16">
          <div className="inline-flex items-center px-4 py-2 border border-gray-700 rounded-full text-white text-sm font-medium mb-6">
            <Building2 className="w-4 h-4 mr-2" />
            About Autosite
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            We Help Businesses{" "}
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Grow Faster
            </span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Autosite creates smart AI chatbots that work like your best customer support team member. 
            We help businesses save money, save time, and sell more.
          </p>
        </div>

        {/* What We Do Section */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            What We Do
          </h2>
          <p className="text-gray-300 text-center mb-12 text-lg max-w-3xl mx-auto">
            We build AI chatbots that talk to your customers, answer their questions, and help them buy from you. 
            Think of it as having a super-smart assistant that never sleeps.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="border-gray-700 bg-black hover:bg-gray-900 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{industry.title}</h3>
                  <p className="text-gray-400 text-sm">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            Why Choose Autosite?
          </h2>
          <p className="text-gray-300 text-center mb-12 text-lg max-w-3xl mx-auto">
            We don't just build chatbots. We build solutions that help your business make more money and spend less.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-gray-700 bg-gray-950/90 backdrop-blur-sm hover:bg-gray-900 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-black border-2 border-gray-700 rounded-2xl flex items-center justify-center text-3xl">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                      <p className="text-gray-400 text-base">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="text-center">
          <Card className="border-gray-700 bg-gradient-to-br from-gray-950 to-gray-900 backdrop-blur-sm">
            <CardContent className="p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Grow Your Business?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses already using our AI solutions to save time, save money, and grow faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/demo"
                  className="group relative inline-flex items-center justify-center px-6 py-2 text-sm font-semibold text-white border-2 border-white rounded-full bg-black overflow-hidden transition-all duration-200 hover:bg-white hover:border-gray-200 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-white transition-all duration-300 transform group-hover:scale-0 group-hover:opacity-0"></div>
                    <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 text-white group-hover:text-black">
                      Get Free Demo
                    </span>
                  </div>
                  <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-black opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
                    <span className="text-black">Get Free Demo</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
                <a
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-6 py-2 text-sm font-semibold text-white border-2 border-white rounded-full bg-black overflow-hidden transition-all duration-200 hover:bg-white hover:border-gray-200 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-white transition-all duration-300 transform group-hover:scale-0 group-hover:opacity-0"></div>
                    <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 text-white group-hover:text-black">
                      Talk to Us
                    </span>
                  </div>
                  <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-black opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
                    <span className="text-black">Talk to Us</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
