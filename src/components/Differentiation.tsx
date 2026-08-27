import React from 'react';
import { CheckCircle2, XCircle, ShieldCheck, ArrowRight } from 'lucide-react';

export const Differentiation: React.FC = () => {
  const basicItems = [
    { title: 'Raw device data', note: 'Unstructured sensor channels without equipment hierarchy' },
    { title: 'Basic status indicators', note: 'Simple red/green lights based on disconnected thresholds' },
    { title: 'Simple static thresholds', note: 'Excessive false alarms during startup and recipe changes' },
    { title: 'Limited context', note: 'No awareness of production line rate or operating state' },
    { title: 'Fragmented maintenance information', note: 'Siloed in CMMS tools completely away from telemetry' },
  ];

  const telemoraItems = [
    { title: 'Asset-aware telemetry', note: 'Every data point bound to the physical equipment graph' },
    { title: 'Continuous signal quality validation', note: 'Integrity checking, sample clock verification & drop tracking' },
    { title: 'Operating-state context', note: 'Nominal bounds adapted to active speed, load, and batch recipes' },
    { title: 'Trend intelligence & deviation analysis', note: 'Multi-sensor harmonic and statistical drift detection' },
    { title: 'Contextual anomaly evidence', note: 'Correlated multi-channel evidence packages compiled for engineers' },
    { title: 'Integrated maintenance history', note: 'CMMS work orders, grease logs, and overhaul timelines on charts' },
    { title: 'Engineering investigation workflows', note: 'Human-in-the-loop decision support with complete audit trails' },
  ];

  return (
    <section id="differentiation" className="py-20 sm:py-28 bg-[#EFEFEA] border-b border-[#D9D8CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6D8C3] border border-[#C2A68C]/60 text-xs font-mono font-semibold tracking-wider text-[#303C35] mb-4">
            <span>PLATFORM DIFFERENTIATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#252A27]">
            More than an{' '}
            <span className="text-[#5D866C]">IoT dashboard.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#687069] max-w-2xl">
            Generic IoT platforms treat time-series data as flat streams. Telemora structures telemetry around the asset, its operating conditions, and maintenance reality.
          </p>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Basic IoT Visibility */}
          <div className="lg:col-span-5 p-6 sm:p-7 rounded-xl bg-white border border-[#D9D8CF] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#D9D8CF]">
                <h3 className="font-mono font-bold text-lg text-[#687069]">
                  Basic IoT Visibility
                </h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#EBEBE4] text-[#687069]">
                  Standard Tooling
                </span>
              </div>

              <div className="space-y-4">
                {basicItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-[#A2A9A3] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-[#252A27]">{item.title}</div>
                      <div className="text-xs text-[#687069] mt-0.5 leading-relaxed">{item.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#D9D8CF] text-[11px] font-mono text-[#687069]">
              Results in alarm fatigue and isolated sensor views without root-cause context.
            </div>
          </div>

          {/* Right: Telemora Platform */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-xl bg-[#252A27] border-2 border-[#5D866C] shadow-lg text-[#F5F5F0] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#303C35]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#5D866C]"></span>
                  <h3 className="font-mono font-bold text-lg text-[#F5F5F0]">
                    Telemora Telemetry Intelligence
                  </h3>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#5D866C]/30 text-[#A8D5BA] font-bold">
                  Asset-Centric
                </span>
              </div>

              <div className="space-y-4">
                {telemoraItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#5D866C] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-[#F5F5F0]">{item.title}</div>
                      <div className="text-xs text-[#A2A9A3] mt-0.5 leading-relaxed">{item.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#303C35] flex items-center justify-between text-xs font-mono text-[#E6D8C3]">
              <span>Contextual decision support for engineering teams</span>
              <span className="text-[#5D866C] font-bold">● Production Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
