import { Badge } from "@/components/ui/badge";
import { useSectionObserver } from "@/utils/useIntersectionObserver";


const About = () => {
  const technologies = [
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Shadcn UI",
    "WebGL",
    "SQL/NO SQL DB",
  ];

  const listOfTechnologies = technologies.map((tech) => (
    <Badge
      key={tech}
      variant="outline"
      className="px-3 py-1 text-xs border-white hover:border-muted-foreground/50 transition-colors duration-300"
    >
      {tech}
    </Badge>
  ));

  const sectionIds = ["about"];
  const { visibleSections } = useSectionObserver(sectionIds, {
    threshold: 0.1, // Более чувствительный триггер
    rootMargin: "-20% 0px -20% 0px",
  });

  const isVisible = visibleSections.has('about');


  return (
    <section
      id="about"
      className={`w-full min-h-screen py-16 px-4 max-w-5xl mx-auto flex items-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
        <div className="lg:col-span-3 space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-2">
            <div className="text-sm text-muted-foreground font-mono tracking-wider">
              PORTFOLIO / 2025
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
              Тимофей
              <br />
              <span className="text-muted-foreground">Еливанов</span>
            </h1>
          </div>

          <div className="space-y-6 max-w-md">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Frontend Developer crafting digital experiences at the
              intersection of
              <span className="text-foreground"> design</span>,
              <span className="text-foreground"> technology</span>, and
              <span className="text-foreground"> user experience</span>.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for work
              </div>
              <div>Russia</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
          <div className="space-y-4">
            <div className="text-sm text-muted-foreground font-mono">
              НА ДАННЫЙ МОМЕНТ
            </div>
            <div className="space-y-2">
              <div className="text-foreground">Frontend разработчик</div>
              <div className="text-muted-foreground">
                @Open source contributer
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-sm text-muted-foreground font-mono">
              ФОКУС НА
            </div>
            <div className="flex flex-wrap gap-2">{listOfTechnologies}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
