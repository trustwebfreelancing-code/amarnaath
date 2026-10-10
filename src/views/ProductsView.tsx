import React, { useState, useMemo } from 'react';
import { PRODUCTS_CATALOG, ProductItem } from '../data/companyData';
import { Search, Filter, ArrowRight, Gauge, Zap, ArrowUpRight } from 'lucide-react';

interface ProductsViewProps {
  onSelectProduct: (product: ProductItem) => void;
  onOpenQuote: (productId?: string) => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({
  onSelectProduct,
  onOpenQuote,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTier, setSelectedTier] = useState<string>('All');

  const categories = [
    'All',
    'Medical Textile',
    'Hygiene Product',
    'Spinning & Textile',
    'Industrial Machinery',
  ];

  const tiers = ['All', 'Industrial Tier A', 'Enterprise High-Output Line', 'Heavy Industrial Capital Equipment'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS_CATALOG.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCat =
        selectedCategory === 'All' || item.category === selectedCategory;

      const matchesTier =
        selectedTier === 'All' || item.priceRange.includes(selectedTier) || selectedTier.includes(item.priceRange);

      return matchesSearch && matchesCat && matchesTier;
    });
  }, [searchQuery, selectedCategory, selectedTier]);

  return (
    <div className="w-full bg-[#FAFAFA] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
            PRODUCT CATALOGUE
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Our Products
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Engineered for high-volume continuous output, minimal mechanical vibration, and uncompromising material conversion efficiency. Explore our standard and custom turnkey machinery lines.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white p-4 sm:p-5 rounded-lg border border-slate-200 shadow-xs space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Search products by model, keyword, or application..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-slate-300 rounded-md text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
              />
            </div>

            {/* Category Filter */}
            <div className="md:col-span-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full py-2 px-3 border border-slate-300 rounded-md text-xs sm:text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    Category: {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Output / Scale Filter */}
            <div className="md:col-span-3">
              <select
                value={selectedTier}
                onChange={(e) => setSelectedTier(e.target.value)}
                className="w-full py-2 px-3 border border-slate-300 rounded-md text-xs sm:text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
              >
                <option value="All">All Production Scales</option>
                <option value="Industrial Tier A">High-Precision Production</option>
                <option value="Enterprise">Enterprise Turnkey Line</option>
                <option value="Heavy Industrial">Heavy Converting Slitter</option>
              </select>
            </div>
          </div>

          {/* Quick category tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-100 text-xs">
            <span className="text-slate-400 font-medium mr-1">Quick Filter:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white font-medium'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Desktop Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-lg p-12 text-center space-y-3">
            <p className="text-base font-semibold text-slate-800">
              No machinery found matching your filter criteria.
            </p>
            <p className="text-xs text-slate-500">
              Try adjusting your search terms or clearing the selected category.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedTier('All');
              }}
              className="text-xs text-[#0284C7] font-semibold underline cursor-pointer"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col bg-white border border-slate-200 rounded-md overflow-hidden hover:border-slate-300 transition-all duration-150 shadow-xs"
              >
                {/* Product Image */}
                <div
                  onClick={() => onSelectProduct(product)}
                  className="relative aspect-4/3 overflow-hidden bg-slate-100 cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-mono px-2 py-0.5 rounded">
                    {product.model}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0284C7]">
                      {product.category}
                    </span>
                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="text-lg font-bold text-slate-900 group-hover:text-[#0284C7] transition-colors cursor-pointer leading-snug"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {product.shortDesc}
                    </p>

                    {/* Glance Specs */}
                    <div className="pt-2 grid grid-cols-2 gap-2 text-[11px] text-slate-500 border-t border-slate-100">
                      <div>
                        <span className="text-slate-400">Speed: </span>
                        <span className="font-semibold text-slate-800">{product.productionSpeed}</span>
                      </div>
                      <div>
                        <span className="text-slate-400">Power: </span>
                        <span className="font-semibold text-slate-800">{product.powerRequirement}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="text-xs font-semibold text-slate-900 hover:text-[#0284C7] transition-colors cursor-pointer inline-flex items-center gap-1"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onOpenQuote(product.id)}
                      className="px-3 py-1.5 text-xs font-semibold text-[#0284C7] hover:text-white bg-[#0284C7]/10 hover:bg-[#0284C7] rounded transition-colors cursor-pointer"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Custom Engineering Callout */}
        <div className="bg-slate-900 text-white rounded-lg p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-left">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Require a Custom Built Machine or Specialized Tooling?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Our 45+ member design department builds customized slitting, laminating, and converting equipment tailored to your proprietary web width, roll mass, and cycle speed.
            </p>
          </div>
          <button
            onClick={() => onOpenQuote()}
            className="shrink-0 px-6 py-3 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs sm:text-sm font-semibold rounded transition-colors cursor-pointer"
          >
            Consult Engineering Team
          </button>
        </div>
      </div>
    </div>
  );
};
