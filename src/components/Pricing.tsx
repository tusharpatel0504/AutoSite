"use client";

import { useEffect, useRef, useState } from "react";
import { Check, X, ArrowRight, DollarSign } from "lucide-react";

const Pricing = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 150);
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

  const plans = [
    {
      name: "Starter AI",
      badge: "Free",
      price: "$0",
      period: "/ month",
      description: "Perfect for trying out AI automation",
      features: [
        { text: "Text-to-text chatbot support", included: true },
        { text: "Email automation", included: true },
        { text: "One language conversation", included: true },
        { text: "Limited database", included: true },
        { text: "1 month access", included: true },
        { text: "Voice calls", included: false },
        { text: "Custom chatbot design", included: false },
        { text: "Try-on feature", included: false },
        { text: "Unlimited queries", included: false },
        { text: "Offer promotions", included: false },
      ],
      cta: "Get Started Free",
      ctaLink: "/contact",
      popular: false,
    },
    {
      name: "Growth AI",
      badge: "Most Popular",
      price: "$49",
      period: "/ month",
      description: "Best for growing businesses",
      features: [
        { text: "Text-to-text chatbot support", included: true },
        { text: "Voice call support", included: true },
        { text: "Smart product recommendations", included: true },
        { text: "1 email automation", included: true },
        { text: "500 MB database", included: true },
        { text: "Unlimited query handling", included: true },
        { text: "100 virtualtry-on interactions", included: true },
        { text: "2 language conversation", included: true },
        { text: "2 chatbot customizations", included: true },
        { text: "Shopify integration", included: true },
        { text: "Offer promotions", included: false },
      ],
      cta: "Start Growth Plan",
      ctaLink: "/contact",
      popular: true,
    },
    {
      name: "Scale AI",
      badge: "",
      price: "$79",
      period: "/ month",
      description: "For scaling your operations",
      features: [
        { text: "Text-to-text chatbot support", included: true },
        { text: "Voice call support", included: true },
        { text: "1 email automation", included: true },
        { text: "2 GB database", included: true },
        { text: "Unlimited query handling", included: true },
        { text: "300 virtual try-on interactions", included: true },
          { text: "Smart product recommendations", included: true },
        { text: "Multilingual conversation", included: true },
        { text: "Offer promotions", included: true },
        { text: "Shopify integration", included: true },
        { text: "5 chatbot customizations", included: true },
      ],
      cta: "Scale with AI",
      ctaLink: "/contact",
      popular: false,
    },
    {
      name: "Enterprise AI",
      badge: "",
      price: "Custom",
      period: "",
      customPricing: "One-time setup + $13/month maintenance",
      description: "Fully customized for your needs",
      features: [
        { text: "Fully custom AI automation", included: true },
        { text: "Unlimited database", included: true },
        { text: "Advanced voice & chat AI", included: true },
        { text: "Custom integrations", included: true },
        { text: "Priority support", included: true },
        { text: "Dedicated setup", included: true },
      ],
      cta: "Contact Sales",
      ctaLink: "/contact",
      popular: false,
    },
  ];

  return (
    <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 md:px-8 relative overflow-hidden bg-black">
      {/* Grid Background */}
      <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(#262626_1px,transparent_1px)] pointer-events-none"></div>
      
      {/* Radial gradient for faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      {/* Light flash effects */}
      <div className="absolute top-20 left-10 w-40 h-40 sm:w-64 sm:h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 sm:w-64 sm:h-64 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 border border-gray-700 rounded-full text-white text-sm font-medium mb-6">
            <DollarSign className="w-4 h-4 mr-2" />
            Pricing Plans
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent Chatbot Pricing
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your business. Start free, scale as you grow.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              className={`transform transition-all duration-700 ease-out ${
                visibleCards[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Pricing Card */}
              <div 
                className={`group relative h-full rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular ? 'lg:-translate-y-4' : ''
                }`}
              >
                {/* Card Container */}
                <div 
                  className={`relative rounded-2xl p-6 sm:p-8 h-full overflow-hidden ${
                    plan.popular ? 'bg-gray-900/80' : 'bg-gray-950/50'
                  } backdrop-blur-sm`}
                  style={{ backgroundColor: plan.popular ? 'rgb(20, 20, 20)' : 'rgb(15, 15, 15)' }}
                >
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl pointer-events-none">
                    <div className={`absolute inset-0 rounded-2xl border ${
                      plan.popular ? 'border-gray-500' : 'border-gray-800'
                    }`}></div>
                    {plan.popular && (
                      <div className="absolute inset-0 rounded-2xl border border-gray-400 animate-border-glow"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Badge */}
                    {plan.badge && (
                      <div className="mb-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          plan.popular 
                            ? 'bg-white text-black' 
                            : 'bg-gray-800 text-gray-300'
                        }`}>
                          {plan.badge}
                        </span>
                      </div>
                    )}

                    {/* Plan Name */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>

                    {/* Price */}
                    <div className="mb-2">
                      {plan.customPricing ? (
                        <div className="text-white">
                          <div className="text-3xl sm:text-4xl font-bold mb-1">{plan.price}</div>
                          <div className="text-xs sm:text-sm text-gray-400">{plan.customPricing}</div>
                        </div>
                      ) : (
                        <div className="flex items-baseline">
                          <span className="text-3xl sm:text-4xl font-bold text-white">{plan.price}</span>
                          <span className="text-gray-400 ml-1 text-sm">{plan.period}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-6">
                      {plan.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3 flex-grow mb-6">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-0.5">
                            {feature.included ? (
                              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                                <Check className="w-3 h-3 text-white" strokeWidth={3} />
                              </div>
                            ) : (
                              <div className="w-5 h-5 rounded-full bg-gray-800/50 flex items-center justify-center">
                                <X className="w-3 h-3 text-gray-600" strokeWidth={2} />
                              </div>
                            )}
                          </div>
                          <span className={`text-sm leading-relaxed ${
                            feature.included ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <a
                      href={plan.ctaLink}
                      className={`group/btn relative w-full cursor-pointer overflow-hidden rounded-full border p-3 text-center font-semibold transition-all duration-200 inline-block mt-auto ${
                        plan.popular
                          ? 'bg-white border-white text-black hover:bg-gray-100'
                          : 'bg-black border-gray-700 text-white hover:bg-white hover:text-black hover:border-gray-200'
                      }`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <span className="inline-block transition-all duration-300 group-hover/btn:translate-x-2">
                          {plan.cta}
                        </span>
                        <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover/btn:translate-x-1" />
                      </div>
                    </a>
                  </div>
                </div>

                {/* Glow effect for popular plan */}
                {plan.popular && (
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-white/5 to-transparent blur-xl opacity-50"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Link */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-gray-400 text-sm sm:text-base mb-4">
            Need help choosing? Check out our{" "}
            <a href="/demo" className="text-white hover:underline font-semibold">
              FAQ section
            </a>{" "}
            or{" "}
            <a href="/contact" className="text-white hover:underline font-semibold">
              contact us
            </a>
            .
          </p>
        </div>

      </div>

      {/* Animations */}
      <style>{`
        @keyframes borderGlow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
        .animate-border-glow {
          animation: borderGlow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Pricing;
