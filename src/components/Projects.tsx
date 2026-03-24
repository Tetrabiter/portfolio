import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useSectionObserver } from "@/utils/useIntersectionObserver";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  interface Project {
    id: number;
    title: string;
    description: string;
    demoLink: string;
    github: string;
    technologies: string[];
    imgSrc: string;
    category: string;
    isAvailable?: boolean;
  }

  const projects: Project[] = [
    {
      id: 1,
      title: t("projects.items.akat.title"),
      description: t("projects.items.akat.description"),
      demoLink: "https://akat.kz/",
      github: "#",
      technologies: ["React", "TailwindCSS", "Yandex API"],
      imgSrc: "/akat-kz.png",
      category: "Landing page",
      isAvailable: true,
    },
    {
      id: 2,
      title: t("projects.items.marcus.title"),
      description: t("projects.items.marcus.description"),
      demoLink: "#",
      github: "https://github.com/Tetrabiter/Marcus.git",
      technologies: ["React", "Ollama", "Python"],
      imgSrc: "/marcus-ai.png",
      category: "AI chat-bot",
      isAvailable: false,
    },
    {
      id: 3,
      title: t("projects.items.rootly.title"),
      description: t("projects.items.rootly.description"),
      demoLink: "#",
      github: "https://github.com/Tetrabiter/rootly-frontend.git",
      technologies: ["React", "TailwindCSS", "API"],
      imgSrc: "/rootly.png",
      category: "SPA",
      isAvailable: false,
    },
    {
      id: 4,
      title: t("projects.items.trekshine.title"),
      description: t("projects.items.trekshine.description"),
      demoLink: "#",
      github: "https://github.com/Tetrabiter/trekshine-online-store.git",
      technologies: ["HTML", "Liquid", "JavaScript", "Shopify API", "CI/CD"],
      imgSrc: "/trekshine.png",
      category: "Website",
      isAvailable: false,
    },
    {
      id: 5,
      title: t("projects.items.vsepodomy.title"),
      description: t("projects.items.vsepodomy.description"),
      demoLink: "https://vsepodomy.ru/",
      github: "#",
      technologies: ["React", "TypeScript", "CRM", "TaliwindCSS"],
      imgSrc: "/vse-po-domy.png",
      category: "Website",
    },
    {
      id: 6,
      title: t("projects.items.mindflow.title"),
      description: t("projects.items.mindflow.description"),
      demoLink: "#",
      github: "https://github.com/Dasadno/MindFlow",
      technologies: ["React", "TypeScript", "Storybook", "FSD"],
      imgSrc: "/mindflow.png",
      category: "AI chat-bot",
      isAvailable: false,
    },
    {
      id: 7,
      title: t("projects.items.void-studio.title"),
      description: t("projects.items.void-studio.description"),
      demoLink: "https://tetrabiter.github.io/void-studio-landing/",
      github: "https://github.com/Tetrabiter/void-studio-landing",
      technologies: ["React", "TypeScript", "Intersection Observer API"],
      imgSrc: "/void-studio.png",
      category: "Landing page",
    },
  ];

  const sectionIds = ["projects"];
  const { visibleSections } = useSectionObserver(sectionIds, {
    threshold: 0.1, // Более чувствительный триггер
    rootMargin: "-20% 0px -20% 0px",
  });

  const isVisible = visibleSections.has("projects");

  return (
    <section id="projects" className="min-h-screen py-20 sm:py-32">
      <div
        className={`
        space-y-12 sm:space-y-16
        transition-all duration-1000 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      >
        <div className="w-full text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            {t("projects.title")}
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group relative overflow-hidden border-border hover:border-muted-foreground/50 transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.imgSrc || "/placeholder.svg"}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/60" />

                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="text-xs text-muted-foreground font-mono tracking-wider">
                        {project.category.toUpperCase()}
                      </div>
                      <h3 className="text-2xl font-light text-foreground group-hover:text-muted-foreground transition-colors duration-500">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="bg-background/80 hover:border-muted-foreground/50 transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        {project.isAvailable !== false ? (
                          <>
                            <Badge
                              variant="outline"
                              className="bg-green-500/10 text-green-500 border-green-500/20 py-1.5"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 animate-pulse" />
                              {t("projects.status.online")}
                            </Badge>
                            {project.demoLink && project.demoLink !== "#" && (
                              <Button
                                asChild
                                size="icon"
                                variant="outline"
                                className="bg-background/80 hover:bg-background hover:border-muted-foreground/50 transition-all duration-300"
                              >
                                <a
                                  href={project.demoLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <FaExternalLinkAlt className="h-4 w-4" />
                                </a>
                              </Button>
                            )}
                          </>
                        ) : (
                          <Badge
                            variant="secondary"
                            className="bg-muted text-muted-foreground border-transparent py-1.5"
                          >
                            {t("projects.status.offline")}
                          </Badge>
                        )}
                        {project.github !== "#" && (
                          <Button
                            asChild
                            size="icon"
                            variant="outline"
                            className="bg-background/80 hover:bg-background hover:border-muted-foreground/50 transition-all duration-300"
                          >
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaGithub className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
