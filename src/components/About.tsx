import React from 'react';
import { User, Award, BookOpen, Compass, Code, Terminal, Shield, Cpu } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: 'IT Engineering Student',
      subtitle: 'University of Mumbai',
      description: 'Currently pursuing Bachelor of Engineering in Information Technology with strong foundational & practical application skills.',
      gradient: 'from-blue-600/20 to-indigo-600/20',
      borderColor: 'border-indigo-500/30',
      iconColor: 'text-indigo-400',
    },
    {
      icon: Award,
      title: 'Academic CGPA',
      subtitle: '8.26 / 10.0',
      description: 'Consistent academic performance throughout B.E. Information Technology program at Mumbai University.',
      gradient: 'from-cyan-600/20 to-teal-600/20',
      borderColor: 'border-cyan-500/30',
      iconColor: 'text-cyan-400',
    },
    {
      icon: Compass,
      title: 'Key Tech Domains',
      subtitle: 'Core Focus Areas',
      description: 'Web Development • Artificial Intelligence • Cyber Security • DevOps',
      gradient: 'from-purple-600/20 to-pink-600/20',
      borderColor: 'border-purple-500/30',
      iconColor: 'text-purple-400',
    },
  ];

  const focusAreas = [
    { name: 'Web Development', icon: Code, desc: 'Responsive React, TypeScript & Modern UI' },
    { name: 'Artificial Intelligence', icon: Cpu, desc: 'Machine Learning & Predictive Modeling' },
    { name: 'Cyber Security', icon: Shield, desc: 'Secure Code & Data Protection' },
    { name: 'DevOps & Tools', icon: Terminal, desc: 'Git, Cloud Services & Automation' },
  ];

  return (
    <section id="about" className="py-20 relative bg-slate-900/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-4">
            <User className="w-3.5 h-3.5 text-indigo-400" />
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Shravanee</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mx-auto mt-4" />
        </div>

        {/* Content Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          <div className="lg:col-span-12">
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
              <p className="text-slate-200 text-base sm:text-lg lg:text-xl leading-relaxed font-normal text-center max-w-4xl mx-auto">
                "I am an aspiring <span className="text-indigo-300 font-semibold">Information Technology engineer</span> interested in <span className="text-cyan-300 font-semibold">Web Development</span>, <span className="text-purple-300 font-semibold">Artificial Intelligence</span>, <span className="text-emerald-300 font-semibold">Cyber Security</span> and <span className="text-amber-300 font-semibold">DevOps</span>. I enjoy building practical technology solutions, learning new technologies and participating in hackathons and technical events."
              </p>
            </div>
          </div>
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className={`glass-card p-6 rounded-2xl bg-gradient-to-b ${item.gradient} border ${item.borderColor} relative group`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-slate-900/80 border border-slate-700/60 ${item.iconColor} group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-wide">{item.title}</h3>
                    <p className="text-sm font-semibold text-indigo-300">{item.subtitle}</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className="glass-card p-4 rounded-xl border border-slate-800 flex flex-col items-center text-center group hover:border-indigo-500/40"
              >
                <div className="p-2.5 rounded-lg bg-indigo-950/80 text-cyan-400 mb-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{area.name}</h4>
                <p className="text-xs text-slate-400">{area.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
