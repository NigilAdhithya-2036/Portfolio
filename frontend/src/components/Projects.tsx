import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Grid, BrainCircuit } from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  tech: string[];
  features: string[];
  overview: string;
  architecture: string;
  github: string;
  demo: string;
  visual: React.ReactNode;
}

const projectsData: Project[] = [
  {
    title: "SkillForage",
    subtitle: "AI-Powered Exam Generator",
    tech: ["Angular 19", "Node.js", "MySQL", "OpenAI API", "Jest", "GitHub Actions"],
    features: ["REST APIs & Analytics Dashboard", "Automatic AI Question Generation", "CI/CD Test Suite Gates"],
    overview: "A scalable educational platform built during the Infosys Springboard internship that enables teachers to auto-generate curriculums and custom assessments using generative AI.",
    architecture: "Angular Frontend -> Node.js Express API -> MySQL DB + OpenAI API Integrations.",
    github: "https://github.com/NigilAdhithya/SkillForage",
    demo: "#",
    visual: (
      <div className="w-full h-full bg-[#080d24] flex flex-col justify-between p-4 font-mono text-[9px] text-[#00E5FF] relative overflow-hidden">
        {/* Mock AI Dashboard UI */}
        <div className="flex justify-between items-center border-b border-[#00E5FF]/20 pb-2">
          <span>MODULE: SKILL_FORAGE_AI</span>
          <span className="w-2.5 h-2.5 rounded-full bg-accent1 animate-ping" />
        </div>
        <div className="space-y-1.5 my-3">
          <div className="flex justify-between">
            <span>[SYS] OPENAI_MODELS:</span>
            <span className="text-white">gpt-4o-mini</span>
          </div>
          <div className="flex justify-between">
            <span>[DB] MYSQL_STATUS:</span>
            <span className="text-green-400">CONNECTED</span>
          </div>
          <div className="flex justify-between">
            <span>[TEST] JEST_COVERAGE:</span>
            <span className="text-white">87.4% PASSED</span>
          </div>
        </div>
        <div className="h-10 bg-white/5 rounded border border-[#00E5FF]/10 p-1.5 flex flex-col justify-between">
          <span className="text-white/40">GENERATE QUESTION_</span>
          <div className="w-full h-1 bg-[#00E5FF]/20 rounded overflow-hidden">
            <div className="h-full bg-[#00E5FF] w-3/4 animate-[pulse_1.5s_infinite]" />
          </div>
        </div>
        <BrainCircuit className="absolute bottom-2 right-2 w-12 h-12 text-[#7C3AED]/20" />
      </div>
    ),
  },
  {
    title: "AI Deepfake Detection",
    subtitle: "Real-Time Fake Voice Detection",
    tech: ["Python", "Deep Learning", "RawNet3", "RawNetLite", "Domain Mix Learning"],
    features: ["Adaptive RawNet3 Core Architecture", "Domain Mix Data Augmentation", "Real-Time Audio Telemetry"],
    overview: "Academic research project targeting deep learning voice security, analyzing raw audio spectrum frequencies to intercept synthetically cloned neural speech files.",
    architecture: "Sinc-convolution layer -> Feature extractor (GRU) -> Classification Head (FC/Softmax).",
    github: "https://github.com/NigilAdhithya/FakeVoiceDetection",
    demo: "#",
    visual: (
      <div className="w-full h-full bg-[#070b20] flex flex-col justify-between p-4 font-mono text-[9px] text-[#A855F7] relative overflow-hidden">
        {/* Mock Signal/Audio Wave UI */}
        <div className="flex justify-between items-center border-b border-[#A855F7]/20 pb-2">
          <span>ANALYZE: RAWNET3_SPECTRUM</span>
          <span className="text-white">VERIFIED</span>
        </div>
        
        {/* Waveform representation */}
        <div className="flex items-end justify-center gap-1 h-16 my-2">
          {[12, 28, 45, 18, 32, 60, 52, 10, 42, 25, 55, 30, 40, 15, 8].map((h, i) => (
            <motion.div
              key={i}
              className="w-1 bg-gradient-to-t from-primary to-[#A855F7] rounded-full"
              style={{ height: `${h}%` }}
              animate={{ height: [`${h}%`, `${h * 0.4}%`, `${h}%`] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.05 }}
            />
          ))}
        </div>

        <div className="flex justify-between items-center">
          <span>CLASSIFIER: FAKE_SPEECH</span>
          <span className="text-red-400 font-bold">MATCH: 99.8%</span>
        </div>
        <ShieldCheck className="absolute top-2 right-2 w-10 h-10 text-white/5" />
      </div>
    ),
  },
  {
    title: "Car Parking System",
    subtitle: "Real-Time Parking Management",
    tech: ["Node.js", "Express", "MySQL", "REST API", "Tailwind CSS"],
    features: ["Real-time Slot Booking Engine", "Responsive Client Grid View", "Interactive Vehicle Tracker"],
    overview: "A highly robust database application managing parking transactions, real-time availability updates, and vehicle logs in dense municipal areas.",
    architecture: "Express RESTful Router -> MySQL Transaction Manager -> HTML5/JS Live Map Interface.",
    github: "https://github.com/NigilAdhithya/CarParkingSystem",
    demo: "#",
    visual: (
      <div className="w-full h-full bg-[#060a1c] flex flex-col justify-between p-4 font-mono text-[9px] text-[#8B5CF6] relative overflow-hidden">
        {/* Mock Parking Grid UI */}
        <div className="flex justify-between items-center border-b border-[#8B5CF6]/20 pb-2">
          <span>MUNICIPAL_PARKING_IO</span>
          <span className="text-white">SLOTS: 8/12 FULL</span>
        </div>

        <div className="grid grid-cols-4 gap-1.5 my-2">
          {[1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1].map((occupied, idx) => (
            <div
              key={idx}
              className={`h-7 border rounded flex items-center justify-center font-bold ${
                occupied 
                  ? "bg-primary/20 border-primary text-primary" 
                  : "bg-green-500/10 border-green-500/40 text-green-400 animate-pulse"
              }`}
            >
              P-{idx + 1}
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <span>TRANSACTIONS_LOG: ACTIVE</span>
          <span className="text-[#00E5FF]">[LIVE]</span>
        </div>
        <Grid className="absolute bottom-2 right-2 w-12 h-12 text-[#00E5FF]/5" />
      </div>
    ),
  },
];

const Projects: React.FC = () => {
  // Custom JS 3D Tilt calculation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    // Calculate tilt angles (range: -15deg to 15deg)
    const angleX = (yc - y) / 14;
    const angleY = (x - xc) / 14;
    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-[#050816]/90 overflow-hidden"
    >
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-accent1/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-20 select-none">
          <h2 className="text-xs font-mono tracking-widest text-[#00E5FF] uppercase mb-2">
            Showcase
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold font-sora tracking-tight">
            Featured <span className="bg-gradient-to-r from-accent1 via-accent2 to-primary bg-clip-text text-transparent">Projects</span>
          </h3>
          <div className="w-16 h-[2px] bg-gradient-to-r from-accent1 to-primary mx-auto mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex"
            >
              {/* Card Outer */}
              <div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="w-full glass-card rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-[#070b1e] flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-300 ease-out hover:border-primary/40"
                style={{ transformStyle: "preserve-3d" }}
                data-cursor-text="VIEW"
              >
                {/* Visual Header / Mockup */}
                <div 
                  className="h-44 w-full border-b border-white/5 relative overflow-hidden"
                  style={{ transform: "translateZ(30px)" }}
                >
                  {project.visual}
                  <div className="absolute inset-0 bg-gradient-to-t from-darkBg/80 to-transparent pointer-events-none" />
                </div>

                {/* Content Body */}
                <div className="p-6 md:p-8 flex-grow flex flex-col" style={{ transform: "translateZ(20px)" }}>
                  <span className="text-[10px] font-mono text-accent1 uppercase tracking-widest mb-1.5 block">
                    {project.subtitle}
                  </span>
                  
                  <h4 className="text-xl font-bold font-sora text-white mb-3">
                    {project.title}
                  </h4>

                  <p className="text-xs text-white/60 mb-6 leading-relaxed flex-grow">
                    {project.overview}
                  </p>

                  {/* Architecture Block */}
                  <div className="mb-6 p-3 rounded-lg bg-white/5 border border-white/5">
                    <span className="text-[9px] font-mono text-white/40 block mb-1 uppercase tracking-wider">
                      Architecture Flow:
                    </span>
                    <p className="text-[10px] font-mono text-white/80 leading-relaxed">
                      {project.architecture}
                    </p>
                  </div>

                  {/* Features Highlights */}
                  <div className="mb-6">
                    <span className="text-[9px] font-mono text-white/40 block mb-2 uppercase tracking-wider">
                      Core Features:
                    </span>
                    <ul className="text-[11px] text-white/70 space-y-1 list-none">
                      {project.features.map((feat, fidx) => (
                        <li key={fidx} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-accent1" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t, tid) => (
                      <span
                        key={tid}
                        className="px-2 py-1 rounded bg-white/5 text-[9px] font-mono text-white/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions Links */}
                  <div className="flex items-center mt-auto">
                    <a
                      href="https://github.com/NigilAdhithya-2036"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 text-white/80 hover:text-white font-sora font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
