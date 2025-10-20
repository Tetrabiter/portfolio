const Experience = () => {
  interface WorkExperience {
    id: number;
    timeline: string;
    jobTitle: string;
    companyName: string;
    description: string;
    jobStack: string[];
  }

  const workExperience: WorkExperience[] = [
    {
      id: 1,
      timeline: "2023-2024",
      jobTitle: "Front-end developer",
      companyName: "aitomaton",
      description: "Built interfaces to display AI stats",
      jobStack: ["React", "TypeScript", "Joy UI", "CSS-IN-JS"],
    },
    {
      id: 2,
      timeline: "2023-2024",
      jobTitle: "Front-end developer",
      companyName: "aitomaton",
      description: "Built interfaces to display AI stats",
      jobStack: ["React", "TypeScript", "Joy UI", "CSS-IN-JS"],
    },
    {
      id: 3,
      timeline: "2023-2024",
      jobTitle: "Front-end developer",
      companyName: "aitomaton",
      description: "Built interfaces to display AI stats",
      jobStack: ["React", "TypeScript", "Joy UI", "CSS-IN-JS"],
    },
  ];

  const workExperienceList = workExperience.map((experience) => (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-3xl">{experience.timeline}</p>
        </div>

        <div>
          <p className="text-2xl">{experience.jobTitle}</p>
          <p className="text-xl">{experience.companyName}</p>
          <p className="text-lg">{experience.description}</p>
        </div>

        <div>
          <p className="text-md border">{experience.jobStack}</p>
        </div>
      </div>
      <hr className="mt-3"/>
    </div>
  ));

  return (
    <div id="experience" className="w-full max-w-4xl mx-auto">
      <div className="flex leading-normal items-center justify-between mb-6">
        <h2 className="text-6xl font-semibold">Опыт работы</h2>
        <p className="text-6xl font-semibold text-gray-400">2023-2025</p>
      </div>
      <div className="flex flex-col space-y-12">{workExperienceList}</div>
    </div>
  );
};

export default Experience;
