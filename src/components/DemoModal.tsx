import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Building, Radio, Calendar, Loader2 } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, defaultPlan }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: 'Plant Reliability Engineer',
    planInterest: defaultPlan || 'Enterprise',
    assetCount: '100 - 500 Assets',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-2xl border border-[#D9D8CF] shadow-2xl overflow-hidden font-mono text-xs text-[#252A27]">
        {/* Header */}
        <div className="bg-[#E6D8C3]/50 px-6 py-4 border-b border-[#C2A68C]/60 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5D866C]"></span>
            <span className="font-bold text-sm tracking-tight text-[#303C35] uppercase">
              REQUEST INDUSTRIAL TELEMETRY DEMO
            </span>
          </div>
          <button onClick={onClose} className="p-1 rounded text-[#687069] hover:text-[#252A27]">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#E3EFE7] border border-[#5D866C] flex items-center justify-center text-[#5D866C] mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#252A27]">Demo Request Confirmed</h3>
              <p className="text-xs text-[#687069] font-sans leading-relaxed">
                Thank you, {formData.name}. Our technical solutions engineer will contact you at <span className="font-semibold text-[#252A27]">{formData.email}</span> to configure a live session mapped to your plant topologies.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-5 py-2.5 rounded bg-[#5D866C] text-[#F5F5F0] font-bold uppercase tracking-wider text-xs"
              >
                Return to Platform
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-bold text-[#303C35] mb-1 uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Jordan Hayes"
                  className="w-full px-3 py-2 rounded-md border border-[#D9D8CF] bg-[#FAFAF8] text-[#252A27] focus:outline-none focus:ring-1 focus:ring-[#5D866C]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#303C35] mb-1 uppercase tracking-wider">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="j.hayes@plantcorp.com"
                  className="w-full px-3 py-2 rounded-md border border-[#D9D8CF] bg-[#FAFAF8] text-[#252A27] focus:outline-none focus:ring-1 focus:ring-[#5D866C]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#303C35] mb-1 uppercase tracking-wider">
                    Company *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Plant Systems Inc"
                    className="w-full px-3 py-2 rounded-md border border-[#D9D8CF] bg-[#FAFAF8] text-[#252A27] focus:outline-none focus:ring-1 focus:ring-[#5D866C]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#303C35] mb-1 uppercase tracking-wider">
                    Asset Fleet Size
                  </label>
                  <select
                    value={formData.assetCount}
                    onChange={(e) => setFormData({ ...formData, assetCount: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-[#D9D8CF] bg-[#FAFAF8] text-[#252A27] focus:outline-none focus:ring-1 focus:ring-[#5D866C]"
                  >
                    <option value="< 100 Assets">&lt; 100 Assets</option>
                    <option value="100 - 500 Assets">100 - 500 Assets</option>
                    <option value="500 - 2,000 Assets">500 - 2,000 Assets</option>
                    <option value="> 2,000 Assets">&gt; 2,000 Assets</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#303C35] mb-1 uppercase tracking-wider">
                  Role / Engineering Discipline
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-[#D9D8CF] bg-[#FAFAF8] text-[#252A27] focus:outline-none focus:ring-1 focus:ring-[#5D866C]"
                >
                  <option value="Plant Reliability Engineer">Plant Reliability Engineer</option>
                  <option value="Maintenance Director">Maintenance Director</option>
                  <option value="Industrial IoT / OT Architect">Industrial IoT / OT Architect</option>
                  <option value="Plant Operations Manager">Plant Operations Manager</option>
                  <option value="Data & Analytics Lead">Data & Analytics Lead</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded bg-[#5D866C] hover:bg-[#4d705a] text-[#F5F5F0] font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Scheduling Demo...</span>
                    </>
                  ) : (
                    <>
                      <span>Schedule Live Telemetry Walkthrough</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
