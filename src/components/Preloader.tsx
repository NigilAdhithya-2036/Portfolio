import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [activeMessage, setActiveMessage] = useState("");

  const bootMessages = [
    "INITIALIZING COGNITIVE INTERFACE...",
    "LOADING ANGULAR & NODE.JS CORE MODULES...",
    "ESTABLISHING DATABASE HANDSHAKE...",
    "DECRYPTING IEEE RAWNET3 WEIGHTS...",
    "SYNCHRONIZING PORTFOLIO CORE...",
    "SYSTEM SECURE. BOOT COMPLETE."
  ];

  useEffect(() => {
    let messageIndex = 0;
    setActiveMessage(bootMessages[0]);

    // Fast loading simulation (3.2 seconds total)
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 2;
        if (next >= 100) {
          clearInterval(interval);
          setActiveMessage(bootMessages[bootMessages.length - 1]);
          setTimeout(() => {
            onComplete();
          }, 600);
          return 100;
        }

        // Change boot messages at specific milestones
        const calculatedIndex = Math.min(
          Math.floor((next / 100) * bootMessages.length),
          bootMessages.length - 1
        );
        if (calculatedIndex !== messageIndex) {
          messageIndex = calculatedIndex;
          setActiveMessage(bootMessages[messageIndex]);
        }

        return next;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0, 
          scale: 1.1,
          filter: "blur(20px)",
          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
        }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050816] font-mono select-none"
      >
        {/* Hologram Scanner Line */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(124,58,237,0)_0%,rgba(124,58,237,0.05)_50%,rgba(124,58,237,0)_100%)] w-full h-[20px] top-0 animate-[scan_3s_linear_infinite]" />

        {/* Matrix Code Grid Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

        <div className="w-[85vw] max-w-[500px] text-left">
          {/* Tech Header */}
          <div className="flex justify-between items-center text-xs text-primary mb-4 border-b border-primary/20 pb-2">
            <span>NIGIL_OS v3.5.0</span>
            <span className="animate-pulse">● SECURE INTERFACE</span>
          </div>

          {/* Loading Percentage */}
          <div className="flex items-baseline justify-between mb-2">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-widest text-glow-primary text-white">
              {progress}%
            </h1>
            <span className="text-xs text-[#00E5FF] tracking-widest">CONNECTING_</span>
          </div>

          {/* Progress Bar Container */}
          <div className="w-full h-[6px] bg-white/5 rounded-full overflow-hidden border border-white/10 mb-6 relative">
            {/* Glowing progress line */}
            <motion.div 
              className="h-full bg-gradient-to-r from-primary via-accent2 to-accent1 shadow-[0_0_12px_#7C3AED]"
              style={{ width: `${progress}%` }}
              layoutId="progressBar"
            />
          </div>

          {/* Console Output */}
          <div className="space-y-1 min-h-[50px]">
            <p className="text-xs text-white/50">&gt; npm run start:portfolio</p>
            <p className="text-xs text-accent1 font-semibold flex items-center">
              <span className="mr-2">&gt;</span>
              {activeMessage}
            </p>
          </div>
        </div>

        {/* Decorative corner borders */}
        <div className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-primary/30" />
        <div className="absolute top-8 right-8 w-6 h-6 border-t-2 border-r-2 border-primary/30" />
        <div className="absolute bottom-8 left-8 w-6 h-6 border-b-2 border-l-2 border-primary/30" />
        <div className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-primary/30" />
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;
