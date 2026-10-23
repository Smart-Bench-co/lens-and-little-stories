import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { articles, formatDate, readingTime, site } from "@/lib/content";

export const Route = createFileRoute("/journal/")({
  head: () => ({
    meta: [
      { title: `Journal — ${site.name}` },
      { name: "description", content: "Stories, field notes and behind-the-scenes writing on photography." },
      { property: "og:title", content: `Journal — ${site.name}` },
      { property: "og:description", content: "Stories, field notes and behind-the-scenes writing." },
    ],
  }),
  component: Journal,
});

function Journal() {
  return (
    <>
      <PageHeader eyebrow="Journal" title={<>Notes &amp; <em>stories</em></>} intro="Behind the scenes, on the road, and thinking about light." />
      <section className="container-x pb-28">
        {articles.map((a, i) => (
          <Reveal key={a.slug}>
            <Link to="/journal/$slug" params={{ slug: a.slug }} className="group grid items-center gap-8 border-t py-12 md:grid-cols-12">
              <div className="aspect-[4/3] overflow-hidden bg-muted md:col-span-4">
                <img src={a.cover} alt="" loading="lazy" className="img-zoom h-full w-full object-cover group-hover:scale-[1.03]" />
              </div>
              <div className="md:col-span-7 md:col-start-6">
                <p className="eyebrow text-muted-foreground">{String(i + 1).padStart(2, "0")} — {formatDate(a.date)} · {readingTime(a)} min read</p>
                <h2 className="display text-h3 mt-4">{a.title}</h2>
                <p className="mt-3 text-muted-foreground">{a.excerpt}</p>
                <span className="eyebrow link-line mt-6 inline-block">Read the story →</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>
    </>
  );
}
