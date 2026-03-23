import { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import About from "./components/About";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import DotNavigation from "./components/DotNavigation";
import Experience from "./components/Experience";
import { ThemeProvider } from "@/components/theme-provider";
import SectionPlaceholder from "./components/SectionPlaceholder";

const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  const { t } = useTranslation();
  const sections = [
    { id: "about", label: t("nav.about") },
    { id: "experience", label: t("nav.experience") },
    { id: "projects", label: t("nav.projects") },
    { id: "contact", label: t("nav.contact") },
  ];

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-full flex flex-col">
        <LanguageSwitcher />
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
