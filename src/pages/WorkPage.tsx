import React, { useState } from 'react';
import { Page, Project, ProjectCategory } from '../types';
import { PROJECTS } from '../data/content';
import { ArrowRight, ArrowUpRight, Filter, Building2, MapPin } from 'lucide-react';

interface WorkPageProps {
  onNavigate: (page: Page) => void;
  onSelectProject: (project: Project) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({
  onNavigate,
  onSelectProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = [
    'All',
    'Website',
    'Branding',
    'Marketing',
    'Advertising',
    'CRM',
    'AI',
    'Automation',
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.categories.includes(activeFilter));

  return (
    <div className="bg-[#FFF8F0] min-h-screen">
      {/* Header Banner */}
      <section className="py-16 sm:py-24 border-b border-[#3B2347]/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C83B7A]" />
            <span className="text-xs uppercase tracking-widest font-bold text-[#3B2347]/80">
              Selected Engagements
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#3B2347] max-w-4xl tracking-tight">
            Work that brings strategy, creative and technology together.
          </h1>

          <p className="text-base sm:text-xl text-[#3B2347]/80 max-w-2xl font-light leading-relaxed">
            Explore how we help ambitious businesses across the UK, US, and Australia turn digital presence into automated customer acquisition.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-[#FFF8F0] border-b border-[#3B2347]/10 sticky top-[69px] z-30 backdrop-blur-md bg-[#FFF8F0]/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            <div className="flex items-center gap-1.5 p-1 bg-[#F8F1E7] rounded-xl border border-[#3B2347]/10">
              {categories.map((cat) => {
                const isActive = activeFilter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C83B7A] ${
                      isActive
                        ? 'bg-[#3B2347] text-white shadow-xs'
                        : 'text-[#3B2347]/70 hover:text-[#3B2347] hover:bg-white/50'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <div className="text-xs text-[#3B2347]/60 whitespace-nowrap hidden sm:block">
              Showing {filteredProjects.length} of {PROJECTS.length} projects
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group p-8 rounded-2xl bg-white border border-[#3B2347]/10 hover:border-[#C83B7A]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Clean unboxed metadata separator */}
                  <div className="flex items-center gap-2 text-xs text-[#3B2347]/60">
                    <span className="font-semibold text-[#C83B7A]">{project.industry}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.location}</span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl text-[#3B2347] group-hover:text-[#C83B7A] transition-colors leading-snug">
                      {project.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3B2347]/80 mt-2 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Clean text services tags */}
                  <div className="pt-3 border-t border-[#3B2347]/10 space-y-1.5">
                    <span className="text-[11px] uppercase tracking-wider text-[#3B2347]/50 font-bold block">
                      Services Provided
                    </span>
                    <div className="text-xs text-[#3B2347]/80 flex flex-wrap gap-x-2 gap-y-1">
                      {project.services.slice(0, 3).map((s, idx) => (
                        <span key={idx} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#C83B7A]" />
                          <span>{s}</span>
                        </span>
                      ))}
                      {project.services.length > 3 && (
                        <span className="text-[#3B2347]/50">
                          +{project.services.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#3B2347]/10 flex items-center justify-between">
                  <span className="text-xs text-[#3B2347]/50 font-medium">Case Overview</span>
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C83B7A] hover:text-[#b42e6a] transition-colors"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 p-8 rounded-2xl bg-white border border-[#3B2347]/10 space-y-4">
              <p className="text-sm text-[#3B2347]/70">
                No case studies found for the selected category.
              </p>
              <button
                onClick={() => setActiveFilter('All')}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#3B2347] rounded-lg"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#3B2347] text-[#FFF8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-5xl text-white">
            Ready to become our next success story?
          </h2>
          <p className="text-base text-[#FFF8F0]/80 max-w-xl mx-auto leading-relaxed">
            Tell us about your brand and what systems need solving. We will outline the optimal roadmap.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#C83B7A] hover:bg-[#b42e6a] shadow-md transition-all"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
