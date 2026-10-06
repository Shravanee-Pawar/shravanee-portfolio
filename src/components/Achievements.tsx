import React from 'react';
import { Trophy, Code2, Award, Zap, Sparkles, Medal } from 'lucide-react';

export const Achievements: React.FC = () => {
  const hackathons = [
    {
      title: 'Sinhagad Hackathon 2026',
      project: 'Farm2Home',
      role: 'Hackathon Participant & Developer',
      description: 'Participated in Sinhagad Hackathon 2026 and developed Farm2Home, a digital platform connecting farmers directly with consumers.',
      year: '2026',
      badge: 'Hackathon Project',
      accent: 'border-amber-500/40 bg-amber-950/40 text-amber-300',
      gradient: 'from-amber-600/15 via-slate-800/60 to-slate-900',
      icon: Code2,
    },
    {
      title: 'HackFusion 2026',
      project: 'CropSense AI',
      role: 'Hackathon Participant & ML Lead',
      description: 'Participated in HackFusion 2026 and developed CropSense AI, an AI-powered agricultural decision-support platform.',
      year: '2026',
      badge: 'Hackathon Project',
      accent: 'border-emerald-500/40 bg-emerald-950/40 text-emerald-300',
      gradient: 'from-emerald-600/15 via-slate-800/60 to-slate-900',
      icon: Zap,
    },
  ];

  const additionalAchievements = [
    {
      title: '2nd Place – District Level Drawing Competition',
      category: 'Arts & Creative Excellence',
      description: 'Awarded 2nd position in District Level Drawing Competition, demonstrating artistic precision, creativity, and visual design skills.',
      icon: Trophy,
      color: 'text-amber-400 bg-amber-950/60 border-amber-500/40',
      emoji: '🏆',
    },
    {
      title: 'Orange Belt – Karate',
      category: 'Martial Arts & Discipline',
      description: 'Earned Orange Belt qualification in Karate, reflecting dedication, physical discipline, focus, and perseverance.',
      icon: Medal,
      color: 'text-orange-400 bg-orange-950/60 border-orange-500/40',
      emoji: '🥋',
    },
  ];

  return (
    <section id="achievements" className="py-20 relative bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/70 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Honors & Hackathons</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Achievements & <span className="bg-gradient-to-r from-amber-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">Technical Events</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Competitive technical hackathons, artistic accolades, and extracurricular discipline.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-indigo-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Hackathon Cards Grid */}
        <div className="mb-14">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-indigo-400" />
            <span>Hackathon Innovations</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hackathons.map((h, idx) => {
              const Icon = h.icon;
              return (
                <div
                  key={idx}
                  className={`glass-card p-6 rounded-2xl border border-slate-800 bg-gradient-to-b ${h.gradient} relative flex flex-col justify-between group hover:border-amber-500/40`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 text-amber-400 group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white tracking-tight">{h.title}</h4>
                          <span className="text-xs font-semibold text-indigo-300">Project: {h.project}</span>
                        </div>
                      </div>
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${h.accent}`}>
                        {h.year}
                      </span>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed mt-3">
                      {h.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1 text-cyan-300 font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Collaborative Hackathon Build
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Co-Curricular & Extracurricular Accomplishments */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span>Co-Curricular & Creative Accomplishments</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalAchievements.map((item, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-slate-800 bg-slate-800/40 flex items-start gap-4 group hover:border-indigo-500/40 transition-all"
              >
                <div className="text-3xl p-3 rounded-xl bg-slate-900 border border-slate-700/80 shrink-0 group-hover:scale-110 transition-transform">
                  {item.emoji}
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-indigo-300 uppercase tracking-wider block mb-0.5">
                    {item.category}
                  </span>
                  <h4 className="text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-slate-300 text-xs leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
