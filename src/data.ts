import { ServiceItem, CaseStudy, InsightArticle, FAQItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'factory-sourcing',
    title: 'Factory Sourcing & Audit',
    shortDesc: 'Shortlist and negotiate with 3–5 vetted factories based on your precise product specs.',
    fullDesc: 'Buying from suppliers blindly on Alibaba or online directories carries immense quality and fraud risks. Our on-the-ground agents physically visit candidate factories in major industrial hubs (Guangdong, Zhejiang, Fujian) to audit their production capacity, legal registration, and machinery before you transfer a single dollar.',
    whatsIncluded: [
      'Identification of 3–5 pre-vetted, legitimate manufacturers',
      'In-person factory capacity and machinery audit',
      'Detailed verification of corporate license and exporting rights',
      'Direct pricing negotiation in Mandarin to secure local Chinese rates',
      'Complete sourcing report with high-res photos and license copies'
    ],
    indicativeFee: '$150 – $300',
    timeline: '5 – 7 business days',
    deliverable: 'Supplier Shortlist & Verification Dossier',
    category: 'sourcing'
  },
  {
    id: 'quality-inspection',
    title: 'Pre-Shipment Quality Inspection',
    shortDesc: 'On-site quality-assurance audit with physical stress tests and live video reporting.',
    fullDesc: 'Once production is done, our expert inspector travels to the warehouse or factory. We pull statistical random samples (AQL standards) to perform physical testing, dimensional measurements, packaging audits, and function tests. We don’t just tick boxes; we video and document everything so you see your goods before they are sealed in the container.',
    whatsIncluded: [
      'In-person inspection at the factory before final payment release',
      'AQL statistical sampling and defects classification',
      'Function, weight, size, and packaging stress testing',
      'Live photo/video stream and immediate high-definition media dump',
      'Official Pass/Fail Inspection Certificate in 24 hours'
    ],
    indicativeFee: '$80 – $150 / visit',
    timeline: '1 – 2 business days from visit',
    deliverable: 'Comprehensive 30+ Page Inspection Report',
    category: 'inspection'
  },
  {
    id: 'sample-verification',
    title: 'Sample Verification & Testing',
    shortDesc: 'Collect, consolidate, and verify physical samples before committing to a full production order.',
    fullDesc: 'Do not rely on the single "perfect" sample a factory mails you directly. We act as your neutral third party, collecting random samples from the raw material batch, physically testing them against your spec sheet, and consolidating them into a single courier shipment to Nigeria to save you thousands in airfreight fees.',
    whatsIncluded: [
      'Neutral sample collection directly from raw material production lines',
      'Physical spec-matching (material grade, weight, thickness, color)',
      'Consolidating samples from multiple factories into one DHL/FedEx package',
      'Detailed laboratory testing arrangement if specialized testing is required'
    ],
    indicativeFee: '$40 – $80',
    timeline: '3 – 4 business days',
    deliverable: 'Sample Verification Report & Combined Dispatch',
    category: 'sourcing'
  },
  {
    id: 'negotiation-only',
    title: 'Contract & Term Negotiation',
    shortDesc: 'Secure optimal pricing, minimum order quantities (MOQ), and payment safeguards in Chinese contract terms.',
    fullDesc: 'If you have already found a factory but are struggling with communication, pricing gaps, or rigid Minimum Order Quantities, we step in. As fluent Mandarin speakers with years of Chinese business negotiation experience, we bypass intermediate trade agents and secure direct wholesale factory terms and payment milestones.',
    whatsIncluded: [
      'Direct negotiation with factory management in Mandarin',
      'Alignment on structured milestones (e.g., 30% deposit, 70% post-inspection)',
      'Resolution of MOQ disputes and customized packaging agreements',
      'Translation and vetting of proforma invoices and purchase contracts'
    ],
    indicativeFee: '$60 – $120',
    timeline: '2 – 3 business days',
    deliverable: 'Bilingual Purchase Contract & Final PI Vetted',
    category: 'sourcing'
  },
  {
    id: 'shipping-coordination',
    title: 'Consolidation & Port Coordination',
    shortDesc: 'Consolidate multiple factory batches and manage cargo-handover at major ports.',
    fullDesc: 'Shipping half-empty containers is highly inefficient. We coordinate with your logistics agents or our trusted freight forwarders to consolidate items from various Chinese factories into a single Full Container Load (FCL) or Groupage (LCL), managing the warehouse handover and export custom clearance filings at ports like Guangzhou, Shenzhen, or Ningbo.',
    whatsIncluded: [
      'Liaison with multiple Chinese factories for synchronized delivery',
      'Physical receipt and item count validation at the consolidation warehouse',
      'FCL container sealing supervision with serial-numbered seals',
      'Export custom documentation filing and Nigeria forwarder coordination'
    ],
    indicativeFee: 'From $100',
    timeline: 'Ongoing during dispatch',
    deliverable: 'Warehouse Receipt & Container Loading Report',
    category: 'logistics'
  },
  {
    id: 'sourcing-retainer',
    title: 'Sourcing & QC Monthly Retainer',
    shortDesc: 'Your own dedicated full-time sourcing office and local representation in China.',
    fullDesc: 'For active, repeat importers, growing trading companies, and large corporate buyers who purchase container-loads of diverse items monthly. This package gives you priority access, infinite sourcing queries, up to four full factory inspections per month, and instant on-demand communication with your dedicated bilingual trade specialist in China.',
    whatsIncluded: [
      'Priority access with instant WhatsApp/WeChat hotline',
      'Unlimited factory sourcing and quote collections',
      'Up to 4 complete physical factory/QC inspections included per month',
      'Continuous management of all ongoing factory production milestones',
      'Dedicated dashboard and weekly consolidated progress report'
    ],
    indicativeFee: 'From $400 / month',
    timeline: 'Monthly Rolling',
    deliverable: 'Dedicated China Representative & Weekly Operations Log',
    category: 'logistics'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'solar-equipment',
    clientName: 'Sunsave Nigeria Ltd',
    industry: 'Renewable Energy & Solar Logistics',
    challenge: 'Purchased 4,000 units of lithium batteries and solar inverters from a factory in Shenzhen. On previous orders, 15% arrived with faulty battery management systems (BMS), but the factory refused returns once shipped.',
    solution: 'Balanti dispatched an inspector to the Shenzhen facility. We audited the production floor and conducted random testing of 120 assembled batteries, flagging a batch of 45 batteries using substandard non-grade-A cells.',
    result: 'The factory was forced to replace the sub-standard batteries with verified A-grade cells before sealing the container. Our client received a 100% defect-free shipment in Lagos.',
    metrics: [
      { label: 'Defect Rate', value: '0.2% (down from 15%)' },
      { label: 'Capital Saved', value: '₦42,000,000+' },
      { label: 'Inspection Cost', value: '$120' }
    ],
    location: 'Shenzhen, China to Lagos, Nigeria',
    status: 'active'
  },
  {
    id: 'construction-materials',
    clientName: 'Alhaji Musa & Sons Trading',
    industry: 'Real Estate & Building Materials',
    challenge: 'A major real estate project in Abuja needed 12 custom containers of porcelain floor tiles and sanitary ware. The buyer faced immense communication barriers regarding exact thickness, finish, and packaging.',
    solution: 'We drafted a detailed bilingual specification sheet, negotiated the price down by 8% by bypassing trading agents, and physically audited the tile factory in Foshan. We supervised the loading process to ensure proper protective padding was used.',
    result: 'All 12 containers arrived at Apapa Port on time with zero tile breakage, and exactly matching the specified matte-finish and thickness specifications.',
    metrics: [
      { label: 'Sourcing Savings', value: '$8,400 (8% negotiated)' },
      { label: 'Breakage Rate', value: '0.0% (down from usual 6%)' },
      { label: 'Audit duration', value: '4 days' }
    ],
    location: 'Foshan, China to Abuja, Nigeria',
    status: 'active'
  },
  {
    id: 'cosmetics-packaging',
    clientName: 'Aria Organics Beauty',
    industry: 'Consumer Goods & Retail',
    challenge: 'An upscale cosmetics brand in Lagos was ready to launch a new product line but required custom glass packaging with strict tolerance limits. A supplier on Alibaba sent premium samples but was suspect during bulk production discussions.',
    solution: 'Balanti conducted a physical audit of the factory in Guangzhou and found that the supplier was actually a small third-party broker, not a manufacturer. We sourced the direct manufacturing plant, negotiating the MOQ down from 20,000 to 5,000 pieces.',
    result: 'The client secured direct factory-direct prices, eliminating the middleman markup, and verified the high-grade glass composition through pre-shipment stress checks.',
    metrics: [
      { label: 'MOQ Reduced', value: '75% (20k to 5k)' },
      { label: 'Unit cost reduction', value: '32% lower' },
      { label: 'Status', value: 'Launch Successful' }
    ],
    location: 'Guangzhou, China to Lagos, Nigeria',
    status: 'active'
  },
  {
    id: 'machinery-import',
    clientName: 'Industrial Polymers West Africa',
    industry: 'Manufacturing & Plastics',
    challenge: 'Importing a massive, complex plastic extrusion blow molding machine from Zhejiang ($65k value). The client did not know if the machine would match the electricity grid requirements of Nigeria.',
    solution: 'Our technical engineer physically audited the manufacturer in Zhejiang, verified the motor and wiring specifications, and supervised a 3-hour continuous dry-run test under Nigerian power spec simulations.',
    result: 'The machine was verified and safely crated in heavy anti-moisture wooden frames. It is currently operating flawlessly in our client’s factory in Ota.',
    metrics: [
      { label: 'Equipment value', value: '$65,000' },
      { label: 'Technical Defects', value: '0 found post-installation' },
      { label: 'Commissioning', value: 'Instant' }
    ],
    location: 'Taizhou, China to Ota, Nigeria',
    status: 'active'
  }
];

