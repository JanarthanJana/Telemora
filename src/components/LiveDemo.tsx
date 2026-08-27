import React, { useState, useEffect } from 'react';
import {
  Activity,
  Layers,
  Radio,
  Clock,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Cpu,
  RefreshCw,
  Sliders,
  CheckCircle2,
  ZoomIn,
  Search,
  ExternalLink,
  ChevronRight,
  Filter,
} from 'lucide-react';
import { ASSETS_DATA, ANOMALY_INVESTIGATION_DATA, generateTimeSeriesData } from '../data/mockData';
import { Asset, TelemetryPoint } from '../types';

interface LiveDemoProps {
  onOpenInvestigation: () => void;
}

export const LiveDemo: React.FC<LiveDemoProps> = ({ onOpenInvestigation }) => {
  const [selectedAsset, setSelectedAsset] = useState<Asset>(ASSETS_DATA[0]);
  const [activeSignal, setActiveSignal] = useState<'vibration' | 'temperature' | 'pressure' | 'flow'>('vibration');
  const [timeRange, setTimeRange] = useState<'15m' | '1h' | '6h' | '24h'>('1h');
  const [isLiveStreaming, setIsLiveStreaming] = useState<boolean>(true);
  const [telemetryPoints, setTelemetryPoints] = useState<TelemetryPoint[]>(generateTimeSeriesData());
  const [hoveredPoint, setHoveredPoint] = useState<TelemetryPoint | null>(null);
  const [latency, setLatency] = useState<number>(24);
  const [simulatedEvents, setSimulatedEvents] = useState<string[]>([
    '14:21:08 - Vibration deviation signature detected on PUMP-204 DE Bearing',
    '14:18:42 - Phase U thermal drift logged on MOTOR-112 stator',
    '14:12:30 - Gateway-03 store & forward queue flushed (1,840 frames sync)',
    '14:05:10 - Routine signal quality validation passed across 18,429 channels (98.7%)',
  ]);

  // Live simulation ticker for realism
  useEffect(() => {
    if (!isLiveStreaming) return;
    const interval = setInterval(() => {
      setLatency(Math.floor(22 + Math.random() * 5));
    }, 2500);
    return () => clearInterval(interval);
  }, [isLiveStreaming]);

  // Signal specific visual bounds and units
  const signalMeta = {
    vibration: { label: 'Vibration (DE Bearing)', unit: 'mm/s RMS', color: '#C2A68C', max: 10, nominal: '1.2 - 4.5 mm/s' },
    temperature: { label: 'Bearing Temperature', unit: '°C', color: '#E6D8C3', max: 100, nominal: '40 - 68 °C' },
    pressure: { label: 'Discharge Pressure', unit: 'bar', color: '#5D866C', max: 60, nominal: '38 - 45 bar' },
    flow: { label: 'Suction Flow Rate', unit: 'm³/h', color: '#A8D5BA', max: 400, nominal: '290 - 350 m³/h' },
  };

  const currentMeta = signalMeta[activeSignal];

  return (
    <section id="live-demo" className="py-20 sm:py-28 bg-[#303C35] text-[#F5F5F0] border-b border-[#252A27] relative overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#5D866C_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#252A27] border border-[#5D866C]/40 text-xs font-mono font-semibold tracking-wider text-[#A8D5BA] mb-4">
              <span>REPRESENTATIVE LIVE ENVIRONMENT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F5F0]">
              See the equipment{' '}
              <span className="text-[#C2A68C]">behind the data.</span>
            </h2>

            <p className="mt-3 text-base sm:text-lg text-[#A2A9A3] max-w-2xl">
              Explore a representative telemetry environment showing how Telemora connects asset context, signals, operating state, anomalies, and maintenance information.
            </p>
          </div>

          {/* Simulated Notice Badge */}
          <div className="flex flex-col items-start md:items-end font-mono text-xs">
            <div className="px-3 py-1.5 rounded bg-[#252A27] border border-[#C2A68C]/50 text-[#E6D8C3] flex items-center gap-2 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#C2A68C] animate-pulse"></span>
              <span className="font-bold tracking-wider">SIMULATED ENVIRONMENT</span>
            </div>
            <span className="text-[11px] text-[#687069] mt-1">Data generated for demonstration</span>
          </div>
        </div>

        {/* Dashboard Frame */}
        <div className="rounded-xl bg-[#252A27] border border-[#3B4740] shadow-2xl overflow-hidden">
          {/* Dashboard Header Bar */}
          <div className="px-5 py-4 bg-[#1E2320] border-b border-[#303C35] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-[#F5F5F0] font-bold tracking-wider">
                <div className="w-2.5 h-2.5 rounded-full bg-[#5D866C]"></div>
                <span>TELEMORA / OPERATIONS</span>
              </div>
              <span className="text-[#3B4740]">|</span>
              <span className="text-[#A8D5BA]">PLANT: PLANT A (MIDWEST)</span>
              <span className="hidden sm:inline text-[#3B4740]">|</span>
              <span className="hidden sm:inline text-[#C2A68C]">STATUS: ● SYSTEM ONLINE</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsLiveStreaming(!isLiveStreaming)}
                className={`px-2.5 py-1 rounded text-[11px] font-mono flex items-center gap-1.5 transition-colors ${
                  isLiveStreaming ? 'bg-[#5D866C]/30 text-[#A8D5BA] border border-[#5D866C]' : 'bg-[#303C35] text-[#687069]'
                }`}
              >
                <RefreshCw className={`w-3 h-3 ${isLiveStreaming ? 'animate-spin' : ''}`} />
                <span>{isLiveStreaming ? 'LIVE STREAM' : 'PAUSED'}</span>
              </button>
              <span className="text-[11px] text-[#A2A9A3]">{latency} ms latency</span>
            </div>
          </div>

          {/* TOP METRICS (Section 17) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-[#303C35] text-xs font-mono">
            <div className="p-4 bg-[#252A27]">
              <div className="text-[#687069] text-[11px]">Assets Monitored</div>
              <div className="text-xl sm:text-2xl font-bold text-[#F5F5F0] mt-0.5">248</div>
              <div className="text-[10px] text-[#5D866C] mt-0.5">100% Mapped</div>
            </div>

            <div className="p-4 bg-[#252A27]">
              <div className="text-[#687069] text-[11px]">Active Signals</div>
              <div className="text-xl sm:text-2xl font-bold text-[#F5F5F0] mt-0.5">18,429</div>
              <div className="text-[10px] text-[#A8D5BA] mt-0.5">Continuous Streams</div>
            </div>

            <div className="p-4 bg-[#252A27]">
              <div className="text-[#687069] text-[11px]">Data Quality</div>
              <div className="text-xl sm:text-2xl font-bold text-[#5D866C] mt-0.5">98.7%</div>
              <div className="text-[10px] text-[#687069] mt-0.5">Schema Verified</div>
            </div>

            <div className="p-4 bg-[#252A27]">
              <div className="text-[#687069] text-[11px]">Active Investigations</div>
              <div className="text-xl sm:text-2xl font-bold text-[#C2A68C] mt-0.5">12</div>
              <div className="text-[10px] text-[#C2A68C] mt-0.5">Pending Review</div>
            </div>

            <div className="p-4 bg-[#252A27]">
              <div className="text-[#687069] text-[11px]">Connected Gateways</div>
              <div className="text-xl sm:text-2xl font-bold text-[#F5F5F0] mt-0.5">34</div>
              <div className="text-[10px] text-[#5D866C] mt-0.5">0 Offline</div>
            </div>

            <div className="p-4 bg-[#252A27]">
              <div className="text-[#687069] text-[11px]">Processing Latency</div>
              <div className="text-xl sm:text-2xl font-bold text-[#F5F5F0] mt-0.5">{latency} ms</div>
              <div className="text-[10px] text-[#A8D5BA] mt-0.5">Sub-50ms SLA</div>
            </div>
          </div>

          {/* Main Dashboard Workspace: Split Left (Table + Anomaly) & Right (Chart + Timeline) */}
          <div className="p-5 sm:p-6 lg:p-7 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#252A27]">
            {/* Left 5 Cols: Asset Status Panel + Anomaly Investigation Panel */}
            <div className="lg:col-span-5 space-y-6">
              {/* SECTION 18: ASSET STATUS PANEL */}
              <div className="p-4 rounded-lg bg-[#1E2320] border border-[#303C35]">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#303C35] text-xs font-mono">
                  <span className="font-bold text-[#C2A68C]">EQUIPMENT STATUS PANEL</span>
                  <span className="text-[#687069] text-[11px]">SELECT ASSET</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left font-mono text-xs">
                    <thead>
                      <tr className="text-[#687069] text-[11px] border-b border-[#303C35]">
                        <th className="pb-2 font-normal">Asset</th>
                        <th className="pb-2 font-normal">State</th>
                        <th className="pb-2 font-normal">Quality</th>
                        <th className="pb-2 font-normal text-right">Condition</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#303C35]/60">
                      {ASSETS_DATA.map((asset) => {
                        const isSelected = asset.id === selectedAsset.id;
                        return (
                          <tr
                            key={asset.id}
                            onClick={() => setSelectedAsset(asset)}
                            className={`cursor-pointer transition-colors ${
                              isSelected ? 'bg-[#303C35] text-[#F5F5F0]' : 'hover:bg-[#303C35]/40 text-[#A2A9A3]'
                            }`}
                          >
                            <td className="py-2.5 font-bold flex items-center gap-1.5">
                              <span className={`w-2 h-2 rounded-full ${
                                asset.condition === 'NORMAL'
                                  ? 'bg-[#5D866C]'
                                  : asset.condition === 'REVIEW'
                                  ? 'bg-[#C2A68C]'
                                  : 'bg-[#D9822B]'
                              }`}></span>
                              {asset.id}
                            </td>
                            <td className="py-2.5">{asset.state}</td>
                            <td className="py-2.5">{asset.quality}%</td>
                            <td className="py-2.5 text-right font-bold">
                              <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                                asset.condition === 'NORMAL'
                                  ? 'bg-[#5D866C]/20 text-[#A8D5BA]'
                                  : asset.condition === 'REVIEW'
                                  ? 'bg-[#C2A68C]/20 text-[#E6D8C3]'
                                  : 'bg-[#D9822B]/20 text-[#E6A055]'
                              }`}>
                                {asset.condition}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* SECTION 20: ANOMALY INVESTIGATION PANEL */}
              <div className="p-4 rounded-lg bg-[#2B342F] border border-[#C2A68C]/60 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-[#3B4740]">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-[#C2A68C]" />
                    <span className="font-bold text-[#E6D8C3]">CONDITION SIGNAL DETECTED</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#C2A68C]/30 text-[#E6D8C3] text-[10px] font-bold">
                    SEVERITY: REVIEW
                  </span>
                </div>

                <div>
                  <div className="text-[11px] text-[#687069]">Target Asset:</div>
                  <div className="font-bold text-sm text-[#F5F5F0]">
                    {ANOMALY_INVESTIGATION_DATA.assetName} ({ANOMALY_INVESTIGATION_DATA.assetId})
                  </div>
                </div>

                <div className="p-2.5 rounded bg-[#1E2320] border border-[#303C35]">
                  <div className="text-[10px] text-[#C2A68C] font-semibold mb-1">
                    CORRELATED EVIDENCE:
                  </div>
                  <ul className="space-y-1 text-[11px] text-[#A2A9A3] list-disc list-inside">
                    <li>Progressive +38% RMS vibration growth over 72h sliding window</li>
                    <li>Related DE thermocouple rise from 68°C → 74.2°C</li>
                    <li>Greasing completed on AUG 04; baseline shift persisted</li>
                  </ul>
                </div>

                <button
                  id="open-investigation-btn"
                  onClick={onOpenInvestigation}
                  className="w-full py-2.5 px-4 rounded bg-[#5D866C] hover:bg-[#4d705a] text-[#F5F5F0] font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm group active:scale-[0.99]"
                >
                  <span>Open Investigation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="text-[10px] text-center text-[#A2A9A3]">
                  Decision support payload compiled for engineering review
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Telemetry Graph + Maintenance Timeline */}
            <div className="lg:col-span-7 space-y-6">
              {/* SECTION 19: TELEMETRY GRAPH */}
              <div className="p-4 sm:p-5 rounded-lg bg-[#1E2320] border border-[#303C35]">
                {/* Graph Controls */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-4 border-b border-[#303C35] text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#5D866C]" />
                    <span className="font-bold text-[#F5F5F0]">
                      {selectedAsset.id} // TIME-SERIES TELEMETRY
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[#687069] text-[11px]">Range:</span>
                    {(['15m', '1h', '6h', '24h'] as const).map((r) => (
                      <button
                        key={r}
                        onClick={() => setTimeRange(r)}
                        className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                          timeRange === r
                            ? 'bg-[#5D866C] text-[#F5F5F0]'
                            : 'bg-[#252A27] text-[#687069] hover:text-[#F5F5F0]'
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Signal Selector Buttons */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {(['vibration', 'temperature', 'pressure', 'flow'] as const).map((sig) => (
                    <button
                      key={sig}
                      onClick={() => setActiveSignal(sig)}
                      className={`px-3 py-1.5 rounded text-xs font-mono capitalize transition-all ${
                        activeSignal === sig
                          ? 'bg-[#303C35] text-[#F5F5F0] border border-[#5D866C] font-bold shadow-xs'
                          : 'bg-[#252A27] text-[#687069] border border-[#303C35] hover:text-[#F5F5F0]'
                      }`}
                    >
                      {sig}
                    </button>
                  ))}
                </div>

                {/* SVG Time-Series Chart */}
                <div className="relative w-full h-56 bg-[#171A18] rounded-md p-3 border border-[#303C35] overflow-hidden">
                  {/* Subtle Deviation Overlay Window */}
                  <div className="absolute top-2 bottom-6 left-[46%] right-[32%] bg-[#C2A68C]/15 border-x border-[#C2A68C]/40 flex items-start justify-center pt-1 pointer-events-none">
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#252A27] text-[#E6D8C3] border border-[#C2A68C]/50">
                      DEVIATION WINDOW
                    </span>
                  </div>

                  {/* Nominal Threshold Baseline */}
                  <div className="absolute top-[52%] left-0 right-0 border-b border-dashed border-[#5D866C]/40 flex justify-end pr-2 pointer-events-none">
                    <span className="text-[9px] font-mono text-[#5D866C]">NOMINAL THRESHOLD (4.5 mm/s)</span>
                  </div>

                  {/* SVG Curves */}
                  <svg className="w-full h-44 overflow-visible" viewBox="0 0 500 140" preserveAspectRatio="none">
                    {/* Grid lines */}
                    <line x1="0" y1="35" x2="500" y2="35" stroke="#303C35" strokeWidth="0.8" />
                    <line x1="0" y1="70" x2="500" y2="70" stroke="#303C35" strokeWidth="0.8" />
                    <line x1="0" y1="105" x2="500" y2="105" stroke="#303C35" strokeWidth="0.8" />

                    {/* Telemetry Line */}
                    {activeSignal === 'vibration' && (
                      <path
                        d="M 0,110 L 40,105 L 80,108 L 120,102 L 160,106 L 200,95 L 230,70 L 250,25 L 280,30 L 320,50 L 360,75 L 400,90 L 450,100 L 500,105"
                        fill="none"
                        stroke="#C2A68C"
                        strokeWidth="2.5"
                      />
                    )}

                    {activeSignal === 'temperature' && (
                      <path
                        d="M 0,115 L 60,112 L 120,110 L 180,108 L 240,65 L 260,40 L 320,42 L 380,55 L 440,75 L 500,85"
                        fill="none"
                        stroke="#E6D8C3"
                        strokeWidth="2.5"
                      />
                    )}

                    {activeSignal === 'pressure' && (
                      <path
                        d="M 0,70 L 60,68 L 120,72 L 180,70 L 240,69 L 300,71 L 360,68 L 420,70 L 500,69"
                        fill="none"
                        stroke="#5D866C"
                        strokeWidth="2.5"
                      />
                    )}

                    {activeSignal === 'flow' && (
                      <path
                        d="M 0,60 L 60,62 L 120,58 L 180,63 L 240,60 L 300,59 L 360,61 L 420,60 L 500,62"
                        fill="none"
                        stroke="#A8D5BA"
                        strokeWidth="2.5"
                      />
                    )}

                    {/* Peak Point Marker */}
                    <circle cx="250" cy="25" r="5" fill="#C2A68C" stroke="#252A27" strokeWidth="2" className="animate-pulse" />
                  </svg>

                  {/* X Axis Time Labels */}
                  <div className="flex justify-between text-[10px] font-mono text-[#687069] pt-1">
                    <span>13:40</span>
                    <span>14:00</span>
                    <span className="text-[#C2A68C] font-bold">14:21:08 (Peak)</span>
                    <span>14:35</span>
                    <span>14:45</span>
                  </div>
                </div>

                {/* Detailed Point Inspection Tooltip (Section 19) */}
                <div className="mt-3 p-3 rounded bg-[#252A27] border border-[#303C35] grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-[11px]">
                  <div>
                    <span className="text-[#687069]">Timestamp:</span>
                    <div className="font-bold text-[#F5F5F0]">14:21:08 UTC</div>
                  </div>
                  <div>
                    <span className="text-[#687069]">Signal Value:</span>
                    <div className="font-bold text-[#C2A68C]">7.82 mm/s RMS</div>
                  </div>
                  <div>
                    <span className="text-[#687069]">Context:</span>
                    <div className="font-bold text-[#F5F5F0]">Running / Line 04</div>
                  </div>
                  <div>
                    <span className="text-[#687069]">Quality:</span>
                    <div className="font-bold text-[#5D866C]">98.4% Valid</div>
                  </div>
                </div>
              </div>

              {/* SECTION 21: MAINTENANCE TIMELINE */}
              <div className="p-4 sm:p-5 rounded-lg bg-[#1E2320] border border-[#303C35]">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#303C35] text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#C2A68C]" />
                    <span className="font-bold text-[#E6D8C3]">PUMP-204 / HISTORY TIMELINE</span>
                  </div>
                  <span className="text-[11px] text-[#5D866C]">TELEMETRY + CMMS</span>
                </div>

                <div className="space-y-3 font-mono text-xs border-l-2 border-[#5D866C] pl-4">
                  {selectedAsset.maintenanceHistory.map((evt) => (
                    <div key={evt.id} className="relative group">
                      <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#5D866C] border-2 border-[#1E2320]"></span>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-bold text-[#C2A68C]">{evt.date}</span>
                        <span className="font-semibold text-[#F5F5F0]">{evt.title}</span>
                      </div>
                      <p className="text-[11px] text-[#A2A9A3] mt-0.5 font-sans leading-relaxed">
                        {evt.notes}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Live Event Log Ticker */}
          <div className="px-5 py-3 bg-[#171A18] border-t border-[#303C35] flex items-center justify-between text-xs font-mono text-[#A2A9A3]">
            <div className="flex items-center gap-2 truncate">
              <span className="text-[#5D866C] font-bold">LATEST EVENT:</span>
              <span className="truncate">{simulatedEvents[0]}</span>
            </div>
            <span className="hidden sm:inline text-[11px] text-[#687069]">
              Audit Log: 14:21:08 UTC
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
