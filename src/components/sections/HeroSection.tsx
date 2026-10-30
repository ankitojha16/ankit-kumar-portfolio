import React from 'react';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Sparkles, 
  Terminal, 
  Compass, 
  Code2, 
  Layers 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { sound } from '../layout/SoundEffects';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-tr from-purple-900/25 via-cosmic-neon/15 to-transparent rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center z-10">
        
        {/* Availability Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cosmic-card/90 border border-cosmic-border backdrop-blur-md shadow-glow-sm mb-6 animate-float">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono font-medium text-emerald-300">
            {PERSONAL_INFO.availability}
          </span>
        </div>

        {/* Hero Visual Monogram / Orbit Avatar */}
        <div className="relative mb-6">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full p-[2px] bg-gradient-to-b from-cosmic-lavender via-cosmic-neon/50 to-transparent shadow-glow-md">
            <div className="w-full h-full rounded-full bg-cosmic-dark flex flex-col items-center justify-center relative overflow-hidden group">
              {/* Inner subtle cosmic grid */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-transparent to-transparent opacity-80" />
              <Code2 className="w-10 h-10 sm:w-12 sm:h-12 text-cosmic-lavender mb-1 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-[10px] sm:text-xs font-mono font-semibold tracking-widest text-cosmic-lavender/90 uppercase relative z-10">
                Full-Stack
              </span>
            </div>
          </div>

          {/* Orbiting Satellite Node 1 */}
          <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-cosmic-card border border-cosmic-lavender/40 flex items-center justify-center shadow-glow-sm">
            <Terminal className="w-3.5 h-3.5 text-cosmic-lavender" />
          </div>

          {/* Orbiting Satellite Node 2 */}
          <div className="absolute -bottom-1 -left-2 w-7 h-7 rounded-full bg-cosmic-card border border-cyan-400/40 flex items-center justify-center shadow-glow-sm">
            <Compass className="w-3.5 h-3.5 text-cyan-300" />
          </div>
        </div>

        {/* Identity & Typography */}
        <h2 className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-cosmic-lavender/80 mb-2">
          {PERSONAL_INFO.educationShort}
        </h2>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
          <span className="block text-gradient-cosmic">ANKIT KUMAR</span>
          <span className="block text-2xl sm:text-4xl md:text-5xl font-semibold text-gray-300 mt-2">
            FULL-STACK DEVELOPER
          </span>
        </h1>

        {/* Pitch Statement */}
        <p className="text-lg sm:text-2xl font-light text-cosmic-lavender max-w-3xl mb-3 tracking-wide">
          &ldquo;{PERSONAL_INFO.tagline}&rdquo;
        </p>

        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mb-8 leading-relaxed">
          {PERSONAL_INFO.subtext}
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
          <a
            href="#projects"
            onClick={() => sound.playClick()}
            className="px-6 py-3 rounded-full bg-cosmic-lavender text-black font-semibold text-sm flex items-center gap-2 hover:bg-white transition-all shadow-glow-md hover:scale-105 active:scale-95"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={() => {
              sound.playChime();
              onOpenResume();
            }}
            className="px-6 py-3 rounded-full bg-white/5 border border-cosmic-lavender/40 text-cosmic-lavender hover:bg-cosmic-lavender/15 font-semibold text-sm flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
          >
            <FileText className="w-4 h-4" />
            <span>Download Resume</span>
          </button>

          <a
            href="#contact"
            onClick={() => sound.playClick()}
            className="px-6 py-3 rounded-full bg-cosmic-card/80 border border-white/10 text-gray-200 hover:text-white hover:border-white/30 font-medium text-sm flex items-center gap-2 transition-all hover:scale-105"
          >
            <Mail className="w-4 h-4 text-cosmic-neon" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Social Badges & Quick Links */}
        <div className="flex items-center gap-3 pt-2 border-t border-white/10">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:text-white hover:border-cosmic-lavender/50 hover:bg-white/10 transition-all"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:text-white hover:border-cosmic-lavender/50 hover:bg-white/10 transition-all"
          >
            <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            onClick={() => sound.playClick()}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:text-white hover:border-cosmic-lavender/50 hover:bg-white/10 transition-all"
          >
            <Mail className="w-3.5 h-3.5 text-cosmic-lavender" />
            <span>{PERSONAL_INFO.email}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
