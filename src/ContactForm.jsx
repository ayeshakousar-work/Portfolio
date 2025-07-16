const ContactForm = () => (
  <div className="max-w-xl mx-auto relative p-0 rounded-3xl">
    {/* Neon glow border using pseudo-container */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#747777] to-[#767b7c] blur-[6px] opacity-60 z-[-1]" />

    <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/20">
      <h2 className="text-3xl font-semibold text-white mb-6 text-center tracking-tight">
        Let's Talk
      </h2>

      <div className="grid grid-cols-1 gap-5">
        <input
          type="text"
          placeholder="Your Name"
          className="bg-white/10 text-white placeholder-white/60 p-4 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#b8860b] transition-all"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="bg-white/10 text-white placeholder-white/60 p-4 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#b8860b] transition-all"
        />
        <input
          type="text"
          placeholder="Subject"
          className="bg-white/10 text-white placeholder-white/60 p-4 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#b8860b] transition-all"
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="bg-white/10 text-white placeholder-white/60 p-4 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#b8860b] transition-all"
        ></textarea>
      </div>

      <button className="mt-6 w-full py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20">
        Send Message
      </button>
    </div>
  </div>
);

export default ContactForm;
