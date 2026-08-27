import React from 'react';
import { ShieldCheck, Activity, Terminal, ExternalLink } from 'lucide-react';

interface FooterProps {
  onRequestDemo: () => void;
  onOpenDocs: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestDemo, onOpenDocs }) => {
  return (
    <footer className="bg-[#252A27] text-[#F5F5F0] border-t border-[#303C35] pt-16 pb-12 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#303C35]">
          {/* Brand Col: 4 Cols */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded bg-[#303C35] flex items-center justify-center text-[#F5F5F0] font-mono font-bold text-xs border border-[#5D866C]">
                T
              </div>
              <span className="font-sans font-extrabold tracking-tight text-xl text-[#F5F5F0]">
                Telemora<span className="text-[#5D866C]">.net</span>
              </span>
            </a>

            <p className="text-xs text-[#A2A9A3] font-sans leading-relaxed max-w-sm">
              Industrial telemetry intelligence for connected assets, operational visibility, and engineering decision support.
            </p>

            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#303C35] border border-[#5D866C]/40 text-[11px] text-[#A8D5BA]">
              <span className="w-2 h-2 rounded-full bg-[#5D866C] animate-pulse"></span>
              <span>TELEMETRY SYSTEM ONLINE</span>
            </div>
          </div>

          {/* Nav Col 1: Platform (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#C2A68C] uppercase tracking-wider">
              PLATFORM
            </h4>
            <ul className="space-y-2 text-xs text-[#A2A9A3]">
              <li><a href="#platform" className="hover:text-[#F5F5F0] transition-colors">Overview</a></li>
              <li><a href="#capabilities" className="hover:text-[#F5F5F0] transition-colors">Capabilities</a></li>
              <li><a href="#asset-context" className="hover:text-[#F5F5F0] transition-colors">Asset Context</a></li>
              <li><a href="#live-demo" className="hover:text-[#F5F5F0] transition-colors">Live Demo</a></li>
              <li><a href="#architecture" className="hover:text-[#F5F5F0] transition-colors">Architecture</a></li>
            </ul>
          </div>

          {/* Nav Col 2: Resources (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#C2A68C] uppercase tracking-wider">
              RESOURCES
            </h4>
            <ul className="space-y-2 text-xs text-[#A2A9A3]">
              <li><button onClick={onOpenDocs} className="hover:text-[#F5F5F0] transition-colors text-left">Documentation</button></li>
              <li><button onClick={onOpenDocs} className="hover:text-[#F5F5F0] transition-colors text-left">API Reference</button></li>
              <li><a href="#technology" className="hover:text-[#F5F5F0] transition-colors">Technical Showcase</a></li>
              <li><a href="#faq" className="hover:text-[#F5F5F0] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Nav Col 3: Company (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#C2A68C] uppercase tracking-wider">
              COMPANY
            </h4>
            <ul className="space-y-2 text-xs text-[#A2A9A3]">
              <li><a href="#platform" className="hover:text-[#F5F5F0] transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-[#F5F5F0] transition-colors">Contact</a></li>
              <li><button onClick={onRequestDemo} className="hover:text-[#F5F5F0] transition-colors text-left">Request Demo</button></li>
              <li><a href="#pricing" className="hover:text-[#F5F5F0] transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Nav Col 4: Trust (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#C2A68C] uppercase tracking-wider">
              TRUST
            </h4>
            <ul className="space-y-2 text-xs text-[#A2A9A3]">
              <li><a href="#safety-boundary" className="hover:text-[#F5F5F0] transition-colors">Safety Boundary</a></li>
              <li><span className="text-[#687069]">Privacy Protocol</span></li>
              <li><span className="text-[#687069]">Terms of Service</span></li>
              <li><span className="text-[#687069]">Security & SLA</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#687069]">
          <div>
            © 2026 Telemora. All rights reserved. Telemora.net
          </div>

          <div className="flex items-center gap-4">
            <span>Precision Engineering Decision Support</span>
            <span>•</span>
            <span className="text-[#5D866C] font-semibold">TELEMETRY STATUS ● ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
