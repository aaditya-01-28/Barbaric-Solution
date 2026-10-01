import React, { useState } from 'react';
import { 
  Calculator, 
  Sun, 
  Zap, 
  IndianRupee, 
  TreePine, 
  ShieldAlert, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2,
  FileSpreadsheet,
  Info
} from 'lucide-react';
import { calculateSolarSavings, formatINR } from '../../utils/solarMath';
import { createWhatsAppUrl } from '../../utils/whatsappHelper';
import { useQuote } from '../../context/QuoteContext';

interface SolarCalculatorProps {
  initialBill?: number;
  initialRoof?: number;
  compact?: boolean;
}

export const SolarCalculator: React.FC<SolarCalculatorProps> = ({
  initialBill = 6500,
  initialRoof = 500,
  compact = false,
}) => {
  const [bill, setBill] = useState<number>(initialBill);
  const [roofArea, setRoofArea] = useState<number>(initialRoof);
  const [tariff, setTariff] = useState<number>(7.5);
  const [propertyType, setPropertyType] = useState<'residential' | 'commercial'>('residential');
  const { openQuoteModal } = useQuote();

  const calc = calculateSolarSavings(bill, roofArea, tariff);

  const roofSufficiency = roofArea >= calc.requiredRoofAreaSqFt;

  const handleWhatsAppShare = () => {
    const url = createWhatsAppUrl({
      monthlyBill: bill,
      capacity: `${calc.recommendedCapacityKw} kW`,
      systemType: propertyType === 'commercial' ? 'Commercial Solar' : 'Residential On-Grid',
      customMessage: `Calculated in Solar Tool: Recommended ${calc.recommendedCapacityKw} kW, Est. Savings: ${formatINR(calc.annualSavings)}/yr, Payback: ${calc.paybackPeriodYears} yrs. Roof Area: ${roofArea} sq.ft.`,
    });
    window.open(url, '_blank');
  };

  const handleGetProposal = () => {
    openQuoteModal({
      monthlyElectricityBill: bill,
      requiredCapacity: `${calc.recommendedCapacityKw}kw` as any,
      propertyType: propertyType === 'commercial' ? 'office' : 'home',
      solarRequirement: 'on-grid',
      message: `Solar Calculator inquiry: ${calc.recommendedCapacityKw} kW recommended, roof ${roofArea} sq.ft.`,
    });
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      {/* Calculator Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold px-3 py-1 rounded-full mb-2 uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5" />
              <span>Smart Sizing & Financial Engine</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Solar Savings & Rooftop Sizing Calculator
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Calculate your recommended system capacity, annual electricity savings, subsidy eligibility, and payback period tailored for Lucknow & UP.
            </p>
          </div>

          {/* Residential / Commercial toggle */}
          <div className="bg-slate-800 p-1 rounded-xl border border-slate-700 flex items-center">
            <button
              type="button"
              onClick={() => {
                setPropertyType('residential');
                setTariff(7.5);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                propertyType === 'residential'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Residential Home
            </button>
            <button
              type="button"
              onClick={() => {
                setPropertyType('commercial');
                setTariff(9.2);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                propertyType === 'commercial'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Commercial / C&I
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Inputs Column (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
            Step 1: Enter Your Energy Details
          </h4>

          {/* Input 1: Monthly Bill */}
          <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-slate-700">
                Average Monthly Electricity Bill (₹)
              </label>
              <div className="flex items-center gap-1 bg-white border border-slate-300 px-3 py-1 rounded-lg">
                <span className="text-xs text-slate-500">₹</span>
                <input
                  type="number"
                  min={1000}
                  max={200000}
                  step={500}
                  value={bill}
                  onChange={(e) => setBill(Number(e.target.value) || 0)}
                  className="w-20 text-sm font-bold text-slate-900 focus:outline-hidden text-right"
                />
              </div>
            </div>
            <input
              type="range"
              min={1500}
              max={50000}
              step={500}
              value={bill > 50000 ? 50000 : bill}
              onChange={(e) => setBill(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between text-[11px] text-slate-600 font-medium mt-1">
              <span>₹1,500</span>
              <span>₹15,000</span>
              <span>₹30,000</span>
              <span>₹50,000+</span>
            </div>
          </div>

          {/* Input 2: Available Roof Area */}
          <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-slate-700">
                Available Shadow-Free Roof Area (sq. ft.)
              </label>
              <div className="flex items-center gap-1 bg-white border border-slate-300 px-3 py-1 rounded-lg">
                <input
                  type="number"
                  min={100}
                  max={20000}
                  step={50}
                  value={roofArea}
                  onChange={(e) => setRoofArea(Number(e.target.value) || 0)}
                  className="w-16 text-sm font-bold text-slate-900 focus:outline-hidden text-right"
                />
                <span className="text-xs text-slate-500">sq.ft</span>
              </div>
            </div>
            <input
              type="range"
              min={100}
              max={3000}
              step={50}
              value={roofArea > 3000 ? 3000 : roofArea}
              onChange={(e) => setRoofArea(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between text-[11px] text-slate-600 font-medium mt-1">
              <span>100 sq.ft</span>
              <span>1,000 sq.ft</span>
              <span>2,000 sq.ft</span>
              <span>3,000+ sq.ft</span>
            </div>
            
            <div className="mt-3 text-[11px] flex items-center justify-between">
              <span className="text-slate-500">Required for {calc.recommendedCapacityKw} kW:</span>
              <span className={`font-bold ${roofSufficiency ? 'text-emerald-700' : 'text-amber-700'}`}>
                ~{calc.requiredRoofAreaSqFt} sq.ft. {roofSufficiency ? '✓ Sufficient' : '⚠️ Roof may be compact'}
              </span>
            </div>
          </div>

          {/* Input 3: Tariff setting */}
          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
            <span className="text-slate-600 font-medium flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-slate-400" />
              Electricity Tariff Rate (Avg. UPPCL):
            </span>
            <div className="flex items-center gap-1 font-bold text-slate-800">
              <span>₹</span>
              <input
                type="number"
                step="0.1"
                min="4"
                max="15"
                value={tariff}
                onChange={(e) => setTariff(Number(e.target.value))}
                className="w-12 bg-white px-1.5 py-0.5 border border-slate-300 rounded text-right"
              />
              <span>/ kWh</span>
            </div>
          </div>

          {/* PM Surya Ghar Subsidy Callout for Residential */}
          {propertyType === 'residential' && calc.estimatedSubsidy > 0 && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-xs text-emerald-900 space-y-1">
              <div className="font-bold flex items-center gap-1.5 text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Eligible for PM Surya Ghar Subsidy: {formatINR(calc.estimatedSubsidy)}</span>
              </div>
              <p className="text-emerald-700 text-[11px]">
                Central government direct benefit transfer (DBT) directly credited to your bank account after net-meter commissioning.
              </p>
            </div>
          )}
        </div>

        {/* Right Output Dashboard (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
              Step 2: Your Estimated Solar Benefits
            </h4>

            {/* 4 Main KPI Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-6">
              
              {/* Capacity */}
              <div className="bg-gradient-to-br from-amber-50 to-amber-100/60 border border-amber-200 rounded-2xl p-4 sm:p-5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                    Recommended System
                  </span>
                  <Sun className="w-4 h-4 text-amber-600" />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900">
                  {calc.recommendedCapacityKw} <span className="text-lg font-bold text-amber-700">kW</span>
                </div>
                <p className="text-[11px] text-slate-600 mt-1 font-medium">
                  Generates ~{calc.unitsPerMonth} units/month
                </p>
              </div>

              {/* Annual Savings */}
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/60 border border-emerald-200 rounded-2xl p-4 sm:p-5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                    Estimated Savings
                  </span>
                  <IndianRupee className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-emerald-700">
                  {formatINR(calc.annualSavings)}
                </div>
                <p className="text-[11px] text-slate-600 mt-1 font-medium">
                  ~{formatINR(calc.monthlySavings)} / month saved
                </p>
              </div>

              {/* Annual Generation */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Annual Generation
                  </span>
                  <Zap className="w-4 h-4 text-amber-500" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {calc.unitsPerYear.toLocaleString('en-IN')}{' '}
                  <span className="text-sm font-semibold text-slate-500">units/yr</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1 font-medium">
                  Clean electricity generated
                </p>
              </div>

              {/* Payback Period */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Est. Payback Period
                  </span>
                  <span className="text-xs font-bold bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">ROI</span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  ~{calc.paybackPeriodYears}{' '}
                  <span className="text-sm font-semibold text-slate-500">years</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1 font-medium">
                  Free solar energy for 20+ years after
                </p>
              </div>

            </div>

            {/* Financial & Environmental Breakdown Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-900 text-white rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-[11px] font-medium">25-Year Cumulative Savings</p>
                  <p className="text-xl font-bold text-amber-400 mt-0.5">
                    {formatINR(calc.twentyFiveYearSavings)}
                  </p>
                </div>
                <div className="text-right text-[11px] text-slate-400">
                  Factoring panel life & tariff escalation
                </div>
              </div>

              <div className="bg-emerald-900 text-white rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-800 text-emerald-300 flex items-center justify-center">
                    <TreePine className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-emerald-200 text-[11px] font-medium">Carbon Offset / Year</p>
                    <p className="text-lg font-bold text-white">
                      {calc.co2SavedKgPerYear.toLocaleString()} kg CO2
                    </p>
                  </div>
                </div>
                <div className="text-right text-[11px] text-emerald-200">
                  ≈ {calc.treesEquivalentPerYear} trees planted/yr
                </div>
              </div>
            </div>

            {/* Statutory Disclaimer - Mandatory per workflow specification 9 */}
            <div className="mt-4 bg-amber-50/80 border border-amber-200/80 rounded-xl p-3.5 flex items-start gap-2.5 text-xs text-amber-950">
              <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <p className="leading-relaxed text-[11px]">
                <strong>Important Notice:</strong> All calculations are indicative. Final system capacity and savings depend on site survey, electricity tariff, solar irradiation, shading and other technical factors.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleGetProposal}
              type="button"
              className="flex-1 py-3.5 px-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold rounded-xl shadow-md text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Get Detailed Proposal for {calc.recommendedCapacityKw} kW</span>
            </button>

            <button
              onClick={handleWhatsAppShare}
              type="button"
              className="py-3.5 px-5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Share Result on WhatsApp</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
