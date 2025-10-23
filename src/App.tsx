import { lazy, Suspense } from "react";
import About from "./components/About";
import DotNavigation from "./components/DotNavigation";
import Experience from "./components/Experience";
import { ThemeProvider } from "@/components/theme-provider";
import SectionPlaceholder from "./components/SectionPlaceholder";

const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  const sections = [
    { id: "about", label: "Обо мне" },
    { id: "experience", label: "Опыт работы" },
    { id: "projects", label: "Проекты" },
    { id: "contact", label: "Контакты" },
  ];

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-full flex flex-col overflow-x-hiddenhidden">
        <DotNavigation sections={sections} />

        <About />
        <Experience />

        <Suspense fallback={<SectionPlaceholder />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<SectionPlaceholder />}>
          <Contact />
        </Suspense>

        <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
      </div>
    </ThemeProvider>
  );
}

export default App;
