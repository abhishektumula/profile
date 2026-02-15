"use client";

import { useEffect, useState } from "react";
import type { MouseEvent } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "portfolio-theme";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const stored = localStorage.getItem(STORAGE_KEY);
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return stored === "light" || stored === "dark"
      ? (stored as Theme)
      : systemDark
        ? "dark"
        : "light";
  });

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = (event: MouseEvent<HTMLButtonElement>) => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (typeof document.startViewTransition !== "function" || prefersReducedMotion) {
      setTheme(nextTheme);
      return;
    }

    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = document.startViewTransition(() => {
      setTheme(nextTheme);
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 420,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="shrink-0 rounded-full bg-neutral-200 p-2 text-neutral-900 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-neutral-300 hover:shadow dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700"
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M21 14.78A9 9 0 0 1 9.22 3a1 1 0 0 0-1.27-1.27A11 11 0 1 0 22.27 16a1 1 0 0 0-1.27-1.22Z" />
    </svg>
  );
}
