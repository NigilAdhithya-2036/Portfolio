import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Briefcase, Code, BookOpen } from "lucide-react";

// Hook for incremental number counter
const AnimatedCounter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

const About: React.FC = () => {
  const [profileExists, setProfileExists] = useState(false);

  useEffect(() => {
    // Check if user has uploaded profile picture
    const img = new Image();
    img.src = "/profile.jpg";
    img.onload = () => setProfileExists(true);
    img.onerror = () => setProfileExists(false);
  }, []);

  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-[#050816] overflow-hidden"
    >
      <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] rounded-full bg-accent2/10 blur-[80px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 select-none">
          <h2 className="text-xs font-mono tracking-widest text-primary uppercase mb-2">
            Discover
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold font-sora tracking-tight">
            About <span className="bg-gradient-to-r from-primary to-accent1 bg-clip-text text-transparent">Me</span>
          </h3>
          <div className="w-16 h-[2px] bg-gradient-to-r from-primary to-accent1 mx-auto mt-4" />
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Glass Profile Frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-[300px] h-[360px] md:w-[340px] md:h-[410px] rounded-2xl p-[1px] bg-gradient-to-tr from-primary via-accent2 to-accent1 shadow-[0_0_30px_rgba(124,58,237,0.2)] group overflow-hidden">
              {/* Card Body */}
              <div className="absolute inset-[2px] bg-[#070b1e] rounded-2xl overflow-hidden flex items-center justify-center">
                {profileExists ? (
                  <img
                    src="/profile.jpg"
                    alt="Nigil Adhithya C M"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  /* Animated futuristic default SVG if user image not loaded */
                  <svg
                    className="w-40 h-40 text-primary/40 group-hover:text-accent1/60 transition-colors duration-500"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="50" cy="40" r="18" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="animate-[spin_40s_linear_infinite]" />
                    <circle cx="50" cy="40" r="12" stroke="currentColor" strokeWidth="1" />
                    <circle cx="50" cy="40" r="4" fill="currentColor" className="animate-pulse" />
                    <path d="M20 85C20 68.4315 33.4315 55 50 55C66.5685 55 80 68.4315 80 85" stroke="currentColor" strokeWidth="2" strokeDasharray="6 3" />
                    {/* Node points */}
                    <circle cx="28" cy="75" r="3" fill="#00E5FF" />
                    <circle cx="72" cy="75" r="3" fill="#7C3AED" />
                    <line x1="50" y1="55" x2="28" y2="75" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="50" y1="55" x2="72" y2="75" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                  </svg>
                )}

                {/* Cyber Scanner Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-darkBg/90 via-transparent to-transparent opacity-60" />
                <div className="absolute top-0 left-0 w-full h-[2px] bg-accent1 shadow-[0_0_8px_#00E5FF] animate-[scan_4s_linear_infinite] opacity-30" />
              </div>

              {/* Glowing Ambient light behind frame */}
              <div className="absolute -inset-10 bg-gradient-to-tr from-primary to-accent1 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 -z-10" />
            </div>
          </motion.div>

          {/* Right Column: About Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h4 className="text-xl md:text-2xl font-bold font-sora mb-6">
              Engineering AI-Powered Applications & Next-Gen Interfaces
            </h4>
            
            <p className="font-inter text-sm md:text-base text-white/70 leading-relaxed mb-6">
              I am a final-year **Computer and Communication Engineering** student passionate about constructing cutting-edge full-stack systems and machine learning pipelines. My technical philosophy merges robust architecture with immersive, visual UI designs.
            </p>

            <p className="font-inter text-sm md:text-base text-white/70 leading-relaxed mb-8">
              As an **IEEE Published Researcher**, my academic work targets security domains including neural network architectures for real-time fake voice detection. I thrive on developing modular software stacks and implementing intelligent REST interfaces.
            </p>

            {/* Structured highlight tags */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                  <Code className="w-4 h-4" />
                </div>
                <span className="text-xs md:text-sm text-white/80 font-medium">Passionate Full Stack Dev</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-accent1/20 flex items-center justify-center text-accent1">
                  <BookOpen className="w-4 h-4" />
                </div>
                <span className="text-xs md:text-sm text-white/80 font-medium">IEEE Published Researcher</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-accent2/20 flex items-center justify-center text-accent2">
                  <Briefcase className="w-4 h-4" />
                </div>
                <span className="text-xs md:text-sm text-white/80 font-medium">Angular & Node.js Expert</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#A855F7]/20 flex items-center justify-center text-[#A855F7]">
                  <Award className="w-4 h-4" />
                </div>
                <span className="text-xs md:text-sm text-white/80 font-medium">Seeking SDE Roles</span>
              </div>
            </div>

            {/* Counters Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-8">
              
              {/* Projects */}
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-extrabold font-sora text-accent1 text-glow-accent1 mb-1">
                  <AnimatedCounter value={4} />+
                </div>
                <span className="text-xs text-white/50 tracking-wider uppercase font-mono">
                  Projects Done
                </span>
              </div>

              {/* Internships */}
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-extrabold font-sora text-primary text-glow-primary mb-1">
                  <AnimatedCounter value={2} />
                </div>
                <span className="text-xs text-white/50 tracking-wider uppercase font-mono">
                  Internships
                </span>
              </div>

              {/* Technologies */}
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-extrabold font-sora text-accent2 text-glow-accent2 mb-1">
                  <AnimatedCounter value={15} />+
                </div>
                <span className="text-xs text-white/50 tracking-wider uppercase font-mono">
                  Tech Mastery
                </span>
              </div>

              {/* Publications */}
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-extrabold font-sora text-white mb-1">
                  <AnimatedCounter value={1} />
                </div>
                <span className="text-xs text-white/50 tracking-wider uppercase font-mono">
                  IEEE Papers
                </span>
              </div>

            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
