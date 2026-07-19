import React from "react";
import { motion } from "framer-motion";
import { FileCode2, Users2, Brain, GitPullRequest } from "lucide-react";

interface Achievement {
  title: string;
  metric: string;
  desc: string;
  icon: React.ReactNode;
  glowColor: string;
}

const achievementsData: Achievement[] = [
  {
    title: "IEEE Publication",
    metric: "APCIT 2025 Accepted",
    desc: "Authored paper on Adaptive RawNet3 architecture for voice authentication pipelines, presented at APCIT 2025 in Mysuru.",
    icon: <FileCode2 className="w-6 h-6 text-accent1" />,
    glowColor: "group-hover:border-accent1/30 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.15)]",
  },
  {
    title: "Internships",
    metric: "2 Completed",
    desc: "Acquired industry skillsets at Infosys Springboard (Full Stack/AI) and TNPL (Automation and Networks).",
    icon: <Users2 className="w-6 h-6 text-primary" />,
    glowColor: "group-hover:border-primary/30 group-hover:shadow-[0_0_20px_rgba(124,58,237,0.15)]",
  },
  {
    title: "AI & ML Systems",
    metric: "Production Grade",
    desc: "Deployed deep learning model nodes for voice security, integrating OpenAI for test orchestration.",
    icon: <Brain className="w-6 h-6 text-accent2" />,
    glowColor: "group-hover:border-accent2/30 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]",
  },
  {
    title: "Open Source",
    metric: "Active Commits",
    desc: "Contributed code to academic repositories and developed tools utilizing Angular, React, and Node.js.",
    icon: <GitPullRequest className="w-6 h-6 text-accent3" />,
    glowColor: "group-hover:border-accent3/30 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]",
  },
];

const Achievements: React.FC = () => {
  return (
    <section
      id="achievements"
      className="relative py-24 px-6 bg-[#050816]/75 overflow-hidden"
    >
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 select-none">
          <h2 className="text-xs font-mono tracking-widest text-[#A855F7] uppercase mb-2">
            Milestones
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold font-sora tracking-tight">
            Key <span className="bg-gradient-to-r from-accent3 to-accent1 bg-clip-text text-transparent">Achievements</span>
          </h3>
          <div className="w-16 h-[2px] bg-gradient-to-r from-accent3 to-accent1 mx-auto mt-4" />
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsData.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`glass-card p-6 rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.01] to-transparent relative group flex flex-col justify-between transition-all duration-300 ${ach.glowColor}`}
              data-cursor-text="GOAL"
            >
              <div>
                {/* Metric/Large Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {ach.icon}
                  </div>
                  <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
                    Milestone-{idx + 1}
                  </span>
                </div>

                <span className="text-xs font-mono text-accent1 font-bold tracking-widest uppercase block mb-1">
                  {ach.metric}
                </span>

                <h4 className="text-lg font-bold font-sora text-white mb-3">
                  {ach.title}
                </h4>

                <p className="text-xs text-white/50 leading-relaxed">
                  {ach.desc}
                </p>
              </div>

              {/* Decorative side accent lines */}
              <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-white/5 group-hover:bg-accent1 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
