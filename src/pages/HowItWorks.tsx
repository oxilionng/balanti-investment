/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { useRouter } from '../context/RouterContext';
import { 
  FileEdit, 
  Search, 
  Users, 
  ShieldCheck, 
  Camera, 
  Container, 
  ArrowRight, 
  CheckCircle, 
  FileSpreadsheet, 
  PlayCircle, 
  ClipboardCheck 
} from 'lucide-react';
import { gsap } from 'gsap';

export const HowItWorks: React.FC = () => {
  const { navigateTo } = useRouter();
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate workflow items on scroll
      gsap.fromTo('.step-card',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: {
          trigger: '.steps-container',
          start: 'top 85%'
        }}
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      num: '01',
      title: 'Define Sourcing Requirements',
      icon: FileEdit,
      desc: 'Submit your product specifications, blueprints, custom design assets, target budget-per-unit, and minimum order quantity (MOQ). Our engineers review the technical viability.',
      deliverable: 'Trade Spec Checklist & Feasibility Review'
    },
    {
      num: '02',
      title: 'Shortlist & Factory Vetting',
      icon: Search,
      desc: 'We physically travel to candidate factories in industrial clusters to audit their machinery, verify legal corporate registries, check export credentials, and inspect working conditions.',
      deliverable: 'Top 3-5 Vetted Factory Shortlist Dossier'
    },
    {
      num: '03',
      title: 'Mandarin Price & Term Negotiation',
      icon: Users,
      desc: 'We negotiate directly with factory decision-makers in Mandarin. We bypass brokers to secure native wholesale rates, lower MOQs, and legally enforceable milestone payments.',
      deliverable: 'Bilingual Sales Contract & Vetted Proforma Invoice'
    },
    {
      num: '04',
      title: 'Physical Sample Validation',
      icon: ShieldCheck,
      desc: 'We extract random production-line samples to measure physical parameters (weight, dimensions, material grade) before bulk production is authorized and final deposits are wired.',
      deliverable: 'Sample Benchmarking & Approval Certificate'
    },
    {
      num: '05',
      title: 'Pre-Shipment Quality Inspection',
      icon: Camera,
      desc: 'Once production completes, our certified QC inspector pulls statistical samples to stress-test functionality, dimensional limits, and shipping carton resistance under AQL standards.',
      deliverable: '30+ Page PDF QC Report & High-Definition Media Dump'
    },
    {
      num: '06',
      title: 'Consolidation & Cargo Dispatch',
      icon: Container,
      desc: 'We supervise the cargo packing and loading process at the warehouse, verifying serial numbers and container seals before handing over documents to your Lagos forwarder.',
      deliverable: 'Loading Supervision Report & Sealed Container Receipt'
    }
  ];

  return (
    <div ref={pageRef} className="bg-brand-navy min-h-screen text-slate-100 pt-32 pb-24 premium-grain">
      
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-center md:text-left">
        <div className="max-w-3xl space-y-4">
          <span className="font-mono text-xs text-brand-gold uppercase tracking-widest block">
            OPERATIONAL PIPELINE
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold text-white tracking-tight leading-tight">
            How Balanti Secures Your Sourcing Lifecycle
          </h1>
          <p className="text-slate-300 font-light text-base md:text-lg leading-relaxed">
            From the initial design sketch to the sealed container leaving the port, we act as your physical trade representatives. Here is our step-by-step verification pipeline.
          </p>
        </div>
      </section>

      {/* CHRONOLOGICAL STEPPER */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24 steps-container">
        <div className="relative border-l-2 border-brand-gold/10 ml-4 md:ml-12 pl-8 md:pl-16 space-y-16">
          
          {steps.map((step) => {
            const IconComp = step.icon;
            return (
              <div key={step.num} className="relative step-card">
                
                {/* Numeric Badge Connector */}
                <div className="absolute -left-[50px] md:-left-[82px] top-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0D1525] border-2 border-brand-gold flex items-center justify-center z-10">
                  <span className="font-serif text-xs md:text-sm font-bold text-brand-gold">{step.num}</span>
                </div>

                {/* Step Content */}
                <div className="bg-brand-charcoal border border-brand-gold/10 p-8 rounded hover:border-brand-gold/30 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <IconComp className="w-5 h-5 text-brand-gold" />
                      <h3 className="font-serif text-xl md:text-2xl font-medium text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>

                  <div className="lg:col-span-4 bg-brand-navy p-5 rounded border border-brand-gold/5 space-y-2 mt-auto">
                    <span className="block text-[9px] font-mono tracking-widest text-brand-gold uppercase">
                      VERIFIED CLIENT DELIVERABLE:
                    </span>
                    <h4 className="font-serif text-xs md:text-sm text-slate-100 font-medium">
                      {step.deliverable}
                    </h4>
                  </div>

                </div>

              </div>
            );
          })}

        </div>
      </section>

      {/* PAYMENT AND TRUST SAFEGUARDS */}
      <section className="bg-brand-charcoal border-y border-brand-gold/10 py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B111E]/30 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs text-brand-gold uppercase tracking-widest block">
              FINANCIAL ALIGNMENT
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight">
              A Payment Structure Engineered for Absolute Trust
            </h2>
            <div className="space-y-4 text-slate-300 font-light text-sm md:text-base leading-relaxed">
              <p>
                A massive sourcing blindspot is inspector bribery. Unethical sourcing agents in China often extort kickbacks from factories in exchange for passing defective goods.
              </p>
              <p>
                <strong>Balanti prevents this with a strict fiduciary structure.</strong> Our team is paid directly by you on a structured 50-50 milestone framework:
              </p>
              <p className="border-l-2 border-brand-gold pl-4 text-brand-gold font-serif italic">
                "You pay a 50% mobilization deposit before we begin sourcing or travel for inspections. The final 50% balance is paid ONLY after we deliver your high-definition report, verified certificate, and shipping release authorizations."
              </p>
              <p>
                This ensures our inspectors’ incentives align perfectly with your capital protection.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#0B111E] border border-brand-gold/15 p-8 rounded space-y-8">
            <h3 className="font-serif text-xl font-medium text-white">What You Receive in Every Audit Packet</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="bg-brand-charcoal p-5 rounded border border-brand-gold/5 space-y-3">
                <FileSpreadsheet className="w-5 h-5 text-brand-gold" />
                <h4 className="font-serif text-sm font-semibold text-slate-100">Dimensional Records</h4>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  Exact caliper measurements, weight tallies, and thickness benchmarks matching your specs.
                </p>
              </div>

              <div className="bg-brand-charcoal p-5 rounded border border-brand-gold/5 space-y-3">
                <PlayCircle className="w-5 h-5 text-brand-gold" />
                <h4 className="font-serif text-sm font-semibold text-slate-100">In-Line Video Check</h4>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  Unedited, time-stamped video feeds of our engineers testing your components live on-site.
                </p>
              </div>

              <div className="bg-brand-charcoal p-5 rounded border border-brand-gold/5 space-y-3">
                <ClipboardCheck className="w-5 h-5 text-brand-gold" />
                <h4 className="font-serif text-sm font-semibold text-slate-100">AQL Grading Certificates</h4>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  Statistical scoring reports classifying critical, major, and minor production anomalies.
                </p>
              </div>

              <div className="bg-brand-charcoal p-5 rounded border border-brand-gold/5 space-y-3">
                <Users className="w-5 h-5 text-brand-gold" />
                <h4 className="font-serif text-sm font-semibold text-slate-100">Registry Audits</h4>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  Verified copies of corporate licenses, tax filings, and exporting licenses from Chinese databases.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* BOTTOM ACTION */}
      <section className="py-24 max-w-5xl mx-auto px-6 text-center space-y-8">
        <h2 className="font-serif text-3xl md:text-5xl font-semibold text-white tracking-tight">
          Initiate Your Verification Loop
        </h2>
        <p className="text-slate-300 font-light text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Don’t let your production deposit leave Nigeria unmonitored. Connect with our Guangzhou-based operations desk and receive a structured consultation quote.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => navigateTo('contact')}
            className="group flex items-center gap-2.5 bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-semibold uppercase tracking-wider text-xs px-8 py-4.5 rounded transition-all duration-300 cursor-pointer shadow-lg shadow-brand-gold/15"
          >
            Schedule Factory Audit Now
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => navigateTo('pricing')}
            className="inline-flex items-center justify-center border border-slate-700 hover:border-slate-500 text-slate-300 font-semibold uppercase tracking-wider text-xs px-8 py-4.5 rounded transition-all duration-300 hover:text-white cursor-pointer"
          >
            Review Sourcing Price Plans
          </button>
        </div>
      </section>

    </div>
  );
};
