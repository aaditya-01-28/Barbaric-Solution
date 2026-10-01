import React from 'react';
import { 
  Wrench, 
  Compass, 
  Layers, 
  Cpu, 
  FileCheck, 
  Activity, 
  AlertCircle, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2,
  CalendarCheck
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import { createWhatsAppUrl } from '../utils/whatsappHelper';

export const ServicesPage: React.FC = () => {
  const { openQuoteModal } = useQuote();

  const services = [
    {
      id: 'epc',
      title: 'Solar EPC (Turnkey)',
      subtitle: 'Engineering, Procurement & Construction',
      desc: 'Complete end-to-end solar solutions from initial roof assessment to procurement, mechanical installation, electrical wiring, and commissioning.',
      icon: Cpu,
      color: 'bg-amber-500/10 text-amber-600',
    },
    {
      id: 'installation',
      title: 'Professional Installation',
      subtitle: 'Certified solar technicians',
      desc: 'Precision assembly of hot-dip GI structures, module clamping, DC cable trunking, chemical earthing pits, and AC/DC distribution boxes.',
      icon: Wrench,
      color: 'bg-emerald-500/10 text-emerald-600',
    },
    {
      id: 'survey',
      title: 'Comprehensive Site Survey',
      subtitle: 'Roof & electrical audit',
      desc: 'On-site physical inspection measuring roof tilt, true South azimuth, shadow obstacles (parapet walls, water tanks, trees), and structural integrity.',
      icon: Compass,
      color: 'bg-blue-500/10 text-blue-600',
    },
    {
      id: 'design',
      title: 'Solar Design & Sizing',
      subtitle: '3D CAD & PVSyst simulations',
      desc: 'Advanced computer simulations calculating monthly unit generation, string optimization, shading losses, and expected annual yield.',
      icon: Layers,
      color: 'bg-purple-500/10 text-purple-600',
    },
    {
      id: 'netmetering',
      title: 'Net Metering Assistance',
      subtitle: 'UPPCL liaison & documentation',
      desc: 'Full assistance with UPPCL portal submission, feasibility approval, bi-directional meter testing, and final synchronization with the grid.',
      icon: FileCheck,
      color: 'bg-rose-500/10 text-rose-600',
    },
    {
      id: 'amc',
      title: 'Annual Maintenance Contract (AMC)',
      subtitle: 'Preventive care & uptime assurance',
      desc: 'Scheduled physical module cleaning, structural fastener torque audits, electrical continuity checks, and inverter diagnostics.',
      icon: CalendarCheck,
      color: 'bg-teal-500/10 text-teal-600',
    },
    {
      id: 'monitoring',
      title: 'Solar Plant Monitoring',
      subtitle: 'Real-time telemetry & alerts',
      desc: 'Remote performance surveillance via mobile apps and cloud portals. Instant notifications if any string underperforms or goes offline.',
      icon: Activity,
      color: 'bg-indigo-500/10 text-indigo-600',
    },
    {
      id: 'troubleshooting',
      title: 'System Troubleshooting & Repair',
      subtitle: 'Support for existing third-party plants',
      desc: 'Expert diagnostic support for existing solar installations facing low generation, inverter trip errors, faulty wiring, or grounding faults.',
      icon: AlertCircle,
      color: 'bg-orange-500/10 text-orange-600',
    },
  ];

  return (
    <div className="space-y-0">
      {/* Header */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" />
            <span>Our Solar Services</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Professional Engineering & Lifecycle Solar Services
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            From preliminary 3D shadow analysis to turnkey EPC commissioning, UPPCL net-metering liaison, and dedicated local AMC maintenance.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((srv) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.id}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl hover:border-amber-400 transition-all"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl ${srv.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{srv.title}</h3>
                    <p className="text-xs font-semibold text-emerald-700 mb-3">{srv.subtitle}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{srv.desc}</p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-slate-200">
                    <button
                      onClick={() => openQuoteModal({ message: `Service request: ${srv.title}` })}
                      type="button"
                      className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Book this Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Maintenance & Troubleshooting CTA */}
      <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Have an Existing Solar Plant with Low Generation in Lucknow?
          </h3>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Our diagnostic team inspects third-party installed systems for micro-cracks, loose MC4 connectors, inverter error codes, and earthing degradation to restore optimal kWh generation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => openQuoteModal({ message: 'Requesting troubleshooting/inspection for existing solar plant' })}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition-all cursor-pointer"
            >
              Request Plant Health Checkup
            </button>
            <a
              href={createWhatsAppUrl({ customMessage: 'Hello Barbaric Solution, I am facing an issue with my existing solar plant. Could you please schedule a technical service visit?' })}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-3 rounded-xl text-sm transition-colors flex items-center gap-2"
            >
              <span>WhatsApp Support Desk</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
