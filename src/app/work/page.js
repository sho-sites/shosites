import Container from "@/components/Container";
import Card from "@/components/Card";
import MotionFade from "@/components/MotionFade";

export const metadata = {
  title: "Work — sho sites",
  description:
    "Selected projects including Homestead CS Club, L.I.F.T., and a dark portfolio.",
};

const works = [
  {
    title: "Homestead CS Club",
    description:
      "Simple club site with sections for About, News, and Challenges.",
    href: "https://www.hhscs.club/",
    label: "hhscs.club ↗",
  },
  {
    title: "L.I.F.T.",
    description: "Bold hero, clear offerings, partner logo cloud layout.",
    href: "https://www.lift-co.org/",
    label: "lift-co.org ↗",
  },
  {
    title: "Astrophysics Club",
    description:
      "Cosmic themed high school club website with all club information/socials.",
    href: "https://astrophysics-club.vercel.app/",
    label: "astrophysics-club.vercel.app ↗",
  },
  {
    title: "Personal Site",
    description:
      "Dark theme portfolio with project tiles and micro‑interactions.",
    href: "https://www.shouryabatra.com/",
    label: "shouryabatra.com ↗",
  },
  {
    title: "sho sites (this website!)",
    description: "Simple, clean, and fast website for my own business.",
    href: "https://shosites.vercel.app/",
    label: "shosites.vercel.app ↗",
  },
];

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
              {works.map((work) => (
                <Card key={work.title}>
                  <h3 className="text-lg font-semibold">{work.title}</h3>
                  <p className="mt-2 text-sm text-white/70">
                    {work.description}
                  </p>
                  <a
                    href={work.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-sm text-[--color-accent]"
                  >
                    {work.label}
                  </a>
                </Card>
              ))}
            </div>
          </MotionFade>
        </Container>
      </section>
    </main>
  );
}
