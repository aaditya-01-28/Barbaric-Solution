import React from 'react';
import { 
  Landmark, 
  CreditCard, 
  FileText, 
  CheckCircle2, 
  ExternalLink, 
  MessageSquare, 
  ShieldCheck, 
  ArrowRight,
  Info,
  Calendar
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import { createWhatsAppUrl } from '../utils/whatsappHelper';

export const SubsidyFinancePage: React.FC = () => {
  const { openQuoteModal } = useQuote();

  const subsidyTiers = [
    { capacity: '1 kW System', subsidyAmount: '₹30,000', suitable: 'Average monthly bill around ₹1,500 – ₹2,000' },
    { capacity: '2 kW System', subsidyAmount: '₹60,000', suitable: 'Average monthly bill around ₹2,500 – ₹4,000' },
    { capacity: '3 kW System & Above', subsidyAmount: '₹78,000 (Max Cap)', suitable: 'Average monthly bill ₹4,500+ with air conditioning' },
  ];

  const sixSteps = [
    {
      step: '1',
      title: 'Apply on National Portal',
      desc: 'Register on pmsuryaghar.gov.in using your electricity DISCOM (UPPCL) Consumer Account (CA) number and mobile.',
    },
    {
      step: '2',
      title: 'Select Barbaric Solution as Vendor',
      desc: 'Engage Barbaric Solution as your certified turnkey EPC installer on the portal.',
    },
    {
      step: '3',
      title: 'Technical Feasibility & Site Survey',
      desc: 'Our engineering team conducts detailed roof structural and shadow assessment and gets DISCOM approval.',
    },
    {
      step: '4',
      title: 'Installation & Quality Verification',
      desc: 'Installation of high-efficiency DCR panels, bi-directional net-meter ready cabling, and dual chemical earthing.',
    },
    {
      step: '5',
      title: 'Inspection & Net Metering',
      desc: 'Joint inspection by UPPCL junior engineer, bidirectional meter installation, and commissioning certificate generation.',
    },
    {
      step: '6',
      title: 'Direct Subsidy DBT Credit',
      desc: 'Submit bank account details and cancelled cheque on the portal. Central government subsidy arrives via DBT within 30 days.',
    },
  ];

  const loanDocuments = [
    'Aadhaar Card & PAN Card of Property Owner',
    'Latest 3 Months UPPCL Electricity Bill (paid receipt)',
    'Property Ownership Proof (Registry / Mutation / House Tax receipt)',
    'Last 6 Months Bank Statement',
    'Passport Size Photographs',
  ];

  return (
    <div className="space-y-0">
      {/* Header */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            <Landmark className="w-3.5 h-3.5" />
            <span>Government Subsidies & Easy EMI Financing</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            PM Surya Ghar Yojana & Solar Financing Assistance
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            Switching to solar has never been more affordable. Avail up to ₹78,000 direct central government subsidy and attractive collateral-free bank solar loans with EMIs often lower than your existing electricity bill.
          </p>
        </div>
      </section>

      {/* Subsidy Tiers Table */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
              Central Financial Assistance (CFA)
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              PM Surya Ghar: Muft Bijli Yojana Subsidy Breakdown
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Applicable for residential rooftop solar installations across Uttar Pradesh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {subsidyTiers.map((tier, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center shadow-xs">
                <span className="text-xs uppercase font-bold text-slate-500 tracking-wider block mb-1">
                  {tier.capacity}
                </span>
                <span className="text-3xl font-black text-emerald-600 block mb-2">
                  {tier.subsidyAmount}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {tier.suitable}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-3 text-xs text-amber-950">
            <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-amber-900 mb-0.5">Official Scheme Policy Note:</p>
              <p className="leading-relaxed text-[11px]">
                Government subsidy amounts, rules, and eligibility caps are governed by the Ministry of New and Renewable Energy (MNRE) and are subject to official portal policy updates. Barbaric Solution coordinates end-to-end technical filings according to current live regulations to guarantee timely disbursement.
              </p>
              <a
                href="https://pmsuryaghar.gov.in"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-emerald-700 hover:underline font-bold mt-2"
              >
                <span>Visit Official PM Surya Ghar National Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Step Application Journey */}
      <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
              Step-by-Step Roadmap
            </span>
            <h2 className="text-3xl font-black text-slate-900">
              The 6-Step Rooftop Solar & Subsidy Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sixSteps.map((s) => (
              <div
                key={s.step}
                className="bg-white border border-slate-200 rounded-2xl p-6 relative hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-700 font-black text-lg flex items-center justify-center mb-4">
                  {s.step}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solar Financing & Bank Loans Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                <CreditCard className="w-3.5 h-3.5" />
                <span>Zero Collateral Solar Financing</span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Solar Bank Loan & Easy EMI Options
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                Why pay for your solar system all at once? Leading public and private sector banks (SBI, Canara Bank, Union Bank, HDFC, ICICI) now offer collateral-free rooftop solar loans with low interest rates (~7% p.a.) under priority sector lending.
              </p>

              <div className="mt-6 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Key Financing Highlights:
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Tenure up to 7 to 10 years for low monthly EMIs.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>The electricity bill you save every month directly pays off the EMI!</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Up to 90% project financing available for eligible applicants.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => openQuoteModal({ message: 'Requesting Solar Financing and EMI assistance details' })}
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-sm shadow-md transition-all cursor-pointer"
                >
                  CHECK FINANCE OPTIONS
                </button>
              </div>
            </div>

            {/* Required Documents Checklist */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-500" />
                <span>Required Documents Checklist</span>
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Keep these documents ready for quick 48-hour solar loan pre-approval:
              </p>

              <div className="space-y-3">
                {loanDocuments.map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-bold">
                      ✓
                    </div>
                    <span>{doc}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200 text-center">
                <p className="text-xs text-slate-500 mb-3">
                  Barbaric Solution provides full document assistance and vendor quotations for your loan file.
                </p>
                <a
                  href={createWhatsAppUrl({ customMessage: 'Hello Barbaric Solution, I would like information regarding Solar Bank Loans and EMI financing options.' })}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs py-2.5 px-4 rounded-xl transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Ask Loan Officer on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
