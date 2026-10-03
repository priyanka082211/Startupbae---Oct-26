import React from 'react';
import { Page } from '../types';
import { WHY_STARTUPBAE_PILLARS } from '../data/content';
import { ArrowUpRight, Compass, Heart, Users, Target, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FFF8F0] min-h-screen">
      {/* Header Banner */}
      <section className="py-16 sm:py-24 border-b border-[#3B2347]/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C83B7A]" />
            <span className="text-xs uppercase tracking-widest font-bold text-[#3B2347]/80">
              Our Story & Philosophy
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#3B2347] max-w-4xl tracking-tight leading-tight">
            We built the growth partner we wished existed.
          </h1>

          <p className="text-base sm:text-xl text-[#3B2347]/80 max-w-2xl font-light leading-relaxed">
            StartupBae combines creative, marketing and technology capabilities to help businesses build their digital presence and customer systems.
          </p>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-6 text-[#3B2347]/85 text-base sm:text-lg leading-relaxed font-normal">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#3B2347]">
              The fractured agency dilemma
            </h2>

            <p>
              For years, running a growing business meant juggling a fractured collection of specialists: a design agency for your branding, a freelance web developer for your code, a media buyer running ads on Meta, and someone else entirely trying to stitch your CRM together.
            </p>

            <p>
              When leads dropped, the media buyer blamed the landing page. The web developer blamed the CRM. The CRM consultant blamed the ad targeting. Meanwhile, the business owner was left managing the finger-pointing while paying four separate invoices.
            </p>

            <p className="p-6 rounded-2xl bg-white border border-[#3B2347]/10 italic font-serif text-xl text-[#3B2347]">
              "We founded StartupBae to replace the chaos with a unified creative growth studio. One team accountable for the entire arc: from the first impression to the closed deal."
            </p>
          </div>

          {/* The Four Connected Disciplines */}
          <div className="pt-8 border-t border-[#3B2347]/10 space-y-8">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-bold text-[#C83B7A]">
                Our Four Core Disciplines
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#3B2347]">
                Strategy without silos.
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {WHY_STARTUPBAE_PILLARS.map((pillar) => (
                <div
                  key={pillar.id}
                  className="p-6 rounded-2xl bg-white border border-[#3B2347]/10 space-y-3"
                >
                  <div className="text-xs uppercase tracking-wider font-bold text-[#C83B7A]">
                    {pillar.title}
                  </div>
                  <h4 className="font-serif text-xl text-[#3B2347]">
                    {pillar.subtitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#3B2347]/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Principles */}
          <div className="pt-8 border-t border-[#3B2347]/10 space-y-8">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-bold text-[#C83B7A]">
                Studio Values
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#3B2347]">
                How we operate every day
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#FFF8F0] border border-[#3B2347]/10 space-y-2">
                <h4 className="font-serif text-lg text-[#3B2347]">
                  No Gimmicks, Just Systems
                </h4>
                <p className="text-xs text-[#3B2347]/75 leading-relaxed">
                  We don't sell overhyped tech buzzwords. If a tool doesn't measurably improve your response time, conversion rate, or customer experience, we don't build it.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FFF8F0] border border-[#3B2347]/10 space-y-2">
                <h4 className="font-serif text-lg text-[#3B2347]">
                  Respect for Craft
                </h4>
                <p className="text-xs text-[#3B2347]/75 leading-relaxed">
                  Great software and automation should never look cheap. We obsess over typography, spacing, and editorial presence just as much as our database webhooks.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FFF8F0] border border-[#3B2347]/10 space-y-2">
                <h4 className="font-serif text-lg text-[#3B2347]">
                  Direct Human Accountability
                </h4>
                <p className="text-xs text-[#3B2347]/75 leading-relaxed">
                  You communicate directly with the strategists and creators building your systems. No junior account managers playing telephone with overseas teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#3B2347] text-[#FFF8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-5xl text-white">
            Let's build a lasting relationship.
          </h2>
          <p className="text-base text-[#FFF8F0]/80 max-w-xl mx-auto leading-relaxed">
            Whether you are reimagining your brand or fixing lead leakage in your customer pipeline, we are ready to listen.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#C83B7A] hover:bg-[#b42e6a] shadow-md transition-all"
            >
              <span>Get in Touch With Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
