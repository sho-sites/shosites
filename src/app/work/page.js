import Container from "@/components/Container";
import Card from "@/components/Card";
import MotionFade from "@/components/MotionFade";

export const metadata = {
  title: "Work — sho sites",
  description:
    "Selected projects including Homestead CS Club, L.I.F.T., and a dark portfolio.",
};

export default function WorkPage() {
  return (
    <main>
      <section>
        <Container className="py-16">
          <MotionFade inView={false}>
            <h1 className="text-3xl font-semibold tracking-tight">Work</h1>
            <p className="mt-2 max-w-2xl text-white/70">
              A few examples of fast, clean brochure sites. Each project focuses
              on clearly communicating what the organization does and how to
              reach them.
            </p>
          </MotionFade>
          <MotionFade delay={0.05} inView={false}>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <h3 className="text-lg font-semibold">Homestead CS Club</h3>
                <p className="mt-2 text-sm text-white/70">
                  Simple club site with sections for About, News, and
                  Challenges.
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
                  Bold hero, clear offerings, partner logo cloud layout.
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
                  Dark theme portfolio with project tiles and
                  micro‑interactions.
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
    </main>
  );
}
