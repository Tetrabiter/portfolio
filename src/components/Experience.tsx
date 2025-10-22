import { Badge } from "./ui/badge";

interface WorkExperience {
  id: number;
  timeline: string;
  jobTitle: string;
  companyName: string;
  description: string;
  jobStack: string[];
}

const Experience = () => {
  const workExperience: WorkExperience[] = [
    {
      id: 1,
      timeline: "2023-2024",
      jobTitle: "Front-end developer",
      companyName: "Aitomaton",
      description: "Built interfaces to display AI stats",
      jobStack: ["React", "TypeScript", "Joy UI", "CSS-IN-JS"],
    },
    {
      id: 2,
      timeline: "2022-2023",
      jobTitle: "Front-end developer",
      companyName: "Tech Company",
      description: "Developed responsive web applications",
      jobStack: ["React", "JavaScript", "Material-UI", "Redux"],
    },
    {
      id: 3,
      timeline: "2021-2022",
      jobTitle: "Junior Front-end Developer",
      companyName: "Startup Inc",
      description: "Created user interfaces and components",
      jobStack: ["HTML", "CSS", "JavaScript", "React"],
    },
  ];

  const WorkExperienceItem = ({ experience }: { experience: WorkExperience }) => (
    <div key={experience.id}>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6 py-6 rounded-lg px-4">
        {/* Timeline */}
        <div className="lg:w-1/4">
          <p className="text-xl font-semibold text-white">{experience.timeline}</p>
        </div>

        {/* Job Details */}
        <div className="lg:w-2/4">
          <p className="text-2xl font-bold text-white mb-2">{experience.jobTitle}</p>
          <p className="text-xl text-white mb-2 font-medium">{experience.companyName}</p>
          <p className="text-lg text-white leading-relaxed">{experience.description}</p>
        </div>

        {/* Tech Stack */}
        <div className="lg:w-1/4">
          <div className="flex flex-wrap gap-2">
            {experience.jobStack.map((tech, index) => (
              <Badge
                key={index}
                variant={"outline"}
                className="px-3 py-1 bg-black text-white text-sm font-semibold border border-white"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <hr className="border-gray-600" />
    </div>
  );

  return (
    <section id="experience" className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
          Опыт работы
        </h2>
        <p className="text-3xl font-mono sm:text-5xl lg:text-6xl font-bold text-gray-400">
          2021-2024
        </p>
      </div>

      {/* Experience List */}
      <div className="space-y-4">
        {workExperience.map((experience) => (
          <WorkExperienceItem key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default Experience;