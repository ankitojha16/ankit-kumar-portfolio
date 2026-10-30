import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  Award 
} from 'lucide-react';
import { EDUCATION_LIST } from '../../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cosmic-lavender/10 border border-cosmic-lavender/25 text-cosmic-lavender text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Education Timeline
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl text-center mb-6">
            Formal academic foundation bridging computer applications, computational logic, and mathematics.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cosmic-lavender to-cosmic-neon rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l border-cosmic-lavender/25 space-y-12">
          {EDUCATION_LIST.map((edu, idx) => (
            <div key={edu.id} className="relative group">
              
              {/* Timeline Orb Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-cosmic-dark border-2 border-cosmic-lavender flex items-center justify-center shadow-glow-sm group-hover:scale-125 group-hover:border-white transition-all duration-300">
                <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-cosmic-lavender group-hover:bg-white" />
              </div>

              {/* Card Container */}
              <div className="glass-card p-6 sm:p-8 rounded-3xl group-hover:border-cosmic-lavender/40 transition-all duration-300">
                {/* Meta details row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-cosmic-lavender">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-gray-400">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Institution & Degree */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-cosmic-lavender transition-colors">
                  {edu.institution}
                </h3>
                <h4 className="text-sm sm:text-base font-medium text-cosmic-lavender mb-3">
                  {edu.degreeOrClass}
                </h4>

                {/* Status / Grade Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-emerald-300 mb-5">
                  <Award className="w-3.5 h-3.5" />
                  <span>{edu.scoreOrStatus}</span>
                </div>

                {/* Highlights List */}
                <ul className="space-y-2 mb-5">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-cosmic-lavender shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Focus Areas */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-mono text-gray-400 mr-2 flex items-center gap-1">
                    <BookOpen className="w-3 h-3 text-cosmic-lavender" />
                    Core Subjects:
                  </span>
                  {edu.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5 text-[11px] font-mono text-gray-300"
                    >
                      {area}
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
