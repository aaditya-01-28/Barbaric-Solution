import React, { useState } from 'react';
import { 
  BatteryCharging, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Cpu, 
  Flame, 
  CheckCircle2, 
  ArrowRight,
  Calculator,
  MessageSquare
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import { createWhatsAppUrl } from '../utils/whatsappHelper';

export const BatteryPage: React.FC = () => {
  const [backupHours, setBackupHours] = useState<number>(4);
  const [backupLoadKw, setBackupLoadKw] = useState<number>(5);
  const { openQuoteModal } = useQuote();

  // Storage formula: (Load in kW * Hours of backup) / 0.85 (DoD factor)
  const estimatedStorageKwh = Number(((backupLoadKw * backupHours) / 0.85).toFixed(1));
  const suggestedPackCount = Math.ceil(estimatedStorageKwh / 5.12);

  const batterySolutions = [
    {
      title: 'Lithium Iron Phosphate (LiFePO4)',
      subtitle: 'Safe, durable, high thermal stability for Indian climates',
      features: [
        '6,000+ deep cycles (15+ year operational lifespan)',
        'Zero thermal runaway risk compared to NMC chemistry',
        'Wall-mount & server-rack modular expansion (5.12 kWh modules)',
        'Built-in Intelligent BMS with active cell balancing',
      ],
      badge: 'Residential & Light Commercial',
      badgeColor: 'bg-emerald-100 text-emerald-800',
    },
    {
      title: 'Hybrid Battery Bank Systems',
      subtitle: 'Integrated solar inverter + storage for whole-building UPS',
      features: [
        '< 10ms seamless transfer switch during power outages',
        'Automatic solar self-consumption priority during peak tariff hours',
        'Compatible with both Single Phase (230V) and 3-Phase (415V)',
        'Mobile app monitoring of battery charge %, health, and temperatures',
      ],
      badge: 'Clinics, Offices & Villas',
      badgeColor: 'bg-purple-100 text-purple-800',
    },
    {
      title: 'Commercial & Industrial BESS (50 kWh – 1 MWh+)',
      subtitle: 'Turnkey containerized and cabinet storage systems',
      features: [
        'Demand charge reduction & peak shaving',
        'Direct replacement for high-cost diesel gensets (DG sets)',
        'Integrated HVAC cooling and aerosol fire suppression',
        'Utility-grade SCADA telemetry and Modbus communication',
      ],
      badge: 'Hospitals, Factories & Cold Storage',
      badgeColor: 'bg-amber-100 text-amber-800',
    },
  ];

  const handleWhatsApp = () => {
    const wa = createWhatsAppUrl({
      capacity: `${estimatedStorageKwh} kWh Storage (${suggestedPackCount}x 5.12kWh LiFePO4 packs)`,
      systemType: 'Hybrid & Battery Storage',
      customMessage: `Battery Quotation Request. Required Backup: ${backupHours} Hours, Backup Load: ${backupLoadKw} kW. Est. Storage: ${estimatedStorageKwh} kWh.`,
    });
    window.open(wa, '_blank');
  };

  return (
    <div className="space-y-0">
      {/* Header */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            <BatteryCharging className="w-3.5 h-3.5" />
            <span>Advanced Solar Battery & BESS Solutions</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Uninterrupted Clean Power with Lithium Storage
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
            Eliminate noisy diesel generators and frequent grid outages. High-cycle LiFePO4 batteries and Commercial BESS engineered for 24/7 reliability in Lucknow.
          </p>
        </div>
      </section>

      {/* Interactive Battery Sizing Engine per specification 5 */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                Simple Rule-of-Thumb Sizing
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                How Much Battery Storage Do You Need?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Select your required backup hours and load to see recommended battery capacity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Controls */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center text-xs font-bold text-slate-300 mb-2">
                    <span>Required Backup Duration:</span>
                    <span className="text-amber-400 font-black text-sm">{backupHours} Hours</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={12}
                    step={1}
                    value={backupHours}
                    onChange={(e) => setBackupHours(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>1 Hr</span>
                    <span>4 Hrs (Standard)</span>
                    <span>8 Hrs</span>
                    <span>12 Hrs</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs font-bold text-slate-300 mb-2">
                    <span>Continuous Backup Load:</span>
                    <span className="text-emerald-400 font-black text-sm">{backupLoadKw} kW</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={30}
                    step={1}
                    value={backupLoadKw}
                    onChange={(e) => setBackupLoadKw(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>1 kW (Lights/Fans)</span>
                    <span>5 kW (1-2 ACs)</span>
                    <span>15 kW</span>
                    <span>30 kW (Commercial)</span>
                  </div>
                </div>
              </div>

              {/* Live Output Card */}
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-700 text-center space-y-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-medium block">
                    Recommended Battery Storage
                  </span>
                  <span className="text-4xl font-black text-amber-400 block mt-1">
                    {estimatedStorageKwh} <span className="text-xl text-slate-300">kWh</span>
                  </span>
                  <span className="text-xs text-emerald-400 font-semibold block mt-1">
                    ≈ {suggestedPackCount}x 5.12 kWh LiFePO4 Modules
                  </span>
                </div>

                <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 text-left space-y-1">
                  <p>• Chemistry: Safe LiFePO4 (Lithium Iron Phosphate)</p>
                  <p>• Depth of Discharge: 85% recommended safety buffer</p>
                  <p>• Cycle Life: 6,000+ Cycles (15+ Years)</p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => openQuoteModal({ 
                      solarRequirement: 'hybrid', 
                      message: `Battery Quote: Need ${backupHours} hrs backup for ${backupLoadKw} kW load (~${estimatedStorageKwh} kWh storage).` 
                    })}
                    className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold rounded-xl text-xs sm:text-sm cursor-pointer shadow-md transition-all"
                  >
                    GET BATTERY QUOTATION
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700/80 flex justify-center">
              <button
                onClick={handleWhatsApp}
                type="button"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-xs font-semibold cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Quick Discuss this Battery Configuration on WhatsApp →</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Available Solutions */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-slate-900">
              Our Energy Storage Technologies
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              From compact residential wall-packs to megawatt-scale industrial containers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {batterySolutions.map((sol, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <span className={`inline-block text-[11px] font-bold px-2.5 py-1 rounded-full mb-3 ${sol.badgeColor}`}>
                    {sol.badge}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{sol.title}</h3>
                  <p className="text-xs text-slate-500 mb-4">{sol.subtitle}</p>

                  <ul className="space-y-2 text-xs text-slate-600">
                    {sol.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-200">
                  <button
                    onClick={() => openQuoteModal({ solarRequirement: 'hybrid', message: `Interested in ${sol.title}` })}
                    className="w-full py-2.5 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
                  >
                    Enquire for {sol.title.split(' ')[0]}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
