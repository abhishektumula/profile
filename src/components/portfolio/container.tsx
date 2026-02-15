import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-4 pb-8 pt-20 sm:px-8 sm:pb-12 sm:pt-24">
      {children}
    </main>
  );
}
