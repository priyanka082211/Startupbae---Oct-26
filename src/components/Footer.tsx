import React from 'react';
import { Page } from '../types';
import { Logo } from './Logo';
import { MessageCircle, Mail, MapPin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#3B2347] text-[#FFF8F0] pt-16 pb-12 border-t border-[#3B2347]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#FFF8F0]/15">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Logo isLight={true} onClick={() => onNavigate('home')} />
            <p className="text-sm text-[#FFF8F0]/75 max-w-sm leading-relaxed">
              Creative, marketing and customer systems for businesses ready to grow.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#F7B7A3]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Partnering with businesses across US, UK & Australia</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#F7B7A3]">
              Studio
            </h4>
            <ul className="space-y-2 text-sm text-[#FFF8F0]/80">
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
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('work')}
                  className="hover:text-white transition-colors"
                >
                  Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('industries')}
                  className="hover:text-white transition-colors"
                >
                  Industries
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('insights')}
                  className="hover:text-white transition-colors"
                >
                  Insights
                </button>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#F7B7A3]">
              Capabilities
            </h4>
            <ul className="space-y-2 text-sm text-[#FFF8F0]/80">
              <li>01. Brand & Digital Web</li>
              <li>02. Marketing & Advertising</li>
              <li>03. CRM & Lead Pipelines</li>
              <li>04. AI & Workflow Automation</li>
              <li>05. Conversational WhatsApp & SMS</li>
              <li>06. Appointment Booking Engines</li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#F7B7A3]">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@startupbae.com"
                className="group flex items-center gap-2 text-sm text-[#FFF8F0]/90 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#FFF8F0]/10 flex items-center justify-center group-hover:bg-[#C83B7A] transition-colors">
                  <Mail className="w-4 h-4 text-[#F7B7A3] group-hover:text-white" />
                </div>
                <span>hello@startupbae.com</span>
              </a>

              <a
                href="https://wa.me/919740326160"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm text-[#FFF8F0]/90 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#FFF8F0]/10 flex items-center justify-center group-hover:bg-[#C83B7A] transition-colors">
                  <MessageCircle className="w-4 h-4 text-[#F7B7A3] group-hover:text-white" />
                </div>
                <span>WhatsApp: +91 9740326160</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold text-white bg-[#C83B7A] hover:bg-[#b42e6a] transition-all"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Social Placeholders & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF8F0]/60">
          <div>
            © {new Date().getFullYear()} StartupBae. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[#FFF8F0]/40">Connect:</span>
            {/* Social placeholders without invented external URLs */}
            <span className="text-[#FFF8F0]/80 hover:text-white cursor-default">LinkedIn</span>
            <span className="text-[#FFF8F0]/80 hover:text-white cursor-default">Instagram</span>
            <span className="text-[#FFF8F0]/80 hover:text-white cursor-default">X / Twitter</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
