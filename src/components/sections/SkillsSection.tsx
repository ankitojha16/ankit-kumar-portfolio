import React, { useState } from 'react';
import { 
  Layout, 
  Server, 
  Database, 
  Code2, 
  Cpu, 
  LineChart, 
  Sparkles, 
  CheckCircle, 
  Terminal 
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { sound } from '../layout/SoundEffects';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Layout': return <Layout className="w-5 h-5 text-cosmic-lavender" />;
      case 'Server': return <Server className="w-5 h-5 text-purple-400" />;
      case 'Database': return <Database className="w-5 h-5 text-cyan-400" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-amber-400" />;
      case 'LineChart': return <LineChart className="w-5 h-5 text-rose-400" />;
      default: return <Sparkles className="w-5 h-5 text-cosmic-lavender" />;
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.id === selectedCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cosmic-lavender/10 border border-cosmic-lavender/25 text-cosmic-lavender text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>VERIFIED CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Technical Stack & Expertise
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl text-center mb-6">
            Technologies, languages, and domain areas I have actively studied, implemented in personal and academic projects, and can articulate in technical interviews.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cosmic-lavender to-cosmic-neon rounded-full mb-8" />

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl">
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                setSelectedCategory('all');
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                selectedCategory === 'all'
                  ? 'bg-cosmic-lavender text-black font-semibold shadow-glow-sm'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              All Categories ({SKILL_CATEGORIES.length})
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  sound.playClick();
                  setSelectedCategory(cat.id);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-cosmic-lavender text-black font-semibold shadow-glow-sm'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {cat.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="glass-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between group hover:border-cosmic-lavender/40 transition-all duration-300"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white group-hover:text-cosmic-lavender transition-colors">
                      {category.title}
                    </h3>
                    <span className="text-[10px] font-mono text-gray-400">
                      {category.skills.length} verified items
                    </span>
                  </div>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                        skill.highlight
                          ? 'bg-cosmic-lavender/10 border border-cosmic-lavender/30 text-cosmic-text hover:border-cosmic-lavender hover:bg-cosmic-lavender/20'
                          : 'bg-white/5 border border-white/10 text-gray-300 hover:border-white/20'
                      }`}
                    >
                      <CheckCircle className="w-3 h-3 text-cosmic-lavender shrink-0" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Interview Readiness Note */}
              <div className="pt-5 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span className="inline-flex items-center gap-1 text-emerald-400/90">
                  <Terminal className="w-3 h-3" />
                  Hands-On Verified
                </span>
                <span className="text-gray-400">Zero Fabrications</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
