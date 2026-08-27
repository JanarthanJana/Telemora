import React, { useState } from 'react';
import { ASSETS_DATA } from '../data/mockData';
import { Asset } from '../types';
import { ChevronDown, ChevronRight, Activity, Thermometer, Gauge, Wind, Zap, AlertTriangle, CheckCircle, Clock, Wrench, Shield, ArrowRight } from 'lucide-react';

interface AssetHierarchyProps {
  onSelectAsset?: (asset: Asset) => void;
  onOpenInvestigation?: () => void;
}

export const AssetHierarchy: React.FC<AssetHierarchyProps> = ({
  onSelectAsset,
  onOpenInvestigation,
}) => {
  const [selectedAssetId, setSelectedAssetId] = useState<string>('PUMP-204');
  const [expandedNodes, setExpandedNodes] = useState<{ [key: string]: boolean }>({
    'PLANT_A': true,
    'LINE_04': true,
    'LINE_05': true,
  });

  const selectedAsset = ASSETS_DATA.find((a) => a.id === selectedAssetId) || ASSETS_DATA[0];

  const toggleNode = (nodeKey: string) => {
    setExpandedNodes((prev) => ({ ...prev, [nodeKey]: !prev[nodeKey] }));
  };

  const handleAssetClick = (asset: Asset) => {
    setSelectedAssetId(asset.id);
    if (onSelectAsset) onSelectAsset(asset);
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Tree Explorer: 5 Cols */}
      <div className="lg:col-span-5 rounded-xl bg-white border border-[#D9D8CF] p-5 shadow-xs">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#D9D8CF] text-xs font-mono">
          <span className="font-bold text-[#303C35] uppercase tracking-wider">
            SITE TOPOLOGY EXPLORER
          </span>
          <span className="text-[11px] text-[#5D866C] bg-[#5D866C]/10 px-2 py-0.5 rounded font-mono">
            4 NODES
          </span>
        </div>

        {/* Tree List */}
        <div className="font-mono text-xs space-y-2">
          {/* Root Plant A */}
          <div>
            <button
              onClick={() => toggleNode('PLANT_A')}
              className="w-full flex items-center gap-1.5 py-1 text-left font-bold text-[#252A27] hover:text-[#5D866C]"
            >
              {expandedNodes['PLANT_A'] ? <ChevronDown className="w-4 h-4 text-[#5D866C]" /> : <ChevronRight className="w-4 h-4 text-[#687069]" />}
              <span>PLANT A (Midwest Chemical)</span>
            </button>

            {expandedNodes['PLANT_A'] && (
              <div className="pl-5 border-l border-[#D9D8CF] mt-1 space-y-3">
                {/* Line 04 */}
                <div>
                  <button
                    onClick={() => toggleNode('LINE_04')}
                    className="w-full flex items-center gap-1.5 py-1 text-left font-semibold text-[#303C35] hover:text-[#5D866C]"
                  >
                    {expandedNodes['LINE_04'] ? <ChevronDown className="w-3.5 h-3.5 text-[#5D866C]" /> : <ChevronRight className="w-3.5 h-3.5 text-[#687069]" />}
                    <span>PRODUCTION LINE 04</span>
                  </button>

                  {expandedNodes['LINE_04'] && (
                    <div className="pl-4 border-l border-[#D9D8CF] mt-1 space-y-1.5">
                      {ASSETS_DATA.filter((a) => a.line === 'PRODUCTION LINE 04').map((asset) => {
                        const isSelected = asset.id === selectedAssetId;
                        return (
                          <div
                            key={asset.id}
                            onClick={() => handleAssetClick(asset)}
                            className={`p-2 rounded-md cursor-pointer transition-all flex items-center justify-between ${
                              isSelected
                                ? 'bg-[#303C35] text-[#F5F5F0] shadow-xs'
                                : 'hover:bg-[#E6D8C3]/50 text-[#252A27]'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className={`w-2 h-2 rounded-full ${
                                asset.condition === 'NORMAL'
                                  ? 'bg-[#5D866C]'
                                  : asset.condition === 'REVIEW'
                                  ? 'bg-[#C2A68C]'
                                  : 'bg-[#D9822B]'
                              }`}></span>
                              <span className="font-bold">{asset.id}</span>
                            </div>
                            <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                              isSelected
                                ? 'bg-[#5D866C] text-[#F5F5F0]'
                                : 'bg-[#EBEBE4] text-[#687069]'
                            }`}>
                              {asset.state}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Line 05 */}
                <div>
                  <button
                    onClick={() => toggleNode('LINE_05')}
                    className="w-full flex items-center gap-1.5 py-1 text-left font-semibold text-[#303C35] hover:text-[#5D866C]"
                  >
                    {expandedNodes['LINE_05'] ? <ChevronDown className="w-3.5 h-3.5 text-[#5D866C]" /> : <ChevronRight className="w-3.5 h-3.5 text-[#687069]" />}
                    <span>PRODUCTION LINE 05</span>
                  </button>

                  {expandedNodes['LINE_05'] && (
                    <div className="pl-4 border-l border-[#D9D8CF] mt-1 space-y-1.5">
                      {ASSETS_DATA.filter((a) => a.line === 'PRODUCTION LINE 05').map((asset) => {
                        const isSelected = asset.id === selectedAssetId;
                        return (
                          <div
                            key={asset.id}
                            onClick={() => handleAssetClick(asset)}
                            className={`p-2 rounded-md cursor-pointer transition-all flex items-center justify-between ${
                              isSelected
                                ? 'bg-[#303C35] text-[#F5F5F0] shadow-xs'
                                : 'hover:bg-[#E6D8C3]/50 text-[#252A27]'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className={`w-2 h-2 rounded-full ${
                                asset.condition === 'NORMAL'
                                  ? 'bg-[#5D866C]'
                                  : asset.condition === 'REVIEW'
                                  ? 'bg-[#C2A68C]'
                                  : 'bg-[#D9822B]'
                              }`}></span>
                              <span className="font-bold">{asset.id}</span>
                            </div>
                            <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                              isSelected
                                ? 'bg-[#5D866C] text-[#F5F5F0]'
                                : 'bg-[#EBEBE4] text-[#687069]'
                            }`}>
                              {asset.state}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 pt-3 border-t border-[#D9D8CF] text-[11px] font-mono text-[#687069] flex items-center justify-between">
          <span>SELECT ASSET TO INSPECT CONTEXT</span>
          <span className="text-[#5D866C]">● LIVE UPDATES</span>
        </div>
      </div>

      {/* Right Context Inspector: 7 Cols */}
      <div className="lg:col-span-7 rounded-xl bg-white border border-[#D9D8CF] p-6 shadow-sm space-y-6">
        {/* Asset Header Info */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#D9D8CF]">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-xl text-[#252A27]">
                {selectedAsset.name}
              </span>
              <span className="px-2 py-0.5 rounded font-mono text-xs font-bold bg-[#E6D8C3] text-[#303C35] border border-[#C2A68C]">
                {selectedAsset.code}
              </span>
            </div>
            <div className="text-xs text-[#687069] mt-1 font-mono">
              {selectedAsset.type} // {selectedAsset.line}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-1 rounded font-mono text-xs font-bold ${
              selectedAsset.condition === 'NORMAL'
                ? 'bg-[#5D866C]/20 text-[#5D866C]'
                : selectedAsset.condition === 'REVIEW'
                ? 'bg-[#C2A68C]/30 text-[#8F6340]'
                : 'bg-[#D9822B]/20 text-[#D9822B]'
            }`}>
              CONDITION: {selectedAsset.condition}
            </span>
          </div>
        </div>

        {/* Key Metrics Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
          <div className="p-3 rounded-lg bg-[#F5F5F0] border border-[#D9D8CF]">
            <div className="text-[#687069] text-[11px]">Operating State</div>
            <div className="font-bold text-sm text-[#252A27] mt-0.5">{selectedAsset.state}</div>
          </div>
          <div className="p-3 rounded-lg bg-[#F5F5F0] border border-[#D9D8CF]">
            <div className="text-[#687069] text-[11px]">Data Quality</div>
            <div className="font-bold text-sm text-[#5D866C] mt-0.5">{selectedAsset.quality}%</div>
          </div>
          <div className="p-3 rounded-lg bg-[#F5F5F0] border border-[#D9D8CF]">
            <div className="text-[#687069] text-[11px]">Runtime Hours</div>
            <div className="font-bold text-sm text-[#252A27] mt-0.5">{selectedAsset.runtimeHours} hrs</div>
          </div>
          <div className="p-3 rounded-lg bg-[#F5F5F0] border border-[#D9D8CF]">
            <div className="text-[#687069] text-[11px]">Last Event Logged</div>
            <div className="font-bold text-sm text-[#C2A68C] mt-0.5">{selectedAsset.lastEvent}</div>
          </div>
        </div>

        {/* Connected Sensors Telemetry Table */}
        <div>
          <div className="text-xs font-mono font-bold text-[#303C35] uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>BINDED SENSORS ({selectedAsset.sensors.length} CHANNELS)</span>
            <span className="text-[11px] text-[#687069]">SAMPLE RATES: 10Hz - 2.0kHz</span>
          </div>

          <div className="space-y-2">
            {selectedAsset.sensors.map((sens) => (
              <div
                key={sens.id}
                className="p-2.5 rounded-lg border border-[#D9D8CF] bg-[#FAFAF8] flex items-center justify-between text-xs font-mono"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded bg-[#E6D8C3]/50 text-[#5D866C]">
                    <Activity className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-bold text-[#252A27]">{sens.name}</div>
                    <div className="text-[10px] text-[#687069]">
                      Rate: {sens.sampleRate} | Quality: {sens.quality}%
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-bold text-sm text-[#252A27]">
                    {sens.currentValue} <span className="text-[10px] font-normal text-[#687069]">{sens.unit}</span>
                  </div>
                  <span className={`inline-block text-[9px] px-1.5 py-0.2 rounded ${
                    sens.status === 'NORMAL'
                      ? 'bg-[#5D866C]/20 text-[#5D866C]'
                      : 'bg-[#C2A68C]/30 text-[#8F6340] font-bold'
                  }`}>
                    {sens.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance Context Timeline Preview */}
        <div>
          <div className="text-xs font-mono font-bold text-[#303C35] uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>INTEGRATED MAINTENANCE HISTORY</span>
            <span className="text-[11px] text-[#5D866C]">CMMS SYNCED</span>
          </div>

          <div className="space-y-2 border-l-2 border-[#C2A68C] pl-3">
            {selectedAsset.maintenanceHistory.slice(0, 3).map((m) => (
              <div key={m.id} className="text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#5D866C]">{m.date}</span>
                  <span className="text-[#252A27] font-semibold">{m.title}</span>
                  <span className="text-[10px] text-[#A2A9A3]">({m.type})</span>
                </div>
                <p className="text-[11px] text-[#687069] mt-0.5 font-sans leading-relaxed">
                  {m.notes}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Decision Support Action CTA */}
        {selectedAsset.condition !== 'NORMAL' && (
          <div className="p-3.5 rounded-lg bg-[#E6D8C3]/50 border border-[#C2A68C] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#303C35]">
              <AlertTriangle className="w-4 h-4 text-[#C2A68C] shrink-0" />
              <span>Behavioral deviation flag on {selectedAsset.id} warrants engineering review.</span>
            </div>
            <button
              onClick={onOpenInvestigation}
              className="px-3 py-1.5 rounded bg-[#5D866C] hover:bg-[#4d705a] text-[#F5F5F0] font-bold uppercase tracking-wider flex items-center gap-1 shrink-0 cursor-pointer shadow-xs"
            >
              <span>Investigate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
