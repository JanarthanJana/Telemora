import React from 'react';
import { EDGE_GATEWAYS_DATA } from '../data/mockData';
import { Radio, Database, ArrowRight, Cpu, Server, HardDrive, Wifi, CheckCircle2, RefreshCw, AlertCircle } from 'lucide-react';

export const EdgeTelemetry: React.FC = () => {
  return (
    <section id="edge" className="py-20 sm:py-28 bg-[#F5F5F0] border-b border-[#D9D8CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6D8C3] border border-[#C2A68C]/60 text-xs font-mono font-semibold tracking-wider text-[#303C35] mb-4">
            <span>EDGE → CORE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#252A27] max-w-3xl">
            Designed for environments where{' '}
            <span className="text-[#5D866C]">connectivity isn't perfect.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#687069] max-w-2xl leading-relaxed">
            Telemora represents edge processing, store-and-forward behavior, and synchronization health so teams can understand the state of telemetry pipelines across distributed environments.
          </p>
        </div>

        {/* Edge Pipeline Diagram */}
        <div className="mb-12 p-6 rounded-xl bg-white border border-[#D9D8CF] shadow-xs">
          <div className="text-xs font-mono font-bold text-[#303C35] uppercase tracking-wider mb-6 flex items-center justify-between">
            <span>DISTRIBUTED EDGE TOPOLOGY FLOW</span>
            <span className="text-[#5D866C]">STORE-AND-FORWARD RESILIENCE</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs font-mono text-center">
            <div className="p-3.5 rounded-lg bg-[#F5F5F0] border border-[#D9D8CF] flex flex-col items-center justify-center">
              <Cpu className="w-5 h-5 text-[#5D866C] mb-1.5" />
              <span className="font-bold text-[#252A27]">MACHINES</span>
              <span className="text-[10px] text-[#687069] mt-0.5">Motors, Pumps, Turbines</span>
            </div>

            <div className="p-3.5 rounded-lg bg-[#F5F5F0] border border-[#D9D8CF] flex flex-col items-center justify-center">
              <Radio className="w-5 h-5 text-[#5D866C] mb-1.5" />
              <span className="font-bold text-[#252A27]">SENSORS</span>
              <span className="text-[10px] text-[#687069] mt-0.5">Vib, Temp, Pressure</span>
            </div>

            <div className="p-3.5 rounded-lg bg-[#E6D8C3]/50 border border-[#C2A68C] flex flex-col items-center justify-center">
              <HardDrive className="w-5 h-5 text-[#303C35] mb-1.5" />
              <span className="font-bold text-[#303C35]">EDGE GATEWAYS</span>
              <span className="text-[10px] text-[#687069] mt-0.5">Local Buffer Nodes</span>
            </div>

            <div className="p-3.5 rounded-lg bg-[#F5F5F0] border border-[#D9D8CF] flex flex-col items-center justify-center">
              <Server className="w-5 h-5 text-[#5D866C] mb-1.5" />
              <span className="font-bold text-[#252A27]">LOCAL INGEST</span>
              <span className="text-[10px] text-[#687069] mt-0.5">Windowing & Filters</span>
            </div>

            <div className="p-3.5 rounded-lg bg-[#F5F5F0] border border-[#D9D8CF] flex flex-col items-center justify-center">
              <Wifi className="w-5 h-5 text-[#5D866C] mb-1.5" />
              <span className="font-bold text-[#252A27]">SYNCHRONIZE</span>
              <span className="text-[10px] text-[#687069] mt-0.5">Adaptive Burst Sync</span>
            </div>

            <div className="p-3.5 rounded-lg bg-[#303C35] border border-[#303C35] text-[#F5F5F0] flex flex-col items-center justify-center">
              <Database className="w-5 h-5 text-[#A8D5BA] mb-1.5" />
              <span className="font-bold text-[#F5F5F0]">CENTRAL CORE</span>
              <span className="text-[10px] text-[#A2A9A3] mt-0.5">Cross-Plant Intel</span>
            </div>
          </div>
        </div>

        {/* 4 Gateway Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {EDGE_GATEWAYS_DATA.map((gw) => {
            const isConnected = gw.status === 'CONNECTED';
            const isSyncing = gw.status === 'SYNCING';
            const isStoreForward = gw.status === 'STORE_AND_FORWARD';

            return (
              <div
                key={gw.id}
                className={`p-5 rounded-xl border bg-white flex flex-col justify-between transition-all ${
                  isStoreForward
                    ? 'border-[#C2A68C] shadow-sm'
                    : 'border-[#D9D8CF] shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono font-bold text-sm text-[#252A27]">
                      {gw.id}
                    </span>
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded flex items-center gap-1 ${
                      isConnected
                        ? 'bg-[#5D866C]/20 text-[#5D866C]'
                        : isSyncing
                        ? 'bg-[#5D866C]/10 text-[#303C35]'
                        : 'bg-[#C2A68C]/30 text-[#8F6340]'
                    }`}>
                      {isConnected && <CheckCircle2 className="w-3 h-3 text-[#5D866C]" />}
                      {isSyncing && <RefreshCw className="w-3 h-3 text-[#5D866C] animate-spin" />}
                      {isStoreForward && <AlertCircle className="w-3 h-3 text-[#C2A68C]" />}
                      <span>{gw.status.replace(/_/g, ' ')}</span>
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-[#303C35] mb-1">
                    {gw.name}
                  </div>
                  <div className="text-[11px] text-[#687069] mb-4">
                    {gw.location}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#D9D8CF] space-y-1.5 font-mono text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#687069]">Buffer Queue:</span>
                    <span className={`font-bold ${gw.bufferedPackets > 0 ? 'text-[#C2A68C]' : 'text-[#252A27]'}`}>
                      {gw.bufferedPackets} pkts
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#687069]">Round-Trip Latency:</span>
                    <span className="text-[#252A27]">{gw.latencyMs} ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#687069]">Throughput:</span>
                    <span className="text-[#5D866C] font-semibold">{gw.throughput}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
