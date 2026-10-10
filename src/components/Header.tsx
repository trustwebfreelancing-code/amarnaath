import React, { useState, useEffect } from 'react';
import { AmarnaathhLogo } from './AmarnaathhLogo';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  onOpenQuote: (preselectedProduct?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  onOpenQuote,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'products', label: 'Products' },
    { id: 'global-presence', label: 'Global Presence' },
    { id: 'locations', label: 'Locations' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Amarnaathh Engineering Logo / Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] rounded cursor-pointer"
            aria-label="Amarnaathh Engineering Home"
          >
            <AmarnaathhLogo size="md" />
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-medium transition-colors cursor-pointer py-1 relative ${
                    isActive
                      ? 'text-slate-900 font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0284C7] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Compact navigation for mid-screens (lg) */}
          <nav className="hidden md:flex xl:hidden items-center gap-5">
            {navItems.slice(0, 5).map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs font-medium cursor-pointer ${
                  currentTab === item.id ? 'text-slate-900 font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="relative group">
              <span className="text-xs font-medium text-slate-500 hover:text-slate-900 cursor-pointer">
                More...
              </span>
              <div className="absolute right-0 top-full pt-2 hidden group-hover:block w-36">
                <div className="bg-white border border-slate-200 rounded-md shadow-lg py-1">
                  {navItems.slice(5).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className="block w-full text-left px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 cursor-pointer"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, '')}?text=Hello%20Amarnaathh%20Engineering,%20I%20would%20like%20to%20enquire%20about%20machinery.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-emerald-700 transition-colors py-2 px-3 rounded-md hover:bg-slate-50"
              title="Quick WhatsApp Support"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenQuote()}
              className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-[#0284C7] rounded-md transition-all duration-150 shadow-xs cursor-pointer whitespace-nowrap active:scale-[0.98]"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-4 h-4 ml-1 opacity-70" />
            </button>

            {/* Mobile Hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-md cursor-pointer focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="grid grid-cols-2 gap-1 py-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                  currentTab === item.id
                    ? 'bg-slate-100 text-slate-900 font-semibold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full flex items-center justify-center py-2.5 px-4 text-sm font-semibold text-white bg-slate-900 hover:bg-[#0284C7] rounded-md transition-colors cursor-pointer"
            >
              Request Machinery Quote
            </button>
            <div className="flex items-center justify-between text-xs text-slate-500 pt-1 px-1">
              <span>{COMPANY_INFO.phone}</span>
              <span className="text-emerald-700 font-medium">Fast Technical Response</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
