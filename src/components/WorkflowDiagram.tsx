import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

export interface DiagramNode {
  step?: string;
  title: string;
  note?: string;
  type?: string;
}

interface WorkflowDiagramProps {
  nodes: DiagramNode[];
  orientation?: 'horizontal' | 'vertical';
  caption?: string;
  theme?: 'light' | 'dark' | 'peach';
}

export const WorkflowDiagram: React.FC<WorkflowDiagramProps> = ({
  nodes,
  orientation = 'horizontal',
  caption,
  theme = 'light',
}) => {
  const isDark = theme === 'dark';
  const isPeach = theme === 'peach';

  const containerBg = isDark
    ? 'bg-[#211724] border-[#2F1F35]'
    : isPeach
    ? 'bg-[#F7B7A3]/15 border-[#F7B7A3]/40'
    : 'bg-white border-[#2F1F35]/10';

  const nodeBg = isDark
    ? 'bg-[#2F1F35] border-[#FFF8F0]/15 text-[#FFF8F0]'
    : isPeach
    ? 'bg-white border-[#C83B7A]/20 text-[#2F1F35]'
    : 'bg-[#FFF8F0] border-[#2F1F35]/15 text-[#2F1F35]';

  const connectorColor = isDark ? 'text-[#F7B7A3]/60' : 'text-[#C83B7A]';

  return (
    <div className={`rounded-xl border p-5 md:p-7 shadow-xs ${containerBg}`}>
      {caption && (
        <div className="mb-4 pb-3 border-b border-current/10 flex items-center justify-between">
          <span
            className={`text-xs font-semibold uppercase tracking-wider ${
              isDark ? 'text-[#F7B7A3]' : 'text-[#C83B7A]'
            }`}
          >
            {caption}
          </span>
          <span
            className={`text-xs ${
              isDark ? 'text-[#FFF8F0]/50' : 'text-[#756C76]'
            }`}
          >
            {nodes.length} Automated Stages
          </span>
        </div>
      )}

      {/* Desktop Horizontal View */}
      <div className="hidden lg:flex items-center justify-between gap-2 overflow-x-auto py-2">
        {nodes.map((node, idx) => (
          <React.Fragment key={idx}>
            <div
              className={`flex-1 min-w-[140px] max-w-[210px] rounded-lg border p-3.5 transition-all hover:border-[#C83B7A] ${nodeBg}`}
            >
              <div className="flex items-center justify-between gap-1 mb-1.5">
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider ${
                    isDark ? 'text-[#F7B7A3]' : 'text-[#C83B7A]'
                  }`}
                >
                  {node.step ? `Step ${node.step}` : `Stage 0${idx + 1}`}
                </span>
                {node.type && (
                  <span
                    className={`text-[9px] font-medium uppercase px-1.5 py-0.5 rounded ${
                      isDark
                        ? 'bg-[#211724] text-[#FFF8F0]/70'
                        : 'bg-[#2F1F35]/5 text-[#332D35]/70'
                    }`}
                  >
                    {node.type}
                  </span>
                )}
              </div>
              <h4 className="text-sm font-semibold tracking-tight leading-snug">
                {node.title}
              </h4>
              {node.note && (
                <p
                  className={`text-xs mt-1 leading-normal line-clamp-2 ${
                    isDark ? 'text-[#FFF8F0]/60' : 'text-[#756C76]'
                  }`}
                >
                  {node.note}
                </p>
              )}
            </div>

            {idx < nodes.length - 1 && (
              <div className={`shrink-0 px-1 ${connectorColor}`}>
                <ArrowRight className="w-4 h-4" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile & Tablet Vertical Stack */}
      <div className="flex lg:hidden flex-col gap-3">
        {nodes.map((node, idx) => (
          <React.Fragment key={idx}>
            <div
              className={`rounded-lg border p-3.5 transition-all ${nodeBg}`}
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span
                  className={`text-[11px] font-bold uppercase tracking-wider ${
                    isDark ? 'text-[#F7B7A3]' : 'text-[#C83B7A]'
                  }`}
                >
                  {node.step ? `Step ${node.step}` : `Stage 0${idx + 1}`}
                </span>
                {node.type && (
                  <span
                    className={`text-[10px] font-medium uppercase px-1.5 py-0.5 rounded ${
                      isDark
                        ? 'bg-[#211724] text-[#FFF8F0]/70'
                        : 'bg-[#2F1F35]/5 text-[#332D35]/70'
                    }`}
                  >
                    {node.type}
                  </span>
                )}
              </div>
              <h4 className="text-sm font-semibold tracking-tight leading-snug">
                {node.title}
              </h4>
              {node.note && (
                <p
                  className={`text-xs mt-1 leading-normal ${
                    isDark ? 'text-[#FFF8F0]/65' : 'text-[#756C76]'
                  }`}
                >
                  {node.note}
                </p>
              )}
            </div>

            {idx < nodes.length - 1 && (
              <div className={`flex justify-center -my-1 ${connectorColor}`}>
                <ArrowDown className="w-4 h-4" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
