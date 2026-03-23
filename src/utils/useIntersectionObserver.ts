// Улучшенная версия вашего хука с анимациями
import { useState, useRef, useEffect, useCallback, useMemo } from 'react';

interface UseSectionObserverReturn {
  activeSection: string | null;
  scrollToSection: (sectionId: string) => void;
  visibleSections: Set<string>; // Новое поле для отслеживания видимых секций
}

export function useSectionObserver(
  sectionIds: string[],
  options: IntersectionObserverInit = {}
): UseSectionObserverReturn {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const observers = useRef<Map<string, IntersectionObserver>>(new Map());

  // Мемоизируем зависимости через stringify, чтобы избежать пересоздания IntersectionObserver при каждом рендере
  const stableSectionIds = useMemo(() => sectionIds, [JSON.stringify(sectionIds)]);
  const stableOptions = useMemo(() => options, [JSON.stringify(options)]);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const defaultOptions: IntersectionObserverInit = {
      threshold: 0.3, // Увеличил для лучшего определения видимости
      rootMargin: '-10% 0px -10% 0px',
      ...stableOptions
    };

    stableSectionIds.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (!element) {
        console.warn(`Element with id "${sectionId}" not found`);
        return;
      }

      observers.current.get(sectionId)?.disconnect();

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(sectionId);
          setVisibleSections(prev => new Set(prev).add(sectionId));
        }
      }, defaultOptions);

      observer.observe(element);
      observers.current.set(sectionId, observer);
    });

    return () => {
      observers.current.forEach(observer => observer.disconnect());
      observers.current.clear();
    };
  }, [stableSectionIds, stableOptions]);

  return {
    activeSection,
    scrollToSection,
    visibleSections // Возвращаем множество видимых секций
  };
}