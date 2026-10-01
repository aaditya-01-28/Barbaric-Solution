import React from 'react';
import { Phone, MessageSquare, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../../config/companyInfo';
import { getDirectWhatsAppUrl } from '../../utils/whatsappHelper';
import { useQuote } from '../../context/QuoteContext';

export const MobileStickyBar: React.FC = () => {
  const { openQuoteModal } = useQuote();

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl p-2 px-3 safe-area-pb">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Now */}
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 bg-slate-900 active:bg-slate-800 text-white rounded-xl font-semibold text-xs transition-colors shadow-xs"
        >
          <Phone className="w-4 h-4 text-amber-400 mb-0.5" />
          <span className="tracking-tight">Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={getDirectWhatsAppUrl()}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 bg-emerald-600 active:bg-emerald-700 text-white rounded-xl font-semibold text-xs transition-colors shadow-xs"
        >
          <MessageSquare className="w-4 h-4 mb-0.5" />
          <span className="tracking-tight">WhatsApp</span>
        </a>

        {/* Get Quote */}
        <button
          onClick={() => openQuoteModal()}
          type="button"
          className="flex flex-col items-center justify-center py-2 px-1 bg-gradient-to-r from-amber-500 to-amber-600 active:from-amber-600 active:to-amber-700 text-white rounded-xl font-bold text-xs transition-colors shadow-xs"
        >
          <FileText className="w-4 h-4 mb-0.5" />
          <span className="tracking-tight">Get Quote</span>
        </button>
      </div>
    </div>
  );
};
