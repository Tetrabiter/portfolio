import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
      description: "ИИ-интервьюер который проводит собеседования для разработчиков",
      demoLink: "#",
      github: "#",
      technologies: ["React ", "Ollama ", "Python"],
      imgSrc: "",
      category: "AI chat-bot",
    },
    {
      id: 3,
      title: "",
      description: "",
      demoLink: "#",
      github: "#",
      technologies: ["React ", "TailwindCSS ", "API"],
      imgSrc: "",
      category: "SPA",
    },
  ];

  const [isOpen, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const projectList = projects.map((project) => (
    <CarouselItem key={project.id} className="basis-1/1 md:basis-1/1 lg:basis-1/2 xl:basis-1/3 px-2">
      <div className="bg-card border border-border rounded-lg p-4 shadow-md space-y-2">
        <div className="w-full aspect-video bg-muted rounded-md overflow-hidden">
          <img
            src={project.imgSrc}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-muted-foreground">
          {project.description}
        </p>
        <p className="text-xs">{project.technologies}</p>
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline text-sm"
        >
          Смотреть →
        </a>
      </div>
    </CarouselItem>
  ));

  return (
    <section id="projects" className="w-[80%] px-4 py-16 mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center">Мои проекты</h2>

      <Carousel opts={{ align: "center" }}>
        <CarouselContent>

            {projectList}

        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Projects;
