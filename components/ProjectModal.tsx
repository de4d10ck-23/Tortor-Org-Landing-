
import React, { useEffect } from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm transition-all duration-300">
      <div 
        className="glass w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-300 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 glass rounded-full hover:bg-white/10 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>

        <div className="overflow-y-auto">
          <div className="relative h-64 md:h-96">
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="px-4 py-1.5 text-sm font-semibold bg-indigo-500 rounded-full mb-4 inline-block">
                {project.category}
              </span>
              <h2 className="text-4xl font-bold">{project.title}</h2>
            </div>
          </div>

          <div className="p-8 grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h4 className="text-indigo-400 font-semibold uppercase tracking-widest text-sm mb-2">Overview</h4>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {project.longDescription || project.description}
                </p>
              </div>

              <div>
                <h4 className="text-indigo-400 font-semibold uppercase tracking-widest text-sm mb-2">Key Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 glass rounded-lg text-sm text-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass p-6 rounded-2xl space-y-4">
                <h4 className="text-indigo-400 font-semibold uppercase tracking-widest text-sm">Project Stats</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Released</span>
                    <span className="text-slate-200 font-medium">{project.date}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Stars</span>
                    <span className="text-indigo-400 font-bold">{project.stats?.stars?.toLocaleString() || 0}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Views</span>
                    <span className="text-indigo-400 font-bold">{project.stats?.views?.toLocaleString() || 0}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 rounded-2xl font-bold transition-all shadow-lg shadow-indigo-600/20 active:scale-[0.98]">
                  View Live Demo
                </button>
                <button className="w-full py-4 glass border-white/10 hover:bg-white/5 rounded-2xl font-bold transition-all active:scale-[0.98]">
                  Github Repository
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />
    </div>
  );
};
