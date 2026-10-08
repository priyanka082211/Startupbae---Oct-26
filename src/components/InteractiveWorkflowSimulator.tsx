import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, CheckCircle, ArrowRight, Layers, Cpu, Database, MessageSquare, Calendar, UserCheck } from 'lucide-react';

interface SimNode {
  step: string;
  name: string;
  category: string;
  system: string;
  dataMovement: string;
  rule: string;
}

interface SimPreset {
  id: string;
  title: string;
  category: string;
  summary: string;
  nodes: SimNode[];
}

const PRESETS: SimPreset[] = [
  {
    id: 'lead-followup',
    title: 'Lead Follow-up & Booking',
    category: 'Sales Automation',
    summary: 'From inbound web submission to AI qualification, CRM staging, direct WhatsApp message, and calendar appointment.',
    nodes: [
      {
        step: '01',
        name: 'New Lead Inbound',
        category: 'Trigger',
        system: 'Website Form / Webhook',
        dataMovement: 'Payload: Name, phone, email, and inquiry interest fields.',
        rule: 'Event fires instantaneously upon submission.',
      },
      {
        step: '02',
        name: 'AI Qualification',
        category: 'Logic & AI',
        system: 'OpenAI / Custom Logic',
        dataMovement: 'Evaluates inquiry intent, services required, and timetable.',
        rule: 'Flags high-intent leads vs spam before touching CRM.',
      },
      {
        step: '03',
        name: 'CRM Update',
        category: 'System Action',
        system: 'GoHighLevel / CRM',
        dataMovement: 'Creates contact record, attaches inquiry tags, moves to stage "Qualified Inbound".',
        rule: 'Checks for duplicates by phone/email before creating new deal.',
      },
      {
        step: '04',
        name: 'WhatsApp Sent',
        category: 'Communication',
        system: 'WhatsApp API / Twilio',
        dataMovement: 'Dispatches personalized greeting with calendar booking link.',
        rule: 'Sent within 45 seconds of lead submission.',
      },
      {
        step: '05',
        name: 'Sales Notification',
        category: 'Human Alert',
        system: 'Slack / SMS Alert',
        dataMovement: 'Alerts assigned account rep with summary of lead inquiry.',
        rule: 'Assigned via round-robin or territory logic.',
      },
      {
        step: '06',
        name: 'Automated Follow-up',
        category: 'Nurture Loop',
        system: 'Workflow Engine',
        dataMovement: 'Schedules 24h & 48h touches if calendar appointment is unbooked.',
        rule: 'Automatically cancels if prospect schedules an appointment.',
      },
    ],
  },
  {
    id: 'customer-onboarding',
    title: 'Customer Onboarding & Delivery',
    category: 'Customer Automation',
    summary: 'Triggered when payment is cleared to generate intake forms, stage projects, and send welcome credentials.',
    nodes: [
      {
        step: '01',
        name: 'Payment Cleared',
        category: 'Trigger',
        system: 'Stripe / Payment Gateway',
        dataMovement: 'Invoice paid webhook with customer ID and amount.',
        rule: 'Validates successful transaction status.',
      },
      {
        step: '02',
        name: 'Onboarding Form Sent',
        category: 'Action',
        system: 'Automated Email / Portal',
        dataMovement: 'Dispatches personalized intake questionnaire.',
        rule: 'Prefills already captured buyer information.',
      },
      {
        step: '03',
        name: 'CRM Deal Advanced',
        category: 'System Action',
        system: 'CRM Platform',
        dataMovement: 'Advances deal from "Proposal" to "Active Client".',
        rule: 'Assigns onboarding manager and account manager.',
      },
      {
        step: '04',
        name: 'Project Tasks Created',
        category: 'Operations',
        system: 'Airtable / Project Board',
        dataMovement: 'Generates setup checklist cards with delivery dates.',
        rule: 'Applies predefined service template tasks.',
      },
      {
        step: '05',
        name: 'Welcome Message',
        category: 'Communication',
        system: 'Email & WhatsApp',
        dataMovement: 'Sends kickoff confirmation and portal login.',
        rule: 'Includes emergency contact and scheduled onboarding call time.',
      },
    ],
  },
  {
    id: 'social-media-repurpose',
    title: 'Social Content Repurposing',
    category: 'Marketing & Social',
    summary: 'Transforms source long-form ideas into multi-channel posts, holds for human approval, and schedules publishing.',
    nodes: [
      {
        step: '01',
        name: 'Content Brief / Article',
        category: 'Trigger',
        system: 'Google Doc / Notion / Sheet',
        dataMovement: 'Source blog article or rough topic outline logged.',
        rule: 'Status changes to "Ready for Drafting".',
      },
      {
        step: '02',
        name: 'AI Draft Creation',
        category: 'Logic & AI',
        system: 'OpenAI Engine',
        dataMovement: 'Extracts core argument, drafts hook, LinkedIn copy, and caption variations.',
        rule: 'Adheres to company tone guide and formatting requirements.',
      },
      {
        step: '03',
        name: 'Human Team Approval',
        category: 'Human Decision',
        system: 'Slack / Review Dashboard',
        dataMovement: 'Presents formatted preview to editor for 1-click approve/edit.',
        rule: 'Workflow pauses until human marks "Approved".',
      },
      {
        step: '04',
        name: 'Queue Scheduling',
        category: 'System Action',
        system: 'Social Planner / Scheduler',
        dataMovement: 'Inserts finalized copy and media into optimal time slot.',
        rule: 'Spreads posts across upcoming weekly calendar.',
      },
      {
        step: '05',
        name: 'Publish & Log',
        category: 'Distribution',
        system: 'Social Media Channels',
        dataMovement: 'Pushes post live and logs URL back to central database.',
        rule: 'Captures confirmation response from platform API.',
      },
    ],
  },
  {
    id: 'missed-call-recovery',
    title: 'Missed Call Recovery',
    category: 'Lead Management',
    summary: 'Catches unanswered phone calls instantly to prevent lost revenue, texting callers within 30 seconds.',
    nodes: [
      {
        step: '01',
        name: 'Unanswered Inbound Call',
        category: 'Trigger',
        system: 'Twilio / Heymarket',
        dataMovement: 'Call ringing timeout event with caller phone number.',
        rule: 'Fires whenever status equals "no-answer" or "busy".',
      },
      {
        step: '02',
        name: 'Immediate SMS Sent',
        category: 'Communication',
        system: 'SMS Engine',
        dataMovement: 'Text: "Sorry we missed your call! How can our team help you right now?"',
        rule: 'Dispatches in under 30 seconds while caller is holding their phone.',
      },
      {
        step: '03',
        name: 'CRM Contact Flagged',
        category: 'System Action',
        system: 'CRM Platform',
        dataMovement: 'Logs phone number as "Inbound Caller - Awaiting Reply".',
        rule: 'Prevents multiple text loops for repeat callers.',
      },
      {
        step: '04',
        name: 'Callback Task Queued',
        category: 'Human Alert',
        system: 'Sales Inbox',
        dataMovement: 'Creates high-priority callback ticket for front desk.',
        rule: 'Displays whether caller replied to the SMS.',
      },
    ],
  },
];

