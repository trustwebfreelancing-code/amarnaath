import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/companyData';
import { X, ZoomIn, Eye, ArrowRight } from 'lucide-react';

interface GalleryViewProps {
  onOpenQuote: () => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ onOpenQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxImage, setLightboxImage] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const categories = ['All', 'Factory', 'Machinery', 'Products', 'Installation', 'Events', 'Clients'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory || (selectedCategory === 'Clients' && item.category === 'Installation') || (selectedCategory === 'Events' && item.category === 'Factory'));

  return (
    <div className="w-full bg-[#FAFAFA] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
            VISUAL ARCHIVE
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Industrial Gallery
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            High-precision machining bays, robotic assembly stages, on-site commissioning, and verified factory acceptance trials of Amarnaathh machinery across global production plants.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxImage(item)}
              className={`group relative rounded-md overflow-hidden bg-slate-900 border border-slate-200 shadow-xs cursor-pointer ${
                idx === 0 ? 'md:col-span-2 md:aspect-21/9 aspect-16/10' : 'aspect-16/10'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03] group-hover:opacity-95"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 text-white transition-opacity duration-200">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300">
                    {item.category}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold mt-1 text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2 max-w-xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs animate-in fade-in"
            onClick={() => setLightboxImage(null)}
          >
            <div
              className="bg-slate-950 text-white rounded-lg overflow-hidden max-w-5xl w-full border border-slate-800 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-900">
                <div>
                  <span className="text-[10px] font-mono text-[#0284C7] uppercase">
                    {lightboxImage.category}
                  </span>
                  <h3 className="text-base font-bold text-white mt-0.5">
                    {lightboxImage.title}
                  </h3>
                </div>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-16/10 bg-black flex items-center justify-center">
                <img
                  src={lightboxImage.image}
                  alt={lightboxImage.title}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              <div className="p-4 bg-slate-900 border-t border-slate-800 text-xs text-slate-300">
                {lightboxImage.description}
              </div>
            </div>
          </div>
        )}

        {/* Plant Visit Banner */}
        <div className="p-8 bg-slate-900 text-white rounded-lg border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold">Schedule an In-Person Plant Tour</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-xl">
              Qualified industrial manufacturers are invited to inspect live trial runs of our converting machinery at our Ahmedabad and Coimbatore facilities.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="px-6 py-2.5 bg-[#0284C7] hover:bg-[#0369A1] text-xs font-semibold rounded text-white transition-colors cursor-pointer shrink-0"
          >
            Book Factory Visit
          </button>
        </div>
      </div>
    </div>
  );
};
