# Portfolio Project

## Technical Overview
This repository contains a modern, high-performance web application built with a focus on scalability, type safety, and optimal user experience.

### Technology Stack
- **Core**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS v4, `clsx`, `tailwind-merge`
- **UI Library**: Radix UI (shadcn/ui architecture), Embla Carousel
- **Animations**: GSAP, Tailwind Animate CSS
- **Internationalization**: i18next, react-i18next
- **Icons**: Lucide React, React Icons

### Architectural Highlights
- **Optimized Build Process**: Vite provides rapid Hot Module Replacement (HMR) during development and highly optimized static assets for production.
- **Strict Static Typing**: TypeScript enforces rigorous type boundaries across components, reducing runtime exceptions and serving as self-documenting code.
- **Component-Driven Design**: The UI is constructed using isolated, reusable components based on Radix UI primitives, ensuring cross-browser consistency and WAI-ARIA compliance.
- **Dynamic Styling Strategy**: The combination of Tailwind CSS with utility-merging functions (`tailwind-merge`) prevents styling conflicts and enables predictable dynamic component generation.
- **Asynchronous Localization**: Translations are managed via `i18next` with an HTTP backend, allowing language payloads to be fetched dynamically rather than bloating the main JavaScript bundle.
- **Hardware-Accelerated Animations**: Complex layout transitions and micro-interactions are orchestrated utilizing GSAP, ensuring 60fps performance without main thread blocking.

---

## Технический обзор
Данный репозиторий содержит современное, высокопроизводительное веб-приложение, разработанное с упором на масштабируемость, строгую типизацию и оптимальный пользовательский опыт.

### Технологический стек
- **Ядро**: React 19, TypeScript, Vite
- **Стилизация**: Tailwind CSS v4, `clsx`, `tailwind-merge`
- **UI Библиотека**: Radix UI (архитектура shadcn/ui), Embla Carousel
- **Анимации**: GSAP, Tailwind Animate CSS
- **Интернационализация**: i18next, react-i18next
- **Иконки**: Lucide React, React Icons

### Архитектурные особенности
- **Оптимизированный процесс сборки**: Vite обеспечивает быструю горячую замену модулей (HMR) при разработке и высокооптимизированные статические ассеты для продакшена.
- **Строгая статическая типизация**: TypeScript устанавливает жесткие границы типов между компонентами, снижая вероятность ошибок во время выполнения.
- **Компонентно-ориентированный дизайн**: Пользовательский интерфейс построен на изолированных, переиспользуемых компонентах на базе примитивов Radix UI, что гарантирует кроссбраузерную согласованность и соответствие стандартам WAI-ARIA.
- **Динамическая стратегия стилизации**: Комбинация Tailwind CSS с функциями слияния утилит (`tailwind-merge`) предотвращает конфликты стилей и обеспечивает предсказуемую генерацию компонентов.
- **Асинхронная локализация**: Переводы управляются через `i18next` с HTTP-бэкендом, что позволяет загружать языковые пакеты динамически, не перегружая основной JavaScript-бандл.
- **Аппаратно-ускоренные анимации**: Сложные переходы интерфейса и микроинтеракции реализованы с использованием GSAP, что обеспечивает высокую производительность отрисовки без блокировки основного потока.
