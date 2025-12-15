import React, { useEffect, useRef, useState } from "react";

const reviews = [
  {
    text: "Autosite's AI chatbots have revolutionized our customer service. We've seen a 40% reduction in response time and 95% customer satisfaction rate.",
    name: "Suyash Ranjan",
    role: "Founder",
    company: "Mercato Agency",
    initials: "SJ",
    imageUrl: "https://cgahzcwiqcblmkwblqaj.supabase.co/storage/v1/object/public/autosite%20data/suyash.png",
    stars: 5,
  },
  {
    text: "The workflow automation has streamlined our processes incredibly. What used to take hours now happens in minutes with their intelligent systems.",
    name: "Michael Beares",
    role: "Founder & CEO",
    company: "Clutch.co",
    initials: "MB",
    imageUrl: "https://cgahzcwiqcblmkwblqaj.supabase.co/storage/v1/object/public/autosite%20data/Clutch.co.jpg",
    stars: 5,
  },
  {
    text: "Their fashion industry chatbot understands our customers' needs perfectly. Sales conversions have increased by 40% since implementation.",
    name: "Shaan Shah",
    role: "Co-Founder",
    company: "FREAKINS",
    initials: "PS",
    imageUrl: "https://cgahzcwiqcblmkwblqaj.supabase.co/storage/v1/object/public/autosite%20data/Freakins.jpg",
    stars: 5,
  },
  {
    text: "Awesome AI solutions! The integration was seamless and the results are good. Highly recommend Autosite for any startup.",
    name: "Tanmay Kumar",
    role: "CEO",
    company: "sellular",
    initials: "TK",
    imageUrl: "https://cgahzcwiqcblmkwblqaj.supabase.co/storage/v1/object/public/autosite%20data/sellular.jpg",
    stars: 5,
  },
  {
    text: "The Email automation system has optimized our communication workflows. Automatic Emailing with follow-up is now 70% more efficient.",
    name: "Kushagra Swami",
    role: "Founder",
    company: "Identityforgestidio",
    initials: "KS",
    imageUrl: "https://cgahzcwiqcblmkwblqaj.supabase.co/storage/v1/object/public/autosite%20data/kushagra.jpg",
    stars: 5,
  },
  {
    text: "The AI Chatbot you provided has transtraform the student engagement on our platform. It's like having a personal teacher available 24/7. also solve any doubt related to studies and courses purchase",
    name: "Abhijeet Suman",
    role: "Founder",
    company: "siksha.store",
    initials: "KS",
    imageUrl: "https://cgahzcwiqcblmkwblqaj.supabase.co/storage/v1/object/public/ahhijeet/abhijeet.jpg",
    stars: 5,
  },
];

export default function Review() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Vignette Effect */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_50%,black)] pointer-events-none"></div>
      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-4">
          What Our Users Are Saying
        </h2>
        <p className="text-lg text-gray-300 text-center mb-12">
          Don't just take our word for it. Here's what{" "}
          <span className="text-blue-400 font-semibold">real developers</span> are saying about{" "}
          <span className="text-blue-400 font-semibold">Autosite</span>
        </p>

        {/* Scrolling Container with Fade Effects */}
        <div className="relative">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          
          {/* Right Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Track */}
          <div 
            ref={scrollRef}
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className={`flex gap-6 animate-scroll ${isPaused ? 'paused' : ''}`}>
              {/* Duplicate reviews for infinite scroll effect */}
              {[...reviews, ...reviews].map((review, idx) => (
                <article
                  key={idx}
                  className="relative bg-[#18181b] rounded-xl p-6 flex-shrink-0 w-[400px] shadow-lg transition-transform duration-300 overflow-hidden"
                  aria-label={`Review by ${review.name}`}
                >
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-xl pointer-events-none">
                    <div className="absolute inset-0 rounded-xl border border-gray-700"></div>
                    <div className="absolute inset-0 rounded-xl border border-gray-400 animate-border-glow"></div>
                  </div>
                  
                  <div className="relative z-10">
                    {/* Header with Image and Name */}
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src={review.imageUrl}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="flex-1">
                        <div className="text-white font-semibold">{review.name}</div>
                        <div className="text-gray-400 text-sm">{review.role}</div>
                        <div className="text-blue-400 text-sm font-medium">{review.company}</div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-200 text-base leading-relaxed">"{review.text}"</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Animations */}
      <style>{`
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
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .paused {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
