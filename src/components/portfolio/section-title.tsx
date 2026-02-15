type SectionTitleProps = {
  eyebrow: string;
  title: string;
};

export function SectionTitle({ eyebrow, title }: SectionTitleProps) {
  return (
    <header className="mb-3">
      <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl">
        {title}
      </h2>
    </header>
  );
}
