
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const handleCreatorClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the project click
    if (project.creator?.url) {
      window.open(project.creator.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      onClick={() => onClick(project)}
      className="group relative glass rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden shrink-0">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-semibold bg-indigo-500/80 rounded-full backdrop-blur-md">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm line-clamp-2 mb-6">
          {project.description}
        </p>
        
        <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.1em] text-slate-500 font-bold mb-1 hidden">Created by</span>
            <button 
              onClick={handleCreatorClick}
              className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1.5"
            >
              <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center">
                 <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
              </div>
              {project.creator?.name || 'Unknown'}
            </button>
          </div>
          
          <div className="p-2 rounded-full bg-white/5 group-hover:bg-indigo-500/20 transition-colors text-slate-500 group-hover:text-indigo-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </div>
        </div>
      </div>
      
      {/* Glow effect on hover */}
      <div className="absolute -inset-px bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
    </div>
  );
};
