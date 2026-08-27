import React, { useState } from 'react';
import { Terminal, Code, BookOpen, Layers, ArrowRight, Copy, Check, ExternalLink } from 'lucide-react';

interface DocumentationSectionProps {
  onOpenDocsModal?: () => void;
}

export const DocumentationSection: React.FC<DocumentationSectionProps> = ({
  onOpenDocsModal,
}) => {
  const [copied, setCopied] = useState(false);

  const sampleSnippet = `// Telemora Telemetry Frame Ingestion Schema (v1.4)
POST /api/v1/telemetry/frames
Authorization: Bearer <plant_edge_token>
Content-Type: application/json

{
  "asset_id": "PUMP-204",
  "plant_id": "PLANT-A-MIDWEST",
  "line_id": "LINE-04",
  "timestamp": "2026-08-27T14:21:08.412Z",
  "operating_state": "RUNNING",
  "signals": [
    { "sensor_id": "SENS-204-VIB", "channel": "vibration_de_rms", "val": 7.82, "unit": "mm/s" },
    { "sensor_id": "SENS-204-TMP", "channel": "temp_de_bearing", "val": 74.2, "unit": "deg_C" },
    { "sensor_id": "SENS-204-PRS", "channel": "discharge_pressure", "val": 42.1, "unit": "bar" }
  ],
  "gateway_meta": { "gw_id": "GATEWAY-01", "sync_latency_ms": 14 }
}`;

  const copyCode = () => {
    navigator.clipboard?.writeText(sampleSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const docModules = [
    { title: 'Telemetry Ingestion APIs', desc: 'REST, gRPC, and MQTT ingestion specs for high-speed streaming frames.' },
    { title: 'Industrial Connector Guides', desc: 'Step-by-step connection blueprints for OPC UA, Sparkplug B, and Modbus TCP.' },
    { title: 'Asset & Event Schemas', desc: 'Standardized JSON & Protocol Buffer definitions for plant equipment hierarchies.' },
    { title: 'Edge Deployment References', desc: 'Docker & Kubernetes manifests for edge collector nodes and buffer proxies.' },
    { title: 'Condition Intelligence APIs', desc: 'Programmatic endpoints to query active deviation signals and historical baselines.' },
  ];

  return (
    <section id="documentation" className="py-20 sm:py-28 bg-[#EFEFEA] border-b border-[#D9D8CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6D8C3] border border-[#C2A68C]/60 text-xs font-mono font-semibold tracking-wider text-[#303C35] mb-4">
            <span>DEVELOPER RESOURCES</span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#252A27]">
                Connect telemetry to your{' '}
                <span className="text-[#5D866C]">engineering workflows.</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#687069] max-w-2xl">
                Standardized APIs, open telemetry ingestion schemas, and edge container references to integrate Telemora into your existing SCADA, historian, and data lake pipelines.
              </p>
            </div>

            <span className="px-3.5 py-1.5 rounded-full bg-[#C2A68C]/30 text-[#8F6340] font-mono text-xs font-bold uppercase tracking-wider border border-[#C2A68C]">
              COMING SOON
            </span>
          </div>
        </div>

        {/* Documentation Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 5 Cols: Module List */}
          <div className="lg:col-span-5 space-y-3 font-mono">
            {docModules.map((doc, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-[#D9D8CF] shadow-xs hover:border-[#5D866C] transition-colors cursor-pointer group"
                onClick={onOpenDocsModal}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm text-[#252A27] group-hover:text-[#5D866C] transition-colors">
                    {doc.title}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#687069] group-hover:text-[#5D866C]" />
                </div>
                <p className="text-xs text-[#687069] font-sans leading-relaxed">
                  {doc.desc}
                </p>
              </div>
            ))}

            <button
              onClick={onOpenDocsModal}
              className="w-full py-3 px-4 rounded bg-[#303C35] hover:bg-[#252A27] text-[#F5F5F0] text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all shadow-xs"
            >
              <span>Documentation Coming Soon</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right 7 Cols: Interactive Code Snippet */}
          <div className="lg:col-span-7 rounded-xl bg-[#1E2320] border border-[#303C35] overflow-hidden shadow-md">
            <div className="px-4 py-3 bg-[#171A18] border-b border-[#303C35] flex items-center justify-between text-xs font-mono text-[#A2A9A3]">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#5D866C]" />
                <span>telemetry_frame_schema.json</span>
              </div>
              <button
                onClick={copyCode}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#252A27] hover:bg-[#303C35] text-[#F5F5F0] text-[11px] transition-colors"
              >
                {copied ? <Check className="w-3 h-3 text-[#5D866C]" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <pre className="p-4 sm:p-5 text-[11px] sm:text-xs font-mono text-[#A8D5BA] leading-relaxed overflow-x-auto">
              <code>{sampleSnippet}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
