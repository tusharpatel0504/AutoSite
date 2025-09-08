import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Services from "../components/ui/Services";
import Review from "../components/ui/Review";
import ReplyRates from "../components/ui/ReplyRates";
import LogoCloud from "../components/ui/LogoCloud";
import { GridBackground } from "../components/ui/GridBackground";

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
    <main id="home" className="min-h-screen bg-black text-white">
      <GridBackground />

      <section id="services" className="-pt-20">
        <Services />
      </section>

      <section id="testimonials" className="-pt-20">
        <Review />
      </section>

      <section id="replyrates" className="-pt-20">
        <ReplyRates />
      </section>

      <section id="features" className="-mt-40">
        <LogoCloud />
      </section>
    </main>
  );
}