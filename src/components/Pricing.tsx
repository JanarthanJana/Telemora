import React from 'react';
import { Check, ShieldCheck, ArrowRight, Zap, Building, Server } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const plans = [
    {
      id: 'site',
      name: 'SITE',
      subtitle: 'For a single industrial facility or pilot line',
      price: 'Custom',
      description: 'Unified telemetry ingestion and asset-bound context for localized plant reliability teams.',
      features: [
        'Single plant asset topology mapping',
        'Continuous telemetry ingestion & validation',
        'Core condition monitoring & deviation flags',
        'Standard industrial operations dashboard',
        'Basic email & operational alerts',
        'Standard community & ticket support',
      ],
      cta: 'Discuss Site Deployment',
      isPopular: false,
    },
    {
      id: 'enterprise',
      name: 'ENTERPRISE',
      subtitle: 'For multi-site industrial manufacturing operations',
      price: 'Custom',
      description: 'Comprehensive cross-site telemetry intelligence, CMMS integration, and advanced anomaly investigation.',
      features: [
        'Multi-site asset intelligence graph',
        'Advanced high-frequency telemetry processing (1kHz+)',
        'Full topological hierarchy (Plant → Line → Asset)',
        'Contextual anomaly investigation & evidence bundles',
        'CMMS & EAM maintenance history integration',
        'REST & gRPC streaming APIs',
        'Dedicated reliability engineering support',
      ],
      cta: 'Talk to Telemora',
      isPopular: true,
    },
    {
      id: 'platform',
      name: 'PLATFORM',
      subtitle: 'For enterprise-scale, distributed industrial fleets',
      price: 'Custom',
      description: 'Dedicated edge-to-core infrastructure with custom gateway deployment and tailored inference pipelines.',
      features: [
        'Dedicated cloud / on-premise deployment',
        'Distributed edge telemetry & store-and-forward fleet',
        'High-volume streaming (>100k channels)',
        'Custom historian & SCADA protocol adapters',
        'Bespoke condition model pipelines',
        'Enterprise 99.95% uptime SLA',
        '24/7 dedicated operational engineers',
      ],
      cta: 'Contact Enterprise',
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#F5F5F0] border-b border-[#D9D8CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 sm:mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6D8C3] border border-[#C2A68C]/60 text-xs font-mono font-semibold tracking-wider text-[#303C35] mb-4">
            <span>PLATFORM ACCESS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#252A27]">
            Scale telemetry intelligence{' '}
            <span className="text-[#5D866C]">with your operation.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#687069]">
            Tailored deployment models scaled to your plant topologies, sensor density, and edge connectivity requirements.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            return (
              <div
                key={plan.id}
                className={`relative rounded-xl p-7 sm:p-8 flex flex-col justify-between transition-all ${
                  plan.isPopular
                    ? 'bg-[#252A27] text-[#F5F5F0] border-2 border-[#5D866C] shadow-xl lg:-translate-y-2'
                    : 'bg-white text-[#252A27] border border-[#D9D8CF] shadow-xs hover:border-[#687069]'
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#5D866C] text-[#F5F5F0] text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
                    RECOMMENDED
                  </div>
                )}

                <div>
                  {/* Title & Subtitle */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-mono font-bold text-xl tracking-tight">
                      {plan.name}
                    </h3>
                    <span className={`text-xs font-mono px-2 py-0.5 rounded ${
                      plan.isPopular ? 'bg-[#303C35] text-[#A8D5BA]' : 'bg-[#F5F5F0] text-[#687069]'
                    }`}>
                      Tier {plan.id.toUpperCase()}
                    </span>
                  </div>

                  <p className={`text-xs mb-6 ${plan.isPopular ? 'text-[#A2A9A3]' : 'text-[#687069]'}`}>
                    {plan.subtitle}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-[#D9D8CF]/30">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight">
                        {plan.price}
                      </span>
                    </div>
                    <p className={`text-xs mt-2 ${plan.isPopular ? 'text-[#E6D8C3]' : 'text-[#687069]'}`}>
                      {plan.description}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className={`text-xs font-mono font-bold tracking-wider uppercase ${
                      plan.isPopular ? 'text-[#C2A68C]' : 'text-[#303C35]'
                    }`}>
                      INCLUDED CAPABILITIES:
                    </div>
                    <ul className="space-y-2.5 text-xs font-mono">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                            plan.isPopular ? 'text-[#5D866C]' : 'text-[#5D866C]'
                          }`} />
                          <span className={plan.isPopular ? 'text-[#F5F5F0]' : 'text-[#252A27]'}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  id={`pricing-${plan.id}-btn`}
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full py-3.5 px-4 rounded font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] ${
                    plan.isPopular
                      ? 'bg-[#5D866C] hover:bg-[#4d705a] text-[#F5F5F0] shadow-md hover:shadow-lg'
                      : 'bg-[#E6D8C3] hover:bg-[#d8c8b0] text-[#252A27] border border-[#C2A68C]'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Pricing Trust Footer */}
        <div className="mt-12 text-center text-xs font-mono text-[#687069]">
          All enterprise deployments include architecture scoping, gateway connectivity audits, and SLA guarantees.
        </div>
      </div>
    </section>
  );
};
