import React from 'react';
import { COMPANY_INFO, CAPABILITIES, LOCATIONS } from '../data/companyData';
import { ShieldCheck, Award, Wrench, Settings2, Globe, Cpu, ArrowRight } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (tab: string) => void;
  onOpenQuote: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onOpenQuote }) => {
  const milestones = [
    {
      year: '1998',
      title: 'Founding & Precision Tooling',
      desc: 'Established in Ahmedabad, Gujarat, specializing in high-tolerance mechanical tooling and textile gear assemblies.',
    },
    {
      year: '2006',
      title: 'First Turnkey Ring Frame Line',
      desc: 'Engineered our flagship high-draft textile ring frame, delivering unmatched vibrational damping and yarn count consistency.',
    },
    {
      year: '2014',
      title: 'Expansion into Hygiene Converting',
      desc: 'Commissioned our dedicated Coimbatore plant for sanitary napkin and baby diaper continuous converting machinery.',
    },
    {
      year: '2020',
      title: 'Medical Textile Breakthrough',
      desc: 'Manufactured and dispatched over 350 high-speed surgical mask and sterile nonwoven laminating lines during global supply emergencies.',
    },
    {
      year: '2026',
      title: 'Global Automation & Turnkey Excellence',
      desc: 'Now operating across 50+ countries with CE certified full-servo systems and regional technical support in Dubai, UAE.',
    },
  ];

  return (
    <div className="w-full bg-[#FAFAFA] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header & Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
              ABOUT AMARNAATHH ENGINEERING
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Precision engineering with decades of experience.
            </h1>
            <p className="text-base text-slate-600 leading-relaxed">
              At Amarnaathh Engineering, we design and manufacture heavy-duty converting machinery that powers continuous manufacturing lines across the world. Built with German-grade engineering tolerances and backed by 25+ years of Indian manufacturing pride.
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-medium text-slate-700">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>ISO 9001:2015 Certified Plants</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#0284C7]" />
                <span>CE European Machinery Directive</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-4/3 rounded-lg overflow-hidden border border-slate-200 shadow-xs bg-slate-100">
              <img
                src={COMPANY_INFO.facilityImage}
                alt="Amarnaathh Engineering Precision Facility"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 4 Pillars of Precision Engineering */}
        <div className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
              ENGINEERING PHILOSOPHY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Built for Relentless 24/7 Production Duty
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.id}
                className="bg-white p-6 rounded-md border border-slate-200 shadow-xs space-y-3"
              >
                <div className="text-xs font-mono font-semibold text-[#0284C7]">
                  {cap.stat}
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {cap.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {cap.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 25-Year Innovation Journey */}
        <div className="bg-white p-8 sm:p-12 rounded-lg border border-slate-200 shadow-xs space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
              OUR JOURNEY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              A Quarter Century of Engineering Excellence
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              From our first mechanical gear cutter to high-velocity computerized multi-axis servo lines.
            </p>
          </div>

          <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-6 space-y-8 pl-6 sm:pl-8">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative group">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-white border-4 border-[#0284C7] group-hover:scale-125 transition-transform" />
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                  <span className="text-base font-mono font-bold text-[#0284C7]">
                    {m.year}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    {m.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed max-w-2xl">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Manufacturing Plants Infrastructure */}
        <div className="space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
              MANUFACTURING INFRASTRUCTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              300,000+ Square Feet Across 4 Specialized Centers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                className="bg-white p-6 rounded-md border border-slate-200 shadow-xs space-y-3"
              >
                <div className="text-[11px] font-mono text-[#0284C7] uppercase">
                  {loc.category}
                </div>
                <h3 className="text-base font-bold text-slate-900">{loc.title}</h3>
                <p className="text-xs text-slate-600">
                  <strong className="text-slate-800">Specialization:</strong> {loc.specialization}
                </p>
                <div className="pt-2 text-xs text-slate-500 border-t border-slate-100 flex items-center justify-between">
                  <span>{loc.facilitySize}</span>
                  <span className="font-mono">{loc.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bar */}
        <div className="bg-[#0B132B] text-white p-8 sm:p-12 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-left">
            <h3 className="text-2xl font-bold">Experience Precision Manufacturing Firsthand</h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Schedule a technical consultation or tour our trial bays to see live machinery acceptance tests.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('products')}
              className="px-5 py-2.5 bg-white text-slate-900 text-xs font-semibold rounded hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Explore Machinery
            </button>
            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 bg-[#0284C7] text-white text-xs font-semibold rounded hover:bg-[#0369A1] transition-colors cursor-pointer"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
