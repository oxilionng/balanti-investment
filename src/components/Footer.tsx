/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useRouter } from '../context/RouterContext';
import { PagePath } from '../types';
import { Mail, Phone, ExternalLink, Globe, MapPin, ShieldAlert } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateTo } = useRouter();

  const handleLinkClick = (path: PagePath) => {
    navigateTo(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="global-footer" className="bg-[#070B13] border-t border-brand-gold/10 pt-20 pb-12 premium-grain">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-brand-gold/5">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#0F172A] flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-emerald-500 rotate-45"></div>
              </div>
              <div>
                <span className="block font-sans text-base font-bold tracking-tight uppercase text-[#0F172A]">
                  BALANTI <span className="text-emerald-700">INVESTMENT</span>
                </span>
                <span className="block text-[8px] font-mono tracking-[0.25em] text-[#0F172A]/70 uppercase">
                  CHINA SOURCING & QC SPECIALISTS
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              Nigeria and Africa's premier physical proxy in Chinese manufacturing hubs. Removing importing blindspots with fluent Mandarin, absolute transaction verification, and on-the-ground engineering audits.
            </p>
            <div className="flex items-center gap-2 text-xs text-brand-gold font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              On-The-Ground Active Presence
            </div>
          </div>

          {/* Quick Directory */}
          <div className="space-y-6">
            <h4 className="font-serif text-white font-medium tracking-wide text-base">Corporate Directory</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home Dashboard', path: 'home' },
                { label: 'About the Firm', path: 'about' },
                { label: 'Services & Rates', path: 'services' },
                { label: 'Operational Workflow', path: 'how-it-works' },
                { label: 'Pricing Calculator', path: 'pricing' },
                { label: 'Success Case Studies', path: 'case-studies' },
                { label: 'Trade Intelligence Insights', path: 'insights' },
              ].map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => handleLinkClick(link.path as PagePath)}
                    className="text-slate-400 hover:text-brand-gold text-sm font-light transition-colors duration-300 flex items-center gap-1 group text-left cursor-pointer"
                  >
                    <span className="w-1.5 h-[1px] bg-brand-gold/30 group-hover:bg-brand-gold group-hover:w-3 transition-all duration-300"></span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Sourcing Hub Locations */}
          <div className="space-y-6">
            <h4 className="font-serif text-white font-medium tracking-wide text-base">Operational Presence</h4>
            <div className="space-y-4">
              <div className="flex gap-3 text-slate-400 text-sm font-light leading-relaxed">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-200 font-medium">Guangdong Operations</strong>
                  Yuexiu District, Guangzhou & Nanshan District, Shenzhen, Guangdong Province, China
                </div>
              </div>
              <div className="flex gap-3 text-slate-400 text-sm font-light leading-relaxed">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-200 font-medium">Nigeria Hub (Oxilion Network)</strong>
                  Victoria Island, Lagos, Nigeria
                </div>
              </div>
            </div>
          </div>

          {/* Direct Communications */}
          <div className="space-y-6">
            <h4 className="font-serif text-white font-medium tracking-wide text-base">Direct Channels</h4>
            <p className="text-slate-400 text-sm font-light">
              Connect directly with our bilingual partners in China or representatives in Lagos.
            </p>
            <div className="space-y-3 font-mono text-xs">
              <a
                href="mailto:operations@balantiinvestment.com"
                className="flex items-center gap-2.5 text-slate-300 hover:text-brand-gold transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-gold" />
                operations@balantiinvestment.com
              </a>
              <a
                href="https://wa.me/2348000000000"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-brand-gold transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-gold" />
                WhatsApp (China Hot Desk)
              </a>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Globe className="w-4 h-4 text-brand-gold" />
                WeChat: BalantiSourcing
              </div>
            </div>
            <div className="pt-2">
              <button
                onClick={() => handleLinkClick('contact')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-brand-navy bg-brand-gold hover:bg-brand-gold-dark px-4 py-2.5 rounded transition-all duration-300 cursor-pointer"
              >
                Schedule Sourcing Call
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright & legal alignment with Oxilion */}
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-mono">
          <div className="space-y-2 text-center md:text-left">
            <p>© {currentYear} Balanti Investment. All rights reserved.</p>
            <p className="text-[10px] text-slate-600">
              Balanti Investment is an independent trade operations agency affiliated with the Oxilion Group. Corporate advisory, financing, and high-level customs compliance consultancies are referred to Oxilion.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-brand-gold transition-colors">Terms of Service</a>
            <a href="#oxilion" className="hover:text-brand-gold transition-colors flex items-center gap-1">
              Oxilion Group
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
