import Container from "@/components/Container";
import Card from "@/components/Card";
import MotionFade from "@/components/MotionFade";

export const metadata = {
  title: "FAQ — sho sites",
  description:
    "Answers about cost, updates, scope, and the tech stack behind sho sites.",
};

const faqs = [
  {
    q: "How much does it cost?",
    a: "I build for completely free for community orgs, school clubs, and businesses. You will only pay for the domain, about $10/year.",
  },
  {
    q: "How do updates work?",
    a: "Sites are designed so common updates—text, links, and images—are easy. I can set up a simple update flow and a quick guide.",
  },
  {
    q: "What kinds of sites do you build?",
    a: "Mostly front‑end, informational “brochure” sites that showcase who you are, what you do, where you’re located, and how to get in touch.",
  },
  {
    q: "What’s not a fit?",
    a: "I don’t build online stores, payment systems, or complex apps needing frequent heavy updates.",
  },
  {
    q: "What tech do you use?",
    a: "Next.js and Tailwind for the front end; deployed on Vercel. I use AI tools to accelerate drafts/components and then refine by hand.",
  },
];

export default function FAQPage() {
  return (
    <main>
      <section>
        <Container className="py-16">
          <MotionFade inView={false}>
            <h1 className="text-3xl font-semibold tracking-tight">FAQ</h1>
          </MotionFade>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {faqs.map((f, i) => (
              <MotionFade key={f.q} delay={i * 0.04} inView={false}>
                <Card>
                  <p className="text-sm font-semibold">{f.q}</p>
                  <p className="mt-2 text-sm text-white/70">{f.a}</p>
                </Card>
              </MotionFade>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
