import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { services, site } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact & booking — ${site.name}` },
      { name: "description", content: "Tell me about your project. Portraits, weddings, editorial and brand photography enquiries." },
      { property: "og:title", content: `Contact & booking — ${site.name}` },
      { property: "og:description", content: "Have a story worth telling? Start a conversation." },
    ],
  }),
  component: Contact,
});

const field = "w-full border-0 border-b bg-transparent py-3 text-lg outline-none transition-colors focus:border-ember";

function Contact() {
  const [error, setError] = useState("");
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const email = String(f.get("email") || "").trim();
    const message = String(f.get("message") || "").trim();
    if (!name || !/^\S+@\S+\.\S+$/.test(email) || message.length < 10) {
      setError("Please add your name, a valid email and a short message.");
      return;
    }
    setError("");
    const body = `Name: ${name}\nEmail: ${email}\nType: ${f.get("type")}\nDate: ${f.get("date") || "—"}\n\n${message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Enquiry — ${f.get("type")}`)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <PageHeader eyebrow="Contact & booking" title={<>Have a story <em>worth telling?</em></>} intro="Share a few details and I'll reply personally." />
      <section className="container-x grid gap-16 pb-28 md:grid-cols-12">
        <form onSubmit={onSubmit} noValidate className="grid gap-8 md:col-span-7">
          <div className="grid gap-8 md:grid-cols-2">
            <label className="block"><span className="eyebrow text-muted-foreground">Name</span><input name="name" required autoComplete="name" className={field} /></label>
            <label className="block"><span className="eyebrow text-muted-foreground">Email</span><input name="email" type="email" required autoComplete="email" className={field} /></label>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <label className="block"><span className="eyebrow text-muted-foreground">Project type</span>
              <select name="type" className={field}>{services.map((s) => <option key={s.name}>{s.name}</option>)}<option>Something else</option></select>
            </label>
            <label className="block"><span className="eyebrow text-muted-foreground">Preferred date (optional)</span><input name="date" type="date" className={field} /></label>
          </div>
          <label className="block"><span className="eyebrow text-muted-foreground">Tell me about it</span><textarea name="message" rows={5} required className={field} /></label>
          {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
          <button type="submit" className="eyebrow w-fit bg-ink px-8 py-4 text-ivory transition-colors hover:bg-ember">Send enquiry</button>
        </form>
        <aside className="space-y-8 md:col-span-4 md:col-start-9">
          <div><p className="eyebrow text-muted-foreground">Email</p><a href={`mailto:${site.email}`} className="display link-line mt-2 inline-block text-3xl">{site.email}</a></div>
          <div><p className="eyebrow text-muted-foreground">Phone</p><a href={site.phoneHref} className="link-line mt-2 inline-block text-lg">{site.phone}</a></div>
          <div><p className="eyebrow text-muted-foreground">Based in</p><p className="mt-2 text-lg">{site.location}</p></div>
          <div><p className="eyebrow text-muted-foreground">Social</p><a href={site.instagram} target="_blank" rel="noreferrer" className="link-line mt-2 inline-block text-lg">Instagram</a></div>
        </aside>
      </section>
    </>
  );
}
