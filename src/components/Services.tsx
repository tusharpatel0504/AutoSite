import { useState } from "react";
import { cn } from "../lib/utils";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Add this import

// Meteor Shower Background Component

const projects = [
  {
    id: "Chatbot Development",
    title: "Chatbot Development",
    subtitle: "AI-powered chatbots and voicebots for seamless customer interactions across multiple domains including healthcare, e-commerce, and fashion.",
    image: "/image.png",
    borderColor: "border-[#2E2E2E]",
  },
  {
    id: "Business Automation",
    title: "Business Automation",
    subtitle: " Streamline your business processes with intelligent custom automation solutions for operational workflows.",
    image: "/workflowCoverImage.png",
    borderColor: "border-[#2E2E2E]",
  },
  {
    id: "Custom Support AI",
    title: "Custom Support AI",
    subtitle: "Enhance customer experience with intelligent support systems that understand context and provide personalized solutions.",
    image: "/CustomER Support.jpg",
    borderColor: "border-[#2E2E2E]",
  },
];

export default function RecentProjects() {
  const [activeImage, setActiveImage] = useState(projects[0].image);
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
      {/* Meteor Shower + Beams */}
    
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          "[mask-image:linear-gradient(to_bottom,transparent,white_20%)]"
        )}
      />

      {/* 🔥 Vignette Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at left top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 60%),
            radial-gradient(circle at right top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 60%),
            radial-gradient(circle at left bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 60%),
            radial-gradient(circle at right bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 60%),
            radial-gradient(circle at bottom center, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 65%)
          `,
          backgroundRepeat: "no-repeat",
          backgroundPosition: `
            left top,
            right top,
            left bottom,
            right bottom,
            bottom center
          `,
          backgroundSize: `
            60% 60%,
            60% 60%,
            60% 60%,
            60% 60%,
            80% 10%
          `,
        }}
      />

      {/* Main Content */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 w-full max-w-6xl items-center">
        {/* Phone Mockup */}
        <div className="hidden md:flex items-center justify-center">
          <div className="w-[260px] h-[400px] sm:w-[320px] sm:h-[500px] md:w-[360px] md:h-[560px] lg:w-[400px] lg:h-[620px] rounded-[1.5rem] md:rounded-[2rem] border-8 border-zinc-600 bg-gray-200 shadow-lg overflow-hidden flex items-center justify-center">
            <img
              src={activeImage}
              alt="Preview"
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>
        </div>

        {/* Projects Section */}
        <div className="flex flex-col justify-center space-y-6 w-full">
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold leading-none text-gray-500">
              OUR
            </h2>
            <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              SERVICES
            </h3>
          </div>

          <div className="flex flex-col space-y-4 sm:space-y-6">
            {projects.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setActiveImage(project.image)}
                onClick={() => {
                  if (project.id === "Chatbot Development") {
                    navigate("/chatbot"); // Navigate to /chatbot
                  } else if (project.id === "Workflow Automation") {
                    navigate("/workflow"); // Navigate to /workflow
                  } else if (project.id === "Customer Support AI") {
                    window.open("https://calendly.com/guptaritik67856/30min?month=2025-09", "_blank"); // Navigate to external link
                  }
                }}
                className="relative flex items-center justify-between bg-[#111] rounded-xl p-3 sm:p-4 md:p-5 hover:bg-[#1a1a1a] transition cursor-pointer overflow-hidden"
              >
                {/* Animated border */}
                <div className="absolute inset-0 rounded-xl pointer-events-none">
                  <div className="absolute inset-0 rounded-xl border border-gray-700"></div>
                  <div className="absolute inset-0 rounded-xl border border-gray-400 animate-border-glow"></div>
                </div>
                
                {/* Thumbnail */}
                <div
                  className={`relative z-10 w-14 h-16 sm:w-16 sm:h-14 md:w-20 md:h-20 overflow-hidden rounded-lg border-2 ${project.borderColor}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <div className="relative z-10 flex-1 px-2 sm:px-4">
                  <h4 className="font-bold text-base sm:text-lg md:text-xl">
                    {project.title}
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-400">
                    {project.subtitle}
                  </p>
                </div>

                {/* Icon */}
                <ArrowUpRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0 animate-arrow-bounce" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind meteor animation keyframes */}
      <style>{`
        @keyframes meteor {
          0% {
            opacity: 0;
            transform: translateY(-120px) scaleX(0.7);
          }
          20% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(120px) scaleX(1);
          }
        }
        .animate-meteor {
          animation: meteor 2.5s linear infinite;
        }
        @keyframes borderGlow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-border-glow {
          animation: borderGlow 3s ease-in-out infinite;
        }
        @keyframes arrowBounce {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(4px, -4px);
          }
        }
        .animate-arrow-bounce {
          animation: arrowBounce 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
