import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Calculator, FileText, CheckCircle2, Shield, Zap } from 'lucide-react';
import { useQuote } from '../../context/QuoteContext';

export const HeroBanner: React.FC = () => {
  const { openQuoteModal } = useQuote();

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white min-h-[85vh] flex items-center">
      {/* Background Image with optimized dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1920&q=80"
          alt="Modern Rooftop Solar Plant"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md">
            <Sun className="w-3.5 h-3.5 text-amber-400" />
            <span>PM Surya Ghar: Up to ₹78,000 Direct Subsidy Assistance</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Switch to Solar. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
              Save More.
            </span>{' '}
            Live Better.
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            Residential, Commercial & Industrial Solar Solutions in Lucknow & Uttar Pradesh. Engineered with Tier-1 Solar Products, Professional Certified Installation & Complete After-Sales Net-Metering Support.
          </p>

          {/* Highlights Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm font-medium text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Reduce Bills by Up to 90%</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>25-Year Panel Performance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>UPPCL Net Metering Support</span>
            </div>
          </div>

          {/* Main Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => openQuoteModal()}
              type="button"
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-base px-8 py-4 rounded-xl shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <FileText className="w-5 h-5 text-slate-950" />
              <span>GET FREE QUOTE</span>
            </button>

            <Link
              to="/calculator"
              className="inline-flex items-center justify-center gap-2.5 bg-slate-800/80 hover:bg-slate-800 text-white font-semibold text-base px-7 py-4 rounded-xl border border-slate-700 backdrop-blur-md transition-all hover:border-amber-400/50"
            >
              <Calculator className="w-5 h-5 text-amber-400" />
              <span>CALCULATE YOUR SAVINGS</span>
            </Link>
          </div>

          {/* Trust Banner Bar */}
          <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center gap-6 sm:gap-10 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-400" />
              <span>Customized Solar Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>Fast 7-10 Days Installation</span>
            </div>
            <div className="flex items-center gap-2">
              <Sun className="w-4 h-4 text-yellow-400" />
              <span>Lucknow Local Head Office</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
