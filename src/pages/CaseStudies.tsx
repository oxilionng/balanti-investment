/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { useRouter } from '../context/RouterContext';
import { CASE_STUDIES } from '../data';
import { 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink, 
  Briefcase, 
  Users, 
  TrendingUp, 
  AlertOctagon, 
  Lock, 
  Activity 
} from 'lucide-react';
import { gsap } from 'gsap';

export const CaseStudies: React.FC = () => {
  const { navigateTo } = useRouter();
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.case-fade',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const riskProtections = [
    {
      title: 'Factory Disintermediation & Broker Fraud',
      threat: 'Alibaba agents pose as factories, adding a 15-30% markup and hiding capacity defects.',
      protection: 'We physically travel to the facility, verify original registration records in the national registry, and check the machinery lines in person.',
      icon: AlertOctagon
    },
    {
      title: 'Inconsistent Bulk Quality',
      threat: 'The physical sample is pristine, but the bulk container contains 20% defective parts.',
      protection: 'We deploy certified engineers on-site for pre-shipment inspections under strict ISO AQL guidelines, pulling random cartons for stress testing.',
      icon: Activity
    },
    {
      title: 'Wire Transfer & Invoice Hijacking',
      threat: 'Hacked rep emails trick you into wiring final balances to a fraudulent third-party bank account.',
      protection: 'We mandate in-person signature checkups of banking coordinates and verify that the payee bank name matches the official factory license.',
      icon: Lock
    },
    {
      title: 'Operational Scope Creep',
      threat: 'Unexpected freight demurrage, custom tax issues, or legal contract disputes tie up your cash.',
      protection: 'We coordinate freight and refer complex legal/financing structures to our parent organization, the Oxilion Corporate Group.',
      icon: ShieldAlert
    }
  ];

  return (
    <div ref={pageRef} className="bg-brand-navy min-h-screen text-slate-100 pt-32 pb-24 premium-grain">
      
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-center md:text-left">
        <div className="max-w-3xl space-y-4">
          <span className="font-mono text-xs text-brand-gold uppercase tracking-widest block case-fade">
            CAPITAL SECURITY DOCKET
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold text-white tracking-tight leading-tight case-fade">
            Trade Audits and Asset Safeguards in Action
          </h1>
          <p className="text-slate-300 font-light text-base md:text-lg leading-relaxed case-fade">
            Review realistic, on-the-ground operational reports showing how we audited machinery, negotiated terms, and prevented catastrophic cargo failures for African importing companies.
          </p>
        </div>
      </section>

      {/* CASE STUDIES GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {CASE_STUDIES.map((study) => (
          <div
            key={study.id}
            className="case-fade bg-brand-charcoal border border-brand-gold/10 hover:border-brand-gold/30 p-8 rounded flex flex-col justify-between space-y-8 transition-all duration-300"
          >
            <div className="space-y-6">
              
              {/* Card Meta */}
              <div className="flex justify-between items-start border-b border-brand-gold/10 pb-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">{study.clientName}</h3>
                  <span className="block text-[11px] font-mono text-brand-gold uppercase tracking-wider mt-1">
                    {study.industry}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 bg-brand-navy px-3 py-1 rounded">
                  {study.location}
                </span>
              </div>

              {/* Challenge vs Solution */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-widest font-mono">The Challenge</h4>
                  <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">{study.challenge}</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-brand-gold uppercase tracking-widest font-mono">Our Action</h4>
                  <p className="text-slate-300 text-xs md:text-sm font-light leading-relaxed">{study.solution}</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-widest font-mono">The Result</h4>
                  <p className="text-slate-300 text-xs md:text-sm font-light leading-relaxed">{study.result}</p>
                </div>
              </div>

            </div>

            {/* Metrics strip */}
            <div className="bg-brand-navy p-5 rounded border border-brand-gold/5 grid grid-cols-3 gap-4 text-center">
              {study.metrics.map((metric, mIdx) => (
                <div key={mIdx} className="space-y-1 border-r last:border-r-0 border-brand-gold/10">
                  <span className="block font-mono text-[10px] text-slate-400 uppercase tracking-wider">{metric.label}</span>
                  <strong className="block text-brand-gold text-xs font-bold md:text-sm">{metric.value}</strong>
                </div>
              ))}
            </div>

          </div>
        ))}

        {/* Branded "Soon" Placeholders */}
        <div className="case-fade bg-brand-charcoal/40 border border-dashed border-brand-gold/15 p-8 rounded flex flex-col justify-center items-center text-center space-y-4 min-h-[350px]">
          <Briefcase className="w-10 h-10 text-brand-gold/40" />
          <div className="space-y-1">
            <h3 className="font-serif text-lg font-medium text-slate-400">Chemical Extrusion Audit</h3>
            <p className="text-slate-500 text-xs max-w-sm">
              Pre-shipment verification and heavy-crated packing inspection for a polymer pipeline manufacturing facility in Zhejiang province.
            </p>
          </div>
          <span className="font-mono text-[9px] tracking-widest text-brand-gold uppercase bg-brand-gold/5 border border-brand-gold/15 px-3 py-1 rounded">
            Case Study Pipeline: Active Vetting
          </span>
        </div>

        <div className="case-fade bg-brand-charcoal/40 border border-dashed border-brand-gold/15 p-8 rounded flex flex-col justify-center items-center text-center space-y-4 min-h-[350px]">
          <Users className="w-10 h-10 text-brand-gold/40" />
          <div className="space-y-1">
            <h3 className="font-serif text-lg font-medium text-slate-400">Apparel Batch Consolidations</h3>
            <p className="text-slate-500 text-xs max-w-sm">
              Synchronic freight handover and container packing monitoring across 4 textile hubs in Ningbo and Shaoxing.
            </p>
          </div>
          <span className="font-mono text-[9px] tracking-widest text-brand-gold uppercase bg-brand-gold/5 border border-brand-gold/15 px-3 py-1 rounded">
            Case Study Pipeline: Active Vetting
          </span>
        </div>
      </section>

      {/* SME FUND RAISER CREDIBILITY STATEMENT */}
      <section className="bg-brand-charcoal border-y border-brand-gold/10 py-24 relative mb-24 premium-grain">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="font-mono text-xs text-brand-gold uppercase tracking-widest block">
            NETWORK INTEGRITY
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight">
            Built on the Trust of the Broader Oxilion SME Network
          </h2>
          <p className="text-slate-300 font-light text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            Our trade capabilities are rooted in our alliance with the **Oxilion Group**, who manage trade finance, regulatory advisory, and asset structuring portfolios for dozens of highly active SME importers across West Africa. We do not manufacture; we guarantee that the manufacturers you hire remain fully accountable to your specifications and timelines.
          </p>
        </div>
      </section>

      {/* RISK MANAGEMENT PROTOCOLS FRAMEWORK */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 space-y-4">
          <span className="font-mono text-xs text-brand-gold uppercase tracking-widest block">
            IMPORTER RISKS DEFUSED
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white tracking-tight">
            How Balanti Systematically Mitigates Sourcing Fears
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {riskProtections.map((risk, idx) => {
            const IconComp = risk.icon;
            return (
              <div
                key={idx}
                className="bg-[#0D1525] border border-brand-gold/10 p-8 rounded space-y-6 flex flex-col justify-between hover:border-brand-gold/25 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex gap-4 items-center border-b border-brand-gold/10 pb-4">
                    <div className="w-10 h-10 rounded bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-base md:text-lg font-semibold text-slate-100">
                      {risk.title}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <strong className="block text-[10px] font-mono text-rose-400 uppercase tracking-wider">The Risk:</strong>
                      <p className="text-slate-400 text-xs md:text-sm font-light mt-1 leading-relaxed">{risk.threat}</p>
                    </div>
                    <div>
                      <strong className="block text-[10px] font-mono text-emerald-400 uppercase tracking-wider">Our Solution:</strong>
                      <p className="text-slate-300 text-xs md:text-sm font-light mt-1 leading-relaxed">{risk.protection}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* BOTTOM ACTION */}
      <section className="py-24 text-center space-y-8 mt-12">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white tracking-tight">
          Establish Physical Sourcing Safety
        </h2>
        <p className="text-slate-300 font-light text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Request an immediate audit run of your designated manufacturer in Shenzhen, Foshan, or Ningbo.
        </p>
        <button
          onClick={() => navigateTo('contact')}
          className="group inline-flex items-center gap-2.5 bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-semibold uppercase tracking-wider text-xs px-8 py-4.5 rounded transition-all duration-300 cursor-pointer shadow-lg shadow-brand-gold/15"
        >
          Initiate Factory Verification
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </section>

    </div>
  );
};
