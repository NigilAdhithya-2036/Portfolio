import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle } from "lucide-react";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: "", email: "", subject: "", message: "" });
        // Auto-hide success alert
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Failed to connect to the server. Please check if the backend is running.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-[#050816] overflow-hidden"
    >
      <div className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] rounded-full bg-accent1/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 select-none">
          <h2 className="text-xs font-mono tracking-widest text-[#00E5FF] uppercase mb-2">
            Get In Touch
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold font-sora tracking-tight">
            Contact <span className="bg-gradient-to-r from-accent1 to-primary bg-clip-text text-transparent">Me</span>
          </h3>
          <div className="w-16 h-[2px] bg-gradient-to-r from-accent1 to-primary mx-auto mt-4" />
        </div>

        {/* Form and Info Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Glass Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-6 md:p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.01] to-[#070b20] relative">
              
              {/* Form Success overlay */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-[#070b20]/95 rounded-3xl z-20 flex flex-col items-center justify-center text-center p-6"
                >
                  <CheckCircle className="w-16 h-16 text-[#00E5FF] mb-4 animate-bounce" />
                  <h4 className="text-xl font-bold font-sora text-white mb-2">
                    Transmission Received!
                  </h4>
                  <p className="text-xs text-white/50 max-w-sm">
                    Thank you, Nigil will decrypt your message and get in touch with you shortly.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Row: Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 focus:border-[#7C3AED] focus:bg-[#0c1230] text-sm text-white focus:outline-none transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] focus:shadow-[0_0_15px_rgba(124,58,237,0.25)]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="your.email@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 focus:border-[#7C3AED] focus:bg-[#0c1230] text-sm text-white focus:outline-none transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] focus:shadow-[0_0_15px_rgba(124,58,237,0.25)]"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 focus:border-[#7C3AED] focus:bg-[#0c1230] text-sm text-white focus:outline-none transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] focus:shadow-[0_0_15px_rgba(124,58,237,0.25)]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Describe your project, timeline, or query..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 focus:border-[#7C3AED] focus:bg-[#0c1230] text-sm text-white focus:outline-none transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] focus:shadow-[0_0_15px_rgba(124,58,237,0.25)] resize-none"
                  />
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent2 hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] text-white font-sora font-semibold text-xs tracking-wider uppercase transition-all duration-300 overflow-hidden flex items-center justify-center gap-2"
                  data-cursor-text="SEND"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Encrypting Transmission...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>

              </form>
            </div>
          </motion.div>

          {/* Right Column: Social coordinates and map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between gap-8"
          >
            {/* Info Grid */}
            <div className="glass-card p-6 md:p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.01] to-[#070b20] space-y-6">
              <h4 className="text-lg font-bold font-sora text-white mb-4">
                Connect Coordinates
              </h4>

              <div className="space-y-4">
                <a
                  href="mailto:nigiladhi2036@gmail.com" // Updated email
                  className="flex items-center space-x-4 p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-white/30 block uppercase tracking-wider">Email</span>
                    <span className="text-xs text-white/80 font-medium font-mono">nigiladhi2036@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/nigil-adhithya-c-m-181296293" // Updated LinkedIn
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent1/10 border border-accent1/20 flex items-center justify-center text-accent1">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-white/30 block uppercase tracking-wider">LinkedIn</span>
                    <span className="text-xs text-white/80 font-medium font-mono">linkedin.com/in/nigil-adhithya-c-m-181296293</span>
                  </div>
                </a>

                <a
                  href="https://github.com/NigilAdhithya-2036" // Updated GitHub
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent2/10 border border-accent2/20 flex items-center justify-center text-accent2">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-white/30 block uppercase tracking-wider">GitHub</span>
                    <span className="text-xs text-white/80 font-medium font-mono">github.com/NigilAdhithya-2036</span>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-3">
                  <div className="w-10 h-10 rounded-lg bg-accent3/10 border border-accent3/20 flex items-center justify-center text-accent3">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-white/30 block uppercase tracking-wider">Location</span>
                    <span className="text-xs text-white/80 font-medium">Namakkal, Tamil Nadu</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Google Map widget */}
            <div className="h-64 rounded-3xl overflow-hidden border border-white/5 relative shadow-2xl">
              {/* Map container styled to dark look */}
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62665.17646141381!2d78.14728564038084!3d11.218528956976662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babcf407671b2d7%3A0x6e9a6c117072c476!2sNamakkal%2C+Tamil+Nadu!5e0!3m2!1sen!2sin!4v1721380000000"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "invert(90%) hue-rotate(180deg) brightness(85%) contrast(90%)",
                }}
                allowFullScreen={false}
                loading="lazy"
              />
              {/* Cover layout */}
              <div className="absolute inset-0 bg-[#050816]/10 pointer-events-none" />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
