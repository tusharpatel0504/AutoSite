"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Autosite?",
      answer: "Autosite is an AI automation agency that creates smart chatbots for businesses. We help companies in fashion, beauty, ecommerce, and IT industries automate their customer support, increase sales by up to 35%, and reduce operational costs by 60%. Think of us as your partner in making customer service easier and more profitable."
    },
    {
      question: "What do you do?",
      answer: "We build custom AI chatbots that talk to your customers 24/7, answer their questions, help them find products, and guide them through purchases. Our chatbots learn about your business and provide personalized support just like a real team member would - but they never sleep, never take breaks, and can handle thousands of conversations at once."
    },
    {
      question: "How can I integrate your chatbot into my website?",
      answer: "Integration is super simple! We provide you with a small piece of code (just 3 lines) that you copy and paste into your website. It works on any platform - WordPress, Shopify, custom websites, or any other platform. No technical skills needed. We'll guide you through the entire process, and our team can even do it for you if you prefer."
    },
    {
      question: "Is requesting a personalized demo free?",
      answer: "Yes, absolutely! Requesting a demo is 100% free with no strings attached. During the demo, we'll show you exactly how our AI chatbot works, customize it for your business needs, and answer all your questions. There's no obligation to buy anything - we just want you to see the value we can bring to your business."
    },
    {
      question: "My website is on Shopify - can I integrate it without installing any plugin?",
      answer: "Yes! You don't need to install any plugin for Shopify. Our chatbot integrates through a simple code snippet that you add to your Shopify theme. It takes about 2 minutes. We provide step-by-step instructions specifically for Shopify, and our support team is always available to help you set it up. It's compatible with all Shopify themes and won't slow down your store."
    },
    {
      question: "Do I have to give card details for free chatbot trials?",
      answer: "No, you don't need to provide any card details for the free trial. We offer a genuine free trial where you can test our chatbot on your website with real customers. No credit card required, no hidden fees, no automatic charges. You only provide payment information if you decide to continue with a paid plan after experiencing the results."
    },
    {
      question: "How much time does it take to integrate the chatbot?",
      answer: "The technical integration takes only 5-10 minutes. However, we spend 2-3 days training your chatbot to understand your business, products, and customer service style. This ensures it gives accurate, helpful answers from day one. Once trained, the chatbot goes live and starts helping your customers immediately. The entire process from signup to going live typically takes 3-5 business days."
    },
    {
      question: "Can the chatbot handle multiple languages?",
      answer: "Yes! Our AI chatbots are multilingual and can communicate in over 50 languages. They automatically detect the customer's language and respond accordingly. This is perfect for businesses serving international customers or expanding into new markets without hiring multilingual support staff."
    },
    {
      question: "What happens if the chatbot doesn't know the answer?",
      answer: "Our chatbot is smart enough to know when it needs human help. If it encounters a question it can't answer confidently, it will smoothly transfer the conversation to your human team or collect the customer's contact information for a callback. You can customize this behavior based on your preferences."
    },
    {
      question: "How secure is my customer data?",
      answer: "We take security very seriously. All conversations are encrypted end-to-end, and we're fully GDPR compliant. Your customer data is stored securely and never shared with third parties. We follow industry-standard security practices and conduct regular security audits to protect your business and your customers."
    },
    {
      question: "Can I customize how the chatbot looks and sounds?",
      answer: "Absolutely! You have full control over the chatbot's appearance - colors, position, avatar, welcome message, and more. You can also customize its personality and tone to match your brand voice. Want it friendly and casual? Or professional and formal? You decide. We'll work with you to make it feel like a natural part of your brand."
    },
    {
      question: "What kind of support do you provide after setup?",
      answer: "We provide ongoing support through multiple channels - email, chat, and phone. You'll have a dedicated account manager who knows your business. We also continuously monitor your chatbot's performance, provide monthly analytics reports, and make improvements based on real customer interactions. Plus, we offer free updates and new features as we develop them."
    },
    {
      question: "How do I know if the chatbot is actually helping my business?",
      answer: "We provide detailed analytics dashboard showing conversation volume, customer satisfaction scores, sales generated, support tickets reduced, and cost savings. You'll see real metrics like response time, resolution rate, and conversion rates. Most clients see measurable ROI within the first month of implementation."
    },
    {
      question: "What's the pricing model?",
      answer: "We offer flexible pricing based on your needs - monthly message volume, features required, and level of customization. Plans start from affordable options for small businesses to enterprise solutions for large companies. We also offer custom packages. Schedule a free demo, and we'll recommend the best plan for your specific situation and budget."
    }
  ];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden bg-black">
      {/* Grid Background */}
      <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(#262626_1px,transparent_1px)] pointer-events-none"></div>
      
      {/* Radial gradient for faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      {/* Light flash effects */}
      <div className="absolute top-20 left-10 w-40 h-40 sm:w-64 sm:h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 sm:w-64 sm:h-64 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-3 sm:mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-300 text-center mb-8 sm:mb-12 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
          Got questions? We've got answers. Here's everything you need to know about Autosite.
        </p>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index}>
              <div className="group">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between py-4 sm:py-6 text-left transition-all duration-300"
                >
                  <div className="flex items-center gap-2 sm:gap-4 flex-1">
                    <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center bg-black border-2 border-gray-700">
                      <span className={`text-sm font-bold text-white transition-all duration-500 inline-block ${
                        openFaq === index ? 'rotate-180' : 'rotate-0'
                      }`}>
                        {index + 1}
                      </span>
                    </div>
                    <h3 
                      className="text-white pr-4 group-hover:text-gray-200 transition-colors text-sm sm:text-base md:text-lg"
                      style={{
                        lineHeight: '1.6',
                        fontWeight: 370
                      }}
                    >
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-gray-700 flex items-center justify-center transition-all duration-300 ${
                    openFaq === index 
                      ? 'bg-white border-white rotate-180' 
                      : 'bg-black group-hover:border-gray-600'
                  }`}>
                    {openFaq === index ? (
                      <Minus className="w-4 h-4 text-black" />
                    ) : (
                      <Plus className="w-4 h-4 text-white" />
                    )}
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pb-6 pl-8 sm:pl-[48px]">
                    <div className={`text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed sm:leading-loose transform transition-all duration-500 ${
                      openFaq === index 
                        ? 'translate-y-0' 
                        : '-translate-y-4'
                    }`}>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Animated Divider Line */}
              {index < faqs.length - 1 && (
                <div className="relative h-px overflow-hidden">
                  <div className="absolute inset-0 bg-gray-800"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent animate-shimmer"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Shimmer Animation */}
        <style>{`
          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
          .animate-shimmer {
            animation: shimmer 3s ease-in-out infinite;
          }
        `}</style>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center">
          <Card className="border-gray-700 bg-gradient-to-br from-gray-950 to-gray-900 backdrop-blur-sm max-w-xl mx-auto">
            <CardContent className="p-5">
              {/* <div className="text-2xl mb-2">💬</div> */}
              <h3 className="text-lg font-bold text-white mb-2">
                Still Have Questions?
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Our team is here to help! Get in touch and we'll answer any questions you have.
              </p>
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white bg-black px-5 py-2 text-sm font-semibold cursor-pointer transition-colors duration-200 hover:bg-white hover:border-gray-200"
              >
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-white transition-all duration-300 transform group-hover:scale-0 group-hover:opacity-0"></div>
                  <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 text-white group-hover:text-black">
                    Contact Us
                  </span>
                </div>
                <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-black opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
                  <span className="text-black">Contact Us</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
