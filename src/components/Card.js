export default function Card({ children, className = "" }) {
	return (
		<div
			className={`rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur-sm transition hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12)_inset] ${className}`}
		>
			{children}
		</div>
	);
}


