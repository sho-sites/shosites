import Container from "@/components/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 py-10 text-sm text-white/60">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p>© {new Date().getFullYear()} sho sites</p>
        <p>
          sho sites is fiscally sponsored by The Hack Foundation (d.b.a. Hack
          Club), a 501(c)(3) nonprofit (EIN: 81-2908499).
        </p>

        <nav className="flex gap-6">
          <Link href="/work" className="hover:text-white">
            Work
          </Link>
          <Link href="/process" className="hover:text-white">
            Process
          </Link>
          <Link href="/faq" className="hover:text-white">
            FAQ
          </Link>
          <Link href="/start" className="hover:text-white">
            Start
          </Link>
          <Link href="/about-me" className="hover:text-white">
            About Me
          </Link>
        </nav>
      </Container>
    </footer>
  );
}
