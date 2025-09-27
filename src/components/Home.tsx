import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Review from "./ui/Review";

import LogoCloud from "./ui/LogoCloud";
import Services from "./Services";
import { cn } from "../lib/utils";
import { GridBackground } from "./ui/GridBackground";

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const targetFromState = (location.state as any)?.scrollTo;
    const hash = location.hash ? location.hash.replace("#", "") : null;
    const targetId = targetFromState || hash;

    if (!targetId) return;

    // small delay to ensure DOM (and sections) are rendered
    const t = setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      // clear state so repeated navigation doesn't retrigger
      navigate(location.pathname, { replace: true, state: {} });
    }, 80);

    return () => clearTimeout(t);
  }, [location, navigate]);

  return (
    <main id="home" className="relative min-h-screen text-white">
      <div
        className={cn(
          "absolute inset-0 -z-10",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          "[mask-image:linear-gradient(to_bottom,white_50%,transparent_100%)]"
        )}
      />
      <GridBackground/>
      <section
        id="services"
        className="
"
      >
        <Services />
      </section>

      <section id="testimonials">
        <Review />
      </section>

      <section id="replyrates">
        {/* <ReplyRates /> */}
      </section>

      <section id="features" className="-mt-20">
        <LogoCloud />
      </section>
    </main>
  );
}