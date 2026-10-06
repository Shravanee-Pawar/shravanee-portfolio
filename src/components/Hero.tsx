import React from 'react';
import { DeveloperAvatar } from './DeveloperAvatar';
import { ArrowRight, Mail, FileText, Sparkles, MapPin, GraduationCap } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Decorative Gradients & Mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Bio & Call-to-Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold backdrop-blur-md shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Available for Internships & Engineering Roles</span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-200 bg-clip-text text-transparent">Shravanee Pawar</span> 👋
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-semibold text-indigo-300/90 tracking-wide flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                <span>B.E. Information Technology Student</span>
                <span className="text-slate-500">•</span>
                <span>Web Developer</span>
                <span className="text-slate-500">•</span>
                <span>AI/ML Enthusiast</span>
              </p>
            </div>

            {/* Intro Bio Paragraph */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              An aspiring Information Technology engineer passionate about building practical technology solutions and exploring <span className="text-white font-medium">Web Development</span>, <span className="text-white font-medium">Artificial Intelligence</span>, <span className="text-white font-medium">Cyber Security</span> and <span className="text-white font-medium">DevOps</span>.
            </p>

            {/* Location & University badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>University of Mumbai</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span>Ratnagiri, MH, India</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3.5 rounded-xl bg-slate-800/90 text-slate-200 font-semibold text-sm border border-slate-700 hover:bg-slate-700/80 hover:text-white hover:border-slate-600 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </button>

              <button
                onClick={onOpenResume}
                className="px-5 py-3.5 rounded-xl bg-indigo-950/60 text-indigo-300 font-semibold text-sm border border-indigo-500/30 hover:bg-indigo-900/60 hover:text-white transition-all flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Media Links */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">Connect:</span>
              
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/shravanee-pawar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 hover:scale-110 transition-all shadow-md group"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5 text-indigo-400 group-hover:text-white transition-colors" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/shravaneepawar-placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 hover:border-slate-500 hover:scale-110 transition-all shadow-md group"
                title="GitHub Profile (Placeholder)"
              >
                <GithubIcon className="w-5 h-5 text-cyan-400 group-hover:text-white transition-colors" />
              </a>

              {/* Email */}
              <a
                href="mailto:Shravaneepawar.06@gmail.com"
                className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-cyan-600 hover:border-cyan-500 hover:scale-110 transition-all shadow-md group"
                title="Email Shravanee"
              >
                <Mail className="w-5 h-5 text-purple-400 group-hover:text-white transition-colors" />
              </a>
            </div>

          </div>

          {/* Right Side: Cartoon Illustrated Avatar */}
          <div className="lg:col-span-5 flex justify-center">
            <DeveloperAvatar />
          </div>

        </div>
      </div>
    </section>
  );
};
