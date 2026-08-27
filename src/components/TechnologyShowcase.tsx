import React from 'react';
import { Cpu, Zap, Server, Shield, Layers, Info } from 'lucide-react';

export const TechnologyShowcase: React.FC = () => {
  const techCards = [
    {
      name: 'NVIDIA RAPIDS',
      category: 'Accelerated Time-Series Analytics',
      desc: 'GPU-accelerated dataframe and signal transformation libraries for high-throughput temporal data windowing and normalization.',
      tag: 'Proposed Compute Option',
    },
    {
      name: 'NVIDIA CUDA',
      category: 'Parallel Signal Processing',
      desc: 'Massively parallel execution for real-time FFT frequency spectral decomposition, harmonic extraction, and vibration demodulation.',
      tag: 'Proposed Compute Option',
    },
    {
      name: 'NVIDIA Jetson',
      category: 'Edge Inference Platform',
      desc: 'Compact embedded edge accelerators for executing local sensor filtering, store-and-forward buffering, and anomaly scoring on-premises.',
      tag: 'Proposed Edge Option',
    },
    {
      name: 'NVIDIA Triton Inference Server',
      category: 'Scalable Model Serving',
      desc: 'Multi-framework model inference serving for concurrent execution of multi-sensor degradation and predictive trend models.',
      tag: 'Proposed Inference Option',
    },
  ];

  return (
    <section id="technology" className="py-16 sm:py-24 bg-[#F5F5F0] border-b border-[#D9D8CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6D8C3] border border-[#C2A68C]/60 text-xs font-mono font-semibold tracking-wider text-[#303C35] mb-4">
            <span>PROPOSED TECHNICAL OPTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#252A27]">
            Built with modern data and{' '}
            <span className="text-[#5D866C]">AI infrastructure in mind.</span>
          </h2>
          <p className="mt-3 text-base text-[#687069] max-w-2xl">
            Designed to integrate with high-performance accelerated computing stacks for heavy multivariate time-series ingestion and edge analytics.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {techCards.map((card, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-white border border-[#D9D8CF] shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#EBEBE4] text-[#687069] mb-3 inline-block">
                  {card.tag}
                </span>
                <h3 className="font-mono font-bold text-base text-[#252A27]">
                  {card.name}
                </h3>
                <div className="text-xs font-semibold text-[#5D866C] mb-2 font-mono">
                  {card.category}
                </div>
                <p className="text-xs text-[#687069] leading-relaxed font-sans">
                  {card.desc}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-[#D9D8CF] text-[11px] font-mono text-[#A2A9A3] flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5 text-[#5D866C]" />
                <span>Architecture Target</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Responsible Disclaimer */}
        <div className="p-4 rounded-lg bg-[#E6D8C3]/40 border border-[#C2A68C]/70 flex items-start gap-3 text-xs font-mono text-[#303C35]">
          <Info className="w-4 h-4 text-[#8F6340] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Technical Note:</strong> These technologies are presented as proposed technical options for telemetry processing, edge analytics, AI inference, and model deployment. Their inclusion does not imply confirmed integration, benchmarking, certification, or commercial partnership.
          </p>
        </div>
      </div>
    </section>
  );
};
