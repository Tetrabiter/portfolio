import { useState, useRef, useEffect, useCallback } from 'react';

interface UseSectionObserverReturn {
  activeSection: string | null;
  scrollToSection: (sectionId: string) => void;
}

export function useSectionObserver(
  sectionIds: string[], 
  options: IntersectionObserverInit = {}
): UseSectionObserverReturn {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observers = useRef<Map<string, IntersectionObserver>>(new Map());

  // Скролл к секции
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Intersection Observer логика
  useEffect(() => {
    const defaultOptions: IntersectionObserverInit = {
      threshold: 0.5,
      rootMargin: '-10% 0px -10% 0px',
      ...options
    };

    sectionIds.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (!element) {
        console.warn(`Element with id "${sectionId}" not found`);
        return;
      }

      // Удаляем старый observer если есть
      observers.current.get(sectionId)?.disconnect();

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(sectionId);
        }
      }, defaultOptions);

      observer.observe(element);
      observers.current.set(sectionId, observer);
    });

    // Cleanup
    return () => {
      observers.current.forEach(observer => observer.disconnect());
      observers.current.clear();
    };
  }, [sectionIds, options]);

  return {
    activeSection,
    scrollToSection
  };
}