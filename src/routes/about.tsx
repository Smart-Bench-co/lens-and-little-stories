import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { BookingCTA } from "./index";
import { images, site } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${site.name}` },
      { name: "description", content: `Meet ${site.name}, an independent photographer based in ${site.location}.` },
      { property: "og:title", content: `About — ${site.name}` },
      { property: "og:description", content: "Behind the lens: approach, inspirations and way of working." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader eyebrow="About" title={<>Behind the <em>lens.</em></>} />
      <section className="container-x grid gap-14 pb-28 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <img src={images.photographer} alt={site.name} className="aspect-[4/5] w-full object-cover" />
          <p className="eyebrow mt-4 text-muted-foreground">{site.location}</p>
        </Reveal>
        <Reveal className="space-y-6 text-lg leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7" delay={120}>
          <p className="display text-h3 text-foreground">Hello, I'm {site.name}.</p>
          <p>{site.intro}</p>
          <div className="border-t pt-6">
            <p className="eyebrow text-ember">Creativity</p>
            <p className="mt-3">{site.creativity}</p>
          </div>
          <div className="grid gap-8 border-t pt-6 sm:grid-cols-2">
            <div>
              <p className="eyebrow text-ember">Education</p>
              {site.education.map((e) => <p key={e.school} className="mt-3"><span className="text-foreground">{e.school}</span><br />{e.years}</p>)}
            </div>
            <div>
              <p className="eyebrow text-ember">Skills</p>
              <ul className="mt-3 space-y-1">{site.skills.map((k) => <li key={k}>{k}</li>)}</ul>
            </div>
          </div>
        </Reveal>
      </section>
      <BookingCTA />
    </>
  );
}
