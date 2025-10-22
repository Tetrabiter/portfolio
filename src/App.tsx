import About from "./components/About";
import { Contact } from "./components/Contact";
import DotNavigation from "./components/DotNavigation";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  const sections = [
    /* { id: "hero", label: "Главная" }, */
    { id: "about", label: "Обо мне" },
    { id: 'experience', label: 'Опыт работы'},
    { id: "projects", label: "Проекты" },
    { id: "contact", label: "Контакты" },
  ];

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-full flex flex-col overflow-x-hiddenhidden">
        <DotNavigation 
          sections={sections}
        />
        
        {/* Просто передаем id, хук сам найдет элементы */}
        {/* <Hero/> */}
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
    
         <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
      </div>
    </ThemeProvider>
  );
}

export default App;
