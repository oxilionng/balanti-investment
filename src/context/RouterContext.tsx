/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { PagePath } from '../types';

interface RouterContextType {
  currentPath: PagePath;
  navigateTo: (path: PagePath) => void;
  isTransitioning: boolean;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Sync with window.location.pathname on load
  const getInitialPath = (): PagePath => {
    const hash = window.location.hash.replace('#', '') as PagePath;
    if (['home', 'about', 'services', 'how-it-works', 'pricing', 'case-studies', 'insights', 'contact'].includes(hash)) {
      return hash;
    }
    const path = window.location.pathname.replace('/', '') as PagePath;
    if (['home', 'about', 'services', 'how-it-works', 'pricing', 'case-studies', 'insights', 'contact'].includes(path)) {
      return path;
    }
    return 'home';
  };

  const [currentPath, setCurrentPath] = useState<PagePath>(getInitialPath());
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  useEffect(() => {
    const handlePopState = () => {
      const path = getInitialPath();
      setCurrentPath(path);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: PagePath) => {
    if (path === currentPath) return;

    // Trigger elegant page-exit animation state
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentPath(path);
      // Update hash or path
      window.location.hash = path;
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });

      // Trigger elegant page-entry animation state
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 400); // matches transition durations perfectly
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigateTo, isTransitioning }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};
