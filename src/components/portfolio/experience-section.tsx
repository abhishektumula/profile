import { portfolioContent } from "@/lib/portfolio-content";
import { SectionTitle } from "@/components/portfolio/section-title";

export function ExperienceSection() {
  return (
    <section className="mt-16 pb-10">
      <SectionTitle eyebrow="Featured" title="Experience" />
      <div className="space-y-8">
        {portfolioContent.experiences.map((experience, index) => (
          <article key={`${experience.company}-${index}`}>
            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              {experience.company}
            </h3>
            <p className="mt-2 max-w-2xl text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              {experience.roleSummary}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
