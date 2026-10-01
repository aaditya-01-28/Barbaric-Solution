import React, { useState } from 'react';
import { 
  Zap, 
  MapPin, 
  Phone, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare,
  TrendingDown
} from 'lucide-react';
import { calculateSolarSavings, formatINR } from '../../utils/solarMath';
import { createWhatsAppUrl } from '../../utils/whatsappHelper';
import { useQuote } from '../../context/QuoteContext';

export const BillEstimator: React.FC = () => {
  const [selectedBill, setSelectedBill] = useState<number>(5000);
  const [city, setCity] = useState<string>('Lucknow');
  const [mobile, setMobile] = useState<string>('');
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const { submitLead, openQuoteModal } = useQuote();

  const billOptions = [
    { value: 2000, label: '₹2,000' },
    { value: 5000, label: '₹5,000' },
    { value: 10000, label: '₹10,000' },
    { value: 20000, label: '₹20,000' },
    { value: 50000, label: '₹50,000+' },
  ];

  const result = calculateSolarSavings(selectedBill);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mobile || mobile.length < 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }

    await submitLead({
      name: `Lead via Bill Estimator (${city})`,
      mobile,
      city,
      monthlyElectricityBill: selectedBill,
      propertyType: selectedBill >= 20000 ? 'office' : 'home',
      solarRequirement: 'on-grid',
      requiredCapacity: `${result.recommendedCapacityKw}kw` as any,
      message: `Quick estimator lead: Monthly bill ₹${selectedBill}, recommended ${result.recommendedCapacityKw} kW.`,
    });

    setHasSubmitted(true);

    // Construct WhatsApp URL
    const waUrl = createWhatsAppUrl({
      city,
      monthlyBill: selectedBill,
      capacity: `${result.recommendedCapacityKw} kW`,
      systemType: 'On-Grid Solar System',
      customMessage: `Estimated Savings: ₹${result.annualSavings}/year. Phone: ${mobile}`,
    });

    // Prompt user to open WhatsApp
    window.open(waUrl, '_blank');
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold px-3.5 py-1.5 rounded-full mb-3 uppercase tracking-wider">
            <TrendingDown className="w-3.5 h-3.5" />
            <span>Instant Bill Reduction Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            “What Is Your Monthly Electricity Bill?”
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-2">
            What is your average monthly electricity bill? Discover your exact rooftop solar system size, annual savings, and government subsidy.
          </p>
        </div>

        {/* Main Card */}
        <div className="max-w-4xl mx-auto bg-slate-800/80 backdrop-blur-md rounded-3xl border border-slate-700/80 p-6 sm:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Step 1: Bill Selector */}
            <div>
              <label className="block text-sm font-semibold text-slate-200 mb-3 text-center sm:text-left">
                1. Select Your Average Monthly Electricity Bill:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {billOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      setSelectedBill(opt.value);
                      setHasSubmitted(false);
                    }}
                    className={`py-3.5 px-4 rounded-xl font-bold text-base transition-all cursor-pointer border text-center ${
                      selectedBill === opt.value
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 border-amber-400 text-slate-950 shadow-lg shadow-amber-500/30 scale-102'
                        : 'bg-slate-900/80 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Instant Sizing Preview */}
            <div className="bg-slate-900/90 border border-slate-700 rounded-2xl p-5 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="border-r border-slate-800 pr-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                  Recommended System
                </span>
                <span className="text-2xl sm:text-3xl font-black text-amber-400">
                  {result.recommendedCapacityKw} kW
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Rooftop Plant</span>
              </div>

              <div className="border-r border-slate-800 pr-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                  Est. Annual Savings
                </span>
                <span className="text-2xl sm:text-3xl font-black text-emerald-400">
                  {formatINR(result.annualSavings)}
                </span>
                <span className="text-[10px] text-emerald-300 block mt-0.5">Every Year</span>
              </div>

              <div className="border-r border-slate-800 pr-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                  Govt. Subsidy (PM Surya)
                </span>
                <span className="text-2xl sm:text-3xl font-black text-blue-400">
                  {result.estimatedSubsidy > 0 ? formatINR(result.estimatedSubsidy) : 'C&I Tariff'}
                </span>
                <span className="text-[10px] text-blue-300 block mt-0.5">Direct in Bank</span>
              </div>

              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                  Est. Payback Period
                </span>
                <span className="text-2xl sm:text-3xl font-black text-purple-400">
                  {result.paybackPeriodYears} Yrs
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Free Power After</span>
              </div>
            </div>

            {/* Step 2: City & Mobile Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Your City / Area in Lucknow:</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lucknow, Chinhat, Gomti Nagar"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700 rounded-xl text-white focus:outline-hidden focus:ring-2 focus:ring-amber-400 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Mobile Number (WhatsApp Enabled):</span>
                </label>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  placeholder="e.g. 9876543210"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                  className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700 rounded-xl text-white focus:outline-hidden focus:ring-2 focus:ring-amber-400 text-sm font-mono"
                />
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="space-y-3">
              <button
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-base sm:text-lg rounded-2xl shadow-xl shadow-amber-500/25 transition-all transform active:scale-98 cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-slate-950" />
                <span>CHECK MY SOLAR SAVINGS</span>
                <ArrowRight className="w-5 h-5 text-slate-950" />
              </button>

              <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2 px-1">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Direct connect with Barbaric Solution engineering team
                </span>
                <button
                  type="button"
                  onClick={() => openQuoteModal({ monthlyElectricityBill: selectedBill, city })}
                  className="text-amber-400 hover:underline cursor-pointer"
                >
                  Need customized 3D roof analysis? Open Full Form →
                </button>
              </div>
            </div>

            {hasSubmitted && (
              <div className="bg-emerald-950/80 border border-emerald-500/60 rounded-xl p-4 text-center animate-in fade-in">
                <p className="text-emerald-300 font-bold text-sm">
                  ✓ Request dispatched! If WhatsApp did not open automatically, click below:
                </p>
                <a
                  href={createWhatsAppUrl({ city, monthlyBill: selectedBill, capacity: `${result.recommendedCapacityKw} kW` })}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2 rounded-lg text-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send On WhatsApp to Barbaric Solution Sales Team</span>
                </a>
              </div>
            )}

          </form>
        </div>

      </div>
    </section>
  );
};
