import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

export const VideoPlayerPage: React.FC = () => {
  const location = useLocation();
  const videoId = location.state?.videoUrl; // picking videoId from navigate state

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!videoId) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white text-lg">
        ❌ Error: No video selected
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white px-4 pt-24 overflow-hidden">
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0 -z-20",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Vignette Effect */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_50%,black)] pointer-events-none"></div>

      <div className="relative w-full max-w-4xl ">
        {/* iPad mockup */}
        <img
          src="/apple-ipad-air-4-medium.png"
          alt="iPad Mockup"
          className="w-full h-auto"
        />

        {/* YouTube video inside iPad */}
        <div className="absolute top-[5%] left-[4.1%] w-[92%] h-[90%]">
          <iframe
            className="w-full h-full rounded-2xl shadow-lg"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
