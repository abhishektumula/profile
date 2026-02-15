"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/portfolio/theme-toggle";
import { GitHubIcon } from "@/components/portfolio/github-icon";

type TopActionsProps = {
  githubUrl: string;
  emailAddress?: string;
};

export function TopActions({ githubUrl, emailAddress }: TopActionsProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const contactHref = emailAddress
    ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`
    : "#";

  return (
    <div
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ease-out ${
        isScrolled
          ? "border-b border-neutral-300/70 bg-neutral-100/80 shadow-sm backdrop-blur-md dark:border-neutral-700/70 dark:bg-neutral-900/80"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1200px] justify-end px-2 py-2 sm:px-5 sm:py-3">
      <div
        className={`flex max-w-[calc(100vw-1rem)] items-center gap-2 rounded-2xl border px-2 py-2 transition-all duration-300 ease-out sm:max-w-none ${
          isScrolled
            ? "border-neutral-300/70 bg-neutral-100/65 shadow-md dark:border-neutral-700/70 dark:bg-neutral-900/65"
            : "border-transparent bg-transparent"
        }`}
      >
      <a
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 px-3 py-2 text-xs font-semibold text-neutral-800 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-neutral-200 hover:shadow dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 sm:px-4 sm:text-sm"
      >
        <GitHubIcon />
        GitHub
      </a>
      <a
        href={contactHref}
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-neutral-300 bg-neutral-100 px-3 py-2 text-xs font-semibold text-neutral-800 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-neutral-200 hover:shadow dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 sm:px-4 sm:text-sm"
      >
        Contact Me
      </a>
      <ThemeToggle />
      </div>
      </div>
    </div>
  );
}
