import Container from "@/components/Container";
import Card from "@/components/Card";
import MotionFade from "@/components/MotionFade";

export const metadata = {
  title: "Process — sho sites",
  description:
    "Simple and clear steps: plan, design, build, review, and launch — typically 1–2 weeks.",
};

const steps = [
  {
    title: "Plan",
    desc: "Short kickoff: goals, audience, examples, and content checklist.",
  },
  {
    title: "Design",
    desc: "Themed layout with your logo, colors, and tone.",
  },
  {
    title: "Build",
    desc: "Next.js, Tailwind, and accessible patterns. Mobile‑first.",
  },
  {
    title: "Review",
    desc: "We iterate together on copy, sections, and details.",
  },
  {
    title: "Launch",
    desc: "Connect the domain and share a short update guide.",
  },
];

export default function ProcessPage() {
  return (
    <main>
      <section>
        <Container className="py-16">
          <MotionFade inView={false}>
            <h1 className="text-3xl font-semibold tracking-tight">Process</h1>
            <p className="mt-2 max-w-2xl text-white/70">
              A collaborative, content‑first flow. Most projects take about 1–2
              weeks depending on content readiness.
            </p>
          </MotionFade>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <MotionFade key={s.title} delay={i * 0.05} inView={false}>
                <Card>
                  <p className="text-sm font-semibold">
                    {i + 1}. {s.title}
                  </p>
                  <p className="mt-2 text-sm text-white/70">{s.desc}</p>
                </Card>
              </MotionFade>
            ))}
          </div>
          <div className="mt-12">
            <MotionFade inView={false}>
              <Card className="bg-white/2">
                <h2 className="text-lg font-semibold">What I need from you</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/70">
                  <li>Logo file and brand color (if you have them)</li>
                  <li>
                    GeneralCore content (if you have): services/offerings,
                    about, contact info, location/hours. Totally fine if you
                    cannot give this, I can find it, or design things for you!
                  </li>
                  <li>Any links (socials, forms, documents)</li>
                  <li>
                    Examples you like (two or three is perfect), completely
                    optional.
                  </li>
                </ul>
              </Card>
            </MotionFade>
          </div>
        </Container>
      </section>
    </main>
  );
}
