/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { useRouter } from '../context/RouterContext';
import { Shield, Target, Compass, Award, ArrowRight, FileCheck, Landmark, Users } from 'lucide-react';
import { gsap } from 'gsap';

export const About: React.FC = () => {
  const { navigateTo } = useRouter();
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate entry blocks
      gsap.fromTo('.about-fade-in', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' }
      );

      // Scroll triggered timeline points
      gsap.fromTo('.timeline-step',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out', scrollTrigger: {
          trigger: '.timeline-container',
          start: 'top 80%',
        }}
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-brand-navy min-h-screen text-slate-100 pt-32 pb-24 overflow-x-hidden premium-grain">
      
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-center md:text-left">
        <div className="max-w-3xl space-y-4">
          <span className="font-mono text-xs text-brand-gold uppercase tracking-widest block about-fade-in">
            OUR GENESIS & MANDATE
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold text-white tracking-tight leading-tight about-fade-in">
            Bypassing the Digital Screen to Safeguard African Capital
          </h1>
          <p className="text-slate-300 font-light text-base md:text-lg leading-relaxed about-fade-in">
            Balanti Investment was established to bridge the physical divide between Nigerian importers and Chinese manufacturers. We don’t run database directories; we represent your eyes and ears on the factory floor.
          </p>
        </div>
      </section>

      {/* CORE PHILOSOPHY: THE DIRECTORY GAP */}
      <section className="bg-brand-charcoal border-y border-brand-gold/10 py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/[0.01] to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6 about-fade-in">
            <span className="font-mono text-xs text-brand-gold uppercase tracking-widest block">
              THE GAP IN INTERNATIONAL TRADE
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Why Online Platforms Are No Longer Enough
            </h2>
            <div className="space-y-4 text-slate-300 font-light text-sm md:text-base leading-relaxed">
              <p>
                Alibaba, Made-in-China, and Global Sources have commoditized directory Listings. They make it incredibly easy to find a contact, but they leave you entirely blind when it comes to execution.
              </p>
              <p>
                Over 85% of profiles registered as "Factories" are actually small trading desks of 3 to 5 salespeople who have never stepped inside a production plant. They mark up your pricing, misrepresent their capability, and disappear when a defective container lands at Apapa Port.
              </p>
              <p>
                <strong>Balanti was built to change that.</strong> Affiliated with the Oxilion corporate network, we provide real corporate-grade sourcing, contract auditing, and quality inspection backed by legal discipline and on-the-ground Chinese fluency.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#0B111E] border border-brand-gold/10 p-10 rounded space-y-8 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-bl-full pointer-events-none"></div>
            <h3 className="font-serif text-xl font-medium text-brand-gold">Our Operating Standard</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-white font-medium">Buyer-Aligned Commitment</h4>
                  <p className="text-slate-400 text-xs font-light mt-1 leading-relaxed">
                    We represent the buyer, and the buyer only. We receive absolutely zero commissions or referral fees from Chinese suppliers, guaranteeing 100% objective reporting.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-white font-medium">Mandarin-Language Command</h4>
                  <p className="text-slate-400 text-xs font-light mt-1 leading-relaxed">
                    We speak directly with engineering supervisors and owners on-site in Mandarin, cutting out intermediate sales representatives and securing local factory prices.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-white font-medium">Oxilion Network Alignment</h4>
                  <p className="text-slate-400 text-xs font-light mt-1 leading-relaxed">
                    Backed by the Oxilion corporate advisory infrastructure, our clients gain priority channels to institutional finance, custom-vetted contracts, and legal recourse.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* THREE-PHASE GROWTH ROADMAP SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="font-mono text-xs text-brand-gold uppercase tracking-widest block">
            OUR EVOLUTIONARY ROADMAP
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white tracking-tight">
            The Three Phases of Balanti Sourcing
          </h2>
          <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
            We are structuring a modern trade gateway. By starting as an on-demand verification service, we are curating the most comprehensive roster of pre-vetted factories in China.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 timeline-container">
          
          {/* Phase 1 */}
          <div className="bg-[#0D1525] border border-brand-gold/10 p-8 rounded relative flex flex-col justify-between space-y-8 timeline-step">
            <div className="space-y-4">
              <span className="font-mono text-xs text-brand-gold font-bold uppercase tracking-wider block bg-brand-gold/10 border border-brand-gold/20 px-3 py-1 rounded w-fit">
                Phase 01 — Active
              </span>
              <h3 className="font-serif text-2xl font-medium text-white">Paid Sourcing & QC Service</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Direct, physically-present fee-for-service trade auditing. Importers specify product models and we execute local factory trips, license verification, contract negotiation, and pre-shipment inspections to secure absolute safety.
              </p>
            </div>
            <div className="text-xs text-slate-500 font-mono pt-4 border-t border-brand-gold/5 flex justify-between items-center">
              <span>Client Network Base</span>
              <span>Balanti / Oxilion Partners</span>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="bg-[#0D1525] border border-brand-gold/10 p-8 rounded relative flex flex-col justify-between space-y-8 timeline-step">
            <div className="space-y-4">
              <span className="font-mono text-xs text-slate-400 font-bold uppercase tracking-wider block bg-slate-800 border border-slate-700 px-3 py-1 rounded w-fit">
                Phase 02 — Scaling
              </span>
              <h3 className="font-serif text-2xl font-medium text-white">Standardize & Curate Roster</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Aggregating vetted manufacturers into unified industrial classifications. Providing flat-rate pricing structures and introducing long-term rolling retainers for larger SME importers moving container loads of complex items.
              </p>
            </div>
            <div className="text-xs text-slate-500 font-mono pt-4 border-t border-brand-gold/5 flex justify-between items-center">
              <span>Roster Target</span>
              <span>1,200+ Vetted Factories</span>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="bg-[#0D1525] border border-brand-gold/10 p-8 rounded relative flex flex-col justify-between space-y-8 timeline-step">
            <div className="space-y-4">
              <span className="font-mono text-xs text-slate-400 font-bold uppercase tracking-wider block bg-slate-800 border border-slate-700 px-3 py-1 rounded w-fit">
                Phase 03 — Vision
              </span>
              <h3 className="font-serif text-2xl font-medium text-white">Commission Matchmaking</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Seamless procurement mediation. Linking pre-vetted buyers directly with our heavily validated, unbribable Chinese manufacturing roster on a commission-based percentage structure, eliminating all middleman fees.
              </p>
            </div>
            <div className="text-xs text-slate-500 font-mono pt-4 border-t border-brand-gold/5 flex justify-between items-center">
              <span>Pricing Target</span>
              <span>1.5% - 3% Commission</span>
            </div>
          </div>

        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="bg-brand-charcoal py-24 border-t border-brand-gold/10 relative premium-grain">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="font-mono text-xs text-brand-gold uppercase tracking-widest block">
              OUR INTERNAL CODE
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white tracking-tight">
              The Guiding Pillars of Balanti Trade Operations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="space-y-4">
              <span className="font-mono text-xs text-brand-gold font-bold">01 / TRANSPARENCY</span>
              <h3 className="font-serif text-xl font-medium text-white border-b border-brand-gold/10 pb-3">
                Uncompromising Objectivity
              </h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                We believe in raw truth. If a factory uses substandard solder or lacks legal corporate export papers, we state it clearly. Our loyalty remains strictly with the buying client.
              </p>
            </div>

            <div className="space-y-4">
              <span className="font-mono text-xs text-brand-gold font-bold">02 / VERIFICATION</span>
              <h3 className="font-serif text-xl font-medium text-white border-b border-brand-gold/10 pb-3">
                Physical Proof First
              </h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                We trust nothing that cannot be measured, weighed, or photographed in person. PDF catalogs and supplier claims are meaningless until verified on-site.
              </p>
            </div>

            <div className="space-y-4">
              <span className="font-mono text-xs text-brand-gold font-bold">03 / PARTNERSHIP</span>
              <h3 className="font-serif text-xl font-medium text-white border-b border-brand-gold/10 pb-3">
                Long-Term Alliances
              </h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                We measure our success by the sustainability of your import business. We protect your margin like our own, striving to build lasting trading channels.
              </p>
            </div>

            <div className="space-y-4">
              <span className="font-mono text-xs text-brand-gold font-bold">04 / DISCIPLINE</span>
              <h3 className="font-serif text-xl font-medium text-white border-b border-brand-gold/10 pb-3">
                Rigorous Engineering
              </h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                We audit products with standard engineering checklists and AQL statistical procedures, never relying on casual visual assessments.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FOUNDER & OXILION CONNECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 text-center space-y-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="font-mono text-xs text-brand-gold uppercase tracking-widest block">
            LOCALIZED EXPERTISE
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-white tracking-tight">
            Directly Aligned With Your Growth
          </h2>
          <p className="text-slate-300 font-light text-sm md:text-base leading-relaxed">
            Headed by trade director Ebenezer Balanti, who is physically stationed in Guangzhou and backed by bilingual sourcing associates, our team acts as your in-house international trade department in China.
          </p>
        </div>

        <div className="inline-flex flex-col sm:flex-row items-center gap-4 justify-center">
          <button
            onClick={() => navigateTo('contact')}
            className="group flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-semibold uppercase tracking-wider text-xs px-8 py-4.5 rounded transition-all duration-300 cursor-pointer shadow-lg shadow-brand-gold/10"
          >
            Connect With Ebenezer & Team
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => navigateTo('services')}
            className="inline-flex items-center justify-center border border-slate-700 hover:border-slate-500 text-slate-300 font-semibold uppercase tracking-wider text-xs px-8 py-4.5 rounded transition-all duration-300 hover:text-white cursor-pointer"
          >
            Review Services & Rates
          </button>
        </div>
      </section>

    </div>
  );
};
