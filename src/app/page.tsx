import { Container } from "@/components/portfolio/container";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { HeroSection } from "@/components/portfolio/hero-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { TopActions } from "@/components/portfolio/top-actions";
import { portfolioContent } from "@/lib/portfolio-content";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 transition-colors duration-300 dark:bg-neutral-900 dark:text-neutral-100">
      <TopActions githubUrl={portfolioContent.githubProfile} />
      <Container>
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
      </Container>
    </div>
  );
}
