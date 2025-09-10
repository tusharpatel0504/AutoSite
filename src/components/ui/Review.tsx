import React, { useEffect, useRef, useState } from "react";
import { BackgroundBeams } from "./background-beams";
import { cn } from "../../lib/utils";
const reviews = [
  {
    text: (
      <>
        NexaUI has completely transformed our development workflow.{" "}
        <span className="bg-blue-700/80 text-white px-1 rounded font-bold">
          The component system saved us weeks of custom coding and design work.
        </span>{" "}
        Our team can now focus on business logic instead of UI details.
      </>
    ),
    name: "Jordan Hayes",
    role: "CTO at Quantum Innovations",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    stars: 5,
  },
  {
    text: (
      <>
        NexaUI has the perfect balance of flexibility and structure.{" "}
        <span className="bg-blue-700/80 text-white px-1 rounded font-bold">
          We can maintain brand consistency while still creating unique experiences.
        </span>{" "}
        Our clients are consistently impressed with the results.
      </>
    ),
    name: "Leo Tanaka",
    role: "Creative Technologist at Prism Agency",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    stars: 5,
  },
  {
    text: (
      <>
        I was skeptical at first, but NexaUI proved me wrong.{" "}
        <span className="bg-blue-700/80 text-white px-1 rounded font-bold">
          The accessibility features and documentation are top-notch.
        </span>{" "}
        Highly recommended!
      </>
    ),
    name: "Alex Morgan",
    role: "Frontend Engineer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    stars: 5,
  },
  {
    text: (
      <>
        Our conversion rates have increased by 28% since implementing NexaUI.{" "}
        <span className="bg-blue-700/80 text-white px-1 rounded font-bold">
          The checkout flow components are optimized for both desktop and mobile.
        </span>{" "}
        The dark mode support was also a huge hit with our customers.
      </>
    ),
    name: "Sophia Martinez",
    role: "E-commerce Director at StyleHub",
    avatar: "https://randomuser.me/api/portraits/women/89.jpg",
    stars: 5,
  },
  {
    text: (
      <>
        The team support and regular updates make working with NexaUI a breeze.{" "}
        <span className="bg-blue-700/80 text-white px-1 rounded font-bold">
          I feel confident knowing the components are always improving.
        </span>{" "}
        It’s a game-changer.
      </>
    ),
    name: "Maya Patel",
    role: "UI Designer",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    stars: 5,
  },
];

export default function Review() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  const [perPage, setPerPage] = useState<number>(() => {
    const w = typeof window !== "undefined" ? window.innerWidth : 1200;
    if (w >= 1024) return 3;
    if (w >= 768) return 2;
    return 1;
  });
  const totalPages = Math.max(1, Math.ceil(reviews.length / perPage));
  void totalPages;
  const [page, setPage] = useState(0);

  useEffect(() => {
    function onResize() {
      const w = window.innerWidth;
      const newPer = w >= 1024 ? 3 : w >= 768 ? 2 : 1;
      setPerPage(newPer);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // ensure page is valid when perPage changes
  useEffect(() => {
    const newTotal = Math.max(1, Math.ceil(reviews.length / perPage));
    if (page >= newTotal) setPage(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perPage]);

  const goNext = () =>
    setPage((p) => (p + 1) % Math.max(1, Math.ceil(reviews.length / perPage)));
  const goPrev = () =>
    setPage(
      (p) =>
        (p - 1 + Math.max(1, Math.ceil(reviews.length / perPage))) %
        Math.max(1, Math.ceil(reviews.length / perPage))
    );

  const startIndex = page * perPage;
  const visible = Array.from({ length: perPage }).map((_, i) => reviews[(startIndex + i) % reviews.length]);

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowLeft") goPrev();
    if (e.key === "ArrowRight") goNext();
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }
  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current == null) return;
    const endX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - endX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  }

  return (
    <section className="relative bg-black py-20 overflow-hidden">
      
      <div className="pointer-events-none absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black via-black/80 to-transparent z-10" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
      <BackgroundBeams/>
      <div className="max-w-6xl mx-auto px-4 relative z-20">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-4">
          What Our Users Are Saying
        </h2>
        <p className="text-lg text-gray-300 text-center mb-8">
          Don't just take our word for it. Here's what{" "}
          <span className="text-blue-400 font-semibold">real developers</span> are saying about{" "}
          <span className="text-blue-400 font-semibold">NexaUI</span>
        </p>

        <div className="flex items-center justify-center gap-3 mb-6">
          <button
            onClick={goPrev}
            aria-label="Previous reviews"
            className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            ←
          </button>
          <div className="text-sm text-gray-400">
            Page {page + 1} / {Math.max(1, Math.ceil(reviews.length / perPage))}
          </div>
          <button
            onClick={goNext}
            aria-label="Next reviews"
            className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            →
          </button>
        </div>

        <div
          ref={containerRef}
          tabIndex={0}
          onKeyDown={onKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          aria-roledescription="carousel"
          aria-label="Customer reviews"
        >
          <div
            ref={trackRef}
            className="grid gap-6"
            style={{
              gridTemplateColumns: `repeat(${perPage}, minmax(0, 1fr))`,
            }}
          >
            {visible.map((review, idx) => (
              <article
                key={idx}
                className="bg-[#18181b] rounded-xl border border-gray-800 p-6 flex flex-col justify-between shadow-lg transition-transform duration-300 hover:-translate-y-1"
                aria-label={`Review by ${review.name}, ${review.role}`}
              >
                <p className="text-gray-200 text-lg mb-4">{review.text}</p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="flex gap-1 text-blue-400" aria-hidden>
                    {Array(review.stars)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          width="18"
                          height="18"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          className="shrink-0"
                        >
                          <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                        </svg>
                      ))}
                  </div>
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full border-2 border-white object-cover"
                    loading="lazy"
                  />
                  <div>
                    <div className="text-white font-semibold">{review.name}</div>
                    <div className="text-gray-400 text-sm">{review.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6" role="tablist" aria-label="Review pages">
          {Array.from({ length: Math.max(1, Math.ceil(reviews.length / perPage)) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to page ${i + 1}`}
              aria-pressed={i === page}
              className={`w-3 h-3 rounded-full transition-all ${
                i === page ? "bg-blue-500" : "bg-gray-700 hover:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
