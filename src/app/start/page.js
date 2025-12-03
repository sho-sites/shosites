"use client";

import Container from "@/components/Container";
import Card from "@/components/Card";
import MotionFade from "@/components/MotionFade";
import { useState } from "react";

export default function StartPage() {
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [email, setEmail] = useState("");
  const [goals, setGoals] = useState("");
  const [timeline, setTimeline] = useState("");

  return (
    <main>
      <section>
        <Container className="py-16">
          <MotionFade inView={false}>
            <h1 className="text-3xl font-semibold tracking-tight">
              Start a project
            </h1>
            <p className="mt-2 max-w-2xl text-white/70">
              Share a few details—I'll reply with a checklist and quick next
              steps.
            </p>
          </MotionFade>
          <MotionFade delay={0.05} inView={false}>
            <Card className="mt-8">
              <form
                action="https://formspree.io/f/xpwarqdd"
                method="POST"
                className="grid gap-5"
              >
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-11 rounded-lg border border-white/10 bg-black/30 px-3 outline-none ring-[--color-accent] placeholder:text-white/40 focus:ring-2"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="org" className="text-sm">
                    Organization
                  </label>
                  <input
                    id="org"
                    name="org"
                    type="text"
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                    className="h-11 rounded-lg border border-white/10 bg-black/30 px-3 outline-none ring-[--color-accent] placeholder:text-white/40 focus:ring-2"
                    placeholder="Org/club/business"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-11 rounded-lg border border-white/10 bg-black/30 px-3 outline-none ring-[--color-accent] placeholder:text-white/40 focus:ring-2"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="goals" className="text-sm">
                    What do you need the site to do?
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    required
                    value={goals}
                    onChange={(e) => setGoals(e.target.value)}
                    rows={5}
                    className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 outline-none ring-[--color-accent] placeholder:text-white/40 focus:ring-2"
                    placeholder="A few bullets are great—pages/sections, examples you like, etc."
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="timeline" className="text-sm">
                    Timeline
                  </label>
                  <input
                    id="timeline"
                    name="timeline"
                    type="text"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="h-11 rounded-lg border border-white/10 bg-black/30 px-3 outline-none ring-[--color-accent] placeholder:text-white/40 focus:ring-2"
                    placeholder="E.g., launch in ~2 weeks"
                  />
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex h-11 items-center justify-center rounded-full bg-[--color-foreground] px-5 text-sm font-medium text-[--color-background] transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[--color-accent] ring-offset-black"
                  >
                    Send
                  </button>
                </div>
              </form>
              <p className="mt-4 text-sm text-white/60">
                Prefer email? Write to{" "}
                <a
                  href="mailto:shourya.batra@gmail.com"
                  className="text-[--color-accent]"
                >
                  shourya.batra@gmail.com
                </a>
                .
              </p>
            </Card>
          </MotionFade>
        </Container>
      </section>
    </main>
  );
}
