import React from "react";
import { Cpu, Mail, ArrowUp } from "lucide-react";

interface FooterProps {
  onScrollToSection: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onScrollToSection }) => {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#03050f] border-t border-white/5 py-12 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Animated Brand Logo */}
        <div className="flex items-center space-x-2 select-none">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent2 flex items-center justify-center text-accent1 animate-[spin_8s_linear_infinite]">
            <Cpu className="w-4 h-4" />
          </div>
          <span className="font-sora font-extrabold text-sm tracking-wider uppercase text-white">
            NIGIL<span className="text-accent1">.</span>
          </span>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {["about", "skills", "experience", "projects", "research", "contact"].map((sec) => (
            <button
              key={sec}
              onClick={() => onScrollToSection(sec)}
              className="text-xs font-sora font-medium text-white/50 hover:text-white uppercase tracking-wider transition-colors duration-200"
            >
              {sec === "experience" ? "internships" : sec}
            </button>
          ))}
        </div>

        {/* Social coordinates + Back To Top */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/NigilAdhithya-2036"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/5 hover:border-primary flex items-center justify-center text-white/60 hover:text-white transition-all duration-300"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a
              href="https://www.linkedin.com/in/nigil-adhithya-c-m-181296293"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/5 hover:border-primary flex items-center justify-center text-white/60 hover:text-white transition-all duration-300"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a
              href="mailto:nigiladhi2036@gmail.com"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/5 hover:border-primary flex items-center justify-center text-white/60 hover:text-white transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Divider */}
          <div className="w-[1px] h-6 bg-white/10" />

          {/* Back to top capsule */}
          <button
            onClick={handleBackToTop}
            className="w-9 h-9 rounded-xl bg-primary/20 border border-primary/30 hover:border-accent1 text-white hover:text-accent1 transition-all duration-300 flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.1)] hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4 animate-[bounce_2s_infinite]" />
          </button>
        </div>

      </div>

      {/* Under footer credits */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-white/30 text-center sm:text-left">
        <p>© 2026 Nigil Adhithya C M. All rights reserved.</p>
        <p className="flex items-center justify-center gap-1">
          Designed & Built with <span className="text-primary">✦</span> React & Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;
