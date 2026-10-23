import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { categories, projects, site } from "@/lib/content";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    const title = p ? `${p.title} — ${site.name}` : "Project not found";
    return {
      meta: [
        { title },
        { name: "description", content: p?.summary ?? "" },
        { property: "og:title", content: title },
        { property: "og:description", content: p?.summary ?? "" },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project: p } = Route.useLoaderData();
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];
  const cat = categories.find((c) => c.slug === p.category)?.name;
  return (
    <article>
      <header className="container-x pb-14 pt-36 md:pt-48">
        <Link to="/work" className="eyebrow link-line text-muted-foreground">← All work</Link>
        <h1 className="display text-hero mt-8 animate-rise">{p.title}</h1>
        <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-6 border-t pt-6">
          {[["Category", cat], ["Location", p.location], ["Year", p.year]].map(([k, v]) => (
            <div key={k as string}><dt className="eyebrow text-muted-foreground">{k}</dt><dd className="mt-1">{v}</dd></div>
          ))}
        </dl>
      </header>
      <img src={p.cover} alt={p.title} className="max-h-[90vh] w-full object-cover animate-reveal-img" />
      <section className="container-x grid gap-10 py-24 md:grid-cols-12">
        <p className="display text-h3 md:col-span-5 italic">{p.summary}</p>
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7">
          {p.story.map((t, i) => <p key={i}>{t}</p>)}
        </div>
      </section>
      <section className="container-x grid gap-6 pb-24 md:grid-cols-2">
        {p.gallery.slice(1).map((src, i) => (
          <Reveal key={i} delay={i * 100}><img src={src} alt={`${p.title}, frame ${i + 2}`} loading="lazy" className="aspect-[4/5] w-full object-cover" /></Reveal>
        ))}
      </section>
      <Link to="/work/$slug" params={{ slug: next.slug }} className="section-dark group block py-24">
        <div className="container-x">
          <p className="eyebrow text-ember">Next project</p>
          <p className="display text-h1 mt-4 transition-transform duration-500 group-hover:translate-x-3">{next.title} →</p>
        </div>
      </Link>
    </article>
  );
}
