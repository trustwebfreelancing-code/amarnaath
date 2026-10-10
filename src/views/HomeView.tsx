import React, { useState } from 'react';
import {
  COMPANY_INFO,
  FEATURED_CATEGORIES,
  PRODUCTS_CATALOG,
  CAPABILITIES,
  GLOBAL_REGIONS,
  LOCATIONS,
  CLIENT_LOGOS,
  TESTIMONIALS,
  GALLERY_ITEMS,
  BLOG_POSTS,
  FAQS,
  ProductItem,
  BlogItem,
} from '../data/companyData';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Globe,
  Settings2,
  Wrench,
  Headphones,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (tab: string) => void;
  onOpenQuote: (productId?: string) => void;
  onSelectProduct: (product: ProductItem) => void;
  onSelectBlog: (blog: BlogItem) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenQuote,
  onSelectProduct,
  onSelectBlog,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeLocationIndex, setActiveLocationIndex] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const activeLoc = LOCATIONS[activeLocationIndex];

  return (
    <div className="w-full bg-[#FAFAFA]">
      {/* ============================================================ */}
      {/* 1. HERO SECTION                                              */}
      {/* ============================================================ */}
      <section className="relative w-full bg-slate-950 text-white overflow-hidden">
        {/* Large Industrial Machinery Photography */}
        <div className="absolute inset-0 z-0">
          <img
            src={COMPANY_INFO.heroImage}
            alt="Amarnaathh Engineering Precision Industrial Machinery"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center brightness-[0.42] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance leading-[1.12]">
              Engineering Machinery.{' '}
              <span className="text-white/90">Built for Performance.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Precision-engineered machinery for modern manufacturing industries, built with reliability, efficiency and long-term performance in mind.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('products')}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-md transition-colors cursor-pointer shadow-xs whitespace-nowrap active:scale-[0.98]"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <button
                onClick={() => onOpenQuote()}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] rounded-md transition-colors cursor-pointer shadow-xs whitespace-nowrap active:scale-[0.98]"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5 opacity-80" />
              </button>
            </div>

            {/* Credibility Line (No pills, clean unboxed text) */}
            <div className="pt-6 border-t border-slate-700/60 text-xs sm:text-sm font-medium text-slate-400 flex flex-wrap items-center gap-2">
              <span className="text-slate-200">25+ Years Experience</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-200">6500+ Clients</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-200">Global Reach</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. COMPANY INTRODUCTION                                      */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
                ABOUT AMARNATHH
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance leading-tight">
                Precision engineering with decades of experience.
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                Founded in 1998, Amarnaathh Engineering has evolved from a specialized tooling workshop into a global manufacturer of heavy industrial machinery. We develop turnkey converting and manufacturing systems for medical textiles, hygiene disposables, and textile spinning mills.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                Every unit is engineered in-house across our precision machining facilities in Gujarat and Tamil Nadu, ensuring micrometer mechanical tolerances and long-term durability in high-demand production lines.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-[#0284C7] transition-colors group cursor-pointer"
                >
                  <span>Discover Our Story</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Column: Large Industrial/Factory Photograph */}
            <div className="lg:col-span-6">
              <div className="relative aspect-16/10 rounded-md overflow-hidden bg-slate-100 border border-slate-200 shadow-xs">
                <img
                  src={COMPANY_INFO.facilityImage}
                  alt="Amarnaathh Engineering Precision Manufacturing Facility"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. COMPANY STATS                                             */}
      {/* ============================================================ */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            <div className="pt-4 sm:pt-0 sm:px-6 first:pl-0 text-left">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-mono">
                {COMPANY_INFO.experienceYears}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                Years of Experience
              </div>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-6 text-left">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-mono">
                {COMPANY_INFO.clientsCount}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                Clients
              </div>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-6 text-left">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-mono">
                {COMPANY_INFO.countriesCount}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                Countries Served
              </div>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-6 last:pr-0 text-left">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-mono">
                {COMPANY_INFO.machineryCount}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                Machinery Solutions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. PRODUCTS (OUR MACHINERY)                                  */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
                OUR MACHINERY
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Solutions built for modern manufacturing.
              </h2>
            </div>

            <button
              onClick={() => onNavigate('products')}
              className="mt-4 md:mt-0 inline-flex items-center text-sm font-semibold text-slate-900 hover:text-[#0284C7] transition-colors group cursor-pointer"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* 4 Featured Category / Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_CATEGORIES.map((cat) => {
              // Get first matching product from catalog
              const sampleProduct = PRODUCTS_CATALOG.find(
                (p) => p.category.toLowerCase().includes(cat.id.split('-')[0])
              ) || PRODUCTS_CATALOG[0];

              return (
                <div
                  key={cat.id}
                  className="group flex flex-col bg-slate-50 border border-slate-200 rounded-md overflow-hidden hover:border-slate-300 transition-all duration-150"
                >
                  <div className="relative aspect-4/3 overflow-hidden bg-slate-200">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-1.5">
                      <h3 className="text-base font-bold text-slate-900 tracking-tight">
                        {cat.name}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {cat.description}
                      </p>
                    </div>

                    <button
                      onClick={() => onSelectProduct(sampleProduct)}
                      className="inline-flex items-center text-xs font-semibold text-slate-900 hover:text-[#0284C7] transition-colors cursor-pointer pt-2 border-t border-slate-200/80 group-hover:text-[#0284C7]"
                    >
                      <span>View Product</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. WHY AMARNAATHH (Dark Charcoal Section)                     */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-[#0B132B] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0284C7]">
              WHY AMARNAATHH
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Built around precision.
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              We design and construct production machinery that stands up to the heaviest 24/7 manufacturing schedules across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Capability 1 */}
            <div className="space-y-3 p-6 bg-slate-900/60 rounded-md border border-slate-800">
              <div className="w-10 h-10 rounded bg-slate-800/80 flex items-center justify-center text-[#0284C7]">
                <Settings2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">
                Engineering Expertise
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Precision-designed machinery for demanding production environments. In-house mechanical, structural, and control engineering teams.
              </p>
            </div>

            {/* Capability 2 */}
            <div className="space-y-3 p-6 bg-slate-900/60 rounded-md border border-slate-800">
              <div className="w-10 h-10 rounded bg-slate-800/80 flex items-center justify-center text-emerald-400">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">
                Reliable Manufacturing
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Built with quality-focused manufacturing processes. Monolithic chassis, forged alloy shafts, and laser-balanced spindle assemblies.
              </p>
            </div>

            {/* Capability 3 */}
            <div className="space-y-3 p-6 bg-slate-900/60 rounded-md border border-slate-800">
              <div className="w-10 h-10 rounded bg-slate-800/80 flex items-center justify-center text-amber-400">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">
                Global Reach
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Supporting customers across multiple international markets. Turnkey installations operating reliably in over 50 export countries.
              </p>
            </div>

            {/* Capability 4 */}
            <div className="space-y-3 p-6 bg-slate-900/60 rounded-md border border-slate-800">
              <div className="w-10 h-10 rounded bg-slate-800/80 flex items-center justify-center text-cyan-400">
                <Headphones className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">
                Technical Support
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ongoing assistance from enquiry to installation and support. Commissioning engineers and guaranteed dispatch of replacement parts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. GLOBAL PRESENCE                                           */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
                INTERNATIONAL NETWORK
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance leading-tight">
                From India to manufacturers worldwide.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Amarnaathh machinery powers high-volume production plants across Asia, the Middle East, Europe, Africa, and the Americas. Built to stringent CE standards and international electrical codes.
              </p>

              {/* Regional breakdown lines */}
              <div className="space-y-3 pt-2 text-xs">
                {GLOBAL_REGIONS.map((item, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded">
                    <div className="flex items-center justify-between font-semibold text-slate-900">
                      <span>{item.region}</span>
                      <span className="font-mono text-[#0284C7]">{item.percentage}</span>
                    </div>
                    <p className="text-slate-500 mt-1 text-[11px]">{item.hub}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('global-presence')}
                  className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-[#0284C7] transition-colors group cursor-pointer"
                >
                  <span>Explore Our Global Presence</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Clean World Map Visual */}
            <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-8 rounded-lg border border-slate-800 text-white space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3">
                <span className="font-medium">International Machinery Deployment</span>
                <span className="text-emerald-400">50+ Export Destinations</span>
              </div>

              {/* Minimal SVG World Grid */}
              <div className="relative aspect-16/9 bg-slate-900/60 rounded flex items-center justify-center p-4 overflow-hidden border border-slate-800/80">
                <svg
                  viewBox="0 0 1000 500"
                  className="w-full h-full opacity-70"
                  fill="none"
                  stroke="#334155"
                  strokeWidth="0.8"
                >
                  {/* Stylized continent contours */}
                  {/* North America */}
                  <path d="M150 110 Q210 90 280 120 T320 220 T240 270 T170 190 Z" fill="#1E293B" stroke="#475569" />
                  {/* South America */}
                  <path d="M260 290 Q310 320 330 380 T280 470 T240 370 Z" fill="#1E293B" stroke="#475569" />
                  {/* Europe */}
                  <path d="M470 110 Q540 100 560 150 T510 190 T450 140 Z" fill="#1E293B" stroke="#475569" />
                  {/* Africa */}
                  <path d="M470 210 Q550 210 570 280 T540 390 T480 340 T450 250 Z" fill="#1E293B" stroke="#475569" />
                  {/* Asia / India */}
                  <path d="M570 120 Q690 90 820 140 T860 250 T730 280 T630 240 T580 170 Z" fill="#1E293B" stroke="#475569" />
                  {/* Australia */}
                  <path d="M780 340 Q860 340 880 390 T820 440 T770 380 Z" fill="#1E293B" stroke="#475569" />

                  {/* Concentric rings on India (Origin) */}
                  <circle cx="670" cy="220" r="10" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx="670" cy="220" r="4" fill="#0284C7" />
                  {/* Hub marker: Dubai */}
                  <circle cx="585" cy="205" r="3.5" fill="#10B981" />
                  {/* Hub marker: Frankfurt */}
                  <circle cx="505" cy="135" r="3" fill="#38BDF8" />
                  {/* Hub marker: Singapore/SEA */}
                  <circle cx="750" cy="285" r="3" fill="#38BDF8" />
                  {/* Hub marker: Houston */}
                  <circle cx="230" cy="180" r="3" fill="#38BDF8" />

                  {/* Shipping route arcs from India */}
                  <path d="M670 220 Q620 200 585 205" stroke="#0284C7" strokeWidth="1.2" strokeDasharray="2 2" />
                  <path d="M585 205 Q540 160 505 135" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 2" />
                  <path d="M670 220 Q710 260 750 285" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 2" />
                  <path d="M585 205 Q520 250 510 320" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 2" />
                </svg>

                <div className="absolute bottom-3 left-4 text-[11px] text-slate-400 bg-slate-900/90 px-2.5 py-1 rounded border border-slate-800">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#0284C7] mr-1.5" />
                  HQ & Manufacturing Plant (Ahmedabad, India)
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                <span>Direct Maritime Freight from Mundra & Hazira Ports</span>
                <span>Air Freight via SVPIA Ahmedabad</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. LOCATIONS (Manufacturing Units)                           */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
                MANUFACTURING UNITS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Engineered across dedicated facilities.
              </h2>
            </div>

            <button
              onClick={() => onNavigate('locations')}
              className="mt-4 md:mt-0 inline-flex items-center text-sm font-semibold text-slate-900 hover:text-[#0284C7] transition-colors group cursor-pointer"
            >
              <span>View All Locations</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Simple layout: Tab selector + Large active facility visual and details */}
          <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs">
            {/* Unit Selectors */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-b border-slate-200 divide-x divide-slate-200">
              {LOCATIONS.map((loc, idx) => (
                <button
                  key={loc.id}
                  onClick={() => setActiveLocationIndex(idx)}
                  className={`p-4 text-left transition-colors cursor-pointer ${
                    activeLocationIndex === idx
                      ? 'bg-slate-50 border-b-2 border-b-[#0284C7] font-semibold text-slate-900'
                      : 'hover:bg-slate-50 text-slate-600'
                  }`}
                >
                  <div className="text-[11px] uppercase tracking-wider text-[#0284C7]">
                    Unit 0{idx + 1}
                  </div>
                  <div className="text-xs sm:text-sm font-bold truncate mt-0.5 text-slate-900">
                    {loc.city}
                  </div>
                  <div className="text-[11px] text-slate-500 truncate hidden sm:block">
                    {loc.category}
                  </div>
                </button>
              ))}
            </div>

            {/* Active Location Detail */}
            <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-semibold text-[#0284C7] uppercase tracking-wider">
                  {activeLoc.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {activeLoc.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <strong className="text-slate-800">Specialization:</strong> {activeLoc.specialization}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                    <span>{activeLoc.address}, {activeLoc.city}, {activeLoc.state}, {activeLoc.country}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="font-mono">{activeLoc.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{activeLoc.email}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-[#0284C7] px-4 py-2.5 rounded transition-colors cursor-pointer"
                  >
                    <span>Schedule Facility Visit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Large Location Image */}
              <div className="lg:col-span-5">
                <div className="relative aspect-4/3 rounded overflow-hidden bg-slate-100 border border-slate-200">
                  <img
                    src={COMPANY_INFO.facilityImage}
                    alt={activeLoc.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded">
                    {activeLoc.facilitySize}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. CLIENTS                                                   */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0284C7]">
              TRUSTED PARTNERS
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Trusted by manufacturers worldwide.
            </h2>
          </div>

          {/* Clean Monochrome Logo Wall */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 border-y border-slate-200 py-8">
            {CLIENT_LOGOS.map((client, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-3 text-center grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-150"
              >
                <span className="text-sm font-bold text-slate-800 tracking-tight">
                  {client.name}
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5">
                  {client.tag}
                </span>
              </div>
            ))}
          </div>

          {/* 3 Short Verified Testimonials */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-6 bg-slate-50 border border-slate-200 rounded-md flex flex-col justify-between space-y-4"
              >
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  “{t.quote}”
                </p>
                <div className="border-t border-slate-200 pt-3">
                  <div className="text-xs font-bold text-slate-900">{t.author}</div>
                  <div className="text-[11px] text-slate-500">
                    {t.role}, <span className="font-semibold text-slate-700">{t.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. GALLERY (Editorial Style)                                 */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
                PRODUCTION & FLOOR
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Factory & machinery in operation.
              </h2>
            </div>

            <button
              onClick={() => onNavigate('gallery')}
              className="mt-4 md:mt-0 inline-flex items-center text-sm font-semibold text-slate-900 hover:text-[#0284C7] transition-colors group cursor-pointer"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Editorial-style: 1 large image + 2 smaller supporting images */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* 1 Large Image */}
            <div className="lg:col-span-7 group relative aspect-16/10 rounded-md overflow-hidden bg-slate-200 border border-slate-200 shadow-xs">
              <img
                src={GALLERY_ITEMS[0].image}
                alt={GALLERY_ITEMS[0].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300">
                  {GALLERY_ITEMS[0].category}
                </span>
                <h3 className="text-lg font-bold mt-1">{GALLERY_ITEMS[0].title}</h3>
                <p className="text-xs text-slate-300 mt-1 max-w-lg">
                  {GALLERY_ITEMS[0].description}
                </p>
              </div>
            </div>

            {/* 2 Smaller Supporting Images */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-6">
              {GALLERY_ITEMS.slice(1, 3).map((item) => (
                <div
                  key={item.id}
                  className="group relative aspect-16/9 rounded-md overflow-hidden bg-slate-200 border border-slate-200 shadow-xs"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-bold mt-0.5">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. BLOGS (Insights from Amarnaathh)                          */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
                ENGINEERING INTELLIGENCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Insights from Amarnaathh
              </h2>
            </div>

            <button
              onClick={() => onNavigate('blogs')}
              className="mt-4 md:mt-0 inline-flex items-center text-sm font-semibold text-slate-900 hover:text-[#0284C7] transition-colors group cursor-pointer"
            >
              <span>View All Blogs</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* 3 Latest Articles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                onClick={() => onSelectBlog(post)}
                className="group flex flex-col bg-slate-50 border border-slate-200 rounded-md overflow-hidden hover:border-slate-300 transition-colors cursor-pointer"
              >
                <div className="relative aspect-16/10 bg-slate-200 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                      <span className="text-[#0284C7] font-semibold">{post.category}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0284C7] transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {post.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                    <span className="text-slate-500">{post.date}</span>
                    <span className="font-semibold text-slate-900 group-hover:text-[#0284C7] inline-flex items-center gap-1">
                      Read Article →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 11. FAQ SECTION                                              */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Everything you need to know about our machinery, commissioning, and global delivery.
            </p>
          </div>

          {/* Accordion list */}
          <div className="space-y-3">
            {FAQS.slice(0, 5).map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.id}
                  className="bg-white border border-slate-200 rounded-md overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-semibold text-slate-900 hover:text-[#0284C7] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 text-slate-500 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#0284C7]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('faq')}
              className="inline-flex items-center text-xs sm:text-sm font-semibold text-slate-900 hover:text-[#0284C7] transition-colors cursor-pointer"
            >
              <span>View All FAQs</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 12. FINAL CTA (Dark Section with Machinery Image)             */}
      {/* ============================================================ */}
      <section className="relative py-24 lg:py-32 bg-[#0B132B] text-white overflow-hidden">
        {/* Subtle background machinery texture */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={COMPANY_INFO.heroImage}
            alt="Amarnaathh Machinery Background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
            START YOUR PRODUCTION LINE
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance leading-tight">
            Looking for the right machinery for your business?
          </h2>

          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Talk to our team about your production requirements.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenQuote()}
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] rounded-md transition-colors cursor-pointer shadow-xs whitespace-nowrap active:scale-[0.98]"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md transition-colors cursor-pointer shadow-xs whitespace-nowrap active:scale-[0.98]"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
