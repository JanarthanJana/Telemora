import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HeroMarquee } from './components/HeroMarquee';
import { About } from './components/About';
import { FeatureGrid } from './components/FeatureGrid';
import { AssetContext } from './components/AssetContext';
import { LiveDemo } from './components/LiveDemo';
import { EdgeTelemetry } from './components/EdgeTelemetry';
import { Architecture } from './components/Architecture';
import { TechnologyShowcase } from './components/TechnologyShowcase';
import { Differentiation } from './components/Differentiation';
import { Pricing } from './components/Pricing';
import { DocumentationSection } from './components/DocumentationSection';
import { FAQ } from './components/FAQ';
import { Testimonial } from './components/Testimonial';
import { Contact } from './components/Contact';
import { EngineeringBoundary } from './components/EngineeringBoundary';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { InvestigationModal } from './components/InvestigationModal';
import { DemoModal } from './components/DemoModal';
import { DocsModal } from './components/DocsModal';

export function App() {
  const [isInvestigationOpen, setIsInvestigationOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isDocsModalOpen, setIsDocsModalOpen] = useState(false);
  const [selectedPlanForDemo, setSelectedPlanForDemo] = useState<string>('ENTERPRISE');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDemoWithPlan = (planName: string) => {
    setSelectedPlanForDemo(planName);
    setIsDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#252A27] font-sans antialiased selection:bg-[#5D866C]/20 selection:text-[#252A27]">
      {/* Sticky Navigation */}
      <Navbar
        onRequestDemo={() => setIsDemoModalOpen(true)}
        onOpenDocs={() => setIsDocsModalOpen(true)}
      />

      {/* Main Narrative Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onExploreClick={() => scrollToSection('platform')}
          onLiveDemoClick={() => scrollToSection('live-demo')}
          onInvestigateClick={() => setIsInvestigationOpen(true)}
        />

        {/* 2. Hero Marquee */}
        <HeroMarquee />

        {/* 3. The Industrial Data Problem (About) */}
        <About />

        {/* 4. Core Platform Capabilities */}
        <FeatureGrid />

        {/* 5. Asset-Centric Experience (Hierarchy & Context) */}
        <AssetContext onOpenInvestigation={() => setIsInvestigationOpen(true)} />

        {/* 6. Representative Live Dashboard & Telemetry Environment */}
        <LiveDemo onOpenInvestigation={() => setIsInvestigationOpen(true)} />

        {/* 7. Edge Telemetry & Gateway Pipeline */}
        <EdgeTelemetry />

        {/* 8. Technical Architecture Centerpiece */}
        <Architecture />

        {/* 9. Proposed Technology Stack */}
        <TechnologyShowcase />

        {/* 10. Platform Differentiation */}
        <Differentiation />

        {/* 11. Platform Pricing & Access */}
        <Pricing onSelectPlan={handleOpenDemoWithPlan} />

        {/* 12. Developer Documentation */}
        <DocumentationSection onOpenDocsModal={() => setIsDocsModalOpen(true)} />

        {/* 13. Operational FAQ */}
        <FAQ />

        {/* 14. Representative Testimonial */}
        <Testimonial />

        {/* 15. Contact & Environment Scoping */}
        <Contact />

        {/* 16. Safety & Engineering Boundary */}
        <EngineeringBoundary />

        {/* 17. Final Call to Action */}
        <FinalCTA
          onExploreClick={() => scrollToSection('platform')}
          onRequestDemo={() => setIsDemoModalOpen(true)}
        />
      </main>

      {/* Enterprise Footer */}
      <Footer
        onRequestDemo={() => setIsDemoModalOpen(true)}
        onOpenDocs={() => setIsDocsModalOpen(true)}
      />

      {/* Interactive Overlays / Modals */}
      <InvestigationModal
        isOpen={isInvestigationOpen}
        onClose={() => setIsInvestigationOpen(false)}
      />

      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        defaultPlan={selectedPlanForDemo}
      />

      <DocsModal
        isOpen={isDocsModalOpen}
        onClose={() => setIsDocsModalOpen(false)}
      />
    </div>
  );
}

export default App;
