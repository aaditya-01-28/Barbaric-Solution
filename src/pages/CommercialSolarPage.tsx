import React, { useState } from 'react';
import { 
  Building2, 
  TrendingDown, 
  BadgePercent, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2,
  Hotel,
  Store,
  Briefcase,
  GraduationCap,
  Warehouse,
  Flame,
  Send
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import { createWhatsAppUrl } from '../utils/whatsappHelper';
import { formatINR } from '../utils/solarMath';

export const CommercialSolarPage: React.FC = () => {
  const [bill, setBill] = useState<number>(35000);
  const [businessName, setBusinessName] = useState<string>('');
  const [contactPerson, setContactPerson] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [category, setCategory] = useState<string>('Office');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const { submitLead, openQuoteModal } = useQuote();

  // Commercial estimation (~₹9.2 / unit commercial tariff)
  const unitsConsumed = Math.round(bill / 9.2);
  const recommendedKw = Math.max(10, Math.round(unitsConsumed / 125));
  const estimatedAnnualSavings = Math.round(recommendedKw * 125 * 12 * 9.2);
  const taxDepreciationSaving = Math.round(recommendedKw * 48000 * 0.40 * 0.25); // 40% AD on 25% corp tax

  const applications = [
    { title: 'Retail Shops & Showrooms', icon: Store, desc: 'Offset continuous day-time lighting, display air-conditioning, and chiller equipment.' },
    { title: 'Corporate Offices & IT Hubs', icon: Briefcase, desc: 'Zero noise daytime clean power with smart 3-phase synchronization and server backup.' },
    { title: 'Hotels & Banquet Halls', icon: Hotel, desc: 'Slash heavy electricity bills during daytime guest functions and HVAC cooling operations.' },
    { title: 'Hospitals & Diagnostic Centers', icon: Flame, desc: 'Critical uninterrupted power with hybrid storage options for MRI, CT scans, and ICU units.' },
    { title: 'Schools, Colleges & Universities', icon: GraduationCap, desc: 'Large unshaded campus rooftops generate huge green energy surpluses during daytime classes.' },
    { title: 'Warehouses & Logistics Centers', icon: Warehouse, desc: 'Massive tin-shed roof spaces turned into high-yielding captive power generation plants.' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactPerson || !phone) return;

    await submitLead({
      name: `${contactPerson} (${businessName || category})`,
      mobile: phone,
      city: 'Lucknow Commercial Hub',
      propertyType: 'office',
      solarRequirement: 'commercial',
      monthlyElectricityBill: bill,
      requiredCapacity: `${recommendedKw}kw` as any,
      message: `Commercial solar quote request for ${category}. Current monthly bill: ₹${bill}.`,
    });

    setSubmitted(true);

    const wa = createWhatsAppUrl({
      name: `${contactPerson} - ${businessName || category}`,
      monthlyBill: bill,
      capacity: `${recommendedKw} kW Commercial System`,
      systemType: 'Commercial Solar',
      city: 'Lucknow',
      customMessage: `Commercial Solar Enquiry. Monthly bill ₹${bill}. Est. Savings: ${formatINR(estimatedAnnualSavings)}/yr.`,
    });

    window.open(wa, '_blank');
  };

  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Commercial Solar Solutions (10 kW – 100 kW+)</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Reduce Your Business Electricity Cost With Solar
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
            Commercial tariffs in UP exceed ₹9–₹11 per unit. Barbaric Solution helps businesses, institutions, and hospitality brands cut daytime operating expenses by up to 80% while claiming 40% accelerated tax depreciation.
          </p>
        </div>
      </section>

      {/* Commercial Applications Carousel / Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
              Versatile Commercial Applications
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Shop → Office → Hotel → Hospital → School → Warehouse → Factory
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Engineered for businesses with daytime power demands and usable terrace or shed roofs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, idx) => {
              const Icon = app.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{app.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{app.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commercial Electricity Bill & Enquiry Capture */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                Commercial ROI Estimator
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Enter Your Business Monthly Electricity Bill
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                See instant system sizing and estimated annual commercial savings.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Bill Range */}
              <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-700">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-bold text-slate-300">
                    Monthly Electricity Bill (₹):
                  </label>
                  <div className="flex items-center gap-1 bg-slate-800 border border-slate-600 px-3 py-1 rounded-lg">
                    <span className="text-amber-400 font-bold">₹</span>
                    <input
                      type="number"
                      step={5000}
                      min={10000}
                      max={500000}
                      value={bill}
                      onChange={(e) => setBill(Number(e.target.value) || 0)}
                      className="w-28 text-right font-black text-amber-400 bg-transparent text-base focus:outline-hidden"
                    />
                  </div>
                </div>
                <input
                  type="range"
                  min={10000}
                  max={250000}
                  step={5000}
                  value={bill > 250000 ? 250000 : bill}
                  onChange={(e) => setBill(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>

              {/* Instant Output Summary */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
                    Recommended Capacity
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-amber-400">
                    ~{recommendedKw} kW
                  </span>
                </div>
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
                    Est. Annual Savings
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-emerald-400">
                    {formatINR(estimatedAnnualSavings)}
                  </span>
                </div>
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
                    Tax Depr. Benefits (40%)
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-blue-400">
                    ~{formatINR(taxDepreciationSaving)}
                  </span>
                </div>
              </div>

              {/* Business Details Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Business / Entity Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Metro Diagnostics"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-xs focus:outline-hidden focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Contact Person Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mr. Sharma"
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-xs focus:outline-hidden focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Mobile Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-xs focus:outline-hidden focus:border-amber-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold rounded-xl text-sm shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4 text-slate-950" />
                <span>SUBMIT COMMERCIAL ENQUIRY & GET SITE SURVEY</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Corporate Financial Advantages */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <BadgePercent className="w-8 h-8 text-amber-500 mb-3" />
            <h4 className="font-bold text-slate-900 text-base mb-1">40% Accelerated Depreciation</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Under Section 32 of the Income Tax Act, commercial enterprises can write off 40% of their solar investment in the first year, drastically lowering corporate tax liability.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <Clock className="w-8 h-8 text-emerald-500 mb-3" />
            <h4 className="font-bold text-slate-900 text-base mb-1">3 to 4 Years Payback</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              With high commercial tariff slabs in Lucknow (up to ₹11/unit), the capital investment recovers rapidly, providing free electricity for the remaining 20+ years of panel life.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <ShieldCheck className="w-8 h-8 text-blue-500 mb-3" />
            <h4 className="font-bold text-slate-900 text-base mb-1">Cloud SCADA Monitoring</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Monitor daily kWh generation, peak demand suppression, inverter temperatures, and performance ratios 24/7 directly from your smartphone or desktop dashboard.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
