import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-family.jpg";
import hvacImage from "@/assets/service-hvac.jpg";
import plumbingImage from "@/assets/service-plumbing.jpg";
import { Phone, Wrench, Wind, Droplets, Shield, Clock, Heart, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Southlake HVAC and Plumbing | Family-Owned Comfort Experts" },
      { name: "description", content: "Family-owned HVAC and plumbing in Southlake, TX. Honest pricing, 24/7 emergency service, and the warm, neighborly care your home deserves." },
      { property: "og:title", content: "Southlake HVAC and Plumbing" },
      { property: "og:description", content: "Family-owned heating, cooling, and plumbing experts serving Southlake, TX." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Trust />
      <Services />
      <Family />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="h-9 w-9 rounded-full grid place-items-center text-primary-foreground" style={{ background: "var(--gradient-warm)" }}>
            <Heart className="h-4 w-4" fill="currentColor" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Southlake HVAC <span className="text-primary">&amp;</span> Plumbing
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#family" className="hover:text-foreground transition">Our Family</a>
          <a href="#reviews" className="hover:text-foreground transition">Reviews</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a href="tel:+18175550100" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-sm hover:opacity-95 transition">
          <Phone className="h-4 w-4" /> (817) 555-0100
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-sunset)" }} />
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
            <Heart className="h-3 w-3 text-primary" fill="currentColor" /> Family-owned since 2008
          </span>
          <h1 className="mt-5 text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
            Comfort that feels like <span style={{ background: "var(--gradient-warm)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>coming home.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Honest, neighborly HVAC and plumbing service across Southlake. We treat your home like our own — because for three generations, this town has been our family too.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold shadow-[var(--shadow-warm)] hover:translate-y-[-1px] transition">
              Book a visit
            </a>
            <a href="tel:+18175550100" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-secondary transition">
              <Phone className="h-4 w-4" /> Call us anytime
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
              <span className="ml-1 font-medium text-foreground">4.9</span>
            </div>
            <span>1,200+ happy Southlake neighbors</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] -z-10 blur-2xl opacity-40" style={{ background: "var(--gradient-warm)" }} />
          <img
            src={heroImage}
            alt="The Southlake HVAC and Plumbing family team in front of a Texas home at sunset"
            width={1536}
            height={1024}
            className="rounded-[1.75rem] shadow-[var(--shadow-warm)] object-cover w-full aspect-[4/3]"
          />
          <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-[var(--shadow-soft)] hidden sm:flex items-center gap-3">
            <span className="h-10 w-10 rounded-full bg-sage/20 grid place-items-center">
              <Clock className="h-5 w-5" style={{ color: "var(--sage)" }} />
            </span>
            <div>
              <div className="text-sm font-semibold">24/7 emergency</div>
              <div className="text-xs text-muted-foreground">We answer, day or night</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const items = [
    { icon: Shield, label: "Licensed & insured" },
    { icon: Heart, label: "Family-owned" },
    { icon: Clock, label: "On-time guarantee" },
    { icon: Star, label: "Up-front pricing" },
  ];
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 text-sm">
            <span className="h-9 w-9 rounded-full bg-card border border-border grid place-items-center text-primary">
              <Icon className="h-4 w-4" />
            </span>
            <span className="font-medium">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: Wind,
      title: "Heating & Cooling",
      image: hvacImage,
      desc: "AC repair, furnace tune-ups, heat pump installs, and indoor air quality — keeping your home perfectly comfortable through every Texas season.",
      bullets: ["AC & furnace repair", "New system installation", "Seasonal maintenance plans"],
    },
    {
      icon: Droplets,
      title: "Plumbing",
      image: plumbingImage,
      desc: "From a leaky faucet to a whole-home repipe, our plumbers show up on time, explain what they're doing, and leave your home tidier than they found it.",
      bullets: ["Leak detection & repair", "Water heaters & softeners", "Drain cleaning & sewer"],
    },
  ];
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-primary uppercase tracking-wider">What we do</p>
        <h2 className="mt-2 text-4xl lg:text-5xl font-semibold tracking-tight">Two trades. One trusted family.</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          We've built our reputation on doing the small things right — and showing up when it counts.
        </p>
      </div>
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {services.map((s) => (
          <article key={s.title} className="group rounded-3xl bg-card border border-border overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-warm)] transition">
            <div className="aspect-[16/10] overflow-hidden">
              <img src={s.image} alt={s.title} width={1024} height={768} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-700" />
            </div>
            <div className="p-7">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full grid place-items-center text-primary-foreground" style={{ background: "var(--gradient-warm)" }}>
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="text-2xl font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Family() {
  return (
    <section id="family" className="relative">
      <div className="absolute inset-0 -z-10 bg-secondary/50" />
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28 grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
            <Heart className="h-4 w-4" fill="currentColor" /> Our story
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-semibold tracking-tight">
            Started in a garage. Still answered by a real person.
          </h2>
        </div>
        <div className="lg:col-span-3 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            In 2008, our dad Ray loaded a single van with tools and started knocking on doors in Southlake. Today, his three kids and a small crew of trusted friends carry that same promise — show up, do it right, and treat every home like Grandma's.
          </p>
          <p>
            We're not a call center. When you ring us, you'll hear a familiar voice. When we arrive, you'll see a familiar face. That's the difference family makes.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-4">
            {[
              { n: "16+", l: "Years serving" },
              { n: "1.2k+", l: "Local families" },
              { n: "4.9★", l: "Avg. rating" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>{s.n}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { q: "They fixed our AC on the hottest day of July and didn't gouge us. Felt like having a neighbor help us out.", n: "The Patel Family", l: "Timarron" },
    { q: "Ray's son walked me through every option for our water heater. No pressure, just honest advice.", n: "Megan R.", l: "Carillon" },
    { q: "On time, kind to our dogs, and cleaned up after themselves. We won't call anyone else.", n: "The Coopers", l: "Stone Lakes" },
  ];
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-primary uppercase tracking-wider">Kind words</p>
        <h2 className="mt-2 text-4xl lg:text-5xl font-semibold tracking-tight">Loved by Southlake neighbors.</h2>
      </div>
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <figure key={r.n} className="rounded-3xl bg-card border border-border p-7 shadow-[var(--shadow-soft)]">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
            </div>
            <blockquote className="mt-4 text-foreground leading-relaxed">"{r.q}"</blockquote>
            <figcaption className="mt-5 text-sm">
              <div className="font-semibold">{r.n}</div>
              <div className="text-muted-foreground">{r.l}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-[2rem] p-10 lg:p-16 text-primary-foreground" style={{ background: "var(--gradient-warm)" }}>
        <div className="relative max-w-2xl">
          <Wrench className="h-8 w-8 opacity-90" />
          <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight">
            Need help today? We're already on our way.
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Same-day appointments and 24/7 emergency service across Southlake, Westlake, Keller, and Grapevine.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:+18175550100" className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 text-sm font-semibold shadow-md hover:translate-y-[-1px] transition">
              <Phone className="h-4 w-4" /> (817) 555-0100
            </a>
            <a href="mailto:hello@southlakehvac.com" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold hover:bg-primary-foreground/10 transition">
              Email the family
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="h-7 w-7 rounded-full grid place-items-center text-primary-foreground" style={{ background: "var(--gradient-warm)" }}>
            <Heart className="h-3 w-3" fill="currentColor" />
          </span>
          <span>© {new Date().getFullYear()} Southlake HVAC and Plumbing — Family-owned in Texas.</span>
        </div>
        <div className="flex gap-6">
          <a href="#services" className="hover:text-foreground">Services</a>
          <a href="#family" className="hover:text-foreground">Our Family</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </div>
      </div>
    </footer>
  );
}
