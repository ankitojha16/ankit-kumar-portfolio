import React from 'react';
import { 
  Sparkles, 
  Terminal, 
  Code, 
  Layers, 
  Database, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';
import { JOURNEY_STEPS } from '../../data/portfolioData';

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cosmic-lavender/10 border border-cosmic-lavender/25 text-cosmic-lavender text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LEARNING BY PRACTICAL DEVELOPMENT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Growing Through Building
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl text-center mb-6">
            A progression through programming fundamentals, modern web architectures, offline data systems, and financial engineering.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cosmic-lavender to-cosmic-neon rounded-full" />
        </div>

        {/* Journey Step Cards */}
        <div className="space-y-8">
          {JOURNEY_STEPS.map((milestone, idx) => (
            <div
              key={milestone.step}
              className="glass-card p-6 sm:p-8 rounded-3xl group hover:border-cosmic-lavender/40 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle ambient gradient back */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-purple-900/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cosmic-lavender/10 transition-all duration-500" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Left Step Indicator */}
                <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start justify-between gap-2 border-b lg:border-b-0 lg:border-r border-white/10 pb-4 lg:pb-0 lg:pr-6">
                  <span className="text-xs font-mono tracking-widest uppercase text-cosmic-lavender font-semibold">
                    {milestone.step}
                  </span>
                  <span className="text-xs font-mono text-gray-400">
                    {milestone.period}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cosmic-lavender group-hover:scale-110 transition-transform mt-2">
                    <span className="font-mono text-xs font-bold text-cosmic-lavender">0{idx + 1}</span>
                  </div>
                </div>

                {/* Center Content */}
                <div className="lg:col-span-6 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cosmic-lavender transition-colors">
                    {milestone.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {milestone.narrative}
                  </p>
                  <ul className="space-y-1.5 pt-1">
                    {milestone.milestones.map((m, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle className="w-3.5 h-3.5 text-cosmic-lavender shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Technology Badges */}
                <div className="lg:col-span-3 flex flex-wrap lg:flex-col gap-2 justify-end">
                  {milestone.techTags.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-gray-300 text-center"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
