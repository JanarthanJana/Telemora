import React, { useState, useEffect } from 'react';
import { Activity, Zap, Thermometer, Gauge, Wind, AlertTriangle, UserCheck, CheckCircle2, ChevronRight } from 'lucide-react';

interface AssetTelemetryVisualizationProps {
  onInvestigateClick?: () => void;
}

export const AssetTelemetryVisualization: React.FC<AssetTelemetryVisualizationProps> = ({
  onInvestigateClick,
}) => {
  const [activeSensor, setActiveSensor] = useState<string>('VIBRATION');
  const [pulseCounter, setPulseCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseCounter((prev) => (prev + 1) % 100);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  const sensors = [
    {
      id: 'VIBRATION',
      name: 'Vibration (DE)',
      value: '7.82 mm/s',
      status: 'DEVIATION',
      rate: '1.0 kHz',
      quality: '98.4%',
      icon: Activity,
      x: 15,
      y: 18,
      isFlagged: true,
    },
    {
      id: 'TEMPERATURE',
      name: 'Bearing Temp',
      value: '74.2 °C',
      status: 'ATTENTION',
      rate: '10 Hz',
      quality: '99.1%',
      icon: Thermometer,
      x: 82,
      y: 18,
      isFlagged: false,
    },
    {
      id: 'PRESSURE',
      name: 'Discharge Press',
      value: '42.1 bar',
      status: 'NORMAL',
      rate: '100 Hz',
      quality: '99.8%',
      icon: Gauge,
      x: 12,
      y: 78,
      isFlagged: false,
    },
    {
      id: 'FLOW',
      name: 'Suction Flow',
      value: '318.5 m³/h',
      status: 'NORMAL',
      rate: '50 Hz',
      quality: '98.9%',
      icon: Wind,
      x: 84,
      y: 78,
      isFlagged: false,
    },
    {
      id: 'CURRENT',
      name: 'Motor Current',
      value: '142.6 A',
      status: 'NORMAL',
      rate: '200 Hz',
      quality: '99.3%',
      icon: Zap,
      x: 48,
      y: 8,
      isFlagged: false,
    },
  ];

  return (
    <div className="relative w-full rounded-xl bg-[#252A27] border border-[#303C35] text-[#F5F5F0] p-4 sm:p-6 lg:p-7 shadow-xl overflow-hidden">
      {/* Background Technical Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#5D866C_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />

      {/* Top Header Information Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-[#303C35] text-xs font-mono">
        <div className="flex items-center gap-3">
          <span className="text-[#C2A68C] font-semibold">TOPOLOGY // LIVE SCHEMATIC</span>
          <span className="text-[#687069]">|</span>
          <span className="text-[#F5F5F0]">LINE 04 → ASSET NODE</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#5D866C] animate-ping"></span>
          <span className="text-[#5D866C] font-medium">STREAMING 5 CHANNELS</span>
        </div>
      </div>

      {/* Floating Micro-Telemetry Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mb-6 font-mono text-[11px]">
        <div className="p-2 rounded bg-[#303C35]/60 border border-[#303C35]">
          <div className="text-[#687069] text-[10px]">ASSET_ID</div>
          <div className="font-bold text-[#F5F5F0]">PUMP-204</div>
        </div>
        <div className="p-2 rounded bg-[#303C35]/60 border border-[#303C35]">
          <div className="text-[#687069] text-[10px]">SIGNAL</div>
          <div className="font-bold text-[#C2A68C]">VIBRATION</div>
        </div>
        <div className="p-2 rounded bg-[#303C35]/60 border border-[#303C35]">
          <div className="text-[#687069] text-[10px]">SAMPLE RATE</div>
          <div className="font-bold text-[#F5F5F0]">1.0 kHz</div>
        </div>
        <div className="p-2 rounded bg-[#303C35]/60 border border-[#303C35]">
          <div className="text-[#687069] text-[10px]">QUALITY</div>
          <div className="font-bold text-[#5D866C]">98.7%</div>
        </div>
        <div className="p-2 rounded bg-[#303C35]/60 border border-[#303C35]">
          <div className="text-[#687069] text-[10px]">STATE</div>
          <div className="font-bold text-[#5D866C]">RUNNING</div>
        </div>
        <div className="p-2 rounded bg-[#303C35]/60 border border-[#303C35]">
          <div className="text-[#687069] text-[10px]">LAST EVENT</div>
          <div className="font-bold text-[#C2A68C]">14:21:08</div>
        </div>
      </div>

      {/* Interactive Topology Graph Stage */}
      <div className="relative w-full h-[320px] sm:h-[360px] rounded-lg bg-[#1D211F] border border-[#303C35]/80 flex items-center justify-center p-4">
        {/* SVG Wiring / Signal Rays */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="signalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C2A68C" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#5D866C" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="warnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C2A68C" />
              <stop offset="100%" stopColor="#D9822B" />
            </linearGradient>
          </defs>

          {/* Central Connecting Lines */}
          {/* Top Sensor (Current) -> Asset */}
          <line x1="50%" y1="18%" x2="50%" y2="40%" stroke="#5D866C" strokeWidth="1.5" strokeDasharray="3 3" className="animate-signal-flow opacity-70" />
          {/* Top-Left Sensor (Vib) -> Asset */}
          <line x1="22%" y1="26%" x2="42%" y2="44%" stroke="#C2A68C" strokeWidth="2" strokeDasharray="4 3" className="animate-signal-flow opacity-90" />
          {/* Top-Right Sensor (Temp) -> Asset */}
          <line x1="78%" y1="26%" x2="58%" y2="44%" stroke="#5D866C" strokeWidth="1.5" strokeDasharray="3 3" className="animate-signal-flow opacity-70" />
          {/* Bottom-Left Sensor (Pressure) -> Asset */}
          <line x1="24%" y1="74%" x2="44%" y2="56%" stroke="#5D866C" strokeWidth="1.5" strokeDasharray="3 3" className="animate-signal-flow opacity-70" />
          {/* Bottom-Right Sensor (Flow) -> Asset */}
          <line x1="76%" y1="74%" x2="56%" y2="56%" stroke="#5D866C" strokeWidth="1.5" strokeDasharray="3 3" className="animate-signal-flow opacity-70" />

          {/* Asset -> Condition Signal -> Engineer Review Flow Line */}
          <line x1="50%" y1="60%" x2="50%" y2="72%" stroke="#C2A68C" strokeWidth="2" strokeDasharray="2 2" className="animate-signal-flow" />
          <line x1="50%" y1="84%" x2="50%" y2="92%" stroke="#5D866C" strokeWidth="2" />
        </svg>

        {/* Central ASSET Card: PUMP-204 */}
        <div className="relative z-20 w-44 sm:w-52 p-3 sm:p-4 rounded-lg bg-[#2B342F] border-2 border-[#5D866C] shadow-lg shadow-[#5D866C]/10 text-center">
          <div className="flex items-center justify-between text-[10px] font-mono text-[#C2A68C] mb-1">
            <span>CORE ASSET</span>
            <span className="px-1.5 py-0.5 rounded bg-[#5D866C]/30 text-[#A8D5BA] font-bold">RUNNING</span>
          </div>
          <div className="text-base sm:text-lg font-bold font-mono tracking-tight text-[#F5F5F0]">
            PUMP-204
          </div>
          <div className="text-[11px] text-[#A2A9A3] mt-0.5 font-sans">
            Boiler Feed Centrifugal
          </div>
          <div className="mt-2 pt-2 border-t border-[#3B4740] flex items-center justify-between text-[10px] font-mono">
            <span className="text-[#687069]">Integrity</span>
            <span className="text-[#5D866C] font-semibold">98.7% Validated</span>
          </div>
        </div>

        {/* Satellite Sensor Nodes */}
        {/* 1. Vibration (Top Left) */}
        <button
          onClick={() => setActiveSensor('VIBRATION')}
          className={`absolute top-4 left-3 sm:left-6 z-20 p-2.5 rounded-lg border text-left transition-all ${
            activeSensor === 'VIBRATION'
              ? 'bg-[#303C35] border-[#C2A68C] ring-1 ring-[#C2A68C]'
              : 'bg-[#252A27]/90 border-[#303C35] hover:border-[#687069]'
          }`}
        >
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#C2A68C]">
            <Activity className="w-3 h-3 text-[#C2A68C]" />
            <span>VIBRATION DE</span>
          </div>
          <div className="text-xs sm:text-sm font-mono font-bold text-[#F5F5F0] mt-0.5">
            7.82 <span className="text-[10px] font-normal text-[#A2A9A3]">mm/s</span>
          </div>
          <span className="inline-block mt-1 px-1 py-0.2 text-[9px] font-mono rounded bg-[#C2A68C]/20 text-[#E6D8C3]">
            DEVIATION
          </span>
        </button>

        {/* 2. Bearing Temp (Top Right) */}
        <button
          onClick={() => setActiveSensor('TEMPERATURE')}
          className={`absolute top-4 right-3 sm:right-6 z-20 p-2.5 rounded-lg border text-left transition-all ${
            activeSensor === 'TEMPERATURE'
              ? 'bg-[#303C35] border-[#5D866C] ring-1 ring-[#5D866C]'
              : 'bg-[#252A27]/90 border-[#303C35] hover:border-[#687069]'
          }`}
        >
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#A8D5BA]">
            <Thermometer className="w-3 h-3 text-[#5D866C]" />
            <span>TEMP DE</span>
          </div>
          <div className="text-xs sm:text-sm font-mono font-bold text-[#F5F5F0] mt-0.5">
            74.2 <span className="text-[10px] font-normal text-[#A2A9A3]">°C</span>
          </div>
          <span className="inline-block mt-1 px-1 py-0.2 text-[9px] font-mono rounded bg-[#5D866C]/20 text-[#A8D5BA]">
            ATTENTION
          </span>
        </button>

        {/* 3. Discharge Pressure (Bottom Left) */}
        <button
          onClick={() => setActiveSensor('PRESSURE')}
          className={`absolute bottom-4 left-3 sm:left-6 z-20 p-2.5 rounded-lg border text-left transition-all ${
            activeSensor === 'PRESSURE'
              ? 'bg-[#303C35] border-[#5D866C] ring-1 ring-[#5D866C]'
              : 'bg-[#252A27]/90 border-[#303C35] hover:border-[#687069]'
          }`}
        >
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#A8D5BA]">
            <Gauge className="w-3 h-3 text-[#5D866C]" />
            <span>PRESSURE</span>
          </div>
          <div className="text-xs sm:text-sm font-mono font-bold text-[#F5F5F0] mt-0.5">
            42.1 <span className="text-[10px] font-normal text-[#A2A9A3]">bar</span>
          </div>
          <span className="inline-block mt-1 px-1 py-0.2 text-[9px] font-mono rounded bg-white/5 text-[#A2A9A3]">
            NOMINAL
          </span>
        </button>

        {/* 4. Suction Flow (Bottom Right) */}
        <button
          onClick={() => setActiveSensor('FLOW')}
          className={`absolute bottom-4 right-3 sm:right-6 z-20 p-2.5 rounded-lg border text-left transition-all ${
            activeSensor === 'FLOW'
              ? 'bg-[#303C35] border-[#5D866C] ring-1 ring-[#5D866C]'
              : 'bg-[#252A27]/90 border-[#303C35] hover:border-[#687069]'
          }`}
        >
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#A8D5BA]">
            <Wind className="w-3 h-3 text-[#5D866C]" />
            <span>FLOW</span>
          </div>
          <div className="text-xs sm:text-sm font-mono font-bold text-[#F5F5F0] mt-0.5">
            318.5 <span className="text-[10px] font-normal text-[#A2A9A3]">m³/h</span>
          </div>
          <span className="inline-block mt-1 px-1 py-0.2 text-[9px] font-mono rounded bg-white/5 text-[#A2A9A3]">
            NOMINAL
          </span>
        </button>
      </div>

      {/* Decision Support Intelligence Flow (Strict Human Review Final Step) */}
      <div className="mt-4 pt-4 border-t border-[#303C35]">
        <div className="text-[11px] font-mono uppercase tracking-wider text-[#A2A9A3] mb-2.5 flex items-center justify-between">
          <span>OPERATIONAL CONTEXT PIPELINE</span>
          <span className="text-[#C2A68C]">NON-CONTROL INTELLIGENCE PATH</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs font-mono">
          <div className="p-2 rounded bg-[#303C35]/40 border border-[#303C35] flex flex-col items-center justify-center">
            <span className="text-[10px] text-[#687069]">01. SOURCE</span>
            <span className="font-semibold text-[#F5F5F0] text-[11px]">5 Sensors</span>
          </div>

          <div className="p-2 rounded bg-[#303C35]/40 border border-[#303C35] flex flex-col items-center justify-center">
            <span className="text-[10px] text-[#687069]">02. VALIDATION</span>
            <span className="font-semibold text-[#5D866C] text-[11px]">98.7% Clean</span>
          </div>

          <div className="p-2 rounded bg-[#303C35]/40 border border-[#303C35] flex flex-col items-center justify-center">
            <span className="text-[10px] text-[#687069]">03. ASSET GRAPH</span>
            <span className="font-semibold text-[#F5F5F0] text-[11px]">Line 04 Context</span>
          </div>

          <div className="p-2 rounded bg-[#303C35]/90 border border-[#C2A68C]/50 flex flex-col items-center justify-center">
            <span className="text-[10px] text-[#C2A68C]">04. CONDITION</span>
            <span className="font-semibold text-[#C2A68C] text-[11px] flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" />
              Deviation
            </span>
          </div>

          {/* CRITICAL: TERMINATION AT HUMAN ENGINEERING REVIEW */}
          <button
            id="hero-investigate-button"
            onClick={onInvestigateClick}
            className="col-span-2 sm:col-span-1 p-2 rounded bg-[#5D866C] hover:bg-[#4d705a] border border-[#5D866C] text-[#F5F5F0] flex flex-col items-center justify-center transition-all cursor-pointer shadow-sm group"
          >
            <span className="text-[10px] text-[#E6D8C3] font-medium flex items-center gap-1">
              <UserCheck className="w-3 h-3" />
              05. DECISION SUPPORT
            </span>
            <span className="font-bold text-[11px] uppercase tracking-wider text-white flex items-center gap-1">
              Investigate
              <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
