import React from 'react';
import { 
  GraduationCap, 
  ShieldCheck, 
  Code, 
  Terminal, 
  BookOpen, 
  Cpu, 
  Lock, 
  Compass, 
  CheckCircle 
} from 'lucide-react';
import { personalInfo, educationHistory } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: Lock,
      title: "Defensive Cybersecurity & Forensics",
      desc: "Deep focus on vulnerability assessments, cryptographic evidence preservation (SHA-256), chain of custody, and OWASP Top 10 mitigation strategies."
    },
    {
      icon: ShieldCheck,
      title: "Automated Privacy Enforcement",
      desc: "Engineering multi-layer PII inspection platforms combining mathematical checksum validation (Verhoeff & Luhn), NLP, and server-side true redaction."
    },
    {
      icon: Code,
      title: "Full-Stack Software Engineering",
      desc: "Building clean, scalable web applications with React frontends, robust Java Spring Boot RESTful services, and optimized MySQL databases."
    },
    {
      icon: Cpu,
      title: "Multi-Cloud & Automation",
      desc: "Certified foundations across Microsoft Azure, Oracle Cloud Infrastructure, Aviatrix multi-cloud networking, and robotic process automation."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Candidate Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering solid security controls, building resilient software, and continually expanding multi-cloud competencies.
          </p>
        </div>

        {/* Two Column Layout: Narrative & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Academic & Professional Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0b162f]/80 border border-slate-800 glass-card">
              <h3 className="text-xl font-bold font-display text-white mb-4 flex items-center gap-2.5">
                <Terminal className="w-5 h-5 text-sky-400" />
                <span>Undergraduate Journey &amp; Focus</span>
              </h3>
              
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a 4th-year B.Tech undergraduate studying{' '}
                  <span className="text-white font-semibold">Computer Science &amp; Engineering</span> with a dedicated specialization in{' '}
                  <span className="text-sky-400 font-semibold">Cybersecurity and Blockchain Technology</span> at{' '}
                  <span className="text-white font-semibold">KL University (KLEF)</span>.
                </p>
                <p>
                  My goal is to secure a high-impact fresher role as a{' '}
                  <span className="text-white font-medium">Cybersecurity Analyst</span>,{' '}
                  <span className="text-white font-medium">Security Engineer</span>, or{' '}
                  <span className="text-white font-medium">Software Developer</span>. I am driven by the discipline of breaking down complex problems, discovering systemic vulnerabilities, and creating software that users and organizations can trust.
                </p>
                <p>
                  Rather than relying on superficial theory, I focus on practical implementation: writing real algorithmic validators (such as Verhoeff checksum calculation for Aadhaar identity and Luhn for payment systems), creating cryptographic audit logs, and standing up full-stack applications with Spring Boot and React.
                </p>
              </div>

              {/* Core Strengths */}
              <div className="pt-6 border-t border-slate-800/80 mt-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Core Professional Strengths
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Practical Troubleshooting &amp; Auditing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>OWASP Top 10 Threat Mitigation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Clear Technical Communication</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Rapid Adaptability to Emerging Tech</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Key Focus Areas Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-[#0b162f]/60 border border-slate-800/90 hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-sky-500/20 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 font-display">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Education History Timeline */}
        <div className="mt-16 pt-12 border-t border-slate-800/80">
          <div className="flex items-center gap-2.5 mb-8">
            <GraduationCap className="w-6 h-6 text-sky-400" />
            <h3 className="text-2xl font-bold font-display text-white">
              Education Milestones
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationHistory.map((edu, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#0b162f]/80 border border-slate-800 relative group hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Year Badge */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-md bg-sky-500/10 text-sky-400 border border-sky-500/20 font-semibold">
                      {edu.timeline}
                    </span>
                    <span className="text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                      {edu.score}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white font-display">
                      {edu.institution}
                    </h4>
                    <p className="text-xs text-sky-300 font-medium mt-0.5">
                      {edu.degree}
                    </p>
                    <p className="text-xs text-slate-400 mt-1 font-mono">
                      {edu.specialization}
                    </p>
                  </div>

                  <ul className="space-y-1.5 pt-2 text-xs text-slate-400">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-1.5">
                        <span className="text-sky-400 font-bold mt-0.5">›</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
