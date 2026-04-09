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
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <LabsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
