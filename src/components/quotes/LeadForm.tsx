import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, ShieldCheck, Zap } from 'lucide-react';
import type { LeadFormData, PropertyType, SolarSystemType, SystemCapacity } from '../../types';
import { useQuote } from '../../context/QuoteContext';
import { createWhatsAppUrl } from '../../utils/whatsappHelper';

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  defaultSystemType?: SolarSystemType;
  defaultCapacity?: SystemCapacity;
}

export const LeadForm: React.FC<LeadFormProps> = ({
  title = 'Request an Itemized Solar Quotation',
  subtitle = 'Get accurate system sizing, equipment breakdown, and PM Surya Ghar subsidy details within 24 hours.',
  defaultSystemType = 'on-grid',
  defaultCapacity = 'dont-know',
}) => {
  const { submitLead } = useQuote();

  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    mobile: '',
    email: '',
    city: 'Lucknow',
    propertyType: 'home',
    solarRequirement: defaultSystemType,
    monthlyElectricityBill: '',
    requiredCapacity: defaultCapacity,
    roofArea: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<LeadFormData | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile) {
      alert('Please provide your name and mobile number.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await submitLead(formData);
      setSubmittedLead(res.lead);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const propertyOptions: { value: PropertyType; label: string }[] = [
    { value: 'home', label: '🏠 Home' },
    { value: 'shop', label: '🏪 Shop' },
    { value: 'office', label: '🏢 Office' },
    { value: 'factory', label: '🏭 Factory' },
    { value: 'hospital', label: '🏥 Hospital' },
    { value: 'school', label: '🏫 School' },
    { value: 'other', label: '📍 Other' },
  ];

  const solarTypes: { value: SolarSystemType; label: string }[] = [
    { value: 'on-grid', label: 'On-Grid' },
    { value: 'hybrid', label: 'Hybrid' },
    { value: 'off-grid', label: 'Off-Grid' },
    { value: 'dont-know', label: "Don't Know" },
  ];

  const capacityOptions: { value: SystemCapacity; label: string }[] = [
    { value: '3kw', label: '3 kW' },
    { value: '5kw', label: '5 kW' },
    { value: '10kw', label: '10 kW' },
    { value: '20kw', label: '20 kW' },
    { value: '50kw+', label: '50 kW+' },
    { value: 'dont-know', label: "Don't Know" },
  ];

  const whatsappUrl = submittedLead
    ? createWhatsAppUrl({
        name: submittedLead.name,
        city: submittedLead.city,
        monthlyBill: submittedLead.monthlyElectricityBill,
        propertyType: submittedLead.propertyType,
        capacity: submittedLead.requiredCapacity,
        systemType: submittedLead.solarRequirement,
        customMessage: submittedLead.message,
      })
    : '#';

  if (submittedLead) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl text-center space-y-5">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">
          Enquiry Received! Reference #{submittedLead.id}
        </h3>
        <p className="text-slate-600 max-w-md mx-auto text-sm">
          Thank you, <span className="font-semibold text-slate-900">{submittedLead.name}</span>. Our technical engineer will evaluate your requirements for {submittedLead.city} and prepare a tailored solar proposal.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-900 max-w-lg mx-auto text-left space-y-1">
          <p className="font-bold flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Direct WhatsApp Integration:
          </p>
          <p>Click the button below to immediately notify our Lucknow sales team with your electricity bill and location details.</p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send Details on WhatsApp</span>
          </a>
          <button
            onClick={() => setSubmittedLead(null)}
            className="py-3.5 px-6 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-xl text-sm transition-colors cursor-pointer"
          >
            Submit Another Query
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-2 uppercase tracking-wider">
          <Zap className="w-3.5 h-3.5 text-amber-500" />
          <span>Transparent Solar Quotation</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {title}
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm mt-1.5">
          {subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Name & Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Vikram Singh"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Mobile Number (WhatsApp) <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="e.g. 9876543210"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-sm"
            />
          </div>
        </div>

        {/* Email & City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Email Address (Optional)
            </label>
            <input
              type="email"
              placeholder="e.g. vikram@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              City / Location in Lucknow <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Chinhat, Indira Nagar, Gomti Nagar"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-sm"
            />
          </div>
        </div>

        {/* Property Type selection */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Property Type
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {propertyOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setFormData({ ...formData, propertyType: opt.value })}
                className={`py-2 px-2.5 text-xs font-medium rounded-xl border text-center transition-all cursor-pointer ${
                  formData.propertyType === opt.value
                    ? 'bg-amber-500 border-amber-500 text-white font-bold shadow-xs'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Solar Requirement */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Solar Requirement
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {solarTypes.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setFormData({ ...formData, solarRequirement: opt.value })}
                className={`py-2 px-2.5 text-xs font-medium rounded-xl border text-center transition-all cursor-pointer ${
                  formData.solarRequirement === opt.value
                    ? 'bg-emerald-600 border-emerald-600 text-white font-bold shadow-xs'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Monthly Bill & Required Capacity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Monthly Electricity Bill (₹)
            </label>
            <input
              type="number"
              placeholder="e.g. 6000"
              value={formData.monthlyElectricityBill}
              onChange={(e) => setFormData({ ...formData, monthlyElectricityBill: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Required Capacity
            </label>
            <select
              value={formData.requiredCapacity}
              onChange={(e) => setFormData({ ...formData, requiredCapacity: e.target.value as SystemCapacity })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-sm bg-white"
            >
              {capacityOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Additional Message */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Message / Specific Notes (Roof area, shading, etc.)
          </label>
          <textarea
            rows={3}
            placeholder="Tell us about your rooftop, current connection type, or special requirements..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-bold rounded-xl shadow-lg shadow-amber-500/25 transition-all text-base flex items-center justify-center gap-2 cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span>{isSubmitting ? 'Submitting...' : 'SUBMIT ENQUIRY'}</span>
        </button>

        <p className="text-[11px] text-slate-500 text-center">
          Barbaric Solution guarantees transparent quotations with verified Bill of Materials (BOM).
        </p>

      </form>
    </div>
  );
};
