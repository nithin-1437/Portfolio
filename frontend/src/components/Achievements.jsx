import React from 'react';
import { 
  Trophy, 
  Award, 
  GraduationCap, 
  ShieldCheck, 
  Terminal, 
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { achievements } from '../data/portfolioData';

export default function Achievements() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Award': return Award;
      case 'GraduationCap': return GraduationCap;
      case 'ShieldCheck': return ShieldCheck;
      case 'Terminal': return Terminal;
      default: return Trophy;
    }
  };

  return (
    <section id="achievements" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Milestones &amp; Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Key Achievements
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Genuine academic, technical, and credential milestones achieved throughout my engineering degree.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, idx) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[#0b162f]/80 border border-slate-800 hover:border-sky-500/30 glass-card transition-all duration-300 flex items-start gap-5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-sky-500/20 transition-all duration-200">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-slate-900 border border-slate-800 text-sky-400">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      <span>{item.date}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-white group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
