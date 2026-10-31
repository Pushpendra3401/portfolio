import { HorizontalScrollContainer } from "@/components/HorizontalScrollContainer";
import { Hero } from "@/components/Hero";
import { IntroSection } from "@/components/IntroSection";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { ExperienceAndAchievements } from "@/components/ExperienceAndAchievements";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07080c] text-white selection:bg-cyan-500 selection:text-black">
      <HorizontalScrollContainer>
        <Hero />
        <IntroSection />
        <Projects />
        <About />
        <Skills />
        <ExperienceAndAchievements />
        <Contact />
      </HorizontalScrollContainer>
    </main>
  );
}
