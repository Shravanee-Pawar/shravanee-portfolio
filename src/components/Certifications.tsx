import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Database, Layout, Cpu, BookOpen } from 'lucide-react';

export const Certifications: React.FC = () => {
  const certificationsData = [
    {
      title: 'Decoding Data: Insights and Impact through Analytics',
      issuer: 'IBM SkillsBuild',
      category: 'Data Analytics & Insights',
      icon: Database,
      badgeColor: 'border-blue-500/40 bg-blue-950/60 text-blue-300',
      gradient: 'from-blue-600/10 to-slate-900',
      accent: 'text-blue-400',
      description: 'Gained core knowledge in data analytics methodologies, translating raw data metrics into impactful business insights and visualization.',
    },
    {
      title: 'Learning Full Stack React',
      issuer: 'Infosys Springboard',
      category: 'Full Stack Web Development',
      icon: Layout,
      badgeColor: 'border-cyan-500/40 bg-cyan-950/60 text-cyan-300',
      gradient: 'from-cyan-600/10 to-slate-900',
      accent: 'text-cyan-400',
      description: 'Comprehensive training in React modern web architecture, state management, component lifecycles, and front-to-back integration.',
    },
    {
      title: 'SQL Case Study / SQL Workshop',
      issuer: 'Infosys Springboard',
      category: 'Database Management',
      icon: ShieldCheck,
      badgeColor: 'border-indigo-500/40 bg-indigo-950/60 text-indigo-300',
      gradient: 'from-indigo-600/10 to-slate-900',
      accent: 'text-indigo-400',
      description: 'Hands-on practical SQL queries, data manipulation language (DML), complex joins, aggregation functions, and relational database design.',
    },
    {
      title: 'WordPress Basics',
      issuer: 'Infosys Springboard',
      category: 'Content Management Systems',
      icon: BookOpen,
      badgeColor: 'border-purple-500/40 bg-purple-950/60 text-purple-300',
      gradient: 'from-purple-600/10 to-slate-900',
      accent: 'text-purple-400',
      description: 'Fundamental principles of CMS development, WordPress theme customization, plugins integration, and site management.',
    },
    {
      title: 'Digital Twins & Agentic AI: Concepts, Applications, and Future Directions',
      issuer: 'Professional Technical Workshop',
      category: 'Emerging Tech & AI',
      icon: Cpu,
      badgeColor: 'border-emerald-500/40 bg-emerald-950/60 text-emerald-300',
      gradient: 'from-emerald-600/10 to-slate-900',
      accent: 'text-emerald-400',
      description: 'Explored cutting-edge paradigms in Digital Twins simulations, autonomous Agentic AI systems, and futuristic industrial AI implementations.',
    },
  ];

  return (
    <section id="certifications" className="py-20 relative bg-slate-900/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-4">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>Verified Knowledge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Industry-recognized learning modules and workshops completed through premier learning platforms.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <div
                key={idx}
                className={`glass-card p-6 rounded-2xl border border-slate-800 bg-gradient-to-b ${cert.gradient} relative flex flex-col justify-between group hover:border-cyan-500/40`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className={`p-3 rounded-xl bg-slate-900 border border-slate-700 ${cert.accent} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${cert.badgeColor}`}>
                      {cert.issuer}
                    </span>
                  </div>

                  <span className="text-[11px] font-semibold text-indigo-300 block mb-1">
                    {cert.category}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight leading-snug group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed mt-3">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Completed & Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
