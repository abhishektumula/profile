import { portfolioContent } from "@/lib/portfolio-content";
import { ExternalLinkIcon, LinkIcon } from "@/components/portfolio/icons";
import { SectionTitle } from "@/components/portfolio/section-title";

export function ProjectsSection() {
  return (
    <section className="mt-16">
      <SectionTitle eyebrow="Featured" title="Projects" />

      <div className="space-y-8">
        {portfolioContent.projects.map((project) => (
          <article key={project.name} className="group">
            <a
              href={project.href}
              className="inline-flex items-center gap-2 text-2xl font-semibold text-neutral-900 transition duration-200 hover:text-neutral-700 dark:text-neutral-100 dark:hover:text-neutral-300"
              target="_blank"
              rel="noreferrer"
            >
              {project.name}
              <ExternalLinkIcon />
            </a>
            <p className="mt-2 max-w-2xl text-lg leading-relaxed text-neutral-700 transition duration-200 group-hover:text-neutral-900 dark:text-neutral-300 dark:group-hover:text-neutral-100">
              {project.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
          Other side projects
        </h3>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-3">
          {portfolioContent.sideProjects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              className="inline-flex items-center gap-2 text-xl text-neutral-800 transition duration-200 hover:-translate-y-0.5 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-50"
              target="_blank"
              rel="noreferrer"
            >
              {project.name}
              <LinkIcon />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
