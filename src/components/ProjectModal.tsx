import React from 'react';
import { Project } from '../types';
import { X, ArrowRight, CheckCircle2, MapPin, Building2, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onStartProject: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onStartProject,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#3B2347]/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#FFF8F0] border border-[#3B2347]/15 rounded-2xl shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        {/* Top Header Bar */}
        <div className="bg-[#3B2347] text-[#FFF8F0] px-6 sm:px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#F7B7A3]">
              Case Study
            </span>
            <span className="text-[#FFF8F0]/30">/</span>
            <span className="text-xs text-[#FFF8F0]/80">{project.industry}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#FFF8F0]/70 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C83B7A]"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 sm:py-10 space-y-8 max-h-[75vh] overflow-y-auto">
          {/* Main Title & Tagline */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#3B2347]/70">
              <span className="flex items-center gap-1 font-medium">
                <Building2 className="w-3.5 h-3.5 text-[#C83B7A]" />
                {project.client}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#C83B7A]" />
                {project.location}
              </span>
            </div>

            <h3
              id="modal-headline"
              className="text-2xl sm:text-3xl font-serif text-[#3B2347] tracking-tight leading-snug"
            >
              {project.name}
            </h3>

            <p className="text-base text-[#3B2347]/90 leading-relaxed font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Categories & Scope of Engagement */}
          <div className="space-y-2 pt-2 border-t border-[#3B2347]/10">
            <span className="text-xs uppercase tracking-widest text-[#3B2347]/60 font-semibold block">
              Engagement Scope
            </span>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#3B2347]/80">
              {project.services.map((srv, idx) => (
                <span key={idx} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#C83B7A]" />
                  <span>{srv}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#C83B7A]">
              Project Overview
            </h4>
            <p className="text-sm text-[#3B2347]/85 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-xl bg-white border border-[#3B2347]/10 space-y-2">
              <h5 className="text-xs uppercase font-bold text-[#3B2347] tracking-wide">
                The Friction Point
              </h5>
              <p className="text-xs sm:text-sm text-[#3B2347]/80 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#FBE7E2]/50 border border-[#C83B7A]/20 space-y-2">
              <h5 className="text-xs uppercase font-bold text-[#3B2347] tracking-wide">
                The Solution & System
              </h5>
              <p className="text-xs sm:text-sm text-[#3B2347]/80 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Deliverables */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#3B2347]">
              Key Deliverables & Implemented Systems
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.deliverables.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-[#3B2347]/85">
                  <CheckCircle2 className="w-4 h-4 text-[#C83B7A] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="bg-[#FFF8F0] border-t border-[#3B2347]/10 px-6 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#3B2347]/60">
            Have a similar growth challenge?
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-[#3B2347]/70 hover:text-[#3B2347]"
            >
              Back to Projects
            </button>
            <button
              onClick={() => {
                onClose();
                onStartProject();
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#C83B7A] hover:bg-[#b42e6a] shadow-xs transition-colors"
            >
              <span>Build Something Similar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
