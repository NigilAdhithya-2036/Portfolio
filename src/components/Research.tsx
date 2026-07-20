import React from "react";
import { motion } from "framer-motion";
import { Award, FileText, CheckCircle, TrendingUp, Cpu } from "lucide-react";
import { jsPDF } from "jspdf";

const Research: React.FC = () => {
  const abstractText = "The rapid growth of AI voice cloning and deepfake technologies poses a risk to digital identity protection and the security of real-time communications. Current detection systems often struggle to provide fast performance while effectively countering intricate synthetic speech made by advanced models. To address these challenges, we introduce an AI-based adaptive ensemble framework that integrates the strengths of RawNetLite and RawNet3 architectures, enhanced through domain-mix learning. It provides a quick and efficient screening of audio streams. RawNet3 offers a deeper analysis for unclear or high-risk inputs. To improve resilience and generalization against changing attack types, the system uses Focal Loss and waveform-level data improvement on multi-domain training datasets that include the latest synthetic voice technologies and realistic audio changes. Experimental tests on open-world benchmarks show that the ensemble significantly outperforms standalone systems. It offers better accuracy, greater strength, and lower Equal Error Rates (EER) while maintaining real-time operational efficiency. Our findings offer a practical and scalable method to protect digital identities using AI. This approach can be used in areas like banking, government ID verification, and secure communication. Most importantly, this work establishes a solid foundation for defending against audio deepfakes in a constantly changing threat landscape.";

  const downloadPDF = (e: React.MouseEvent) => {
    e.preventDefault();
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4"
    });

    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(20, 20, 20);
    const title = "AI-Based Adaptive Ensemble Framework for Real-Time Voice Deepfake and Synthetic Speech Detection";
    const titleLines = doc.splitTextToSize(title, 170);
    doc.text(titleLines, 20, 30);
    
    let yPos = 30 + (titleLines.length * 7) + 5;

    // Authors & details
    doc.setFont("helvetica", "oblique");
    doc.setFontSize(11);
    doc.setTextColor(80, 80, 80);
    doc.text("Nigil Adhithya C M", 20, yPos);
    yPos += 6;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text("Mysuru, India | APCIT 2025", 20, yPos);
    yPos += 12;

    // Abstract Header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(20, 20, 20);
    doc.text("ABSTRACT", 20, yPos);
    yPos += 8;

    // Abstract Text
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10.5);
    doc.setTextColor(60, 60, 60);
    const abstractLines = doc.splitTextToSize(abstractText, 170);
    doc.text(abstractLines, 20, yPos);

    yPos += (abstractLines.length * 5.5) + 15;

    // Footer divider
    doc.setDrawColor(220, 220, 220);
    doc.line(20, yPos, 190, yPos);
    yPos += 8;

    // Footer Text
    doc.setFont("helvetica", "italic");
    doc.setFontSize(9);
    doc.setTextColor(150, 150, 150);
    doc.text("Accepted for publication in IEEE Xplore - APCIT 2025 Conference Proceedings.", 20, yPos);

    doc.save("Nigil_Adhithya_IEEE_Abstract.pdf");
  };

  return (
    <section
      id="research"
      className="relative py-24 px-6 bg-[#050816] overflow-hidden"
    >
      <div className="absolute top-[40%] left-[-10%] w-[350px] h-[350px] rounded-full bg-accent2/10 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 select-none">
          <h2 className="text-xs font-mono tracking-widest text-[#A855F7] uppercase mb-2">
            Scientific Contribution
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold font-sora tracking-tight">
            Academic <span className="bg-gradient-to-r from-accent3 to-accent1 bg-clip-text text-transparent">Research</span>
          </h3>
          <div className="w-16 h-[2px] bg-gradient-to-r from-accent3 to-accent1 mx-auto mt-4" />
        </div>

        {/* Research Publication Card */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.02] via-[#0b0f26] to-transparent p-6 md:p-12 relative overflow-hidden shadow-2xl hover:border-accent2/30 transition-all duration-300"
          data-cursor-text="PAPER"
        >
          {/* Background grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

          {/* Left/Right layout on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left side: Metadata & Text */}
            <div className="lg:col-span-7">
              {/* Publication Badge */}
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#A855F7]/10 border border-[#A855F7]/30 mb-6">
                <Award className="w-4 h-4 text-accent3 animate-pulse" />
                <span className="text-[10px] font-mono font-bold tracking-widest text-accent3 uppercase">
                  IEEE Publication Accepted
                </span>
              </div>

              <h4 className="text-2xl md:text-3xl font-extrabold font-sora text-white leading-tight mb-4">
                AI-Based Adaptive RawNet3 for Real-Time Fake Voice Detection
              </h4>

              {/* Conference Info */}
              <div className="flex items-center gap-6 mb-8 text-xs text-white/50 font-mono">
                <div>
                  <span className="text-white/30 block uppercase tracking-wider text-[9px] mb-1">Conference:</span>
                  <span className="text-accent1 font-semibold">APCIT 2025</span>
                </div>
                <div className="w-[1px] h-8 bg-white/10" />
                <div>
                  <span className="text-white/30 block uppercase tracking-wider text-[9px] mb-1">Location:</span>
                  <span className="text-white">Mysuru, India</span>
                </div>
              </div>

              <p className="text-sm text-white/70 leading-relaxed mb-6 font-inter">
                This research proposes an optimized deep learning model derived from RawNet3. By implementing a lightweight neural feature extraction pipeline, the architecture secures high voice authenticity classification under constrained device scenarios, allowing real-time defense against malicious cloned media.
              </p>

              {/* Methodology details */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent1 shrink-0 mt-0.5" />
                  <p className="text-xs text-white/60">
                    <strong className="text-white">Adaptive Pipeline:</strong> Dyn-scaling channels dynamically matching audio bitrate variations.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent1 shrink-0 mt-0.5" />
                  <p className="text-xs text-white/60">
                    <strong className="text-white">RawNetLite Architecture:</strong> Reduces model params count by 42% while retaining 96.8% accuracy.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent1 shrink-0 mt-0.5" />
                  <p className="text-xs text-white/60">
                    <strong className="text-white">Domain Mix Learning:</strong> Enhanced network generalization across multi-language synthesizers.
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4">
                <button
                  onClick={downloadPDF}
                  className="py-3 px-6 rounded-xl bg-gradient-to-r from-accent3 to-primary hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] text-white font-sora font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4" /> Download PDF Abstract
                </button>
              </div>
            </div>

            {/* Right side: Animated Graphic of paper schema */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-2xl p-[1px] bg-gradient-to-br from-accent3/40 to-accent1/20 overflow-hidden group hover:border-[#A855F7]/80 transition-colors">
                <div className="absolute inset-[1px] bg-[#070c24] rounded-2xl p-6 flex flex-col justify-between font-mono text-[9px] text-white/40">
                  
                  {/* Mock Paper Header */}
                  <div className="flex justify-between items-start border-b border-white/5 pb-4">
                    <div>
                      <span className="text-[8px] font-bold text-accent3">IEEE TRANSACTIONS</span>
                      <p className="text-[10px] text-white font-semibold mt-1">VOL. 14, NO. 3, 2025</p>
                    </div>
                    <Cpu className="w-6 h-6 text-[#A855F7] animate-pulse" />
                  </div>

                  {/* Schema Flow Block */}
                  <div className="my-6 space-y-4">
                    <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5">
                      <span>AUDIO INPUT (RAW)</span>
                      <TrendingUp className="w-4 h-4 text-accent1" />
                    </div>
                    <div className="flex justify-center">
                      <div className="w-[1.5px] h-4 bg-[#A855F7] animate-pulse" />
                    </div>
                    <div className="p-2 rounded bg-white/5 border border-white/5 text-center text-white">
                      SINC-CONVOLUTION LAYER
                    </div>
                    <div className="flex justify-center">
                      <div className="w-[1.5px] h-4 bg-accent1 animate-pulse" />
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-gradient-to-r from-accent3/20 to-accent1/20 border border-accent3/30 text-white">
                      <span>RAWNET3 EXTRACTOR</span>
                      <span className="text-[8px] text-accent1 font-bold">42% SMALLER</span>
                    </div>
                  </div>

                  {/* Mock Citation/Seal */}
                  <div className="flex justify-between items-center border-t border-white/5 pt-4">
                    <span>CITATION_INDEX: N/A</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] animate-ping" />
                      <span className="text-white text-[8px] font-bold">APCIT_2025</span>
                    </div>
                  </div>

                </div>

                {/* Cover scanner line */}
                <div className="absolute top-0 left-0 w-full h-[1.5px] bg-[#A855F7] animate-[scan_5s_linear_infinite] opacity-45 shadow-[0_0_6px_#A855F7]" />
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
