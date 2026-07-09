/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from '../context/RouterContext';
import { SERVICES } from '../data';
import { 
  ArrowRight, 
  ShieldCheck, 
  Globe, 
  Users, 
  FileText, 
  CheckCircle2, 
  ChevronRight, 
  Search, 
  Building2, 
  CheckSquare, 
  Truck 
} from 'lucide-react';
import { gsap } from 'gsap';

export const Home: React.FC = () => {
  const { navigateTo } = useRouter();
  const [activeTab, setActiveTab] = useState<'sourcing' | 'inspection' | 'logistics'>('sourcing');
  
  // Ref elements for GSAP animations
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);

  // Animated counters
  const [stats, setStats] = useState({
    capitalSaved: 0,
    suppliersVetted: 0,
    activeContainers: 0,
    inspectionsCompleted: 0
  });

  useEffect(() => {
    // 1. Counter Animations
    const duration = 2000;
    const steps = 50;
    const intervalTime = duration / steps;
    let stepCount = 0;

    const targetStats = {
      capitalSaved: 1450000000, // 1.45B Naira
      suppliersVetted: 640,
      activeContainers: 180,
      inspectionsCompleted: 1250
    };

    const timer = setInterval(() => {
      stepCount++;
      setStats({
        capitalSaved: Math.floor((targetStats.capitalSaved / steps) * stepCount),
        suppliersVetted: Math.min(Math.floor((targetStats.suppliersVetted / steps) * stepCount), targetStats.suppliersVetted),
        activeContainers: Math.min(Math.floor((targetStats.activeContainers / steps) * stepCount), targetStats.activeContainers),
        inspectionsCompleted: Math.min(Math.floor((targetStats.inspectionsCompleted / steps) * stepCount), targetStats.inspectionsCompleted)
      });

      if (stepCount >= steps) {
        setStats(targetStats);
        clearInterval(timer);
      }
    }, intervalTime);

    // 2. GSAP Entrance Animations
    const ctx = gsap.context(() => {
      // Set initial states to avoid flashes
      gsap.set([titleRef.current, subtitleRef.current, ctaGroupRef.current], { opacity: 0, y: 30 });
      
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.to(titleRef.current, { opacity: 1, y: 0, duration: 1.2, delay: 0.2 })
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 1.0 }, '-=0.8')
        .to(ctaGroupRef.current, { opacity: 1, y: 0, duration: 0.8 }, '-=0.7');

      // Staggered pillars reveal
      if (pillarsRef.current) {
        const pillarCards = pillarsRef.current.children;
        gsap.fromTo(pillarCards, 
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', scrollTrigger: {
            trigger: pillarsRef.current,
            start: 'top 85%',
          }}
        );
      }
    }, heroRef);

    return () => {
      clearInterval(timer);
      ctx.revert();
    };
  }, []);

  // Format big money
  const formatNaira = (num: number) => {
    if (num >= 1000000000) {
      return `₦${(num / 1000000000).toFixed(2)}B+`;
    }
    return `₦${num.toLocaleString()}`;
  };

  return (
    <div ref={heroRef} className="bg-brand-navy min-h-screen text-slate-100 overflow-x-hidden">
      
      {/* SECTION 1: HERO & INTEGRATED GEOMETRIC MAP GRAPHIC */}
      <section id="home-hero" className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 premium-grain editorial-grid">
        
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-brand-emerald/10 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Custom SVG Line-Art Trade corridor connecting Guangzhou/Shenzhen to Lagos/Abuja */}
        <div className="absolute inset-0 z-0 opacity-15 hidden md:block pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1100 200 C950 250, 600 450, 450 700" stroke="#047857" strokeWidth="2" strokeDasharray="6 6" className="animate-[dash_30s_linear_infinite]" />
            <circle cx="1100" cy="200" r="8" fill="#047857" />
            <circle cx="1100" cy="200" r="18" stroke="#047857" strokeWidth="1" className="animate-ping opacity-70" />
            <text x="1120" y="205" fill="#0F172A" className="font-mono text-xs tracking-wider" fontWeight="bold">GUANGZHOU HUB (CAN)</text>
            
            <circle cx="450" cy="700" r="8" fill="#10B981" />
            <circle cx="450" cy="700" r="18" stroke="#10B981" strokeWidth="1" className="animate-ping opacity-70" />
            <text x="310" y="705" fill="#0F172A" className="font-mono text-xs tracking-wider text-right" fontWeight="bold">LAGOS PORT (LOS)</text>
            
            {/* Minimalist Grid coordinate references */}
            <line x1="1100" y1="0" x2="1100" y2="900" stroke="rgba(4, 120, 87, 0.05)" />
            <line x1="450" y1="0" x2="450" y2="900" stroke="rgba(4, 120, 87, 0.05)" />
            <line x1="0" y1="200" x2="1440" y2="200" stroke="rgba(4, 120, 87, 0.05)" />
            <line x1="0" y1="700" x2="1440" y2="700" stroke="rgba(4, 120, 87, 0.05)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2.5 bg-brand-gold/10 border border-brand-gold/20 px-4 py-1.5 rounded-full text-[11px] font-mono tracking-widest uppercase text-brand-gold">
            <span className="w-2 h-2 bg-brand-gold rounded-full animate-pulse"></span>
            PROXIMATE REPRESENTATION • GUANGZHOU & SHENZHEN
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <h1 
              ref={titleRef}
              className="font-serif text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.1]"
            >
              Stop Buying From <br className="hidden md:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-[#FAF8F5] to-brand-gold">
                China Blind.
              </span>
            </h1>

            <p 
              ref={subtitleRef}
              className="max-w-2xl mx-auto text-slate-300 font-light text-base md:text-lg leading-relaxed"
            >
              African importers lose billions yearly trusting online pictures, unvetted middle-agents, and empty supplier promises. Balanti acts as your physical, bilingual proxy in China—visiting factories, auditing raw materials, and inspecting cargo before you release final funds.
            </p>
          </div>

          <div 
            ref={ctaGroupRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              id="hero-primary-cta"
              onClick={() => navigateTo('contact')}
              className="w-full sm:w-auto group flex items-center justify-center gap-3 bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-semibold uppercase tracking-wider text-xs px-8 py-4.5 rounded shadow-lg shadow-brand-gold/10 hover:shadow-brand-gold/30 transition-all duration-300 cursor-pointer"
            >
              Get a Free Sourcing Consultation
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              id="hero-secondary-cta"
              onClick={() => navigateTo('services')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent hover:bg-brand-charcoal border border-slate-700 hover:border-slate-400 text-slate-200 hover:text-white font-semibold uppercase tracking-wider text-xs px-8 py-4.5 rounded transition-all duration-300 cursor-pointer"
            >
              See Our Services
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST PILLARS STRIP ("WHY BALANTI") */}
      <section id="home-why-balanti" className="py-24 bg-brand-charcoal border-y border-brand-gold/10 relative premium-grain">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="font-mono text-xs text-brand-gold uppercase tracking-widest block">
              INSTITUTIONAL SAFEGUARDS
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
              Why African Importers Entrust Their Capital to Balanti
            </h2>
            <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
              We operate strictly from the buyer’s interest. We have zero corporate affiliations with Chinese manufacturers, and we accept zero kickbacks, working strictly on fixed fees.
            </p>
          </div>

          <div ref={pillarsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-brand-navy border border-brand-gold/10 hover:border-brand-gold/40 p-8 rounded transition-all duration-500 hover:-translate-y-1.5 space-y-6">
              <div className="w-12 h-12 rounded bg-brand-gold/5 border border-brand-gold/20 flex items-center justify-center text-brand-gold">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-medium text-white">
                Physical On-the-Ground Auditing
              </h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                We are not remote directory browsers. Our agents live in Guangdong Province and physically drive to the manufacturing zones, warehouses, and container ports.
              </p>
            </div>

            <div className="bg-brand-navy border border-brand-gold/10 hover:border-brand-gold/40 p-8 rounded transition-all duration-500 hover:-translate-y-1.5 space-y-6">
              <div className="w-12 h-12 rounded bg-brand-gold/5 border border-brand-gold/20 flex items-center justify-center text-brand-gold">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-medium text-white">
                Fluent Mandarin & Local Fluency
              </h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                We negotiate directly with factory managers and engineering heads in Mandarin, bypassing intermediate trading desk agents and eliminating translation markups.
              </p>
            </div>

            <div className="bg-brand-navy border border-brand-gold/10 hover:border-brand-gold/40 p-8 rounded transition-all duration-500 hover:-translate-y-1.5 space-y-6">
              <div className="w-12 h-12 rounded bg-brand-gold/5 border border-brand-gold/20 flex items-center justify-center text-brand-gold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-medium text-white">
                Absolute Trade Verification
              </h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                We demand physical business license records, verify official bank coordinates, and check state registration profiles to safeguard you from advanced payment scams.
              </p>
            </div>

            <div className="bg-brand-navy border border-brand-gold/10 hover:border-brand-gold/40 p-8 rounded transition-all duration-500 hover:-translate-y-1.5 space-y-6">
              <div className="w-12 h-12 rounded bg-brand-gold/5 border border-brand-gold/20 flex items-center justify-center text-brand-gold">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-medium text-white">
                Granular QC Reporting System
              </h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Receive a massive 30+ page PDF containing exact dimension checks, high-definition photo galleries, real-time stress test videos, and verified packing tallies within 24 hours.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: CREDIBILITY STATS & NUMBER COUNTERS */}
      <section id="home-credibility" className="py-20 bg-brand-navy border-b border-brand-gold/10 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            
            <div className="space-y-2">
              <span className="block font-serif text-3xl md:text-5xl font-bold text-brand-gold tracking-tight">
                {formatNaira(stats.capitalSaved)}
              </span>
              <span className="block text-xs font-mono tracking-widest text-slate-400 uppercase">
                Client Import Capital Protected
              </span>
            </div>

            <div className="space-y-2">
              <span className="block font-serif text-3xl md:text-5xl font-bold text-brand-gold tracking-tight">
                {stats.suppliersVetted}+
              </span>
              <span className="block text-xs font-mono tracking-widest text-slate-400 uppercase">
                Chinese Factories Vetted
              </span>
            </div>

            <div className="space-y-2">
              <span className="block font-serif text-3xl md:text-5xl font-bold text-brand-gold tracking-tight">
                {stats.activeContainers}+
              </span>
              <span className="block text-xs font-mono tracking-widest text-slate-400 uppercase">
                Lagos-Bound Containers Supervised
              </span>
            </div>

            <div className="space-y-2">
              <span className="block font-serif text-3xl md:text-5xl font-bold text-brand-gold tracking-tight">
                {stats.inspectionsCompleted}+
              </span>
              <span className="block text-xs font-mono tracking-widest text-slate-400 uppercase">
                Physical Inspections Conducted
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: CONDENSED SERVICES PREVIEW BY TAB */}
      <section id="home-services-preview" className="py-24 bg-brand-navy premium-grain">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4 max-w-2xl">
              <span className="font-mono text-xs text-brand-gold uppercase tracking-widest block">
                WHAT WE HANDLE
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white tracking-tight">
                Comprehensive Inspection & Procurement Framework
              </h2>
            </div>
            <button
              onClick={() => navigateTo('services')}
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-gold hover:text-white transition-colors duration-300 cursor-pointer"
            >
              Explore Full Sourcing Rates
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Sourcing Category Tabs */}
          <div className="flex border-b border-brand-gold/10 gap-6 mb-10 overflow-x-auto pb-px">
            {[
              { id: 'sourcing', label: '1. Sourcing & Audits', icon: Search },
              { id: 'inspection', label: '2. Quality & QC Testing', icon: CheckSquare },
              { id: 'logistics', label: '3. Packing & Consolidations', icon: Truck },
            ].map((tab) => {
              const IconComp = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'sourcing' | 'inspection' | 'logistics')}
                  className={`flex items-center gap-2 text-xs font-mono uppercase tracking-widest pb-4 border-b-2 transition-all duration-300 shrink-0 cursor-pointer ${
                    activeTab === tab.id
                      ? 'border-brand-gold text-brand-gold'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.filter((s) => s.category === activeTab).map((service) => (
              <div 
                key={service.id}
                className="bg-[#0D1525] border border-brand-gold/10 hover:border-brand-gold/30 rounded p-8 flex flex-col justify-between space-y-8 transition-all duration-300 hover:shadow-xl hover:shadow-brand-navy/50"
              >
                <div className="space-y-4">
                  <span className="font-mono text-xs text-brand-gold/70">{service.deliverable}</span>
                  <h3 className="font-serif text-xl font-medium text-white">{service.title}</h3>
                  <p className="text-slate-400 text-sm font-light leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-brand-gold/5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Indicative Fee:</span>
                    <strong className="text-brand-gold font-mono">{service.indicativeFee}</strong>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Delivery Time:</span>
                    <span className="text-slate-300 font-mono">{service.timeline}</span>
                  </div>
                  <button
                    onClick={() => navigateTo('services')}
                    className="w-full mt-4 flex items-center justify-center gap-1.5 border border-brand-gold/15 hover:border-brand-gold text-xs uppercase tracking-wider py-3.5 rounded text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    View Deliverables
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5: CONDENSED WORKFLOW PREVIEW */}
      <section id="home-workflow-preview" className="py-24 bg-brand-charcoal border-y border-brand-gold/10 relative premium-grain">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="font-mono text-xs text-brand-gold uppercase tracking-widest block">
                THE VERIFICATION LIFECYCLE
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight">
                How We Guard Your Goods From Sourcing to Container Sealing
              </h2>
              <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                Importing should not feel like gambling. We structure our physical involvement into a six-stage checklist designed to give you total transparency.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => navigateTo('how-it-works')}
                  className="group flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-brand-navy text-xs font-semibold uppercase tracking-wider px-6 py-4 rounded transition-all duration-300 cursor-pointer"
                >
                  See Full Operative Workflow
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {[
                { step: '01', title: 'Upload Specs & Budget', desc: 'Detail your precise product dimensions, target MOQs, and expected target purchase cost.' },
                { step: '02', title: 'Factory Audit & Vetting', desc: 'We physically travel to candidate factories to inspect equipment and corporate registration.' },
                { step: '03', title: 'Sample Spec Checks', desc: 'We extract production-line samples to test against your checklist before bulk assembly begins.' },
                { step: '04', title: 'Pre-Shipment Inspections', desc: 'We pull statistical random boxes from finalized orders to stress-test functions and look.' },
              ].map((item) => (
                <div 
                  key={item.step}
                  className="flex gap-6 bg-brand-navy p-6 rounded border border-brand-gold/5 hover:border-brand-gold/15 transition-all duration-300"
                >
                  <span className="font-serif text-2xl font-bold text-brand-gold/40">{item.step}</span>
                  <div className="space-y-1">
                    <h4 className="font-serif text-base font-semibold text-white">{item.title}</h4>
                    <p className="text-slate-400 text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 6: INSTITUTIONAL CTA CLOSING BLOCK */}
      <section id="home-cta-block" className="py-24 bg-brand-navy relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/30 via-transparent to-[#070B13] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-8">
          
          <div className="inline-flex w-12 h-12 rounded-full bg-brand-gold/10 border border-brand-gold/30 items-center justify-center text-brand-gold mx-auto">
            <ShieldCheck className="w-6 h-6" />
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
              Protect Your Next Import Shipment
            </h2>
            <p className="max-w-2xl mx-auto text-slate-300 font-light text-sm md:text-base leading-relaxed">
              Before you wire another 30% production deposit or release the final shipping funds, let our bilingual specialists establish physical, unbribable safeguards.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => navigateTo('contact')}
              className="w-full sm:w-auto group flex items-center justify-center gap-2.5 bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-semibold uppercase tracking-wider text-xs px-8 py-4.5 rounded transition-all duration-300 cursor-pointer shadow-lg shadow-brand-gold/10"
            >
              Consult With Our China Agents
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-300 font-semibold uppercase tracking-wider text-xs px-8 py-4.5 rounded transition-all duration-300 hover:text-white"
            >
              Direct WeChat / WhatsApp
            </a>
          </div>

          <p className="text-slate-500 text-xs font-mono">
            FREE INITIAL PRODUCT CRITIQUE • AFFILIATED WITH OXILION CORPORATE ADVISORY
          </p>

        </div>
      </section>

    </div>
  );
};
