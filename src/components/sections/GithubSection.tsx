import React, { useState, useEffect } from 'react';
import { 
  GitFork, 
  Star, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Sparkles, 
  CheckCircle, 
  Activity 
} from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { fetchGithubData, GithubProfile, GithubRepo } from '../../data/githubService';
import { sound } from '../layout/SoundEffects';

export const GithubSection: React.FC = () => {
  const [profile, setProfile] = useState<GithubProfile | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [isLive, setIsLive] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    fetchGithubData().then((data) => {
      if (isMounted) {
        setProfile(data.profile);
        setRepos(data.repos);
        setIsLive(data.isLive);
        setLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="github" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cosmic-lavender/10 border border-cosmic-lavender/25 text-cosmic-lavender text-xs font-mono mb-3">
            <GithubIcon className="w-3.5 h-3.5" />
            <span>OPEN SOURCE & REPOSITORIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            GitHub Code Activity
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl text-center mb-4">
            Directly connected to <code className="text-cosmic-lavender font-mono">github.com/ankitojha16</code> with real public repositories and verified technologies.
          </p>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{isLive ? 'Live GitHub REST API Connected' : 'Public Repository Registry'}</span>
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-cosmic-lavender to-cosmic-neon rounded-full" />
        </div>

        {/* Profile Stats Overview Bento */}
        {profile && (
          <div className="glass-card p-6 sm:p-8 rounded-3xl mb-10 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src={profile.avatar_url}
                  alt="Ankit Kumar GitHub"
                  className="w-16 h-16 rounded-2xl border-2 border-cosmic-lavender/40 object-cover shadow-glow-sm"
                  onError={(e) => {
                    // Fallback if image fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-cosmic-card border border-white/20 flex items-center justify-center">
                  <GithubIcon className="w-3 h-3 text-white" />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>ankitojha16</span>
                  <a
                    href={profile.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    className="text-cosmic-lavender hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </h3>
                <p className="text-xs text-gray-400 max-w-md">
                  {profile.bio}
                </p>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="flex items-center gap-4 sm:gap-6 text-center border-t sm:border-t-0 pt-4 sm:pt-0 border-white/10 w-full sm:w-auto justify-around">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">
                  {profile.public_repos}
                </div>
                <div className="text-[11px] font-mono text-gray-400 uppercase">
                  Repositories
                </div>
              </div>

              <div className="w-px h-8 bg-white/10" />

              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-cosmic-lavender">
                  TypeScript
                </div>
                <div className="text-[11px] font-mono text-gray-400 uppercase">
                  Primary Stack
                </div>
              </div>

              <div className="w-px h-8 bg-white/10" />

              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">
                  Active
                </div>
                <div className="text-[11px] font-mono text-gray-400 uppercase">
                  Development
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="glass-card p-6 rounded-3xl group border border-white/10 hover:border-cosmic-lavender/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-cosmic-lavender" />
                    <h4 className="text-base font-bold text-white group-hover:text-cosmic-lavender transition-colors">
                      {repo.name}
                    </h4>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </div>

                <p className="text-xs text-gray-300 leading-relaxed mb-4 line-clamp-2">
                  {repo.description || 'Public repository focused on full-stack development and practical software engineering.'}
                </p>
              </div>

              {/* Repo Metadata Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cosmic-lavender" />
                  <span className="text-gray-300">{repo.language || 'TypeScript / C++'}</span>
                </div>

                <div className="flex items-center gap-3">
                  {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400" />
                      <span>{repo.stargazers_count}</span>
                    </span>
                  )}
                  {repo.forks_count > 0 && (
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5 text-purple-400" />
                      <span>{repo.forks_count}</span>
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View Profile Action */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/ankitojha16"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-cosmic-lavender/30 text-cosmic-lavender hover:bg-cosmic-lavender hover:text-black font-semibold text-xs sm:text-sm transition-all shadow-glow-sm"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Explore All Repositories on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
