import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      'service_101grhn',       // Replace with your Service ID
      'template_7ju77we',      // Replace with your Template ID
      {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        message: form.message,
      },
      '1-9QphrTBjdITZNnI'       // Replace with your User ID / Public Key
    ).then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        alert("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
        setIsLoading(false);
      },
      (error) => {
        console.error("Email sending error:", error.text);
        alert("Something went wrong. Please try again.");
        setIsLoading(false);
      }
    );
  };

  return (
    <section className="bg-black min-h-screen py-16 px-6 md:px-12 flex items-start justify-center mt-12">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left - big heading + contact info */}
        <div className="flex flex-col justify-center gap-8">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Got a project?
            <br />
            Let's talk!
          </h1>

          <div className="text-gray-400 space-y-6 max-w-md">
            <div>
              <h3 className="text-xs font-semibold text-gray-300 tracking-widest mb-2">LOCATIONS</h3>
              <p className="text-lg text-gray-200">New York City, New York</p>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-gray-300 tracking-widest mb-2">START A CONVERSATION</h3>
              <a href="mailto:hello@autosite.com" className="text-gray-200 hover:underline">
                hello@autosite.com
              </a>
            </div>

            <p className="text-sm text-gray-500 max-w-sm">
              We typically reply within 1–2 business days. Prefer a call? Add your phone number and best times in the message.
            </p>
          </div>
        </div>

        {/* Right - form */}
        <div>
          <div className="rounded-xl border border-gray-800 bg-gradient-to-b from-[#0a0a0b] to-[#071014] p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-gray-300 block mb-2">Full Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full bg-transparent border-b border-gray-700 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-blue-600 transition"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300 block mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full bg-transparent border-b border-gray-700 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-blue-600 transition"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300 block mb-2">Contact No</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full bg-transparent border-b border-gray-700 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-blue-600 transition"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300 block mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  disabled={isLoading}
                  rows={5}
                  className="w-full bg-transparent border border-gray-800 rounded-md p-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-600 transition"
                  placeholder="Tell us about your project..."
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full ${
                    isLoading ? "bg-blue-800" : "bg-white/10 hover:bg-white/20"
                  } text-gray-100 py-3 rounded-md font-semibold transition`}
                >
                  {isLoading ? "Sending..." : "SUBMIT"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
