import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 w-full mt-10">
      <div className=" mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4 ">
              {/* Replace SVG with your logo */}
              <img src="/LOGO.webp" alt="Autosite Logo" className="h-10 w-auto" />
              <span className="text-2xl font-bold text-white">Autosite</span>
            </div>
            <p className="mb-6 text-base">
              Transforming businesses with intelligent AI solutions, automation, and cutting-edge technology.
            </p>
            <div className="flex gap-6 mt-4 text-xl">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition">Chatbot Development</a></li>
              <li><a href="#" className="hover:text-white transition">Workflow Automation</a></li>
              <li><a href="#" className="hover:text-white transition">Customer Support AI</a></li>
            </ul>
          </div>
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Newsletter</h3>
            <p className="mb-4">Stay updated with our latest AI innovations.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#181e2a] border border-gray-700 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:border-blue-500 w-full"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-white to-white rounded-lg px-4 py-2 text-black flex items-center justify-center"
              >
                <FiMail size={22} />
              </button>
            </form>
          </div>
        </div>
        <hr className="border-gray-700 mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            © 2024 Autosite. All rights reserved.
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-center md:text-right">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}