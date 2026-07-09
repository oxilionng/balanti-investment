/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from '../context/RouterContext';
import { INSIGHTS } from '../data';
import { InsightArticle } from '../types';
import { 
  ArrowRight, 
  BookOpen, 
  Clock, 
  User, 
  ArrowLeft, 
  Calendar, 
  ChevronRight, 
  BookmarkCheck, 
  Tag 
} from 'lucide-react';
import { gsap } from 'gsap';

export const Insights: React.FC = () => {
  const { navigateTo } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'sourcing' | 'quality' | 'logistics' | 'market'>('all');
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.insight-fade',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
      );
    }, pageRef);

    return () => ctx.revert();
  }, [selectedCategory, activeArticle]);

  const filteredArticles = selectedCategory === 'all' 
    ? INSIGHTS 
    : INSIGHTS.filter(a => a.category === selectedCategory);

  return (
    <div ref={pageRef} className="bg-brand-navy min-h-screen text-slate-100 pt-32 pb-24 premium-grain">
      
      {/* Article Detail View Overlay */}
      {activeArticle ? (
        <article className="max-w-4xl mx-auto px-6 md:px-12 py-8 space-y-12 insight-fade">
          
          {/* Back button */}
          <button
            onClick={() => {
              setActiveArticle(null);
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
            className="inline-flex items-center gap-2 text-xs font-mono text-brand-gold hover:text-white uppercase tracking-widest cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Publications
          </button>

          {/* Article Header */}
          <div className="space-y-6">
            <span className="font-mono text-[10px] tracking-widest uppercase bg-brand-gold/10 border border-brand-gold/20 text-brand-gold px-3.5 py-1 rounded w-fit block">
              {activeArticle.category}
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-semibold text-white leading-tight tracking-tight">
              {activeArticle.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-xs text-slate-400 font-mono items-center border-y border-brand-gold/5 py-4">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4 text-brand-gold" />
                Authored by {activeArticle.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-gold" />
                Published {activeArticle.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-gold" />
                {activeArticle.readTime}
              </span>
            </div>
          </div>

          {/* Article Rich Content */}
          <div className="font-sans text-slate-300 text-base md:text-lg leading-relaxed font-light space-y-6 max-w-3xl">
            {activeArticle.content.split('\n\n').map((paragraph, pIdx) => {
              if (paragraph.startsWith('1)') || paragraph.startsWith('First,') || paragraph.startsWith('Second,')) {
                return (
                  <p key={pIdx} className="border-l-2 border-brand-gold pl-4 text-slate-300 font-normal italic">
                    {paragraph}
                  </p>
                );
              }
              return <p key={pIdx}>{paragraph}</p>;
            })}
          </div>

          {/* Author footer card */}
          <div className="bg-[#0D1525] border border-brand-gold/10 p-8 rounded flex gap-6 items-center">
            <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/20">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="font-serif text-base font-medium text-white">{activeArticle.author}</h4>
              <p className="text-slate-400 text-xs font-light">
                Trade specialist and regulatory compliance writer contributing direct on-the-ground intelligence on China-Africa maritime supply corridors.
              </p>
            </div>
          </div>

        </article>
      ) : (
        <>
          {/* INDEX VIEW */}
          <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center md:text-left">
            <div className="max-w-3xl space-y-4">
              <span className="font-mono text-xs text-brand-gold uppercase tracking-widest block insight-fade">
                TRADE INTELLIGENCE DOCKET
              </span>
              <h1 className="font-serif text-4xl md:text-6xl font-semibold text-white tracking-tight leading-tight insight-fade">
                Balanti Sourcing and Procurement Insights
              </h1>
              <p className="text-slate-300 font-light text-base md:text-lg leading-relaxed insight-fade">
                Strategic advisory on Chinese manufacturing cycles, cost-structure negotiations, pre-shipment inspections, and logistics channel management for professional African buyers.
              </p>
            </div>
          </section>

          {/* CATEGORY FILTERS */}
          <section className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
            <div className="flex border-b border-brand-gold/15 overflow-x-auto pb-px gap-6">
              {[
                { id: 'all', label: 'All Intelligence' },
                { id: 'sourcing', label: 'Sourcing Operations' },
                { id: 'quality', label: 'Quality Controls' },
                { id: 'logistics', label: 'Port Logistics' },
                { id: 'market', label: 'Market Negotiations' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as any)}
                  className={`pb-4 text-xs font-mono uppercase tracking-widest border-b-2 transition-all duration-300 shrink-0 cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'border-brand-gold text-brand-gold'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </section>

          {/* BLOG GRID */}
          <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="insight-fade bg-brand-charcoal border border-brand-gold/10 hover:border-brand-gold/30 p-8 rounded flex flex-col justify-between space-y-8 transition-all duration-300 group hover:shadow-xl hover:shadow-brand-navy/35"
                >
                  <div className="space-y-4">
                    
                    {/* Category & Date */}
                    <div className="flex justify-between items-center text-xs text-slate-400 font-mono">
                      <span className="text-brand-gold uppercase tracking-wider text-[10px] bg-brand-gold/5 border border-brand-gold/10 px-2.5 py-0.5 rounded">
                        {article.category}
                      </span>
                      <span>{article.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl md:text-2xl font-medium text-white group-hover:text-brand-gold transition-colors duration-300">
                      {article.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-slate-400 text-sm font-light leading-relaxed">
                      {article.summary}
                    </p>

                  </div>

                  {/* Footer Meta */}
                  <div className="pt-4 border-t border-brand-gold/5 flex justify-between items-center">
                    <span className="text-xs text-slate-400 flex items-center gap-1.5 font-light">
                      <Clock className="w-3.5 h-3.5 text-brand-gold" />
                      {article.readTime}
                    </span>
                    <button
                      onClick={() => {
                        setActiveArticle(article);
                        window.scrollTo({ top: 0, behavior: 'instant' });
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-gold group-hover:text-white transition-colors uppercase tracking-wider cursor-pointer"
                    >
                      Read Publication
                      <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </button>
                  </div>

                </div>
              ))}
            </div>
          </section>

          {/* BOTTOM BANNER */}
          <section className="bg-brand-charcoal border-y border-brand-gold/10 py-20 text-center space-y-6 relative premium-grain">
            <div className="max-w-2xl mx-auto px-6 space-y-4">
              <h3 className="font-serif text-2xl font-semibold text-white">Subscribe to Trade Alerts</h3>
              <p className="text-slate-300 font-light text-xs md:text-sm">
                Get monthly briefings on factory closure calendars in Guangdong, shipping freight indices to Nigeria, and regulatory tariff adjustments in China-Africa maritime corridors.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter business email"
                  className="bg-brand-navy border border-brand-gold/20 focus:border-brand-gold px-4 py-3 rounded text-sm text-slate-200 outline-none flex-1 font-sans"
                />
                <button className="bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded transition-all duration-300 cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </>
      )}

    </div>
  );
};
