import React, { useState } from 'react';
import { LOCATIONS, COMPANY_INFO } from '../data/companyData';
import { MapPin, Phone, Mail, Clock, Compass, ExternalLink, ShieldCheck } from 'lucide-react';

interface LocationsViewProps {
  onOpenQuote: () => void;
}

export const LocationsView: React.FC<LocationsViewProps> = ({ onOpenQuote }) => {
  const [selectedLocation, setSelectedLocation] = useState<string>(LOCATIONS[0].id);

  const activeUnit = LOCATIONS.find((l) => l.id === selectedLocation) || LOCATIONS[0];

  return (
    <div className="w-full bg-[#FAFAFA] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
            PLANTS & OFFICES
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Our Manufacturing Units & Offices
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Spanning over 300,000 square feet of heavy engineering bays and climate-controlled CNC machining facilities across India, supported by our regional technical support bureau in the United Arab Emirates.
          </p>
        </div>

        {/* Units Navigation Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {LOCATIONS.map((loc, idx) => {
            const isSelected = loc.id === selectedLocation;
            return (
              <button
                key={loc.id}
                onClick={() => setSelectedLocation(loc.id)}
                className={`p-5 rounded-lg border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#0284C7] shadow-sm ring-1 ring-[#0284C7]'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#0284C7]">
                  <span>UNIT 0{idx + 1}</span>
                  <span className="text-slate-400 font-sans">{loc.city}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mt-2 line-clamp-1">
                  {loc.title.split(':')[1] || loc.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                  {loc.category}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Unit Deep-Dive & Map View */}
        <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs">
          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0284C7]">
                  {activeUnit.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  {activeUnit.title}
                </h2>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  <strong className="text-slate-800">Operational Specialization:</strong> {activeUnit.specialization}
                </p>
              </div>

              {/* Contact Specifications */}
              <div className="space-y-3.5 pt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#0284C7] mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900">Address: </span>
                    <span>{activeUnit.address}, {activeUnit.city}, {activeUnit.state}, {activeUnit.country}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900">Direct Phone: </span>
                    <a href={`tel:${activeUnit.phone}`} className="font-mono text-slate-900 hover:text-[#0284C7]">
                      {activeUnit.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900">Department Email: </span>
                    <a href={`mailto:${activeUnit.email}`} className="text-slate-900 hover:text-[#0284C7]">
                      {activeUnit.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900">Operating Hours: </span>
                    <span>{activeUnit.hours}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900">Facility Footprint: </span>
                    <span>{activeUnit.facilitySize}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${activeUnit.title}, ${activeUnit.city}, ${activeUnit.country}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-[#0284C7] rounded transition-colors cursor-pointer"
                >
                  <Compass className="w-4 h-4" />
                  <span>Get Driving Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>

                <button
                  onClick={onOpenQuote}
                  className="px-5 py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded transition-colors cursor-pointer"
                >
                  Inquire at this Facility
                </button>
              </div>
            </div>

            {/* Right Map Visual */}
            <div className="lg:col-span-6 flex flex-col space-y-4">
              <div className="relative aspect-4/3 rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                {/* Clean stylized map preview */}
                <div className="absolute inset-0 bg-[#E8ECEF] flex items-center justify-center p-6 text-center">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#0284C7] text-white flex items-center justify-center mx-auto shadow-md">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">{activeUnit.title}</div>
                      <div className="text-xs text-slate-600 max-w-sm mx-auto mt-1">
                        {activeUnit.address}, {activeUnit.city}
                      </div>
                      <div className="text-[11px] font-mono text-slate-500 mt-2">
                        GPS: {activeUnit.coordinates.lat.toFixed(3)}° N, {activeUnit.coordinates.lng.toFixed(3)}° E
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-[11px] text-slate-700 px-3 py-1 rounded shadow-xs font-mono">
                  {activeUnit.country}
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                <span>Visitor Protocol: Photo ID & advance factory pass required</span>
                <span className="font-semibold text-slate-800">ISO 9001 Certified Plant</span>
              </div>
            </div>
          </div>
        </div>

        {/* All Units Summary List */}
        <div className="space-y-4 pt-6 border-t border-slate-200">
          <h3 className="text-lg font-bold text-slate-900">
            Complete Directory of Facilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                className="p-5 bg-white rounded border border-slate-200 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-900">{loc.title}</h4>
                  <span className="text-[11px] text-slate-500 font-mono">{loc.city}</span>
                </div>
                <p className="text-xs text-slate-600">{loc.address}</p>
                <div className="flex items-center gap-4 text-xs font-mono text-slate-700 pt-1 border-t border-slate-100">
                  <span>{loc.phone}</span>
                  <span>·</span>
                  <span className="font-sans text-slate-500">{loc.hours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
