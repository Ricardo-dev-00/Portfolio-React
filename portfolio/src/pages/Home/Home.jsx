import HeroSection from "../../components/Hero/HeroSection";
import AboutSection from "../../components/About/AboutSection";
import SkillsSection from "../../components/Skills/SkillsSection";
import ProjectsSection from "../../components/Projects/ProjectsSection";
import LabsSection from "../../components/Labs/LabsSection";
import ContactSection from "../../components/Contact/ContactSection";
import Footer from "../../components/Footer/Footer";

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
