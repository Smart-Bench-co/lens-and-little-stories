import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { BookingCTA } from "./index";
import { process, services, site } from "@/lib/content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: `Services — ${site.name}` },
      { name: "description", content: "Portrait, wedding, editorial, commercial and documentary photography. Request a quote." },
      { property: "og:title", content: `Services — ${site.name}` },
      { property: "og:description", content: "Photography services and how working together happens." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHeader eyebrow="Services" title={<>How we can <em>work together</em></>} intro="Every project is quoted individually, based on scope, time and usage." />
      <section className="container-x pb-24">
        {services.map((s, i) => (
          <Reveal key={s.name} className="grid gap-6 border-t py-12 md:grid-cols-12">
            <span className="eyebrow text-ember md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
            <h2 className="display text-h3 md:col-span-4">{s.name}</h2>
            <div className="space-y-3 text-muted-foreground md:col-span-5">
              <p>{s.description}</p>
              <p><span className="eyebrow mr-2 text-foreground">Expect</span>{s.expect}</p>
            </div>
            <Link to="/contact" className="eyebrow link-line h-fit w-fit md:col-span-2 md:justify-self-end">Request a quote →</Link>
          </Reveal>
        ))}
      </section>
      <section className="section-dark py-24">
        <div className="container-x">
          <h2 className="display text-h2">The <em>process</em></h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-4">
            {process.map((p) => (
              <li key={p.n} className="border-t pt-6">
                <span className="eyebrow text-ember">{p.n}</span>
                <h3 className="display mt-3 text-4xl">{p.title}</h3>
                <p className="mt-3 text-muted-foreground">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <BookingCTA />
    </>
  );
}
