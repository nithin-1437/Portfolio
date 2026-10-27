import React from 'react';
import { 
  Shield, 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUp, 
  Heart,
  Code
} from 'lucide-react';
import { personalInfo, navigationLinks } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050810] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80 items-start">
          
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-base text-white tracking-tight">
                {personalInfo.fullName}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Computer Science &amp; Cybersecurity undergraduate at KL University (Class of 2027). Architecting AI-driven privacy platforms, digital forensics tooling, and secure full-stack software.
            </p>
            <div className="text-xs font-mono text-emerald-400">
              ● Ready for immediate placement &amp; fresher roles
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Site Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-sky-400 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Top */}
          <div className="md:col-span-3 space-y-4 md:text-right">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Connect Directly
            </h4>
            <div className="flex items-center md:justify-end gap-3 text-slate-400">
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500/40 text-slate-300 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500/40 text-slate-300 hover:text-[#0077b5] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.contact.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500/40 text-slate-300 hover:text-sky-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-mono bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-sky-500/40 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Built with React, Vite &amp; Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
