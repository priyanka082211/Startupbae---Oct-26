import React, { useState, useEffect } from 'react';
import { Page, Project, InsightArticle } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ArticleModal } from './components/ArticleModal';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { AboutPage } from './pages/AboutPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';

import { MessageCircle, ArrowUp } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top on page change
  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8F0] text-[#241D24] selection:bg-[#FBE7E2] selection:text-[#3B2347]">
      {/* Top Sticky Navigation */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Page Content View */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onSelectProject={(project) => setSelectedProject(project)}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage onNavigate={navigateTo} />
        )}

        {currentPage === 'work' && (
          <WorkPage
            onNavigate={navigateTo}
            onSelectProject={(project) => setSelectedProject(project)}
          />
        )}

        {currentPage === 'industries' && (
          <IndustriesPage onNavigate={navigateTo} />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={navigateTo} />
        )}

        {currentPage === 'insights' && (
          <InsightsPage
            onNavigate={navigateTo}
            onSelectArticle={(article) => setSelectedArticle(article)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage onNavigate={navigateTo} />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Floating Action Elements: WhatsApp & Scroll Top */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/90 text-[#3B2347] border border-[#3B2347]/15 shadow-md flex items-center justify-center hover:bg-[#3B2347] hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C83B7A]"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        <a
          href="https://wa.me/919740326160"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:bg-[#20ba5a] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
          aria-label="Chat with StartupBae on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span className="text-xs font-bold tracking-wide">
            WhatsApp
          </span>
        </a>
      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartProject={() => {
          setSelectedProject(null);
          navigateTo('contact');
        }}
      />

      {/* Insight Article Reader Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onNavigateToContact={() => {
          setSelectedArticle(null);
          navigateTo('contact');
        }}
      />
    </div>
  );
}
