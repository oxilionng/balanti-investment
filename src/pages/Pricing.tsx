/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from '../context/RouterContext';
import { FAQS } from '../data';
import { 
  Check, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  ShieldCheck, 
  Coins, 
  Users 
} from 'lucide-react';
import { gsap } from 'gsap';

export const Pricing: React.FC = () => {
  const { navigateTo } = useRouter();
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.pricing-fade',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const handleFaqToggle = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const pricingPackages = [
    {
      title: 'Factory Sourcing',
      rate: '$150 – $300',
      period: 'per product category',
      desc: 'Ideal for sourcing new products or finding alternative manufacturers to lower wholesale rates.',
      features: [
        'Vetted shortlist of 3-5 factories',
        'Physical facility audit in Guangdong',
        'Direct pricing negotiated in Mandarin',
        'License & export license validation',
        'Sourcing Dossier within 7 days'
      ],
      cta: 'Request Sourcing Run',
      recommended: false
    },
    {
      title: 'Sourcing Retainer',
      rate: 'From $400',
      period: 'per month (Rolling)',
      desc: 'Our recommended plan for repeat, high-volume importers who require continuous China-side support.',
      features: [
        'Dedicated bilingual sourcing manager',
        'Unlimited sourcing & quotation queries',
        'Up to 4 full in-person inspections included',
        'Daily progress updates via WhatsApp/WeChat',
        'Consolidated shipping & port coordination',
        'Direct billing priority queue access'
      ],
      cta: 'Establish Retainer Office',
      recommended: true
    },
    {
      title: 'Quality Inspection',
      rate: '$80 – $150',
      period: 'per physical factory visit',
      desc: 'Essential pre-shipment audit to verify specifications and packing counts before releasing payment.',
      features: [
        'On-site inspection by certified engineer',
        'ISO AQL random statistical sampling',
        'Function, weight, & stress checks',
        'Immediate HD photo & video uploads',
        '30+ page PDF inspection report'
      ],
      cta: 'Book Inspection Visit',
      recommended: false
    }
  ];

  return (
    <div ref={pageRef} className="bg-brand-navy min-h-screen text-slate-100 pt-32 pb-24 premium-grain">
      
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center md:text-left">
        <div className="max-w-3xl space-y-4">
          <span className="font-mono text-xs text-brand-gold uppercase tracking-widest block pricing-fade">
            TARIFFS & TERMS
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold text-white tracking-tight leading-tight pricing-fade">
            Transparent, Flat-Rate Trade Protection Plans
          </h1>
          <p className="text-slate-300 font-light text-base md:text-lg leading-relaxed pricing-fade">
            We work strictly on upfront, pre-disclosed rates. No hidden commissions, no factory rebates. Just absolute, unbribable buyer-side protection.
          </p>
        </div>
      </section>

      {/* PRICING PLANS CARDS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {pricingPackages.map((pkg, idx) => (
          <div
            key={idx}
            className={`pricing-fade bg-[#0D1525] border rounded-lg p-8 flex flex-col justify-between space-y-8 relative transition-all duration-500 ${
              pkg.recommended 
                ? 'border-brand-gold ring-1 ring-brand-gold/40 shadow-2xl shadow-brand-gold/5 scale-100 lg:scale-[1.03]' 
                : 'border-brand-gold/10 hover:border-brand-gold/25'
            }`}
          >
            {pkg.recommended && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-widest uppercase bg-brand-gold text-brand-navy font-bold px-4 py-1.5 rounded-full shadow">
                Most Popular for Active Importers
              </span>
            )}

            <div className="space-y-6">
              
              {/* Card Header */}
              <div className="space-y-2">
                <h3 className="font-serif text-xl font-medium text-slate-100">{pkg.title}</h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">{pkg.desc}</p>
              </div>

              {/* Price Tag */}
              <div className="py-5 border-y border-brand-gold/10">
                <span className="block font-serif text-3xl md:text-4xl font-bold text-brand-gold">
                  {pkg.rate}
                </span>
                <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-1">
                  {pkg.period}
                </span>
              </div>

              {/* Feature Bullets */}
              <ul className="space-y-3.5">
                {pkg.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex gap-3 text-xs text-slate-300 font-light leading-relaxed">
                    <Check className="w-4 h-4 text-brand-gold shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

            </div>

            {/* Action CTA */}
            <button
              onClick={() => navigateTo('contact')}
              className={`w-full py-4 rounded text-xs uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer ${
                pkg.recommended
                  ? 'bg-brand-gold hover:bg-brand-gold-dark text-brand-navy shadow-lg shadow-brand-gold/15'
                  : 'bg-transparent border border-slate-700 hover:border-brand-gold text-slate-200 hover:text-white'
              }`}
            >
              {pkg.cta}
            </button>

          </div>
        ))}
      </section>

      {/* POLICY CLAUSE SUMMARY */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <div className="bg-[#0A1425] border border-brand-gold/10 p-8 rounded flex flex-col md:flex-row gap-6 items-start">
          <Coins className="w-8 h-8 text-brand-gold shrink-0" />
          <div className="space-y-2">
            <h4 className="font-serif text-white font-medium text-base">Custom Travel & Scope Adjustments</h4>
            <p className="text-slate-300 font-light text-sm leading-relaxed">
              Travel expense fees for factory trips within Guangzhou, Foshan, and Shenzhen municipal zones are completely covered. Visits to outlying inland manufacturing clusters (such as Zhejiang, Hebei, or Sichuan provinces) incur standard economy bullet train and lodging reimbursements. Scope changes such as trade finance arrangements, direct billing credit structures, or legal contract creations are seamlessly coordinated and referred to our broader parent entity, the Oxilion Network.
            </p>
          </div>
        </div>
      </section>

      {/* INTERACTIVE FAQ ACCORDION SECTION */}
      <section id="pricing-faq" className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-16 space-y-4">
          <span className="font-mono text-xs text-brand-gold uppercase tracking-widest block">
            KNOWLEDGE BASE
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white tracking-tight">
            Frequently Asked Operational Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div
                key={idx}
                className="bg-brand-charcoal border border-brand-gold/10 rounded transition-all duration-300 overflow-hidden"
              >
                {/* Question trigger */}
                <button
                  onClick={() => handleFaqToggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-serif text-sm md:text-base font-medium text-slate-100 hover:text-brand-gold transition-colors duration-200">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-brand-navy border border-brand-gold/15 flex items-center justify-center text-brand-gold shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Answer block */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[500px] opacity-100 border-t border-brand-gold/5' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="p-6 bg-[#0D1525] text-xs md:text-sm text-slate-300 leading-relaxed font-light space-y-3">
                    <p>{faq.answer}</p>
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-brand-gold uppercase tracking-widest pt-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                      Category: {faq.category}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </section>

      {/* BOTTOM CTA */}
      <section className="bg-brand-navy py-24 text-center space-y-8 mt-12">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight">
          Establish Your Trade Safehouse
        </h2>
        <p className="text-slate-300 font-light text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Before wiring substantial production funds or deposit retainers, let our on-the-ground China agency verify the manufacturer's credentials.
        </p>
        <button
          onClick={() => navigateTo('contact')}
          className="group inline-flex items-center gap-2.5 bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-semibold uppercase tracking-wider text-xs px-8 py-4.5 rounded transition-all duration-300 cursor-pointer shadow-lg shadow-brand-gold/15"
        >
          Begin Free Price Assessment
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </section>

    </div>
  );
};
