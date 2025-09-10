import { useEffect } from "react";
import { DotBackgroundDemo } from "./DotBackgroundDemo";

const chatbots = [
  {
    heading: "Personal Stylist",
    description:
      "Personal style advisor that understands fashion trends, provides styling tips, suggests outfit combinations, and helps customers make informed fashion choices.",
    features: ["FEATURE 1", "FEATURE 2", "FEATURE 3", "FEATURE 4"],
    
  },
  {
    heading: "Health Assistant",
    description:
      "AI-powered health assistant that answers medical queries, provides wellness tips, and helps users track their health goals.",
    features: ["FEATURE A", "FEATURE B", "FEATURE C", "FEATURE D"],
  },
  {
    heading: "Travel Guide",
    description:
      "Smart travel guide that suggests destinations, plans itineraries, and helps users discover local attractions and experiences.",
    features: ["FEATURE X", "FEATURE Y", "FEATURE Z", "FEATURE W"],
  },
];

const Chatbot = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center">
      {/* Dot Background */}
      <div className="absolute inset-0 -z-10">
        <DotBackgroundDemo />
      </div>
      {/* Page Heading */}
      <div className="mb-12 text-center mt-24">
        <h1 className="text-5xl md:text-6xl font-medium text-white mb-4">
          Chatbot Demos
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          Experience our AI-powered chatbots and voicebots in action across
          different industries. Each demo showcases real-world applications and
          capabilities.
        </p>
      </div>
      {/* Chatbot Cards */}
      <div className="flex flex-col gap-12 w-full max-w-5xl">
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
                <ul className="list-disc list-inside text-lg ml-4 space-y-1">
                  {bot.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
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

export default Chatbot;