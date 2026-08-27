import React from 'react';
import { AssetHierarchy } from './AssetHierarchy';
import { Asset } from '../types';

interface AssetContextProps {
  onOpenInvestigation?: () => void;
}

export const AssetContext: React.FC<AssetContextProps> = ({ onOpenInvestigation }) => {
  return (
    <section id="asset-context" className="py-20 sm:py-28 bg-[#F5F5F0] border-b border-[#D9D8CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6D8C3] border border-[#C2A68C]/60 text-xs font-mono font-semibold tracking-wider text-[#303C35] mb-4">
            <span>ASSET CONTEXT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#252A27]">
            Start with the machine.{' '}
            <span className="text-[#5D866C]">Follow the signal.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#687069] max-w-2xl">
            Explore industrial assets hierarchically. Select an equipment node to observe how high-speed sensor streams, physical operating states, data quality indicators, and historical maintenance events converge into unified context.
          </p>
        </div>

        {/* Interactive Asset Hierarchy Component */}
        <AssetHierarchy onOpenInvestigation={onOpenInvestigation} />
      </div>
    </section>
  );
};
