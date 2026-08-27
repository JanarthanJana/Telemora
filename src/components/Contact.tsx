import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, Mail, Building, Radio, Terminal, Loader2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    company: '',
    industry: 'Manufacturing',
    primaryEnvironment: 'Single Site',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name is required';
    if (!formData.lastName.trim()) errs.lastName = 'Last name is required';
    if (!formData.workEmail.trim() || !formData.workEmail.includes('@')) {
      errs.workEmail = 'Valid work email is required';
    }
    if (!formData.company.trim()) errs.company = 'Company is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#EFEFEA] border-b border-[#D9D8CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6D8C3] border border-[#C2A68C]/60 text-xs font-mono font-semibold tracking-wider text-[#303C35] mb-4">
            <span>START A CONVERSATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#252A27]">
            Tell us what your equipment{' '}
            <span className="text-[#5D866C]">is telling you.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#687069] max-w-2xl">
            Tell us about your assets, telemetry environment, and operational challenges. We'll explore where telemetry intelligence could add useful context.
          </p>
        </div>

        {/* Contact Layout: Form (7 cols) + Side Technical Panel (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Form Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white border border-[#D9D8CF] shadow-sm">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 font-mono">
                <div className="w-14 h-14 rounded-full bg-[#E3EFE7] border border-[#5D866C] flex items-center justify-center text-[#5D866C] mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#252A27]">
                  Inquiry Received
                </h3>
                <p className="text-sm text-[#687069] max-w-md mx-auto font-sans leading-relaxed">
                  Thank you, <span className="font-semibold text-[#252A27]">{formData.firstName}</span>. A Telemora telemetry architect will review your environment specification and reach out shortly at <span className="font-semibold text-[#252A27]">{formData.workEmail}</span>.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      firstName: '',
                      lastName: '',
                      workEmail: '',
                      company: '',
                      industry: 'Manufacturing',
                      primaryEnvironment: 'Single Site',
                      message: '',
                    });
                  }}
                  className="mt-4 px-5 py-2.5 rounded bg-[#E6D8C3] hover:bg-[#d8c8b0] text-[#303C35] text-xs font-bold uppercase tracking-wider"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 font-mono text-xs">
                {/* Names */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#303C35] mb-1.5 uppercase tracking-wider">
                      First Name *
                    </label>
                    <input
                      id="contact-first-name"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="e.g. Elena"
                      className={`w-full px-3.5 py-2.5 rounded-lg border bg-[#FAFAF8] text-[#252A27] focus:outline-none focus:ring-2 focus:ring-[#5D866C] ${
                        errors.firstName ? 'border-red-500' : 'border-[#D9D8CF]'
                      }`}
                    />
                    {errors.firstName && <span className="text-[11px] text-red-600 mt-1 block">{errors.firstName}</span>}
                  </div>

                  <div>
                    <label className="block font-bold text-[#303C35] mb-1.5 uppercase tracking-wider">
                      Last Name *
                    </label>
                    <input
                      id="contact-last-name"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="e.g. Vance"
                      className={`w-full px-3.5 py-2.5 rounded-lg border bg-[#FAFAF8] text-[#252A27] focus:outline-none focus:ring-2 focus:ring-[#5D866C] ${
                        errors.lastName ? 'border-red-500' : 'border-[#D9D8CF]'
                      }`}
                    />
                    {errors.lastName && <span className="text-[11px] text-red-600 mt-1 block">{errors.lastName}</span>}
                  </div>
                </div>

                {/* Email & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#303C35] mb-1.5 uppercase tracking-wider">
                      Work Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      placeholder="e.vance@plantops.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg border bg-[#FAFAF8] text-[#252A27] focus:outline-none focus:ring-2 focus:ring-[#5D866C] ${
                        errors.workEmail ? 'border-red-500' : 'border-[#D9D8CF]'
                      }`}
                    />
                    {errors.workEmail && <span className="text-[11px] text-red-600 mt-1 block">{errors.workEmail}</span>}
                  </div>

                  <div>
                    <label className="block font-bold text-[#303C35] mb-1.5 uppercase tracking-wider">
                      Company *
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Industrial Systems"
                      className={`w-full px-3.5 py-2.5 rounded-lg border bg-[#FAFAF8] text-[#252A27] focus:outline-none focus:ring-2 focus:ring-[#5D866C] ${
                        errors.company ? 'border-red-500' : 'border-[#D9D8CF]'
                      }`}
                    />
                    {errors.company && <span className="text-[11px] text-red-600 mt-1 block">{errors.company}</span>}
                  </div>
                </div>

                {/* Industry & Environment */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#303C35] mb-1.5 uppercase tracking-wider">
                      Industry
                    </label>
                    <select
                      id="contact-industry"
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#D9D8CF] bg-[#FAFAF8] text-[#252A27] focus:outline-none focus:ring-2 focus:ring-[#5D866C]"
                    >
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Industrial IoT">Industrial IoT</option>
                      <option value="Energy">Energy & Power</option>
                      <option value="Infrastructure">Infrastructure</option>
                      <option value="Industrial Technology">Industrial Technology</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-[#303C35] mb-1.5 uppercase tracking-wider">
                      Primary Environment
                    </label>
                    <select
                      id="contact-environment"
                      value={formData.primaryEnvironment}
                      onChange={(e) => setFormData({ ...formData, primaryEnvironment: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#D9D8CF] bg-[#FAFAF8] text-[#252A27] focus:outline-none focus:ring-2 focus:ring-[#5D866C]"
                    >
                      <option value="Single Site">Single Site</option>
                      <option value="Multi-Site">Multi-Site</option>
                      <option value="Edge / Distributed">Edge / Distributed</option>
                      <option value="Enterprise">Enterprise Fleet</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-bold text-[#303C35] mb-1.5 uppercase tracking-wider">
                    Equipment & Telemetry Context
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your equipment types (e.g. pumps, compressors, turbines), telemetry sources (OPC UA, MQTT, historians), and current visibility pain points..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D9D8CF] bg-[#FAFAF8] text-[#252A27] focus:outline-none focus:ring-2 focus:ring-[#5D866C]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-lg bg-[#5D866C] hover:bg-[#4d705a] text-[#F5F5F0] font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md hover:shadow-lg active:scale-[0.99] disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Request a Conversation</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Side Technical Panel (Section 30 requirement) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#252A27] border border-[#303C35] p-6 sm:p-8 text-[#F5F5F0] flex flex-col justify-between shadow-sm">
            <div>
              <div className="pb-4 mb-6 border-b border-[#303C35] flex items-center justify-between text-xs font-mono">
                <span className="text-[#C2A68C] font-bold">TELEMORA // ARCHITECTURE</span>
                <span className="text-[#5D866C] flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#5D866C] animate-pulse"></span>
                  ONLINE
                </span>
              </div>

              <div className="space-y-4 font-mono">
                <div className="p-3.5 rounded-lg bg-[#1E2320] border border-[#303C35]">
                  <div className="text-[11px] text-[#687069]">CORE SPECIFICATION</div>
                  <div className="font-bold text-sm text-[#F5F5F0] mt-0.5">TELEMORA.NET</div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#1E2320] border border-[#303C35] space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#A2A9A3]">ASSET CONTEXT</span>
                    <span className="text-[#5D866C]">● VERIFIED</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#A2A9A3]">SIGNAL INTELLIGENCE</span>
                    <span className="text-[#5D866C]">● MULTI-SENSOR</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#A2A9A3]">ENGINEERING REVIEW</span>
                    <span className="text-[#E6D8C3]">● DECISION SUPPORT</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#1E2320] border border-[#303C35] text-xs">
                  <div className="text-[#C2A68C] font-bold mb-1">DATA BOUNDARIES:</div>
                  <p className="text-[11px] text-[#687069] leading-relaxed font-sans">
                    Telemora ingests non-intrusively from telemetry networks and historians. Never sends unreviewed machine-control commands.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#303C35] flex items-center justify-between text-xs font-mono text-[#687069]">
              <span>PLATFORM CONCEPT</span>
              <span className="text-[#A8D5BA]">MIDWEST FACILITY REF</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
