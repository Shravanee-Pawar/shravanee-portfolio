import React from 'react';
import { GraduationCap, MapPin, Award, Building, BookCheck } from 'lucide-react';

export const Education: React.FC = () => {
  const educationData = [
    {
      degree: 'Bachelor of Engineering – Information Technology',
      institution: 'University of Mumbai',
      location: 'Mumbai, Maharashtra',
      scoreLabel: 'CGPA',
      score: '8.26',
      badge: 'B.E. IT',
      badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
      accentGradient: 'from-indigo-600 to-cyan-500',
      highlight: true,
      details: 'Comprehensive curriculum covering Software Engineering, Data Structures & Algorithms, Database Management, Web Technologies, Artificial Intelligence, and Computer Networks.',
    },
    {
      degree: '12th – Maharashtra HSC Board',
      institution: 'A.K. Junior College',
      location: 'Ratnagiri, Maharashtra',
      scoreLabel: 'Percentage',
      score: '76.66%',
      badge: 'HSC Higher Secondary',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      accentGradient: 'from-cyan-600 to-blue-500',
      highlight: false,
      details: 'Higher Secondary Education in Science stream with focus on Mathematics, Physics, and Chemistry.',
    },
    {
      degree: '10th – Maharashtra SSC Board',
      institution: 'G.G.P. English Medium School',
      location: 'Ratnagiri, Maharashtra',
      scoreLabel: 'Percentage',
      score: '92.80%',
      badge: 'SSC Secondary School',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      accentGradient: 'from-emerald-600 to-teal-500',
      highlight: false,
      details: 'Secondary School Certificate examination passed with Distinction and high academic merit.',
    },
  ];

  return (
    <section id="education" className="py-20 relative bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-4">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Qualifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-400 rounded-full mx-auto mt-4" />
        </div>

        {/* Education Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          
          {/* Vertical Decorative Line */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-500 to-slate-800" />

          {educationData.map((edu, idx) => (
            <div key={idx} className="relative md:pl-20 group">
              
              {/* Timeline Icon Node */}
              <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-slate-900 border border-indigo-500/40 items-center justify-center shadow-xl group-hover:scale-110 group-hover:border-cyan-400 transition-all z-10">
                <GraduationCap className="w-7 h-7 text-cyan-400 group-hover:rotate-12 transition-transform" />
              </div>

              {/* Main Card */}
              <div className={`glass-card p-6 sm:p-8 rounded-2xl relative overflow-hidden ${edu.highlight ? 'border-indigo-500/40 bg-slate-800/80 shadow-indigo-900/20 shadow-xl' : 'border-slate-800'}`}>
                
                {/* Top Banner accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.accentGradient}`} />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`text-xs px-2.5 py-0.5 rounded-full border font-semibold ${edu.badgeColor}`}>
                        {edu.badge}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-indigo-300 font-semibold text-sm sm:text-base mt-1">
                      <Building className="w-4 h-4 text-cyan-400" />
                      <span>{edu.institution}</span>
                    </div>
                  </div>

                  {/* Score Pill */}
                  <div className="flex items-center gap-3 bg-slate-900/90 border border-slate-700/80 px-4 py-3 rounded-xl self-start md:self-auto shadow-inner">
                    <Award className="w-6 h-6 text-amber-400" />
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 block">
                        {edu.scoreLabel}
                      </span>
                      <span className="text-lg sm:text-xl font-extrabold text-white">
                        {edu.score}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Location & Details */}
                <div className="pt-2 border-t border-slate-700/50 flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm text-slate-300 gap-2">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-indigo-300">
                    <BookCheck className="w-4 h-4 text-indigo-400" />
                    <span>{edu.details}</span>
                  </div>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
