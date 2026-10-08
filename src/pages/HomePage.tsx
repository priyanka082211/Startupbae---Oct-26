import React from 'react';
import { PageId } from '../types';
import { WorkflowDiagram } from '../components/WorkflowDiagram';
import { CanThisBeAutomated } from '../components/CanThisBeAutomated';
import {
  HERO_WORKFLOW,
  BEFORE_AFTER_DATA,
  FULL_CUSTOMER_JOURNEY,
  COMPLEXITY_COMPARISON,
  SALES_WORKFLOWS,
  LEAD_WORKFLOWS,
  CUSTOMER_WORKFLOWS,
  MARKETING_SOCIAL_WORKFLOWS,
  OPERATIONS_WORKFLOWS,
} from '../data/workflows';
import { SELECTED_WORK_NAMES } from '../data/caseStudies';
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Cpu,
  Layers,
  Sparkles,
  GitBranch,
  Bot,
  RefreshCw,
  Sliders,
  ExternalLink,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      {/* 8. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 border-b border-[#2F1F35]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Small supporting line */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C83B7A] bg-[#C83B7A]/10 px-3 py-1 rounded-md">
              AI + Workflows + CRM + Integrations
            </div>

            {/* Headline */}
            <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#2F1F35] tracking-tight leading-[1.08] text-balance">
              Stop Doing Work Your Business Can Automate.
            </h1>

            {/* Supporting copy */}
            <p className="text-lg sm:text-xl text-[#332D35]/85 max-w-2xl mx-auto font-normal leading-relaxed">
              StartupBae builds AI and business automation systems that take repetitive work off your team's plate.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-white bg-[#C83B7A] hover:bg-[#b02f68] active:bg-[#992558] rounded-md transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C83B7A]/50 whitespace-nowrap"
              >
                <span>Let's Automate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('automation')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-[#2F1F35] bg-white hover:bg-[#2F1F35]/5 border border-[#2F1F35]/20 rounded-md transition-colors whitespace-nowrap"
              >
                See What We Automate
              </button>
            </div>
          </div>

          {/* Real Workflow Visual (Replacing generic AI illustrations) */}
          <div className="mt-14 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl border border-[#2F1F35]/15 p-4 sm:p-7 shadow-xs">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#2F1F35]/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#2F1F35]">
                  Live Architecture Preview
                </span>
                <span className="text-xs text-[#756C76]">
                  Trigger-to-Outcome Pipeline
                </span>
              </div>
              <WorkflowDiagram
                nodes={HERO_WORKFLOW}
                caption="Inbound Lead Automation Pipeline"
                theme="light"
              />
              <div className="mt-4 pt-3 border-t border-[#2F1F35]/5 flex flex-wrap items-center justify-between gap-3 text-xs text-[#756C76]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#C83B7A]" />
                  Zero manual data entry between platforms
                </span>
                <span className="font-mono text-[11px] text-[#2F1F35]">
                  Webhook · Language Model · GoHighLevel · Twilio
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BEFORE / AFTER SECTION */}
      <section className="py-20 md:py-24 bg-[#FFF8F0] border-b border-[#2F1F35]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C83B7A]">
              Operational Reality
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#2F1F35] tracking-tight text-balance">
              The work between the work is usually the problem.
            </h2>
            <p className="text-base text-[#756C76] leading-relaxed">
              When business software doesn't speak to itself, people become the manual bridge. Here is how processes change once connected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* BEFORE */}
            <div className="bg-white rounded-xl border border-rose-200/80 p-6 sm:p-8 space-y-5 shadow-xs">
              <div className="flex items-center justify-between border-b border-rose-100 pb-3">
                <div className="flex items-center gap-2 text-rose-700">
                  <XCircle className="w-5 h-5 shrink-0" />
                  <span className="font-serif-display text-xl">Before Automation</span>
                </div>
                <span className="text-xs font-medium text-rose-600/80">Manual & Fragmented</span>
              </div>

              <div className="space-y-3">
                {BEFORE_AFTER_DATA.before.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-rose-50/40 border border-rose-100/60"
                  >
                    <span className="font-mono text-xs font-semibold text-rose-400 mt-0.5">
                      0{index + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-medium text-[#332D35]">{item.title}</h4>
                      <p className="text-xs text-[#756C76] mt-0.5">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AFTER */}
            <div className="bg-[#2F1F35] text-[#FFF8F0] rounded-xl border border-[#2F1F35] p-6 sm:p-8 space-y-5 shadow-xs">
              <div className="flex items-center justify-between border-b border-[#FFF8F0]/10 pb-3">
                <div className="flex items-center gap-2 text-[#F7B7A3]">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-[#C83B7A]" />
                  <span className="font-serif-display text-xl text-[#FFF8F0]">With StartupBae</span>
                </div>
                <span className="text-xs font-medium text-[#F7B7A3]">Connected & Instant</span>
              </div>

              <div className="space-y-3">
                {BEFORE_AFTER_DATA.after.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-[#211724] border border-[#FFF8F0]/10"
                  >
                    <span className="font-mono text-xs font-semibold text-[#F7B7A3] mt-0.5">
                      0{index + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-medium text-[#FFF8F0]">{item.title}</h4>
                      <p className="text-xs text-[#FFF8F0]/65 mt-0.5">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. WHAT CAN WE AUTOMATE? (EDITORIAL RHYTHM, NOT JUST ROUNDED CARDS) */}
      <section className="py-20 md:py-24 bg-white border-b border-[#2F1F35]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C83B7A]">
              Capabilities
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#2F1F35] tracking-tight">
              What can StartupBae automate?
            </h2>
            <p className="text-base text-[#756C76] leading-relaxed">
              We build automation systems around your existing processes, team tools, CRM, and customer communication channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sales */}
            <div className="p-6 rounded-xl border border-[#2F1F35]/10 bg-[#FFF8F0] space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C83B7A]">01 · Sales</span>
              <h3 className="font-serif-display text-2xl text-[#2F1F35]">Sales Automation</h3>
              <p className="text-xs text-[#756C76] leading-relaxed">
                Lead qualification, follow-ups, appointment booking, pipeline updates, and real-time team notifications.
              </p>
            </div>

            {/* Lead Management */}
            <div className="p-6 rounded-xl border border-[#2F1F35]/10 bg-[#FFF8F0] space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C83B7A]">02 · Lead Management</span>
              <h3 className="font-serif-display text-2xl text-[#2F1F35]">Lead Routing</h3>
              <p className="text-xs text-[#756C76] leading-relaxed">
                Lead capture from ads and forms, criteria assignment, qualification filters, instant CRM staging, and timed follow-up.
              </p>
            </div>

            {/* CRM */}
            <div className="p-6 rounded-xl border border-[#2F1F35]/10 bg-[#FFF8F0] space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C83B7A]">03 · CRM</span>
              <h3 className="font-serif-display text-2xl text-[#2F1F35]">CRM Automation</h3>
              <p className="text-xs text-[#756C76] leading-relaxed">
                Contact creation, pipeline stage progression, task generation, rep assignment, duplicate management, and database synchronization.
              </p>
            </div>

            {/* Marketing */}
            <div className="p-6 rounded-xl border border-[#2F1F35]/10 bg-[#FFF8F0] space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C83B7A]">04 · Marketing</span>
              <h3 className="font-serif-display text-2xl text-[#2F1F35]">Marketing Flows</h3>
              <p className="text-xs text-[#756C76] leading-relaxed">
                Campaign triggers, nurture sequences, inquiry follow-ups, tag-based segmentation, and content distribution workflows.
              </p>
            </div>

            {/* Social Media */}
            <div className="p-6 rounded-xl border border-[#2F1F35]/10 bg-[#FFF8F0] space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C83B7A]">05 · Social Media</span>
              <h3 className="font-serif-display text-2xl text-[#2F1F35]">Social Workflows</h3>
              <p className="text-xs text-[#756C76] leading-relaxed">
                Content generation, human approval gates, scheduling, automated multi-platform publishing, and performance reporting.
              </p>
            </div>

            {/* Customer */}
            <div className="p-6 rounded-xl border border-[#2F1F35]/10 bg-[#FFF8F0] space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C83B7A]">06 · Customer</span>
              <h3 className="font-serif-display text-2xl text-[#2F1F35]">Customer Experience</h3>
              <p className="text-xs text-[#756C76] leading-relaxed">
                Client onboarding, intake forms, appointment reminders, document requests, service review dispatches, and re-engagement.
              </p>
            </div>

            {/* Operations */}
            <div className="p-6 rounded-xl border border-[#2F1F35]/10 bg-[#FFF8F0] space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C83B7A]">07 · Operations</span>
              <h3 className="font-serif-display text-2xl text-[#2F1F35]">Internal Operations</h3>
              <p className="text-xs text-[#756C76] leading-relaxed">
                Internal notifications, sign-off approvals, task creation, meeting summaries, recurring reporting, and repetitive admin work.
              </p>
            </div>

            {/* Data */}
            <div className="p-6 rounded-xl border border-[#2F1F35]/10 bg-[#FFF8F0] space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C83B7A]">08 · Data</span>
              <h3 className="font-serif-display text-2xl text-[#2F1F35]">Data Integrations</h3>
              <p className="text-xs text-[#756C76] leading-relaxed">
                Moving and transforming information cleanly between spreadsheets, CRMs, databases, and custom business applications.
              </p>
            </div>

            {/* AI Agents */}
            <div className="p-6 rounded-xl border border-[#2F1F35]/10 bg-[#2F1F35] text-[#FFF8F0] space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F7B7A3]">09 · AI Agents</span>
              <h3 className="font-serif-display text-2xl text-[#FFF8F0]">AI Agents</h3>
              <p className="text-xs text-[#FFF8F0]/75 leading-relaxed">
                AI chat, AI voice receptionists, conversational qualification, customer support routing, and AI-assisted task workflows.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('automation')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C83B7A] hover:underline"
            >
              <span>Explore all categories in the Automation Library</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 11, 12, 13, 14, 15: PRACTICAL WORKFLOW EXAMPLES */}
      <section className="py-20 md:py-24 bg-[#FFF8F0] border-b border-[#2F1F35]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C83B7A]">
              Blueprint Library
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#2F1F35] tracking-tight">
              Real business workflows in action.
            </h2>
            <p className="text-base text-[#756C76] leading-relaxed">
              These are examples of possible automation workflows built around triggers, logic, system actions, and notifications.
            </p>
          </div>

          {/* Group 1: Sales & Lead Automation */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#2F1F35]/15 pb-2">
              <h3 className="font-serif-display text-2xl text-[#2F1F35]">
                Sales & Lead Automation
              </h3>
              <span className="text-xs text-[#756C76]">3 Representative Flows</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {SALES_WORKFLOWS.map((wf) => (
                <div key={wf.id} className="bg-white rounded-xl border border-[#2F1F35]/10 p-5 space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C83B7A]">
                      {wf.category}
                    </span>
                    <h4 className="font-serif-display text-lg text-[#2F1F35] mt-0.5">
                      {wf.title}
                    </h4>
                    <p className="text-xs text-[#756C76] mt-1">{wf.description}</p>
                  </div>
                  <WorkflowDiagram nodes={wf.steps.map(s => ({ title: s.label, note: s.sublabel, type: s.type }))} orientation="vertical" />
                </div>
              ))}
            </div>
          </div>

          {/* Group 2: Lead Channel Examples */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#2F1F35]/15 pb-2">
              <h3 className="font-serif-display text-2xl text-[#2F1F35]">
                Lead Capture Channels
              </h3>
              <span className="text-xs text-[#756C76]">Facebook · Website · Missed Call</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {LEAD_WORKFLOWS.map((wf) => (
                <div key={wf.id} className="bg-white rounded-xl border border-[#2F1F35]/10 p-5 space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C83B7A]">
                      {wf.category}
                    </span>
                    <h4 className="font-serif-display text-lg text-[#2F1F35] mt-0.5">
                      {wf.title}
                    </h4>
                    <p className="text-xs text-[#756C76] mt-1">{wf.description}</p>
                  </div>
                  <WorkflowDiagram nodes={wf.steps.map(s => ({ title: s.label, note: s.sublabel, type: s.type }))} orientation="vertical" />
                </div>
              ))}
            </div>
          </div>

          {/* Group 3: Customer Automation */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#2F1F35]/15 pb-2">
              <h3 className="font-serif-display text-2xl text-[#2F1F35]">
                Customer & Lifecycle Automation
              </h3>
              <span className="text-xs text-[#756C76]">Onboarding · Appointments · Reviews</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {CUSTOMER_WORKFLOWS.map((wf) => (
                <div key={wf.id} className="bg-white rounded-xl border border-[#2F1F35]/10 p-5 space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C83B7A]">
                      {wf.category}
                    </span>
                    <h4 className="font-serif-display text-lg text-[#2F1F35] mt-0.5">
                      {wf.title}
                    </h4>
                    <p className="text-xs text-[#756C76] mt-1">{wf.description}</p>
                  </div>
                  <WorkflowDiagram nodes={wf.steps.map(s => ({ title: s.label, note: s.sublabel, type: s.type }))} orientation="vertical" />
                </div>
              ))}
            </div>
          </div>

          {/* Group 4: Marketing & Operations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="border-b border-[#2F1F35]/15 pb-2">
                <h3 className="font-serif-display text-xl text-[#2F1F35]">
                  Marketing & Social Content Flow
                </h3>
                <p className="text-xs text-[#756C76]">
                  Content idea → AI draft creation → Human approval → Scheduling → Social publishing.
                </p>
              </div>
              <WorkflowDiagram
                nodes={MARKETING_SOCIAL_WORKFLOWS[0].steps.map(s => ({ title: s.label, note: s.sublabel, type: s.type }))}
                theme="peach"
              />
            </div>

            <div className="space-y-4">
              <div className="border-b border-[#2F1F35]/15 pb-2">
                <h3 className="font-serif-display text-xl text-[#2F1F35]">
                  Operations & Inbound Email Routing
                </h3>
                <p className="text-xs text-[#756C76]">
                  Incoming email → AI classification → Team assignment → Response drafted.
                </p>
              </div>
              <WorkflowDiagram
                nodes={OPERATIONS_WORKFLOWS[0].steps.map(s => ({ title: s.label, note: s.sublabel, type: s.type }))}
                theme="light"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 16. AI AGENTS DEDICATED SECTION */}
      <section className="py-20 md:py-24 bg-[#2F1F35] text-[#FFF8F0] border-b border-[#2F1F35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#F7B7A3]">
                Practical AI Integration
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-[#FFF8F0]">
                AI does not have to work alone.
              </h2>
              <p className="text-base text-[#FFF8F0]/80 leading-relaxed">
                We do not sell “magic AI employees” or make claims about replacing human teams. Practical AI works best as one step inside a larger business workflow:
              </p>

              {/* Connected systems list */}
              <div className="p-4 rounded-xl bg-[#211724] border border-[#FFF8F0]/10 space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#F7B7A3] block">
                  AI Agents Connect Seamlessly With:
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  {['CRM Records', 'Communication (WhatsApp/SMS)', 'Calendar Schedules', 'Databases & Sheets', 'Forms & Surveys', 'Internal Workflows'].map((sys) => (
                    <span key={sys} className="px-2.5 py-1 rounded bg-[#FFF8F0]/10 text-[#FFF8F0] border border-[#FFF8F0]/10">
                      {sys}
                    </span>
                  ))}
                </div>
              </div>

              <blockquote className="border-l-2 border-[#C83B7A] pl-4 py-1 text-sm font-medium text-[#F7B7A3]">
                “AI handles the repetitive interaction. Your team handles the work that actually needs people.”
              </blockquote>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="bg-[#211724] rounded-2xl border border-[#FFF8F0]/10 p-6 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#F7B7A3]">
                  Common AI Agent Implementations
                </span>

                <div className="space-y-3">
                  {[
                    { title: 'AI Voice Agent', note: 'Answers calls, answers standard business FAQs, logs inquiry into CRM.' },
                    { title: 'AI Receptionist', note: 'Takes after-hours messages, identifies urgency, and alerts morning staff.' },
                    { title: 'AI Chat Agent', note: 'Engages website visitors, answers questions, and schedules consultations.' },
                    { title: 'AI Lead Qualification', note: 'Asks required screening questions to match budget and project scope.' },
                    { title: 'AI Customer Support', note: 'Resolves common help requests with instant escalation to team members.' },
                    { title: 'AI Follow-up', note: 'Drafts contextual follow-ups based on past customer interaction history.' },
                  ].map((agent, i) => (
                    <div key={i} className="p-3 rounded-lg bg-[#2F1F35] border border-[#FFF8F0]/5 flex items-start justify-between gap-3">
                      <div>
                        <h4 className="text-sm font-semibold text-[#FFF8F0]">{agent.title}</h4>
                        <p className="text-xs text-[#FFF8F0]/65 mt-0.5">{agent.note}</p>
                      </div>
                      <span className="text-[10px] uppercase font-mono text-[#F7B7A3] shrink-0 mt-0.5">
                        Connected
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 17. FULL CUSTOMER JOURNEY VISUAL */}
      <section className="py-20 md:py-24 bg-white border-b border-[#2F1F35]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C83B7A]">
              End-to-End Architecture
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#2F1F35] tracking-tight">
              The Complete Customer Journey
            </h2>
            <p className="text-base text-[#756C76] leading-relaxed">
              A comprehensive business process map: from the first inbound inquiry to post-delivery reviews and long-term re-engagement.
            </p>
          </div>

          <div className="bg-[#FFF8F0] rounded-2xl border border-[#2F1F35]/15 p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {FULL_CUSTOMER_JOURNEY.map((stage, idx) => (
                <div
                  key={stage.stage}
                  className="bg-white rounded-lg border border-[#2F1F35]/10 p-3.5 space-y-1.5 transition hover:border-[#C83B7A]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#C83B7A]">
                      {stage.stage}
                    </span>
                    <span className="text-[9px] uppercase font-semibold text-[#756C76]">
                      Phase {idx + 1}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-[#2F1F35]">
                    {stage.title}
                  </h4>
                  <p className="text-[11px] text-[#756C76] leading-snug">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#2F1F35]/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
              <span className="text-[#332D35] font-medium">
                Every stage can connect to your CRM, messaging, payments, and team alerts.
              </span>
              <button
                onClick={() => onNavigate('contact')}
                className="shrink-0 px-4 py-2 bg-[#2F1F35] text-white hover:bg-[#432d4b] font-medium rounded-md transition-colors"
              >
                Map Your Customer Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 18. KEEP YOUR EXISTING TOOLS */}
      <section className="py-20 md:py-24 bg-[#FFF8F0] border-b border-[#2F1F35]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C83B7A]">
              System Integration
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#2F1F35] tracking-tight">
              You may not need to replace your existing software.
            </h2>
            <p className="text-base text-[#756C76] leading-relaxed">
              Keep the tools your business already uses. We can connect the systems you already have and automate the work between them.
            </p>
          </div>

          {/* Central System Hub Map */}
          <div className="bg-white rounded-2xl border border-[#2F1F35]/15 p-6 sm:p-10 shadow-xs space-y-8">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#756C76]">
                Connected Ecosystem (Bi-directional Data Movement)
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
              {[
                { name: 'CRM Platforms', sub: 'Contacts, Deals & Pipelines' },
                { name: 'WhatsApp & SMS', sub: 'Instant Inbound & Outbound' },
                { name: 'Email Systems', sub: 'Shared Inboxes & Sequences' },
                { name: 'Calendar Systems', sub: 'Booking & Timezone Sync' },
                { name: 'Google Sheets', sub: 'Live Operational Data' },
                { name: 'Airtable', sub: 'Custom Relational Tables' },
                { name: 'Payment Gateways', sub: 'Stripe & Invoicing Webhooks' },
                { name: 'Business Software', sub: 'Custom Portals & REST APIs' },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-[#2F1F35]/10 bg-[#FFF8F0]/60 space-y-1">
                  <h4 className="text-sm font-semibold text-[#2F1F35]">{item.name}</h4>
                  <p className="text-[11px] text-[#756C76]">{item.sub}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-[#2F1F35]/10 pt-6">
              <span className="block text-center text-xs font-medium uppercase tracking-wider text-[#756C76] mb-3">
                Automation Engines & Integrations We Work With
              </span>
              <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs font-medium text-[#332D35]">
                {['n8n', 'Make', 'Zapier', 'GoHighLevel', 'OpenAI', 'Airtable', 'Google Workspace', 'WhatsApp', 'Twilio', 'Custom APIs', 'Webhooks'].map((tool) => (
                  <span key={tool} className="py-1">
                    {tool}
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-center text-[#756C76] mt-4">
                Tools are implementation details. We select and configure whatever best supports your workflow requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 19. SIMPLE / MEDIUM / COMPLEX AUTOMATION */}
      <section className="py-20 md:py-24 bg-white border-b border-[#2F1F35]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C83B7A]">
              Scope Comparison
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#2F1F35] tracking-tight">
              From a single trigger to end-to-end operations.
            </h2>
            <p className="text-base text-[#756C76] leading-relaxed">
              Every business starts where the friction is highest. Here is how automation complexity scales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMPLEXITY_COMPARISON.map((comp) => (
              <div
                key={comp.level}
                className="rounded-xl border border-[#2F1F35]/15 bg-[#FFF8F0] p-6 space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#2F1F35]/10 pb-3">
                    <span className="font-serif-display text-2xl text-[#2F1F35]">
                      {comp.level}
                    </span>
                    <span className="text-xs font-semibold uppercase text-[#C83B7A]">
                      {comp.flow.length} Steps
                    </span>
                  </div>

                  <p className="text-xs text-[#756C76] leading-relaxed">
                    {comp.description}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2F1F35] block">
                      Sequence
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5 text-xs">
                      {comp.flow.map((node, i) => (
                        <React.Fragment key={i}>
                          <span className="px-2 py-1 rounded bg-white border border-[#2F1F35]/10 font-medium text-[#2F1F35]">
                            {node}
                          </span>
                          {i < comp.flow.length - 1 && (
                            <span className="text-[#C83B7A] font-bold">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#2F1F35]/10">
                  <span className="text-[10px] uppercase font-bold text-[#756C76] block mb-1">
                    Typical Components
                  </span>
                  <p className="text-xs text-[#332D35]/80">
                    {comp.tools.join(' · ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 20. SELECTED WORK (AT LEAST 15 NAMES IN CLEAN TASTEFUL GRID) */}
      <section className="py-20 md:py-24 bg-[#FFF8F0] border-b border-[#2F1F35]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#2F1F35]/15 pb-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C83B7A]">
                Track Record
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl text-[#2F1F35] tracking-tight mt-1">
                Selected Work
              </h2>
            </div>
            <p className="text-xs text-[#756C76] max-w-md">
              Businesses and digital projects where automation, workflow systems, or technical integrations have been designed.
            </p>
          </div>

          {/* 15 Names in strong typography grid (no fake logos) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {SELECTED_WORK_NAMES.map((name, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg border border-[#2F1F35]/10 p-4 flex flex-col justify-between hover:border-[#C83B7A] transition shadow-xs group"
              >
                <span className="font-mono text-[10px] text-[#756C76] group-hover:text-[#C83B7A]">
                  {idx < 9 ? `0${idx + 1}` : idx + 1}
                </span>
                <span className="font-serif-display text-base sm:text-lg text-[#2F1F35] font-normal mt-2 leading-snug">
                  {name}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#756C76]">
            <span>Explore technical details for documented projects in our case studies.</span>
            <button
              onClick={() => onNavigate('case-studies')}
              className="inline-flex items-center gap-1.5 font-semibold text-[#C83B7A] hover:underline"
            >
              <span>View Detailed Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 24. CAN THIS BE AUTOMATED? CONVERSION COMPONENT */}
      <CanThisBeAutomated />

      {/* 27. FINAL HOMEPAGE CTA */}
      <section className="py-20 md:py-24 bg-[#FFF8F0] text-[#332D35] text-center border-t border-[#2F1F35]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C83B7A]">
            Get Started
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-normal text-[#2F1F35] tracking-tight">
            What are you still doing manually?
          </h2>
          <p className="text-base sm:text-lg text-[#756C76] max-w-xl mx-auto leading-relaxed">
            Tell us what your team does repeatedly. We will help you identify what can be automated.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-white bg-[#C83B7A] hover:bg-[#b02f68] rounded-md transition-colors shadow-sm whitespace-nowrap"
            >
              <span>Let's Automate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('automation')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-[#2F1F35] bg-white hover:bg-[#2F1F35]/5 border border-[#2F1F35]/20 rounded-md transition-colors whitespace-nowrap"
            >
              Show Me What I Can Automate
            </button>
          </div>

          <div className="pt-4 text-xs text-[#756C76] flex items-center justify-center gap-6">
            <span>Email: hello@startupbae.com</span>
            <span>·</span>
            <span>WhatsApp: +91 9740326160</span>
          </div>
        </div>
      </section>
    </div>
  );
};
