import  { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

const services = [
  { title: "Branding", description: "Branding helps your business stand out and build trust with your audience." },
  { title: "Development", description: "Development delivers robust, scalable solutions tailored to your needs." },
  { title: "UI/UX Design", description: "UI/UX Design creates intuitive, beautiful experiences for your users." },
  { title: "Graphic Design", description: "Graphic Design communicates your message visually and memorably." },
  { title: "SEO", description: "SEO improves your visibility and drives organic traffic to your site." },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Default active service

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-black to-black text-white p-8 flex items-center justify-center">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8">
        
        {/* Left Panel */}
        <div>
          <p className="text-sm text-gray-400 uppercase mb-2 tracking-widest">OUR SERVICE</p>
          <h2 className="text-4xl font-extrabold mb-4 leading-tight">
            What <span className="text-green-400">Services</span><br />
            We’re Offering
          </h2>
          <p className="text-gray-400 mb-8 max-w-md">
            We offer services that can help businesses improve their visibility and business reputation online, expand market reach, and increase turnover through effective digital strategies. Following are the services we provide.
          </p>

          <div className="space-y-2">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`group flex items-center justify-between border-b border-gray-700 py-4 cursor-pointer transition-colors duration-200 ${
                  activeIndex === idx ? "bg-white/5" : ""
                }`}
                onClick={() => setActiveIndex(idx)}
              >
                <span className={`text-2xl transition-colors duration-200 ${
                  activeIndex === idx ? "text-white font-semibold" : "text-gray-500"
                }`}>
                  {service.title}
                  {activeIndex === idx && (
                    <span className="text-green-400 ml-1 align-middle text-2xl">.</span>
                  )}
                </span>
                {activeIndex === idx && (
                  <span className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-500 text-green-400 transition-all duration-200">
                    <FiArrowRight size={24} />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - hidden on small screens */}
        <div className="hidden md:flex flex-col justify-center items-end p-4">
          <div className="w-full flex flex-col items-end">
            <h3 className="text-2xl font-bold mb-4 text-right">{services[activeIndex].title}</h3>
            <p className="text-gray-400 text-right max-w-xs">
              {services[activeIndex].description}
            </p>
            <span className="mt-8 flex items-center justify-end w-full">
              <span className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-500 text-white hover:text-green-400 transition-all duration-200">
                <FiArrowRight size={28} />
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
