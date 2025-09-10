import { SparklesCore } from "../ui/Sparkles";
import { InteractiveHoverButton } from "../ui/InteractiveHoverButton ";

export default function Page() {
  const handleBookClick = () => {
    window.open(
      "https://calendly.com/guptaritik67856/30min?month=2025-09",
      "_blank"
    );
  };

  const stats = [
    { value: "30+", label: "Projects Delivered" },
    { value: "70+", label: "Happy Clients" },
    { value: "97%", label: "Satisfaction Rate" },
  ];

  return (
    <div className="min-h-screen w-full overflow-hidden bg-transparent relative">
      {/* Make grid background non-interactive and behind content */}
      {/*  */}
      <div className="mx-auto mt-48 w-full max-w-4xl px-4">
        <div className="text-center">
          <span className="block text-3xl sm:text-5xl font-extrabold text-white mb-2">
            Why Choose Autosite
          </span>
          <span className="block text-base sm:text-lg text-white font-medium mb-14">
            Experience the power of next-generation AI automation with features
            designed for modern businesses.
          </span>
        </div>

        {/* Stats Section with Gray Background */}
        <div className="bg-[#1a1a1a] rounded-2xl py-12 px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Number box */}
                <div className="bg-white text-black font-bold text-3xl sm:text-4xl px-4 py-4 rounded-md mb-4">
                  {stat.value}
                </div>

                {/* Divider line */}
                <div className="w-16 h-px bg-gray-600 mb-4"></div>

                {/* Label */}
                <p className="text-gray-300 text-2xl font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background & Effects */}
      <div className="relative -mt-32 h-96 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#fff,transparent_70%)] before:opacity-40 after:absolute after:top-1/2 after:-left-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#c5769066] after:bg-zinc-900 z-20">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          particleDensity={300}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mb-20 -mt-24 relative z-30">
        <InteractiveHoverButton onClick={handleBookClick}>
          Book appointment
        </InteractiveHoverButton>
      </div>
    </div>
  );
}
