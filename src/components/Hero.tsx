import React from 'react';
import { ArrowRight, Play, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';
import { AssetTelemetryVisualization } from './AssetTelemetryVisualization';

interface HeroProps {
  onExploreClick: () => void;
  onLiveDemoClick: () => void;
  onInvestigateClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onLiveDemoClick,
  onInvestigateClick,
}) => {
  return (
    <section id="hero" className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden bg-[#F5F5F0]">
      {/* Subtle architectural grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#D9D8CF_1px,transparent_1px),linear-gradient(to_bottom,#D9D8CF_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-8">
            {/* Technical Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6D8C3] border border-[#C2A68C]/60 text-xs font-mono font-semibold tracking-wider text-[#303C35] self-start">
              <span className="w-2 h-2 rounded-full bg-[#5D866C]"></span>
              <span>INDUSTRIAL TELEMETRY INTELLIGENCE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#252A27] leading-[1.12]">
              Industrial Signals, Converted into{' '}
              <span className="text-[#5D866C] inline-block">Operational Context.</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#687069] leading-relaxed max-w-xl">
              Telemora brings machine telemetry, asset relationships, operating conditions, and maintenance context together so engineering teams can investigate changes with greater clarity.
            </p>

            {/* CTAs & Microcopy */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="hero-explore-btn"
                onClick={onExploreClick}
                className="px-6 py-3.5 rounded-md bg-[#5D866C] hover:bg-[#4d705a] text-[#F5F5F0] font-mono font-semibold text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer active:scale-[0.98]"
              >
                <span>Explore Platform</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-live-demo-btn"
                onClick={onLiveDemoClick}
                className="px-6 py-3.5 rounded-md bg-[#E6D8C3] hover:bg-[#d8c8b0] text-[#252A27] font-mono font-semibold text-sm tracking-wide border border-[#C2A68C] transition-all flex items-center justify-center gap-2 group cursor-pointer active:scale-[0.98]"
              >
                <Play className="w-4 h-4 text-[#5D866C] fill-[#5D866C]" />
                <span>View Live Demo</span>
              </button>
            </div>

            {/* Supporting Microcopy & Trust Pillars */}
            <div className="pt-3 border-t border-[#D9D8CF]/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#687069]">
              <div className="flex items-center gap-1.5 text-[#303C35] font-medium">
                <ShieldCheck className="w-4 h-4 text-[#5D866C]" />
                <span>Decision support for connected industrial environments</span>
              </div>
              <div className="text-[11px] text-[#A2A9A3]">
                Human-in-the-loop review
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Hero Visualization */}
          <div className="lg:col-span-6 w-full">
            <AssetTelemetryVisualization onInvestigateClick={onInvestigateClick} />
          </div>
        </div>
      </div>
    </section>
  );
};
