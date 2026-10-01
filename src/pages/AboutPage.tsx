import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sun, 
  Target, 
  Eye, 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  MapPin, 
  ArrowRight,
  Zap,
  Users
} from 'lucide-react';
import { COMPANY_INFO, STATS } from '../config/companyInfo';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { useQuote } from '../context/QuoteContext';

export const AboutPage: React.FC = () => {
  const { openQuoteModal } = useQuote();

  const corePillars = [
    {
      title: 'Quality',
      desc: 'We strictly deploy Tier-1 high-efficiency Mono PERC and TOPCon modules, certified inverters, and hot-dip galvanized mounting structures that withstand extreme UP weather.',
      step: '01',
    },
    {
      title: 'Transparency',
      desc: 'Clear, itemized Bill of Materials (BOM) with zero concealed costs. Customers know exactly what panel brands, inverter models, and DC/AC cables are being installed on their roof.',
      step: '02',
    },
    {
      title: 'Installation',
      desc: 'Executed by dedicated engineering professionals following strict MNRE safety compliance, proper chemical earthing, and rigorous testing before grid synchronization.',
      step: '03',
    },
    {
      title: 'Support',
      desc: 'Our commitment does not end with installation. We handle complete UPPCL net-metering liaison and provide proactive local maintenance and generation monitoring.',
      step: '04',
    },
  ];

  return (
    <div className="space-y-0">
      {/* Page Header */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1600&q=80"
            alt="Barbaric Solution Solar Rooftop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            About Barbaric Solution
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Empowering Lucknow with Clean, Reliable Solar Energy
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A trusted solar EPC company dedicated to engineering cost-effective, high-yield rooftop solar power plants for homes, businesses, and industrial facilities.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-900 border-y border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {STATS.map((stat, idx) => (
              <div key={idx} className="p-2">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">{stat.value}</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-2">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Complete Solar Energy Solutions Built on Trust & Engineering
              </h2>
              <div className="text-slate-600 text-sm sm:text-base space-y-4 mt-4 leading-relaxed">
                <p>
                  <strong>Barbaric Solution</strong> is a premier solar EPC and solutions company delivering high-efficiency rooftop and ground-mount solar power systems for residential, commercial, and industrial clients.
                </p>
                <p>
                  Headquartered at Chinhat, Lucknow, our team bridges the gap between complex solar technology and everyday utility savings. We handle everything from initial roof shadow analysis and structural CAD design to DISCOM net-metering approvals and central government PM Surya Ghar subsidy processing.
                </p>
                <p>
                  We believe solar energy is an investment that should generate reliable returns for 25+ years. That's why we don't cut corners on wiring gauges, surge protection devices (SPDs), or galvanized mounting structures.
                </p>
              </div>

              <div className="pt-6 flex flex-wrap gap-4">
                <button
                  onClick={() => openQuoteModal()}
                  className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-xl shadow-md text-sm transition-all cursor-pointer"
                >
                  Consult Our Engineering Team
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-sm transition-colors"
                >
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>Visit Chinhat Office</span>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1545209581-22920f7823f6?auto=format&fit=crop&w=1000&q=80"
                  alt="Solar Installation Engineering"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-5 rounded-2xl shadow-xl max-w-xs border border-slate-800 hidden sm:block">
                <p className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-1">Local Lucknow EPC</p>
                <p className="text-xs text-slate-300">
                  On-site engineering surveys across Chinhat, Gomti Nagar, Indira Nagar, and all UP districts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision Card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-5">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">Our Vision</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To expand access to clean, reliable, and sustainable solar energy solutions across communities. We aim to make rooftop solar accessible, high-performing, and financially rewarding for every property owner in Lucknow and across North India.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-amber-700">
                <Zap className="w-4 h-4" />
                <span>Sustainable, Decarbonized Future</span>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">Our Mission</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To provide practical, reliable, and cost-effective solar energy systems tailored precisely to each client's unique energy profile. We deliver transparent quotations, hassle-free net-metering coordination, and prompt after-sales support so every customer maximizes their ROI.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                <CheckCircle2 className="w-4 h-4" />
                <span>Zero Compromise on Quality & Safety</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Focus Pillars */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-2">
              Our 4 Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Quality → Transparency → Installation → Support
            </h2>
            <p className="text-slate-600 text-base mt-2">
              These four core principles guide every residential and commercial project we undertake at Barbaric Solution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePillars.map((pillar) => (
              <div
                key={pillar.step}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-amber-400 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-amber-500/40 block mb-2">
                    {pillar.step}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust points */}
      <WhyChooseUs />
    </div>
  );
};
