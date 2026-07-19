import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, Book } from "lucide-react";

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  details: string;
  icon: React.ReactNode;
}

const educationData: EducationItem[] = [
  {
    institution: "VSB Engineering College",
    degree: "B.E. Computer and Communication Engineering",
    period: "2022 - 2026",
    grade: "CGPA: 7.71 / 10 (Current)",
    details: "Focusing on Software Engineering, Data Networks, AI/ML pipelines, and Full Stack methodologies.",
    icon: <GraduationCap className="w-5 h-5 text-accent1" />,
  },
  {
    institution: "Higher Secondary Education",
    degree: "Mathematics & Science Major",
    period: "2020 - 2022",
    //grade: "Percentage: XX.X%",
    details: "Rigorous study in advanced physics, chemistry, and calculus foundations.",
    icon: <Book className="w-5 h-5 text-primary" />,
  },
];

const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="relative py-24 px-6 bg-[#050816]/75 overflow-hidden"
    >
      <div className="absolute top-[20%] right-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[90px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 select-none">
          <h2 className="text-xs font-mono tracking-widest text-[#00E5FF] uppercase mb-2">
            Academic Path
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold font-sora tracking-tight">
            My <span className="bg-gradient-to-r from-accent1 to-primary bg-clip-text text-transparent">Education</span>
          </h3>
          <div className="w-16 h-[2px] bg-gradient-to-r from-accent1 to-primary mx-auto mt-4" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative mt-12 max-w-3xl mx-auto">
          {/* Vertical central track */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 rounded-full" />

          {/* Timeline Cards */}
          <div className="space-y-12">
            {educationData.map((edu, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-start ${isEven ? "md:justify-between" : "md:flex-row-reverse md:justify-between"
                    } group`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-darkBg border-2 border-primary -translate-x-1/2 top-2 z-10 flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:border-accent1 shadow-[0_0_8px_rgba(124,58,237,0.5)]" />

                  {/* Left spacer on desktop */}
                  <div className="md:w-5/12 hidden md:block" />

                  {/* Details Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="w-full md:w-5/12 ml-12 md:ml-0 glass-card p-6 md:p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.01] to-transparent hover:border-accent1/30 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,229,255,0.1)]"
                    data-cursor-text="DEGREE"
                  >
                    {/* Header */}
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                        {edu.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold font-sora text-white leading-tight">
                          {edu.institution}
                        </h4>
                        <span className="text-xs text-accent1 font-mono">{edu.degree}</span>
                      </div>
                    </div>

                    <p className="text-xs text-white/60 font-inter mb-4 leading-relaxed">
                      {edu.details}
                    </p>

                    <div className="flex items-center justify-between border-t border-white/5 pt-4 text-xs font-mono">
                      <span className="text-white/40 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-primary" /> {edu.period}
                      </span>
                      <span className="text-accent2 font-semibold flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-accent2" /> {edu.grade}
                      </span>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
