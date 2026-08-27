import React, { useState } from 'react';
import { Database, CheckCircle, Cpu, Network, Activity, ArrowDown, UserCheck, ShieldCheck, Layers, FileText, ChevronRight } from 'lucide-react';

export const Architecture: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<number>(3);

  const stages = [
    {
      id: 0,
      title: '01. INPUT LAYER',
      tag: 'Raw Sources',
      items: ['Machine telemetry', 'Sensor channels', 'Industrial gateways', 'Historian exports', 'Maintenance logs', 'Asset registries'],
      desc: 'Connects to heterogenous plant assets, SCADA buses, and IoT protocols (OPC UA, MQTT, Modbus, Sparkplug B).',
      color: 'border-[#D9D8CF] bg-white',
    },
    {
      id: 1,
      title: '02. INGESTION & VALIDATION',
      tag: 'Integrity First',
      items: ['Stream buffering', 'Loss detection', 'Quality validation', 'Sampling checks'],
      desc: 'Ensures data completeness, detects sensor dropouts, and verifies sample clocks before downstream processing.',
      color: 'border-[#C2A68C] bg-[#E6D8C3]/30',
    },
    {
      id: 2,
      title: '03. SCHEMA NORMALIZATION',
      tag: 'Unified Vectors',
      items: ['Unit standardization', 'Temporal alignment', 'Dynamic windowing', 'Aggregations'],
      desc: 'Aligns uneven sample rates into coherent multivariate time-series frames with normalized physical units.',
      color: 'border-[#5D866C]/60 bg-[#E3EFE7]',
    },
    {
      id: 3,
      title: '04. TOPOLOGICAL CONTEXT',
      tag: 'Asset Graph',
      items: ['Asset hierarchy', 'Operating state', 'Production line', 'Maintenance history'],
      desc: 'Binds telemetry directly to equipment parentage, active machine recipes, and recent work orders.',
      color: 'border-[#5D866C] bg-white ring-2 ring-[#5D866C]',
    },
    {
      id: 4,
      title: '05. CONDITION INTELLIGENCE',
      tag: 'Analytical Layer',
      items: ['Trend analysis', 'Deviation detection', 'Harmonic drift', 'Pattern correlation'],
      desc: 'Calculates statistical and multi-sensor excursions relative to baseline operating states.',
      color: 'border-[#C2A68C] bg-[#E6D8C3]/60',
    },
    {
      id: 5,
      title: '06. DECISION SUPPORT OUTPUT',
      tag: 'Human Review',
      items: ['Operations Dashboard', 'Condition Signals', 'Anomaly Investigation', 'Enterprise APIs', 'Engineering Review'],
      desc: 'Provides structured evidence directly to qualified plant engineers for informed decision-making.',
      color: 'border-[#303C35] bg-[#303C35] text-[#F5F5F0]',
    },
  ];

  return (
    <section id="architecture" className="py-20 sm:py-28 bg-[#EFEFEA] border-b border-[#D9D8CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6D8C3] border border-[#C2A68C]/60 text-xs font-mono font-semibold tracking-wider text-[#303C35] mb-4">
            <span>HOW TELEMETRY BECOMES CONTEXT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#252A27]">
            From machine signal{' '}
            <span className="text-[#5D866C]">to engineering insight.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#687069] max-w-2xl">
            A structured architectural pipeline that transforms fragmented industrial sensor signals into verified, asset-bound operational context.
          </p>
        </div>

        {/* Technical Architecture Centerpiece Diagram */}
        <div className="rounded-xl bg-white border border-[#D9D8CF] p-6 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-[#D9D8CF] text-xs font-mono">
            <span className="font-bold text-[#303C35] uppercase tracking-wider">
              SYSTEM ARCHITECTURE SPECIFICATION
            </span>
            <span className="text-[#5D866C] bg-[#5D866C]/10 px-2.5 py-1 rounded">
              PIPELINE STAGES 01 → 06
            </span>
          </div>

          {/* Interactive Pipeline Column / Stage Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stages.map((stage) => {
              const isSelected = selectedStage === stage.id;
              const isFinal = stage.id === 5;

              return (
                <div
                  key={stage.id}
                  onClick={() => setSelectedStage(stage.id)}
                  className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    stage.color
                  } ${
                    isSelected ? 'shadow-md scale-[1.01]' : 'hover:border-[#687069]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono font-bold text-xs tracking-wider">
                        {stage.title}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        isFinal ? 'bg-[#5D866C] text-[#F5F5F0]' : 'bg-black/5 text-[#303C35]'
                      }`}>
                        {stage.tag}
                      </span>
                    </div>

                    <p className="text-xs leading-relaxed mb-4 opacity-90 font-sans">
                      {stage.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-black/10 space-y-1 font-mono text-[11px]">
                    {stage.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${isFinal ? 'bg-[#A8D5BA]' : 'bg-[#5D866C]'}`}></span>
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Explicit Safety & Decision Support Note */}
          <div className="mt-8 p-4 rounded-lg bg-[#E6D8C3]/50 border border-[#C2A68C] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs text-[#303C35]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#5D866C] shrink-0" />
              <span>
                <strong>Architectural Boundary:</strong> Output terminates in decision support and human engineering review — never unverified autonomous machine actuation.
              </span>
            </div>
            <span className="text-[11px] text-[#8F6340] shrink-0 font-semibold">
              ENGINEERING COMPLIANT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
