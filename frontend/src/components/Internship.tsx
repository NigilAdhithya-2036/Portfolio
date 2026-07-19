import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, MapPin, Cpu, Network } from "lucide-react";

const Internship: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of the section container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Grow timeline vertical height based on scroll progress
  const pathHeight = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative py-24 px-6 bg-[#050816] overflow-hidden"
    >
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[300px] h-[300px] rounded-full bg-accent1/5 blur-[90px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-20 select-none">
          <h2 className="text-xs font-mono tracking-widest text-[#8B5CF6] uppercase mb-2">
            Timeline
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold font-sora tracking-tight">
            Professional <span className="bg-gradient-to-r from-primary to-accent1 bg-clip-text text-transparent">Internships</span>
          </h3>
          <div className="w-16 h-[2px] bg-gradient-to-r from-primary to-accent1 mx-auto mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative mt-12">
          {/* Main vertical track line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 rounded-full" />
          
          {/* Scrolling glowing progress line */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-primary via-accent2 to-accent1 shadow-[0_0_12px_#00E5FF] -translate-x-1/2 origin-top rounded-full"
            style={{ height: pathHeight }}
          />

          {/* Timeline Cards Grid */}
          <div className="space-y-16">
            
            {/* Card 1: Infosys Springboard */}
            <div className="relative flex flex-col md:flex-row items-start md:justify-between group">
              {/* Timeline Center Node */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-darkBg border-2 border-primary -translate-x-1/2 top-2 z-10 flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:border-accent1 shadow-[0_0_8px_rgba(124,58,237,0.5)]" />

              {/* Left Side: Empty on desktop, content on mobile */}
              <div className="md:w-5/12 hidden md:block" />

              {/* Right Side: Details Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, type: "spring" }}
                className="w-full md:w-5/12 ml-10 md:ml-0 glass-card p-6 md:p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-primary/10 to-transparent hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]"
                data-cursor-text="INFOSYS"
              >
                {/* Header */}
                <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider bg-primary/20 text-accent1 border border-primary/30 mb-2 uppercase">
                      AI Web Development
                    </span>
                    <h4 className="text-xl font-bold font-sora text-white">
                      Infosys Springboard
                    </h4>
                  </div>
                  <div className="flex flex-col items-end text-xs text-white/40 font-mono">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-primary" /> Remote</span>
                    <span>3 Months</span>
                  </div>
                </div>

                <p className="text-sm text-white/80 font-medium mb-4 flex items-center gap-1">
                  <Cpu className="w-4 h-4 text-accent1" /> Core Project: SkillForage
                </p>

                {/* Bullets */}
                <ul className="text-xs text-white/60 space-y-2 list-disc list-inside mb-6 leading-relaxed">
                  <li>Engineered an AI-Powered Exam Generator module streamlining student assessment workflows.</li>
                  <li>Integrated OpenAI API to enable instant, adaptive, curriculum-aligned question generation.</li>
                  <li>Configured CI/CD automated testing gates using GitHub Actions to maintain code reliability.</li>
                  <li>Implemented unit tests using Jest framework, achieving over 85% code coverage.</li>
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 border-t border-white/5 pt-4">
                  {["Angular 19", "Node.js", "MySQL", "OpenAI API", "GitHub Actions", "Jest", "REST APIs"].map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[10px] font-mono text-white/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Card 2: TNPL */}
            <div className="relative flex flex-col md:flex-row-reverse items-start md:justify-between group">
              {/* Timeline Center Node */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-darkBg border-2 border-accent2 -translate-x-1/2 top-2 z-10 flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:border-accent1 shadow-[0_0_8px_rgba(139,92,246,0.5)]" />

              {/* Left Side: Empty on desktop, content on mobile */}
              <div className="md:w-5/12 hidden md:block" />

              {/* Right Side (Left on desktop): Details Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, type: "spring" }}
                className="w-full md:w-5/12 ml-10 md:ml-0 glass-card p-6 md:p-8 rounded-2xl border border-white/5 bg-gradient-to-bl from-accent2/10 to-transparent hover:border-accent2/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                data-cursor-text="TNPL"
              >
                {/* Header */}
                <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider bg-accent2/20 text-[#00E5FF] border border-accent2/30 mb-2 uppercase">
                      Industrial Automation
                    </span>
                    <h4 className="text-xl font-bold font-sora text-white">
                      TNPL (Tamil Nadu Newsprints & Papers Ltd)
                    </h4>
                  </div>
                  <div className="flex flex-col items-end text-xs text-white/40 font-mono">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-accent2" /> Karur, TN</span>
                    <span>1 Month (In-plant)</span>
                  </div>
                </div>

                <p className="text-sm text-white/80 font-medium mb-4 flex items-center gap-1">
                  <Network className="w-4 h-4 text-[#00E5FF]" /> Core Project: PLC Automation & LAN
                </p>

                {/* Bullets */}
                <ul className="text-xs text-white/60 space-y-2 list-disc list-inside mb-6 leading-relaxed">
                  <li>Acquired hands-on experience in PLC automation systems controlling paper mill process streams.</li>
                  <li>Studied industrial local area network topologies (LAN) and configurations running factory processes.</li>
                  <li>Assisted in tracing communication links utilizing standard TCP/IP protocol suites.</li>
                  <li>Explored network telemetry monitoring and troubleshooting methods in large enterprise systems.</li>
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 border-t border-white/5 pt-4">
                  {["Automation", "Networking", "TCP/IP", "LAN", "PLC Architecture", "Industrial Comm"].map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[10px] font-mono text-white/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
