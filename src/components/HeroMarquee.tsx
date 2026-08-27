import React from 'react';
import { MARQUEE_ITEMS } from '../data/mockData';

export const HeroMarquee: React.FC = () => {
  return (
    <div className="w-full bg-[#303C35] border-y border-[#5D866C]/40 text-[#E6D8C3] py-3.5 overflow-hidden select-none">
      <div className="animate-marquee-slow flex items-center space-x-8 text-xs sm:text-sm font-mono tracking-widest uppercase">
        {/* Double array for seamless loop */}
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center space-x-8 shrink-0">
            <span className="font-semibold hover:text-white transition-colors">{item}</span>
            <span className="text-[#C2A68C] text-xs opacity-70">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
};
