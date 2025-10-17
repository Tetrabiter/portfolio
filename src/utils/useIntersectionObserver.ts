import { useState, useRef, useEffect, useCallback } from 'react';

interface UseIntersectionObserverReturn {
  isIntersecting: boolean;
  entry: IntersectionObserverEntry | null;
  ref: (node: Element | null) => void;
}

export function useIntersectionObserver(
  options: IntersectionObserverInit = {}
): UseIntersectionObserverReturn {
  // 1. Состояние для отслеживания пересечения
  const [isIntersecting, setIntersecting] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  // 2. Ref для DOM-элемента (не триггерит ре-рендер)
  const elementRef = useRef<Element | null>(null);

  // 3. Callback ref - вызывается React когда элемент монтируется
  const ref = useCallback((node: Element | null) => {
    elementRef.current = node;
  }, []);

  // 4. Основной эффект - создаем Observer
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return; // Если элемента нет - выходим

    // Создаем observer с нашими опциями
    const observer = new IntersectionObserver(([entry]) => {
      // [entry] потому что IntersectionObserver возвращает массив
      setIntersecting(entry.isIntersecting);
      setEntry(entry);
    }, options);

    // Подписываемся на элемент
    observer.observe(element);

    // Cleanup function - ОБЯЗАТЕЛЬНО отписываемся
    return () => {
      observer.unobserve(element);
    };
  }, [options]); // Зависимость - options

  return {
    isIntersecting,
    entry,
    ref,
  };
}