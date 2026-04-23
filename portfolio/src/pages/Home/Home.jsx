import Footer from "../../components/layout/Footer";
import AboutSection from "../../components/sections/About/AboutSection";
import ContactSection from "../../components/sections/Contact/ContactSection";
import HeroSection from "../../components/sections/Hero/HeroSection";
import LabsSection from "../../components/sections/Labs/LabsSection";
import ProjectsSection from "../../components/sections/Projects/ProjectsSection";
import SkillsSection from "../../components/sections/Skills/SkillsSection";

export default function Home() {
  return (
    <>
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:shadow-lg"
      >
        Pular para o conteúdo principal
      </a>
      <main id="conteudo-principal">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <LabsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
