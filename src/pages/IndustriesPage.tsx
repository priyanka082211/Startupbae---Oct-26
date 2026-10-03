import React from 'react';
import { Page } from '../types';
import { INDUSTRIES } from '../data/content';
import { CheckCircle2, ArrowRight, ArrowUpRight, HelpCircle, Workflow } from 'lucide-react';

interface IndustriesPageProps {
  onNavigate: (page: Page) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FFF8F0] min-h-screen">
      {/* Header Banner */}
      <section className="py-16 sm:py-24 border-b border-[#3B2347]/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C83B7A]" />
            <span className="text-xs uppercase tracking-widest font-bold text-[#3B2347]/80">
              Sector Specialization
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#3B2347] max-w-4xl tracking-tight">
            Tailored growth architectures for key industries.
          </h1>

          <p className="text-base sm:text-xl text-[#3B2347]/80 max-w-2xl font-light leading-relaxed">
            Every market has unique customer friction points. We build bespoke digital presence and automation workflows that respect your industry's buying cycle.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {INDUSTRIES.map((ind, index) => (
            <div
              key={ind.id}
              id={ind.id}
              className={`p-8 sm:p-12 rounded-3xl border border-[#3B2347]/10 ${
                index % 2 === 0 ? 'bg-white' : 'bg-[#FFF8F0]'
              }`}
            >
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#3B2347]/10 pb-4">
                  <div>
                    <h2 className="font-serif text-3xl sm:text-4xl text-[#3B2347]">
                      {ind.name}
                    </h2>
                    <p className="text-xs uppercase tracking-wider font-semibold text-[#C83B7A] mt-1">
                      {ind.tagline}
                    </p>
                  </div>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3B2347] hover:text-[#C83B7A] self-start sm:self-auto"
                  >
                    <span>Request Industry Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <p className="text-sm sm:text-base text-[#3B2347]/85 max-w-3xl leading-relaxed">
                  {ind.summary}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  {/* Common Industry Bottlenecks */}
                  <div className="p-6 rounded-2xl bg-[#FFF8F0]/70 border border-[#3B2347]/10 space-y-3">
                    <h3 className="text-xs uppercase tracking-wider font-bold text-[#3B2347] flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-[#C83B7A]" />
                      <span>Friction Points We Resolve</span>
                    </h3>
                    <ul className="space-y-2.5">
                      {ind.commonChallenges.map((item, i) => (
                        <li key={i} className="text-xs sm:text-sm text-[#3B2347]/80 flex items-start gap-2">
                          <span className="text-[#C83B7A] font-bold">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* StartupBae Solutions */}
                  <div className="p-6 rounded-2xl bg-[#FBE7E2]/50 border border-[#C83B7A]/20 space-y-3">
                    <h3 className="text-xs uppercase tracking-wider font-bold text-[#3B2347] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C83B7A]" />
                      <span>Custom Systems We Implement</span>
                    </h3>
                    <ul className="space-y-2.5">
                      {ind.solutions.map((item, i) => (
                        <li key={i} className="text-xs sm:text-sm text-[#3B2347]/80 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C83B7A] mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Key Workflow Architecture */}
                <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#3B2347]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 font-semibold text-[#3B2347]">
                    <Workflow className="w-4 h-4 text-[#C83B7A]" />
                    <span>Typical Growth Pipeline:</span>
                  </div>
                  <div className="text-[#3B2347]/80 font-mono text-[11px] sm:text-xs">
                    {ind.keyWorkflows[0]}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#3B2347] text-[#FFF8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-5xl text-white">
            Operate in another sector?
          </h2>
          <p className="text-base text-[#FFF8F0]/80 max-w-xl mx-auto leading-relaxed">
            Our core principles—Brand, Acquisition, CRM, and Follow-Up—adapt to any business where customer trust and rapid response matter.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#C83B7A] hover:bg-[#b42e6a] shadow-md transition-all"
            >
              <span>Discuss Your Specific Use Case</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
