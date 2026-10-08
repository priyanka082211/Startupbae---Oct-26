import React from 'react';
import { PageId } from '../types';
import { WorkflowDiagram } from '../components/WorkflowDiagram';
import { CanThisBeAutomated } from '../components/CanThisBeAutomated';
import { ArrowRight, CheckCircle2, Shield, User, Bot, RefreshCw, Cpu, Layers } from 'lucide-react';

interface HowItWorksPageProps {
  onNavigate: (page: PageId) => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate }) => {
  const steps = [
    {
      num: '01',
      title: 'Tell us what you are doing manually.',
      description: 'Show us the repetitive work.',
      details:
        'Walk us through where your team spends manual time: entering contacts, copy-pasting information across spreadsheets, sending identical messages, or remembering to follow up.',
    },
    {
      num: '02',
      title: 'Map the current process.',
      description: 'Understand what happens today.',
      details:
        'We document every trigger, decision point, tool handoff, and potential bottleneck. Knowing the exact sequence today prevents building broken automations tomorrow.',
    },
    {
      num: '03',
      title: 'Identify what can be automated.',
      description: 'Separate repetitive work from work that needs people.',
      details:
        'We isolate mechanical steps (data movement, message dispatches, status updates) from critical human decisions (sales nuances, relationship building, expert service).',
    },
    {
      num: '04',
      title: 'Design and build the workflow.',
      description: 'Connect the systems, tools and processes.',
      details:
        'We configure your triggers, webhooks, CRM pipelines, messaging routes, and AI agents using rock-solid platforms like n8n, Make, GoHighLevel, or custom APIs.',
    },
    {
      num: '05',
      title: 'Test.',
      description: 'Check the workflow, edge cases and handoffs.',
      details:
        'We simulate edge cases, test failed webhook recovery, review message formatting across devices, and ensure human alert notifications fire accurately.',
    },
    {
      num: '06',
      title: 'Launch and improve.',
      description: 'Monitor the workflow and make improvements where needed.',
      details:
        'We deploy the workflow into live production, monitor operational execution, and refine steps based on actual volume and business feedback.',
    },
  ];

  const humanAiNodes = [
    {
      step: '01',
      title: 'AI handles repetitive work',
      note: 'Filters spam, drafts responses, reads transcripts, qualifies intent',
      type: 'AI',
    },
    {
      step: '02',
      title: 'Systems move information',
      note: 'Syncs CRM, schedules meetings, triggers webhooks, updates tables',
      type: 'System',
    },
    {
      step: '03',
      title: 'People handle decisions',
      note: 'High-touch consultation, complex deals, relationship building',
      type: 'Human',
    },
    {
      step: '04',
      title: 'Customers get a better experience',
      note: 'Faster responses, zero dropped leads, seamless appointment bookings',
      type: 'Outcome',
    },
  ];

  return (
    <div className="space-y-0">
      {/* Header Banner */}
      <section className="pt-14 pb-16 bg-[#FFF8F0] border-b border-[#2F1F35]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C83B7A]">
              Our Methodology
            </span>
            <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-[#2F1F35] tracking-tight leading-tight">
              Simple process. Practical automation.
            </h1>
            <p className="text-base sm:text-lg text-[#332D35]/85 leading-relaxed">
              We do not invent over-complicated IT architectures. We identify where manual friction slows your team down and build reliable systems to handle it.
            </p>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 p-3.5 rounded-lg bg-white border border-[#2F1F35]/10 text-xs font-medium text-[#2F1F35]">
            <span className="w-2 h-2 rounded-full bg-[#C83B7A]" />
            <span>You can start with one workflow or automate a larger business process.</span>
          </div>
        </div>
      </section>

      {/* 6 Steps Section */}
      <section className="py-20 bg-white border-b border-[#2F1F35]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C83B7A]">
              Execution Phases
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#2F1F35]">
              Six steps from manual drag to automated flow.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div
                key={s.num}
                className="bg-[#FFF8F0] rounded-xl border border-[#2F1F35]/10 p-6 space-y-4 flex flex-col justify-between hover:border-[#C83B7A] transition shadow-xs"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-[#2F1F35]/10 pb-3">
                    <span className="font-mono text-xl font-bold text-[#C83B7A]">
                      {s.num}
                    </span>
                    <span className="text-[10px] uppercase font-semibold text-[#756C76]">
                      Phase {s.num}
                    </span>
                  </div>
                  <h3 className="font-serif-display text-xl text-[#2F1F35] leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs font-medium text-[#C83B7A]">
                    {s.description}
                  </p>
                  <p className="text-xs text-[#756C76] leading-relaxed pt-1">
                    {s.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 26. HUMAN + AI POSITIONING */}
      <section className="py-20 md:py-24 bg-[#2F1F35] text-[#FFF8F0] border-b border-[#2F1F35]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F7B7A3]">
              Human + Automation Philosophy
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#FFF8F0]">
              Automation does not mean removing people from the process.
            </h2>
            <p className="text-base text-[#FFF8F0]/80 leading-relaxed">
              The goal of automation is not to make your company impersonal or replace the human touch. It is to eliminate repetitive administrative chores so your team can focus on decisions, high-value conversations, and exceptional customer service.
            </p>
          </div>

          {/* Visual of Human + AI flow */}
          <div className="bg-[#211724] rounded-2xl border border-[#FFF8F0]/10 p-6 sm:p-8 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F7B7A3]">
              System & Human Synergy Loop
            </span>

            <WorkflowDiagram nodes={humanAiNodes} theme="dark" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#FFF8F0]/10 text-xs">
              <div className="p-3.5 rounded-lg bg-[#2F1F35] space-y-1 border border-[#FFF8F0]/5">
                <span className="font-bold text-[#F7B7A3] block">Zero Repetitive Waste</span>
                <p className="text-[#FFF8F0]/70">No copying contacts, checking inboxes every 10 minutes, or pasting calendar links.</p>
              </div>
              <div className="p-3.5 rounded-lg bg-[#2F1F35] space-y-1 border border-[#FFF8F0]/5">
                <span className="font-bold text-[#F7B7A3] block">Instant First Response</span>
                <p className="text-[#FFF8F0]/70">Prospects receive immediate qualification and scheduling without waiting hours.</p>
              </div>
              <div className="p-3.5 rounded-lg bg-[#2F1F35] space-y-1 border border-[#FFF8F0]/5">
                <span className="font-bold text-[#F7B7A3] block">Human Decisions Intact</span>
                <p className="text-[#FFF8F0]/70">Staff step in for nuanced evaluations, relationship discussions, and approvals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Can this be automated component */}
      <CanThisBeAutomated />

      {/* Bottom CTA */}
      <section className="py-16 bg-[#FFF8F0] border-t border-[#2F1F35]/10 text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-4">
          <h3 className="font-serif-display text-2xl sm:text-3xl text-[#2F1F35]">
            Ready to review your business workflows?
          </h3>
          <p className="text-sm text-[#756C76]">
            Start with one repetitive task or map out a larger customer journey.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C83B7A] hover:bg-[#b02f68] text-white text-sm font-medium rounded-md transition-colors"
            >
              <span>Let's Automate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
