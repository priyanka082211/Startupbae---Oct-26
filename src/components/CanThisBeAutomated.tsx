import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, MessageSquare, AlertCircle } from 'lucide-react';

export const CanThisBeAutomated: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    manualTask: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.manualTask.trim()) {
      setError('Please provide your name, email, and describe what you do manually.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setError('Please provide a valid business email address.');
      return;
    }

    setError(null);
    setSubmitted(true);
  };

  const whatsAppUrl = `https://wa.me/919740326160?text=${encodeURIComponent(
    `Hi StartupBae, I am ${formData.name || 'there'} from ${
      formData.company || 'my company'
    }. I want to see if this can be automated: "${formData.manualTask}"`
  )}`;

  return (
    <section className="py-20 bg-[#2F1F35] text-[#FFF8F0] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context & Promise */}
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F7B7A3]">
              Workflow Assessment
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#FFF8F0] leading-tight">
              Not sure if it can be automated?
            </h2>
            <p className="text-base text-[#FFF8F0]/75 leading-relaxed">
              Tell us what you currently do manually. We’ll help you identify what can be automated.
            </p>
            <div className="p-4 rounded-lg bg-[#211724] border border-[#FFF8F0]/10 space-y-2 text-xs text-[#FFF8F0]/70">
              <p className="font-medium text-[#F7B7A3]">Honest engineering assessment:</p>
              <p>
                We do not promise that every process can be automated. If a task requires human judgment, nuanced context, or a physical handoff, we will tell you directly and only automate the data preparation around it.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFF8F0] text-[#332D35] rounded-2xl p-6 sm:p-8 shadow-md border border-[#2F1F35]/10">
              {submitted ? (
                <div className="space-y-6 text-center py-6">
                  <div className="w-14 h-14 bg-[#C83B7A]/15 text-[#C83B7A] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif-display text-2xl text-[#2F1F35]">
                      Process Received
                    </h3>
                    <p className="text-sm text-[#756C76] max-w-md mx-auto">
                      Thank you, <span className="font-medium text-[#2F1F35]">{formData.name}</span>. We will review your manual workflow:
                    </p>
                    <div className="bg-white border border-[#2F1F35]/10 rounded-lg p-3.5 text-xs text-left italic text-[#332D35]/80 my-3">
                      "{formData.manualTask}"
                    </div>
                    <p className="text-xs text-[#756C76]">
                      We will assess which stages can be automated and respond via <span className="font-medium text-[#2F1F35]">{formData.email}</span>.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <a
                      href={whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20b858] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Continue on WhatsApp (+91 9740326160)</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', company: '', email: '', manualTask: '' });
                      }}
                      className="px-4 py-2 text-xs font-medium text-[#756C76] hover:text-[#2F1F35] underline"
                    >
                      Submit another process
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="flex items-center gap-2 p-3 text-xs text-rose-800 bg-rose-50 border border-rose-200 rounded-md">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#332D35] mb-1.5">
                        Name <span className="text-[#C83B7A]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#2F1F35]/20 bg-white text-sm text-[#332D35] placeholder:text-[#756C76]/50 focus:outline-none focus:ring-2 focus:ring-[#C83B7A] focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#332D35] mb-1.5">
                        Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Clinic / Logistics Co."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#2F1F35]/20 bg-white text-sm text-[#332D35] placeholder:text-[#756C76]/50 focus:outline-none focus:ring-2 focus:ring-[#C83B7A] focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-[#332D35] mb-1.5">
                      Business Email <span className="text-[#C83B7A]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@yourbusiness.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#2F1F35]/20 bg-white text-sm text-[#332D35] placeholder:text-[#756C76]/50 focus:outline-none focus:ring-2 focus:ring-[#C83B7A] focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-[#332D35] mb-1.5">
                      What do you currently do manually? <span className="text-[#C83B7A]">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.manualTask}
                      onChange={(e) => setFormData({ ...formData, manualTask: e.target.value })}
                      placeholder="e.g. When a lead fills out our website form, our front desk copies details into a spreadsheet, opens WhatsApp web to message them, and then manually sends a calendar link..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#2F1F35]/20 bg-white text-sm text-[#332D35] placeholder:text-[#756C76]/50 focus:outline-none focus:ring-2 focus:ring-[#C83B7A] focus:border-transparent transition"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C83B7A] hover:bg-[#b02f68] active:bg-[#992558] text-white text-sm font-medium rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C83B7A]/50"
                    >
                      <span>See If We Can Automate It</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-[11px] text-center text-[#756C76]">
                    Direct review by an automation engineer. No spam.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
