import React, { useState } from 'react';
import { COMPANY_INFO, LOCATIONS, PRODUCTS_CATALOG } from '../data/companyData';
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Instagram,
  CheckCircle2,
  Send,
  Clock,
  ShieldCheck,
  Bot,
  ExternalLink,
} from 'lucide-react';

interface ContactViewProps {
  onOpenQuote: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onOpenQuote }) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('India');
  const [machine, setMachine] = useState(PRODUCTS_CATALOG[0].name);
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  // Chatbot quick helper modal state
  const [chatBotOpen, setChatBotOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string }>>([
    {
      sender: 'bot',
      text: 'Welcome to Amarnaathh Engineering Technical Support. How can we assist with your machinery requirement today?',
    },
  ]);
  const [chatInput, setChatInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !company) return;
    const generatedTicket = `AMN-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedTicket);
    setIsSubmitted(true);
  };

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const userMsg = chatInput;
    setChatMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setChatInput('');

    setTimeout(() => {
      let reply = 'Thank you for reaching out. An application engineer will review your inquiry. Would you like to request a formal quotation or schedule a plant visit?';
      const lower = userMsg.toLowerCase();
      if (lower.includes('mask') || lower.includes('medical')) {
        reply = 'Our AE-MSK-500 Pro mask line operates at up to 550 pcs/min with ultrasonic welding and CE cleanroom compliance. We have stock ready for dispatch.';
      } else if (lower.includes('hygiene') || lower.includes('napkin') || lower.includes('diaper')) {
        reply = 'Our hygiene lines (AE-HY-SN800 and AE-HY-BD1000) feature full electronic servo drives and zero-slack SAP micro-dosing. Would you like the technical datasheet?';
      } else if (lower.includes('export') || lower.includes('country') || lower.includes('shipping')) {
        reply = 'We export to over 50 countries with complete CE certification, export crating, and on-site commissioning engineer dispatch.';
      } else if (lower.includes('price') || lower.includes('cost') || lower.includes('quote')) {
        reply = 'You can submit the quote form on this page or connect via WhatsApp for an immediate commercial quotation within 24 hours.';
      }
      setChatMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
    }, 600);
  };

  return (
    <div className="w-full bg-[#FAFAFA] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
            GET IN TOUCH
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Let's discuss your requirement.
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Our engineering sales team is ready to evaluate your production parameters, provide technical layouts, and generate tailored commercial proposals.
          </p>
        </div>

        {/* 2-Column Main Contact Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Company Contact Information & Prominent Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-xs space-y-6">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                Corporate Headquarters
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0284C7] mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-900">Factory & Registered Office</div>
                    <div className="text-slate-600 mt-0.5 leading-relaxed">
                      Plot No. 42-45, Phase III, Kathwada GIDC Industrial Area, Ahmedabad, Gujarat 382430, India
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#0284C7] mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-900">Direct Telephone</div>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-slate-600 hover:text-[#0284C7] font-mono mt-0.5 block">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#0284C7] mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-900">Sales & Export Inquiries</div>
                    <a href={`mailto:${COMPANY_INFO.salesEmail}`} className="text-slate-600 hover:text-[#0284C7] mt-0.5 block">
                      {COMPANY_INFO.salesEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#0284C7] mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-900">Operating Hours</div>
                    <div className="text-slate-600 mt-0.5">{COMPANY_INFO.workingHours}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Prominent Direct Communication Channels */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Direct Channels
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, '')}?text=Hello%20Amarnaathh%20Engineering,%20I%20would%20like%20to%20discuss%20machinery.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-md transition-colors flex items-center gap-3 text-emerald-900 group"
                >
                  <MessageSquare className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div className="overflow-hidden">
                    <div className="text-xs font-bold">WhatsApp</div>
                    <div className="text-[11px] text-emerald-700 truncate">{COMPANY_INFO.whatsapp}</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="p-3.5 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-md transition-colors flex items-center gap-3 text-sky-900 group"
                >
                  <Mail className="w-5 h-5 text-[#0284C7] shrink-0" />
                  <div className="overflow-hidden">
                    <div className="text-xs font-bold">Official Email</div>
                    <div className="text-[11px] text-sky-700 truncate">{COMPANY_INFO.email}</div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="p-3.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-md transition-colors flex items-center gap-3 text-slate-900 group"
                >
                  <Phone className="w-5 h-5 text-slate-700 shrink-0" />
                  <div className="overflow-hidden">
                    <div className="text-xs font-bold">Phone Desk</div>
                    <div className="text-[11px] text-slate-600 truncate">{COMPANY_INFO.phone}</div>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-pink-50 hover:bg-pink-100 border border-pink-200 rounded-md transition-colors flex items-center gap-3 text-pink-900 group"
                >
                  <Instagram className="w-5 h-5 text-pink-600 shrink-0" />
                  <div className="overflow-hidden">
                    <div className="text-xs font-bold">Instagram</div>
                    <div className="text-[11px] text-pink-700 truncate">@amarnaathh_machinery</div>
                  </div>
                </a>
              </div>

              {/* Chatbot trigger */}
              <button
                onClick={() => setChatBotOpen(true)}
                className="w-full p-3 bg-slate-900 hover:bg-[#0284C7] text-white rounded-md transition-colors flex items-center justify-between text-xs font-semibold cursor-pointer shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-emerald-400" />
                  <span>Launch Amarnaathh Engineering Assistant</span>
                </div>
                <span>Start Chat →</span>
              </button>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-lg border border-slate-200 shadow-xs">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Enquiry Successfully Sent
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{name}</strong>. Your requirement has been forwarded to our lead manufacturing engineer.
                </p>
                <div className="inline-block bg-slate-100 border border-slate-200 rounded px-4 py-2 font-mono text-sm font-bold text-slate-800">
                  Enquiry Reference: {ticketId}
                </div>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  We will contact you via email ({email}) or telephone within one business day.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setMessage('');
                    }}
                    className="px-6 py-2.5 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Production Line & Machine Enquiry
                </h2>

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
                      placeholder="e.g. Vikramaditya Sharma"
                      className="w-full border border-slate-300 rounded-md px-3 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
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
                      placeholder="e.g. Apex Technical Fabrics Ltd."
                      className="w-full border border-slate-300 rounded-md px-3 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
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
                      placeholder="e.g. v.sharma@apextextiles.com"
                      className="w-full border border-slate-300 rounded-md px-3 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 98250 XXXXX"
                      className="w-full border border-slate-300 rounded-md px-3 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Destination Country *
                    </label>
                    <input
                      type="text"
                      required
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="e.g. India, United Arab Emirates, Germany"
                      className="w-full border border-slate-300 rounded-md px-3 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Target Product / Machine *
                    </label>
                    <select
                      value={machine}
                      onChange={(e) => setMachine(e.target.value)}
                      className="w-full border border-slate-300 rounded-md px-3 py-2 text-xs sm:text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                    >
                      {PRODUCTS_CATALOG.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.model})
                        </option>
                      ))}
                      <option value="Custom Built Machinery Line">Custom Turnkey Production Line</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Message & Production Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please specify target output capacity, raw material specifications (GSM, width), factory timeline, or any custom tooling requirement..."
                      className="w-full border border-slate-300 rounded-md p-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                    />
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Your technical data is safeguarded by strict NDA</span>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-900 hover:bg-[#0284C7] text-white text-xs sm:text-sm font-semibold rounded-md transition-colors cursor-pointer shadow-xs whitespace-nowrap"
                  >
                    <span>Send Enquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Company Locations & Map Section */}
        <div className="border-t border-slate-200 pt-16 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
              PLANT SITES & HUBS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Manufacturing Units & Regional Support Offices
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                className="bg-white p-5 rounded-lg border border-slate-200 space-y-3 shadow-xs"
              >
                <div className="text-[11px] font-semibold text-[#0284C7] uppercase">
                  {loc.category}
                </div>
                <h3 className="text-sm font-bold text-slate-900">
                  {loc.title.split(':')[1] || loc.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {loc.address}, {loc.city}, {loc.country}
                </p>
                <div className="pt-2 border-t border-slate-100 flex flex-col gap-1 text-[11px] font-mono text-slate-700">
                  <span>Tel: {loc.phone}</span>
                  <span className="font-sans text-slate-500 truncate">{loc.email}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Chatbot Modal */}
        {chatBotOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-md border border-slate-200 overflow-hidden flex flex-col h-[520px]">
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#0284C7] flex items-center justify-center text-white">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold">Amarnaathh Technical Assistant</h3>
                    <span className="text-[10px] text-emerald-400 font-mono">Live Engineering Dispatch</span>
                  </div>
                </div>
                <button
                  onClick={() => setChatBotOpen(false)}
                  className="text-slate-400 hover:text-white p-1 rounded"
                >
                  ✕
                </button>
              </div>

              {/* Chat Log */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 text-xs">
                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-lg p-3 ${
                        msg.sender === 'user'
                          ? 'bg-slate-900 text-white'
                          : 'bg-white border border-slate-200 text-slate-800 shadow-xs'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendChat} className="p-3 border-t border-slate-200 bg-white flex gap-2">
                <input
                  type="text"
                  placeholder="Ask about mask lines, diaper machines, or export..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  className="flex-1 border border-slate-300 rounded px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#0284C7]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-semibold rounded cursor-pointer"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
