import React, { useState } from 'react';
import { Page, InsightArticle } from '../types';
import { INSIGHTS_ARTICLES } from '../data/content';
import { ArrowRight, ArrowUpRight, BookOpen, Clock, Calendar } from 'lucide-react';

interface InsightsPageProps {
  onNavigate: (page: Page) => void;
  onSelectArticle: (article: InsightArticle) => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({
  onNavigate,
  onSelectArticle,
}) => {
  const topics = [
    'All Topics',
    'Websites & Systems',
    'Lead Generation & CRM',
    'AI Automation',
    'Paid Advertising',
  ];

  const [selectedTopic, setSelectedTopic] = useState('All Topics');

  const filteredArticles =
    selectedTopic === 'All Topics'
      ? INSIGHTS_ARTICLES
      : INSIGHTS_ARTICLES.filter((a) => a.category.includes(selectedTopic));

  return (
    <div className="bg-[#FFF8F0] min-h-screen">
      {/* Header Banner */}
      <section className="py-16 sm:py-24 border-b border-[#3B2347]/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C83B7A]" />
            <span className="text-xs uppercase tracking-widest font-bold text-[#3B2347]/80">
              Studio Journal & Strategy
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#3B2347] max-w-4xl tracking-tight">
            Insights on brand, conversion, and customer automation.
          </h1>

          <p className="text-base sm:text-xl text-[#3B2347]/80 max-w-2xl font-light leading-relaxed">
            Practical essays exploring how modern businesses attract qualified interest, prevent lost leads, and scale operational systems.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 bg-[#FFF8F0] border-b border-[#3B2347]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  selectedTopic === topic
                    ? 'bg-[#3B2347] text-white'
                    : 'text-[#3B2347]/70 hover:text-[#3B2347] hover:bg-white/60'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="group p-8 sm:p-12 rounded-3xl bg-white border border-[#3B2347]/10 hover:border-[#C83B7A]/40 hover:shadow-md transition-all duration-300 space-y-4"
            >
              {/* Unboxed clean metadata (zero-pill discipline) */}
              <div className="flex items-center gap-2 text-xs text-[#3B2347]/60">
                <span className="font-semibold text-[#C83B7A]">{article.category}</span>
                <span aria-hidden="true">·</span>
                <span>{article.date}</span>
                <span aria-hidden="true">·</span>
                <span>{article.readTime}</span>
              </div>

              <h2
                onClick={() => onSelectArticle(article)}
                className="font-serif text-2xl sm:text-4xl text-[#3B2347] group-hover:text-[#C83B7A] transition-colors cursor-pointer leading-tight"
              >
                {article.title}
              </h2>

              <p className="text-sm sm:text-base text-[#3B2347]/80 leading-relaxed font-normal">
                {article.excerpt}
              </p>

              <div className="pt-4 border-t border-[#3B2347]/10 flex items-center justify-between">
                <button
                  onClick={() => onSelectArticle(article)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#C83B7A] hover:text-[#b42e6a] transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#3B2347] text-[#FFF8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-5xl text-white">
            Want to put these strategies into practice?
          </h2>
          <p className="text-base text-[#FFF8F0]/80 max-w-xl mx-auto leading-relaxed">
            Let's discuss how these insights apply to your current business model and customer journey.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#C83B7A] hover:bg-[#b42e6a] shadow-md transition-all"
            >
              <span>Talk With Our Strategists</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
