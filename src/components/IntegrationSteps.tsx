"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Settings, Rocket, ArrowRight } from "lucide-react";

const IntegrationSteps = () => {
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([false, false, false]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleSteps((prev) => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 200);
            }
          });
        },
        { threshold: 0.2 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const steps = [
    {
      number: "01",
      icon: Users,
      title: "Discovery Meeting",
      description: "Understand business goals, requirements, and automation opportunities",
      points: [
        "Understand your business and services",
        "Identify requirements and challenges",
        "Define automation opportunities",
        "Set success metrics and goals"
      ]
    },
    {
      number: "02",
      icon: Settings,
      title: "Custom Development",
      description: "Build and customize AI automation or chatbot tailored to business needs",
      points: [
        "Build tailored AI chatbot solution",
        "Customize for your business needs",
        "Regular progress updates",
        "Solve problems and increase efficiency"
      ]
    },
    {
      number: "03",
      icon: Rocket,
      title: "Integration & Launch",
      description: "Integrate with website, CRM, and platforms, then go live securely",
      points: [
        "Integrate with website and CRM",
        "Connect social media platforms",
        "Provide analytics dashboard",
        "Ensure data privacy and security"
      ]
    }
  ];

  return (
    <section className="pt-8 pb-20 px-4 sm:px-6 md:px-8 relative overflow-hidden bg-black">
      {/* Gradient transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-transparent to-transparent pointer-events-none z-20"></div>
      
      {/* Grid Background */}
      <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(#262626_1px,transparent_1px)] pointer-events-none"></div>
      
      {/* Radial gradient for faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Simple 3-Step Integration Process
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From consultation to launch, we guide you through your AI automation journey
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Animated Progress Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gray-800">
            <div className="h-full bg-gradient-to-r from-gray-600 to-gray-400 animate-progress-line"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  ref={(el) => { stepRefs.current[index] = el; }}
                  className={`transform transition-all duration-700 ease-out ${
                    visibleSteps[index]
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Card with Animated Border */}
                  <div className="group relative h-full">
                    {/* Card */}
                    <div className="relative rounded-2xl p-8 h-full overflow-hidden" style={{ backgroundColor: 'rgb(26, 26, 26)' }}>
                      {/* Animated border */}
                      <div className="absolute inset-0 rounded-2xl pointer-events-none">
                        <div className="absolute inset-0 rounded-2xl border border-gray-700"></div>
                        <div className="absolute inset-0 rounded-2xl border border-gray-400 animate-border-glow"></div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Step Number Badge */}
                        <div className="absolute w-12 h-12 bg-black rounded-full flex items-center justify-center overflow-hidden" style={{ top: '-4rem', right: '6rem' }}>
                          {/* Animated border for number badge */}
                          <div className="absolute inset-0 rounded-full pointer-events-none">
                            <div className="absolute inset-0 rounded-full border border-gray-700"></div>
                            <div className="absolute inset-0 rounded-full border border-gray-400 animate-border-glow"></div>
                          </div>
                          <span className="text-white font-semibold text-lg relative z-10">{step.number}</span>
                        </div>

                        {/* Icon Container */}
                        <div className="mb-6 mt-4">
                          <div className="w-14 h-14 rounded-xl border border-gray-600 bg-white/5 flex items-center justify-center">
                            <Icon className="w-7 h-7 text-gray-300" strokeWidth={1.5} />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-semibold text-white mb-3">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                          {step.description}
                        </p>

                        {/* Points List */}
                        <div className="space-y-3">
                          {step.points.map((point, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="flex-shrink-0 mt-1">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                                </svg>
                              </div>
                              <p className="text-gray-300 text-sm leading-relaxed">
                                {point}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Connecting Arrow - Desktop Only */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-24 -right-4 z-10 animate-arrow-move" style={{ width: '3rem', height: '11rem' }}>
                        <svg className="w-full h-full" fill="none" stroke="rgb(196, 201, 209)" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Integrations Showcase Section */}
        <div className="mt-32 relative">
          {/* Integration Icons Grid */}
          <div className="relative min-h-[500px] max-w-6xl mx-auto">
            {/* App Icons positioned absolutely - around but not on the card */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Top Row - Above the card */}
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" alt="Slack" className="absolute top-8 left-[10%] w-12 h-12 opacity-80 hover:opacity-100 transition-opacity animate-float" />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/notion.svg" alt="Notion" className="absolute top-8 left-[25%] w-12 h-12 opacity-80 hover:opacity-100 transition-opacity filter invert animate-float" style={{ animationDelay: '0.5s' }} />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoft.svg" alt="Microsoft" className="absolute top-8 left-[45%] w-12 h-12 opacity-80 hover:opacity-100 transition-opacity filter invert animate-float" style={{ animationDelay: '1s' }} />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/shopify.svg" alt="Shopify" className="absolute top-8 right-[25%] w-12 h-12 opacity-80 hover:opacity-100 transition-opacity animate-float" style={{ filter: 'invert(1) brightness(0.8) sepia(1) saturate(5) hue-rotate(80deg)', animationDelay: '1.5s' }} />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mailchimp.svg" alt="Mailchimp" className="absolute top-8 right-[10%] w-12 h-12 opacity-80 hover:opacity-100 transition-opacity animate-float" style={{ filter: 'brightness(0) saturate(100%) invert(100%)', animationDelay: '2s' }} />
              
              {/* Left Side - Beside the card */}
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" alt="GitHub" className="absolute top-[140px] left-[5%] w-12 h-12 opacity-80 hover:opacity-100 transition-opacity filter invert animate-float" style={{ animationDelay: '2.5s' }} />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg" alt="WhatsApp" className="absolute top-[220px] left-[8%] w-12 h-12 opacity-80 hover:opacity-100 transition-opacity animate-float" style={{ filter: 'brightness(0) saturate(100%) invert(74%) sepia(39%) saturate(2602%) hue-rotate(86deg) brightness(98%) contrast(84%)', animationDelay: '0.3s' }} />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/quickbooks.svg" alt="QuickBooks" className="absolute top-[300px] left-[5%] w-12 h-12 opacity-80 hover:opacity-100 transition-opacity animate-float" style={{ filter: 'brightness(0) saturate(100%) invert(61%) sepia(51%) saturate(2878%) hue-rotate(86deg) brightness(119%) contrast(119%)', animationDelay: '0.8s' }} />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" alt="Facebook" className="absolute top-[380px] left-[10%] w-12 h-12 opacity-80 hover:opacity-100 transition-opacity animate-float" style={{ filter: 'brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(200deg) brightness(119%) contrast(119%)', animationDelay: '0.6s' }} />
              
              {/* Right Side - Beside the card */}
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/hubspot.svg" alt="HubSpot" className="absolute top-[140px] right-[5%] w-12 h-12 opacity-80 hover:opacity-100 transition-opacity animate-float" style={{ filter: 'brightness(0) saturate(100%) invert(44%) sepia(96%) saturate(2574%) hue-rotate(358deg) brightness(98%) contrast(105%)', animationDelay: '3s' }} />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" alt="Instagram" className="absolute top-[220px] right-[8%] w-12 h-12 opacity-80 hover:opacity-100 transition-opacity animate-float" style={{ filter: 'brightness(0) saturate(100%) invert(40%) sepia(77%) saturate(2476%) hue-rotate(310deg) brightness(95%) contrast(119%)', animationDelay: '2.3s' }} />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/woocommerce.svg" alt="WooCommerce" className="absolute top-[300px] right-[5%] w-12 h-12 opacity-80 hover:opacity-100 transition-opacity animate-float" style={{ filter: 'brightness(0) saturate(100%) invert(38%) sepia(89%) saturate(2317%) hue-rotate(273deg) brightness(95%) contrast(119%)', animationDelay: '2.8s' }} />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/odoo.svg" alt="Odoo" className="absolute top-[380px] right-[10%] w-12 h-12 opacity-80 hover:opacity-100 transition-opacity animate-float" style={{ filter: 'brightness(0) saturate(100%) invert(38%) sepia(89%) saturate(2317%) hue-rotate(273deg) brightness(95%) contrast(119%)', animationDelay: '3.6s' }} />
              
              {/* Bottom Row - Below the card */}
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/discord.svg" alt="Discord" className="absolute bottom-8 left-[15%] w-12 h-12 opacity-80 hover:opacity-100 transition-opacity animate-float" style={{ filter: 'brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(215deg) brightness(119%) contrast(119%)', animationDelay: '1.3s' }} />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/dropbox.svg" alt="Dropbox" className="absolute bottom-8 left-[30%] w-12 h-12 opacity-80 hover:opacity-100 transition-opacity animate-float" style={{ filter: 'brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(200deg) brightness(119%) contrast(119%)', animationDelay: '1.8s' }} />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg" alt="Gmail" className="absolute bottom-8 left-[45%] w-12 h-12 opacity-80 hover:opacity-100 transition-opacity animate-float" style={{ animationDelay: '1.6s' }} />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/salesforce.svg" alt="Salesforce" className="absolute bottom-8 right-[30%] w-12 h-12 opacity-80 hover:opacity-100 transition-opacity animate-float" style={{ filter: 'brightness(0) saturate(100%) invert(56%) sepia(89%) saturate(2317%) hue-rotate(180deg) brightness(95%) contrast(119%)', animationDelay: '2.1s' }} />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg" alt="Google" className="absolute bottom-8 right-[15%] w-12 h-12 opacity-80 hover:opacity-100 transition-opacity animate-float" style={{ animationDelay: '1.1s' }} />
              
              {/* Additional scattered icons */}
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/openai.svg" alt="OpenAI" className="absolute top-[100px] left-[18%] w-12 h-12 opacity-80 hover:opacity-100 transition-opacity filter invert animate-float" style={{ animationDelay: '2.6s' }} />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vercel.svg" alt="Vercel" className="absolute top-[100px] right-[18%] w-12 h-12 opacity-80 hover:opacity-100 transition-opacity filter invert animate-float" style={{ animationDelay: '3.1s' }} />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/zapier.svg" alt="Zapier" className="absolute bottom-[80px] left-[12%] w-12 h-12 opacity-80 hover:opacity-100 transition-opacity animate-float" style={{ filter: 'brightness(0) saturate(100%) invert(44%) sepia(96%) saturate(2574%) hue-rotate(358deg) brightness(98%) contrast(105%)', animationDelay: '3.3s' }} />
            </div>

            {/* Center Content Box */}
            <div className="relative z-30 flex items-center justify-center min-h-[500px]">
              <div className="max-w-2xl mx-auto text-center px-8 py-12 rounded-3xl bg-black/60 backdrop-blur-sm border border-gray-800">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                  Seamlessly Integrates<br />with Your Favorite Tools
                </h2>
                <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                  Autosite connects effortlessly with the tools you already use, from email platforms to project management systems.
                </p>
                <button
                  onClick={() => window.location.href = '/demo'}
                  className="group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-black p-2 px-6 text-center font-semibold transition-colors duration-200 hover:bg-white hover:border-gray-200"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-white transition-all duration-300 transform group-hover:scale-0 group-hover:opacity-0" />
                    <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 text-white group-hover:text-black">
                      See All Integrations
                    </span>
                  </div>
                  <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-black opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
                    <span className="text-black">See All Integrations</span>
                    <ArrowRight />
                  </div>
                </button>
              </div>
            </div>

            {/* White flash background effect */}
            <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>

      </div>

      {/* Animations */}
      <style>{`
        @keyframes progressLine {
          0% {
            width: 0%;
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
          100% {
            width: 100%;
            opacity: 0.3;
          }
        }
        .animate-progress-line {
          animation: progressLine 4s ease-in-out infinite;
        }
        @keyframes arrowMove {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(8px);
          }
        }
        .animate-arrow-move {
          animation: arrowMove 1.5s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default IntegrationSteps;
