import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle, 
  ShieldCheck, 
  Terminal, 
  Layers, 
  Zap, 
  AlertCircle 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { Project } from '../../types';
import { sound } from '../layout/SoundEffects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Click outside backdrop */}
      <div 
        className="absolute inset-0" 
        onClick={() => {
          sound.playClick();
          onClose();
        }}
      />

      <div className="relative w-full max-w-3xl max-h-[90vh] bg-cosmic-card border border-cosmic-border rounded-3xl overflow-hidden shadow-glow-lg flex flex-col z-10">
        
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-cosmic-dark/90">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-cosmic-lavender animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-cosmic-lavender">
              {project.category} // Case Study
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Title & Tagline */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-cosmic-lavender/10 border border-cosmic-lavender/30 text-cosmic-lavender">
                {project.badge}
              </span>
              <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${
                project.status === 'Live & Production' 
                  ? 'bg-emerald-500/10 border-emerald-400/30 text-emerald-300'
                  : project.status === 'Architecture & Planning'
                  ? 'bg-amber-500/10 border-amber-400/30 text-amber-300'
                  : 'bg-purple-500/10 border-purple-400/30 text-purple-300'
              }`}>
                {project.status}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-cosmic-lavender/90 font-light">
              {project.tagline}
            </p>
          </div>

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cosmic-lavender text-black font-semibold text-xs sm:text-sm hover:bg-white transition-all shadow-glow-sm"
              >
                <span>Live Deployment</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-200 hover:text-white hover:border-cosmic-lavender/40 text-xs sm:text-sm font-medium transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>

          {/* Verified Accuracy Notice */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-xs text-gray-300 leading-relaxed">
              <span className="font-semibold text-white">Engineering Disclosure: </span>
              {project.verifiedNote}
            </div>
          </div>

          {/* Overview & Core Purpose */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-cosmic-lavender mb-2">
              Overview
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem vs Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-red-950/20 border border-red-500/20">
              <div className="flex items-center gap-2 text-xs font-mono text-red-300 mb-2">
                <AlertCircle className="w-4 h-4" />
                <span>Problem Identified</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-300 mb-2">
                <Zap className="w-4 h-4" />
                <span>Architectural Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Implemented Features */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-cosmic-lavender mb-3">
              Key Implemented Capabilities
            </h4>
            <ul className="space-y-2">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-cosmic-lavender shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* My Engineering Contribution */}
          <div className="p-5 rounded-2xl bg-purple-950/20 border border-cosmic-lavender/20">
            <h4 className="text-xs font-mono uppercase tracking-widest text-cosmic-lavender mb-2">
              My Engineering Role & Contribution
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {project.myContribution}
            </p>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-cosmic-lavender mb-3">
              Technologies & Architecture
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-cosmic-dark/90 flex justify-end">
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="px-5 py-2 rounded-full bg-white/10 text-gray-200 hover:text-white hover:bg-white/20 text-xs font-mono transition-colors"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
};
