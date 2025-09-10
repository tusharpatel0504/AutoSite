import { useEffect } from "react";
import { cn } from "../lib/utils";
import { InteractiveHoverButton } from "./ui/InteractiveHoverButton ";

const chatbots = [
  {
    heading: "Inbound Call Automation",
    description:
      "Intelligent call routing and manages incoming calls, provides information, and routes callers to appropriate departments or agents with natural voice interactions.",
    features: [
      "Smart call routing & distribution",
      "On-call actions like appointment booking and provide Personal info",
      "Seamless human handover when needed",
      "Integration with CRM systems",
      "Lead qualification & caller intent detection",
      "Lead qualification & caller intent detection",
    ],
    demoUrl: "https://calendly.com/guptaritik67856/inbound-call-demo",
  },
  {
    heading: "Email Compaigning",
    description:
      "Send personalized email campaigns to high quality leads on mass level , track engagement metrics , real-time email dashboard updation",
    features: [
      "Send Personalized Email on mass level with follow-up",
      "Track engagement metrics(open , reply , bounce , conversion rates)",
      "Real -time email dashboard updation",
      "Extact high quality leads",
      "Autoreply to customer queries on email",
    ],
    demoUrl: "https://calendly.com/guptaritik67856/email-campaign-demo",
  },
  {
    heading: "Instagram and WhatsApp Automation",
    description:
      "Automatically respond to customer queries on Instagram and WhatsApp, send personalized messages, and manage customer interactions seamlessly.",
    features: [
      "Automated response to customer queries through out knowledge base",
      "Perform task like Apppointment scheduling , order tracking, and more",
      "Persioanlise consultation throigh chat and voice",
      "Multi-language Support",
      "Integration with CRM systems",
      "Lead Qualification and deep Sales Analysis",
    ],
    demoUrl: "https://calendly.com/guptaritik67856/instagram-whatsapp-demo",
  },
];

const WorkflowPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleDemoClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Dot Pattern Background - covers full area */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:32px_32px]",
          "[background-image:radial-gradient(circle,#404040_1.5px,transparent_1.5px)]"
        )}
      />
      {/* Gradient from 4 corners */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at left top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0) 60%),
            radial-gradient(circle at right top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0) 60%),
            radial-gradient(circle at left bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0) 60%),
            radial-gradient(circle at right bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0) 60%)
          `,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left top, right top, left bottom, right bottom",
          backgroundSize: "65% 65%, 65% 65%, 65% 65%, 65% 65%",
        }}
      />
      {/* Page Heading */}
      <div className="mb-12 text-center mt-24 relative z-20">
        <h1 className="text-5xl md:text-6xl font-medium text-white mb-4">
          Workflow Automation
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          Discover how our intelligent workflow automation solutions streamline
          business processes, reduce manual work, and increase operational
          efficiency.
        </p>
      </div>
      {/* Chatbot Cards */}
      <div className="flex flex-col gap-12 w-full max-w-5xl relative z-20">
        {chatbots.map((bot, idx) => (
          <div
            key={idx}
            className="bg-[#181818] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16 shadow-lg"
          >
            {/* Left Section */}
            <div className="flex-1 text-white">
              <h2 className="text-5xl md:text-6xl font-light mb-6">
                {bot.heading}
              </h2>
              <p className="text-base md:text-lg mb-8 max-w-md">
                {bot.description}
              </p>
              <div>
                <h3 className="text-2xl font-light mb-2">FEATURES</h3>
                <ul className="list-disc list-inside text-lg ml-4 space-y-1 mb-6">
                  {bot.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <InteractiveHoverButton onClick={() => handleDemoClick(bot.demoUrl)} className="ml-4 -mt-4">View Demo</InteractiveHoverButton>
              </div>
            </div>
            {/* Right Section */}
            <div className="flex-1 flex items-center justify-center relative">
              <div className="w-[250px] h-[450px] bg-gray-300 rounded-[2.5rem] border-4 border-[#2e4156] shadow-inner" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkflowPage;