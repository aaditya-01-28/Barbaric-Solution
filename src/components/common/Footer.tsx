import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sun, 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight, 
  ExternalLink 
} from 'lucide-react';
import { COMPANY_INFO } from '../../config/companyInfo';
import { getDirectWhatsAppUrl } from '../../utils/whatsappHelper';
import { useQuote } from '../../context/QuoteContext';

export const Footer: React.FC = () => {
  const { openQuoteModal } = useQuote();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top CTA Banner */}
        <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 rounded-2xl p-6 sm:p-10 text-slate-950 mb-16 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="inline-block bg-slate-950 text-amber-300 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
              Zero Electricity Bill Target
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950">
              Ready to Switch to Solar Power in Lucknow?
            </h3>
            <p className="text-slate-900 font-medium text-sm sm:text-base mt-2">
              Get an accurate site survey, transparent quotation, and hassle-free PM Surya Ghar subsidy assistance today.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 justify-center">
            <button
              onClick={() => openQuoteModal()}
              className="bg-slate-950 hover:bg-slate-900 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer text-sm"
            >
              Get Free Site Survey
            </button>
            <a
              href={getDirectWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="bg-white/90 hover:bg-white text-emerald-800 font-bold px-5 py-3 rounded-xl shadow transition-all flex items-center gap-2 text-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Instant WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800 text-sm">
          {/* Col 1: About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Sun className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <div>
                <span className="font-extrabold text-lg text-white">BARBARIC SOLUTION</span>
                <p className="text-[10px] font-semibold tracking-wider text-emerald-400 uppercase">
                  Complete Solar Energy Solutions
                </p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
              Barbaric Solution provides turnkey rooftop solar power EPC solutions for residential homes, commercial enterprises, and industrial plants across Lucknow & Uttar Pradesh.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-white flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Quality & Transparent Pricing</span>
              </p>
              <p>Certified Tier-1 Panels • On-Grid, Hybrid & BESS Storage</p>
            </div>
          </div>

          {/* Col 2: Solar Solutions */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4">
              Solar Solutions
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/residential-solar" className="hover:text-amber-400 transition-colors flex items-center justify-between">
                  <span>Residential Rooftop (2kW - 10kW)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600" />
                </Link>
              </li>
              <li>
                <Link to="/commercial-solar" className="hover:text-amber-400 transition-colors flex items-center justify-between">
                  <span>Commercial Solar (10kW - 100kW)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600" />
                </Link>
              </li>
              <li>
                <Link to="/industrial-solar" className="hover:text-amber-400 transition-colors flex items-center justify-between">
                  <span>Industrial Solar EPC (100kW - 1MW+)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600" />
                </Link>
              </li>
              <li>
                <Link to="/solar-solutions#on-grid" className="hover:text-amber-400 transition-colors flex items-center justify-between">
                  <span>On-Grid Net Metering Systems</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600" />
                </Link>
              </li>
              <li>
                <Link to="/battery-bess" className="hover:text-amber-400 transition-colors flex items-center justify-between">
                  <span>Hybrid Solar & LiFePO4 Batteries</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600" />
                </Link>
              </li>
              <li>
                <Link to="/pm-surya-ghar" className="text-amber-400 hover:text-amber-300 transition-colors flex items-center justify-between font-medium">
                  <span>PM Surya Ghar: Muft Bijli Yojana</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-amber-500" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Local Lucknow Areas & SEO Links */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4">
              Lucknow Solar Hub
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Serving every corner of Lucknow with local on-site teams:
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {COMPANY_INFO.serviceAreas.slice(0, 8).map((area, idx) => (
                <Link
                  key={idx}
                  to="/solar-company-lucknow"
                  className="bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-400 text-[11px] px-2 py-1 rounded border border-slate-800 transition-colors"
                >
                  {area}
                </Link>
              ))}
            </div>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <Link to="/5kw-solar-system" className="hover:text-amber-400 transition-colors">
                  → 5 kW Solar System Lucknow
                </Link>
              </li>
              <li>
                <Link to="/10kw-solar-system" className="hover:text-amber-400 transition-colors">
                  → 10 kW Commercial Solar Lucknow
                </Link>
              </li>
              <li>
                <Link to="/solar-company-lucknow" className="hover:text-amber-400 transition-colors">
                  → Solar Panel Installation Chinhat
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Address */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4">
              Head Office Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Barbaric Solution</p>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {COMPANY_INFO.address.full}
                  </p>
                  <a
                    href={COMPANY_INFO.address.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-amber-400 hover:underline mt-1 font-medium"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-white hover:text-amber-400 font-semibold text-xs sm:text-sm">
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                  <p className="text-[11px] text-slate-500">Mon - Sat: 9:30 AM - 7:00 PM</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-300 hover:text-amber-400 text-xs break-all">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={getDirectWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-3 rounded-lg flex items-center justify-center gap-2 text-xs transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat with Solar Expert on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Barbaric Solution. All rights reserved.</p>
          <p className="max-w-xl text-center md:text-right text-[11px] text-slate-500">
            * All solar generation, financial savings, and subsidy estimations are indicative. Final system capacity, net savings, and net metering depend on site survey, electricity tariff, solar irradiation, shading, and DISCOM / UPPCL regulations.
          </p>
        </div>
      </div>
    </footer>
  );
};