export const InteractiveWorkflowSimulator: React.FC = () => {
  const [activePresetId, setActivePresetId] = useState<string>('lead-followup');
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const currentPreset = PRESETS.find((p) => p.id === activePresetId) || PRESETS[0];

  useEffect(() => {
    setActiveStepIndex(0);
    setIsPlaying(false);
  }, [activePresetId]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveStepIndex((prev) => {
          if (prev >= currentPreset.nodes.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 1600);
    }
    return () => clearInterval(timer);
  }, [isPlaying, currentPreset.nodes.length]);

  const activeNode = currentPreset.nodes[activeStepIndex];

  return (
    <div className="bg-white rounded-2xl border border-[#2F1F35]/15 p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#2F1F35]/10">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C83B7A]">
            Interactive Workflow Architecture
          </span>
          <h3 className="font-serif-display text-2xl sm:text-3xl text-[#2F1F35] mt-1">
            {currentPreset.title}
          </h3>
          <p className="text-sm text-[#756C76] mt-1 max-w-2xl">
            {currentPreset.summary}
          </p>
        </div>

        {/* Workflow Switcher */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-[#FFF8F0] rounded-lg border border-[#2F1F35]/10 shrink-0">
          {PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => setActivePresetId(preset.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activePresetId === preset.id
                  ? 'bg-[#2F1F35] text-white shadow-xs'
                  : 'text-[#332D35] hover:bg-[#2F1F35]/5'
              }`}
            >
              {preset.title.split(' & ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Simulator Controls & Stepper */}
      <div className="pt-6">
        <div className="flex items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (activeStepIndex >= currentPreset.nodes.length - 1) {
                  setActiveStepIndex(0);
                }
                setIsPlaying(!isPlaying);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#2F1F35] hover:bg-[#432d4b] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
            >
              <Play className={`w-3.5 h-3.5 ${isPlaying ? 'fill-white' : ''}`} />
              <span>{isPlaying ? 'Pause Simulation' : 'Run Simulation'}</span>
            </button>
            <button
              onClick={() => {
                setIsPlaying(false);
                setActiveStepIndex(0);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#FFF8F0] hover:bg-[#2F1F35]/5 text-[#332D35] border border-[#2F1F35]/15 text-xs font-medium rounded-md transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

          <div className="text-xs text-[#756C76]">
            Showing Step <span className="font-semibold text-[#2F1F35]">{activeStepIndex + 1}</span> of{' '}
            {currentPreset.nodes.length}
          </div>
        </div>

        {/* Node Sequence Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mb-6">
          {currentPreset.nodes.map((node, idx) => {
            const isCurrent = idx === activeStepIndex;
            const isCompleted = idx < activeStepIndex;
            return (
              <button
                key={node.step}
                onClick={() => {
                  setIsPlaying(false);
                  setActiveStepIndex(idx);
                }}
                className={`text-left p-3 rounded-lg border transition-all text-xs focus:outline-none ${
                  isCurrent
                    ? 'border-[#C83B7A] bg-[#C83B7A]/10 ring-1 ring-[#C83B7A]'
                    : isCompleted
                    ? 'border-[#2F1F35]/20 bg-[#FFF8F0] text-[#332D35]'
                    : 'border-[#2F1F35]/10 bg-white text-[#756C76] opacity-75'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-mono text-[10px] font-bold ${isCurrent ? 'text-[#C83B7A]' : 'text-[#756C76]'}`}>
                    {node.step}
                  </span>
                  {isCompleted && <CheckCircle className="w-3 h-3 text-[#C83B7A]" />}
                </div>
                <div className="font-semibold line-clamp-1 text-[#2F1F35]">
                  {node.name}
                </div>
                <div className="text-[10px] text-[#756C76] mt-0.5 line-clamp-1">
                  {node.system}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Node Detail Pane */}
        {activeNode && (
          <div className="bg-[#FFF8F0] rounded-xl border border-[#2F1F35]/15 p-5 md:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#2F1F35]/10 pb-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#2F1F35] text-white font-mono text-xs font-bold">
                  {activeNode.step}
                </span>
                <div>
                  <h4 className="font-serif-display text-xl text-[#2F1F35]">
                    {activeNode.name}
                  </h4>
                  <span className="text-xs text-[#756C76]">
                    Category: <strong className="text-[#332D35]">{activeNode.category}</strong>
                  </span>
                </div>
              </div>
              <div className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-white border border-[#2F1F35]/15 text-[#2F1F35]">
                Platform: {activeNode.system}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-white p-4 rounded-lg border border-[#2F1F35]/10 space-y-1.5">
                <span className="font-semibold uppercase tracking-wider text-[#C83B7A] block text-[11px]">
                  Data Movement & Payload
                </span>
                <p className="text-[#332D35] leading-relaxed">
                  {activeNode.dataMovement}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-[#2F1F35]/10 space-y-1.5">
                <span className="font-semibold uppercase tracking-wider text-[#2F1F35] block text-[11px]">
                  Automation Rule & Condition
                </span>
                <p className="text-[#332D35] leading-relaxed">
                  {activeNode.rule}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
