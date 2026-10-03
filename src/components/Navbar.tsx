import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'Work', page: 'work' },
    { label: 'Industries', page: 'industries' },
    { label: 'About', page: 'about' },
    { label: 'Insights', page: 'insights' },
  ];

  const handleLinkClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFF8F0]/95 backdrop-blur-md shadow-xs border-b border-[#3B2347]/8 py-3.5'
            : 'bg-[#FFF8F0] border-b border-[#3B2347]/6 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Logo onClick={() => handleLinkClick('home')} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleLinkClick(link.page)}
                  className={`px-3 py-1.5 text-sm font-medium transition-colors relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C83B7A] ${
                    isActive
                      ? 'text-[#3B2347] font-semibold'
                      : 'text-[#3B2347]/70 hover:text-[#3B2347]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C83B7A] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/919740326160"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3B2347]/80 hover:text-[#3B2347] px-3 py-2 transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#C83B7A]" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={() => handleLinkClick('contact')}
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-medium text-white bg-[#C83B7A] hover:bg-[#b42e6a] shadow-xs transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C83B7A]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4 opacity-90" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => handleLinkClick('contact')}
              className="px-3.5 py-1.5 text-xs font-medium text-white bg-[#C83B7A] rounded-full"
            >
              Let's Talk
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#3B2347] hover:text-[#C83B7A] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-[#3B2347]/30 backdrop-blur-xs flex flex-col justify-start">
          <div className="bg-[#FFF8F0] border-b border-[#3B2347]/10 p-6 shadow-xl space-y-6 animate-in slide-in-from-top-4 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-[#3B2347]/10">
              <Logo onClick={() => handleLinkClick('home')} />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#3B2347] hover:text-[#C83B7A]"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = currentPage === link.page;
                return (
                  <button
                    key={link.page}
                    onClick={() => handleLinkClick(link.page)}
                    className={`text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-[#FBE7E2] text-[#3B2347] font-semibold'
                        : 'text-[#3B2347]/80 hover:bg-[#F8F1E7] hover:text-[#3B2347]'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-[#3B2347]/10 flex flex-col gap-3">
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-sm font-semibold text-white bg-[#C83B7A] hover:bg-[#b42e6a] shadow-xs"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/919740326160"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-xs font-semibold text-[#3B2347] border border-[#3B2347]/20 hover:border-[#3B2347]/40"
              >
                <MessageCircle className="w-4 h-4 text-[#C83B7A]" />
                <span>WhatsApp: +91 9740326160</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
