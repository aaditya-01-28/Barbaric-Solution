import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { getDirectWhatsAppUrl } from '../../utils/whatsappHelper';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="hidden lg:block fixed bottom-6 right-6 z-40">
      {showTooltip && (
        <div className="absolute bottom-16 right-0 w-64 bg-slate-900 text-white text-xs p-3 rounded-2xl shadow-xl border border-slate-800 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-white"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-bold text-amber-300">Barbaric Solar Expert</span>
          </div>
          <p className="text-slate-300">
            Have questions about Solar Bill Savings or PM Surya Ghar Subsidy? Let's chat!
          </p>
        </div>
      )}

      <a
        href={getDirectWhatsAppUrl()}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-emerald-500/50 hover:scale-110 transition-all duration-200 group"
        aria-label="Chat with Barbaric Solution on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 group-hover:rotate-6 transition-transform" />
      </a>
    </div>
  );
};
