import { Badge } from "./ui/badge";
import { FaCircle } from "react-icons/fa";

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
      className="w-full min-h-[50vh] py-16 px-4 max-w-5xl mx-auto"
    >
      <div className="flex flex-col gap-8 px-4 text-left">
        
        <div>
          <p className="text-opacity-50">PORTFOLIO / 2025</p>
          <h1 className="text-5xl">Тимофей Еливанов</h1>
          <p className="text-2xl">Frontend Developer crafting digital experiences at the intersection of design, technology, and user experience</p>
          <div className="flex items-center gap-1">
            <FaCircle className="text-green-500"/>
            <p>Available for work</p>
            <p className="ml-5">Russia</p>
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
