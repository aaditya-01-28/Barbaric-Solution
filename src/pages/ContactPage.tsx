import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  ExternalLink, 
  Clock, 
  ShieldCheck, 
  Navigation
} from 'lucide-react';
import { COMPANY_INFO } from '../config/companyInfo';
import { getDirectWhatsAppUrl } from '../utils/whatsappHelper';
import { LeadForm } from '../components/quotes/LeadForm';
import { useQuote } from '../context/QuoteContext';

export const ContactPage: React.FC = () => {
  const { openQuoteModal } = useQuote();

  return (
    <div className="space-y-0">
      {/* Header */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5" />
            <span>Direct Solar Assistance</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Get Your Free Solar Consultation
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            Visit our Chinhat head office, speak directly with our certified solar engineers, or request an itemized online quotation.
          </p>
        </div>
      </section>

      {/* Main Content Grid: Contact Details & Lead Form */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Col: Contact Info & Action Buttons (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {COMPANY_INFO.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase text-emerald-700 tracking-wider mt-0.5">
                    {COMPANY_INFO.tagline}
                  </p>
                </div>

                {/* Address Card */}
                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Registered Office:</span>
                    <p className="text-slate-600 text-xs leading-relaxed mt-0.5">
                      {COMPANY_INFO.address.full}
                    </p>
                    <a
                      href={COMPANY_INFO.address.googleMapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-amber-600 font-bold hover:underline mt-2"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>GET DIRECTIONS ON GOOGLE MAPS</span>
                    </a>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Phone Support:</span>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-slate-800 font-bold hover:text-amber-600 text-sm">
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                    <p className="text-[11px] text-slate-400 mt-0.5">{COMPANY_INFO.officeHours}</p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Email Inquiries:</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-700 hover:text-amber-600 text-xs break-all font-mono">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* 4 Action Buttons as specified in 18 */}
                <div className="pt-4 border-t border-slate-100 space-y-2.5">
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="py-3 px-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl text-center flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-400" />
                      <span>CALL NOW</span>
                    </a>
                    <a
                      href={getDirectWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="py-3 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl text-center flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WHATSAPP</span>
                    </a>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => openQuoteModal()}
                      className="py-3 px-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl text-center transition-colors cursor-pointer"
                    >
                      GET QUOTE
                    </button>
                    <a
                      href={COMPANY_INFO.address.googleMapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="py-3 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl text-center flex items-center justify-center gap-1 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>DIRECTIONS</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Local Lucknow Coverage Box */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800">
                <h4 className="font-bold text-xs uppercase tracking-wider text-amber-400 mb-2">
                  Lucknow On-Site Service Hub
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Our mobile technical survey teams operate daily across Chinhat, Matiyari, Gomti Nagar, Indira Nagar, Mahanagar, Aliganj, and all industrial corridors.
                </p>
                <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-300">
                  {COMPANY_INFO.serviceAreas.slice(0, 7).map((area, i) => (
                    <span key={i} className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Standalone Quotation Form (7 cols) */}
            <div className="lg:col-span-7">
              <LeadForm
                title="Online Quotation Request"
                subtitle="Fill out this form to receive a detailed system proposal, BOM, and PM Surya Ghar subsidy estimate from Barbaric Solution."
              />
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Map Embed */}
      <section className="h-80 w-full bg-slate-200 relative">
        <iframe
          title="Barbaric Solution Location Chinhat Lucknow"
          src="https://maps.google.com/maps?q=55/56+Shiv+Shanti+Enclave+Chinhat+Lucknow+226028&t=&z=14&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </section>
    </div>
  );
};
