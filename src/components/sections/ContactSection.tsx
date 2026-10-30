import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MapPin, 
  Sparkles, 
  Clock, 
  MessageSquare 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ContactFormData } from '../../types';
import { sound } from '../layout/SoundEffects';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all fields before sending your message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('submitting');

    // Simulate submission and construct mailto link
    setTimeout(() => {
      setStatus('success');
      sound.playSuccess();

      // Launch user's default email client as a reliable fallback delivery mechanism
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Hi Ankit,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.open(mailtoUrl, '_blank');

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cosmic-lavender/10 border border-cosmic-lavender/25 text-cosmic-lavender text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>COMMUNICATION & INQUIRIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl text-center mb-6">
            Seeking software engineering and full-stack internships, collaborative open-source opportunities, or discussing financial technology.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cosmic-lavender to-cosmic-neon rounded-full" />
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact & Availability Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-cosmic-lavender/20 border border-cosmic-lavender/40 flex items-center justify-center text-cosmic-lavender mb-4 shadow-glow-sm">
                <Mail className="w-6 h-6" />
              </div>

              <span className="text-xs font-mono uppercase tracking-widest text-cosmic-lavender">
                Direct Email Inquiries
              </span>
              <h3 className="text-xl font-bold text-white mt-1 mb-2">
                Get In Touch Directly
              </h3>
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                Feel free to email me directly regarding internship openings, full-stack projects, or developer inquiries.
              </p>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-cosmic-lavender hover:bg-cosmic-lavender hover:text-black transition-all"
              >
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>

            {/* Location & Status Card */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Current Location</h4>
                  <p className="text-xs text-gray-400">{PERSONAL_INFO.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-white/5">
                <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Response Turnaround</h4>
                  <p className="text-xs text-gray-400">Usually within 24 hours on weekdays</p>
                </div>
              </div>

              {/* Social links row */}
              <div className="pt-4 border-t border-white/5 flex gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:text-white hover:border-cosmic-lavender/50 text-center transition-all flex items-center justify-center gap-1.5"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:text-white hover:border-sky-400/50 text-center transition-all flex items-center justify-center gap-1.5"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-10 rounded-3xl border border-white/10 relative">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mb-6">
              Complete the form below to reach me instantly.
            </p>

            {status === 'success' && (
              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm mb-6 flex items-start gap-3 animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-emerald-300">Message Prepared Successfully!</p>
                  <p className="text-emerald-400/90 text-xs mt-0.5">
                    Your email client has been opened with your message. Thank you for connecting!
                  </p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-500/40 text-rose-200 text-xs sm:text-sm mb-6 flex items-start gap-3 animate-fadeIn">
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-rose-300">Form Error</p>
                  <p className="text-rose-400/90 text-xs mt-0.5">{errorMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono text-gray-300">
                    Your Name <span className="text-cosmic-lavender">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:border-cosmic-lavender focus:outline-none focus:ring-1 focus:ring-cosmic-lavender transition-all placeholder:text-gray-500"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono text-gray-300">
                    Your Email Address <span className="text-cosmic-lavender">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:border-cosmic-lavender focus:outline-none focus:ring-1 focus:ring-cosmic-lavender transition-all placeholder:text-gray-500"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-mono text-gray-300">
                  Subject / Inquiry <span className="text-cosmic-lavender">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Full-Stack Internship Opportunity"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:border-cosmic-lavender focus:outline-none focus:ring-1 focus:ring-cosmic-lavender transition-all placeholder:text-gray-500"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono text-gray-300">
                  Message <span className="text-cosmic-lavender">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Briefly describe your project, internship role, or inquiry..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:border-cosmic-lavender focus:outline-none focus:ring-1 focus:ring-cosmic-lavender transition-all placeholder:text-gray-500 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3.5 rounded-xl bg-cosmic-lavender text-black font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-white transition-all shadow-glow-sm disabled:opacity-50 hover:scale-[1.01] active:scale-[0.99]"
              >
                {status === 'submitting' ? (
                  <span>Preparing Dispatch...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
