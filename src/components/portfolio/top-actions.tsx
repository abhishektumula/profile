"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/portfolio/theme-toggle";
import { GitHubIcon } from "@/components/portfolio/github-icon";

type TopActionsProps = {
  githubUrl: string;
};

const CONTACT_EMAIL = "abhishektumula.in@gmail.com";

export function TopActions({ githubUrl }: TopActionsProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const contactHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}`;
  const actionButtonClass =
    "inline-flex h-9 items-center justify-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 px-3 text-xs font-semibold text-neutral-800 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-neutral-200 hover:shadow dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 sm:h-10 sm:px-4 sm:text-sm";

  return (
    <div
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ease-out ${
        isScrolled
          ? "border-b border-neutral-300/70 bg-neutral-100/80 shadow-sm backdrop-blur-md dark:border-neutral-700/70 dark:bg-neutral-900/80"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="flex w-full justify-end px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex max-w-[100vw] items-center gap-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className={actionButtonClass}
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            href={contactHref}
            target="_blank"
            rel="noreferrer"
            className={actionButtonClass}
          >
            Contact Me
          </a>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
