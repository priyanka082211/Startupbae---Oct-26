import React, { useState } from 'react';
import { PageId } from '../types';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'automation', label: 'Automation' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'how-it-works', label: 'How It Works' },
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FFF8F0]/95 backdrop-blur-md border-b border-[#2F1F35]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2 group text-left focus:outline-none"
            aria-label="StartupBae Home"
          >
            <span className="font-serif-display text-2xl md:text-3xl font-semibold tracking-tight text-[#2F1F35] group-hover:text-[#C83B7A] transition-colors">
              StartupBae
            </span>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#332D35]" aria-label="Main Navigation">
            {navLinks.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative py-1 transition-colors hover:text-[#C83B7A] focus:outline-none ${
                    isActive ? 'text-[#C83B7A] font-semibold' : 'text-[#332D35]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C83B7A] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleLinkClick('contact')}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#C83B7A] hover:bg-[#b02f68] active:bg-[#992558] rounded-md transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C83B7A]/40 whitespace-nowrap"
            >
              Let's Automate
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#2F1F35] hover:bg-[#2F1F35]/5 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#2F1F35]/10 bg-[#FFF8F0] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`text-left px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-[#C83B7A]/10 text-[#C83B7A] font-semibold'
                      : 'text-[#332D35] hover:bg-[#2F1F35]/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          <div className="pt-2 border-t border-[#2F1F35]/10 flex flex-col gap-2">
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full text-center px-4 py-3 text-sm font-medium text-white bg-[#C83B7A] hover:bg-[#b02f68] rounded-md transition-colors"
            >
              Let's Automate
            </button>
            <a
              href="https://wa.me/919740326160?text=Hi%20StartupBae%2C%20I%20would%20like%20to%20automate%20a%20process%20in%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 w-full text-center px-4 py-2.5 text-xs font-medium text-[#2F1F35] border border-[#2F1F35]/20 hover:bg-[#2F1F35]/5 rounded-md transition-colors"
            >
              <span>WhatsApp: +91 9740326160</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
