import { Mail, Heart, Code2 } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';

interface FooterProps {
  onOpenResume?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
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
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-300 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-800/60">
          
          {/* Left Column: Brand */}
          <div className="md:col-span-5 space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 p-0.5 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-cyan-300" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">Shravanee Pawar</span>
            </div>
            <p className="text-xs sm:text-sm text-indigo-300 font-medium">
              B.E. Information Technology | Web Developer | AI/ML Enthusiast
            </p>
            <p className="text-xs text-slate-400 max-w-sm">
              Passionate IT engineering student dedicated to building user-centric web applications and exploring intelligent AI/ML solutions.
            </p>
          </div>

          {/* Center Column: Quick Links */}
          <div className="md:col-span-4 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300">
            <button onClick={() => scrollToSection('home')} className="hover:text-cyan-400 transition-colors">Home</button>
            <span>•</span>
            <button onClick={() => scrollToSection('about')} className="hover:text-cyan-400 transition-colors">About</button>
            <span>•</span>
            <button onClick={() => scrollToSection('education')} className="hover:text-cyan-400 transition-colors">Education</button>
            <span>•</span>
            <button onClick={() => scrollToSection('skills')} className="hover:text-cyan-400 transition-colors">Skills</button>
            <span>•</span>
            <button onClick={() => scrollToSection('projects')} className="hover:text-cyan-400 transition-colors">Projects</button>
            <span>•</span>
            <button onClick={onOpenResume} className="text-cyan-300 hover:text-white transition-colors">Resume</button>
          </div>

          {/* Right Column: Social Icons */}
          <div className="md:col-span-3 flex items-center justify-center md:justify-end gap-3">
            <a
              href="https://www.linkedin.com/in/shravanee-pawar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <a
              href="https://github.com/shravaneepawar-placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-600 transition-all"
              title="GitHub (Placeholder)"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href="mailto:Shravaneepawar.06@gmail.com"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-cyan-600 hover:border-cyan-500 transition-all"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 <span className="text-slate-300 font-semibold">Shravanee Pawar</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>for Web Development & Engineering Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
