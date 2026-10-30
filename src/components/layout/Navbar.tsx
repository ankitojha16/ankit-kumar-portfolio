import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, FileText, Sparkles, ArrowUpRight } from 'lucide-react';
import { sound } from './SoundEffects';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['about', 'skills', 'projects', 'education', 'journey', 'github', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const newState = sound.toggle();
    setAudioEnabled(newState);
  };

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Journey', href: '#journey', id: 'journey' },
    { label: 'GitHub', href: '#github', id: 'github' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    sound.playClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className={`flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${
              scrolled
                ? 'bg-cosmic-dark/85 backdrop-blur-md border border-cosmic-border shadow-glow-sm'
                : 'bg-cosmic-dark/50 backdrop-blur-sm border border-white/5'
            }`}
          >
            {/* Monogram Brand */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                sound.playClick();
              }}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-900/60 to-cosmic-neon/30 border border-cosmic-lavender/40 flex items-center justify-center transition-transform group-hover:scale-105 group-hover:border-cosmic-lavender">
                <span className="font-mono text-sm font-bold text-cosmic-lavender tracking-tighter">
                  AK
                </span>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-sm font-semibold tracking-wide text-white group-hover:text-cosmic-lavender transition-colors">
                  Ankit Kumar
                </span>
                <span className="text-[10px] text-cosmic-lavender/70 font-mono tracking-wider uppercase">
                  Full-Stack Dev
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`px-3 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all ${
                      isActive
                        ? 'text-white bg-cosmic-lavender/15 border border-cosmic-lavender/30 shadow-glow-sm'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* Right Action Icons & Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Sound Audio FX Toggle */}
              <button
                type="button"
                onClick={handleAudioToggle}
                title={audioEnabled ? 'Mute sound effects' : 'Enable cosmic audio effects'}
                className={`p-2 rounded-full border transition-all ${
                  audioEnabled
                    ? 'border-cosmic-neon/50 text-cosmic-lavender bg-cosmic-neon/15 shadow-glow-sm'
                    : 'border-white/10 text-gray-400 hover:text-white hover:border-white/20 bg-white/5'
                }`}
                aria-label="Toggle Sound Effects"
              >
                {audioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>

              {/* Resume Button */}
              <button
                type="button"
                onClick={() => {
                  sound.playChime();
                  onOpenResume();
                }}
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-cosmic-neon/20 to-purple-600/30 border border-cosmic-lavender/40 text-cosmic-lavender hover:bg-cosmic-lavender hover:text-black hover:border-cosmic-lavender transition-all shadow-glow-sm"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-full border border-white/10 text-gray-300 hover:text-white bg-white/5"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-black/90 backdrop-blur-xl flex flex-col justify-center px-8">
          <div className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-lg font-medium text-gray-200 hover:text-cosmic-lavender py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  sound.playChime();
                  onOpenResume();
                }}
                className="w-full py-3 rounded-xl bg-cosmic-lavender text-black font-semibold flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>View & Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
