import { Badge } from "./ui/badge"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { useSectionObserver } from "@/utils/useIntersectionObserver"

const Projects = () => {
  interface Project {
    id: number
    title: string
    description: string
    demoLink: string
    github: string
    technologies: string[]
    imgSrc: string
    category: string
  }

  const projects: Project[] = [
    {
      id: 1,
      title: "akat.kz",
      description:
        "Сайт для TOO AKAT TRADING. На сайте используется yandex api, сам же он генерирует первичные лиды, которые после попадают на почту менеджеру. После создания сайта компания увеличила свои продажи на 30%",
      demoLink: "https://akat.kz/",
      github: "#",
      technologies: ["React", "TailwindCSS", "API"],
      imgSrc: "/akat-kz.png",
      category: "Landing",
    },
    {
      id: 2,
      title: "marcus ai",
      description: "ИИ-интервьюер который проводит собеседования для разработчиков",
      demoLink: "#",
      github: "https://github.com/Tetrabiter/Marcus.git",
      technologies: ["React", "Ollama", "Python"],
      imgSrc: "/ai-chatbot-interface.png",
      category: "AI chat-bot",
    },
    {
      id: 3,
      title: "Rootly",
      description: "Проект который был сделан за 48 часов, в качестве решения кейса на хакатоне от T1",
      demoLink: "#",
      github: "https://github.com/Tetrabiter/rootly-frontend.git",
      technologies: ["React", "TailwindCSS", "API"],
      imgSrc: "/rootly.png",
      category: "SPA",
    },
    {
      id: 4, 
      title: "интернет магазин Trekshine",
      description: 'Проект на базе shopify themes и shopify api. В ходе работы над сайтом увеличил посещаемость в 5 раз, уменьшил время загрузки на 12%,',
      demoLink: 'https://www.trekshine.com/',
      github: '#',
      technologies: ["HTML", "JavaScript", "Shopify API" , "CI/CD"],
      imgSrc: "/trekshine.png",
      category: 'Website',
    }
  ]

  const sectionIds = ['projects'];
  const { visibleSections } = useSectionObserver(sectionIds, {
    threshold: 0.1, // Более чувствительный триггер
    rootMargin: '-20% 0px -20% 0px'
  });

  const isVisible = visibleSections.has('projects');


  return (
    <section id="projects" className="min-h-screen py-20 sm:py-32">
       <div className={`
        space-y-12 sm:space-y-16
        transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}>
        
        <div className="w-full text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Мои проекты</h2>
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
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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
                            className="bg-background/50 backdrop-blur-none md:backdrop-blur-sm hover:border-muted-foreground/50 transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        <Button
                          asChild
                          size="icon"
                          variant="outline"
                          className="bg-background/50 backdrop-blur-none md:backdrop-blur-sm hover:bg-background hover:border-muted-foreground/50 transition-all duration-300"
                        >
                          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt className="h-4 w-4" />
                          </a>
                        </Button>
                        {project.github !== "#" && (
                          <Button
                            asChild
                            size="icon"
                            variant="outline"
                            className="bg-background/50 backdrop-blur-none md:backdrop-blur-sm hover:bg-background hover:border-muted-foreground/50 transition-all duration-300"
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
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
  )
}

export default Projects
