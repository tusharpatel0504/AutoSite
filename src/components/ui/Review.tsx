import React, { useEffect, useRef, useState } from "react";

const reviews = [
  {
    text: "Autosite's AI chatbots have revolutionized our customer service. We've seen a 40% reduction in response time and 95% customer satisfaction rate.",
    name: "Suyash Ranjan",
    role: "Founder",
    company: "Mercato Agency",
    initials: "SJ",
    stars: 5,
  },
  {
    text: "The workflow automation has streamlined our processes incredibly. What used to take hours now happens in minutes with their intelligent systems.",
    name: "Michael Beares",
    role: "Founder & CEO",
    company: "Clutch.co",
    initials: "MB",
    stars: 5,
  },
  {
    text: "Their fashion industry chatbot understands our customers' needs perfectly. Sales conversions have increased by 40% since implementation.",
    name: "Puneet Anil Sehgal",
    role: "Co-Founder",
    company: "Freakins",
    initials: "PS",
    stars: 5,
  },
  {
    text: "Awesome AI solutions! The integration was seamless and the results are good. Highly recommend Autosite for any startup.",
    name: "Tanmay Kumar",
    role: "CEO",
    company: "sellular",
    initials: "TK",
    stars: 5,
  },
  {
    text: "The Email automation system has optimized our communication workflows. Automatic Emailing with follow-up is now 70% more efficient.",
    name: "Kushagra Swami",
    role: "Founder",
    company: "Identityforgestidio",
    initials: "KS",
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
    <section className="relative py-20 overflow-hidden mt-20">
      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-4">
          What Our Users Are Saying
        </h2>
        <p className="text-lg text-gray-300 text-center mb-8">
          Don't just take our word for it. Here's what{" "}
          <span className="text-blue-400 font-semibold">real developers</span> are saying about{" "}
          <span className="text-blue-400 font-semibold">Autosite</span>
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
                className="bg-[#18181b] rounded-xl border border-gray-800 p-6 flex flex-col justify-between shadow-lg transition-transform duration-300 hover:-translate-y-1 relative"
                aria-label={`Review by ${review.name}`}
              >
                <div className="flex gap-1 text-yellow-400 mb-4" aria-hidden>
                  {Array(review.stars)
                    .fill(0)
                    .map((_, i) => (
                      <svg
                        key={i}
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        className="shrink-0"
                      >
                        <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                      </svg>
                    ))}
                </div>
                <p className="text-gray-200 text-lg mb-6 flex-grow">"{review.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                    {review.initials}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{review.name}</div>
                    <div className="text-gray-400 text-sm">{review.role}</div>
                    <div className="text-blue-400 text-sm font-medium">{review.company}</div>
                  </div>
                </div>
                <svg
                  className="absolute top-4 right-4 w-16 h-16 text-gray-700/50"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.333 22.667C7.333 22.667 5.667 21 5.667 19V13C5.667 11 7.333 9.333 9.333 9.333H14L12.333 14.667H9.333V19H12.333L14 22.667H9.333ZM22.667 22.667C20.667 22.667 19 21 19 19V13C19 11 20.667 9.333 22.667 9.333H27.333L25.667 14.667H22.667V19H25.667L27.333 22.667H22.667Z" />
                </svg>
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
}
