import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Sparkles, 
  Code, 
  TrendingUp, 
  CheckCircle2, 
  Terminal, 
  Compass, 
  BookOpen 
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cosmic-lavender/10 border border-cosmic-lavender/25 text-cosmic-lavender text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BACKGROUND & IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            A Little About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cosmic-lavender to-cosmic-neon rounded-full" />
        </div>

        {/* Editorial Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Core Narrative Card */}
          <div className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-between">
            {/* Ambient inner illumination */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cosmic-lavender/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cosmic-lavender mb-4 uppercase tracking-widest">
                <Terminal className="w-4 h-4" />
                <span>The Story & Perspective</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6 leading-snug">
                Turning Ideas into Functional Digital Products Through Continuous Learning.
              </h3>

              <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I&apos;m <span className="text-white font-semibold">Ankit Kumar</span>, currently pursuing my{' '}
                  <span className="text-cosmic-lavender font-medium">Bachelor of Computer Applications (BCA)</span> at{' '}
                  <span className="text-white font-medium">Graphic Era Deemed to be University</span> in Dehradun, Uttarakhand, with graduation expected in <span className="text-white font-medium">May 2028</span>.
                </p>
                <p>
                  My engineering journey is driven by hands-on execution. Rather than treating code as theory, I build tangible systems—ranging from low-level C/C++ transactional models to modern offline-first Progressive Web Apps like <span className="text-cosmic-lavender font-medium">WealthTrack</span>.
                </p>
                <p>
                  Having a background that combines <span className="text-white">Commerce with Mathematics</span> and Computer Applications, I have a deep curiosity for the intersection of <span className="text-cosmic-neon font-medium">Software Development and Financial Technology</span>. I study financial research, personal budgeting architectures, and market analytics, implementing them into accessible digital tools.
                </p>
              </div>
            </div>

            {/* Quick Badges Footer */}
            <div className="pt-8 mt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div className="flex items-center gap-2 text-gray-300">
                <GraduationCap className="w-4 h-4 text-cosmic-lavender shrink-0" />
                <span>BCA (2025–2028)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Dehradun, India</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Open for Internships</span>
              </div>
            </div>
          </div>

          {/* Right Column: Focus & Interests Bento Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Academic & Personal Focus Card */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-purple-900/40 border border-cosmic-lavender/30 flex items-center justify-center text-cosmic-lavender">
                  <Code className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                  Hands-On Builder
                </span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Practical Project Development
              </h4>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
                My experience is centered around independent personal projects and rigorous academic coursework. I learn by formulating schemas, testing edge cases, and shipping live web applications.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Offline-First Architecture', 'Full-Stack Web', 'C/C++ Logic', 'Next.js Systems'].map((item) => (
                  <span key={item} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-gray-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* FinTech & Finance Research Card */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-cyan-900/40 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-cyan-300 uppercase tracking-wider">
                  Specialized Interest
                </span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Financial Technology & Markets
              </h4>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
                Fascinated by capital markets, wealth compounding, personal finance mechanics, and automated financial insights. Translating financial calculations into intuitive software.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Financial Technology', 'Financial Research', 'Personal Finance', 'Market Analytics'].map((item) => (
                  <span key={item} className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[11px] text-cyan-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
