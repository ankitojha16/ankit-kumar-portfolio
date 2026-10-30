import React, { useState } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  ArrowUpRight, 
  ShieldCheck, 
  Layers, 
  Wallet, 
  TrendingUp, 
  Compass, 
  CreditCard, 
  Bell, 
  ChevronRight 
} from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { FEATURED_PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types';
import { sound } from '../layout/SoundEffects';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Personal Finance', label: 'Personal Finance' },
    { id: 'FinTech Insights', label: 'FinTech Insights' },
    { id: 'Academic Systems', label: 'Academic Systems' },
    { id: 'Productivity', label: 'Productivity' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.category === activeCategory);

  const getProjectIcon = (name: string, size = 'w-5 h-5') => {
    switch (name) {
      case 'Wallet': return <Wallet className={`${size} text-emerald-400`} />;
      case 'TrendingUp': return <TrendingUp className={`${size} text-cyan-400`} />;
      case 'Compass': return <Compass className={`${size} text-cosmic-lavender`} />;
      case 'CreditCard': return <CreditCard className={`${size} text-amber-400`} />;
      case 'Bell': return <Bell className={`${size} text-rose-400`} />;
      default: return <Layers className={`${size} text-cosmic-lavender`} />;
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cosmic-lavender/10 border border-cosmic-lavender/25 text-cosmic-lavender text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Featured Projects & Systems
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl text-center mb-6">
            Real software systems, Progressive Web Apps, financial analytics tools, and academic engineering projects built with modern web technologies.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cosmic-lavender to-cosmic-neon rounded-full mb-8" />

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  sound.playClick();
                  setActiveCategory(cat.id);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                  activeCategory === cat.id
                    ? 'bg-cosmic-lavender text-black font-semibold shadow-glow-sm'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group border border-white/10 hover:border-cosmic-lavender/40 transition-all duration-300 relative"
            >
              {/* Top Graphic Card Preview Banner */}
              <div className="relative h-48 sm:h-56 w-full bg-gradient-to-br from-cosmic-card via-purple-950/20 to-black p-6 flex flex-col justify-between overflow-hidden border-b border-white/5">
                <img
                  src={`${import.meta.env.BASE_URL}${project.previewImage}`}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/25 pointer-events-none" />
                {/* Visual Ambient Grid / Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-cosmic-lavender/10 rounded-full blur-2xl pointer-events-none group-hover:bg-cosmic-lavender/20 transition-all duration-500" />
                <div className="absolute right-8 top-1/2 -translate-y-1/2 w-36 h-36 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500 pointer-events-none">
                  <div className="absolute inset-3 rounded-full border border-cosmic-lavender/20" />
                  <div className="absolute inset-6 rounded-full border border-white/10" />
                  {getProjectIcon(project.iconName, 'w-16 h-16')}
                </div>

                {/* Top Badge Row */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center">
                      {getProjectIcon(project.iconName)}
                    </div>
                    <span className="text-xs font-mono text-gray-300">
                      {project.category}
                    </span>
                  </div>

                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${
                    project.status === 'Live & Production' 
                      ? 'bg-emerald-500/10 border-emerald-400/30 text-emerald-300'
                      : project.status === 'Architecture & Planning'
                      ? 'bg-amber-500/10 border-amber-400/30 text-amber-300'
                      : 'bg-purple-500/10 border-purple-400/30 text-purple-300'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Central Title Display */}
                <div className="relative z-10 max-w-[75%]">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-cosmic-lavender/80">
                    Project 0{idx + 1}
                  </span>
                  <h3 className="flex items-center gap-3 text-2xl sm:text-3xl font-bold text-white group-hover:text-cosmic-lavender transition-colors">
                    <span className="w-10 h-10 shrink-0 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                      {getProjectIcon(project.iconName, 'w-6 h-6')}
                    </span>
                    <span>{project.title}</span>
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 line-clamp-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Quick Link Buttons in Preview */}
                <div className="relative z-10 flex items-center gap-2 pt-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        sound.playClick();
                      }}
                      className="px-3 py-1 rounded-full bg-cosmic-lavender text-black text-[11px] font-semibold flex items-center gap-1 hover:bg-white transition-all shadow-glow-sm"
                    >
                      <span>Live App</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        sound.playClick();
                      }}
                      className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-gray-200 text-[11px] font-medium flex items-center gap-1 hover:text-white hover:bg-white/20 transition-all border border-white/10"
                    >
                      <GithubIcon className="w-3 h-3" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Lower Body Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-6">
                <div>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Problem & Solution Snippet */}
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 text-xs text-gray-300 space-y-1.5 mb-5">
                    <p>
                      <strong className="text-cosmic-lavender">Problem: </strong>
                      {project.problem}
                    </p>
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span className="truncate max-w-[180px] sm:max-w-[220px]">
                      {project.verifiedNote}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      sound.playChime();
                      onSelectProject(project);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-mono font-medium text-cosmic-lavender hover:text-white transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>Architecture</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
