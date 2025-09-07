
import { FaLinkedin } from "react-icons/fa";

const Personal = () => {
  return (
    <section className="bg-black min-h-screen py-16 px-4 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-2 leading-tight">
        Personalize at scale
        <br />in seconds
      </h2>
      <p className="text-gray-300 text-center mb-10 text-base sm:text-lg max-w-xl">
        Generate highly personalized icebreakers and complete sequences based on
        your prospects' information.
      </p>

      {/* Cards Layout */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl gap-8">
        {/* Left Stack */}
        <div className="relative w-full max-w-sm h-[340px] flex-shrink-0">
          {/* Bottom Small Card */}
          <div className="absolute left-0 top-16 w-[220px] h-[120px] bg-[#18181b] rounded-xl border border-gray-700 shadow-md opacity-60 z-10" />
          {/* Middle Big Card */}
          <div className="absolute left-4 top-8 w-[320px] h-[180px] bg-[#18181b] rounded-xl border border-gray-700 shadow-lg opacity-80 z-20" />
          {/* Top Active Card */}
          <div className="absolute left-0 top-0 w-full bg-[#18181b] rounded-xl border border-gray-700 p-6 shadow-xl z-30">
            {/* Profile */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Kévin Moënne-Loccoz"
                className="w-14 h-14 rounded-full object-cover border-2 border-gray-700 filter grayscale"
              />
              <div>
                <div className="text-white font-semibold text-lg">
                  Kévin Moënne-Loccoz
                </div>
                <div className="text-gray-400 text-sm">500+ connections</div>
              </div>
              <span className="ml-auto bg-black rounded-full p-2 border border-gray-700">
                <FaLinkedin className="text-white text-xl" />
              </span>
            </div>
            <button className="bg-white hover:bg-gray-300 text-black font-semibold rounded-lg px-4 py-2 mb-4 w-full transition">
              <span className="inline-block align-middle">🔗</span> Connect
            </button>
            {/* About */}
            <div className="bg-[#23232a] rounded-lg p-3 mb-4">
              <div className="text-gray-400 text-xs mb-1">About</div>
              <div className="text-gray-200 text-sm">
                Tell me a time you implement{" "}
                <span className="underline text-white cursor-pointer">
                  see more...
                </span>
              </div>
            </div>
            {/* Company */}
            <div className="flex items-center gap-3 bg-[#23232a] rounded-lg p-3">
              <div className="bg-black rounded-lg p-2 border border-gray-700">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <rect width="24" height="24" rx="6" fill="#fff" />
                  <text
                    x="12"
                    y="16"
                    textAnchor="middle"
                    fontSize="12"
                    fill="#222"
                    fontWeight="bold"
                  >
                    lemlist
                  </text>
                </svg>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">lemlist</div>
                <div className="text-gray-400 text-xs">Head of Growth</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-[#18181b] rounded-xl border border-gray-700 p-6 w-full max-w-md shadow-lg flex flex-col justify-between">
          <div>
            <div className="mb-2">
              <span className="bg-white text-black px-2 py-1 rounded font-bold text-sm mr-2">
                {'Jhon'}
              </span>
              <span className="bg-white text-black px-2 py-1 rounded font-bold text-sm">
                {'Deo'}
              </span>
            </div>
            <p className="text-gray-300 text-sm mb-2">
              ^ That's an icebreaker our AI wrote for you. Fully automated.
            </p>
            <p className="text-gray-400 text-sm mb-2">
              The top cause of low reply rates is a lack of personalisation,
              leading to fewer SQLs.
            </p>
            <p className="text-gray-400 text-sm mb-2">
              Your team could automate personalised icebreakers + subject lines to
              100+ leads per day.
            </p>
            <p className="text-gray-400 text-sm mb-2">
              Personalised enough for your team?
            </p>
            <p className="text-gray-400 text-sm">
              PS: It gets even better when it's linked to the rest of your email.
            </p>
          </div>
          <button className="bg-white text-black font-semibold rounded-lg px-4 py-2 mt-6 self-end transition hover:bg-gray-300">
            Send email
          </button>
        </div>
      </div>
    </section>
  );
};

export default Personal;