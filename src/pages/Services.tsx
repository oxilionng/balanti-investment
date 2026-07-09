/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from '../context/RouterContext';
import { SERVICES } from '../data';
import { 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  HelpCircle, 
  FileSpreadsheet, 
  Video, 
  FileCheck2, 
  ShieldCheck, 
  Compass, 
  Coins 
} from 'lucide-react';
import { gsap } from 'gsap';

export const Services: React.FC = () => {
  const { navigateTo } = useRouter();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.services-fade',
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <div ref={pageRef} className="bg-brand-navy min-h-screen text-slate-100 pt-32 pb-24 premium-grain">
      
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center md:text-left">
        <div className="max-w-3xl space-y-4">
          <span className="font-mono text-xs text-brand-gold uppercase tracking-widest block services-fade">
            OPERATIONAL CAPABILITIES
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold text-white tracking-tight leading-tight services-fade">
            Professional Trade Auditing & Procurement Services
          </h1>
          <p className="text-slate-300 font-light text-base md:text-lg leading-relaxed services-fade">
            We structure our physical presence in China into specific fee-for-service milestones. No hidden fees, no manufacturer markups, completely transparent safeguards.
          </p>
        </div>
      </section>

      {/* CORE SERVICES DISPLAY */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES.map((service) => {
            const isExpanded = expandedId === service.id;
            return (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className={`bg-brand-charcoal border transition-all duration-500 rounded flex flex-col justify-between ${
                  isExpanded 
                    ? 'border-brand-gold ring-1 ring-brand-gold/35 shadow-2xl shadow-brand-gold/5' 
                    : 'border-brand-gold/10 hover:border-brand-gold/30 hover:shadow-lg hover:shadow-brand-navy/30'
                }`}
              >
                {/* Main Card Body */}
                <div className="p-8 space-y-6">
                  
                  {/* Category & Badge */}
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[10px] tracking-widest uppercase bg-brand-gold/10 text-brand-gold border border-brand-gold/20 px-3 py-1 rounded">
                      {service.category}
                    </span>
                    <span className="text-xs text-slate-400 font-mono tracking-wider">
                      {service.timeline}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-3">
                    <h3 className="font-serif text-2xl font-medium text-white group-hover:text-brand-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 text-sm font-light leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Indicative Rate */}
                  <div className="flex items-baseline justify-between py-4 border-y border-brand-gold/5">
                    <span className="text-xs text-slate-400 font-mono">Indicative Cost:</span>
                    <strong className="text-xl font-serif text-brand-gold">{service.indicativeFee}</strong>
                  </div>

                  {/* Expander Section */}
                  <div 
                    className={`transition-all duration-500 overflow-hidden ${
                      isExpanded ? 'max-h-[1000px] opacity-100 mt-6 pt-4 border-t border-brand-gold/10' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="space-y-6">
                      
                      {/* Deep description */}
                      <p className="text-xs text-slate-400 leading-relaxed font-light">
                        {service.fullDesc}
                      </p>

                      {/* What's Included Bullet List */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono">
                          Technical Procedures & Included Tasks
                        </h4>
                        <ul className="space-y-2.5">
                          {service.whatsIncluded.map((bullet, idx) => (
                            <li key={idx} className="flex gap-2.5 text-xs text-slate-300 leading-relaxed font-light">
                              <CheckCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Verified Deliverable Item */}
                      <div className="bg-brand-navy p-4 rounded border border-brand-gold/5 space-y-1">
                        <span className="block text-[10px] font-mono text-brand-gold uppercase tracking-widest">
                          Official Client Deliverable:
                        </span>
                        <span className="block text-xs text-white font-medium">
                          {service.deliverable}
                        </span>
                      </div>

                    </div>
                  </div>

                </div>

                {/* Footer Expand Action */}
                <div className="px-8 pb-8">
                  <button
                    onClick={() => toggleExpand(service.id)}
                    className="w-full inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-brand-gold/50 text-slate-300 hover:text-white transition-all duration-300 py-3.5 rounded text-xs uppercase tracking-wider cursor-pointer"
                  >
                    {isExpanded ? (
                      <>
                        Collapse Deliverables
                        <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        View Technical Deliverables
                        <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* POLICY AND EXCLUSIONS EXPLAINER */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="bg-[#0A1425] border border-brand-gold/20 p-8 md:p-10 rounded space-y-4">
          <div className="flex gap-3 text-brand-gold">
            <Coins className="w-6 h-6 shrink-0" />
            <h3 className="font-serif text-lg font-medium text-white">Transparency & Travel Exclusions</h3>
          </div>
          <p className="text-slate-300 font-light text-sm leading-relaxed max-w-4xl">
            * Exact pricing is confirmed per project after an initial consultation, based on product category, testing equipment specifications, and travel requirements. Sourcing and auditing trips within the Guangzhou and Shenzhen municipal areas are included in the baseline fee. Visits to distant inland provinces (e.g., Zhejiang, Fujian, Shandong) will include additional standard economy train/hotel travel expense reimbursements, pre-authorized by the client.
          </p>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-brand-charcoal py-20 border-t border-brand-gold/10 text-center space-y-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B111E]/40 to-brand-charcoal/40 pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-6 space-y-6 relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight">
            Ready to Verify Your Manufacturing Partner?
          </h2>
          <p className="text-slate-300 font-light text-sm md:text-base leading-relaxed">
            Fill out our brief trade specification sheet. Our China-based team will review your requirements and provide a free preliminary evaluation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => navigateTo('contact')}
              className="w-full sm:w-auto group flex items-center justify-center gap-2.5 bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-semibold uppercase tracking-wider text-xs px-8 py-4.5 rounded transition-all duration-300 cursor-pointer shadow-lg shadow-brand-gold/15"
            >
              Get Free Sourcing Estimate
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => navigateTo('how-it-works')}
              className="w-full sm:w-auto inline-flex items-center justify-center border border-slate-700 hover:border-slate-500 text-slate-300 font-semibold uppercase tracking-wider text-xs px-8 py-4.5 rounded transition-all duration-300 hover:text-white cursor-pointer"
            >
              See Our 6-Step Workflow
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
