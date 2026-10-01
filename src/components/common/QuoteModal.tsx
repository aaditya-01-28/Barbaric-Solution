import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, MessageSquare, Sun, ShieldCheck } from 'lucide-react';
import { useQuote } from '../../context/QuoteContext';
import type { LeadFormData, PropertyType, SolarSystemType, SystemCapacity } from '../../types';
import { createWhatsAppUrl } from '../../utils/whatsappHelper';

export const QuoteModal: React.FC = () => {
  const { isQuoteModalOpen, closeQuoteModal, activeQuoteData, submitLead } = useQuote();

  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    mobile: '',
    email: '',
    city: 'Lucknow',
    propertyType: 'home',
    solarRequirement: 'on-grid',
    monthlyElectricityBill: '',
    requiredCapacity: 'dont-know',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<LeadFormData | null>(null);

  useEffect(() => {
    if (isQuoteModalOpen) {
      setFormData((prev) => ({
        ...prev,
        ...activeQuoteData,
      }));
      setSubmittedLead(null);
    }
  }, [isQuoteModalOpen, activeQuoteData]);

  if (!isQuoteModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile) return;

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
    { value: 'home', label: '🏠 Home / Residential' },
    { value: 'shop', label: '🏪 Shop / Retail' },
    { value: 'office', label: '🏢 Office' },
    { value: 'factory', label: '🏭 Factory' },
    { value: 'hospital', label: '🏥 Hospital' },
    { value: 'school', label: '🏫 School' },
    { value: 'other', label: '📍 Other' },
  ];

  const solarTypes: { value: SolarSystemType; label: string }[] = [
    { value: 'on-grid', label: 'On-Grid (Bill Reduction)' },
    { value: 'hybrid', label: 'Hybrid (Solar + Battery)' },
    { value: 'off-grid', label: 'Off-Grid (No Grid)' },
    { value: 'dont-know', label: "Don't Know (Recommend)" },
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

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-6">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-5 sm:p-6 relative">
          <button
            onClick={closeQuoteModal}
            className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800/80 p-1.5 rounded-full transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Sun className="w-4 h-4" />
            <span>BARBARIC SOLUTION • SOLAR EPC</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            {submittedLead ? 'Enquiry Received Successfully!' : 'Get Your Free Solar Quotation & Site Survey'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            {submittedLead 
              ? 'Our solar engineering team in Lucknow has received your request.' 
              : 'Fill in your details below for a customized solar design and transparent bill analysis.'}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 max-h-[75vh] overflow-y-auto">
          {submittedLead ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Thank you, {submittedLead.name}!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Your enquiry reference ID is <span className="font-mono font-bold text-slate-900">{submittedLead.id}</span>. We will analyze your monthly electricity bill of <span className="font-semibold text-slate-900">₹{submittedLead.monthlyElectricityBill || 'N/A'}</span> for your property in <span className="font-semibold text-slate-900">{submittedLead.city}</span>.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900 max-w-md mx-auto text-left space-y-1">
                <p className="font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  What happens next:
                </p>
                <p>1. Our technical advisor reviews your roof capacity and UPPCL net-metering eligibility.</p>
                <p>2. We share a preliminary proposal with equipment BOM and PM Surya Ghar subsidy benefits.</p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl shadow-md transition-all text-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Directly on WhatsApp</span>
                </a>
                <button
                  onClick={closeQuoteModal}
                  className="py-3 px-6 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-xl text-sm transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Name & Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile Number <span className="text-red-500">*</span>
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

              {/* Row 2: Email & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. yourname@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    City / Area in Lucknow <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Chinhat, Gomti Nagar"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-sm"
                  />
                </div>
              </div>

              {/* Property Type Selector */}
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
                      className={`text-xs py-2 px-2 rounded-lg border text-center font-medium transition-all cursor-pointer ${
                        formData.propertyType === opt.value
                          ? 'bg-amber-500 border-amber-600 text-white font-bold shadow-xs'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Solar Requirement Selector */}
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
                      className={`text-xs py-2 px-2 rounded-lg border text-center font-medium transition-all cursor-pointer ${
                        formData.solarRequirement === opt.value
                          ? 'bg-emerald-600 border-emerald-700 text-white font-bold shadow-xs'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly Electricity Bill & Required Capacity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Monthly Electricity Bill (₹)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 4500"
                    value={formData.monthlyElectricityBill}
                    onChange={(e) => setFormData({ ...formData, monthlyElectricityBill: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Desired Capacity
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

              {/* Message / Specific Requirements */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Additional Notes / Roof Details (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Roof area approx 600 sq ft, 3-phase connection available"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-sm"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-bold rounded-xl shadow-lg shadow-amber-500/25 transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Submitting Enquiry...' : 'SUBMIT ENQUIRY FOR FREE QUOTE'}</span>
                </button>
                <p className="text-[11px] text-slate-400 text-center mt-2">
                  🔒 We respect your privacy. No spam. Transparent pricing directly from Barbaric Solution engineers.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
