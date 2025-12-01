import Container from "@/components/Container";
import Card from "@/components/Card";
import MotionFade from "@/components/MotionFade";

export const metadata = {
  title: "About Me — sho sites",
  description:
    "Quick intro to Shourya and the vibe behind sho sites — fast, clean brochure websites.",
};

export default function AboutMePage() {
  return (
    <main>
      <section>
        <Container className="py-16">
          <MotionFade inView={false}>
            <h1 className="text-3xl font-semibold tracking-tight">About me</h1>
            <p className="mt-2 max-w-2xl text-white/70">
              Hey — I’m Shourya, a Sophomore at Homestead High School. I build
              fast, clean websites for clubs, nonprofits, and businesses. I keep
              things simple: clear content, slick design, and smooth
              micro‑interactions. Most projects take about 1–2 weeks once
              content is ready.
            </p>
          </MotionFade>

          <MotionFade delay={0.05} inView={false}>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card>
                <p className="text-sm font-semibold">What I enjoy</p>
                <p className="mt-2 text-sm text-white/70">
                  Web and mobile apps, LLM research, volleyball, and music.
                </p>
              </Card>
              <Card>
                <p className="text-sm font-semibold">Stack I like using</p>
                <p className="mt-2 text-sm text-white/70">
                  Next.js, React, Tailwind, Framer Motion, Vercel.
                </p>
              </Card>
            </div>
          </MotionFade>

          <MotionFade delay={0.1} inView={false}>
            <Card className="mt-8 bg-white/2">
              <p className="text-sm font-semibold">How I work</p>
              <p className="mt-2 text-sm text-white/70">
                I use AI tools to move quickly on drafts/components and then
                refine everything by hand to fit your brand. Sites are
                informational (brochure style) — who you are, what you do,
                location/hours, and ways to get in touch.
              </p>
            </Card>
          </MotionFade>
        </Container>
      </section>
    </main>
  );
}
