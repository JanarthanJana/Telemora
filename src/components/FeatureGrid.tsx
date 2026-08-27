import React, { useState } from 'react';
import { Activity, Network, Cpu, Radio, Wrench, LayoutDashboard, Check, ArrowUpRight, Clock, AlertCircle } from 'lucide-react';

export const FeatureGrid: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      num: '01',
      title: 'Industrial Telemetry Engine',
      subtitle: 'Stream & Batch Signal Processing',
      description:
        'Process high-frequency time-series and discrete events across heterogenous industrial sources with real-time quality validation and windowing.',
      bullets: ['Telemetry ingestion & buffering', 'Schema normalization', 'Signal validation (99%+)', 'Sliding window aggregations'],
      icon: Activity,
      renderVisual: () => (
        <div className="w-full h-32 bg-[#1E2320] rounded-md p-3 relative overflow-hidden border border-[#303C35] flex flex-col justify-between">
          <div className="flex items-center justify-between text-[10px] font-mono text-[#C2A68C]">
            <span>SIGNAL STREAM // 1.0 kHz</span>
            <span className="text-[#5D866C]">VALIDATED</span>
          </div>
          {/* Animated Waveform SVG */}
          <svg className="w-full h-16" viewBox="0 0 300 60" preserveAspectRatio="none">
            <path
              d="M 0 30 Q 15 10, 30 30 T 60 30 T 90 15 T 120 45 T 150 20 T 180 38 T 210 12 T 240 48 T 270 25 T 300 30"
              fill="none"
              stroke="#5D866C"
              strokeWidth="2"
              className="animate-signal-flow"
            />
            <path
              d="M 0 30 Q 20 20, 40 30 T 80 40 T 120 20 T 160 35 T 200 15 T 240 40 T 280 25 T 300 30"
              fill="none"
              stroke="#C2A68C"
              strokeWidth="1.2"
              strokeDasharray="3 3"
              className="opacity-60"
            />
          </svg>
          <div className="flex justify-between text-[9px] font-mono text-[#A2A9A3]">
            <span>T-00:00:30</span>
            <span>SAMPLE: 1024 PTS/SEC</span>
            <span>LIVE NOW</span>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      num: '02',
      title: 'Asset Intelligence Model',
      subtitle: 'Topological Context Graph',
      description:
        'Connect every telemetry point to the physical equipment, production line, plant hierarchy, and active operating state it belongs to.',
      bullets: ['Site → Line → Asset hierarchy', 'Sensor relationship graph', 'Operating state classification', 'Line speed & recipe mapping'],
      icon: Network,
      renderVisual: () => (
        <div className="w-full h-32 bg-[#1E2320] rounded-md p-3 relative overflow-hidden border border-[#303C35] font-mono text-[10px]">
          <div className="text-[#C2A68C] mb-2 font-bold">PLANT A // TOPOLOGY</div>
          <div className="space-y-1.5 pl-1 border-l border-[#5D866C]/60 text-[#F5F5F0]">
            <div className="flex items-center gap-1.5">
              <span className="text-[#5D866C]">└──</span>
              <span className="font-semibold text-[#A8D5BA]">LINE 04 (Active)</span>
            </div>
            <div className="pl-4 space-y-1 text-[#C2A68C]">
              <div className="flex items-center gap-1">
                <span>├── PUMP-204</span>
                <span className="text-[9px] px-1 bg-[#5D866C]/30 text-[#A8D5BA] rounded">RUNNING</span>
              </div>
              <div className="flex items-center gap-1">
                <span>└── MOTOR-112</span>
                <span className="text-[9px] px-1 bg-[#C2A68C]/30 text-[#E6D8C3] rounded">88% LOAD</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      num: '03',
      title: 'Condition Intelligence',
      subtitle: 'Deviation & Trend Analysis',
      description:
        'Surface meaningful behavioral deviations and evolving degradation patterns with multi-sensor contextual evidence.',
      bullets: ['Harmonic & statistical drift', 'Multi-signal correlation', 'Dynamic thresholding', 'Contextual evidence bundle'],
      icon: Cpu,
      renderVisual: () => (
        <div className="w-full h-32 bg-[#1E2320] rounded-md p-3 relative overflow-hidden border border-[#303C35] font-mono">
          <div className="flex justify-between text-[10px] mb-1">
            <span className="text-[#F5F5F0]">BEARING VIBRATION (RMS)</span>
            <span className="text-[#C2A68C] font-bold">+38% SHIFT</span>
          </div>
          {/* Chart with highlighted deviation band */}
          <div className="relative w-full h-16 bg-[#171A18] rounded flex items-center px-1">
            {/* Deviation highlighted area */}
            <div className="absolute right-3 top-1 bottom-1 w-20 bg-[#C2A68C]/20 border border-[#C2A68C]/50 rounded-xs flex items-center justify-center">
              <span className="text-[9px] text-[#E6D8C3]">EXCURSION</span>
            </div>
            <svg className="w-full h-12" viewBox="0 0 200 40">
              <path
                d="M 0 30 L 40 28 L 80 29 L 120 22 L 150 10 L 180 8 L 200 6"
                fill="none"
                stroke="#C2A68C"
                strokeWidth="2"
              />
              <circle cx="150" cy="10" r="3" fill="#5D866C" />
              <circle cx="180" cy="8" r="3" fill="#D9822B" />
            </svg>
          </div>
          <div className="text-[9px] text-[#A2A9A3] mt-1 text-right">
            Threshold: 4.5 mm/s | Detected: 7.82 mm/s
          </div>
        </div>
      ),
    },
    {
      id: 4,
      num: '04',
      title: 'Edge Telemetry Manager',
      subtitle: 'Resilient Gateway & Node Network',
      description:
        'Maintain absolute visibility over edge collector status, local buffering queues, and synchronization health in low-bandwidth plants.',
      bullets: ['Gateway fleet inventory', 'Store-and-forward tracking', 'Buffer depth monitoring', 'Zero data drop assurance'],
      icon: Radio,
      renderVisual: () => (
        <div className="w-full h-32 bg-[#1E2320] rounded-md p-3 relative overflow-hidden border border-[#303C35] font-mono text-[10px]">
          <div className="flex justify-between text-[#C2A68C] mb-2 font-bold">
            <span>EDGE NODES (4 ACTIVE)</span>
            <span className="text-[#5D866C]">100% HEALTH</span>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="p-1.5 rounded bg-[#252A27] border border-[#303C35] flex items-center justify-between">
              <span className="text-[#F5F5F0]">GW-01</span>
              <span className="text-[#5D866C] text-[9px]">14ms</span>
            </div>
            <div className="p-1.5 rounded bg-[#252A27] border border-[#303C35] flex items-center justify-between">
              <span className="text-[#F5F5F0]">GW-02</span>
              <span className="text-[#C2A68C] text-[9px]">SYNCING</span>
            </div>
            <div className="p-1.5 rounded bg-[#252A27] border border-[#C2A68C]/50 flex items-center justify-between">
              <span className="text-[#F5F5F0]">GW-03</span>
              <span className="text-[#E6D8C3] text-[9px]">BUFFER 1.8K</span>
            </div>
            <div className="p-1.5 rounded bg-[#252A27] border border-[#303C35] flex items-center justify-between">
              <span className="text-[#F5F5F0]">GW-04</span>
              <span className="text-[#5D866C] text-[9px]">12ms</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      num: '05',
      title: 'Maintenance Context',
      subtitle: 'Operational & Work-Order History',
      description:
        'Bridge telemetry changes directly with CMMS maintenance work orders, lubrication events, component replacements, and field surveys.',
      bullets: ['CMMS work order sync', 'Lubrication & overhaul records', 'Historical event timeline', 'Pre- and post-repair traces'],
      icon: Wrench,
      renderVisual: () => (
        <div className="w-full h-32 bg-[#1E2320] rounded-md p-3 relative overflow-hidden border border-[#303C35] font-mono text-[10px]">
          <div className="text-[#C2A68C] font-bold mb-1.5">PUMP-204 // AUDIT TRAIL</div>
          <div className="space-y-1.5 border-l border-[#C2A68C]/60 pl-2">
            <div className="flex items-center justify-between text-[#A8D5BA]">
              <span>JUL 28: Baseline Inspection</span>
              <span className="text-[9px] text-[#A2A9A3]">Done</span>
            </div>
            <div className="flex items-center justify-between text-[#F5F5F0]">
              <span>AUG 04: Bearing Greasing</span>
              <span className="text-[9px] text-[#A2A9A3]">Shift B</span>
            </div>
            <div className="flex items-center justify-between text-[#C2A68C]">
              <span>AUG 21: Drift Detected</span>
              <span className="text-[9px] font-bold">Flagged</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      num: '06',
      title: 'Industrial Operations Dashboard',
      subtitle: 'Unified Single-Pane Visibility',
      description:
        'Centralized dashboard for cross-site plant assets, active signal quality metrics, open investigations, and edge topology status.',
      bullets: ['Plant-wide fleet summary', 'Signal health indicators', 'Investigation workspace', 'Decision-support exports'],
      icon: LayoutDashboard,
      renderVisual: () => (
        <div className="w-full h-32 bg-[#1E2320] rounded-md p-3 relative overflow-hidden border border-[#303C35] font-mono text-[10px]">
          <div className="flex justify-between text-[#5D866C] font-bold mb-2">
            <span>OPERATIONS VIEW</span>
            <span>248 ASSETS</span>
          </div>
          <div className="grid grid-cols-3 gap-1 mb-2 text-center">
            <div className="p-1 rounded bg-[#2B342F] text-[#F5F5F0]">
              <div className="text-[9px] text-[#687069]">SIGNALS</div>
              <div className="font-bold">18,429</div>
            </div>
            <div className="p-1 rounded bg-[#2B342F] text-[#5D866C]">
              <div className="text-[9px] text-[#687069]">QUALITY</div>
              <div className="font-bold">98.7%</div>
            </div>
            <div className="p-1 rounded bg-[#2B342F] text-[#C2A68C]">
              <div className="text-[9px] text-[#687069]">OPEN INV</div>
              <div className="font-bold">12</div>
            </div>
          </div>
          <div className="text-[9px] text-[#A2A9A3] text-center border-t border-[#303C35] pt-1">
            Real-time multi-site streaming telemetry
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="capabilities" className="py-20 sm:py-28 bg-[#EFEFEA] border-b border-[#D9D8CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6D8C3] border border-[#C2A68C]/60 text-xs font-mono font-semibold tracking-wider text-[#303C35] mb-4">
            <span>PLATFORM CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#252A27]">
            Intelligence organized{' '}
            <span className="text-[#5D866C]">around the asset.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#687069] max-w-2xl">
            Six cohesive engineering layers designed to ingest raw machine telemetry, bind topological context, surface behavioral anomalies, and support critical operational decisions.
          </p>
        </div>

        {/* 6-Card Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f) => {
            const Icon = f.icon;
            const isHovered = hoveredCard === f.id;

            return (
              <div
                key={f.id}
                onMouseEnter={() => setHoveredCard(f.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-white border transition-all duration-300 ${
                  isHovered
                    ? 'border-[#5D866C] shadow-lg -translate-y-1'
                    : 'border-[#D9D8CF] shadow-xs'
                }`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#E6D8C3]/50 border border-[#C2A68C]/60 flex items-center justify-center text-[#303C35]">
                      <Icon className="w-5 h-5 text-[#5D866C]" />
                    </div>
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#F5F5F0] text-[#687069] border border-[#D9D8CF]">
                      FEATURE {f.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#252A27] tracking-tight">
                    {f.title}
                  </h3>
                  <div className="text-xs font-mono font-medium text-[#5D866C] mt-0.5 mb-3">
                    {f.subtitle}
                  </div>

                  <p className="text-sm text-[#687069] leading-relaxed mb-6">
                    {f.description}
                  </p>
                </div>

                {/* Interactive / Visual Area */}
                <div className="space-y-4 pt-2">
                  {f.renderVisual()}

                  {/* Bullet points */}
                  <ul className="space-y-1.5 pt-2 border-t border-[#D9D8CF]/60 text-xs font-mono text-[#303C35]">
                    {f.bullets.map((b, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#5D866C] shrink-0" />
                        <span className="truncate">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
