import React from 'react';
import { 
  Compass, 
  Layers, 
  Cpu, 
  FileCheck, 
  Wrench, 
  Gauge, 
  Headphones, 
  ShieldCheck 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const trustPoints = [
    {
      title: 'Professional Site Survey',
      desc: 'Accurate physical inspection measuring shadow profiles, roof structural strength, orientation, and cable routing.',
      icon: Compass,
      color: 'bg-amber-500/10 text-amber-600',
    },
    {
      title: 'Customized Solar Design',
      desc: '3D CAD shadow analysis ensuring optimized module placement for maximum solar irradiance and daily kWh generation.',
      icon: Layers,
      color: 'bg-emerald-500/10 text-emerald-600',
    },
    {
      title: 'Tier-1 Quality Equipment',
      desc: 'Only BIS-certified Tier-1 Mono PERC & TOPCon panels, European efficiency inverters, and IP65 protection gear.',
      icon: Cpu,
      color: 'bg-blue-500/10 text-blue-600',
    },
    {
      title: 'Transparent Quotation',
      desc: 'Itemized Bill of Materials (BOM) with zero hidden fees. Clear breakdown of panels, inverters, cables, and earthing.',
      icon: FileCheck,
      color: 'bg-purple-500/10 text-purple-600',
    },
    {
      title: 'Professional Installation',
      desc: 'Installed by trained solar technicians following strict MNRE safety protocols, hot-dip GI structures, and weatherproofing.',
      icon: Wrench,
      color: 'bg-rose-500/10 text-rose-600',
    },
    {
      title: 'System Testing & Commissioning',
      desc: 'Thorough electrical inspection, string testing, megger insulation checks, and end-to-end UPPCL net-metering liaison.',
      icon: Gauge,
      color: 'bg-cyan-500/10 text-cyan-600',
    },
    {
      title: 'Dedicated After-Sales Support',
      desc: 'Prompt local service response within 24 hours right here in Lucknow for any generation anomaly or technical query.',
      icon: Headphones,
      color: 'bg-indigo-500/10 text-indigo-600',
    },
    {
      title: 'AMC & Preventive Maintenance',
      desc: 'Periodic cleaning guidelines, thermal imaging diagnostics, inverter maintenance, and regular generation health checks.',
      icon: ShieldCheck,
      color: 'bg-amber-500/10 text-amber-600',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            Trust & Engineering Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Barbaric Solution?
          </h2>
          <p className="text-slate-600 text-base mt-3">
            We focus on honest engineering, proven components, and dependable local execution across Lucknow — without misleading gimmicks or inflated claims.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow flex flex-col"
              >
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
