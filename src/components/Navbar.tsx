import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cpu } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Research", id: "research" },
  { name: "Education", id: "education" },
  { name: "Achievements", id: "achievements" },
  { name: "Contact", id: "contact" },
];

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle navbar background
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-white/5 z-[1000] pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-primary via-accent2 to-accent1 shadow-[0_0_8px_#00E5FF]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 w-full z-[990] transition-all duration-500 py-4 ${
          isScrolled 
            ? "bg-[#050816]/40 backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.4)]" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-2 text-white font-sora font-bold text-lg tracking-wider focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent2 shadow-[0_0_15px_rgba(124,58,237,0.4)] overflow-hidden">
              <Cpu className="w-5 h-5 text-accent1 animate-pulse" />
              <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent font-extrabold hover:text-glow-primary transition-all duration-300">
              NIGIL<span className="text-accent1">.</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-xs font-sora font-medium tracking-wider uppercase rounded-full transition-all duration-300 focus:outline-none ${
                    isActive ? "text-accent1 text-glow-accent1" : "text-white/60 hover:text-white"
                  }`}
                  data-cursor-text="GO TO"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-white/5 border border-white/10 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* Hire Me CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="relative px-5 py-2 text-xs font-sora font-semibold tracking-wider uppercase rounded-full border border-primary bg-primary/10 text-white hover:bg-primary transition-all duration-300 shadow-[0_0_15px_rgba(124,58,237,0.2)] hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] focus:outline-none"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white/80 hover:text-white focus:outline-none p-1"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden absolute top-full left-0 w-full bg-[#050816]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col space-y-4">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left py-2 font-sora text-sm font-medium tracking-wide uppercase transition-colors duration-200 border-b border-white/5 pb-2 ${
                        isActive ? "text-accent1 text-glow-accent1 font-bold" : "text-white/60 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </button>
                  );
                })}
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full text-center py-3 rounded-xl border border-primary bg-primary/20 text-white font-sora font-semibold text-sm tracking-wider uppercase shadow-[0_0_15px_rgba(124,58,237,0.25)]"
                >
                  Hire Me
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
