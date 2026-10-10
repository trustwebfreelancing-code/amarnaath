import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, FileText, ArrowRight, ShieldCheck, Mail, Phone } from 'lucide-react';
import { PRODUCTS_CATALOG, COMPANY_INFO } from '../data/companyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedProduct,
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(
    preselectedProduct || PRODUCTS_CATALOG[0].id
  );
  const [capacity, setCapacity] = useState('Standard Recommended');
  const [powerPhase, setPowerPhase] = useState('415V 50Hz (3-Phase)');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('India');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteReference, setQuoteReference] = useState('');

  useEffect(() => {
    if (preselectedProduct) {
      setSelectedProductId(preselectedProduct);
    }
  }, [preselectedProduct]);

  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentMachine = PRODUCTS_CATALOG.find((p) => p.id === selectedProductId) || PRODUCTS_CATALOG[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !company) return;
    const ref = `AE-QT-${Math.floor(100000 + Math.random() * 900000)}`;
    setQuoteReference(ref);
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-3xl overflow-hidden border border-slate-200 flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-title"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0284C7]">
              Commercial & Technical Enquiry
            </span>
            <h2 id="quote-title" className="text-lg font-bold text-slate-900">
              Request Machinery Quotation
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Quotation Request Dispatched
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{name}</strong>. Your enquiry for the{' '}
                <strong className="text-slate-900">{currentMachine.name} ({currentMachine.model})</strong> has been registered with reference ID:
              </p>
              <div className="inline-block bg-slate-100 border border-slate-300 rounded px-4 py-2 font-mono text-base font-bold text-slate-900">
                {quoteReference}
              </div>
              <p className="text-xs text-slate-500 max-w-lg mx-auto">
                Our mechanical application engineers will review your electrical specifications and destination port ({country}) and email an itemized commercial proposal within 24 hours.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-[#0284C7] rounded transition-colors cursor-pointer"
                >
                  Done
                </button>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, '')}?text=Hello%20Amarnaathh,%20I%20have%20submitted%20quotation%20reference%20${quoteReference}%20for%20${encodeURIComponent(currentMachine.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded transition-colors"
                >
                  Accelerate on WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Machinery Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                  1. Select Target Machinery
                </label>
                <select
                  value={selectedProductId}
                  onChange={(e) => setSelectedProductId(e.target.value)}
                  className="w-full border border-slate-300 rounded-md p-2.5 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                >
                  {PRODUCTS_CATALOG.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} — [{p.model}] ({p.category})
                    </option>
                  ))}
                </select>
                
                {/* Machine spec glance */}
                <div className="mt-3 p-3 bg-slate-50 rounded-md border border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2">
                  <div>
                    <span className="text-slate-400">Standard Speed: </span>
                    <span className="font-semibold text-slate-800">{currentMachine.productionSpeed}</span>
                  </div>
                  <div>
                    <span className="text-slate-400">Power Rating: </span>
                    <span className="font-semibold text-slate-800">{currentMachine.powerRequirement}</span>
                  </div>
                  <div>
                    <span className="text-slate-400">Footprint: </span>
                    <span className="font-semibold text-slate-800">{currentMachine.dimensions}</span>
                  </div>
                </div>
              </div>

              {/* Step 2: Technical Parameters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Required Production Output
                  </label>
                  <select
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                    className="w-full border border-slate-300 rounded-md p-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                  >
                    <option value="Standard Recommended">Standard Factory Baseline</option>
                    <option value="Maximum High Output (+30%)">Maximum High-Speed Multi-Line</option>
                    <option value="Pilot / Semi-Industrial Scale">Pilot / Modular Initial Scale</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Facility Electrical Supply
                  </label>
                  <select
                    value={powerPhase}
                    onChange={(e) => setPowerPhase(e.target.value)}
                    className="w-full border border-slate-300 rounded-md p-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                  >
                    <option value="415V 50Hz (3-Phase, Indian/UK Standard)">415V 50Hz (3-Phase)</option>
                    <option value="380V 50Hz (3-Phase, EU/MENA Standard)">380V 50Hz (3-Phase)</option>
                    <option value="480V 60Hz (3-Phase, US Standard)">480V 60Hz (3-Phase)</option>
                    <option value="220V 60Hz (3-Phase, LatAm/Korea Standard)">220V 60Hz (3-Phase)</option>
                  </select>
                </div>
              </div>

              {/* Step 3: Company & Contact Credentials */}
              <div className="space-y-4 pt-2 border-t border-slate-200">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600">
                  2. Your Company & Delivery Details
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh Chandra"
                      className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. SunTech Medical Textiles"
                      className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. r.chandra@suntech.com"
                      className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Direct Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 98250 XXXXX"
                      className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Destination Country / Delivery Port *
                    </label>
                    <input
                      type="text"
                      required
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="e.g. India (Mundra Port), UAE (Jebel Ali), Germany (Hamburg)"
                      className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Special Production Requirements or Raw Material Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Mention fabric GSM range, desired roll diameters, or existing line integration..."
                      className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Confidential commercial enquiry directly to sales engineering</span>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-[#0284C7] rounded-md transition-colors cursor-pointer shadow-xs whitespace-nowrap"
                >
                  <span>Submit Quotation Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
