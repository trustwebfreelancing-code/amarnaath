import React from 'react';
import { AmarnaathhLogo } from './AmarnaathhLogo';
import { COMPANY_INFO } from '../data/companyData';
import { Mail, Phone, MapPin, ShieldCheck, Award, Globe, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (tab: string) => {
    onNavigate(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B132B] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Credibility */}
          <div className="lg:col-span-2 space-y-4">
            <AmarnaathhLogo variant="dark" size="lg" />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed pt-2">
              Premier manufacturer of precision industrial machinery for medical textile, hygiene products, and continuous technical production lines. Engineered in India for demanding global industries.
            </p>
            
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                ISO 9001:2015 Certified
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#0284C7]" />
                CE Directive Compliant
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-amber-400" />
                Export to 50+ Nations
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-100">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors cursor-pointer">
                  About Amarnaathh
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-white transition-colors cursor-pointer">
                  Our Machinery
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('global-presence')} className="hover:text-white transition-colors cursor-pointer">
                  Global Presence
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('locations')} className="hover:text-white transition-colors cursor-pointer">
                  Manufacturing Units
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Machinery & Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-100">
              Machinery & Insights
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-white transition-colors cursor-pointer">
                  Medical Textile Machinery
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-white transition-colors cursor-pointer">
                  Hygiene Converting Lines
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-white transition-colors cursor-pointer">
                  Industrial Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('blogs')} className="hover:text-white transition-colors cursor-pointer">
                  Engineering Insights
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faq')} className="hover:text-white transition-colors cursor-pointer">
                  Technical FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Inquiries */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-100">
              Contact & Inquiries
            </h4>
            <div className="space-y-2 text-sm text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                <span>Kathwada GIDC, Ahmedabad, Gujarat 382430, India</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.salesEmail}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.salesEmail}
                </a>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-[#0284C7] hover:bg-[#0369A1] px-3.5 py-2 rounded transition-colors cursor-pointer shadow-xs"
              >
                <span>Request Quotation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} Amarnaathh Engineering. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Precision Engineering Since 1998</span>
            <span>·</span>
            <span>Make in India</span>
            <span>·</span>
            <button onClick={() => handleNav('contact')} className="hover:text-slate-400 cursor-pointer">
              Support Bureau
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