export const INSIGHTS: InsightArticle[] = [
  {
    id: 'vet-chinese-factory',
    title: 'How to Vet a Chinese Factory Before You Pay a Deposit',
    summary: 'The critical checklist to distinguish real manufacturers from risky trading agents and online scammers on Alibaba.',
    content: 'Buying goods internationally is built on trust, but blind trust is a recipe for losing capital. Alibaba, Made-in-China, and Global Sources are filled with profiles displaying "Verified Supplier" or "Gold Manufacturer" badges. What most importers do not realize is that these badges are paid advertising packages. To protect your capital, you must check three crucial pillars: First, verify the Unified Social Credit Identifier on their Chinese business license. A real manufacturer has a scope of business containing "manufacturing" (制造/生产), whereas trading agencies are limited to "sales" (销售/贸易). Second, look closely at their physical address—trading agents are usually in downtown office towers, while factories are in industrial zones. Third, demand an audit of their manufacturing flow charts and in-house laboratory facilities. If they cannot provide these immediately, you are dealing with a middleman.',
    readTime: '6 min read',
    category: 'sourcing',
    date: 'July 5, 2026',
    author: 'Ebenezer Balanti'
  },
  {
    id: 'understanding-moqs',
    title: 'De-mystifying MOQs: How to Negotiate Lower Order Limits',
    summary: 'Struggling with high Minimum Order Quantities? Discover the structural reasons behind them and how to negotiate safely.',
    content: 'Minimum Order Quantity (MOQ) is the biggest roadblock for Nigerian SME importers trying to test new products. Importers often think factories enforce high MOQs out of greed, but it is actually a structural constraint of Chinese manufacturing. When a factory starts a production run, they must set up machinery, calibrate molds, and purchase raw materials from their own suppliers—all of which carry fixed setup costs. If you buy only 100 units of a custom product, the factory actually loses money on the setup labor. To negotiate a lower MOQ without paying exorbitant prices, try these three advanced strategies: 1) Suggest using standard packaging instead of customized boxes, which removes the packaging print MOQ. 2) Ask if they have an active production run scheduled for another customer and offer to "co-ride" on that batch. 3) Agree to pay a slightly higher unit cost for the first trial run with a contract clause that credits that extra cost back to you on your second bulk order.',
    readTime: '5 min read',
    category: 'market',
    date: 'June 28, 2026',
    author: 'Ebenezer Balanti'
  },
  {
    id: 'pre-shipment-inspection-guide',
    title: 'A Importer’s Guide to Pre-Shipment Inspection (PSI)',
    summary: 'What actually happens during a quality-control audit on a Chinese factory floor, and how to interpret inspection scores.',
    content: 'A professional Pre-Shipment Inspection (PSI) is the final wall of defense for your capital. Once you pay the remaining 70% balance to your Chinese supplier, your leverage falls to zero. If you discover defects when the container is opened in Lagos or Port Harcourt, shipping the items back is economically impossible due to double duties and massive freight costs. An inspection should always follow the ISO 2859-1 (AQL) standards. Our inspectors select random carton numbers from different parts of the warehouse, count total units to verify quantities, and perform vital functional checks. For instance, for garments, we do seam-strength pull tests and fit measurements. For electronics, we run 2-hour electrical cycle tests and drop tests. A proper report lists Critical Defects (e.g., safety hazards), Major Defects (e.g., items that cannot function), and Minor Defects (e.g., minor paint scratches). Only authorize shipment when the overall inspection score falls below the accepted threshold.',
    readTime: '8 min read',
    category: 'quality',
    date: 'June 14, 2026',
    author: 'Trade Operations Team'
  },
  {
    id: 'avoid-scams-china-africa',
    title: 'Top 3 Shipping & Payment Scams in China-Africa Trade',
    summary: 'Learn the exact mechanics of payment hacking, phantom forwarding, and fake factory-scams, and how to stay 100% safe.',
    content: 'Trade scams are becoming highly sophisticated. The most common scam hitting Nigerian buyers today is the "Hacked Invoice Scam." Scammers hack a factory sales representative’s email account, monitor ongoing negotiations, and at the exact moment the 30% deposit or 70% balance is due, they send a modified invoice claiming the factory’s bank is undergoing an audit and requesting payment to a different account, often in Hong Kong or Singapore. Another scam is "Phantom Forwarding," where a fraudulent logistics agent issues fake Bills of Lading, collects your payment, and vanishes while your container is sold off. The only way to shield yourself is through physical on-the-ground verification of bank account coordinates, sending local representatives to verify warehouse handovers, and refusing to pay any bank account that does not match the name on the company’s official business license.',
    readTime: '7 min read',
    category: 'logistics',
    date: 'May 30, 2026',
    author: 'Legal & Compliance'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How do payments work? Do I pay before or after the inspection?',
    answer: 'For our one-off services (Sourcing, Inspection, Verification), our payment structure is designed to safeguard your trust. You pay a 50% deposit before we travel to the factory or start the service, and the remaining 50% balance is paid only after we deliver the finished, high-definition inspection report and official certificate to your email. You can pay securely in USD (wire transfer, card) or local Nigerian Naira (NGN) equivalents through our local accounts.',
    category: 'fees'
  },
  {
    question: 'Can you negotiate prices down? How do you ensure the factory doesn’t just bribe your inspector?',
    answer: 'Absolutely. Because our team is physically on the ground in China and speaks fluent Mandarin, we negotiate directly with factory managers, bypassing translation agencies, trading houses, and Alibaba fees. This typically yields a 5% to 15% reduction in unit costs. To prevent bribery and conflict of interest, our inspectors are full-time salaried professionals bound by strict ethical contracts, and we randomly rotate inspectors between factory visits. In addition, our inspection reports include live time-stamped video footage of testing and defect detection, making it impossible to hide or falsify findings.',
    category: 'operations'
  },
  {
    question: 'What is your turnaround time for a factory audit or QC inspection?',
    answer: 'Typically, we can book and conduct an in-person factory audit or pre-shipment quality inspection within 2 to 4 business days of receiving your deposit, depending on the province where the factory is located. Once the inspection is completed, the comprehensive PDF report with high-resolution photos and video uploads is delivered to you within 24 hours.',
    category: 'operations'
  },
  {
    question: 'Do you handle the actual customs clearing and sea freight to Nigeria?',
    answer: 'We coordinate the cargo handover, container packing, and port consolidation in China, working directly with your chosen cargo agent or freight forwarder in Guangzhou/Shenzhen. If you do not have a shipping partner, we can introduce you to premium, trusted sea and air forwarders who offer competitive door-to-door shipping and customs clearing to Lagos, Abuja, Kano, and other African destinations, backed by our broader Oxilion group logistics network.',
    category: 'logistics'
  },
  {
    question: 'How does the monthly Sourcing Retainer work?',
    answer: 'Our Sourcing Retainer starts from $400/month and is perfect for active, repeating importers. Instead of paying per-service, you gain a dedicated trade specialist in China who handles infinite sourcing requests, gathers quotes, communicates daily with your current factories, and conducts up to 4 complete physical inspections/visits per month. It essentially serves as your own professional purchasing office in China at a fraction of the cost of hiring full-time staff.',
    category: 'fees'
  },
  {
    question: 'How does Balanti Investment connect with the Oxilion network?',
    answer: 'Balanti Investment is a specialized trade division affiliated with the Oxilion network. Oxilion provides institutional corporate advisory, trade finance, and legal compliance structures, while Balanti operates on-the-ground operations in China. If your import project requires trade financing, complex customs clearing structures, or custom legal contracting, we can seamlessly refer and escalate your needs to the broader Oxilion legal and financial team.',
    category: 'oxilion'
  }
];
