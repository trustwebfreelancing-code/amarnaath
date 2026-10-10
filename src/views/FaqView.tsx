import React, { useState, useMemo } from 'react';
import { FAQS, COMPANY_INFO } from '../data/companyData';
import { Search, ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

interface FaqViewProps {
  onOpenQuote: () => void;
  onNavigate: (tab: string) => void;
}

export const FaqView: React.FC<FaqViewProps> = ({ onOpenQuote, onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({ 'faq-1': true });

  const categories = ['All', 'General', 'Products', 'Orders & Enquiries', 'Installation', 'Support'];

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs = useMemo(() => {
    return FAQS.filter((faq) => {
      const matchSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchCat =
        selectedCategory === 'All' || faq.category === selectedCategory;
      return matchSearch && matchCat;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="w-full bg-[#FAFAFA] py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-3 text-center sm:text-left">
          <span className="text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
            KNOWLEDGE BASE
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h1>
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
            Detailed answers regarding machinery specifications, trial acceptance protocols, export packaging, international electrical compatibility, and warranty coverage.
          </p>
        </div>

        {/* Search & Category Tabs */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search by keywords (e.g. warranty, electrical, CE certificate, lead time)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-md text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0284C7] shadow-xs"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white font-semibold'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center bg-white border border-slate-200 rounded-lg">
              <p className="text-sm text-slate-600">
                No questions found matching your search.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-2 text-xs font-semibold text-[#0284C7] underline"
              >
                Clear search query
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = !!openItems[faq.id];
              return (
                <div
                  key={faq.id}
                  className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-slate-900 hover:text-[#0284C7] transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3 pr-4">
                      <HelpCircle className="w-4 h-4 text-[#0284C7] shrink-0" />
                      <span>{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#0284C7]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Help Banner */}
        <div className="bg-slate-900 text-white rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold">Have a Specialized Engineering Question?</h3>
            <p className="text-xs text-slate-400">
              Our application engineers are available for technical consultations regarding your plant setup.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              className="px-4 py-2 text-xs font-semibold bg-white text-slate-900 rounded hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Contact Engineering
            </button>
            <button
              onClick={onOpenQuote}
              className="px-4 py-2 text-xs font-semibold bg-[#0284C7] text-white rounded hover:bg-[#0369A1] transition-colors cursor-pointer"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
