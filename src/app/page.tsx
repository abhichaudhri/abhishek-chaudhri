import PageWrapper from "@/components/layout/PageWrapper";
// import GoldmanStudy from "@/features/case-studies/GoldmanStudy";
import Experience from "@/features/experience/Experience";
import Hero from "@/features/hero/Hero";
import Principles from "@/features/principles/Principles";
import Projects from "@/features/projects/Projects";

export default function Home() {
  return (
    <PageWrapper>
      <Hero />

      <Principles />
      <Experience />
      {/* <GoldmanStudy /> */}
      <Projects />
    </PageWrapper>
  );
}