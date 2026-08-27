import React from 'react';
import { ShieldCheck, Activity, Cpu, UserCheck } from 'lucide-react';

export const EngineeringBoundary: React.FC = () => {
  return (
    <section id="safety-boundary" className="py-16 sm:py-24 bg-[#F5F5F0] border-b border-[#D9D8CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-white border-2 border-[#C2A68C] shadow-sm relative overflow-hidden">
          {/* Header */}
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6D8C3] text-xs font-mono font-bold text-[#8F6340] mb-3">
              <ShieldCheck className="w-4 h-4 text-[#5D866C]" />
              <span>SAFETY & ENGINEERING PRINCIPLE</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#252A27] tracking-tight">
              Intelligence that supports engineering judgment.
            </h3>

            <p className="mt-3 text-base text-[#687069] leading-relaxed">
              Telemora is designed to organize telemetry, surface patterns, and provide contextual evidence for engineering review. It is not a certified safety function or industrial control system, and it does not replace qualified engineering judgment.
            </p>
          </div>

          {/* 3 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#D9D8CF]">
            <div className="p-5 rounded-xl bg-[#F5F5F0] border border-[#D9D8CF]">
              <div className="w-8 h-8 rounded bg-[#E6D8C3] flex items-center justify-center text-[#5D866C] mb-3">
                <Activity className="w-4 h-4" />
              </div>
              <h4 className="font-mono font-bold text-sm text-[#252A27] mb-1">
                01. TELEMETRY
              </h4>
              <p className="text-xs text-[#687069] font-mono leading-relaxed">
                Organize operational signals and validate stream integrity across plant assets.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#F5F5F0] border border-[#D9D8CF]">
              <div className="w-8 h-8 rounded bg-[#E6D8C3] flex items-center justify-center text-[#5D866C] mb-3">
                <Cpu className="w-4 h-4" />
              </div>
              <h4 className="font-mono font-bold text-sm text-[#252A27] mb-1">
                02. INTELLIGENCE
              </h4>
              <p className="text-xs text-[#687069] font-mono leading-relaxed">
                Surface meaningful deviations, correlation matrices, and historical degradation patterns.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#303C35] text-[#F5F5F0] border border-[#303C35]">
              <div className="w-8 h-8 rounded bg-[#5D866C] flex items-center justify-center text-[#F5F5F0] mb-3">
                <UserCheck className="w-4 h-4" />
              </div>
              <h4 className="font-mono font-bold text-sm text-[#A8D5BA] mb-1">
                03. REVIEW
              </h4>
              <p className="text-xs text-[#E6D8C3] font-mono leading-relaxed">
                Support engineering decisions with clear evidence packages. No unreviewed control loops.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
