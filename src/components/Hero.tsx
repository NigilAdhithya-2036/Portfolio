import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Send, Volume2, VolumeX } from "lucide-react";

interface HeroProps {
  onScrollToSection: (id: string) => void;
  videoMuted: boolean;
  onToggleMute: () => void;
}

const roles = [
  "Full Stack Developer",
  "AI Developer",
  "Angular Developer",
  "IEEE Published Researcher",
  "Node.js Developer",
];

const Hero: React.FC<HeroProps> = ({ onScrollToSection, videoMuted, onToggleMute }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullRole = roles[roleIndex];
    let timer: number;

    if (isDeleting) {
      // Deleting speed
      timer = window.setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, 35);
    } else {
      // Typing speed
      timer = window.setTimeout(() => {
        setDisplayedText((prev) => currentFullRole.slice(0, prev.length + 1));
      }, 70);
    }

    // Switch states based on completion
    if (!isDeleting && displayedText === currentFullRole) {
      // Pause before starting deletion
      timer = window.setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 lg:py-0 px-6 overflow-hidden"
    >
      {/* Moving Blurred Blobs matching image highlights */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-primary/15 blur-[100px] animate-float" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-accent1/10 blur-[120px] animate-pulse-slow" />
      <div className="absolute top-[40%] right-[30%] w-[250px] h-[250px] rounded-full bg-accent2/10 blur-[100px] animate-float" />
      
      {/* Background Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.06] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 w-full select-none">
        
        {/* Left Column: Bio & Text coordinates */}
        <div className="lg:col-span-8 text-center lg:text-left flex flex-col items-center lg:items-start w-full">
          {/* Hello Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-accent1 animate-pulse" />
            <span className="text-xs font-sora font-semibold uppercase tracking-widest text-accent1 text-glow-accent1">
              Welcome to the Future
            </span>
          </motion.div>

          {/* Large introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-sora font-light text-white/90 text-2xl md:text-3xl mb-2"
          >
            Hello, I'm
          </motion.div>

          {/* Main Name Heading (Adjusted gradient to match red-orange-purple image tones) */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-[#E53935] to-[#FF9100] bg-clip-text text-transparent drop-shadow-2xl animate-pulse-glow"
          >
            Nigil Adhithya C M
          </motion.h1>

          {/* Typing Roles Container (Accent color modified) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-10 md:h-12 flex items-center lg:justify-start justify-center mb-8"
          >
            <span className="font-mono text-lg md:text-3xl text-accent1 text-glow-accent1 font-bold">
              {displayedText}
            </span>
            <span className="w-[3px] h-6 md:h-8 bg-accent1 ml-1 animate-[blink_1s_step-end_infinite]" />
          </motion.div>

          {/* Bio Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl font-inter text-sm md:text-base text-white/60 leading-relaxed mb-10 text-center lg:text-left"
          >
            Final Year Computer and Communication Engineering Student passionate about AI-powered software, scalable web applications and modern UI/UX.
          </motion.p>

          {/* Action Buttons (Glowing highlights modified) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            {/* View Projects */}
            <button
              onClick={() => onScrollToSection("projects")}
              className="group relative w-full sm:w-auto px-8 py-4 rounded-xl font-sora font-semibold text-sm tracking-wide bg-gradient-to-r from-primary to-accent1 text-white overflow-hidden shadow-[0_0_20px_rgba(229,57,53,0.3)] hover:shadow-[0_0_30px_rgba(229,57,53,0.6)] transition-all duration-300"
              data-cursor-text="EXPLORE"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="flex items-center justify-center gap-2">
                View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            {/* Download Resume */}
            <a
              href="/resume.pdf"
              download
              className="group w-full sm:w-auto px-8 py-4 rounded-xl font-sora font-semibold text-sm tracking-wide bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              data-cursor-text="DOWNLOAD"
            >
              Download Resume <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            {/* Hire Me */}
            <button
              onClick={() => onScrollToSection("contact")}
              className="group w-full sm:w-auto px-8 py-4 rounded-xl font-sora font-semibold text-sm tracking-wide bg-transparent text-accent1 border border-accent1/30 hover:border-accent1 hover:bg-accent1/5 shadow-[0_0_15px_rgba(255,145,0,0.05)] hover:shadow-[0_0_20px_rgba(255,145,0,0.25)] transition-all duration-300 flex items-center justify-center gap-2"
              data-cursor-text="TALK"
            >
              Hire Me <Send className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>

      </div>

      {/* Floating Mute/Unmute Control for background video */}
      <div className="absolute bottom-8 right-8 z-30">
        <button
          onClick={onToggleMute}
          className="p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/10 hover:border-white/30 backdrop-blur-md transition-all duration-300 shadow-lg cursor-pointer flex items-center justify-center animate-pulse"
          title={videoMuted ? "Unmute Background" : "Mute Background"}
        >
          {videoMuted ? (
            <VolumeX className="w-5 h-5 text-accent1" />
          ) : (
            <Volume2 className="w-5 h-5 text-green-400" />
          )}
        </button>
      </div>

      {/* Sleek Scroll Down Indicator */}
      <div 
        onClick={() => onScrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10 group"
      >
        <span className="font-mono text-[10px] tracking-widest text-white/30 group-hover:text-white/70 transition-colors uppercase">
          Scroll Down
        </span>
        <div className="w-[20px] h-[34px] rounded-full border border-white/20 flex justify-center p-1 group-hover:border-accent1 transition-colors">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-2 rounded-full bg-accent1 shadow-[0_0_4px_#FF9100]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
