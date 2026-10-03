import React from 'react';
import { InsightArticle } from '../types';
import { X, ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';

interface ArticleModalProps {
  article: InsightArticle | null;
  onClose: () => void;
  onNavigateToContact: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onNavigateToContact,
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#3B2347]/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#FFF8F0] border border-[#3B2347]/15 rounded-2xl shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="article-headline"
      >
        {/* Header */}
        <div className="bg-[#3B2347] text-[#FFF8F0] px-6 sm:px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#F7B7A3]">
              StartupBae Insights
            </span>
            <span className="text-[#FFF8F0]/30">/</span>
            <span className="text-xs text-[#FFF8F0]/80">{article.category}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#FFF8F0]/70 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C83B7A]"
            aria-label="Close article"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10 space-y-6 max-h-[75vh] overflow-y-auto">
          <div className="flex items-center gap-3 text-xs text-[#3B2347]/60">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#C83B7A]" />
              {article.date}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#C83B7A]" />
              {article.readTime}
            </span>
          </div>

          <h3
            id="article-headline"
            className="text-2xl sm:text-4xl font-serif text-[#3B2347] tracking-tight leading-tight"
          >
            {article.title}
          </h3>

          <p className="text-base sm:text-lg text-[#3B2347]/90 font-medium italic border-l-2 border-[#C83B7A] pl-4 py-1">
            "{article.excerpt}"
          </p>

          <div className="space-y-4 pt-4 text-sm sm:text-base text-[#3B2347]/85 leading-relaxed font-sans">
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Callout box */}
          <div className="p-6 rounded-xl bg-[#FBE7E2]/60 border border-[#C83B7A]/20 mt-8 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#3B2347]">
              The Takeaway for Growing Businesses
            </h4>
            <p className="text-xs sm:text-sm text-[#3B2347]/85 leading-relaxed">
              Modern digital growth requires connecting creative, advertising, and operational systems together. If any one piece is disconnected, conversion drops.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#FFF8F0] border-t border-[#3B2347]/10 px-6 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#3B2347]/60">
            Ready to review your customer acquisition architecture?
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-[#3B2347]/70 hover:text-[#3B2347]"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onNavigateToContact();
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#C83B7A] hover:bg-[#b42e6a] shadow-xs transition-colors"
            >
              <span>Consult With Our Studio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
