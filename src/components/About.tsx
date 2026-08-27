import React from 'react';
import { Layers, Network, Zap, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { AboutVisual } from './AboutVisual';

export const About: React.FC = () => {
  return (
    <section id="platform" className="py-20 sm:py-28 bg-[#F5F5F0] border-b border-[#D9D8CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6D8C3] border border-[#C2A68C]/60 text-xs font-mono font-semibold tracking-wider text-[#303C35] mb-4">
            <span>THE INDUSTRIAL DATA PROBLEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#252A27] max-w-3xl">
            Machines generate signals.{' '}
            <span className="text-[#5D866C]">Engineers need context.</span>
          </h2>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Bold Statement & Key Takeaways */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-6 sm:p-8 rounded-xl bg-[#E6D8C3]/50 border border-[#C2A68C]/80 relative">
              <div className="text-xs font-mono font-bold tracking-widest text-[#5D866C] uppercase mb-3">
                // CORE OBSERVATION
              </div>
              <blockquote className="text-2xl sm:text-3xl font-extrabold text-[#252A27] leading-snug tracking-tight">
                "Telemetry without context is difficult to interpret."
              </blockquote>
              <div className="mt-4 pt-4 border-t border-[#C2A68C]/60 text-xs font-mono text-[#687069]">
                Raw amplitude spikes do not reveal whether a machine was accelerating, loaded, undergoing lubrication, or idling.
              </div>
            </div>

            <div className="space-y-4 text-[#252A27] leading-relaxed">
              <p className="text-base text-[#687069]">
                Industrial environments generate enormous amounts of information across machines, sensors, gateways, historians, maintenance platforms, and operational systems.
              </p>
              <p className="text-base text-[#687069]">
                Different sampling rates, inconsistent schemas, siloed asset identifiers, and decoupled data sources make it difficult to understand what is truly happening around a particular piece of equipment.
              </p>
              <p className="text-base font-medium text-[#303C35]">
                Telemora organizes those disparate signals directly around the physical assets, operational states, and maintenance histories they belong to.
              </p>
            </div>

            {/* Micro Pillars */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 rounded-lg bg-white border border-[#D9D8CF]">
                <div className="font-mono font-bold text-sm text-[#252A27]">Multi-Source</div>
                <div className="text-xs text-[#687069] mt-0.5">Sensors, Historians & Gateways</div>
              </div>
              <div className="p-3.5 rounded-lg bg-white border border-[#D9D8CF]">
                <div className="font-mono font-bold text-sm text-[#5D866C]">State-Aware</div>
                <div className="text-xs text-[#687069] mt-0.5">Bound to Operating Regimes</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Visual Transformation */}
          <div className="lg:col-span-7">
            <AboutVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
