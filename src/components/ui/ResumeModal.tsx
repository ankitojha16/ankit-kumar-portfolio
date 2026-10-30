import React, { useEffect } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  ExternalLink, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Code, 
  Layers 
} from 'lucide-react';
import { PERSONAL_INFO, FEATURED_PROJECTS, EDUCATION_LIST, SKILL_CATEGORIES } from '../../data/portfolioData';
import { sound } from '../layout/SoundEffects';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    sound.playClick();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="absolute inset-0" 
        onClick={() => {
          sound.playClick();
          onClose();
        }} 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-cosmic-card border border-cosmic-border rounded-3xl overflow-hidden shadow-glow-lg flex flex-col z-10">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-cosmic-dark/95">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cosmic-lavender">
              Verified Developer Resume // Ankit Kumar
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cosmic-lavender text-black text-xs font-semibold hover:bg-white transition-all shadow-glow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Document Canvas (Printable ATS-Friendly Layout) */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-white text-gray-900 font-sans print:p-0 print:m-0 selection:bg-purple-200">
          
          {/* Resume Header */}
          <header className="border-b-2 border-gray-900 pb-5 mb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-semibold text-purple-800 tracking-wider uppercase mt-1">
              {PERSONAL_INFO.role} &bull; FinTech Enthusiast &bull; BCA Candidate
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-gray-700 mt-3 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-gray-600" />
                {PERSONAL_INFO.location}
              </span>
              <span>&bull;</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-purple-700 hover:underline">
                {PERSONAL_INFO.email}
              </a>
              <span>&bull;</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">
                linkedin.com/in/ankitojha16
              </a>
              <span>&bull;</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">
                github.com/ankitojha16
              </a>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="mb-6">
            <h2 className="text-xs font-mono font-bold tracking-widest text-purple-900 uppercase border-b border-gray-300 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              {PERSONAL_INFO.introduction}
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mb-6">
            <h2 className="text-xs font-mono font-bold tracking-widest text-purple-900 uppercase border-b border-gray-300 pb-1 mb-2">
              Technical & Domain Skills
            </h2>
            <div className="space-y-1.5 text-xs text-gray-800">
              <p>
                <strong>Frontend: </strong> HTML5, CSS3, JavaScript (ES6+), TypeScript, React, Next.js, Tailwind CSS.
              </p>
              <p>
                <strong>Backend & APIs: </strong> Node.js, RESTful APIs, HTTP Architecture, Backend Fundamentals.
              </p>
              <p>
                <strong>Databases & Storage: </strong> Supabase, IndexedDB (Offline-First), SQL Fundamentals.
              </p>
              <p>
                <strong>Programming: </strong> C, C++, Data Structures Basics, Object-Oriented Programming.
              </p>
              <p>
                <strong>Developer Tools: </strong> Git, GitHub, VS Code, Vercel, npm.
              </p>
              <p>
                <strong>Domain Interests: </strong> Financial Technology (FinTech), Financial Research, Personal Finance, Capital Markets.
              </p>
            </div>
          </section>

          {/* Projects Showcase */}
          <section className="mb-6">
            <h2 className="text-xs font-mono font-bold tracking-widest text-purple-900 uppercase border-b border-gray-300 pb-1 mb-3">
              Featured Software Engineering Projects
            </h2>
            <div className="space-y-4">
              {FEATURED_PROJECTS.map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                    <span className="font-bold text-gray-900 text-sm">
                      {proj.title}{' '}
                      <span className="font-normal text-purple-800 text-xs">
                        ({proj.technologies.join(', ')})
                      </span>
                    </span>
                    <span className="text-[11px] font-mono text-gray-600">
                      {proj.status}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-1 leading-relaxed">
                    {proj.description}
                  </p>
                  <p className="text-gray-600 italic">
                    <strong>Key Features: </strong> {proj.features.slice(0, 3).join('; ')}.
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education Timeline */}
          <section className="mb-4">
            <h2 className="text-xs font-mono font-bold tracking-widest text-purple-900 uppercase border-b border-gray-300 pb-1 mb-2">
              Education
            </h2>
            <div className="space-y-3 text-xs">
              {EDUCATION_LIST.map((edu) => (
                <div key={edu.id} className="flex justify-between items-start">
                  <div>
                    <div className="font-bold text-gray-900">{edu.institution}</div>
                    <div className="text-purple-800">{edu.degreeOrClass} &bull; {edu.scoreOrStatus}</div>
                  </div>
                  <div className="text-right text-gray-600 font-mono text-[11px]">
                    <div>{edu.period}</div>
                    <div>{edu.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};
