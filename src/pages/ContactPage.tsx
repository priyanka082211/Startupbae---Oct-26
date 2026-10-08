import React, { useState } from 'react';
import { Mail, MessageCircle, Globe, CheckCircle2, ArrowRight, AlertCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    automationRequest: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.automationRequest.trim()) {
      setError('Please fill in your name, email, and what you would like to automate.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setError('Please provide a valid email address.');
      return;
    }

    setError(null);
    setSubmitted(true);
  };

  const whatsappLink = `https://wa.me/919740326160?text=${encodeURIComponent(
    `Hi StartupBae, I am ${formData.name || 'there'} from ${
      formData.company || 'my company'
    }. I want to automate: "${formData.automationRequest}"`
  )}`;

  return (
    <div className="py-14 sm:py-20 bg-[#FFF8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact Details & Context */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C83B7A]">
                Direct Contact
              </span>
              <h1 className="font-serif-display text-4xl sm:text-5xl text-[#2F1F35] tracking-tight leading-tight">
                What are you still doing manually?
              </h1>
              <p className="text-base text-[#756C76] leading-relaxed">
                Tell us what your team does repeatedly. We will help identify what can be automated.
              </p>
            </div>

            {/* Strict Contact Info Card */}
            <div className="bg-white rounded-xl border border-[#2F1F35]/10 p-6 space-y-5 shadow-xs">
              <h3 className="font-serif-display text-lg text-[#2F1F35]">
                Reach Out Directly
              </h3>

              <div className="space-y-4 text-sm">
                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#2F1F35]/5 flex items-center justify-center shrink-0 text-[#C83B7A]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#756C76] block">
                      Email
                    </span>
                    <a
                      href="mailto:hello@startupbae.com"
                      className="text-sm font-medium text-[#2F1F35] hover:text-[#C83B7A] transition-colors"
                    >
                      hello@startupbae.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0 text-[#25D366]">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#756C76] block">
                      WhatsApp (Click to chat)
                    </span>
                    <a
                      href="https://wa.me/919740326160?text=Hi%20StartupBae%2C%20I%20would%20like%20to%20automate%20a%20process%20in%20my%20business."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#2F1F35] hover:text-[#25D366] transition-colors"
                    >
                      +91 9740326160
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#2F1F35]/5 flex items-center justify-center shrink-0 text-[#2F1F35]">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#756C76] block">
                      Website
                    </span>
                    <span className="text-sm font-medium text-[#2F1F35]">
                      startupbae.com
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#2F1F35]/10">
                <a
                  href="https://wa.me/919740326160?text=Hi%20StartupBae%2C%20I%20would%20like%20to%20automate%20a%20process%20in%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20b858] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat with us on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#2F1F35]/5 border border-[#2F1F35]/10 text-xs text-[#756C76] space-y-1">
              <strong className="text-[#2F1F35] block">Practical note:</strong>
              <p>
                No sales calls or generic pitch decks. We review what your team currently does by hand and respond with concrete automation options.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-[#2F1F35]/15 p-6 sm:p-10 shadow-xs">
              {submitted ? (
                <div className="text-center py-8 space-y-6">
                  <div className="w-14 h-14 bg-[#C83B7A]/15 text-[#C83B7A] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif-display text-2xl sm:text-3xl text-[#2F1F35]">
                      Inquiry Received
                    </h3>
                    <p className="text-sm text-[#756C76] max-w-md mx-auto">
                      Thank you, <strong className="text-[#2F1F35]">{formData.name}</strong>. We have logged your request:
                    </p>
                    <div className="bg-[#FFF8F0] border border-[#2F1F35]/10 rounded-lg p-4 text-xs text-left italic text-[#332D35] my-4">
                      "{formData.automationRequest}"
                    </div>
                    <p className="text-xs text-[#756C76]">
                      We will review the systems involved and get in touch via <strong className="text-[#2F1F35]">{formData.email}</strong>.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20b858] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send via WhatsApp (+91 9740326160)</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', company: '', email: '', automationRequest: '' });
                      }}
                      className="px-4 py-2 text-xs font-medium text-[#756C76] hover:text-[#2F1F35] underline"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-[#2F1F35]/10 pb-4 mb-2">
                    <h2 className="font-serif-display text-2xl text-[#2F1F35]">
                      Request an Automation Review
                    </h2>
                    <p className="text-xs text-[#756C76] mt-0.5">
                      Share what you want to automate and the tools you use today.
                    </p>
                  </div>

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
                        placeholder="Jordan Taylor"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#2F1F35]/20 bg-white text-sm text-[#332D35] placeholder:text-[#756C76]/50 focus:outline-none focus:ring-2 focus:ring-[#C83B7A] transition"
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
                        placeholder="Organization or project"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#2F1F35]/20 bg-white text-sm text-[#332D35] placeholder:text-[#756C76]/50 focus:outline-none focus:ring-2 focus:ring-[#C83B7A] transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-[#332D35] mb-1.5">
                      Email <span className="text-[#C83B7A]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jordan@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#2F1F35]/20 bg-white text-sm text-[#332D35] placeholder:text-[#756C76]/50 focus:outline-none focus:ring-2 focus:ring-[#C83B7A] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-[#332D35] mb-1.5">
                      What would you like to automate? <span className="text-[#C83B7A]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.automationRequest}
                      onChange={(e) =>
                        setFormData({ ...formData, automationRequest: e.target.value })
                      }
                      placeholder="Tell us what process you do repeatedly. (e.g. Lead response, CRM pipeline staging, WhatsApp confirmations, customer onboarding, reporting...)"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#2F1F35]/20 bg-white text-sm text-[#332D35] placeholder:text-[#756C76]/50 focus:outline-none focus:ring-2 focus:ring-[#C83B7A] transition"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C83B7A] hover:bg-[#b02f68] active:bg-[#992558] text-white text-sm font-medium rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C83B7A]/50"
                    >
                      <span>Let's Automate</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="text-[11px] text-center text-[#756C76] space-y-1">
                    <p>Direct reply within 24 hours. No sales spam.</p>
                    <p>
                      Prefer WhatsApp? Message directly at{' '}
                      <a
                        href="https://wa.me/919740326160"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[#C83B7A] underline"
                      >
                        +91 9740326160
                      </a>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
