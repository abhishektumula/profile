import { portfolioContent } from "@/lib/portfolio-content";
import { SectionTitle } from "@/components/portfolio/section-title";
import { LinkIcon } from "./icons";

export function ProjectsSection() {
  return (
    <section className="mt-16">
      <SectionTitle eyebrow="Featured" title="Projects" />

      <div className="space-y-8">
        {portfolioContent.projects.map((project) => (
          <article key={project.name} className="group">
            <div className="inline-flex items-center gap-2">
              <a
                href={project.href}
                className="inline-flex items-center text-xl font-semibold text-neutral-900 transition duration-200 hover:text-neutral-700 dark:text-neutral-100 dark:hover:text-neutral-300 sm:text-2xl"
                target="_blank"
                rel="noreferrer"
              >
                {project.name}
              </a>
              {project.url ? (
                <a
                  href={project.url}
                  className="inline-flex text-neutral-700 transition duration-200 hover:-translate-y-0.5 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-50"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${project.name} website`}
                >
                  <LinkIcon />
                </a>
              ) : null}
            </div>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-neutral-700 transition duration-200 group-hover:text-neutral-900 dark:text-neutral-300 dark:group-hover:text-neutral-100 sm:text-lg">
              {project.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 sm:text-2xl">
          Other side projects
        </h3>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-3">
          {portfolioContent.sideProjects.map((project) => (
            <div key={project.name} className="inline-flex items-center gap-2">
              <a
                href={project.href}
                className="inline-flex items-center text-lg text-neutral-800 transition duration-200 hover:-translate-y-0.5 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-50 sm:text-xl"
                target="_blank"
                rel="noreferrer"
              >
                {project.name}
              </a>
              {project.url ? (
                <a
                  href={project.url}
                  className="inline-flex text-neutral-700 transition duration-200 hover:-translate-y-0.5 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-50"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${project.name} website`}
                >
                  <LinkIcon />
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
