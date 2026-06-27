import Footer from "@/components/layout/Footer";
import PageWrapper from "@/components/layout/PageWrapper";
import Contact from "@/features/contact/Contact";
// import GoldmanStudy from "@/features/case-studies/GoldmanStudy";
import Experience from "@/features/experience/Experience";
import Hero from "@/features/hero/Hero";
import Principles from "@/features/principles/Principles";
import Projects from "@/features/projects/Projects";
import Skills from "@/features/skills/skills";

export default function Home() {
  return (
    <PageWrapper>
      <Hero />

      <Principles />

      <Experience />

      <Projects />

      <Skills />

      <Contact />

      <Footer />
    </PageWrapper>
  );
}