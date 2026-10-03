import React from 'react';
import { Page } from '../types';
import { SERVICE_CATEGORIES } from '../data/content';
import { CheckCircle2, ArrowRight, ArrowUpRight, Sparkles, ShieldCheck } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: Page) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FFF8F0] min-h-screen">
      {/* Header Banner */}
      <section className="py-16 sm:py-24 border-b border-[#3B2347]/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C83B7A]" />
            <span className="text-xs uppercase tracking-widest font-bold text-[#3B2347]/80">
              Capabilities & Offerings
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#3B2347] max-w-4xl tracking-tight">
            Everything you need to grow online.
          </h1>

          <p className="text-base sm:text-xl text-[#3B2347]/80 max-w-2xl font-light leading-relaxed">
            We unite design, customer acquisition, CRM infrastructure, and automated communication into a singular, dependable partnership.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
          {SERVICE_CATEGORIES.map((srv, index) => (
            <div
              key={srv.id}
              id={srv.id}
              className={`p-8 sm:p-14 rounded-3xl border border-[#3B2347]/10 shadow-xs ${
                index % 2 === 1 ? 'bg-white' : 'bg-[#FFF8F0]'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
                {/* Left Column: Overview */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-3xl font-bold text-[#C83B7A]">
                      {srv.number}
                    </span>
                    <span className="text-xs uppercase tracking-widest font-semibold text-[#3B2347]/60">
                      Pillar: {srv.pillar}
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl text-[#3B2347] leading-tight">
                    {srv.title}
                  </h2>

                  <p className="text-base text-[#C83B7A] font-medium italic">
                    "{srv.subtitle}"
                  </p>

                  <p className="text-sm sm:text-base text-[#3B2347]/80 leading-relaxed">
                    {srv.description}
                  </p>

                  {/* Business Benefits */}
                  <div className="pt-4 space-y-3">
                    <span className="text-xs uppercase tracking-wider font-bold text-[#3B2347] block">
                      Direct Business Benefits:
                    </span>
                    <ul className="space-y-2">
                      {srv.businessBenefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3B2347]/85">
                          <CheckCircle2 className="w-4 h-4 text-[#C83B7A] shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => onNavigate('contact')}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#C83B7A] hover:bg-[#b42e6a] transition-all"
                    >
                      <span>Inquire about {srv.title}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Column: Deliverables & Use Cases */}
                <div className="lg:col-span-7 space-y-8 flex flex-col justify-between">
                  {/* Included Deliverables */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-white/70 border border-[#3B2347]/10 space-y-4">
                    <h3 className="text-xs uppercase tracking-wider font-bold text-[#3B2347]">
                      Services Included in this Pillar
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#3B2347]/85">
                      {srv.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C83B7A] mt-2 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Practical Use Cases */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-[#FBE7E2]/50 border border-[#C83B7A]/20 space-y-4">
                    <h3 className="text-xs uppercase tracking-wider font-bold text-[#3B2347]">
                      Example Real-World Applications
                    </h3>
                    <div className="space-y-3">
                      {srv.exampleUseCases.map((useCase, idx) => (
                        <div key={idx} className="text-xs sm:text-sm text-[#3B2347]/80 flex items-start gap-2">
                          <span className="font-mono text-xs text-[#C83B7A] font-bold">
                            0{idx + 1}.
                          </span>
                          <span>{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-20 bg-[#3B2347] text-[#FFF8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-5xl text-white">
            Not sure which combination your business needs?
          </h2>
          <p className="text-base text-[#FFF8F0]/80 max-w-xl mx-auto leading-relaxed">
            We review your current customer journey from initial discovery to retention and recommend the exact missing pieces.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#C83B7A] hover:bg-[#b42e6a] shadow-md transition-all"
            >
              <span>Schedule a Growth Review</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
