import React from 'react';
import { Quote, Shield } from 'lucide-react';

export const Testimonial: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#EFEFEA] border-b border-[#D9D8CF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-2xl bg-white border border-[#D9D8CF] shadow-xs relative">
          <Quote className="w-10 h-10 text-[#C2A68C]/50 mx-auto mb-6" />

          <blockquote className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#252A27] leading-relaxed tracking-tight">
            "The value is not simply seeing another telemetry chart. It is being able to understand which asset the signal belongs to, what changed, and what context surrounds that change."
          </blockquote>

          <div className="mt-8 pt-6 border-t border-[#D9D8CF] flex flex-col sm:flex-row items-center justify-center gap-3 text-xs font-mono">
            <span className="font-bold text-[#303C35] uppercase tracking-wider">
              Reliability Engineering Lead
            </span>
            <span className="text-[#687069] hidden sm:inline">•</span>
            <span className="px-2.5 py-0.5 rounded bg-[#E6D8C3] text-[#8F6340] font-semibold">
              Representative Example
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
