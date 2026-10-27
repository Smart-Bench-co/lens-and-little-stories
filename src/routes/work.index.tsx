import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ProjectTile } from "@/components/site/ProjectTile";
import { Reveal } from "@/components/site/Reveal";
import { categories, projects, site, type Category } from "@/lib/content";
import { cn } from "@/lib/utils";

const slugs = categories.map((c) => c.slug) as string[];

export const Route = createFileRoute("/work/")({
  validateSearch: (s: Record<string, unknown>): { category?: Category } =>
    typeof s["category"] === "string" && slugs.includes(s["category"])
      ? { category: s["category"] as Category }
      : {},
  head: () => ({
    meta: [
      { title: `Work — ${site.name}` },
      {
        name: "description",
        content:
          "Portraits, fashion, weddings, documentary, travel and commercial photography projects.",
      },
      { property: "og:title", content: `Work — ${site.name}` },
      { property: "og:description", content: "Selected photography projects, 2023–2026." },
    ],
  }),
  component: Work,
});

function Work() {
  const { category } = Route.useSearch();
  const list = category ? projects.filter((p) => p.category === category) : projects;
  return (
    <>
      <PageHeader
        eyebrow={`Portfolio — ${projects.length} projects`}
        title={
          <>
            All <em>work</em>
          </>
        }
      />
      <div className="container-x">
        <nav
          aria-label="Filter by category"
          className="flex flex-wrap gap-x-6 gap-y-3 border-y py-5"
        >
          <Link
            to="/work"
            search={{}}
            className={cn(
              "eyebrow",
              !category ? "text-ember" : "text-muted-foreground hover:text-foreground",
            )}
          >
            All
          </Link>
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/work"
              search={{ category: c.slug }}
              className={cn(
                "eyebrow",
                category === c.slug ? "text-ember" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {c.name}
            </Link>
          ))}
        </nav>
        <div className="grid gap-x-10 gap-y-20 py-20 md:grid-cols-2">
          {list.map((p, i) => (
            <Reveal key={p.slug} className={cn(i % 2 === 1 && "md:mt-32")}>
              <ProjectTile p={p} index={i} showGallery />
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
