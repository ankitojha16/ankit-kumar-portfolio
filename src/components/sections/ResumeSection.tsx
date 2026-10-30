import React from 'react';
import { 
  FileText, 
  Download, 
  Printer, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  Award, 
  GraduationCap, 
  ShieldCheck 
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { sound } from '../layout/SoundEffects';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-cosmic-lavender/30 relative overflow-hidden shadow-glow-md">
          {/* Ambient cosmic lighting */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cosmic-lavender/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cosmic-lavender/10 border border-cosmic-lavender/30 text-cosmic-lavender text-xs font-mono">
                <FileText className="w-3.5 h-3.5" />
                <span>OFFICIAL CURRICULUM VITAE</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Curriculum Vitae & Verified Resume
              </h2>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl">
                Ready for Full-Stack and Software Engineering internship evaluations. Review academic credentials at Graphic Era Deemed to be University, verified personal and PBL projects, and core technical proficiencies.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>ATS-Friendly Print & PDF Export</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>BCA (Expected May 2028)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Verified Project Implementations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero Fabricated Credentials</span>
                </div>
              </div>
            </div>

            {/* Right Action Trigger Card */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-cosmic-lavender/20 border border-cosmic-lavender/40 flex items-center justify-center text-cosmic-lavender shadow-glow-sm">
                <FileText className="w-7 h-7" />
              </div>

              <div>
                <h4 className="text-base font-semibold text-white">Ankit Kumar</h4>
                <p className="text-xs text-cosmic-lavender font-mono">Full-Stack Developer</p>
              </div>

              <button
                type="button"
                onClick={() => {
                  sound.playChime();
                  onOpenResume();
                }}
                className="w-full py-3 rounded-full bg-cosmic-lavender text-black font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-white transition-all shadow-glow-sm hover:scale-105 active:scale-95"
              >
                <Printer className="w-4 h-4" />
                <span>View & Print Resume</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
