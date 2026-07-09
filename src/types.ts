/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PagePath =
  | 'home'
  | 'about'
  | 'services'
  | 'how-it-works'
  | 'pricing'
  | 'case-studies'
  | 'insights'
  | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  whatsIncluded: string[];
  indicativeFee: string;
  timeline: string;
  deliverable: string;
  category: 'sourcing' | 'inspection' | 'logistics';
}

export interface CaseStudy {
  id: string;
  clientName: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  metrics: { label: string; value: string }[];
  location: string; // e.g. "Lagos, Nigeria to Guangzhou, China"
  status: 'active' | 'upcoming';
}

export interface InsightArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  readTime: string;
  category: 'sourcing' | 'quality' | 'logistics' | 'market';
  date: string;
  author: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'fees' | 'operations' | 'oxilion' | 'logistics';
}
