import type { Metadata } from "next";
import { Container } from "@/components/portfolio/container";
import { SignatureFooter } from "@/components/portfolio/signature-footer";
import { TopActions } from "@/components/portfolio/top-actions";
import { SectionTitle } from "@/components/portfolio/section-title";
import { ExternalLinkIcon } from "@/components/portfolio/icons";
import { portfolioContent } from "@/lib/portfolio-content";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Articles and essays by Abhishek Tumula.",
};

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 transition-colors duration-300 dark:bg-neutral-900 dark:text-neutral-100">
      <TopActions githubUrl={portfolioContent.githubProfile} />
      <Container>
        <section>
          <SectionTitle eyebrow="Featured" title="Blogs" />
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-700 dark:text-neutral-300 sm:text-lg">
            Long-form thoughts on software, product quality, and engineering culture.
          </p>

          <div className="mt-8 space-y-6">
            {portfolioContent.blogs.map((blog) => (
              <article
                key={blog.href}
                className="rounded-2xl border border-neutral-300/80 bg-neutral-50 p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-700/80 dark:bg-neutral-800/60"
              >
                <a
                  href={blog.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-lg font-semibold text-neutral-900 transition hover:text-neutral-700 dark:text-neutral-100 dark:hover:text-neutral-300 sm:text-xl"
                >
                  {blog.title}
                  <ExternalLinkIcon />
                </a>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {blog.publishedAt}
                </p>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                  {blog.excerpt}
                </p>
              </article>
            ))}
          </div>
        </section>
        <SignatureFooter />
      </Container>
    </div>
  );
}
