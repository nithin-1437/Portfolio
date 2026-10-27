import React from 'react';
import { 
  ShieldCheck, 
  Terminal, 
  Download, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  Award, 
  CheckCircle2, 
  Code2,
  FileCheck2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      {/* Background Cyber Ambient Lights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-sky-500/30 text-sky-300 text-xs font-mono shadow-sm shadow-sky-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>OPEN TO FRESHER ROLES · PASS-OUT 2027</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-sm font-mono text-sky-400 tracking-wider uppercase font-semibold">
                Hi, I am
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight font-display text-white leading-[1.15]">
                SATYA SAI NITHIN REDDY <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">
                  NALLAMILLI
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300 flex items-center gap-2 pt-1">
                <Terminal className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <span>Cybersecurity Analyst &amp; Software Developer</span>
              </p>
            </div>

            {/* Professional Summary */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              Final-year B.Tech Computer Science student specializing in{' '}
              <span className="text-slate-200 font-medium">Cybersecurity &amp; Blockchain Technology</span> at{' '}
              <span className="text-slate-200 font-medium">KL University (8.29 CGPA)</span>. 
              Hands-on experience architecting AI-driven digital forensics platforms, automated PII exposure engines, 
              and robust full-stack software. Passionate about solving complex security challenges, vulnerability analysis, 
              and continuous learning.
            </p>

            {/* Quick Metric Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-base font-bold text-white font-mono">4x Certs</div>
                  <div className="text-[11px] text-slate-400">Azure, OCI, Aviatrix, RPA</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-base font-bold text-white font-mono">8.29 CGPA</div>
                  <div className="text-[11px] text-slate-400">KL University B.Tech</div>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-base font-bold text-white font-mono">3 Core</div>
                  <div className="text-[11px] text-slate-400">Security &amp; Web Projects</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-400 hover:to-blue-500 shadow-lg shadow-sky-500/25 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-slate-100 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-slate-900/80 hover:bg-slate-800/80 border border-sky-500/30 text-sky-300 hover:text-sky-200 transition-all duration-200"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-3 text-slate-400">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">Connect:</span>
              
              <a 
                href={personalInfo.contact.github} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 text-slate-300 hover:text-white transition-colors hover:scale-105"
              >
                <Github className="w-4 h-4" />
              </a>

              <a 
                href={personalInfo.contact.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 text-slate-300 hover:text-[#0077b5] transition-colors hover:scale-105"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a 
                href={`mailto:${personalInfo.contact.email}`}
                aria-label="Send direct email"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 text-slate-300 hover:text-sky-400 transition-colors hover:scale-105"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Headshot Card with Cyber Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm sm:max-w-md">
              
              {/* Glowing Ambient Outer Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-400 rounded-3xl blur-lg opacity-40 group-hover:opacity-65 transition duration-500" />
              
              {/* Card Container */}
              <div className="relative rounded-2xl bg-[#0b162f] border border-sky-500/25 p-4 shadow-2xl overflow-hidden">
                
                {/* Tech Terminal Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-sky-400/90 font-mono text-[11px]">identity::verified</span>
                </div>

                {/* Profile Photo */}
                <div className="relative mt-3 rounded-xl overflow-hidden aspect-square border border-slate-800/80 bg-slate-950">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.fullName}
                    className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.02] transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent opacity-60" />

                  {/* Corner Target Markers */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-sky-400" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-sky-400" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-sky-400" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-sky-400" />
                </div>

                {/* Cyber Card Footer Tags */}
                <div className="pt-3 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-300 font-semibold">{personalInfo.shortName}</span>
                    <span className="text-emerald-400 font-mono">KL University · 2027</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/10 text-sky-300 border border-sky-500/20">
                      AZ-900 Certified
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      OCI Certified
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      Aviatrix MCNA
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      RPA Certified
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
