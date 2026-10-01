import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Sun, 
  CheckCircle2, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  ArrowRight,
  Calculator,
  Award
} from 'lucide-react';
import { COMPANY_INFO } from '../config/companyInfo';
import { getDirectWhatsAppUrl } from '../utils/whatsappHelper';
import { useQuote } from '../context/QuoteContext';
import { SolarCalculator } from '../components/calculator/SolarCalculator';

interface LucknowSeoPageProps {
  keywordFocus?: 'lucknow-general' | '5kw' | '10kw' | 'maintenance';
}

export const LucknowSeoPage: React.FC<LucknowSeoPageProps> = ({
  keywordFocus = 'lucknow-general',
}) => {
  const { openQuoteModal } = useQuote();

  const is5kw = keywordFocus === '5kw';
  const is10kw = keywordFocus === '10kw';
  const isMaint = keywordFocus === 'maintenance';

  const headingText = is5kw
    ? '5 kW Solar System Price & Installation in Lucknow'
    : is10kw
    ? '10 kW Solar System Price in Lucknow for Commercial & Luxury Villas'
    : isMaint
    ? 'Solar Panel Maintenance, Cleaning & AMC Services in Lucknow'
    : 'Best Solar Company in Lucknow — Rooftop Solar EPC & Installation';

  const subText = is5kw
    ? 'Complete 5 kW On-Grid & Hybrid Solar Plant with UPPCL Net Metering and PM Surya Ghar Subsidy Assistance in Lucknow.'
    : is10kw
    ? 'Heavy-duty 10 kW 3-Phase Solar System generating ~1,200 units/month for large residences, clinics, and offices in Lucknow.'
    : isMaint
    ? 'Professional solar plant health checkup, string diagnostics, module deep cleaning, and Annual Maintenance Contracts (AMC).'
    : 'Certified Solar Installer located at Chinhat, Lucknow. Serving Gomti Nagar, Indira Nagar, Mahanagar, Aliganj, and all UP districts.';

  return (
    <div className="space-y-0">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: COMPANY_INFO.name,
            image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=800',
            telephone: COMPANY_INFO.phone,
            email: COMPANY_INFO.email,
            address: {
              '@type': 'PostalAddress',
              streetAddress: '55/56 Shiv Shanti Enclave, Gate No. 3, Shahpur Matiyari',
              addressLocality: 'Chinhat, Lucknow',
              addressRegion: 'UP',
              postalCode: '226028',
              addressCountry: 'IN',
            },
            priceRange: '₹₹',
            description: subText,
          }),
        }}
      />

      {/* Hero Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Chinhat, Lucknow Headquartered EPC</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            {headingText}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
            {subText}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => openQuoteModal({ city: 'Lucknow', message: `Inquiry for ${headingText}` })}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-sm transition-all cursor-pointer shadow-lg"
            >
              Get Lucknow On-Site Survey Quote
            </button>
            <a
              href={getDirectWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-5 py-3.5 rounded-xl text-sm flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Solar Engineer</span>
            </a>
          </div>
        </div>
      </section>

      {/* Specific Content Details for 5kW or 10kW or general */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                Why Barbaric Solution is the Preferred Solar EPC in Lucknow
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                When searching for a trustworthy <strong>solar company in Lucknow</strong> or <strong>solar panel installation in Chinhat</strong>, reliability and local presence matter. Barbaric Solution operates its head office at Shiv Shanti Enclave, Shahpur Matiyari, Chinhat. Our local team understands the specific requirements of UPPCL Madhyanchal Vidyut Vitran Nigam Limited (MVVNL), local net-metering protocols, and climatic wind resistance standards for Uttar Pradesh.
              </p>
            </div>

            {/* Quick Lucknow Specs Table */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Sun className="w-5 h-5 text-amber-500" />
                <span>Rooftop Solar Benchmark Estimates for Lucknow</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <span className="text-slate-400 font-semibold block uppercase text-[10px]">Average Daily Generation</span>
                  <span className="text-lg font-bold text-slate-900 mt-1 block">4.1 to 4.3 Units / kW</span>
                  <span className="text-slate-500 text-[11px]">Under unshaded Lucknow sunlight</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <span className="text-slate-400 font-semibold block uppercase text-[10px]">Roof Area Needed</span>
                  <span className="text-lg font-bold text-slate-900 mt-1 block">80 – 90 sq.ft. / kW</span>
                  <span className="text-slate-500 text-[11px]">Using 550W+ TOPCon panels</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <span className="text-slate-400 font-semibold block uppercase text-[10px]">Net Metering Synchronization</span>
                  <span className="text-lg font-bold text-slate-900 mt-1 block">UPPCL MVVNL</span>
                  <span className="text-slate-500 text-[11px]">Bidirectional smart meter testing</span>
                </div>
              </div>
            </div>

            {/* Service Localities in Lucknow */}
            <div className="pt-4">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Key Localities Served in Lucknow with Priority Site Survey:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                {COMPANY_INFO.serviceAreas.map((loc, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{loc}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Embedded Sizing Calculator */}
      <section className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SolarCalculator initialBill={is5kw ? 6000 : is10kw ? 14000 : 7500} initialRoof={is5kw ? 500 : is10kw ? 1000 : 600} />
        </div>
      </section>
    </div>
  );
};
