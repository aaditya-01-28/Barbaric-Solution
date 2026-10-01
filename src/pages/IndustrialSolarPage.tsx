import React from 'react';
import { 
  Factory, 
  Layers, 
  Cpu, 
  FileSpreadsheet, 
  Wrench, 
  Gauge, 
  LineChart, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import { createWhatsAppUrl } from '../utils/whatsappHelper';

export const IndustrialSolarPage: React.FC = () => {
  const { openQuoteModal } = useQuote();

  const epcProcess = [
    {
      step: '01',
      title: 'Site Survey & Structural Audit',
      desc: 'Topographic assessment, drone imagery, roof load-bearing inspection, shadow profiling, and electrical HT substation interconnection study.',
      icon: Layers,
    },
    {
      step: '02',
      title: 'Load Analysis & Energy Profiling',
      desc: 'Analysis of 12-month TOD (Time of Day) electricity bills, maximum contract demand (kVA), harmonics, and daytime factory operational curves.',
      icon: LineChart,
    },
    {
      step: '03',
      title: 'Solar Design & 3D Engineering',
      desc: 'Optimized module layouts on PVSyst and AutoCAD, STAAD.Pro structural wind load certification, string sizing, and DC cable loss minimization.',
      icon: Cpu,
    },
    {
      step: '04',
      title: 'Financial & Techno-Commercial Proposal',
      desc: 'Itemized BOM, CAPEX/OPEX financial modeling, IRR, NPV, Levelized Cost of Electricity (LCOE), and tax depreciation analysis.',
      icon: FileSpreadsheet,
    },
    {
      step: '05',
      title: 'Engineering & Procurement (EPC)',
      desc: 'Direct factory procurement of Tier-1 DCR/Non-DCR TOPCon modules, central or high-power string inverters, and hot-dip GI / aluminium mounting.',
      icon: Wrench,
    },
    {
      step: '06',
      title: 'Installation & Mechanical Assembly',
      desc: 'Fast, non-disruptive installation on industrial sheds using leak-proof standing seam clamps, walkway lifelines, and strict EHS safety compliance.',
      icon: Factory,
    },
    {
      step: '07',
      title: 'Testing & Commissioning',
      desc: 'String megger testing, IV-curve tracing, earth resistance testing, CEIG electrical inspector approval, and HT net-metering grid synchronization.',
      icon: Gauge,
    },
    {
      step: '08',
      title: '24/7 Monitoring & Long-Term AMC',
      desc: 'IoT cloud telemetry monitoring, weather sensor stations, periodic module cleaning, predictive thermography, and uptime SLAs.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="space-y-0">
      {/* Header */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            <Factory className="w-3.5 h-3.5" />
            <span>Industrial Mega Solar EPC (100 kW to 1 MW+)</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            End-to-End Solar EPC Solutions for Heavy Industry
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
            Turnkey engineering, procurement, and construction for manufacturing plants, cold storage units, textile mills, agro-processing facilities, and logistics parks across Uttar Pradesh.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => openQuoteModal({ solarRequirement: 'industrial', propertyType: 'factory' })}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-sm transition-all cursor-pointer"
            >
              Request Industrial Feasibility Study
            </button>
            <a
              href={createWhatsAppUrl({ customMessage: 'Industrial Solar EPC enquiry (100 kW+ requirement). Please schedule a site technical meeting.' })}
              target="_blank"
              rel="noreferrer"
              className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-5 py-3.5 rounded-xl text-sm border border-slate-700"
            >
              Direct WhatsApp with Project Head
            </a>
          </div>
        </div>
      </section>

      {/* 8-Stage EPC Workflow Process */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
              Methodology & Execution
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our 8-Step Turnkey Industrial EPC Workflow
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Every megawatt project is executed with rigorous engineering, zero factory downtime, and full regulatory CEIG & DISCOM synchronization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {epcProcess.map((proc) => {
              const Icon = proc.icon;
              return (
                <div
                  key={proc.step}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg hover:border-amber-400 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-amber-500 font-mono">
                        {proc.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {proc.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {proc.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industrial Key Differentiators */}
      <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700">
            <h4 className="font-bold text-lg text-white mb-2">HT Net Metering & CEIG Approvals</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              We handle the complete statutory liaison with the Chief Electrical Inspector to Government (CEIG) and UPPCL for 11kV / 33kV grid interconnection.
            </p>
          </div>
          <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700">
            <h4 className="font-bold text-lg text-white mb-2">Leak-Proof Non-Penetrative Mounts</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              For industrial metal and trapezoidal sheet roofs, we deploy specialized standing-seam anodized aluminium clamps with zero roof puncture.
            </p>
          </div>
          <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700">
            <h4 className="font-bold text-lg text-white mb-2">Guaranteed Performance Ratios (PR)</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Industrial plants are designed for PR &gt; 78% with Tier-1 bifacial modules, smart inverters, Class 1 pyranometers, and weather stations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
