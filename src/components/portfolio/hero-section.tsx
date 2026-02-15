import { portfolioContent } from "@/lib/portfolio-content";

export function HeroSection() {
  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl">
        {portfolioContent.name}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
        {portfolioContent.bio}
      </p>

      <ul className="mt-7 flex flex-wrap gap-3" aria-label="Skills">
        {portfolioContent.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-neutral-300 bg-neutral-100 px-5 py-2 text-base font-semibold text-neutral-800 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
