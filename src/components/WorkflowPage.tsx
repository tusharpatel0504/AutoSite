import { useEffect } from "react";
import { cn } from "../lib/utils";
import { InteractiveHoverButton } from "./ui/InteractiveHoverButton ";
import { useNavigate } from "react-router-dom";

const newImage = "/whatsapp.webp";
const gmailimg = "/emailing.png";
const callauto = "/callauto.png";
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
    ],
    demoUrl: "E90kF380hqA",
    video: callauto,
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
    demoUrl: "cLZ65w_DkHM",
    video: gmailimg,
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
    demoUrl: "hUdibiZFv98",
    video: newImage,
  },
];

const ipadMockup = "/apple-ipad-air-4-medium.png";

const WorkflowPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleDemoClick = (url: string) => {
    navigate("/videoplayer", { state: { videoUrl: url } });
  };
  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Dot Pattern Background */}
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
      <div className="mb-12 text-center mt-24 relative z-20 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-medium text-white mb-4">
          Workflow Automation
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
          Discover how our intelligent workflow automation solutions streamline
          business processes, reduce manual work, and increase operational
          efficiency.
        </p>
      </div>

      {/* Chatbot Cards */}
      <div className="flex flex-col gap-12 w-full max-w-6xl relative z-20 px-4 sm:px-6 md:px-8">
        {chatbots.map((bot, idx) => (
          <div
            key={idx}
            className="bg-[#181818] rounded-2xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-lg"
          >
            {/* Left Section */}
            <div className="flex-1 text-white w-full">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                {bot.heading}
              </h2>
              <p className="text-xs sm:text-sm md:text-base mb-6 md:mb-8 max-w-md">
                {bot.description}
              </p>
              <div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">
                  FEATURES
                </h3>
                <ul className="list-disc list-inside text-xs sm:text-sm md:text-base ml-4 space-y-1 mb-6">
                  {bot.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <InteractiveHoverButton
                  onClick={() => handleDemoClick(bot.demoUrl)}
                  className="ml-2 md:ml-4 -mt-2 sm:-mt-4"
                >
                  View Demo
                </InteractiveHoverButton>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex-1 flex items-center justify-center relative w-full">
              <div className="relative w-[90vw] sm:w-[70vw] md:w-[500px] flex items-center justify-center">
                {/* iPad Mockup */}
                <img
                  src={ipadMockup}
                  alt="iPad Air 4 Mockup"
                  className="w-full h-full object-cover drop-shadow-2xl pointer-events-none select-none"
                  draggable={false}
                />
                {/* Image Overlay */}
                <img
                  src={bot.video}
                  alt={bot.heading}
                  className="absolute"
                  style={{
                    width: "94%",
                    height: "90%",
                    borderRadius: "0.75rem",
                    objectFit: "contain",
                    background: "#000",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.5)",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkflowPage;
