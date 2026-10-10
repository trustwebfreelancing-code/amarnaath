import React, { useState } from 'react';
import { ProductItem, PRODUCTS_CATALOG } from '../data/companyData';
import { X, CheckCircle, ShieldCheck, Download, ArrowRight, Zap, Gauge, Box, Cpu } from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onOpenQuote: (productId: string) => void;
  onSelectProduct: (product: ProductItem) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenQuote,
  onSelectProduct,
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!product) return null;

  const relatedProducts = PRODUCTS_CATALOG.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 2);

  const handleDownloadDatasheet = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150">
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-5xl overflow-hidden border border-slate-200 my-auto flex flex-col max-h-[92vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50 shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="font-semibold uppercase tracking-wider text-[#0284C7]">
              {product.category}
            </span>
            <span>/</span>
            <span className="font-mono text-slate-700">{product.model}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-200 rounded transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-10">
          {/* Top Section: Visual Gallery + Key Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Product Image Showcase */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative aspect-4/3 rounded-md overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-mono px-2.5 py-1 rounded">
                  MODEL: {product.model}
                </div>
              </div>

              {/* Verified Trust Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {product.certifications.map((cert, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{cert}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Name, Description & Quick Specs */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs font-semibold text-[#0284C7] uppercase tracking-wider">
                  Industrial Machinery
                </span>
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
                  {product.name}
                </h1>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {product.shortDesc}
                </p>
              </div>

              {/* Key Specifications Grid */}
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 grid grid-cols-2 gap-3 text-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Gauge className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>Production Speed</span>
                  </div>
                  <div className="font-semibold text-slate-900">{product.productionSpeed}</div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Zap className="w-3.5 h-3.5 text-amber-600" />
                    <span>Power Load</span>
                  </div>
                  <div className="font-semibold text-slate-900">{product.powerRequirement}</div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Box className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Dimensions</span>
                  </div>
                  <div className="font-semibold text-slate-900">{product.dimensions}</div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Cpu className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Net Weight</span>
                  </div>
                  <div className="font-semibold text-slate-900">{product.weight}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => onOpenQuote(product.id)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-slate-900 hover:bg-[#0284C7] text-white text-sm font-semibold rounded-md transition-colors cursor-pointer shadow-xs"
                >
                  <span>Request Custom Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleDownloadDatasheet}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-xs font-semibold rounded-md transition-colors cursor-pointer"
                >
                  {downloadSuccess ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">Datasheet Prepared & Downloaded</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 text-slate-500" />
                      <span>Download Technical Datasheet (.PDF)</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Section: Overview & Detailed Engineering */}
          <div className="border-t border-slate-200 pt-8 space-y-4">
            <h3 className="text-base font-bold text-slate-900 tracking-tight">
              Machinery Overview
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-4xl">
              {product.fullDesc}
            </p>
          </div>

          {/* Section: Key Engineering Features */}
          <div className="border-t border-slate-200 pt-8 space-y-4">
            <h3 className="text-base font-bold text-slate-900 tracking-tight">
              Precision Engineering Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {product.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-100 text-xs text-slate-700"
                >
                  <span className="text-[#0284C7] font-bold mt-0.5">•</span>
                  <span className="leading-normal">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Technical Specifications Table */}
          <div className="border-t border-slate-200 pt-8 space-y-4">
            <h3 className="text-base font-bold text-slate-900 tracking-tight">
              Technical Specifications
            </h3>
            <div className="border border-slate-200 rounded-md overflow-hidden">
              <table className="min-w-full divide-y divide-slate-200 text-left text-xs">
                <thead className="bg-slate-100 font-semibold text-slate-700">
                  <tr>
                    <th scope="col" className="px-4 py-2.5 w-1/3">
                      Parameter
                    </th>
                    <th scope="col" className="px-4 py-2.5">
                      Engineering Rating / Value
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {product.specs.map((spec, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                      <td className="px-4 py-2.5 font-medium text-slate-800">
                        {spec.name}
                      </td>
                      <td className="px-4 py-2.5 font-mono text-slate-600">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section: Target Applications */}
          <div className="border-t border-slate-200 pt-8 space-y-4">
            <h3 className="text-base font-bold text-slate-900 tracking-tight">
              Target Applications & End Products
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((app, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-slate-100 text-slate-700 px-3 py-1.5 rounded border border-slate-200"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

          {/* Section: Related Machinery */}
          {relatedProducts.length > 0 && (
            <div className="border-t border-slate-200 pt-8 space-y-4">
              <h3 className="text-base font-bold text-slate-900 tracking-tight">
                Related Machinery Solutions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedProducts.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectProduct(rel)}
                    className="p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded cursor-pointer transition-colors flex items-center gap-3"
                  >
                    <img
                      src={rel.image}
                      alt={rel.name}
                      className="w-16 h-16 object-cover rounded shrink-0 border border-slate-200"
                    />
                    <div className="overflow-hidden">
                      <h4 className="text-xs font-semibold text-slate-900 truncate">
                        {rel.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                        {rel.model}
                      </p>
                      <span className="text-[11px] text-[#0284C7] font-medium inline-flex items-center gap-1 mt-1">
                        View details →
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
