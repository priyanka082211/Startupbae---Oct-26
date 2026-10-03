import React, { useState } from 'react';
import { Page, ContactFormData } from '../types';
import {
  Mail,
  MessageCircle,
  ArrowUpRight,
  CheckCircle2,
  Send,
  Building,
  Globe,
  Clock,
  MapPin,
  Sparkles,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: Page) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    businessName: '',
    email: '',
    website: '',
    needs: [],
    budget: '$5,000 – $15,000',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const needOptions = [
    'Website Design & Development',
    'Landing Pages & Funnels',
    'Branding & Visual Identity',
    'Meta & Google Advertising',
    'CRM Setup & Lead Pipelines',
    'AI Chat & Voice Receptionist',
    'WhatsApp / SMS Follow-up Automation',
    'Complete End-to-End Growth Engine',
  ];

  const budgetOptions = [
    'Under $5,000',
    '$5,000 – $15,000',
    '$15,000 – $30,000',
    '$30,000+',
  ];

  const handleNeedToggle = (option: string) => {
    setFormData((prev) => {
      const exists = prev.needs.includes(option);
      return {
        ...prev,
        needs: exists
          ? prev.needs.filter((item) => item !== option)
          : [...prev.needs, option],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission flow
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="bg-[#FFF8F0] min-h-screen">
      {/* Header Banner */}
      <section className="py-16 sm:py-24 border-b border-[#3B2347]/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C83B7A]" />
            <span className="text-xs uppercase tracking-widest font-bold text-[#3B2347]/80">
              Start The Conversation
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#3B2347] max-w-4xl tracking-tight leading-tight">
            Let's talk about what you're building.
          </h1>

          <p className="text-base sm:text-xl text-[#3B2347]/80 max-w-2xl font-light leading-relaxed">
            Tell us about your brand, your goals, and where customer opportunities are getting lost. We'll help design a clear path forward.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Channels */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Direct Contact Details & WhatsApp CTA */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#3B2347]/10 shadow-xs space-y-6">
                <span className="text-xs uppercase tracking-widest font-bold text-[#C83B7A] block">
                  Direct Inquiries
                </span>

                <h3 className="font-serif text-2xl text-[#3B2347]">
                  Fast, direct access to our studio team.
                </h3>

                <p className="text-sm text-[#3B2347]/80 leading-relaxed">
                  No bureaucracy. You will speak directly with an experienced growth strategist who understands brand design, media buying, and CRM engineering.
                </p>

                {/* Email */}
                <div className="pt-4 border-t border-[#3B2347]/10 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FBE7E2] flex items-center justify-center text-[#C83B7A] shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[#3B2347]/60 font-semibold uppercase">
                        Email Us
                      </div>
                      <a
                        href="mailto:hello@startupbae.com"
                        className="text-base font-semibold text-[#3B2347] hover:text-[#C83B7A] transition-colors"
                      >
                        hello@startupbae.com
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FBE7E2] flex items-center justify-center text-[#C83B7A] shrink-0 mt-0.5">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[#3B2347]/60 font-semibold uppercase">
                        Direct WhatsApp
                      </div>
                      <div className="text-base font-semibold text-[#3B2347]">
                        +91 9740326160
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Action Button */}
                <div className="pt-2">
                  <a
                    href="https://wa.me/919740326160"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-sm font-semibold text-white bg-[#C83B7A] hover:bg-[#b42e6a] shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4 opacity-80" />
                  </a>
                </div>
              </div>

              {/* Geographic Info Card */}
              <div className="p-8 rounded-3xl bg-[#3B2347] text-[#FFF8F0] space-y-4">
                <span className="text-xs uppercase tracking-widest font-bold text-[#F7B7A3]">
                  Global Reach
                </span>
                <h4 className="font-serif text-xl text-white">
                  Serving businesses internationally
                </h4>
                <p className="text-xs text-[#FFF8F0]/80 leading-relaxed">
                  Our systems run 24 hours a day for clients based in the United States, United Kingdom, Australia, and select global hubs.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs text-[#F7B7A3]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Responses typically within 4 business hours</span>
                </div>
              </div>
            </div>

            {/* Right Column: Project Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#3B2347]/10 shadow-sm">
                {submitted ? (
                  <div className="py-12 text-center space-y-6 animate-in fade-in duration-300">
                    <div className="w-16 h-16 rounded-full bg-[#FBE7E2] text-[#C83B7A] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <h3 className="font-serif text-3xl text-[#3B2347]">
                      Inquiry Received
                    </h3>

                    <p className="text-sm sm:text-base text-[#3B2347]/80 max-w-md mx-auto leading-relaxed">
                      Thank you, {formData.name || 'there'}! We have logged your project brief for{' '}
                      <strong>{formData.businessName || 'your business'}</strong>. A senior studio partner will review your inquiry and follow up promptly.
                    </p>

                    <div className="p-5 rounded-2xl bg-[#FFF8F0] border border-[#3B2347]/10 text-left max-w-md mx-auto space-y-2 text-xs text-[#3B2347]/80">
                      <div>
                        <strong>Selected Areas:</strong>{' '}
                        {formData.needs.length > 0
                          ? formData.needs.join(', ')
                          : 'General Growth Consultation'}
                      </div>
                      <div>
                        <strong>Budget Scope:</strong> {formData.budget}
                      </div>
                      <div>
                        <strong>Email:</strong> {formData.email}
                      </div>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: '',
                            businessName: '',
                            email: '',
                            website: '',
                            needs: [],
                            budget: '$5,000 – $15,000',
                            message: '',
                          });
                        }}
                        className="px-6 py-2.5 rounded-full text-xs font-semibold text-[#3B2347] border border-[#3B2347]/20 hover:border-[#3B2347]"
                      >
                        Submit Another Inquiry
                      </button>

                      <a
                        href="https://wa.me/919740326160"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#C83B7A] hover:bg-[#b42e6a]"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Follow Up On WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs uppercase tracking-wider font-bold text-[#C83B7A]">
                        Project Intake Form
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#3B2347]">
                        Tell us about your project
                      </h3>
                    </div>

                    {/* Contact basics grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-[#3B2347]">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full px-4 py-3 rounded-xl bg-[#FFF8F0] border border-[#3B2347]/15 text-sm text-[#3B2347] focus:outline-none focus:border-[#C83B7A] focus:ring-1 focus:ring-[#C83B7A]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-[#3B2347]">
                          Business Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.businessName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              businessName: e.target.value,
                            })
                          }
                          placeholder="e.g. Peak Aesthetic Clinic"
                          className="w-full px-4 py-3 rounded-xl bg-[#FFF8F0] border border-[#3B2347]/15 text-sm text-[#3B2347] focus:outline-none focus:border-[#C83B7A] focus:ring-1 focus:ring-[#C83B7A]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-[#3B2347]">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="sarah@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#FFF8F0] border border-[#3B2347]/15 text-sm text-[#3B2347] focus:outline-none focus:border-[#C83B7A] focus:ring-1 focus:ring-[#C83B7A]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-[#3B2347]">
                          Website / Current URL
                        </label>
                        <input
                          type="url"
                          value={formData.website}
                          onChange={(e) =>
                            setFormData({ ...formData, website: e.target.value })
                          }
                          placeholder="https://yourwebsite.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#FFF8F0] border border-[#3B2347]/15 text-sm text-[#3B2347] focus:outline-none focus:border-[#C83B7A] focus:ring-1 focus:ring-[#C83B7A]"
                        />
                      </div>
                    </div>

                    {/* What do you need help with? */}
                    <div className="space-y-2 pt-2">
                      <label className="text-xs font-semibold text-[#3B2347] block">
                        What do you need help with? (Select all that apply)
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {needOptions.map((opt) => {
                          const isSelected = formData.needs.includes(opt);
                          return (
                            <button
                              type="button"
                              key={opt}
                              onClick={() => handleNeedToggle(opt)}
                              className={`p-2.5 rounded-xl text-left text-xs font-medium transition-all border flex items-center justify-between ${
                                isSelected
                                  ? 'bg-[#3B2347] text-white border-[#3B2347]'
                                  : 'bg-[#FFF8F0] text-[#3B2347]/80 border-[#3B2347]/15 hover:border-[#C83B7A]/50'
                              }`}
                            >
                              <span>{opt}</span>
                              {isSelected && (
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#F7B7A3] shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Estimated Budget */}
                    <div className="space-y-2 pt-2">
                      <label className="text-xs font-semibold text-[#3B2347] block">
                        Approximate Budget Scope
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {budgetOptions.map((budget) => {
                          const isSelected = formData.budget === budget;
                          return (
                            <button
                              type="button"
                              key={budget}
                              onClick={() => setFormData({ ...formData, budget })}
                              className={`p-2.5 rounded-xl text-center text-xs font-medium transition-all border ${
                                isSelected
                                  ? 'bg-[#C83B7A] text-white border-[#C83B7A]'
                                  : 'bg-[#FFF8F0] text-[#3B2347]/80 border-[#3B2347]/15 hover:border-[#3B2347]/40'
                              }`}
                            >
                              {budget}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Project Message */}
                    <div className="space-y-1.5 pt-2">
                      <label className="text-xs font-semibold text-[#3B2347]">
                        Tell us more about your current goals and challenges *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Briefly describe what you are looking to build, current bottlenecks, or timeline..."
                        className="w-full px-4 py-3 rounded-xl bg-[#FFF8F0] border border-[#3B2347]/15 text-sm text-[#3B2347] focus:outline-none focus:border-[#C83B7A] focus:ring-1 focus:ring-[#C83B7A]"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full text-sm font-semibold text-white bg-[#C83B7A] hover:bg-[#b42e6a] shadow-md transition-all active:scale-[0.99] disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Submitting Inquiry...</span>
                        ) : (
                          <>
                            <span>Send Project Inquiry</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <div className="text-center text-[11px] text-[#3B2347]/60">
                      We treat your contact and business details with complete confidentiality.
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
