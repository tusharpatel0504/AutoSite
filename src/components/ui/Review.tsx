

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
];

const Review = () => {
  return (
    <section className="relative bg-black py-20 overflow-hidden">
      {/* Top Black Gradient */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black via-black/80 to-transparent z-10" />
      {/* Bottom Black Gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />

      <div className="max-w-4xl mx-auto px-4 relative z-20">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-4">
          What Our Users Are Saying
        </h2>
        <p className="text-lg text-gray-300 text-center mb-8">
          Don't just take our word for it. Here's what{" "}
          <span className="text-blue-400 font-semibold">real developers</span> are saying about{" "}
          <span className="text-blue-400 font-semibold">NexaUI</span>
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-[#18181b] rounded-xl border border-gray-800 p-6 flex flex-col justify-between shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-gray-200 text-lg mb-4">{review.text}</p>
              <div className="flex items-center gap-3 mt-4">
                <div className="flex gap-1 text-blue-400">
                  {Array(review.stars)
                    .fill(0)
                    .map((_, i) => (
                      <svg key={i} width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                      </svg>
                    ))}
                </div>
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <div>
                  <div className="text-white font-semibold">{review.name}</div>
                  <div className="text-gray-400 text-sm">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
