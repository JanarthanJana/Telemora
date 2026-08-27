import React, { useState } from 'react';
import { FAQ_DATA } from '../data/mockData';
import { ChevronDown, ChevronUp, HelpCircle, ShieldCheck } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#F5F5F0] border-b border-[#D9D8CF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 sm:mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6D8C3] border border-[#C2A68C]/60 text-xs font-mono font-semibold tracking-wider text-[#303C35] mb-4">
            <span>QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#252A27]">
            Designed for engineers.{' '}
            <span className="text-[#5D866C]">Built for operational reality.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#687069]">
            Detailed answers regarding ingestion protocols, topological mapping, edge resilience, and engineering decision support boundaries.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            const isBoundary = item.question.includes('control industrial equipment');

            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? isBoundary
                      ? 'bg-[#E6D8C3]/50 border-[#C2A68C] shadow-sm'
                      : 'bg-white border-[#5D866C] shadow-sm'
                    : 'bg-white border-[#D9D8CF] hover:border-[#687069]'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#5D866C] shrink-0">
                      0{index + 1}
                    </span>
                    <h3 className={`font-mono text-sm sm:text-base font-bold tracking-tight ${
                      isOpen ? 'text-[#252A27]' : 'text-[#303C35]'
                    }`}>
                      {item.question}
                    </h3>
                  </div>

                  <div className="shrink-0 text-[#687069]">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#5D866C]" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 border-t border-[#D9D8CF]/60 text-sm text-[#687069] font-sans leading-relaxed">
                    <p className="mt-3">{item.answer}</p>
                    {isBoundary && (
                      <div className="mt-3 p-3 rounded bg-white border border-[#C2A68C] text-xs font-mono text-[#303C35] flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-[#5D866C] shrink-0" />
                        <span>Crucial distinction: All telemetry outputs terminate at human engineering decision support.</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
