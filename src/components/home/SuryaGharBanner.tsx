import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, ArrowRight, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';
import { createWhatsAppUrl } from '../../utils/whatsappHelper';
import { useQuote } from '../../context/QuoteContext';

export const SuryaGharBanner: React.FC = () => {
  const { openQuoteModal } = useQuote();

  const steps = [
    { num: '1', title: 'Apply Online', desc: 'Register on National Portal (pmsuryaghar.gov.in) with UPPCL CA number.' },
    { num: '2', title: 'Select Vendor', desc: 'Choose Barbaric Solution as your certified turnkey EPC installer.' },
    { num: '3', title: 'Site Survey & Design', desc: 'Detailed rooftop shadow feasibility study & DISCOM net-metering application.' },
    { num: '4', title: 'Quality Installation', desc: 'Installation of Tier-1 DCR panels, bi-directional meter wiring & earthing.' },
    { num: '5', title: 'DISCOM Inspection', desc: 'UPPCL joint technical inspection, meter testing & net-meter commissioning.' },
    { num: '6', title: 'Direct Subsidy Credit', desc: 'Subsidy amount credited directly into your bank account (DBT).' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
              <Landmark className="w-3.5 h-3.5" />
              <span>Government of India Initiative</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              PM Surya Ghar: Muft Bijli Yojana
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              Avail up to ₹78,000 direct central government subsidy on residential rooftop solar installations. Barbaric Solution manages the complete end-to-end portal paperwork and UPPCL net-metering process.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => openQuoteModal({ solarRequirement: 'on-grid', message: 'PM Surya Ghar Subsidy Assistance enquiry' })}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-3 rounded-xl text-xs sm:text-sm shadow-lg transition-all cursor-pointer"
            >
              Check Subsidy Eligibility
            </button>
            <Link
              to="/pm-surya-ghar"
              className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-white font-medium px-4 py-3 rounded-xl text-xs sm:text-sm border border-slate-700 transition-colors"
            >
              <span>Learn 6-Step Process</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </Link>
          </div>
        </div>

        {/* 6 Steps Roadmap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-4 flex flex-col justify-between backdrop-blur-xs hover:border-emerald-500/50 transition-colors"
            >
              <div>
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-bold flex items-center justify-center text-sm mb-3">
                  {step.num}
                </div>
                <h3 className="font-bold text-white text-sm mb-1.5">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Need Help Box */}
        <div className="mt-10 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-white text-sm sm:text-base">
                Need Help With Your Rooftop Solar Application in Lucknow?
              </p>
              <p className="text-xs text-slate-400">
                Our subsidy experts will guide you through portal registration, DISCOM load sanction, and technical compliance.
              </p>
            </div>
          </div>

          <a
            href={createWhatsAppUrl({ customMessage: 'I need assistance with PM Surya Ghar Yojana subsidy and vendor registration.' })}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-colors shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Talk to Our Solar Expert</span>
          </a>
        </div>

      </div>
    </section>
  );
};
