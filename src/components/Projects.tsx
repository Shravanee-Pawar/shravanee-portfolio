import React, { useState } from 'react';
import type { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { FolderGit2, Eye, Sparkles, Activity, Sprout, ShoppingBag, Compass } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectsData: Project[] = [
    {
      id: 'medradar-ai',
      title: 'MedRadar AI',
      subtitle: 'Emergency Healthcare Resource Platform',
      description: 'An AI-powered emergency healthcare resource platform that helps users find hospitals, doctors, ICU beds, blood, ambulances and other emergency resources.',
      longDescription: 'MedRadar AI is an intelligent healthcare platform created to streamline critical decision-making during medical emergencies. Using AI search and real-time mapping algorithms, users can locate nearby medical facilities, check live ICU bed availability, contact verified ambulance providers, and query blood banks during urgent situations.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'AI', 'MongoDB/Firestore'],
      category: 'AI / ML',
      githubUrl: 'https://github.com/shravaneepawar-placeholder/MedRadar-AI',
      features: [
        'AI-powered emergency facility recommendation',
        'Real-time ICU bed and blood availability tracking',
        'One-touch emergency ambulance dispatch support',
        'Interactive location-based hospital finder'
      ],
      gradient: 'from-blue-600/30 via-indigo-900/60 to-slate-900',
      accentColor: 'text-cyan-400',
    },
    {
      id: 'cropsense-ai',
      title: 'CropSense AI',
      subtitle: 'Smart Farming Assistant',
      description: 'An AI-powered agricultural decision-support platform that recommends suitable crops using weather and agricultural data, helping farmers make informed cultivation decisions.',
      longDescription: 'CropSense AI was developed during HackFusion 2026 as a smart decision-support system for agriculture. By processing environmental parameters, rainfall patterns, soil composition, and seasonal weather trends, CropSense AI recommends optimal crop types, yield expectations, and farming practices to maximize productivity.',
      technologies: ['Python', 'FastAPI', 'Machine Learning', 'Firebase', 'Pandas', 'Scikit-learn'],
      category: 'AI / ML',
      githubUrl: 'https://github.com/shravaneepawar-placeholder/CropSense-AI',
      features: [
        'ML-based crop recommendation engine based on soil & weather',
        'Soil fertility & rainfall trend analysis',
        'Intuitive farmer-friendly dashboard interface',
        'Developed for HackFusion 2026 hackathon'
      ],
      gradient: 'from-emerald-600/30 via-teal-900/60 to-slate-900',
      accentColor: 'text-emerald-400',
    },
    {
      id: 'farm2home',
      title: 'Farm2Home',
      subtitle: 'Farmer-to-Consumer Platform',
      description: 'A digital platform that connects farmers directly with consumers, helping promote fair pricing and reducing dependency on intermediaries.',
      longDescription: 'Farm2Home is a direct-to-consumer agricultural portal developed for Sinhagad Hackathon 2026. The platform empowers local farmers to list fresh produce directly to retail buyers and households, eliminating middlemen markups, ensuring fair crop valuation for farmers, and delivering farm-fresh produce to consumers.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Web Technologies'],
      category: 'Social Impact',
      githubUrl: 'https://github.com/shravaneepawar-placeholder/Farm2Home',
      features: [
        'Direct farmer-to-consumer marketplace catalog',
        'Transparent pricing mechanism reducing middleman commission',
        'Localized produce categories & ordering flow',
        'Developed for Sinhagad Hackathon 2026'
      ],
      gradient: 'from-amber-600/30 via-orange-900/60 to-slate-900',
      accentColor: 'text-amber-400',
    },
    {
      id: 'konkan-navigator',
      title: 'Konkan Navigator',
      subtitle: 'Konkan Tourism Website',
      description: 'A tourism website designed to help users explore Konkan destinations, attractions, travel information and local experiences.',
      longDescription: 'Konkan Navigator is an interactive tourism portal celebrating the coastal beauty, heritage, and culture of Konkan. It offers travel itineraries, beach guides, historic fort highlights, authentic regional cuisine recommendations, and local travel tips for tourists exploring Maharashtra coastal line.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Web Technologies'],
      category: 'Tourism',
      githubUrl: 'https://github.com/shravaneepawar-placeholder/Konkan-Navigator',
      features: [
        'Comprehensive coastal destination & beach directory',
        'Interactive Konkan travel itineraries & map highlights',
        'Culinary guides for authentic local seafood & Konkan dishes',
        'Responsive mobile-friendly travel exploration'
      ],
      gradient: 'from-cyan-600/30 via-blue-900/60 to-slate-900',
      accentColor: 'text-cyan-300',
    },
  ];

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'medradar-ai':
        return Activity;
      case 'cropsense-ai':
        return Sprout;
      case 'farm2home':
        return ShoppingBag;
      case 'konkan-navigator':
        return Compass;
      default:
        return FolderGit2;
    }
  };

  return (
    <section id="projects" className="py-24 relative bg-slate-900 border-t border-slate-800">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Key <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3 max-w-2xl mx-auto">
            Practical technology solutions addressing real-world challenges in healthcare, agriculture, direct trade, and regional tourism.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 rounded-full mx-auto mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => {
            const Icon = getProjectIcon(project.id);
            return (
              <div
                key={project.id}
                className="glass-card rounded-2xl border border-slate-800 bg-slate-800/60 overflow-hidden flex flex-col justify-between group hover:border-indigo-500/50 hover:shadow-2xl transition-all duration-300"
              >
                {/* Top Card Gradient Header */}
                <div className={`p-6 bg-gradient-to-r ${project.gradient} border-b border-slate-700/60 relative`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className={`w-6 h-6 ${project.accentColor}`} />
                    </div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-950/80 border border-slate-700 text-indigo-300">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-300 mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Technologies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700/80 text-indigo-300 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 py-4 bg-slate-900/80 border-t border-slate-800 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-md shadow-indigo-600/30 cursor-pointer"
                  >
                    <Eye className="w-4 h-4 text-cyan-300" />
                    <span>View Details</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold text-xs border border-slate-700 flex items-center justify-center gap-1.5 transition-all"
                    title="GitHub Repository (Placeholder)"
                  >
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>GitHub</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
