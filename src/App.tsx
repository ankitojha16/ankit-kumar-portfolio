import React, { useState } from 'react';
import { CosmicCanvas } from './components/3d/CosmicCanvas';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { EducationSection } from './components/sections/EducationSection';
import { GithubSection } from './components/sections/GithubSection';
import { ResumeSection } from './components/sections/ResumeSection';
import { ContactSection } from './components/sections/ContactSection';
import { ProjectModal } from './components/ui/ProjectModal';
import { ResumeModal } from './components/ui/ResumeModal';
import { CursorFollower } from './components/ui/CursorFollower';
import { Project } from './types';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  return (
    <div className="relative min-h-screen bg-cosmic-void text-cosmic-text overflow-x-hidden selection:bg-cosmic-lavender selection:text-black">
      {/* Interactive 3D Cosmic WebGL / Canvas Background */}
      <CosmicCanvas />
      <CursorFollower />

      {/* Main Floating Header Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
        <EducationSection />
        <GithubSection />
        <ResumeSection onOpenResume={() => setIsResumeOpen(true)} />
        <ContactSection />
      </main>

      {/* Architectural Footer */}
      <Footer />

      {/* Interactive Project Architecture Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* ATS-Friendly Downloadable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;
