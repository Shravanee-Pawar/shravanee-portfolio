import React from 'react';
import { Code2, Terminal, Wrench, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Web Development',
      icon: Code2,
      description: 'Building responsive, fast & scalable web user interfaces.',
      accentColor: 'text-indigo-400',
      badgeBg: 'bg-indigo-950/60 border-indigo-500/30 text-indigo-200',
      gradient: 'from-indigo-600/15 via-slate-800/80 to-slate-900',
      skills: [
        { name: 'HTML5', level: 'Advanced', icon: '🌐' },
        { name: 'CSS', level: 'Advanced', icon: '🎨' },
        { name: 'JavaScript', level: 'Proficient', icon: '⚡' },
        { name: 'TypeScript', level: 'Intermediate', icon: '📘' },
        { name: 'React', level: 'Proficient', icon: '⚛️' },
        { name: 'Tailwind CSS', level: 'Proficient', icon: '🌊' },
      ],
    },
    {
      title: 'Programming',
      icon: Terminal,
      description: 'Core object-oriented programming & algorithmic reasoning.',
      accentColor: 'text-cyan-400',
      badgeBg: 'bg-cyan-950/60 border-cyan-500/30 text-cyan-200',
      gradient: 'from-cyan-600/15 via-slate-800/80 to-slate-900',
      skills: [
        { name: 'Python', level: 'Proficient', icon: '🐍' },
        { name: 'Java', level: 'Intermediate', icon: '☕' },
        { name: 'C++', level: 'Intermediate', icon: '⚙️' },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      description: 'Version control & modern developer workflow software.',
      accentColor: 'text-emerald-400',
      badgeBg: 'bg-emerald-950/60 border-emerald-500/30 text-emerald-200',
      gradient: 'from-emerald-600/15 via-slate-800/80 to-slate-900',
      skills: [
        { name: 'Git', level: 'Proficient', icon: '🔀' },
        { name: 'GitHub', level: 'Proficient', icon: '🐙' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative bg-slate-900/80 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-4">
            <Code2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>Technical Proficiency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            A practical toolkit acquired through engineering coursework, hands-on projects, and technical hackathons.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mx-auto mt-4" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className={`glass-card p-6 rounded-2xl border border-slate-800 bg-gradient-to-b ${cat.gradient} relative flex flex-col justify-between group hover:border-indigo-500/50`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-3 rounded-xl bg-slate-900 border border-slate-700/80 ${cat.accentColor} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                      <p className="text-xs text-slate-400">{cat.description}</p>
                    </div>
                  </div>

                  <div className="h-px bg-slate-800 my-4" />

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-medium ${cat.badgeBg} hover:scale-105 transition-transform cursor-default shadow-sm`}
                      >
                        <span className="text-sm">{skill.icon}</span>
                        <span className="font-semibold text-white">{skill.name}</span>
                        <span className="text-[10px] opacity-75 font-normal ml-0.5 px-1.5 py-0.5 rounded bg-slate-900/60 border border-slate-700/40">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Note */}
                <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Practical Hands-on
                  </span>
                  <span className="text-slate-500">
                    {cat.skills.length} competencies
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
