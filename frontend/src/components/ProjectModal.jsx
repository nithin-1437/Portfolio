import React from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  ShieldAlert, 
  CheckCircle2, 
  Terminal, 
  Layers,
  Sparkles,
  UserCheck
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Background click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl rounded-2xl bg-[#0b162f] border border-sky-500/30 shadow-2xl p-6 sm:p-8 overflow-hidden z-10 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
              {project.category}
            </span>
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              {project.badge}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
            {project.title}
          </h3>

          <p className="text-sm sm:text-base text-sky-300 font-medium">
            {project.tagline}
          </p>

          {project.collaborators && (
            <p className="text-xs text-slate-400 font-mono flex items-center gap-1.5 pt-1">
              <UserCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>{project.collaborators}</span>
            </p>
          )}
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 py-4 my-4 border-y border-slate-800">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-slate-700 text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Deep Dive Content Sections */}
        <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
          
          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold mb-2 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4" />
                <span>The Challenge / Problem</span>
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>The Engineering Solution</span>
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm">
                {project.solution}
              </p>
            </div>
          </div>

          {/* My Key Contribution */}
          <div className="p-4 rounded-xl bg-sky-950/30 border border-sky-500/20">
            <h4 className="text-xs font-mono uppercase tracking-wider text-sky-300 font-bold mb-2 flex items-center gap-1.5">
              <Terminal className="w-4 h-4" />
              <span>My Technical Contribution</span>
            </h4>
            <p className="text-slate-200 text-xs sm:text-sm">
              {project.myContribution}
            </p>
          </div>

          {/* Key Architectural Features */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-sky-400" />
              <span>Core Features &amp; Architecture</span>
            </h4>
            <ul className="space-y-2">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <span className="text-sky-400 font-bold mt-0.5">✔</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer / Action Buttons */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Repository</span>
              </a>
            ) : (
              <span className="text-xs text-slate-500 font-mono">
                Repository link available upon request
              </span>
            )}

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            ) : (
              <span className="px-3 py-1.5 rounded-lg text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-400">
                Live Deployment: Demo on Demand / Academic Environment
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
