import { SparklesCore } from '../ui/Sparkles';
import { InteractiveHoverButton } from './InteractiveHoverButton ';

export default function Page() {
  const handleBookClick = () => {
    window.open("https://calendly.com/guptaritik67856/30min?month=2025-09", "_blank");
  };

  return (
    <div className="min-h-screen w-full overflow-hidden bg-black">
      
      <div className="mx-auto mt-48 w-full max-w-4xl px-4">
        <div className="text-center">
          <span className="block text-3xl sm:text-5xl font-extrabold text-white mb-2">
            Why Choose Autosite
          </span>
          <span className="block text-base sm:text-lg text-white font-medium mb-10">
            Experience the power of next-generation AI automation with features designed for modern businesses.
          </span>
        </div>

        {/* Stats Section */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Stat 1 */}
          <div className="bg-[#19202c] rounded-xl border border-gray-700 flex flex-col items-center justify-center py-8 px-4">
            <div className="mb-4 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-black">
              {/* Lightning Icon */}
              <svg width="32" height="32" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">30+</div>
            <div className="text-gray-300 text-base sm:text-lg text-center">Project Delivered</div>
          </div>
          {/* Stat 2 */}
          <div className="bg-[#19202c] rounded-xl border border-gray-700 flex flex-col items-center justify-center py-8 px-4">
            <div className="mb-4 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-black">
              {/* Users Icon */}
              <svg width="32" height="32" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">70+</div>
            <div className="text-gray-300 text-base sm:text-lg text-center">Happy clients</div>
          </div>
          {/* Stat 3 */}
          <div className="bg-[#19202c] rounded-xl border border-gray-700 flex flex-col items-center justify-center py-8 px-4">
            <div className="mb-4 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-black">
              {/* Chart Icon */}
              <svg width="32" height="32" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <line x1="12" y1="20" x2="12" y2="10"/>
                <line x1="18" y1="20" x2="18" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="16"/>
              </svg>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">97%</div>
            <div className="text-gray-300 text-base sm:text-lg text-center">Satisfaction Rate</div>
          </div>
        </div>
      </div>
     
      <div className="relative -mt-32 h-96 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#fff,transparent_70%)] before:opacity-40 after:absolute after:top-1/2 after:-left-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#c5769066] after:bg-zinc-900">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          particleDensity={300}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
        
      </div>
        <div className='flex justify-center mb-20 -mt-24'>
          <InteractiveHoverButton onClick={handleBookClick}>
            Book appointment
          </InteractiveHoverButton>
        </div>
    </div>
  );
}