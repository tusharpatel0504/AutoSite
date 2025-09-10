import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Review from "./ui/Review";
import ReplyRates from "./ui/ReplyRates";
import LogoCloud from "./ui/LogoCloud";
import { GridBackground } from "./ui/GridBackground";
import Services from "./Services";


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
      <section
        id="services"
        className="
  -mt-16 -mb-8
  sm:-mt-40 sm:-mb-20
  md:-mt-24 md:-mb-12
  lg:-mt-28 lg:-mb-14
  xl:-mt-32 xl:-mb-16
"
      >
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