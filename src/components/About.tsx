import { Badge } from "./ui/badge";

const About = () => {

  const technologies = ["React" , "Tailwind CSS", "TypeScript", "Shadcn UI" , "WebGL" , "SQL/NO SQL DB"]

  const listOfTechnologies = technologies.map((tech) =>(
      <Badge 
        variant={"outline"}
        className="bg-black text-white px-4 py-2"
      >
        {tech}
      </Badge>
  ))


  return (
    <section
      id="about"
      className="w-full min-h-screen py-16 px-4 max-w-3xl mx-auto"
    >
      <div>
        
        <div>
          <p className="">PORTFOLIO / 2025</p>
          <h1 className="">Тимофей Еливанов</h1>
          <p className="">Frontend Developer crafting digital experiences at the intersection of design, technology, and user experience</p>
          <div className="flex gap-4">
            <p>Available for work</p>
            <p>Russia</p>
          </div>
        </div>

        <div>
            <p>НА ДАННЫЙ МОМЕНТ</p>
            <p>Frontend разработчик</p>
            <p>@Open source contributer</p>
        </div>

        <div>
          <p>ФОКУС НА</p>
          <div>{listOfTechnologies}</div>
        </div>
      </div>
    </section>
  );
};

export default About;
