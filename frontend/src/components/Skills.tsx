import React from "react";
import { motion } from "framer-motion";
import { Terminal, Layout, Server, Database, Brain, Wrench, Compass } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: <Terminal className="w-5 h-5 text-accent1" />,
    skills: ["Python", "Java", "JavaScript", "TypeScript", "HTML", "CSS", "C"],
    color: "from-accent1/20 to-accent1/5",
  },
  {
    title: "Frontend",
    icon: <Layout className="w-5 h-5 text-primary" />,
    skills: ["Angular 19", "Responsive Design", "UI Design", "UX Design"],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5 text-accent2" />,
    skills: ["Node.js", "REST APIs", "Authentication", "JWT", "Express"],
    color: "from-accent2/20 to-accent2/5",
  },
  {
    title: "Database",
    icon: <Database className="w-5 h-5 text-accent3" />,
    skills: ["MySQL", "Query Optimization", "Relational Mapping"],
    color: "from-accent3/20 to-accent3/5",
  },
  {
    title: "AI & ML",
    icon: <Brain className="w-5 h-5 text-accent1" />,
    skills: ["OpenAI API", "Machine Learning", "Deep Learning", "RawNet3", "RawNetLite", "Domain Mix Learning"],
    color: "from-accent1/20 to-accent1/5",
  },
  {
    title: "Tools & DevOps",
    icon: <Wrench className="w-5 h-5 text-primary" />,
    skills: ["Git", "GitHub", "VS Code", "Postman", "GitHub Actions", "Vercel"],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Core Concepts",
    icon: <Compass className="w-5 h-5 text-accent2" />,
    skills: ["OOP", "Data Structures", "Algorithms", "Networking", "HTTP", "LAN", "REST Architecture"],
    color: "from-accent2/20 to-accent2/5",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 bg-[#050816]/75 overflow-hidden"
    >
      <div className="absolute top-[20%] left-0 w-[250px] h-[250px] rounded-full bg-primary/10 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 right-[5%] w-[350px] h-[350px] rounded-full bg-accent1/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 select-none">
          <h2 className="text-xs font-mono tracking-widest text-[#00E5FF] uppercase mb-2">
            Competencies
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold font-sora tracking-tight">
            Technical <span className="bg-gradient-to-r from-accent1 to-primary bg-clip-text text-transparent">Skills</span>
          </h3>
          <div className="w-16 h-[2px] bg-gradient-to-r from-accent1 to-primary mx-auto mt-4" />
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`glass-card p-6 rounded-2xl relative group overflow-hidden border border-white/5 bg-gradient-to-br ${category.color} transition-all duration-300 hover:border-white/10 hover:shadow-[0_0_25px_rgba(124,58,237,0.15)]`}
              data-cursor-text="SKILLS"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {category.icon}
                </div>
                <h4 className="font-sora font-semibold text-white/90 group-hover:text-white transition-colors">
                  {category.title}
                </h4>
              </div>

              {/* Skills Tags List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[11px] font-mono text-white/70 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all duration-300 cursor-default select-none"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Background ambient shape */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-white/5 blur-xl group-hover:bg-white/10 transition-colors" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
