import React, { useState } from 'react';
import { PageId } from '../types';
import { AUTOMATION_LIBRARY_CATEGORIES } from '../data/workflows';
import { InteractiveWorkflowSimulator } from '../components/InteractiveWorkflowSimulator';
import { CanThisBeAutomated } from '../components/CanThisBeAutomated';
import { Search, ArrowRight, Layers, CheckCircle2, ChevronRight } from 'lucide-react';

interface AutomationPageProps {
  onNavigate: (page: PageId) => void;
}

export const AutomationPage: React.FC<AutomationPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = AUTOMATION_LIBRARY_CATEGORIES.filter((cat) => {
    if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
      return false;
    }
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    const matchesCat =
      cat.name.toLowerCase().includes(query) ||
      cat.description.toLowerCase().includes(query);
    const matchesItems = cat.items.some(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.detail.toLowerCase().includes(query)
    );
    return matchesCat || matchesItems;
  });

  return (
    <div className="space-y-0">
      {/* Header Banner */}
      <section className="pt-14 pb-16 bg-[#FFF8F0] border-b border-[#2F1F35]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C83B7A]">
              System Catalog
            </span>
            <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-[#2F1F35] tracking-tight leading-tight">
              What can we automate?
            </h1>
            <p className="text-base sm:text-lg text-[#332D35]/85 leading-relaxed">
              Explore our reference library of business automation blueprints. From lead qualification and CRM updates to operations and conversational AI, here is what can be connected.
            </p>
          </div>

          {/* Search & Filter Controls */}
          <div className="mt-10 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative max-w-md w-full">
              <Search className="w-4 h-4 text-[#756C76] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search workflows (e.g. WhatsApp, CRM, onboarding, invoice)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#2F1F35]/20 bg-white text-sm text-[#332D35] placeholder:text-[#756C76]/60 focus:outline-none focus:ring-2 focus:ring-[#C83B7A]"
              />
            </div>

            {/* Category Quick Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 text-xs">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors whitespace-nowrap ${
                  selectedCategory === 'all'
                    ? 'bg-[#2F1F35] text-white shadow-xs'
                    : 'bg-white border border-[#2F1F35]/15 text-[#332D35] hover:bg-[#2F1F35]/5'
                }`}
              >
                All Categories ({AUTOMATION_LIBRARY_CATEGORIES.length})
              </button>
              {AUTOMATION_LIBRARY_CATEGORIES.slice(0, 5).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-md font-medium transition-colors whitespace-nowrap ${
                    selectedCategory === cat.id
                      ? 'bg-[#2F1F35] text-white shadow-xs'
                      : 'bg-white border border-[#2F1F35]/15 text-[#332D35] hover:bg-[#2F1F35]/5'
                  }`}
                >
                  {cat.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Simulation Sandbox */}
      <section className="py-16 bg-[#FFF8F0] border-b border-[#2F1F35]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C83B7A]">
              Live Process Simulator
            </span>
            <h2 className="font-serif-display text-2xl sm:text-3xl text-[#2F1F35] mt-1">
              Step through sample automation logic.
            </h2>
            <p className="text-xs sm:text-sm text-[#756C76] mt-1">
              Click run or select individual steps below to inspect how data passes between triggers, qualification logic, CRM stages, and messaging alerts.
            </p>
          </div>

          <InteractiveWorkflowSimulator />
        </div>
      </section>

      {/* The Categorized Library Grid */}
      <section className="py-20 bg-white border-b border-[#2F1F35]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#2F1F35]/15 pb-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C83B7A]">
                Comprehensive Blueprint Catalog
              </span>
              <h2 className="font-serif-display text-3xl text-[#2F1F35] mt-1">
                Automation Modules by Department
              </h2>
            </div>
            <p className="text-xs text-[#756C76]">
              Possible automation workflows. Not an exhaustive list.
            </p>
          </div>

          <div className="space-y-14">
            {filteredCategories.map((category) => (
              <div key={category.id} className="space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#2F1F35]/10 pb-3">
                  <div>
                    <h3 className="font-serif-display text-2xl text-[#2F1F35]">
                      {category.name}
                    </h3>
                    <p className="text-xs text-[#756C76] mt-0.5">
                      {category.description}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[#C83B7A] shrink-0">
                    {category.items.length} Workflows
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-[#2F1F35]/10 bg-[#FFF8F0]/40 hover:bg-[#FFF8F0] transition space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold text-[#2F1F35]">
                          {item.title}
                        </h4>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C83B7A]" />
                      </div>
                      <p className="text-xs text-[#756C76] leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {filteredCategories.length === 0 && (
              <div className="text-center py-12 space-y-3">
                <p className="text-base font-serif-display text-[#2F1F35]">
                  No matching automation modules found for "{searchQuery}".
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="text-xs text-[#C83B7A] underline"
                >
                  Clear search and view all workflows
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* “Can this be automated?” Section */}
      <CanThisBeAutomated />

      {/* Bottom CTA */}
      <section className="py-16 bg-[#FFF8F0] border-t border-[#2F1F35]/10 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h3 className="font-serif-display text-2xl sm:text-3xl text-[#2F1F35]">
            Have a custom workflow not listed above?
          </h3>
          <p className="text-sm text-[#756C76]">
            Every business has unique process quirks and software tools. Let us map yours.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C83B7A] hover:bg-[#b02f68] text-white text-sm font-medium rounded-md transition-colors"
            >
              <span>Discuss Your Workflow</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
