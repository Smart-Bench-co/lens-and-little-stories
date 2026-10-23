import type { ReactNode } from "react";

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: string }) {
  return (
    <section className="container-x pb-16 pt-36 md:pt-48">
      <p className="eyebrow animate-rise text-ember">{eyebrow}</p>
      <h1 className="display text-h1 mt-6 max-w-5xl animate-rise" style={{ animationDelay: "100ms" }}>{title}</h1>
      {intro && <p className="mt-8 max-w-xl text-lg text-muted-foreground animate-rise" style={{ animationDelay: "200ms" }}>{intro}</p>}
    </section>
  );
}
