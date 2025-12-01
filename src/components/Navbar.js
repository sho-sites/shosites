"use client";

import Link from "next/link";
import Container from "@/components/Container";
import { usePathname } from "next/navigation";

const links = [
	{ href: "/", label: "Home" },
	{ href: "/work", label: "Work" },
	{ href: "/process", label: "Process" },
	{ href: "/faq", label: "FAQ" },
	{ href: "/start", label: "Start" },
];

export default function Navbar() {
	const pathname = usePathname();
	return (
		<header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40">
			<Container className="flex h-16 items-center justify-between">
				<Link href="/" className="font-semibold tracking-tight">
					<span className="text-[--color-accent]">sho</span> sites
				</Link>
				<nav className="hidden gap-6 text-sm sm:flex">
					{links.map((l) => {
						const active = pathname === l.href;
						return (
							<Link
								key={l.href}
								href={l.href}
								className={`transition-colors ${
									active ? "text-white" : "text-white/70 hover:text-white"
								}`}
							>
								{l.label}
							</Link>
						);
					})}
				</nav>
				<Link
					href="/start"
					className="hidden rounded-full bg-[--color-accent] px-4 py-2 text-sm font-medium text-black transition hover:opacity-90 sm:inline-flex"
				>
					Start a project
				</Link>
			</Container>
		</header>
	);
}


