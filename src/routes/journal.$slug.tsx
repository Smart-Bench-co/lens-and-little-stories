import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { articles, formatDate, readingTime, site } from "@/lib/content";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    const title = a ? `${a.title} — ${site.name}` : "Story not found";
    return {
      meta: [
        { title },
        { name: "description", content: a?.excerpt ?? "" },
        { property: "og:title", content: title },
        { property: "og:description", content: a?.excerpt ?? "" },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { article: a } = Route.useLoaderData();
  return (
    <article className="pb-28">
      <header className="container-x max-w-4xl pb-14 pt-36 md:pt-48">
        <Link to="/journal" className="eyebrow link-line text-muted-foreground">← Journal</Link>
        <p className="eyebrow mt-10 text-ember">{formatDate(a.date)} · {readingTime(a)} min read</p>
        <h1 className="display text-h1 mt-6 animate-rise">{a.title}</h1>
      </header>
      <img src={a.cover} alt="" className="container-x max-h-[80vh] object-cover" />
      <div className="container-x max-w-2xl space-y-6 pt-16 text-lg leading-relaxed">
        <p className="display text-h3 italic">{a.excerpt}</p>
        {a.body.map((t, i) => <p key={i} className="text-muted-foreground">{t}</p>)}
      </div>
    </article>
  );
}
