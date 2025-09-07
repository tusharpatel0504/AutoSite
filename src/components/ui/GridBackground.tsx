import { cn } from "../../lib/utils";



export function GridBackground() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="relative z-20 text-center max-w-2xl mx-auto mt-2">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 text-white">
          Building Advanced AI Chatbots for Startups
        </h1>
        <p className="text-lg sm:text-xl text-white mb-6 font-medium leading-relaxed">
          Transform your business with intelligent automation, AI-powered chatbots, and seamless workflow solutions designed for the modern enterprise.
        </p>
         <div className="flex justify-center gap-4 mt-4">
            <button className="px-6 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black font-semibold transition-colors duration-300 hover:bg-zinc-700 dark:hover:bg-zinc-200">Get Started</button>
            <button className="px-6 py-2 rounded-lg bg-white text-black dark:bg-black dark:text-white border font-semibold transition-colors duration-300 hover:bg-zinc-200 dark:hover:bg-zinc-700">Learn More</button>
          </div>
      </div>
    </div>
  );
}
