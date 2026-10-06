import React from 'react';
import { X, Download, Printer, GraduationCap, Award, Briefcase, Mail, Phone, MapPin, CheckCircle, Sparkles, Code2 } from 'lucide-react';
import { LinkedinIcon } from './Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden text-slate-100 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="p-4 bg-slate-800/90 border-b border-slate-700 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-indigo-600/30 text-indigo-300">
              <Code2 className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Shravanee Pawar — Curriculum Vitae</h3>
              <p className="text-[11px] text-slate-400">B.E. Information Technology • University of Mumbai</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-all"
              title="Print Resume"
            >
              <Printer className="w-4 h-4 text-cyan-400" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 bg-slate-950 text-slate-200 font-sans text-xs sm:text-sm">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Shravanee Pawar</h1>
              <p className="text-indigo-400 font-semibold text-sm mt-0.5">B.E. Information Technology Student</p>
              <p className="text-slate-400 text-xs mt-2 max-w-xl">
                Aspiring IT engineer passionate about building practical tech solutions in Web Development, AI/ML, Cyber Security, and DevOps.
              </p>
            </div>

            <div className="text-xs space-y-1.5 text-slate-300 bg-slate-900 p-3.5 rounded-xl border border-slate-800 self-stretch sm:self-auto">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>Shravaneepawar.06@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>+91 7977047787</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Ratnagiri, MH, India</span>
              </div>
              <div className="flex items-center gap-2">
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                <a href="https://www.linkedin.com/in/shravanee-pawar" target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">
                  linkedin.com/in/shravanee-pawar
                </a>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-indigo-400" /> Education
            </h2>
            <div className="space-y-3">
              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                <div className="flex justify-between font-bold text-white">
                  <span>Bachelor of Engineering – Information Technology</span>
                  <span className="text-cyan-400">CGPA: 8.26</span>
                </div>
                <div className="text-slate-400 text-xs mt-0.5">University of Mumbai</div>
              </div>

              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                <div className="flex justify-between font-bold text-white">
                  <span>12th – Maharashtra HSC Board</span>
                  <span className="text-cyan-400">76.66%</span>
                </div>
                <div className="text-slate-400 text-xs mt-0.5">A.K. Junior College, Ratnagiri</div>
              </div>

              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                <div className="flex justify-between font-bold text-white">
                  <span>10th – Maharashtra SSC Board</span>
                  <span className="text-cyan-400">92.80%</span>
                </div>
                <div className="text-slate-400 text-xs mt-0.5">G.G.P. English Medium School, Ratnagiri</div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400" /> Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                <span className="text-xs font-bold text-white block mb-1">Web Development</span>
                <p className="text-slate-300 text-xs">HTML5, CSS, JavaScript, TypeScript, React, Tailwind CSS</p>
              </div>
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                <span className="text-xs font-bold text-white block mb-1">Programming</span>
                <p className="text-slate-300 text-xs">Python, Java, C++</p>
              </div>
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                <span className="text-xs font-bold text-white block mb-1">Tools & Platforms</span>
                <p className="text-slate-300 text-xs">Git, GitHub, VS Code</p>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-emerald-400" /> Key Projects
            </h2>
            <div className="space-y-3">
              <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                <div className="font-bold text-white">MedRadar AI — Emergency Healthcare Resource Platform</div>
                <p className="text-slate-300 text-xs mt-1">
                  AI-powered emergency healthcare platform helping users locate hospitals, doctors, ICU beds, blood, and ambulances.
                </p>
                <div className="text-[11px] text-indigo-300 font-semibold mt-1">Tech: React, TypeScript, Tailwind CSS, AI, MongoDB/Firestore</div>
              </div>

              <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                <div className="font-bold text-white">CropSense AI — Smart Farming Assistant</div>
                <p className="text-slate-300 text-xs mt-1">
                  AI-powered agricultural decision-support platform recommending suitable crops using weather and agricultural parameters.
                </p>
                <div className="text-[11px] text-indigo-300 font-semibold mt-1">Tech: Python, FastAPI, Machine Learning, Firebase, Pandas, Scikit-learn</div>
              </div>

              <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                <div className="font-bold text-white">Farm2Home — Farmer-to-Consumer Platform</div>
                <p className="text-slate-300 text-xs mt-1">
                  Digital portal connecting farmers directly with consumers to ensure fair crop pricing and remove intermediaries.
                </p>
                <div className="text-[11px] text-indigo-300 font-semibold mt-1">Tech: HTML, CSS, JavaScript</div>
              </div>

              <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                <div className="font-bold text-white">Konkan Navigator — Konkan Tourism Website</div>
                <p className="text-slate-300 text-xs mt-1">
                  Tourism guide website for exploring Konkan destinations, attractions, travel info, and authentic experiences.
                </p>
                <div className="text-[11px] text-indigo-300 font-semibold mt-1">Tech: HTML, CSS, JavaScript</div>
              </div>
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-400" /> Certifications & Technical Events
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              <li className="flex items-center gap-2 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>IBM SkillsBuild – Decoding Data Analytics</span>
              </li>
              <li className="flex items-center gap-2 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Infosys Springboard – Full Stack React</span>
              </li>
              <li className="flex items-center gap-2 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Infosys Springboard – SQL Case Study</span>
              </li>
              <li className="flex items-center gap-2 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Sinhagad Hackathon 2026 Participant</span>
              </li>
              <li className="flex items-center gap-2 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>HackFusion 2026 Participant</span>
              </li>
              <li className="flex items-center gap-2 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>2nd Place – District Level Drawing</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
          <span className="text-[11px] text-slate-400">Ready for recruitment & technical interviews.</span>
          <button
            onClick={handlePrint}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold text-xs shadow-lg flex items-center gap-1.5"
          >
            <Download className="w-4 h-4" />
            <span>Download / Print Resume</span>
          </button>
        </div>
      </div>
    </div>
  );
};
