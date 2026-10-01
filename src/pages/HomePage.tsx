import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Phone, MessageSquare } from 'lucide-react';
import { HeroBanner } from '../components/home/HeroBanner';
import { QuickSegments } from '../components/home/QuickSegments';
import { BillEstimator } from '../components/home/BillEstimator';
import { SuryaGharBanner } from '../components/home/SuryaGharBanner';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { CustomerReviews } from '../components/home/CustomerReviews';
import { SolarCalculator } from '../components/calculator/SolarCalculator';
import { PROJECTS_DATA } from '../data/mockData';
import { COMPANY_INFO } from '../config/companyInfo';
import { getDirectWhatsAppUrl } from '../utils/whatsappHelper';
import { useQuote } from '../context/QuoteContext';

export const HomePage: React.FC = () => {
  const { openQuoteModal } = useQuote();

  return (
    <div className="space-y-0">
      {/* 1. Main Hero Banner */}
      <HeroBanner />

      {/* 2. Quick Customer Section (4 Segments) */}
      <QuickSegments />

      {/* 3. "What Is Your Monthly Electricity Bill?" Interactive Lead Estimator */}
      <BillEstimator />

      {/* 4. Full Solar Savings Calculator Widget */}
      <section className="py-16 sm:py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
              Self-Service Energy Sizing
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Interactive Solar Savings Calculator
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Adjust your monthly bill, roof area, and tariff rate to see immediate generation and payback estimates for Lucknow.
            </p>
          </div>

          <SolarCalculator initialBill={7000} initialRoof={600} />
        </div>
      </section>

      {/* 5. PM Surya Ghar – Rooftop Solar Section */}
      <SuryaGharBanner />

      {/* 6. Recent Projects Showcase Preview */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full mb-2 uppercase tracking-wider">
                Proven Track Record in Lucknow
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Featured Solar Plant Installations
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                Real rooftop and commercial projects engineered and commissioned by Barbaric Solution.
              </p>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-amber-600 hover:text-amber-700 font-bold text-sm"
            >
              <span>View All Projects Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS_DATA.slice(0, 3).map((proj) => (
              <div
                key={proj.id}
                className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden group hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={proj.photos.completed}
                      alt={proj.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-amber-300 font-bold text-xs px-3 py-1 rounded-full border border-amber-400/30">
                      {proj.capacity}
                    </div>
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-slate-900 font-medium text-[11px] px-2.5 py-0.5 rounded-md">
                      📍 {proj.location}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-base text-slate-900 group-hover:text-amber-600 transition-colors">
                      {proj.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                      {proj.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-200 grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase">System Type</span>
                        <span className="font-semibold text-slate-800">{proj.systemType}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase">Est. Savings</span>
                        <span className="font-bold text-emerald-600">{proj.annualSavingsEst}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => openQuoteModal({ message: `Interested in similar setup like ${proj.name}` })}
                    type="button"
                    className="w-full py-2.5 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
                  >
                    Get Similar System Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why Choose Barbaric Solution Trust Section */}
      <WhyChooseUs />

      {/* 8. Verified Customer Reviews */}
      <CustomerReviews />

      {/* 9. Bottom High-Converting Action Strip */}
      <section className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 py-12 text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <span className="inline-block bg-slate-950 text-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              Free Site Feasibility in Lucknow
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
              Start Generating Free Solar Power Today
            </h2>
            <p className="text-amber-950 font-medium text-sm sm:text-base mt-1">
              Call our Chinhat head office or message on WhatsApp to schedule an on-site shadow assessment.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => openQuoteModal()}
              type="button"
              className="bg-slate-950 hover:bg-slate-900 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all text-sm cursor-pointer"
            >
              Book Free Site Survey
            </button>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="bg-white/90 hover:bg-white text-slate-950 font-bold px-5 py-3.5 rounded-xl shadow transition-all flex items-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
