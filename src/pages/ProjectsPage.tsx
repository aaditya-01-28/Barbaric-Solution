import React, { useState } from 'react';
import { 
  Camera, 
  MapPin, 
  Sun, 
  Zap, 
  IndianRupee, 
  Layers, 
  ArrowRight,
  Filter
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/mockData';
import { useQuote } from '../context/QuoteContext';

export const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'residential' | 'commercial' | 'industrial'>('all');
  const [activePhotoTab, setActivePhotoTab] = useState<Record<string, 'completed' | 'before' | 'during'>>({});
  const { openQuoteModal } = useQuote();

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => {
        if (activeFilter === 'residential') return p.application.toLowerCase().includes('residential') || p.application.toLowerCase().includes('house');
        if (activeFilter === 'commercial') return p.application.toLowerCase().includes('commercial') || p.application.toLowerCase().includes('healthcare');
        if (activeFilter === 'industrial') return p.application.toLowerCase().includes('logistics') || p.application.toLowerCase().includes('warehouse');
        return true;
      });

  const setPhotoTab = (projectId: string, tab: 'completed' | 'before' | 'during') => {
    setActivePhotoTab((prev) => ({
      ...prev,
      [projectId]: tab,
    }));
  };

  return (
    <div className="space-y-0">
      {/* Header */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            <span>Installed Case Studies</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Our Completed Solar Projects in Lucknow
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            Real installations across Gomti Nagar, Chinhat, Indira Nagar, Aliganj, and Transport Nagar. Browse through before, during, and completed plant views.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-6 bg-slate-100 border-b border-slate-200 sticky top-20 z-30 backdrop-blur-md bg-slate-100/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'residential', label: '🏡 Residential Rooftop' },
              { id: 'commercial', label: '🏢 Commercial Systems' },
              { id: 'industrial', label: '🏭 Industrial EPC' },
            ].map((btn) => (
              <button
                key={btn.id}
                type="button"
                onClick={() => setActiveFilter(btn.id as any)}
                className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeFilter === btn.id
                    ? 'bg-amber-500 text-slate-950 shadow-md scale-102'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          <span className="text-xs text-slate-500 hidden sm:inline-block">
            Showing {filteredProjects.length} projects
          </span>
        </div>
      </section>

      {/* Projects List with Before / During / Completed Tabs */}
      <section className="py-16 bg-white min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filteredProjects.map((proj) => {
              const currentTab = activePhotoTab[proj.id] || 'completed';
              const activeImageSrc =
                currentTab === 'before' && proj.photos.before
                  ? proj.photos.before
                  : currentTab === 'during' && proj.photos.during
                  ? proj.photos.during
                  : proj.photos.completed;

              return (
                <div
                  key={proj.id}
                  className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Photo Viewer with Multi-stage Tabs */}
                    <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-900">
                      <img
                        src={activeImageSrc}
                        alt={`${proj.name} - ${currentTab}`}
                        className="w-full h-full object-cover transition-opacity duration-300"
                      />

                      {/* Capacity Badge */}
                      <div className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-md text-amber-300 font-extrabold text-xs px-3 py-1.5 rounded-full border border-amber-400/30">
                        {proj.capacity}
                      </div>

                      {/* Photo Stage Switcher */}
                      <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md p-1 rounded-xl flex items-center gap-1 border border-slate-700">
                        {proj.photos.before && (
                          <button
                            type="button"
                            onClick={() => setPhotoTab(proj.id, 'before')}
                            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-colors cursor-pointer ${
                              currentTab === 'before' ? 'bg-amber-500 text-slate-950' : 'text-slate-300 hover:text-white'
                            }`}
                          >
                            📸 Before
                          </button>
                        )}
                        {proj.photos.during && (
                          <button
                            type="button"
                            onClick={() => setPhotoTab(proj.id, 'during')}
                            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-colors cursor-pointer ${
                              currentTab === 'during' ? 'bg-amber-500 text-slate-950' : 'text-slate-300 hover:text-white'
                            }`}
                          >
                            🛠️ Work
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => setPhotoTab(proj.id, 'completed')}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-colors cursor-pointer ${
                            currentTab === 'completed' ? 'bg-emerald-500 text-white' : 'text-slate-300 hover:text-white'
                          }`}
                        >
                          ✓ Plant
                        </button>
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-6">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-500" />
                        <span>{proj.location}</span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {proj.name}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {proj.description}
                      </p>

                      {/* Technical Specs Box */}
                      <div className="bg-white p-4 rounded-2xl border border-slate-200 text-xs space-y-2">
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <span className="text-[10px] text-slate-400 block uppercase">Application</span>
                            <span className="font-semibold text-slate-800">{proj.application}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-400 block uppercase">System Type</span>
                            <span className="font-semibold text-slate-800">{proj.systemType}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                          <div>
                            <span className="text-[10px] text-slate-400 block uppercase">Modules Used</span>
                            <span className="font-medium text-slate-700 text-[11px]">{proj.panelsUsed}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-400 block uppercase">Est. Annual Savings</span>
                            <span className="font-bold text-emerald-600 text-sm">{proj.annualSavingsEst}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      onClick={() => openQuoteModal({ message: `I would like a quotation for a project similar to: ${proj.name}` })}
                      type="button"
                      className="w-full py-3 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Get Quotation for Similar Plant</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
