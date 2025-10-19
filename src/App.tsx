import About from "./components/About";
import { Contact } from "./components/Contact";
import DotNavigation from "./components/DotNavigation";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  const sections = [
    { id: "hero", label: "Главная" },
    { id: "about", label: "Обо мне" },
    { id: 'experience', label: 'Опыт работы'},
    { id: "projects", label: "Проекты" },
    { id: "contact", label: "Контакты" },
  ];

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-full flex flex-col">
        <DotNavigation 
          sections={sections}
        />
        
        {/* Просто передаем id, хук сам найдет элементы */}
        <Hero id="hero" />
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
