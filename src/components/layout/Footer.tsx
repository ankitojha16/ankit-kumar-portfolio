import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { sound } from './SoundEffects';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-cosmic-void/80 backdrop-blur-xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Monogram and identity */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-900 to-cosmic-neon/30 border border-cosmic-lavender/40 flex items-center justify-center">
            <span className="font-mono text-xs font-bold text-cosmic-lavender">AK</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Ankit Kumar</p>
            <p className="text-[11px] font-mono text-gray-400">
              Full-Stack Developer &bull; BCA @ Graphic Era University
            </p>
          </div>
        </div>

        {/* Center: Built with details */}
        <div className="text-center text-xs text-gray-400 font-mono">
          <p className="flex items-center justify-center gap-1.5">
            <span>Crafted with React, TypeScript &amp; Cosmic CSS</span>
          </p>
          <p className="text-[10px] text-gray-400 mt-1">
            &copy; {new Date().getFullYear()} Ankit Kumar. All verified rights reserved.
          </p>
        </div>

        {/* Right: Social & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            className="p-2 rounded-full text-gray-400 hover:text-sky-400 hover:bg-white/5 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            onClick={() => sound.playClick()}
            className="p-2 rounded-full text-gray-400 hover:text-cosmic-lavender hover:bg-white/5 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <div className="w-px h-6 bg-white/10 mx-1" />

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-full bg-white/5 hover:bg-cosmic-lavender hover:text-black text-gray-300 transition-all border border-white/10"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
