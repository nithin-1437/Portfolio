import React from 'react';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  Eye, 
  ShieldCheck, 
  Briefcase,
  GraduationCap,
  Award
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeSection() {
  const resumeHighlights = [
    {
      title: "Education & Specialization",
      detail: "B.Tech in Computer Science & Engineering (Cybersecurity & Blockchain), KL University (8.29 CGPA, Class of 2027).",
      icon: GraduationCap
    },
    {
      title: "4x Certified Credentials",
      detail: "Microsoft Azure Fundamentals (AZ-900), Oracle Cloud Infrastructure (OCI), Aviatrix MCNA, Automation Anywhere RPA.",
      icon: Award
    },
    {
      title: "Flagship Projects",
      detail: "Avarana AI-PII Exposure Platform (Verhoeff/Luhn checksums & SHA-256 logs), Automated Forensics, and Employee Management.",
      icon: Briefcase
    },
    {
      title: "Security & Dev Skillset",
      detail: "Python, Java, Spring Boot, MySQL, Kali Linux, Wireshark, Nmap, Digital Forensics, OWASP Top 10 mitigation.",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="resume" className="py-20 lg:py-28 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Resume &amp; Credentials
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Download my verified technical resume tailored for fresher cybersecurity and software engineering roles.
          </p>
        </div>

        {/* Resume Card Layout */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#0b162f] border border-sky-500/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden glass-card">
          
          {/* Ambient Corner Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 space-y-8">
            
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold block mb-1">
                  OFFICIAL RESUME · UPDATED FOR 2026/2027
                </span>
                <h3 className="text-2xl font-bold font-display text-white">
                  {personalInfo.fullName}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  Document Target: <span className="text-slate-300">/resume.pdf</span> (Adobe PDF Document)
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={personalInfo.resumeUrl}
                  download="Satya_Sai_Nithin_Reddy_Resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-400 hover:to-blue-500 shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.02]"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>

                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition-colors"
                >
                  <Eye className="w-4 h-4 text-sky-400" />
                  <span>View in Tab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Resume Summary Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {resumeHighlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 flex items-start gap-3.5"
                  >
                    <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20 flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Recruiter Note Banner */}
            <div className="p-4 rounded-xl bg-sky-950/30 border border-sky-500/20 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>Available immediately for campus placements, internships, and entry-level security/developer roles.</span>
              </div>
              <span className="font-mono text-[11px] text-sky-400 hidden md:inline-block">Passout: 2027</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
