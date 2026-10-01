import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Sun, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Info, 
  IndianRupee,
  ShieldAlert
} from 'lucide-react';
import { RESIDENTIAL_SYSTEM_TIERS } from '../data/mockData';
import { useQuote } from '../context/QuoteContext';
import { SolarCalculator } from '../components/calculator/SolarCalculator';

export const ResidentialSolarPage: React.FC = () => {
  const { openQuoteModal } = useQuote();

  return (
    <div className="space-y-0">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            <Home className="w-3.5 h-3.5" />
            <span>Rooftop Solar for Homes in Lucknow</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Home Solar Power Systems (2 kW to 10 kW)
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            Turn your terrace into a clean power station. Save up to 90% on electricity bills and enjoy up to ₹78,000 in direct PM Surya Ghar central subsidies.
          </p>
        </div>
      </section>

      {/* Comparison Matrix Table */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Popular Home Solar Sizing Guide
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Select the system capacity matching your household air conditioning, appliances, and available roof space.
            </p>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-md">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-4 px-4 font-bold">System Capacity</th>
                  <th className="py-4 px-4 font-bold">Suitable For</th>
                  <th className="py-4 px-4 font-bold">Approx. Monthly Generation</th>
                  <th className="py-4 px-4 font-bold">Estimated Monthly Savings</th>
                  <th className="py-4 px-4 font-bold">Roof Area Needed</th>
                  <th className="py-4 px-4 font-bold">PM Surya Subsidy</th>
                  <th className="py-4 px-4 font-bold text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {RESIDENTIAL_SYSTEM_TIERS.map((tier) => (
                  <tr key={tier.capacity} className={`hover:bg-amber-50/40 transition-colors ${tier.popular ? 'bg-amber-50/20' : ''}`}>
                    <td className="py-4 px-4">
                      <div className="font-extrabold text-base text-slate-900 flex items-center gap-1.5">
                        <Sun className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>{tier.capacity}</span>
                      </div>
                      {tier.popular && (
                        <span className="inline-block bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full mt-1">
                          Most Popular
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-slate-700 text-xs max-w-xs font-medium">
                      {tier.suitableFor}
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-slate-800 text-xs">
                      {tier.approxMonthlyGen}
                    </td>
                    <td className="py-4 px-4 font-mono font-black text-emerald-600 text-sm">
                      {tier.estimatedMonthlySavings}
                    </td>
                    <td className="py-4 px-4 text-xs font-medium text-slate-600">
                      {tier.requiredRoofArea}
                    </td>
                    <td className="py-4 px-4 text-xs font-bold text-blue-700">
                      {tier.subsidyEligible}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <button
                        onClick={() => openQuoteModal({ requiredCapacity: tier.capacity.toLowerCase() as any, propertyType: 'home' })}
                        type="button"
                        className="px-3.5 py-2 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-xs rounded-xl transition-all cursor-pointer whitespace-nowrap"
                      >
                        Get Quote
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mandatory Disclaimers Note per workflow specification 6 */}
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-amber-950">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-xs text-amber-900">Important Technical Estimation Note:</p>
              <p className="text-[11px] leading-relaxed mt-0.5">
                All generation and savings values shown on this website are estimated approximations. Actual kilowatt-hour (kWh) output and savings vary based on geographical location, roof orientation (true South tilt), ambient temperature, local cloud cover, shading from surrounding structures/trees, and applicable UPPCL electricity slab tariffs. A thorough physical site survey will determine your exact output.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Embedded Sizing Calculator */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
              Custom Sizing
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Calculate Your Custom Home Solar System
            </h3>
          </div>
          <SolarCalculator initialBill={5500} initialRoof={450} />
        </div>
      </section>

      {/* Elevated Structure Highlight */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-2">
              Roof Space Preservation
            </span>
            <h3 className="text-3xl font-black text-slate-900">
              Worried About Losing Terrace Space? Choose Elevated GI Pergola Structures!
            </h3>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              At Barbaric Solution, we design custom 6 ft to 8 ft elevated hot-dip galvanized mounting structures. You can continue using your roof for evening walks, family gatherings, or rooftop gardening, while the solar panels act as a protective waterproof shade canopy!
            </p>
            <ul className="mt-4 space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Heavy-duty STAAD.Pro structural wind load certified (up to 150 km/h)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>80-micron hot-dip galvanized steel prevents rusting for 25+ years</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero terrace puncturing / advanced chemical anchoring options</span>
              </li>
            </ul>

            <div className="pt-6">
              <button
                onClick={() => openQuoteModal({ propertyType: 'home', message: 'Interested in Elevated GI Structure for residential terrace' })}
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-md cursor-pointer"
              >
                Inquire for Elevated Structure
              </button>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80"
              alt="Elevated Rooftop Structure"
              className="w-full h-80 sm:h-96 object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
