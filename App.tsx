
import React, { useState, useMemo } from 'react';
import { Project, ProjectCategory } from './types';
import { INITIAL_PROJECTS } from './constants';
import { ProjectCard } from './components/ProjectCard';
import { AIChatAssistant } from './components/AIChatAssistant';

const DUMMY_MEMBERS = [
  { name: 'John Lloyd Tortor', role: 'Gwapo', avatar: 'https://i.sstatic.net/14h3t.png' }
];

const App: React.FC = () => {
  const [projects] = useState<Project[]>(INITIAL_PROJECTS);
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleProjectClick = (project: Project) => {
    if (project.demoUrl) {
      window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Members', href: '#members' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen pb-20 selection:bg-indigo-500 selection:text-white bg-[#0f172a]">
      {/* Sticky Navigation Bar */}
      <nav className="sticky top-0 z-[60] glass border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <a href="#" className="text-2xl font-black tracking-tighter text-white hover:text-indigo-400 transition-colors flex items-center gap-2">
              tortor.org
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
             {navLinks.map((link) => (
               <a 
                 key={link.name} 
                 href={link.href} 
                 className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
               >
                 {link.name}
               </a>
             ))}
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-slate-400 p-2 hover:text-white transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[55] md:hidden">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-300" />
          <div className="relative flex flex-col items-center justify-center h-full space-y-10 animate-in slide-in-from-top-10 duration-500">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-bold text-white hover:text-indigo-400 transition-all tracking-tight"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-10 flex gap-6">
              <a href="#" className="text-slate-500 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">GitHub</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">Discord</a>
            </div>
          </div>
        </div>
      )}

      {/* Hero Header */}
      <header className="relative pt-20 pb-24 px-6 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute top-20 -right-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] -z-10 animate-pulse [animation-delay:1s]" />

        <div className="max-w-6xl mx-auto text-center space-y-6">
          <div className="inline-block glass px-4 py-1.5 rounded-full text-sm font-medium text-indigo-400 mb-4 hidden">
            Available for new opportunities ⚡️
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white">
            Building the <span className="gradient-text">Future</span>, Guided by the <span className="gradient-text">Tortor</span> Legacy.  <br />
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A unified endeavor dedicated to the pursuit of high-performance innovation and the advancement of the future. We bridge the gap between today’s potential and tomorrow’s reality through shared excellence.
          </p>
        </div>
      </header>

      {/* Section: Projects */}
      <section id="projects" className="py-24 px-6 border-b border-white/5 scroll-mt-20">
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Featured <span className="gradient-text">Projects</span></h2>
          <p className="text-slate-400 max-w-xl">A gallery of technical excellence across multiple domains.</p>
        </div>

        {/* Filter Bar */}
        <div className="max-w-6xl mx-auto mb-12 glass rounded-3xl p-4 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex overflow-x-auto w-full md:w-auto gap-2 pb-4 md:pb-0 scrollbar-thin">
            <button 
              onClick={() => setSelectedCategory('All')}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                selectedCategory === 'All' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25' : 'hover:bg-white/5 text-slate-400'
              }`}
            >
              All Projects
            </button>
            {Object.values(ProjectCategory).map(category => (
              <button 
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === category ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25' : 'hover:bg-white/5 text-slate-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80 group">
            <input 
              type="text" 
              placeholder="Search projects or tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-2xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all group-hover:border-slate-700 text-white"
            />
            <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-hover:text-slate-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onClick={handleProjectClick}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full glass mb-6">
                <svg className="w-10 h-10 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-300">No projects found</h3>
              <p className="text-slate-500">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Section: Members */}
      <section id="members" className="py-24 px-6 border-b border-white/5 scroll-mt-20">
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white"><span className="gradient-text">Members</span></h2>
          <p className="text-slate-400 max-w-xl">The creative minds behind our most ambitious digital explorations.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {DUMMY_MEMBERS.map(member => (
            <div key={member.name} className="glass p-6 rounded-3xl text-center group hover:bg-white/5 transition-all">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-slate-700 group-hover:border-indigo-500 transition-colors">
                <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-lg text-white">{member.name}</h4>
              <p className="text-slate-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: About */}
      <section id="about" className="py-32 px-6 border-b border-white/5 scroll-mt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">About <span className="gradient-text">tortor.org</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Our approach combines the rigor of technical research with a commitment to enduring impact. By merging high-performance engineering with visionary thinking, we don't just adapt to the future—we architect it.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="glass p-6 rounded-2xl">
                <div className="text-3xl font-bold text-indigo-400 mb-1">3</div>
                <div className="text-xs uppercase tracking-widest font-bold text-slate-500">Total Projects</div>
              </div>
            </div>
          </div>
          <div className="glass rounded-3xl p-2 h-96 overflow-hidden relative">
            <img src="https://picsum.photos/seed/about/800/800" alt="Team workspace" className="w-full h-full object-cover rounded-2xl opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
               <span className="text-white font-medium italic">"Designing the invisible layer of the digital world."</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Contact */}
      <section id="contact" className="py-32 px-6 scroll-mt-20">
        <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-[3rem] space-y-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 blur-[80px] -z-10" />
          
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Contact <span className="gradient-text">Information</span></h2>
            <p className="text-slate-400">Feel free to reach out for collaborations or inquiries.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Email */}
            <a href="mailto:johnlloydttortor@gmail.com" className="group glass p-8 rounded-3xl hover:bg-white/5 transition-all text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-indigo-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-indigo-400">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <h4 className="text-indigo-400 uppercase tracking-widest text-xs font-bold mb-2">Email</h4>
              <p className="text-white font-semibold break-all">johnlloydttortor@gmail.com</p>
            </a>

            {/* Phone */}
            <a href="tel:+639539870591" className="group glass p-8 rounded-3xl hover:bg-white/5 transition-all text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-purple-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-purple-400">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <h4 className="text-purple-400 uppercase tracking-widest text-xs font-bold mb-2">Phone</h4>
              <p className="text-white font-semibold">+63 953 987 0591</p>
            </a>

            {/* Location */}
            <div className="group glass p-8 rounded-3xl hover:bg-white/5 transition-all text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-blue-400">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <h4 className="text-blue-400 uppercase tracking-widest text-xs font-bold mb-2">Location</h4>
              <p className="text-white font-semibold">Bontoc, Southern Leyte, PH</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="pt-8 border-t border-white/5 flex flex-col items-center gap-6">
            <h4 className="text-slate-500 uppercase tracking-[0.2em] text-xs font-bold">Connect with me</h4>
            <div className="flex gap-6">
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:bg-indigo-600/30 hover:scale-110 transition-all text-slate-300 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              {/* GitHub */}
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:bg-slate-700/50 hover:scale-110 transition-all text-slate-300 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              {/* TikTok */}
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:bg-rose-600/30 hover:scale-110 transition-all text-slate-300 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-16 text-center">
        <p className="text-slate-600 text-sm pb-12">
          &copy; {new Date().getFullYear()} tortor.org. All rights reserved.
        </p>
      </footer>

      <AIChatAssistant />
    </div>
  );
};

export default App;
