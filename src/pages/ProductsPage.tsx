import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Wrench, 
  Sun, 
  Zap, 
  BatteryCharging, 
  ShieldCheck, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  Filter
} from 'lucide-react';
import { PRODUCTS_DATA } from '../data/mockData';
import { useQuote } from '../context/QuoteContext';

export const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'all';
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const { openQuoteModal } = useQuote();

  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const categories = [
    { id: 'all', label: 'All Equipment' },
    { id: 'panels', label: '☀️ Solar Panels (TOPCon/Mono)' },
    { id: 'inverters', label: '⚡ Smart Inverters' },
    { id: 'batteries', label: '🔋 LiFePO4 Batteries' },
    { id: 'structures', label: '🏗️ GI Structures' },
    { id: 'protection', label: '🛡️ Protection (ACDB/DCDB/SPD)' },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter((p) => p.category === selectedCategory);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('cat');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ cat: catId });
    }
  };

  return (
    <div className="space-y-0">
      {/* Header */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block bg-amber-500/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            Equipment Catalog
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Tier-1 Certified Solar Products & Components
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            We only supply and install genuine, factory-tested modules, high-efficiency inverters, hot-dip galvanized mounting hardware, and surge-protected electrical panels.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-slate-100 border-b border-slate-200 sticky top-20 z-30 backdrop-blur-md bg-slate-100/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id)}
                className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-amber-500 text-slate-950 shadow-md scale-102'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Cards Gallery */}
      <section className="py-16 bg-white min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {prod.popular && (
                      <span className="absolute top-3 right-3 bg-amber-500 text-slate-950 font-bold text-[11px] px-2.5 py-1 rounded-full shadow-md">
                        Top Choice
                      </span>
                    )}
                    <span className="absolute bottom-3 left-3 bg-slate-900/85 backdrop-blur-md text-white font-mono text-[10px] px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {prod.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {prod.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {prod.description}
                    </p>

                    {/* Features checklist */}
                    <div className="mt-4 pt-4 border-t border-slate-200 space-y-1.5">
                      <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">Key Highlights:</p>
                      {prod.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technical Specs Table */}
                    <div className="mt-4 bg-white p-3 rounded-xl border border-slate-200 text-xs space-y-1">
                      <p className="text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1">Specifications:</p>
                      {Object.entries(prod.specs).map(([key, val]) => (
                        <div key={key} className="flex justify-between py-0.5 border-b border-slate-100 last:border-0 text-[11px]">
                          <span className="text-slate-500">{key}:</span>
                          <span className="font-semibold text-slate-900">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => openQuoteModal({ message: `Quotation inquiry for equipment: ${prod.title}` })}
                    type="button"
                    className="w-full py-3 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
                  >
                    Request Technical Datasheet & Price
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
