import React from 'react';
import { PageId } from '../types';
import { DETAILED_CASE_STUDIES, SELECTED_WORK_NAMES } from '../data/caseStudies';
import { WorkflowDiagram } from '../components/WorkflowDiagram';
import { CanThisBeAutomated } from '../components/CanThisBeAutomated';
import { Check, ArrowRight, Layers, Cpu, Server, ShieldCheck } from 'lucide-react';

interface CaseStudiesPageProps {
  onNavigate: (page: PageId) => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      {/* Header Banner */}
      <section className="pt-14 pb-16 bg-[#FFF8F0] border-b border-[#2F1F35]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C83B7A]">
              Documented Systems
            </span>
            <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-[#2F1F35] tracking-tight leading-tight">
              Selected Automation Work
            </h1>
            <p className="text-base sm:text-lg text-[#332D35]/85 leading-relaxed">
              Real business automations engineered around existing operations. Each case study below details the technical architecture, connected tools, and workflow logic without exaggerated claims or fabricated statistics.
            </p>
          </div>

          <div className="mt-8 p-4 rounded-xl bg-white border border-[#2F1F35]/10 max-w-2xl text-xs text-[#756C76] flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#C83B7A] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#2F1F35] block mb-0.5">Honest Engineering Standard:</strong>
              We do not invent customer quotes, revenue percentages, or vanity statistics. These case studies represent strictly documented functional implementations.
            </div>
          </div>
        </div>
      </section>

      {/* The 5 Detailed Documented Case Studies */}
      <section className="py-20 bg-white border-b border-[#2F1F35]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {DETAILED_CASE_STUDIES.map((study, idx) => (
            <article
              key={study.id}
              className="border-b border-[#2F1F35]/15 pb-20 last:border-b-0 space-y-8"
            >
              {/* Case Study Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-[#C83B7A]">
                      Project 0{idx + 1}
                    </span>
                    <span className="text-xs text-[#756C76]">·</span>
                    <span className="text-xs font-medium uppercase tracking-wider text-[#756C76]">
                      {study.category}
                    </span>
                  </div>
                  <h2 className="font-serif-display text-3xl sm:text-4xl text-[#2F1F35]">
                    {study.client}
                  </h2>
                </div>

                {/* Tech Badges (clean unboxed text or subtle border) */}
                <div className="flex flex-wrap gap-2 text-xs">
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-[#FFF8F0] border border-[#2F1F35]/15 text-[#2F1F35] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Summary */}
              <p className="text-base text-[#332D35] leading-relaxed max-w-4xl">
                {study.summary}
              </p>

              {/* Workflow Diagram Visual */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#756C76] block">
                  Workflow Architecture Map
                </span>
                <WorkflowDiagram
                  nodes={study.workflowVisual.map((node, i) => ({
                    step: `0${i + 1}`,
                    title: node,
                  }))}
                  theme="light"
                />
              </div>

              {/* Architectural Breakdown Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Features & Implemented Work */}
                <div className="bg-[#FFF8F0] rounded-xl border border-[#2F1F35]/10 p-6 space-y-4">
                  <h3 className="font-serif-display text-lg text-[#2F1F35]">
                    Implemented Systems & Workflows
                  </h3>
                  <ul className="space-y-2.5 text-xs text-[#332D35]">
                    {study.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 text-[#C83B7A] mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Architecture Specs */}
                <div className="bg-[#2F1F35] text-[#FFF8F0] rounded-xl p-6 space-y-4">
                  <h3 className="font-serif-display text-lg text-[#F7B7A3]">
                    Technical Data Path
                  </h3>
                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#F7B7A3] block">
                        Inputs:
                      </span>
                      <p className="text-[#FFF8F0]/75 mt-0.5">
                        {study.architecture.inputs}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#F7B7A3] block">
                        Logic & Processing:
                      </span>
                      <p className="text-[#FFF8F0]/75 mt-0.5">
                        {study.architecture.processing}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#F7B7A3] block">
                        System Outputs:
                      </span>
                      <p className="text-[#FFF8F0]/75 mt-0.5">
                        {study.architecture.outputs}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#F7B7A3] block">
                        Human Handoff:
                      </span>
                      <p className="text-[#FFF8F0]/75 mt-0.5">
                        {study.architecture.handoff}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Selected Work List (All 15 Names) */}
      <section className="py-20 bg-[#FFF8F0] border-b border-[#2F1F35]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C83B7A]">
              Selected Clients & Work
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#2F1F35]">
              Automation & Digital Work
            </h2>
            <p className="text-xs text-[#756C76]">
              A cross-section of projects where workflow, technical automation, or digital systems have been built.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {SELECTED_WORK_NAMES.map((name, i) => (
              <div
                key={i}
                className="bg-white rounded-lg border border-[#2F1F35]/10 p-4 flex flex-col justify-between"
              >
                <span className="font-mono text-[10px] text-[#756C76]">
                  {i < 9 ? `0${i + 1}` : i + 1}
                </span>
                <span className="font-serif-display text-base text-[#2F1F35] mt-2">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <CanThisBeAutomated />
    </div>
  );
};
