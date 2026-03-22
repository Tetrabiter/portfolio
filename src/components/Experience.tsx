import { Badge } from "./ui/badge";
import { useSectionObserver } from "@/utils/useIntersectionObserver";
import { useTranslation } from "react-i18next";

interface WorkExperience {
  id: number;
  timeline: string;
  jobTitle: string;
  companyName: string;
  description: string;
  jobStack: string[];
}

const Experience = () => {
  const { t } = useTranslation();

  const workExperience: WorkExperience[] = [
    {
      id: 1,
      timeline: "2024",
      jobTitle: t("experience.items.aitomaton.jobTitle"),
      companyName: t("experience.items.aitomaton.companyName"),
      description: t("experience.items.aitomaton.description"),
      jobStack: ["React", "TypeScript", "Joy UI", "CSS-IN-JS"],
    },
    {
      id: 2,
      timeline: "2023-2024",
      jobTitle: t("experience.items.freelance.jobTitle"),
      companyName: t("experience.items.freelance.companyName"),
      description: t("experience.items.freelance.description"),
      jobStack: ["React", "JavaScript", "WordPress", "CSS"],
    },
    {
      id: 3,
      timeline: "2022-2023",
      jobTitle: t("experience.items.startup.jobTitle"),
      companyName: t("experience.items.startup.companyName"),
      description: t("experience.items.startup.description"),
      jobStack: ["HTML", "CSS", "JavaScript", "React Native", "Expo"],
    },
  ];

  const WorkExperienceItem = ({
    experience,
  }: {
    experience: WorkExperience;
  }) => (
    <div key={experience.id}>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6 py-6 rounded-lg px-4">
        {/* Timeline */}
        <div className="lg:w-1/4">
          <p className="text-xl font-semibold text-white">
            {experience.timeline}
          </p>
        </div>

        {/* Job Details */}
        <div className="lg:w-2/4">
          <p className="text-2xl font-bold text-white mb-2">
            {experience.jobTitle}
          </p>
          <p className="text-xl text-white mb-2 font-medium">
            {experience.companyName}
          </p>
          <p className="text-lg text-white leading-relaxed">
            {experience.description}
          </p>
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

  const sectionIds = ["experience"];
  const { visibleSections } = useSectionObserver(sectionIds, {
    threshold: 0.1, // Более чувствительный триггер
    rootMargin: "-20% 0px -20% 0px",
  });

  const isVisible = visibleSections.has('experience');

  return (
    <section
      id="experience"
      className={`w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
          {t("experience.title")}
        </h2>
        <p className="text-3xl font-mono sm:text-5xl lg:text-6xl font-bold text-gray-400">
          2022-2024
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
