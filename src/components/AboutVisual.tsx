import React, { useState } from 'react';
import { Layers, Cpu, ArrowDown, Database, CheckCircle2, ChevronRight, Activity, GitCommit } from 'lucide-react';

export const AboutVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2);

  const steps = [
    {
      id: 0,
      title: 'RAW SIGNALS',
      subtitle: 'Disparate Unaligned Streams',
      items: ['Temp (10 Hz)', 'Vibration (1.0 kHz)', 'Pressure (100 Hz)', 'Flow (50 Hz)', 'Motor Current', 'Discrete Events'],
      badge: 'Fragmented Sources',
      color: 'border-[#D9D8CF] bg-[#EBEBE4]',
    },
    {
      id: 1,
      title: 'NORMALIZED TELEMETRY',
      subtitle: 'Schema Alignment & Validation',
      items: ['Time-aligned vectors', 'Unit conversions', 'Quality validation (98.7%)', 'Windowed aggregation'],
      badge: 'Structured Ingestion',
      color: 'border-[#C2A68C] bg-[#E6D8C3]',
    },
    {
      id: 2,
      title: 'ASSET CONTEXT',
      subtitle: 'Topological Equipment Graph',
      items: ['Asset: Pump 204', 'Location: Line 04, Plant A', 'Operating State: RUNNING (88% Load)', 'Duty Cycle: 4,218 hrs'],
      badge: 'Asset-First Topology',
      color: 'border-[#5D866C] bg-[#E3EFE7]',
    },
    {
      id: 3,
      title: 'ENGINEERING CONTEXT',
      subtitle: 'Correlated Decision Support',
      items: ['Harmonic drift correlated with bearing temp', 'Linked to AUG 04 maintenance record', 'Ready for Engineering Review'],
      badge: 'Actionable Clarity',
      color: 'border-[#303C35] bg-[#303C35] text-[#F5F5F0]',
    },
  ];

  return (
    <div className="w-full rounded-xl bg-white border border-[#D9D8CF] p-5 sm:p-7 shadow-sm">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#D9D8CF] text-xs font-mono">
        <span className="text-[#303C35] font-semibold tracking-wider">
          DATA TRANSFORMATION PIPELINE
        </span>
        <span className="text-[#5D866C] bg-[#5D866C]/10 px-2 py-0.5 rounded font-mono">
          INTERACTIVE FLOW
        </span>
      </div>

      {/* Step Sequence Cards */}
      <div className="space-y-4">
        {steps.map((step, idx) => {
          const isActive = activeStep === step.id;
          const isFinal = step.id === 3;

          return (
            <React.Fragment key={step.id}>
              <div
                onClick={() => setActiveStep(step.id)}
                className={`p-4 rounded-lg border transition-all cursor-pointer ${
                  step.color
                } ${
                  isActive
                    ? 'ring-2 ring-[#5D866C] shadow-md scale-[1.01]'
                    : 'opacity-80 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-black/10">
                      0{step.id + 1}
                    </span>
                    <h4 className="font-mono font-bold text-sm sm:text-base tracking-tight">
                      {step.title}
                    </h4>
                  </div>
                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                    isFinal ? 'bg-[#5D866C] text-[#F5F5F0]' : 'bg-white/70 text-[#252A27]'
                  }`}>
                    {step.badge}
                  </span>
                </div>

                <div className="text-xs font-medium opacity-80 mb-3 font-mono">
                  {step.subtitle}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 text-xs font-mono">
                  {step.items.map((item, i) => (
                    <div
                      key={i}
                      className={`px-2.5 py-1 rounded text-[11px] flex items-center gap-1.5 ${
                        isFinal
                          ? 'bg-[#252A27]/80 text-[#E6D8C3] border border-[#5D866C]/40'
                          : 'bg-white/90 text-[#252A27] border border-[#D9D8CF]'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isFinal ? 'bg-[#A8D5BA]' : 'bg-[#5D866C]'}`}></span>
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {idx < steps.length - 1 && (
                <div className="flex justify-center -my-2 relative z-10">
                  <div className="w-6 h-6 rounded-full bg-[#E6D8C3] border border-[#C2A68C] flex items-center justify-center text-[#303C35]">
                    <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
