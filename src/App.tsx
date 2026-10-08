/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AutomationPage } from './pages/AutomationPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (
        hash === 'home' ||
        hash === 'automation' ||
        hash === 'case-studies' ||
        hash === 'how-it-works' ||
        hash === 'contact'
      ) {
        setCurrentPage(hash as PageId);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '#/' : `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8F0] text-[#332D35] selection:bg-[#F7B7A3]/40 selection:text-[#2F1F35]">
      {/* Top Bar Header */}
      <Header currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Content Area: Exactly 5 Pages */}
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
        {currentPage === 'automation' && <AutomationPage onNavigate={navigateTo} />}
        {currentPage === 'case-studies' && <CaseStudiesPage onNavigate={navigateTo} />}
        {currentPage === 'how-it-works' && <HowItWorksPage onNavigate={navigateTo} />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
