import React from 'react';
import { Calculator, Sparkles, HelpCircle } from 'lucide-react';
import { SolarCalculator } from '../components/calculator/SolarCalculator';

export const CalculatorPage: React.FC = () => {
  const faqs = [
    {
      q: 'How are the monthly units and recommended kW calculated?',
      a: 'In Uttar Pradesh (Lucknow region), 1 kW of installed solar panels typically generates 4.15 to 4.3 units (kWh) per day, resulting in approximately 125 units per month under unshaded conditions. We divide your estimated monthly unit consumption by 125 to determine the ideal system capacity.',
    },
    {
      q: 'How much roof area is needed per kilowatt?',
      a: 'Modern high-efficiency 540W to 580W Mono PERC and TOPCon modules require approximately 80 to 90 square feet of shadow-free roof area per 1 kW.',
    },
    {
      q: 'How does the PM Surya Ghar Muft Bijli Yojana subsidy work?',
      a: 'Under current central government guidelines, residential rooftop solar systems receive ₹30,000 for 1 kW, ₹60,000 for 2 kW, and a maximum flat subsidy of ₹78,000 for systems of 3 kW and above. The subsidy is directly credited to your Aadhaar-linked bank account following net-meter commissioning.',
    },
    {
      q: 'Why are these calculations indicative?',
      a: 'Actual generation depends on several local technical variables: true South roof orientation, tilt angle (optimized between 12° and 24° for Lucknow), presence of chimneys, water tanks or adjacent buildings casting shadows, seasonal weather, and applicable DISCOM tariff slabs.',
    },
  ];

  return (
    <div className="space-y-0">
      {/* Header */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Financial Modeler</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Solar Savings & Payback Calculator
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            Estimate your recommended solar capacity, 25-year cumulative electricity savings, subsidy eligibility, and payback period in seconds.
          </p>
        </div>
      </section>

      {/* Main Interactive Tool */}
      <section className="py-16 sm:py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SolarCalculator initialBill={25000} initialRoof={2000} />
        </div>
      </section>

      {/* Calculator FAQs */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
              Methodology & Transparency
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Frequently Asked Questions About Solar Calculations
            </h3>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
