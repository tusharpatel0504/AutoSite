export default function ReplyRates() {
  return (
    <section className="bg-black min-h-screen py-12 px-4 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-300 text-center mb-4 leading-snug">
        3x your<br />reply rates
      </h2>
      <p className="text-gray-400 text-center mb-10 max-w-2xl text-base sm:text-lg">
        Automatically generate high-quality sequences uniquely crafted for your value proposition and your target prospects.
      </p>

      {/* Results Card */}
      <div className="w-full max-w-2xl bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] rounded-xl p-6 sm:p-8 shadow-2xl border border-gray-800">
        <h3 className="text-gray-300 font-semibold text-lg mb-6">Results from outreach</h3>
        <div className="flex flex-col gap-4">
          {/* Without AI */}
          <div className="flex items-center gap-4">
            <div className="bg-[#7c232b] border border-[#c57690] text-white px-4 py-2 rounded-lg text-sm sm:text-base shadow-lg hover:shadow-[#c57690]/50 transition-shadow">
              without AI
            </div>
            <div className="text-gray-300 font-bold text-base sm:text-lg">
              5% reply rate
            </div>
          </div>

          {/* With AI */}
          <div className="flex items-center gap-4">
            <div className="bg-[#2453c7] border border-blue-500 text-white px-4 py-2 rounded-lg text-sm sm:text-base shadow-lg hover:shadow-blue-500/50 transition-shadow flex-1">
              with AI
            </div>
            <div className="text-gray-300 font-bold text-base sm:text-lg">
              15% reply rate
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="flex items-center gap-4 mt-8 max-w-2xl text-gray-400">
        <img
          src="https://randomuser.me/api/portraits/men/44.jpg"
          alt="Arnaud Renoux"
          className="w-12 h-12 rounded-full border-2 border-gray-700"
        />
        <div>
          <div className="text-white font-semibold">Arnaud Renoux</div>
          <div className="text-sm sm:text-base max-w-md">
            "I personally find the results quite impressive. I only spend a little bit of time to tweak the final copy."
          </div>
        </div>
      </div>
    </section>
  );
}
