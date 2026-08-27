import React, { useState } from 'react';
import { X, Terminal, Code, BookOpen, Layers, Check, Copy } from 'lucide-react';

interface DocsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DocsModal: React.FC<DocsModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'REST' | 'GRPC' | 'MQTT'>('REST');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const codeSnippets = {
    REST: `// REST Stream Ingestion Endpoint
POST /v1/plants/{plant_id}/lines/{line_id}/assets/{asset_id}/telemetry
Headers:
  Authorization: Bearer <token>
  X-Telemora-Gateway-ID: GW-01
Body:
{
  "timestamp_utc": "2026-08-27T14:21:08.412Z",
  "operating_state": "RUNNING",
  "metrics": {
    "vibration_de_rms_mms": 7.82,
    "temp_bearing_c": 74.2,
    "pressure_discharge_bar": 42.1
  }
}`,
    GRPC: `// Protocol Buffer Service Definition (v1.4)
syntax = "proto3";
package telemora.telemetry.v1;

service TelemetryIngestionService {
  rpc StreamTelemetryFrames (stream TelemetryFrame) 
      returns (IngestionAck);
}

message TelemetryFrame {
  string asset_id = 1;
  int64 timestamp_epoch_ms = 2;
  repeated SignalValue signals = 3;
  OperatingState state = 4;
}`,
    MQTT: `# MQTT Sparkplug B Topic Structure
spBv1.0/PLANT_A/DDATA/LINE_04/PUMP_204

Payload:
{
  "timestamp": 1787840468412,
  "metrics": [
    { "name": "Vib/DE_RMS", "type": "Float", "value": 7.82 },
    { "name": "Temp/Bearing", "type": "Float", "value": 74.2 }
  ],
  "seq": 149204
}`,
  };

  const handleCopy = () => {
    navigator.clipboard?.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#1E2320] text-[#F5F5F0] rounded-2xl border border-[#303C35] shadow-2xl overflow-hidden font-mono text-xs flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 bg-[#171A18] border-b border-[#303C35] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Terminal className="w-5 h-5 text-[#5D866C]" />
            <div>
              <span className="font-bold text-sm text-[#F5F5F0]">
                TELEMORA DEVELOPER SPECIFICATION
              </span>
              <span className="ml-2 text-[10px] px-2 py-0.5 rounded bg-[#C2A68C]/30 text-[#E6D8C3]">
                PREVIEW
              </span>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded text-[#A2A9A3] hover:text-[#F5F5F0]">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Tabs */}
        <div className="px-6 pt-4 flex items-center justify-between border-b border-[#303C35] bg-[#1E2320]">
          <div className="flex gap-2">
            {(['REST', 'GRPC', 'MQTT'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs font-bold transition-colors border-b-2 ${
                  activeTab === tab
                    ? 'border-[#5D866C] text-[#F5F5F0] bg-[#252A27]'
                    : 'border-transparent text-[#687069] hover:text-[#A2A9A3]'
                }`}
              >
                {tab} API
              </button>
            ))}
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1 mb-2 rounded bg-[#252A27] text-[#A8D5BA] hover:bg-[#303C35] transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy Spec'}</span>
          </button>
        </div>

        {/* Code View */}
        <div className="p-6 overflow-y-auto flex-1 bg-[#171A18]">
          <pre className="text-xs text-[#A8D5BA] leading-relaxed">
            <code>{codeSnippets[activeTab]}</code>
          </pre>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#1E2320] border-t border-[#303C35] flex items-center justify-between text-[11px] text-[#687069]">
          <span>Full SDK libraries in Go, Python, C++, and Rust releasing in Q4 2026.</span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded bg-[#252A27] text-[#F5F5F0] hover:bg-[#303C35]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
