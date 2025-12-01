"use client";

import Link from "next/link";
import Container from "@/components/Container";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
	{ href: "/", label: "Home" },
	{ href: "/work", label: "Work" },
	{ href: "/process", label: "Process" },
	{ href: "/faq", label: "FAQ" },
	{ href: "/start", label: "Start" },
	{ href: "/about-me", label: "About Me" },
];

export default function Navbar() {
	const pathname = usePathname();
	const [mobileOpen, setMobileOpen] = useState(false);

	function closeMobile() {
		setMobileOpen(false);
	}

	function handleToggle() {
		setMobileOpen((v) => !v);
	}

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
				<button
					type="button"
					className="inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-accent] sm:hidden"
					aria-controls="mobile-menu"
					aria-expanded={mobileOpen ? "true" : "false"}
					onClick={handleToggle}
					title={mobileOpen ? "Close menu" : "Open menu"}
				>
					<span className="sr-only">Toggle navigation</span>
					{mobileOpen ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="h-6 w-6"
							aria-hidden="true"
						>
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="h-6 w-6"
							aria-hidden="true"
						>
							<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
						</svg>
					)}
				</button>
			</Container>
			{/* Mobile menu overlay & sheet */}
			<div
				className={`sm:hidden ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}
				aria-hidden={mobileOpen ? "false" : "true"}
			>
				{/* Backdrop */}
				<div
					onClick={closeMobile}
					className={`fixed inset-0 z-40 bg-black/50 transition-opacity ${mobileOpen ? "opacity-100" : "opacity-0"}`}
				/>
				{/* Sheet */}
				<div
					id="mobile-menu"
					className={`fixed z-50 top-16 inset-x-0 origin-top rounded-b-xl border-t border-white/10 bg-black/95 backdrop-blur transition-transform transition-opacity duration-200 ${
						mobileOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-95"
					}`}
				>
					<nav className="flex flex-col gap-2 px-4 py-4">
						{links.map((l) => {
							const active = pathname === l.href;
							return (
								<Link
									key={l.href}
									href={l.href}
									onClick={closeMobile}
									className={`rounded-md px-3 py-2 text-base transition ${
										active ? "text-white bg-white/10" : "text-white/80 hover:text-white hover:bg-white/10"
									}`}
								>
									{l.label}
								</Link>
							);
						})}
						<Link
							href="/start"
							onClick={closeMobile}
							className="mt-2 inline-flex items-center justify-center rounded-full bg-[--color-accent] px-4 py-2 text-sm font-medium text-black transition hover:opacity-90"
						>
							Start a project
						</Link>
					</nav>
				</div>
			</div>
		</header>
	);
}


