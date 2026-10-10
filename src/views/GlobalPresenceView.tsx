import React, { useState } from 'react';
import { GLOBAL_REGIONS, COMPANY_INFO } from '../data/companyData';
import { Globe, ShieldCheck, Plane, Ship, CheckCircle2, ArrowRight } from 'lucide-react';

interface GlobalPresenceViewProps {
  onOpenQuote: () => void;
  onNavigate: (tab: string) => void;
}

export const GlobalPresenceView: React.FC<GlobalPresenceViewProps> = ({
  onOpenQuote,
  onNavigate,
}) => {
  const [selectedHub, setSelectedHub] = useState<string>('all');

  const exportCountries = [
    { name: 'India', status: 'Global HQ & 3 Plants', region: 'Asia' },
    { name: 'United Arab Emirates', status: 'Regional Tech Hub (Dubai)', region: 'Middle East' },
    { name: 'Saudi Arabia', status: '12 Active Production Lines', region: 'Middle East' },
    { name: 'Germany', status: 'CE Certified Deliveries', region: 'Europe' },
    { name: 'Poland', status: 'Medical Nonwoven Units', region: 'Europe' },
    { name: 'United Kingdom', status: 'Hygiene Converting Systems', region: 'Europe' },
    { name: 'United States', status: 'Industrial Slitters & Rewinders', region: 'Americas' },
    { name: 'Mexico', status: 'Textile Finishing Machinery', region: 'Americas' },
    { name: 'Vietnam', status: 'Mask & Nonwoven Plants', region: 'Asia' },
    { name: 'Bangladesh', status: 'Over 85 Spinning & Fabric Units', region: 'Asia' },
    { name: 'Indonesia', status: 'Sanitary Napkin Lines', region: 'Asia' },
    { name: 'Egypt', status: 'Medical Drape Converting Lines', region: 'Africa' },
    { name: 'Kenya', status: 'Nonwoven Fabric Slitting Lines', region: 'Africa' },
    { name: 'South Africa', status: 'Hygiene & Diaper Plants', region: 'Africa' },
  ];

  const filteredCountries = selectedHub === 'all'
    ? exportCountries
    : exportCountries.filter(c => c.region.toLowerCase().includes(selectedHub.toLowerCase()));

  return (
    <div className="w-full bg-[#FAFAFA] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
            INTERNATIONAL OPERATIONS
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Global Presence
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            From our advanced engineering plants in Gujarat and Tamil Nadu, Amarnaathh Engineering exports certified industrial manufacturing machinery to more than 50 countries across five continents.
          </p>
        </div>

        {/* Global Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-md border border-slate-200 shadow-xs">
            <div className="text-3xl sm:text-4xl font-bold text-slate-900 font-mono">50+</div>
            <div className="text-xs text-slate-500 mt-1 font-medium">Export Destinations</div>
          </div>
          <div className="bg-white p-6 rounded-md border border-slate-200 shadow-xs">
            <div className="text-3xl sm:text-4xl font-bold text-slate-900 font-mono">6500+</div>
            <div className="text-xs text-slate-500 mt-1 font-medium">Active Machinery Installations</div>
          </div>
          <div className="bg-white p-6 rounded-md border border-slate-200 shadow-xs">
            <div className="text-3xl sm:text-4xl font-bold text-slate-900 font-mono">48 hrs</div>
            <div className="text-xs text-slate-500 mt-1 font-medium">Overseas Spare Parts Dispatch</div>
          </div>
          <div className="bg-white p-6 rounded-md border border-slate-200 shadow-xs">
            <div className="text-3xl sm:text-4xl font-bold text-slate-900 font-mono">100%</div>
            <div className="text-xs text-slate-500 mt-1 font-medium">CE & International Compliance</div>
          </div>
        </div>

        {/* Large Interactive World Map Visual */}
        <div className="bg-slate-950 text-white rounded-lg p-6 sm:p-10 border border-slate-800 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                Global Export Routes & Technical Hubs
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Visualizing operational shipping lanes originating from West India ports
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Filter Region:</span>
              <div className="flex rounded bg-slate-900 p-1 border border-slate-800 text-xs">
                {['all', 'Asia', 'Europe', 'Middle East', 'Americas'].map((reg) => (
                  <button
                    key={reg}
                    onClick={() => setSelectedHub(reg)}
                    className={`px-2.5 py-1 rounded transition-colors cursor-pointer capitalize ${
                      selectedHub === reg ? 'bg-[#0284C7] text-white font-medium' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {reg}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* SVG Map */}
          <div className="relative aspect-16/8 bg-slate-900/80 rounded-md overflow-hidden border border-slate-800 p-4 sm:p-6 flex items-center justify-center">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full"
              fill="none"
              stroke="#334155"
              strokeWidth="0.8"
            >
              {/* Continents */}
              <path d="M140 100 Q200 80 270 110 T310 210 T230 260 T160 180 Z" fill="#1E293B" stroke="#475569" />
              <path d="M250 280 Q300 310 320 370 T270 460 T230 360 Z" fill="#1E293B" stroke="#475569" />
              <path d="M460 100 Q530 90 550 140 T500 180 T440 130 Z" fill="#1E293B" stroke="#475569" />
              <path d="M460 200 Q540 200 560 270 T530 380 T470 330 T440 240 Z" fill="#1E293B" stroke="#475569" />
              <path d="M560 110 Q680 80 810 130 T850 240 T720 270 T620 230 T570 160 Z" fill="#1E293B" stroke="#475569" />
              <path d="M770 330 Q850 330 870 380 T810 430 T760 370 Z" fill="#1E293B" stroke="#475569" />

              {/* Major Maritime Hubs */}
              {/* Ahmedabad / Mundra Origin */}
              <circle cx="665" cy="215" r="8" stroke="#0284C7" strokeWidth="2" />
              <circle cx="665" cy="215" r="3.5" fill="#38BDF8" />
              
              {/* Dubai JAFZA Hub */}
              <circle cx="585" cy="205" r="6" stroke="#10B981" strokeWidth="1.5" />
              <circle cx="585" cy="205" r="3" fill="#10B981" />

              {/* European destinations: Frankfurt & Lodz */}
              <circle cx="505" cy="130" r="3" fill="#F59E0B" />
              <circle cx="530" cy="120" r="3" fill="#F59E0B" />

              {/* Southeast Asia: Vietnam & Indonesia */}
              <circle cx="760" cy="245" r="3" fill="#F59E0B" />
              <circle cx="780" cy="305" r="3" fill="#F59E0B" />

              {/* Americas: US East Coast & Mexico */}
              <circle cx="270" cy="165" r="3" fill="#F59E0B" />
              <circle cx="220" cy="225" r="3" fill="#F59E0B" />

              {/* Africa: Cairo & Nairobi */}
              <circle cx="535" cy="215" r="3" fill="#F59E0B" />
              <circle cx="570" cy="300" r="3" fill="#F59E0B" />

              {/* Shipping Lanes (Bezier Curves) */}
              <path d="M665 215 Q625 200 585 205" stroke="#0284C7" strokeWidth="1.2" strokeDasharray="3 3" />
              <path d="M585 205 Q540 160 505 130" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 2" />
              <path d="M585 205 Q510 230 450 200 Q360 170 270 165" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 2" />
              <path d="M665 215 Q710 240 760 245" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 2" />
              <path d="M665 215 Q720 280 780 305" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 2" />
              <path d="M585 205 Q575 250 570 300" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 2" />
            </svg>

            {/* Legend Overlay */}
            <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-xs p-3 rounded border border-slate-800 text-[11px] space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0284C7]" />
                <span className="text-slate-300">Global Engineering HQ & Plants (India)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-slate-300">Overseas Technical & Parts Bureau (Dubai, UAE)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="text-slate-300">Active Industrial Client Clusters</span>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Countries & Regions Table */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Key International Client Destinations
            </h2>
            <span className="text-xs text-slate-500 font-medium">
              Showing {filteredCountries.length} destinations
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCountries.map((c, idx) => (
              <div
                key={idx}
                className="p-4 bg-white border border-slate-200 rounded-md shadow-xs flex items-center justify-between"
              >
                <div>
                  <div className="text-sm font-bold text-slate-900">{c.name}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{c.status}</div>
                </div>
                <span className="text-[11px] font-mono text-[#0284C7] bg-[#0284C7]/10 px-2 py-0.5 rounded">
                  {c.region}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Export Logistics & Compliance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-200 pt-12">
          <div className="space-y-3">
            <div className="w-9 h-9 rounded bg-slate-100 flex items-center justify-center text-slate-800">
              <Ship className="w-5 h-5 text-[#0284C7]" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Maritime Heavy Freight
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Standard 20ft & 40ft High-Cube containerized packaging with vapor-barrier hermetic vacuum sealing and desiccant buffering for transoceanic moisture protection.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-9 h-9 rounded bg-slate-100 flex items-center justify-center text-slate-800">
              <Plane className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Critical Air Dispatch
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              High-priority express air shipments of custom-machined replacement parts, ultrasonic modules, and sensors from SVPIA Airport directly to your plant within 48 hours.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-9 h-9 rounded bg-slate-100 flex items-center justify-center text-slate-800">
              <ShieldCheck className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Full Export Documentation
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Comprehensive technical dossiers: CE Declaration of Conformity, Certificate of Origin, mill test metallurgical certificates, and FAT factory test logs with video verification.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-slate-100 rounded-lg p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-200">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Planning Machinery Import to Your Country?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Connect with our international export department for CIF/FOB pricing and port transit timelines.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-[#0284C7] rounded transition-colors cursor-pointer shrink-0"
          >
            Request Export Proposal
          </button>
        </div>
      </div>
    </div>
  );
};
