import React from 'react';
import { ArrowRight, ShieldCheck, Play, Radio, Activity } from 'lucide-react';

interface FinalCTAProps {
  onExploreClick: () => void;
  onRequestDemo: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onExploreClick, onRequestDemo }) => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#303C35] text-[#F5F5F0] overflow-hidden border-b border-[#252A27]">
      {/* Fine technical grid and subtle animated telemetry traces */}
      <div className="absolute inset-0 bg-[radial-gradient(#5D866C_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      {/* Subtle telemetry trace SVG in background */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 0 100 Q 200 40, 400 120 T 800 80 T 1200 160 T 1600 90"
          fill="none"
          stroke="#5D866C"
          strokeWidth="2"
          strokeDasharray="6 6"
          className="animate-signal-flow"
        />
        <path
          d="M 0 240 Q 300 180, 600 260 T 1200 200 T 1800 280"
          fill="none"
          stroke="#C2A68C"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
      </svg>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#252A27] border border-[#5D866C]/40 text-xs font-mono font-semibold tracking-wider text-[#A8D5BA] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#5D866C] animate-pulse"></span>
          <span>TELEMETRY INTELLIGENCE LAYER</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F5F0] leading-tight">
          Turn machine signals into{' '}
          <span className="text-[#C2A68C]">operational context.</span>
        </h2>

        <p className="mt-6 text-base sm:text-lg text-[#A2A9A3] max-w-2xl mx-auto leading-relaxed font-sans">
          Connect telemetry, assets, operating conditions, and maintenance context in one intelligence layer.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="final-explore-btn"
            onClick={onExploreClick}
            className="w-full sm:w-auto px-7 py-3.5 rounded-md bg-[#5D866C] hover:bg-[#4d705a] text-[#F5F5F0] font-mono font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer group active:scale-[0.98]"
          >
            <span>Explore the Platform</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id="final-request-demo-btn"
            onClick={onRequestDemo}
            className="w-full sm:w-auto px-7 py-3.5 rounded-md bg-[#252A27] hover:bg-[#1E2320] text-[#E6D8C3] font-mono font-bold text-xs uppercase tracking-wider border border-[#C2A68C]/60 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
          >
            <span>Request a Demo</span>
          </button>
        </div>

        <div className="mt-8 text-xs font-mono text-[#687069]">
          Designed for engineers. Terminal decision support with human verification.
        </div>
      </div>
    </section>
  );
};
