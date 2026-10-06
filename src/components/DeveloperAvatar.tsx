import React from 'react';
import { Code, Sparkles, Globe, Terminal } from 'lucide-react';

export const DeveloperAvatar: React.FC = () => {
  return (
    <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 flex items-center justify-center mx-auto">
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-cyan-500/30 rounded-full blur-2xl animate-pulse-glow" />
      <div className="absolute inset-4 bg-gradient-to-bl from-blue-600/20 via-pink-500/15 to-emerald-500/20 rounded-full blur-xl" />

      {/* Outer Glowing Decorative Ring */}
      <div className="absolute inset-2 border border-indigo-500/30 rounded-full animate-spin-slow" style={{ animationDuration: '30s' }}>
        <div className="w-3 h-3 bg-cyan-400 rounded-full absolute -top-1.5 left-1/2 -translate-x-1/2 shadow-lg shadow-cyan-400/80" />
        <div className="w-2.5 h-2.5 bg-indigo-400 rounded-full absolute bottom-4 left-6 shadow-md shadow-indigo-400/80" />
        <div className="w-3 h-3 bg-purple-400 rounded-full absolute top-12 right-4 shadow-md shadow-purple-400/80" />
      </div>

      {/* Main Avatar Container */}
      <div className="relative w-full h-full p-4 flex items-center justify-center">
        {/* SVG Cartoon Illustrated Female Student Developer Avatar */}
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] animate-float"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffdbac" />
              <stop offset="100%" stopColor="#f1c27d" />
            </linearGradient>
            <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2c1d11" />
              <stop offset="100%" stopColor="#120a06" />
            </linearGradient>
            <linearGradient id="hoodieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="50%" stopColor="#4338ca" />
              <stop offset="100%" stopColor="#3730a3" />
            </linearGradient>
            <linearGradient id="laptopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="screenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
            <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <radialGradient id="avatarGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Avatar Background Glow */}
          <circle cx="200" cy="200" r="170" fill="url(#avatarGlow)" />
          <circle cx="200" cy="200" r="160" fill="#1e293b" stroke="#334155" strokeWidth="4" />

          {/* Long Hair Back */}
          <path d="M 120 180 C 100 240, 110 320, 130 360 C 160 360, 240 360, 270 360 C 290 320, 300 240, 280 180 Z" fill="url(#hairGrad)" />

          {/* Shoulders & Hoodie */}
          <path d="M 100 360 C 100 300, 140 270, 200 270 C 260 270, 300 300, 300 360 Z" fill="url(#hoodieGrad)" />
          {/* Hoodie Collar Details */}
          <path d="M 160 275 L 200 320 L 240 275" stroke="#818cf8" strokeWidth="5" strokeLinecap="round" />
          <circle cx="185" cy="325" r="3" fill="#cbd5e1" />
          <circle cx="215" cy="325" r="3" fill="#cbd5e1" />

          {/* Neck */}
          <rect x="180" y="230" width="40" height="50" rx="10" fill="url(#skinGrad)" />
          <path d="M 180 260 Q 200 270 220 260" fill="none" stroke="#e2a76f" strokeWidth="3" opacity="0.6" />

          {/* Head & Face */}
          <path d="M 140 180 C 140 130, 260 130, 260 180 C 260 235, 230 255, 200 255 C 170 255, 140 235, 140 180 Z" fill="url(#skinGrad)" />

          {/* Ears */}
          <circle cx="138" cy="185" r="12" fill="url(#skinGrad)" />
          <circle cx="262" cy="185" r="12" fill="url(#skinGrad)" />

          {/* Hair Front Bangs / Layers */}
          <path d="M 135 175 C 145 130, 180 110, 200 125 C 230 110, 265 130, 265 175 C 255 145, 220 135, 200 145 C 180 135, 145 145, 135 175 Z" fill="url(#hairGrad)" />

          {/* Eyes (Friendly and Expressive) */}
          <ellipse cx="172" cy="180" rx="8" ry="10" fill="#1e293b" />
          <ellipse cx="228" cy="180" rx="8" ry="10" fill="#1e293b" />
          <circle cx="174" cy="177" r="3" fill="#ffffff" />
          <circle cx="230" cy="177" r="3" fill="#ffffff" />

          {/* Eyebrows */}
          <path d="M 160 164 Q 172 160 184 165" stroke="#2c1d11" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M 216 165 Q 228 160 240 164" stroke="#2c1d11" strokeWidth="3.5" strokeLinecap="round" fill="none" />

          {/* Cheeks (Subtle blush) */}
          <ellipse cx="160" cy="195" rx="9" ry="5" fill="#f43f5e" opacity="0.3" />
          <ellipse cx="240" cy="195" rx="9" ry="5" fill="#f43f5e" opacity="0.3" />

          {/* Nose */}
          <path d="M 198 185 Q 200 192 203 192" stroke="#d97706" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7" />

          {/* Confident Smile */}
          <path d="M 182 210 Q 200 225 218 210" stroke="#991b1b" strokeWidth="3.5" strokeLinecap="round" fill="none" />

          {/* Stylish Glasses */}
          <rect x="150" y="166" width="40" height="28" rx="8" fill="rgba(99, 102, 241, 0.15)" stroke="#e0e7ff" strokeWidth="3.5" />
          <rect x="210" y="166" width="40" height="28" rx="8" fill="rgba(99, 102, 241, 0.15)" stroke="#e0e7ff" strokeWidth="3.5" />
          <line x1="190" y1="178" x2="210" y2="178" stroke="#e0e7ff" strokeWidth="3.5" />
          <line x1="150" y1="174" x2="137" y2="172" stroke="#e0e7ff" strokeWidth="3" />
          <line x1="250" y1="174" x2="263" y2="172" stroke="#e0e7ff" strokeWidth="3" />

          {/* Sleek Laptop in Front */}
          <path d="M 120 325 L 280 325 L 290 355 L 110 355 Z" fill="url(#laptopGrad)" stroke="#475569" strokeWidth="2" />
          <path d="M 130 280 L 270 280 L 275 325 L 125 325 Z" fill="url(#screenGrad)" stroke="#64748b" strokeWidth="2" />
          
          {/* Code lines on Laptop Screen */}
          <rect x="140" y="290" width="40" height="4" rx="2" fill="#38bdf8" />
          <rect x="185" y="290" width="55" height="4" rx="2" fill="#a855f7" />
          <rect x="145" y="298" width="70" height="4" rx="2" fill="#4ade80" />
          <rect x="140" y="306" width="50" height="4" rx="2" fill="#f43f5e" />
          <rect x="195" y="306" width="45" height="4" rx="2" fill="#fbbf24" />

          {/* Glowing Tech Logo on Laptop Lid */}
          <circle cx="200" cy="340" r="4" fill="#38bdf8" />
        </svg>

        {/* Floating Interactive Skill Badges around Avatar */}
        <div className="absolute top-2 left-2 bg-slate-900/90 border border-indigo-500/40 text-indigo-300 text-xs px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1.5 backdrop-blur-md animate-bounce" style={{ animationDuration: '4s' }}>
          <Code className="w-3.5 h-3.5 text-indigo-400" />
          <span className="font-semibold">Web Dev</span>
        </div>

        <div className="absolute top-8 right-0 bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1.5 backdrop-blur-md animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span className="font-semibold">AI / ML</span>
        </div>

        <div className="absolute bottom-6 left-0 bg-slate-900/90 border border-purple-500/40 text-purple-300 text-xs px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1.5 backdrop-blur-md animate-bounce" style={{ animationDuration: '4.2s', animationDelay: '0.5s' }}>
          <Terminal className="w-3.5 h-3.5 text-purple-400" />
          <span className="font-semibold">Python</span>
        </div>

        <div className="absolute bottom-12 right-2 bg-slate-900/90 border border-emerald-500/40 text-emerald-300 text-xs px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1.5 backdrop-blur-md animate-bounce" style={{ animationDuration: '3.8s', animationDelay: '1.5s' }}>
          <Globe className="w-3.5 h-3.5 text-emerald-400" />
          <span className="font-semibold">DevOps</span>
        </div>
      </div>
    </div>
  );
};
