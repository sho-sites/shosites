import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Card from "@/components/Card";
import MotionFade from "@/components/MotionFade";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(600px_300px_at_50%_-50%,rgba(34,211,238,0.15),transparent)]" />
        <Container className="py-20 sm:py-28">
          <MotionFade inView={false}>
            <div className="max-w-3xl">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Websites for orgs, clubs, and businesses, for completely free.
              </h1>
              <p className="mt-5 text-lg text-white/70">
                I build clean, fast, themed brochure sites that make it easy to
                understand who you are, what you do, where to find you, and how
                to get in touch.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/start">Start a project</Button>
                <Button
                  href="/work"
                  className="bg-white/10 text-white hover:bg-white/15"
                >
                  View work
                </Button>
              </div>
            </div>
          </MotionFade>
        </Container>
      </section>

      {/* Who it's for */}
      <section>
        <Container className="py-10">
          <MotionFade inView={false}>
            <div className="flex flex-wrap gap-2 text-sm text-white/80">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Businesses
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Nonprofits
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                School clubs
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Community groups
              </span>
            </div>
          </MotionFade>
        </Container>
      </section>

      {/* Selected work */}
      <section>
        <Container className="py-16">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-2xl font-semibold">Selected work</h2>
            <Link href="/work" className="text-sm text-[--color-accent]">
              Browse all →
            </Link>
          </div>
          <MotionFade>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <h3 className="text-lg font-semibold">Homestead CS Club</h3>
                <p className="mt-2 text-sm text-white/70">
                  Clean club site with sections for About, News, and weekly
                  Challenges inspired by their structure.
                </p>
                <a
                  href="https://www.hhscs.club/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block text-sm text-[--color-accent]"
                >
                  hhscs.club ↗
                </a>
              </Card>
              <Card>
                <h3 className="text-lg font-semibold">L.I.F.T.</h3>
                <p className="mt-2 text-sm text-white/70">
                  Bold hero with clear offerings and partner visuals.
                </p>
                <a
                  href="https://www.lift-co.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block text-sm text-[--color-accent]"
                >
                  lift-co.org ↗
                </a>
              </Card>
              <Card>
                <h3 className="text-lg font-semibold">Personal Site</h3>
                <p className="mt-2 text-sm text-white/70">
                  Dark aesthetic portfolio with smooth micro‑interactions.
                </p>
                <a
                  href="https://www.shouryabatra.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block text-sm text-[--color-accent]"
                >
                  shouryabatra.com ↗
                </a>
              </Card>
            </div>
          </MotionFade>
        </Container>
      </section>

      {/* How it works */}
      <section className="bg-white/2">
        <Container className="py-16">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <MotionFade>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <p className="text-sm font-semibold">1. Plan</p>
                <p className="mt-2 text-sm text-white/70">
                  Quick chat, goals, examples, and content checklist.
                </p>
              </Card>
              <Card>
                <p className="text-sm font-semibold">2. Design</p>
                <p className="mt-2 text-sm text-white/70">
                  You give your preferences, or I can design everything for you!
                </p>
              </Card>
              <Card>
                <p className="text-sm font-semibold">3. Build</p>
                <p className="mt-2 text-sm text-white/70">
                  Fast, mobile‑first Next.js build and setup.
                </p>
              </Card>
              <Card>
                <p className="text-sm font-semibold">4. Ship</p>
                <p className="mt-2 text-sm text-white/70">
                  Launch on your domain with a simple hand‑off guide.
                </p>
              </Card>
            </div>
          </MotionFade>
        </Container>
      </section>

      {/* Scope note */}
      <section>
        <Container className="py-16">
          <MotionFade>
            <Card className="bg-white/2">
              <h3 className="text-lg font-semibold">Project scope</h3>
              <p className="mt-2 text-sm text-white/70">
                My focus is on front‑end, informational sites that clearly
                present your story — services, location, hours, and ways to
                connect. If you’re looking for online stores, payments, or
                complex apps with frequent heavy updates, I’m not the best fit.
              </p>
            </Card>
          </MotionFade>
        </Container>
      </section>

      {/* AI transparency */}
      <section className="bg-white/2">
        <Container className="py-16">
          <MotionFade>
            <Card>
              <h3 className="text-lg font-semibold">
                Fast with AI, finished by hand
              </h3>
              <p className="mt-2 text-sm text-white/70">
                I use AI tools to accelerate drafts and components, then refine
                everything by hand to fit your brand and audience. Faster
                delivery and lower cost, without sacrificing clarity or quality.
              </p>
            </Card>
          </MotionFade>
        </Container>
      </section>

      {/* CTA */}
      <section>
        <Container className="py-16 text-center">
          <MotionFade>
            <h2 className="text-2xl font-semibold">Ready to get started?</h2>
            <p className="mt-2 text-white/70">
              Typical timeline: about 1–2 weeks, depending on content readiness.
            </p>
            <div className="mt-6 flex justify-center">
              <Button href="/start">Start a project</Button>
            </div>
          </MotionFade>
        </Container>
      </section>
    </main>
  );
}
