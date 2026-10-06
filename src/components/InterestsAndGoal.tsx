import React from 'react';
import { Target, Heart, Palette, Plane, Sparkles, Compass, Utensils, Video } from 'lucide-react';

export const InterestsAndGoal: React.FC = () => {
  const interests = [
    {
      title: 'Digital Content Creation',
      icon: '🎨',
      lucideIcon: Video,
      description: 'Creating digital graphics, tech media content & visual stories.',
      accent: 'border-purple-500/30 bg-purple-950/40 text-purple-300',
    },
    {
      title: 'Art',
      icon: '🎨',
      lucideIcon: Palette,
      description: 'Sketching, painting, visual design & district-level drawing.',
      accent: 'border-pink-500/30 bg-pink-950/40 text-pink-300',
    },
    {
      title: 'Travel',
      icon: '✈️',
      lucideIcon: Plane,
      description: 'Exploring scenic Konkan landscapes & cultural heritage.',
      accent: 'border-cyan-500/30 bg-cyan-950/40 text-cyan-300',
    },
    {
      title: 'Yoga',
      icon: '🧘',
      lucideIcon: Compass,
      description: 'Mindfulness, flexibility, physical wellbeing & focus.',
      accent: 'border-emerald-500/30 bg-emerald-950/40 text-emerald-300',
    },
    {
      title: 'Cooking',
      icon: '🍳',
      lucideIcon: Utensils,
      description: 'Experimenting with authentic regional recipes & culinary arts.',
      accent: 'border-amber-500/30 bg-amber-950/40 text-amber-300',
    },
  ];

  return (
    <section id="career-goal" className="py-20 relative bg-slate-900/70 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Career Goal Banner */}
        <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-indigo-900/90 via-slate-900 to-cyan-950/90 border border-indigo-500/40 shadow-2xl overflow-hidden mb-20 group">
          
          {/* Decorative Glow Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950/90 border border-indigo-500/40 text-cyan-300 text-xs font-bold uppercase tracking-wider shadow-inner">
              <Target className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>Future Vision</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              My <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">Career Goal</span>
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-200 leading-relaxed italic">
              "To become a skilled IT professional and build innovative technology solutions while continuously improving my skills in <span className="text-indigo-300 font-semibold not-italic">Web Development</span>, <span className="text-cyan-300 font-semibold not-italic">AI</span>, <span className="text-emerald-300 font-semibold not-italic">Cyber Security</span> and <span className="text-amber-300 font-semibold not-italic">DevOps</span>."
            </p>

            <div className="pt-2 flex items-center justify-center gap-2 text-xs font-semibold text-indigo-300">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Passionate about continuous learning and engineering impact</span>
            </div>
          </div>
        </div>

        {/* Personal Interests Section */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-950/70 border border-pink-500/30 text-pink-300 text-xs font-semibold mb-3">
              <Heart className="w-3.5 h-3.5 text-pink-400" />
              <span>Beyond Coding</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Personal <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Interests</span>
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              Activities that foster creativity, mindfulness, balance, and creative inspiration.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {interests.map((item, idx) => (
              <div
                key={idx}
                className={`glass-card p-5 rounded-2xl border ${item.accent} flex flex-col items-center text-center group hover:scale-105 transition-all shadow-md`}
              >
                <div className="text-3xl mb-3 group-hover:scale-125 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">{item.title}</h4>
                <p className="text-[11px] text-slate-300 leading-snug">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
