/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { PagePath } from '../types';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentPath, navigateTo } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; path: PagePath }[] = [
    { label: 'Home', path: 'home' },
    { label: 'About', path: 'about' },
    { label: 'Services', path: 'services' },
    { label: 'How It Works', path: 'how-it-works' },
    { label: 'Pricing', path: 'pricing' },
    { label: 'Case Studies', path: 'case-studies' },
    { label: 'Insights', path: 'insights' },
    { label: 'Contact', path: 'contact' },
  ];

  const handleNavClick = (path: PagePath) => {
    navigateTo(path);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        id="global-navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-brand-navy/90 backdrop-blur-md border-b border-brand-gold/10 py-4 shadow-lg shadow-brand-navy/20'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand */}
          <button
            id="nav-logo"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
          >
            <div className="w-8 h-8 bg-[#0F172A] flex items-center justify-center transition-all duration-300">
              <div className="w-4 h-4 border-2 border-emerald-500 rotate-45"></div>
            </div>
            <div>
              <span className="block font-sans text-xl font-bold tracking-tight uppercase text-[#0F172A]">
                BALANTI <span className="text-emerald-700">INVESTMENT</span>
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  id={`nav-link-${link.path}`}
                  onClick={() => handleNavClick(link.path)}
                  className={`relative text-xs font-medium tracking-wider uppercase py-2 cursor-pointer transition-colors duration-300 ${
                    isActive ? 'text-brand-gold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {/* Sliding Underline Animation */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-brand-gold transition-transform duration-300 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Nav CTA Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              id="nav-cta-button"
              onClick={() => handleNavClick('contact')}
              className="group flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-brand-navy text-xs font-semibold uppercase tracking-wider px-5 py-3 rounded-md transition-all duration-300 cursor-pointer shadow-md shadow-brand-gold/10 hover:shadow-brand-gold/25"
            >
              Get Consultation
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-slate-200 hover:text-brand-gold transition-colors duration-300 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Navigation Overlay */}
      <div
        id="mobile-nav-overlay"
        className={`fixed inset-0 bg-brand-navy z-45 flex flex-col justify-between transition-all duration-500 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
        style={{ paddingTop: '5.5rem' }}
      >
        <div className="flex-1 overflow-y-auto px-8 py-10 flex flex-col justify-center">
          <div className="space-y-6 text-center">
            {navLinks.map((link, idx) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  id={`mobile-nav-link-${link.path}`}
                  onClick={() => handleNavClick(link.path)}
                  className="block w-full text-center focus:outline-none py-1 group"
                  style={{
                    transitionDelay: mobileMenuOpen ? `${idx * 50}ms` : '0ms',
                    transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                    opacity: mobileMenuOpen ? 1 : 0,
                    transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)'
                  }}
                >
                  <span
                    className={`font-serif text-3xl font-medium tracking-wide ${
                      isActive ? 'text-brand-gold' : 'text-slate-300 group-hover:text-white'
                    }`}
                  >
                    {link.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Menu Footer Action */}
        <div
          className="border-t border-brand-gold/10 p-8 bg-brand-charcoal text-center space-y-4"
          style={{
            transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(40px)',
            opacity: mobileMenuOpen ? 1 : 0,
            transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1) 200ms'
          }}
        >
          <p className="text-slate-400 text-xs tracking-wider font-mono">
            YOUR EYES AND EARS ON THE GROUND IN CHINA
          </p>
          <button
            id="mobile-nav-cta"
            onClick={() => handleNavClick('contact')}
            className="w-full inline-flex justify-center items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-semibold uppercase tracking-wider text-xs py-4 rounded-md transition-all duration-300 shadow-md cursor-pointer"
          >
            Schedule Consultation
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
};
