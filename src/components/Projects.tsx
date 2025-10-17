import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "./ui/card";

const Projects = () => {
  interface Project {
    id: number;
    title: string;
    description: string;
    demoLink: string;
    github: string;
    technologies: string[];
    imgSrc: string;
    category: string;
  }

  const projects: Project[] = [
    {
      id: 1,
      title: "akat.kz",
      description:
        "Сайт для TOO AKAT TRADING. На сайте используется yandex api , сам же он генерирует первичные лиды , которые после попадают на почту менеджеру.",
      demoLink: "https://akat.kz/",
      github: "#",
      technologies: ["React ", "TailwindCSS ", "API"],
      imgSrc: "",
      category: "Landing",
    },
    {
      id: 2,
      title: "marcus ai",
      description:
        "ИИ-интервьюер который проводит собеседования для разработчиков",
      demoLink: "#",
      github: "#",
      technologies: ["React ", "Ollama ", "Python"],
      imgSrc: "",
      category: "AI chat-bot",
    },
    {
      id: 3,
      title: "Rootly",
      description:
        "Проект который был сделан за 48 часов , в качестве решения кейса на хакатоне от T1",
      demoLink: "#",
      github: "#",
      technologies: ["React ", "TailwindCSS ", "API"],
      imgSrc: "",
      category: "SPA",
    },
  ];

  const projectList = projects.map((project) => (
    <CarouselItem
      key={project.id}
      className="w-full h-100 flex basis-1/1 md:basis-1/1 lg:basis-1/2 xl:basis-1/3"
    >
      <Card className="w-2/3 h-full px-2">
        <div className="w-full">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm text-muted-foreground">{project.description}</p>
          <p className="text-xs">{project.technologies}</p>
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline text-sm"
          >
            Смотреть →
          </a>
        </div>
      </Card>
      <div className="w-full bg-muted overflow-hidden">
        <img src={project.imgSrc} alt="" className="w-full h-full" />
      </div>
    </CarouselItem>
  ));

  return (
    <section id="projects" className="w-[90%] py-16 mx-auto">
      <h2 className="text-7xl font-semibold mb-6">Мои проекты</h2>

      <Carousel opts={{ align: "center" }}>
        <CarouselContent>{projectList}</CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Projects;
