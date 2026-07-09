/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from '../context/RouterContext';
import { 
  Mail, 
  Phone, 
  Globe, 
  Send, 
  CheckCircle, 
  ArrowRight, 
  ShieldCheck, 
  MapPin, 
  ExternalLink 
} from 'lucide-react';
import { gsap } from 'gsap';

export const Contact: React.FC = () => {
  const { navigateTo } = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    category: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitCode, setSubmitCode] = useState('');
  
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-fade',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' }
      );
    }, pageRef);

    return () => ctx.revert();
  }, [isSubmitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.company || !formData.category) return;
    
    // Generate custom verification reference code
    const randomCode = `BAL-${Math.floor(100000 + Math.random() * 90000)}`;
    setSubmitCode(randomCode);
    
    // Trigger animated success panel transition
    setIsSubmitted(true);
  };

  return (
    <div ref={pageRef} className="bg-brand-navy min-h-screen text-slate-100 pt-32 pb-24 premium-grain">
      
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center md:text-left">
        <div className="max-w-3xl space-y-4">
          <span className="font-mono text-xs text-brand-gold uppercase tracking-widest block contact-fade">
            SECURE ROUTE ACCESS
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold text-white tracking-tight leading-tight contact-fade">
            Connect With Our China Operations Desk
          </h1>
          <p className="text-slate-300 font-light text-base md:text-lg leading-relaxed contact-fade">
            Initiate a verified factory audit, order pre-shipment quality inspection, or arrange corporate logistics consolidation. We respond inside 6 business hours.
          </p>
        </div>
      </section>

      {/* CORE CONTACT PANEL */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* LEFT COLUMN: DIRECT CHANNELS & SCHEMATIC */}
        <div className="lg:col-span-5 space-y-10 contact-fade">
          
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-semibold text-white">Direct Bilateral Channels</h3>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              Skip complex support forms if you are ready to ship cargo. Connect directly with our trade partners in China or local representatives in Victoria Island, Lagos.
            </p>

            <div className="space-y-4 font-mono text-xs text-slate-300">
              <a 
                href="mailto:operations@balantiinvestment.com"
                className="flex items-center gap-3.5 bg-brand-charcoal hover:bg-brand-charcoal/60 border border-brand-gold/10 hover:border-brand-gold/25 p-4 rounded transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-brand-gold" />
                <div>
                  <span className="block text-[8px] text-slate-500 uppercase tracking-widest font-mono mb-0.5">Bilingual Partners Email</span>
                  operations@balantiinvestment.com
                </div>
              </a>

              <a 
                href="https://wa.me/2348000000000"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3.5 bg-brand-charcoal hover:bg-brand-charcoal/60 border border-brand-gold/10 hover:border-brand-gold/25 p-4 rounded transition-all duration-300"
              >
                <Phone className="w-5 h-5 text-brand-gold" />
                <div>
                  <span className="block text-[8px] text-slate-500 uppercase tracking-widest font-mono mb-0.5">WhatsApp Partner Line (NGA)</span>
                  +234 (0) 800-BALANTI
                </div>
              </a>

              <div className="flex items-center gap-3.5 bg-brand-charcoal border border-brand-gold/10 p-4 rounded">
                <Globe className="w-5 h-5 text-brand-gold" />
                <div>
                  <span className="block text-[8px] text-slate-500 uppercase tracking-widest font-mono mb-0.5">Official WeChat Sourcing Channel</span>
                  WeChat ID: BalantiSourcing
                </div>
              </div>
            </div>
          </div>

          {/* China-Nigeria Shipping Route Schematic Drawing */}
          <div className="bg-[#0D1525] border border-brand-gold/15 rounded p-6 relative overflow-hidden space-y-4">
            <div className="absolute top-0 right-0 w-20 h-20 bg-brand-gold/5 rounded-bl-full pointer-events-none"></div>
            
            <div className="space-y-1">
              <span className="font-mono text-[9px] tracking-widest text-brand-gold uppercase block">SCHEMATIC MAP</span>
              <h4 className="font-serif text-sm font-semibold text-slate-200">Guangzhou to Lagos Maritime Corridors</h4>
            </div>

            <svg className="w-full h-32 opacity-85 border border-brand-gold/5 rounded bg-brand-navy/60" viewBox="0 0 400 130">
              <rect width="100%" height="100%" fill="none" />
              
              {/* Nodes */}
              <circle cx="50" cy="90" r="5" fill="#118C7E" />
              <text x="50" y="110" fill="#E2E8F0" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">LOS (Lagos)</text>

              <circle cx="350" cy="40" r="5" fill="#C5A880" />
              <text x="350" y="25" fill="#E2E8F0" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">CAN (Guangzhou)</text>

              {/* Shipping corridor wave */}
              <path d="M50 90 Q 200 110, 220 50 T 350 40" fill="none" stroke="#C5A880" strokeWidth="1.5" strokeDasharray="3 3" />
              
              {/* Labels */}
              <text x="210" y="70" fill="#888" fontSize="6" fontFamily="var(--font-mono)">Indian Ocean Transit</text>
              <text x="80" y="75" fill="#118C7E" fontSize="6" fontFamily="var(--font-mono)">Apapa Port</text>
              <text x="310" y="55" fill="#C5A880" fontSize="6" fontFamily="var(--font-mono)">Nansha Port</text>
            </svg>

            <p className="text-[10px] text-slate-500 leading-relaxed font-light font-mono">
              * Average Ocean freight transit: 32 days from Shenzhen/Nansha terminals to Apapa/Tin Can ports, Lagos. Airfreight consolidation cargo departs weekly on Thursdays with 5-day delivery turnaround.
            </p>
          </div>

        </div>

        {/* RIGHT COLUMN: CONSULTATION FORM OR SUCCESS STATE */}
        <div className="lg:col-span-7 bg-brand-charcoal border border-brand-gold/10 rounded-lg p-8 md:p-10 relative contact-fade">
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-semibold text-white">Consultation Request Desk</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  Provide your target technical specifications and expected container quantities. Your file is reviewed by physical trade representatives.
                </p>
              </div>

              {/* Floating-style inputs */}
              <div className="space-y-4">
                
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Contact Partner Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alhaji Ibrahim Danladi"
                    className="w-full bg-brand-navy border border-brand-gold/20 focus:border-brand-gold rounded px-4 py-3 text-slate-200 text-sm font-sans outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Registered Corporate Entity
                  </label>
                  <input
                    id="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Danladi Polymers West Africa Ltd"
                    className="w-full bg-brand-navy border border-brand-gold/20 focus:border-brand-gold rounded px-4 py-3 text-slate-200 text-sm font-sans outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Importer Product Category / Specs
                  </label>
                  <input
                    id="category"
                    type="text"
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder="e.g. Solar Battery Inverters or Porcelain Floor Tiles"
                    className="w-full bg-brand-navy border border-brand-gold/20 focus:border-brand-gold rounded px-4 py-3 text-slate-200 text-sm font-sans outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Sourcing Specs & Scope Outline
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="e.g. Sourcing 3 candidate factories in Foshan, negotiating MOQs down to 5,000 units, and booking pre-shipment quality audit in August..."
                    className="w-full bg-brand-navy border border-brand-gold/20 focus:border-brand-gold rounded px-4 py-3 text-slate-200 text-sm font-sans outline-none transition-colors duration-300 resize-none"
                  />
                </div>

              </div>

              {/* Submit trigger */}
              <button
                id="submit-form-button"
                type="submit"
                className="w-full group flex items-center justify-center gap-2.5 bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-semibold uppercase tracking-wider text-xs py-4.5 rounded shadow-lg shadow-brand-gold/15 transition-all duration-300 cursor-pointer"
              >
                File Consultation Docket
                <Send className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>

              <div className="flex gap-2.5 items-center justify-center text-[10px] text-slate-500 font-mono text-center">
                <ShieldCheck className="w-4 h-4 text-brand-gold" />
                MANDATORY DATA DECRYPT INTEGRATION SECURED WITH OXILION GROUP
              </div>

            </form>
          ) : (
            // ANIMATED SUCCESS STATE SCREEN
            <div className="text-center py-10 space-y-8 contact-fade">
              
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto animate-bounce">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-3xl font-semibold text-white">Security Clearance Issued</h3>
                <p className="text-slate-300 font-light text-sm max-w-md mx-auto leading-relaxed">
                  Inquiry logged. Your corporate profile has been assigned to a bilingual trade representative physically based in Guangdong Province, China.
                </p>
              </div>

              {/* Assignment code and SLAs */}
              <div className="bg-brand-navy p-6 rounded border border-brand-gold/15 max-w-md mx-auto space-y-4 font-mono text-xs text-left">
                
                <div className="flex justify-between items-center border-b border-brand-gold/10 pb-2">
                  <span className="text-slate-400 uppercase tracking-wider text-[9px]">Audit Reference Code:</span>
                  <strong className="text-brand-gold text-sm">{submitCode}</strong>
                </div>

                <div className="flex justify-between items-center border-b border-brand-gold/10 pb-2">
                  <span className="text-slate-400 uppercase tracking-wider text-[9px]">Assigned Specialist:</span>
                  <strong className="text-slate-200">E. Balanti & Team (CAN)</strong>
                </div>

                <div className="flex justify-between items-center pb-1">
                  <span className="text-slate-400 uppercase tracking-wider text-[9px]">SLA Response Window:</span>
                  <strong className="text-emerald-400">Within 6 Hours (Guangzhou Time)</strong>
                </div>

              </div>

              <p className="text-slate-500 text-xs font-mono italic max-w-sm mx-auto">
                * A copy of this audit ticket has been carbon-copied to Oxilion legal team to initiate preliminary trade finance screening.
              </p>

              <button
                onClick={() => {
                  setFormData({ name: '', company: '', category: '', message: '' });
                  setIsSubmitted(false);
                }}
                className="inline-flex items-center gap-2 border border-slate-700 hover:border-brand-gold text-slate-300 hover:text-white transition-colors duration-300 text-xs uppercase tracking-wider py-3 px-6 rounded cursor-pointer"
              >
                Log New Specification
              </button>

            </div>
          )}

        </div>

      </section>

      {/* BOTTOM DISCLAIMER MAPS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-20 text-center text-slate-500 text-xs leading-relaxed max-w-4xl">
        <p>
          Balanti Sourcing physically deploys to factory floor coordinates across major exporting clusters including Guangzhou (Apparel, Cosmetology), Foshan (Ceramics, Sanitary hardware, Furniture), Shenzhen (Lithium energy, Tech components), Dongguan (Machinery molds), Taizhou (Extruder machinery), and Ningbo (Hardware tooling, Industrial valves).
        </p>
      </section>

    </div>
  );
};
