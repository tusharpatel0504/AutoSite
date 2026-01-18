"use client";

import { useEffect } from "react";
import { Building2, Mail, Share2, Bot, Phone, ShoppingBag, Laptop, Shirt } from "lucide-react";
import { FaWhatsapp, FaChartLine, FaPiggyBank } from "react-icons/fa";
import { BsBriefcase, BsStopwatchFill } from "react-icons/bs";
import { GiLipstick } from "react-icons/gi";
import { Ri24HoursFill } from "react-icons/ri";
import { Card, CardContent } from "./ui/card";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const industries = [
    {
      icon: Shirt,
      title: "Fashion & Apparel",
      description: "Smart chatbots that help customers find the perfect outfit",
    },
    {
      icon: GiLipstick,
      title: "Beauty & Cosmetics",
      description: "AI assistants that recommend products based on preferences",
    },
    {
      icon: ShoppingBag,
      title: "E-commerce",
      description: "Automated assistants that guide customers through purchases",
    },
    {
      icon: Laptop,
      title: "IT & Technology",
      description: "Intelligent support systems that solve problems quickly",
    },
  ];

  const benefits = [
    {
      icon: FaChartLine,
      title: "35% More Sales",
      description: "Instant responses mean more customers buy. Simple as that.",
    },
    {
      icon: FaPiggyBank,
      title: "60% Cost Savings",
      description: "Cut support costs by over half. Real money back in your pocket.",
    },
    {
      icon: BsStopwatchFill,
      title: "Save Time",
      description: "Get back hours every day. Focus on what actually grows your business.",
    },
    {
      icon: Ri24HoursFill,
      title: "24/7 Availability",
      description: "Your business never sleeps. Help customers anytime, zero overtime.",
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
            Running a business means drowning in emails, social media, and customer messages. We automate the repetitive work 
            so you can focus on growth - no extra hiring, no late nights managing your inbox.
          </p>
        </div>

        {/* What We Automate Section */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            What We Automate For You
          </h2>
          <p className="text-gray-300 text-center mb-8 text-lg max-w-3xl mx-auto">
            We automate time-consuming tasks so your business runs smoothly while you sleep.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="border-gray-700 bg-black hover:bg-gray-900 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl border border-gray-600 bg-white/5 flex items-center justify-center mb-4">
                  <Mail className="w-7 h-7 text-gray-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Email Automation</h3>
                <p className="text-gray-400 text-sm">
                  Automate follow-ups, customer queries, and routine emails so your inbox doesn't control your life.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-700 bg-black hover:bg-gray-900 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl border border-gray-600 bg-white/5 flex items-center justify-center mb-4">
                  <Share2 className="w-7 h-7 text-gray-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Social Media Automation</h3>
                <p className="text-gray-400 text-sm">
                  LinkedIn, Instagram, Facebook - schedule posts and respond to messages without being glued to your phone.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-700 bg-black hover:bg-gray-900 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl border border-gray-600 bg-white/5 flex items-center justify-center mb-4">
                  <FaWhatsapp className="w-7 h-7 text-gray-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">WhatsApp Automation</h3>
                <p className="text-gray-400 text-sm">
                  Instant replies, booking confirmations, and order updates - your WhatsApp becomes a 24/7 sales machine.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-700 bg-black hover:bg-gray-900 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl border border-gray-600 bg-white/5 flex items-center justify-center mb-4">
                  <Bot className="w-7 h-7 text-gray-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Smart AI Chatbots</h3>
                <p className="text-gray-400 text-sm">
                  Answer FAQs and guide customers through purchases - your best salesperson working 24/7.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-700 bg-black hover:bg-gray-900 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl border border-gray-600 bg-white/5 flex items-center justify-center mb-4">
                  <BsBriefcase className="w-7 h-7 text-gray-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Business Process Automation</h3>
                <p className="text-gray-400 text-sm">
                  Scheduling, invoicing, data entry, onboarding - automate the repetitive work that drains your team.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-700 bg-black hover:bg-gray-900 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl border border-gray-600 bg-white/5 flex items-center justify-center mb-4">
                  <Phone className="w-7 h-7 text-gray-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Call Automation</h3>
                <p className="text-gray-400 text-sm">
                  Automate inbound and outbound calls - handle customer inquiries, follow-ups, and sales calls without manual effort.
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="text-gray-300 text-center text-lg max-w-3xl mx-auto">
            Less manual work, fewer people needed, more time to build your business.
          </p>
        </div>

        {/* Industries We Serve */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            Industries We Work With
          </h2>
          <p className="text-gray-300 text-center mb-12 text-lg max-w-3xl mx-auto">
            We've helped businesses across industries cut costs and boost efficiency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="border-gray-700 bg-black hover:bg-gray-900 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-xl border border-gray-600 bg-white/5 flex items-center justify-center mb-4 mx-auto">
                    <industry.icon className="w-7 h-7 text-gray-300" strokeWidth={1.5} />
                  </div>
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
            Why Business Owners Choose Us
          </h2>
          <p className="text-gray-300 text-center mb-12 text-lg max-w-3xl mx-auto">
            No fancy jargon. Just solutions that solve real problems and save you real money.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-gray-700 bg-gray-950/90 backdrop-blur-sm hover:bg-gray-900 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl border border-gray-600 bg-white/5 flex items-center justify-center">
                      <benefit.icon className="w-7 h-7 text-gray-300" />
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
