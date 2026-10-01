import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building2, Factory, BatteryCharging, ArrowRight, CheckCircle } from 'lucide-react';
import { useQuote } from '../../context/QuoteContext';

export const QuickSegments: React.FC = () => {
  const { openQuoteModal } = useQuote();

  const segments = [
    {
      id: 'residential',
      title: 'Residential Solar',
      subTitle: 'Reduce household electricity bills with rooftop solar.',
      icon: Home,
      range: '2 kW – 10 kW',
      color: 'from-amber-500 to-orange-500',
      badge: 'Subsidy Eligible',
      badgeColor: 'bg-emerald-100 text-emerald-800',
      points: [
        'Cut home electricity bills by up to 90%',
        'PM Surya Ghar subsidy up to ₹78,000',
        'Net-metering for excess generation export',
        'Elevated structure options to save roof space',
      ],
      link: '/residential-solar',
      systemType: 'on-grid' as const,
      propertyType: 'home' as const,
    },
    {
      id: 'commercial',
      title: 'Commercial Solar',
      subTitle: 'Lower operating power expenses for businesses.',
      icon: Building2,
      range: '10 kW – 100 kW+',
      color: 'from-blue-600 to-cyan-600',
      badge: 'Accelerated Depreciation',
      badgeColor: 'bg-blue-100 text-blue-800',
      points: [
        'For Shops, Offices, Hospitals, Hotels & Schools',
        '40% tax depreciation benefits for businesses',
        'Quick 3-4 year return on investment (ROI)',
        '3-phase smart remote generation monitoring',
      ],
      link: '/commercial-solar',
      systemType: 'commercial' as const,
      propertyType: 'office' as const,
    },
    {
      id: 'industrial',
      title: 'Industrial Solar',
      subTitle: 'High-capacity rooftop & ground-mount solar plants.',
      icon: Factory,
      range: '100 kW – 1 MW+',
      color: 'from-slate-700 to-slate-900',
      badge: 'Full Turnkey EPC',
      badgeColor: 'bg-amber-100 text-amber-800',
      points: [
        'End-to-end design, procurement & execution',
        'STAAD.Pro load analysis for factory tin sheds',
        'High-voltage HT net-metering synchronization',
        'Comprehensive multi-year AMC contracts',
      ],
      link: '/industrial-solar',
      systemType: 'industrial' as const,
      propertyType: 'factory' as const,
    },
    {
      id: 'hybrid',
      title: 'Hybrid & Battery',
      subTitle: 'Solar + LiFePO4 battery uninterrupted backup systems.',
      icon: BatteryCharging,
      range: '5.12 kWh – 100+ kWh',
      color: 'from-emerald-600 to-teal-600',
      badge: 'Zero Power Cuts',
      badgeColor: 'bg-purple-100 text-purple-800',
      points: [
        'Solar + Grid + LiFePO4 Lithium Battery Bank',
        'Seamless < 10ms power transfer during outages',
        '6,000+ cycle life (15+ years battery durability)',
        'Diesel generator replacement for commercial setups',
      ],
      link: '/battery-bess',
      systemType: 'hybrid' as const,
      propertyType: 'home' as const,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            Tailored Solar Energy Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Choose the Right Solar Power Solution
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Whether for your home, commercial establishment, or large-scale factory, Barbaric Solution delivers engineered systems matching your load and roof area.
          </p>
        </div>

        {/* 4 Large Customer Segment Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((seg) => {
            const IconComponent = seg.icon;
            return (
              <div
                key={seg.id}
                className="group relative bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${seg.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${seg.badgeColor}`}>
                      {seg.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {seg.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700 mt-1 mb-2">
                    {seg.subTitle}
                  </p>
                  <p className="text-xs font-mono text-slate-500 font-semibold mb-4">
                    Typical Capacity: <span className="text-slate-800">{seg.range}</span>
                  </p>

                  {/* Key Benefits */}
                  <ul className="space-y-2 mb-6 text-xs text-slate-600">
                    {seg.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-200/80 space-y-2">
                  <Link
                    to={seg.link}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs rounded-xl border border-slate-300 transition-colors"
                  >
                    <span>View System Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    onClick={() => openQuoteModal({ solarRequirement: seg.systemType, propertyType: seg.propertyType })}
                    type="button"
                    className="w-full py-2 px-3 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    Enquire for {seg.title.split(' ')[0]}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
