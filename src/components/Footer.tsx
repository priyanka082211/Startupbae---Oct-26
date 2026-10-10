import React from 'react';
import { PageId } from '../types';
import { Mail, MessageCircle, Globe, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#2F1F35] text-[#FFF8F0] pt-16 pb-12 border-t border-[#2F1F35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#FFF8F0]/10">
          {/* Column 1: Brand & Core Positioning */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif-display text-3xl font-semibold tracking-tight text-[#FFF8F0]">
              StartupBae
            </span>
            <p className="text-lg font-serif-display text-[#F7B7A3]">
              Stop Doing Work Your Business Can Automate.
            </p>
            <p className="text-sm text-[#FFF8F0]/70 max-w-sm leading-relaxed">
              StartupBae builds AI and business automation systems that take repetitive manual work off your team's plate. We connect the platforms you already rely on.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#2F1F35] bg-[#F7B7A3] hover:bg-[#ffc8b8] rounded-md transition-colors"
              >
                <span>Let's Automate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          
          {/* Column 2: Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F7B7A3]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FFF8F0]/80">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('automation')}
                  className="hover:text-white transition-colors"
                >
                  Automation Library
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('case-studies')}
                  className="hover:text-white transition-colors"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('how-it-works')}
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details (Strictly Documented) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F7B7A3]">
              Contact Details
            </h4>
            <ul className="space-y-3 text-sm text-[#FFF8F0]/85">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C83B7A] mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs text-[#FFF8F0]/50 uppercase tracking-wider">Email</span>
                  <a
                    href="mailto:hello@startupbae.com"
                    className="hover:text-[#F7B7A3] transition-colors"
                  >
                    hello@startupbae.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-[#25D366] mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs text-[#FFF8F0]/50 uppercase tracking-wider">WhatsApp</span>
                  <a
                    href="https://wa.me/919740326160?text=Hi%20StartupBae%2C%20I%20would%20like%20to%20automate%20a%20process%20in%20my%20business."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F7B7A3] transition-colors"
                  >
                    +91 9740326160
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-4 h-4 text-[#F7B7A3] mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs text-[#FFF8F0]/50 uppercase tracking-wider">Website</span>
                  <span className="text-[#FFF8F0]/90">startupbae.com</span>
                </div>
              </li>
            </ul>
            <p className="text-xs text-[#FFF8F0]/50 pt-2 leading-relaxed">
              No sales pressure. Reach out to review repetitive tasks your business can automate.
            </p>
          </div>
        </div>

        {/* Bottom Section: Tool compatibility note and copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FFF8F0]/60">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-center md:text-left">
            <span>Systems we work with:</span>
            <span className="text-[#FFF8F0]/80">n8n · Make · Zapier · GoHighLevel · OpenAI · Airtable · Google Workspace · WhatsApp · Twilio · Webhooks · APIs · CRM platforms</span>
          </div>
          <div className="text-center md:text-right shrink-0">
            <p>© {new Date().getFullYear()} StartupBae. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
