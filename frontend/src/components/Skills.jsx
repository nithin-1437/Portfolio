import React, { useState } from 'react';
import { 
  Code, 
  Layout, 
  Server, 
  ShieldAlert, 
  Cloud, 
  Wrench, 
  Search, 
  Check, 
  Sparkles,
  Layers
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Icon mapper
  const getCategoryIcon = (name) => {
    switch (name) {
      case 'Programming Languages': return Code;
      case 'Web Development': return Layout;
      case 'Backend & Database': return Server;
      case 'Security & Digital Forensics': return ShieldAlert;
      case 'Cloud & Multi-Cloud': return Cloud;
      case 'Tools, OS & DevOps': return Wrench;
      default: return Layers;
    }
  };

  // Filter skills
  const filteredCategories = skillCategories.map(cat => {
    if (activeCategory !== 'All' && cat.name !== activeCategory) {
      return null;
    }

    const matchingSkills = cat.skills.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (searchQuery && matchingSkills.length === 0) {
      return null;
    }

    return {
      ...cat,
      skills: matchingSkills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Technologies, frameworks, and security tools I actively develop with and can defend in technical interviews.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                activeCategory === 'All'
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              All Categories
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat.name
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.name.replace(' & Digital Forensics', '').replace(' Languages', '')}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g. Java, Python, Azure)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 rounded-xl text-xs bg-slate-900/90 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>

        </div>

        {/* Skills Grid by Category */}
        <div className="space-y-8">
          {filteredCategories.map((category) => {
            const CatIcon = getCategoryIcon(category.name);
            return (
              <div 
                key={category.name}
                className="p-6 rounded-2xl bg-[#0b162f]/70 border border-slate-800/90 backdrop-blur-md"
              >
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-800/70">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    <CatIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-display">
                      {category.name}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/30 transition-all duration-200 group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                          {skill.level}
                        </span>
                      </div>

                      <div className="text-[11px] text-slate-400 font-mono mb-2.5">
                        {skill.tag}
                      </div>

                      {/* Proficiency Progress Bar */}
                      <div className="w-full bg-slate-800/90 h-1.5 rounded-full overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-sky-500 to-blue-500 h-full rounded-full transition-all duration-500"
                          style={{ width: `${skill.rating}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}

          {filteredCategories.length === 0 && (
            <div className="text-center py-12 rounded-2xl bg-[#0b162f]/40 border border-slate-800 text-slate-400 text-sm">
              No matching skills found for "{searchQuery}". Try searching for Python, Java, Docker, or Azure.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
