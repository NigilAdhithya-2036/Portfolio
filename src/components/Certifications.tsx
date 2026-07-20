import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  skills: string[];
}

const certificationsData: Certification[] = [
  {
    title: "Young Professional",
    issuer: "TCS iON",
    date: "2024",
    skills: ["Professional Skills", "Business Communication", "Corporate Etiquette"],
  },
  {
    title: "Python Programming",
    issuer: "Infosys Springboard",
    date: "2024",
    skills: ["Data Types", "Object-Oriented Coding", "Algorithms"],
  },
  {
    title: "Java Fundamentals",
    issuer: "Infosys Springboard",
    date: "2024",
    skills: ["Java Syntax", "Concurrency", "OO Concepts"],
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "2024",
    skills: ["Virtualization", "AWS Ecosystem", "SLA Management"],
  },
  {
    title: "Cryptography and Network Security",
    issuer: "NPTEL",
    date: "2024",
    skills: ["Symmetric Ciphers", "Public Key Crypto", "IP Security"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 120, damping: 15 },
  },
};

const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
      className="relative py-24 px-6 bg-[#050816] overflow-hidden"
    >
      <div className="absolute top-[20%] left-[-5%] w-[350px] h-[350px] rounded-full bg-accent2/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 select-none">
          <h2 className="text-xs font-mono tracking-widest text-[#8B5CF6] uppercase mb-2">
            Credentials
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold font-sora tracking-tight">
            Professional <span className="bg-gradient-to-r from-accent2 to-accent3 bg-clip-text text-transparent">Certifications</span>
          </h3>
          <div className="w-16 h-[2px] bg-gradient-to-r from-accent2 to-accent3 mx-auto mt-4" />
        </div>

        {/* Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.01] to-transparent relative group hover:border-[#8B5CF6]/30 transition-all duration-300 hover:shadow-[0_0_25px_rgba(139,92,246,0.1)]"
              data-cursor-text="CREDENTIAL"
            >
              {/* Badge Icon Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent2 group-hover:text-accent1 transition-colors">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-white/30">{cert.date}</span>
              </div>

              {/* Title & Issuer */}
              <h4 className="text-lg font-bold font-sora text-white mb-1 group-hover:text-accent1 transition-colors">
                {cert.title}
              </h4>
              <span className="text-xs font-mono text-white/50 block mb-6">
                Issuer: <strong className="text-white/80">{cert.issuer}</strong>
              </span>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 border-t border-white/5 pt-4">
                {cert.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] font-mono text-white/40 flex items-center gap-1"
                  >
                    <CheckCircle2 className="w-2.5 h-2.5 text-accent2 shrink-0" />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
