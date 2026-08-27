import React, { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X, Terminal, ArrowRight, ExternalLink } from 'lucide-react';

interface NavbarProps {
  onRequestDemo: () => void;
  onOpenDocs: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestDemo, onOpenDocs }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Platform', href: '#platform' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Asset Context', href: '#asset-context' },
    { label: 'Live Demo', href: '#live-demo' },
    { label: 'Edge & Arch', href: '#architecture' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F5F5F0]/90 backdrop-blur-md border-b border-[#D9D8CF] shadow-xs py-3.5'
            : 'bg-transparent border-b border-[#D9D8CF]/40 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Telemetry Status */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-xs bg-[#303C35] flex items-center justify-center text-[#F5F5F0] font-mono font-bold text-sm tracking-tight border border-[#5D866C]/40 group-hover:border-[#5D866C] transition-colors">
                T
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-extrabold tracking-tight text-xl text-[#252A27]">
                  Telemora<span className="text-[#5D866C]">.net</span>
                </span>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#E6D8C3]/50 border border-[#D9D8CF] text-[11px] font-mono tracking-wider text-[#303C35]">
              <span className="w-2 h-2 rounded-full bg-[#5D866C] animate-pulse"></span>
              <span>TELEMETRY ONLINE</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[14px] font-medium text-[#252A27]/80 hover:text-[#5D866C] transition-colors tracking-tight"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-docs-button"
              onClick={onOpenDocs}
              className="px-3.5 py-1.5 text-xs font-mono font-medium text-[#303C35] hover:text-[#5D866C] hover:bg-[#E6D8C3]/40 rounded border border-transparent hover:border-[#D9D8CF] transition-all flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5 text-[#5D866C]" />
              <span>Docs</span>
            </button>

            <button
              id="nav-request-demo-btn"
              onClick={onRequestDemo}
              className="px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider bg-[#5D866C] hover:bg-[#4d705a] text-[#F5F5F0] rounded shadow-xs hover:shadow transition-all flex items-center gap-1.5 active:scale-[0.98]"
            >
              <span>Request Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="nav-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#252A27] hover:text-[#5D866C] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F5F5F0] pt-24 px-6 flex flex-col justify-between pb-10 lg:hidden border-b border-[#D9D8CF] animate-fadeIn">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#E6D8C3]/70 border border-[#D9D8CF] text-xs font-mono text-[#303C35] self-start">
              <span className="w-2 h-2 rounded-full bg-[#5D866C] animate-pulse"></span>
              <span>TELEMETRY STATUS: ONLINE</span>
            </div>

            <nav className="flex flex-col gap-4 mt-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-semibold text-[#252A27] hover:text-[#5D866C] transition-colors py-1 border-b border-[#D9D8CF]/40"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-[#D9D8CF]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDocs();
              }}
              className="w-full py-3 text-center text-sm font-mono font-medium text-[#303C35] bg-[#E6D8C3]/60 rounded border border-[#D9D8CF]"
            >
              Documentation
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestDemo();
              }}
              className="w-full py-3 text-center text-sm font-mono font-semibold uppercase tracking-wider text-[#F5F5F0] bg-[#5D866C] rounded"
            >
              Request Demo
            </button>
          </div>
        </div>
      )}
    </>
  );
};
