import React, { useState } from 'react';
import { Page, Project } from '../types';
import {
  BRANDS_WORKED_WITH,
  SERVICE_CATEGORIES,
  JOURNEY_STEPS,
  PROJECTS,
  INDUSTRIES,
  PROCESS_STEPS,
  WHY_STARTUPBAE_PILLARS,
} from '../data/content';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  MessageCircle,
  Layers,
  TrendingUp,
  Workflow,
  Cpu,
  CheckCircle,
  ChevronRight,
  Compass,
  Palette,
  Megaphone,
  Database,
  Bot,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onSelectProject: (project: Project) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProject,
}) => {
  const [activeJourneyIndex, setActiveJourneyIndex] = useState(0);

  // Selected work highlight (first 4 featured projects)
  const featuredProjects = PROJECTS.slice(0, 4);

  return (
    <div className="space-y-0">
      {/* SECTION 1 - HERO */}
      <section className="relative overflow-hidden pt-12 sm:pt-20 pb-20 sm:pb-32 bg-[#FFF8F0] border-b border-[#3B2347]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 z-10">
              {/* Small Label */}
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C83B7A]" />
                <span className="text-xs uppercase tracking-widest font-bold text-[#3B2347]/80">
                  DIGITAL GROWTH STUDIO
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#3B2347] tracking-tight leading-[1.08]">
                We build brands that get noticed.
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-xl text-[#3B2347]/80 max-w-xl font-normal leading-relaxed">
                From brand and website to marketing, lead generation and customer automation, we bring the pieces together to help your business attract, convert and grow.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-medium text-white bg-[#C83B7A] hover:bg-[#b42e6a] shadow-sm hover:shadow-md transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C83B7A]"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('work')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-base font-medium text-[#3B2347] hover:text-[#C83B7A] bg-[#FFF8F0] border border-[#3B2347]/20 hover:border-[#C83B7A] transition-all"
                >
                  <span>View Our Work</span>
                  <ArrowRight className="w-4 h-4 opacity-75" />
                </button>
              </div>

              {/* Quiet Geographic Scope */}
              <div className="pt-4 flex items-center gap-3 text-xs text-[#3B2347]/60">
                <span>Working with ambitious teams in</span>
                <span className="font-semibold text-[#3B2347]">United States</span>
                <span>·</span>
                <span className="font-semibold text-[#3B2347]">United Kingdom</span>
                <span>·</span>
                <span className="font-semibold text-[#3B2347]">Australia</span>
              </div>
            </div>

            {/* Right Abstract Visual Composition */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              {/* Editorial Graphic Canvas */}
              <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-[#FBE7E2] via-[#FFF8F0] to-[#F7B7A3]/40 p-6 sm:p-8 border border-[#3B2347]/10 shadow-lg flex flex-col justify-between overflow-hidden">
                {/* Decorative Subtle Geometric Shapes */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-[#F7B7A3]/30 rounded-full blur-2xl -mr-10 -mt-10" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#C83B7A]/15 rounded-full blur-3xl -ml-12 -mb-12" />

                {/* Top Composition Badge */}
                <div className="relative z-10 flex items-center justify-between border-b border-[#3B2347]/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#C83B7A]" />
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#3B2347]">
                      The Growth Stack
                    </span>
                  </div>
                  <span className="text-xs text-[#3B2347]/50 font-serif italic">
                    Studio Edition
                  </span>
                </div>

                {/* Core Visual Elements - 4 Pillars Connection */}
                <div className="relative z-10 my-4 space-y-2.5">
                  <div className="p-3.5 rounded-xl bg-white/90 border border-[#3B2347]/10 shadow-xs flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-[#3B2347] flex items-center justify-center text-white text-xs font-serif">
                        01
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#3B2347]">BUILD</div>
                        <div className="text-[11px] text-[#3B2347]/60">Brand, Web & Assets</div>
                      </div>
                    </div>
                    <span className="text-[11px] text-[#C83B7A] font-medium">Bespoke</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/90 border border-[#3B2347]/10 shadow-xs flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-[#C83B7A] flex items-center justify-center text-white text-xs font-serif">
                        02
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#3B2347]">ATTRACT</div>
                        <div className="text-[11px] text-[#3B2347]/60">Meta & Google Ads</div>
                      </div>
                    </div>
                    <span className="text-[11px] text-[#3B2347]/70 font-medium">High Intent</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/90 border border-[#3B2347]/10 shadow-xs flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-[#3B2347] flex items-center justify-center text-white text-xs font-serif">
                        03
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#3B2347]">CONVERT</div>
                        <div className="text-[11px] text-[#3B2347]/60">CRM & Instant Bookings</div>
                      </div>
                    </div>
                    <span className="text-[11px] text-[#C83B7A] font-medium">60s Response</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/90 border border-[#3B2347]/10 shadow-xs flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-[#F7B7A3] text-[#3B2347] flex items-center justify-center text-xs font-serif font-bold">
                        04
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#3B2347]">GROW</div>
                        <div className="text-[11px] text-[#3B2347]/60">AI Triage & Retention</div>
                      </div>
                    </div>
                    <span className="text-[11px] text-[#3B2347]/70 font-medium">Continuous</span>
                  </div>
                </div>

                {/* Bottom Graphic Note */}
                <div className="relative z-10 pt-3 border-t border-[#3B2347]/10 flex items-center justify-between text-xs text-[#3B2347]/70">
                  <span>Unified Architecture</span>
                  <span className="text-[#C83B7A] font-semibold">End-to-End</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - BRAND STATEMENT */}
      <section className="py-24 sm:py-36 bg-[#FFF8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="text-xs uppercase tracking-widest font-bold text-[#C83B7A]">
            The Core Philosophy
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#3B2347] tracking-tight leading-[1.15]">
            "Your business needs more than a website."
          </h2>

          <p className="text-lg sm:text-2xl text-[#3B2347]/80 max-w-3xl mx-auto font-light leading-relaxed">
            It needs a digital presence that gets attention, marketing that brings people in, and systems that help turn opportunities into customers.
          </p>
        </div>
      </section>

      {/* SECTION 3 - BUILD / ATTRACT / CONVERT / GROW */}
      <section className="py-20 sm:py-28 bg-white border-y border-[#3B2347]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#C83B7A]">
              The Four Dimensions
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#3B2347]">
              How we take your business forward.
            </h2>
            <p className="text-sm sm:text-base text-[#3B2347]/70">
              A comprehensive system where design, acquisition, conversion, and retention work as a single engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* BUILD */}
            <div className="p-8 rounded-2xl bg-[#FFF8F0] border border-[#3B2347]/10 flex flex-col justify-between hover:border-[#C83B7A]/40 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#3B2347] text-white flex items-center justify-center font-serif text-lg font-bold">
                  B
                </div>
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#C83B7A]">
                    Phase 01
                  </span>
                  <h3 className="font-serif text-2xl text-[#3B2347]">BUILD</h3>
                </div>
                <p className="text-sm text-[#3B2347]/85 font-medium leading-relaxed">
                  "Create a brand and digital presence people remember."
                </p>
                <div className="pt-4 border-t border-[#3B2347]/10">
                  <span className="text-xs uppercase tracking-wider text-[#3B2347]/60 block mb-2 font-semibold">
                    Includes:
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs text-[#3B2347]/80">
                    <span>Websites</span> · <span>Landing Pages</span> · <span>Funnels</span> · <span>Branding</span> · <span>Creative</span> · <span>Video</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ATTRACT */}
            <div className="p-8 rounded-2xl bg-[#FBE7E2]/50 border border-[#3B2347]/10 flex flex-col justify-between hover:border-[#C83B7A]/40 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#C83B7A] text-white flex items-center justify-center font-serif text-lg font-bold">
                  A
                </div>
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#3B2347]">
                    Phase 02
                  </span>
                  <h3 className="font-serif text-2xl text-[#3B2347]">ATTRACT</h3>
                </div>
                <p className="text-sm text-[#3B2347]/85 font-medium leading-relaxed">
                  "Put your business in front of the right people."
                </p>
                <div className="pt-4 border-t border-[#3B2347]/10">
                  <span className="text-xs uppercase tracking-wider text-[#3B2347]/60 block mb-2 font-semibold">
                    Includes:
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs text-[#3B2347]/80">
                    <span>Social Media</span> · <span>Content</span> · <span>Meta Ads</span> · <span>Google Ads</span> · <span>Lead Generation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CONVERT */}
            <div className="p-8 rounded-2xl bg-[#FFF8F0] border border-[#3B2347]/10 flex flex-col justify-between hover:border-[#C83B7A]/40 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#3B2347] text-white flex items-center justify-center font-serif text-lg font-bold">
                  C
                </div>
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#C83B7A]">
                    Phase 03
                  </span>
                  <h3 className="font-serif text-2xl text-[#3B2347]">CONVERT</h3>
                </div>
                <p className="text-sm text-[#3B2347]/85 font-medium leading-relaxed">
                  "Turn interest into organised opportunities."
                </p>
                <div className="pt-4 border-t border-[#3B2347]/10">
                  <span className="text-xs uppercase tracking-wider text-[#3B2347]/60 block mb-2 font-semibold">
                    Includes:
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs text-[#3B2347]/80">
                    <span>CRM</span> · <span>Lead Capture</span> · <span>Pipelines</span> · <span>Appointments</span> · <span>WhatsApp</span> · <span>SMS</span> · <span>Email</span>
                  </div>
                </div>
              </div>
            </div>

            {/* GROW */}
            <div className="p-8 rounded-2xl bg-[#F7B7A3]/30 border border-[#3B2347]/10 flex flex-col justify-between hover:border-[#C83B7A]/40 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#3B2347] text-white flex items-center justify-center font-serif text-lg font-bold">
                  G
                </div>
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#C83B7A]">
                    Phase 04
                  </span>
                  <h3 className="font-serif text-2xl text-[#3B2347]">GROW</h3>
                </div>
                <p className="text-sm text-[#3B2347]/85 font-medium leading-relaxed">
                  "Keep customers moving with smarter systems."
                </p>
                <div className="pt-4 border-t border-[#3B2347]/10">
                  <span className="text-xs uppercase tracking-wider text-[#3B2347]/60 block mb-2 font-semibold">
                    Includes:
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs text-[#3B2347]/80">
                    <span>AI</span> · <span>Voice Assistants</span> · <span>Follow-up</span> · <span>Lead Nurturing</span> · <span>Automation</span> · <span>Customer Journeys</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - SERVICES */}
      <section className="py-20 sm:py-32 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs uppercase tracking-widest font-bold text-[#C83B7A]">
                Comprehensive Capabilities
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#3B2347]">
                Everything you need to grow online.
              </h2>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#C83B7A] hover:bg-[#b42e6a] transition-colors self-start md:self-auto"
            >
              <span>Let's build something.</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICE_CATEGORIES.map((srv) => (
              <div
                key={srv.id}
                className="p-8 sm:p-10 rounded-2xl bg-white border border-[#3B2347]/10 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-[#3B2347]/10 pb-4">
                    <span className="font-serif text-2xl text-[#C83B7A] font-bold">
                      {srv.number}
                    </span>
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#3B2347]/60">
                      {srv.pillar}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#3B2347] mb-2">
                      {srv.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#3B2347]/80 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#3B2347]/60 block">
                      Core Offerings:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#3B2347]/85">
                      {srv.deliverables.slice(0, 4).map((d, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C83B7A] shrink-0" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-[#3B2347]/10 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('services')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3B2347] hover:text-[#C83B7A] transition-colors"
                  >
                    <span>Explore details & use cases</span>
                    <ChevronRight className="w-4 h-4 text-[#C83B7A]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - COMPLETE CUSTOMER JOURNEY */}
      <section className="py-20 sm:py-32 bg-white border-y border-[#3B2347]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#C83B7A]">
              Connected Systems
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#3B2347]">
              From first click to customer.
            </h2>
            <p className="text-base sm:text-lg text-[#3B2347]/80 leading-relaxed font-light">
              We don't just create the front end. We can build the systems behind it too.
            </p>
          </div>

          {/* Interactive Flow Visualizer */}
          <div className="space-y-8">
            {/* Flow Stepper Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3">
              {JOURNEY_STEPS.map((item, index) => {
                const isSelected = activeJourneyIndex === index;
                return (
                  <button
                    key={item.step}
                    onClick={() => setActiveJourneyIndex(index)}
                    className={`p-3.5 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#3B2347] text-[#FFF8F0] border-[#3B2347] shadow-md scale-102'
                        : 'bg-[#FFF8F0] text-[#3B2347] border-[#3B2347]/10 hover:border-[#C83B7A]/40'
                    }`}
                  >
                    <span
                      className={`text-[11px] font-mono font-bold block mb-1 ${
                        isSelected ? 'text-[#F7B7A3]' : 'text-[#C83B7A]'
                      }`}
                    >
                      {item.step}
                    </span>
                    <span className="text-xs font-semibold leading-tight line-clamp-2">
                      {item.phase}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Step Deep-Dive Card */}
            <div className="p-8 sm:p-12 rounded-2xl bg-[#FFF8F0] border border-[#3B2347]/15 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs uppercase tracking-widest font-bold text-[#C83B7A]">
                      Step {JOURNEY_STEPS[activeJourneyIndex].step} of 08
                    </span>
                    <span className="text-[#3B2347]/30">/</span>
                    <span className="text-xs text-[#3B2347]/70 font-semibold uppercase">
                      Journey Architecture
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-[#3B2347]">
                    {JOURNEY_STEPS[activeJourneyIndex].phase}
                  </h3>

                  <p className="text-base sm:text-lg text-[#3B2347]/85 leading-relaxed">
                    {JOURNEY_STEPS[activeJourneyIndex].description}
                  </p>

                  <div className="pt-2 text-sm text-[#3B2347]/70 italic">
                    Focus: {JOURNEY_STEPS[activeJourneyIndex].detail}
                  </div>
                </div>

                <div className="md:col-span-4 flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-[#3B2347]/10 text-center space-y-3">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#3B2347]/60">
                    Next In Sequence
                  </span>
                  <div className="text-sm font-semibold text-[#3B2347]">
                    {JOURNEY_STEPS[(activeJourneyIndex + 1) % JOURNEY_STEPS.length].phase}
                  </div>
                  <button
                    onClick={() =>
                      setActiveJourneyIndex(
                        (activeJourneyIndex + 1) % JOURNEY_STEPS.length
                      )
                    }
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C83B7A] hover:text-[#b42e6a]"
                  >
                    <span>View next phase</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - SELECTED WORK */}
      <section className="py-20 sm:py-32 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs uppercase tracking-widest font-bold text-[#C83B7A]">
                Portfolio
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#3B2347]">
                Work that brings strategy, creative and technology together.
              </h2>
            </div>
            <button
              onClick={() => onNavigate('work')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-[#3B2347] border border-[#3B2347]/20 hover:border-[#3B2347] transition-colors self-start md:self-auto"
            >
              <span>View All 11 Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group p-8 sm:p-10 rounded-2xl bg-white border border-[#3B2347]/10 hover:border-[#C83B7A]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#C83B7A]">
                      {project.industry}
                    </span>
                    <span className="text-xs text-[#3B2347]/50">{project.location}</span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#3B2347] group-hover:text-[#C83B7A] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm sm:text-base text-[#3B2347]/80 mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-[#3B2347]/10">
                    <span className="text-xs uppercase tracking-wider text-[#3B2347]/60 block font-semibold">
                      Services Provided:
                    </span>
                    <div className="flex flex-wrap gap-2 text-xs text-[#3B2347]/80">
                      {project.services.map((s, idx) => (
                        <span key={idx} className="flex items-center gap-1.5">
                          <span>{s}</span>
                          {idx < project.services.length - 1 && (
                            <span className="text-[#3B2347]/30">·</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#3B2347]/10 flex items-center justify-between">
                  <span className="text-xs text-[#3B2347]/60">Case Study Details</span>
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
        </div>
      </section>

      {/* SECTION 7 - BRANDS WE'VE WORKED WITH */}
      <section className="py-20 sm:py-28 bg-[#3B2347] text-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#F7B7A3]">
              Proven Relationships
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
              Brands and businesses we've worked with.
            </h2>
            <p className="text-sm sm:text-base text-[#FFF8F0]/75 leading-relaxed">
              From established companies to growing businesses, we've helped teams build their digital presence, marketing systems and customer workflows.
            </p>
          </div>

          {/* Clean, Elegant Text-Based Brand Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {BRANDS_WORKED_WITH.map((brand, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#C83B7A] transition-colors flex items-center justify-center text-center min-h-[64px]"
              >
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-white/90">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 - WHY STARTUPBAE */}
      <section className="py-20 sm:py-32 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#C83B7A]">
              The StartupBae Difference
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#3B2347]">
              One partner. More of the pieces connected.
            </h2>
            <p className="text-base sm:text-lg text-[#3B2347]/80 leading-relaxed font-light">
              Businesses usually coordinate designers, developers, marketers, advertising specialists and CRM engineers across separate silos. StartupBae brings these four disciplines together under one cohesive strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_STARTUPBAE_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="p-8 rounded-2xl bg-white border border-[#3B2347]/10 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FBE7E2] flex items-center justify-center text-[#C83B7A]">
                    {pillar.id === 'creative' && <Palette className="w-5 h-5" />}
                    {pillar.id === 'marketing' && <Megaphone className="w-5 h-5" />}
                    {pillar.id === 'technology' && <Workflow className="w-5 h-5" />}
                    {pillar.id === 'customer-systems' && <Database className="w-5 h-5" />}
                  </div>

                  <h3 className="font-serif text-2xl text-[#3B2347]">
                    {pillar.title}
                  </h3>

                  <p className="text-xs font-semibold uppercase tracking-wider text-[#C83B7A]">
                    {pillar.subtitle}
                  </p>

                  <p className="text-sm text-[#3B2347]/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 - WHO WE HELP */}
      <section className="py-20 sm:py-32 bg-white border-y border-[#3B2347]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs uppercase tracking-widest font-bold text-[#C83B7A]">
                Target Sectors
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#3B2347]">
                Built for businesses ready to grow.
              </h2>
            </div>
            <button
              onClick={() => onNavigate('industries')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-[#3B2347] border border-[#3B2347]/20 hover:border-[#3B2347] transition-colors self-start md:self-auto"
            >
              <span>Explore All Industry Workflows</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.id}
                onClick={() => onNavigate('industries')}
                className="p-6 rounded-2xl bg-[#FFF8F0] border border-[#3B2347]/10 hover:border-[#C83B7A]/50 hover:bg-[#FBE7E2]/30 transition-all duration-200 cursor-pointer space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <h3 className="font-serif text-xl text-[#3B2347]">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-[#3B2347]/70 leading-relaxed">
                    {ind.summary}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#3B2347]/10 flex items-center justify-between text-xs font-semibold text-[#C83B7A]">
                  <span>View Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 - PROCESS */}
      <section className="py-20 sm:py-32 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#C83B7A]">
              Delivery Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#3B2347]">
              How we work.
            </h2>
            <p className="text-base text-[#3B2347]/75">
              Five transparent, sequential stages designed to eliminate guesswork and launch dependable systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-white border border-[#3B2347]/10 space-y-4 flex flex-col justify-between hover:shadow-xs transition-shadow"
              >
                <div className="space-y-3">
                  <span className="font-serif text-3xl font-bold text-[#C83B7A]">
                    {step.step}
                  </span>
                  <h3 className="font-serif text-xl text-[#3B2347]">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#3B2347]/80">
                    {step.subtitle}
                  </p>
                  <p className="text-xs text-[#3B2347]/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#3B2347]/10 text-[11px] text-[#C83B7A] font-medium">
                  {step.action}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 - CTA */}
      <section className="py-24 sm:py-32 bg-[#3B2347] text-[#FFF8F0] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <span className="text-xs uppercase tracking-widest font-bold text-[#F7B7A3]">
            Start Your Journey
          </span>

          <h2 className="font-serif text-4xl sm:text-6xl font-normal text-white tracking-tight leading-tight">
            Ready to build something better?
          </h2>

          <p className="text-base sm:text-xl text-[#FFF8F0]/80 max-w-2xl mx-auto font-light leading-relaxed">
            Tell us what you're trying to build, improve or grow. We'll help you figure out what comes next.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-[#C83B7A] hover:bg-[#b42e6a] shadow-lg transition-all active:scale-95"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>

            <a
              href="https://wa.me/919740326160"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-[#FFF8F0] border border-white/20 hover:border-white transition-all"
            >
              <MessageCircle className="w-5 h-5 text-[#F7B7A3]" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          <div className="pt-6 text-xs text-[#FFF8F0]/60">
            hello@startupbae.com · Direct WhatsApp: +91 9740326160
          </div>
        </div>
      </section>
    </div>
  );
};
