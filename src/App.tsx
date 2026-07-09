/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

// Import Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { HowItWorks } from './pages/HowItWorks';
import { Pricing } from './pages/Pricing';
import { CaseStudies } from './pages/CaseStudies';
import { Insights } from './pages/Insights';
import { Contact } from './pages/Contact';

// Import GSAP globally to register plugins
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AppContent: React.FC = () => {
  const { currentPath, isTransitioning } = useRouter();

  // Route switching
  const renderActivePage = () => {
    switch (currentPath) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'how-it-works':
        return <HowItWorks />;
      case 'pricing':
        return <Pricing />;
      case 'case-studies':
        return <CaseStudies />;
      case 'insights':
        return <Insights />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-navy selection:bg-brand-gold selection:text-brand-navy premium-grain">
      
      {/* High-end custom interactive desktop cursor */}
      <CustomCursor />

      {/* Shared sticky navigational header */}
      <Navbar />

      {/* Content area with integrated page transition states */}
      <main
        id="main-page-canvas"
        className={`flex-grow transition-all duration-300 ease-out ${
          isTransitioning ? 'opacity-0 translate-y-3 blur-[2px]' : 'opacity-100 translate-y-0 blur-none'
        }`}
      >
        {renderActivePage()}
      </main>

      {/* Rich international trade directory footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
