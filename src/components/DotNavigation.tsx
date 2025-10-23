import { useSectionObserver } from '../utils/useIntersectionObserver';

interface DotNavigationProps {
  sections: Array<{
    id: string;
    label: string;
  }>;
  className?: string;
}

const DotNavigation: React.FC<DotNavigationProps> = ({ 
  sections, 
  className = '' 
}) => {
  const sectionIds = sections.map(section => section.id);
  const { activeSection, scrollToSection } = useSectionObserver(sectionIds);

  return (
    <nav className={`hidden lg:block fixed left-8 top-1/2 transform -translate-y-1/2 z-50 ${className}`}>
      <div className="flex flex-col items-center space-y-4">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group flex items-center focus:outline-none"
            aria-label={`Перейти к секции ${section.label}`}
          >
            {/* Вертикальная линия между точками */}
            {index > 0 && (
              <div 
                className={`absolute -top-6 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
                  activeSection === section.id || activeSection === sections[index - 1].id
                    ? 'bg-blue-500'
                    : 'bg-gray-300'
                }`}
              />
            )}
            
            {/* Точка */}
            <div
              className={`relative w-3 h-5 rounded-full transition-all duration-300 transform ${
                activeSection === section.id
                  ? 'bg-green-400 scale-150'
                  : 'bg-white group-hover:bg-gray-500 group-hover:scale-110'
              }`}
            />
            
            {/* Лейбл при ховере */}
            <span
              className="absolute left-6 ml-2 px-2 py-1 text-white font-semibold text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
            >
              {section.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default DotNavigation;