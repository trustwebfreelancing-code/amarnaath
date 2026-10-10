import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ProductsView } from './views/ProductsView';
import { GlobalPresenceView } from './views/GlobalPresenceView';
import { LocationsView } from './views/LocationsView';
import { GalleryView } from './views/GalleryView';
import { BlogsView } from './views/BlogsView';
import { FaqView } from './views/FaqView';
import { ContactView } from './views/ContactView';
import { QuoteModal } from './components/QuoteModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ProductItem, BlogItem, COMPANY_INFO } from './data/companyData';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedQuoteProductId, setSelectedQuoteProductId] = useState<string | undefined>(undefined);
  const [selectedProductDetail, setSelectedProductDetail] = useState<ProductItem | null>(null);

  // Sync tab with URL hash if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (
        [
          'home',
          'about',
          'products',
          'global-presence',
          'locations',
          'gallery',
          'blogs',
          'faq',
          'contact',
        ].includes(hash)
      ) {
        setCurrentTab(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (tab: string) => {
    setCurrentTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (productId?: string) => {
    setSelectedQuoteProductId(productId);
    setQuoteModalOpen(true);
  };

  const handleSelectProduct = (product: ProductItem) => {
    setSelectedProductDetail(product);
  };

  const handleSelectBlog = (blog: BlogItem) => {
    // Open blog reader or navigate to blogs view
    if (currentTab !== 'blogs') {
      handleNavigate('blogs');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#0F172A] selection:bg-[#0284C7]/20 selection:text-slate-900">
      {/* Sticky Header with 3-Zone Contract */}
      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenQuote={handleOpenQuote}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenQuote={handleOpenQuote}
            onSelectProduct={handleSelectProduct}
            onSelectBlog={handleSelectBlog}
          />
        )}

        {currentTab === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentTab === 'products' && (
          <ProductsView
            onSelectProduct={handleSelectProduct}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentTab === 'global-presence' && (
          <GlobalPresenceView
            onOpenQuote={handleOpenQuote}
            onNavigate={handleNavigate}
          />
        )}

        {currentTab === 'locations' && (
          <LocationsView
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentTab === 'gallery' && (
          <GalleryView
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentTab === 'blogs' && (
          <BlogsView
            onSelectBlog={handleSelectBlog}
          />
        )}

        {currentTab === 'faq' && (
          <FaqView
            onOpenQuote={handleOpenQuote}
            onNavigate={handleNavigate}
          />
        )}

        {currentTab === 'contact' && (
          <ContactView
            onOpenQuote={handleOpenQuote}
          />
        )}
      </main>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProductDetail}
        onClose={() => setSelectedProductDetail(null)}
        onOpenQuote={(productId) => {
          setSelectedProductDetail(null);
          handleOpenQuote(productId);
        }}
        onSelectProduct={(p) => setSelectedProductDetail(p)}
      />

      {/* Interactive Quotation Request Builder Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preselectedProduct={selectedQuoteProductId}
      />

      {/* Quiet WhatsApp Quick Touch Target (Sticky mobile / desktop helper) */}
      <aside aria-label="Quick Contact Support" className="fixed bottom-5 right-5 z-30">
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, '')}?text=Hello%20Amarnaathh%20Engineering,%20I%20have%20an%20enquiry%20regarding%20machinery.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg transition-transform hover:scale-105 cursor-pointer text-xs font-semibold"
          title="Direct WhatsApp with Application Engineer"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span className="hidden sm:inline">WhatsApp Support</span>
        </a>
      </aside>

      {/* Production-Grade Modern Industrial Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
      />
    </div>
  );
}
