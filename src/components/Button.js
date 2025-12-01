export default function Button({ as: As = "a", href = "#", children, className = "", ...props }) {
	const base =
		"inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[--color-accent] ring-offset-black";
	const styles = `bg-[--color-foreground] text-[--color-background] hover:opacity-90 ${className}`;
	return (
		<As href={href} className={`${base} ${styles}`} {...props}>
			{children}
		</As>
	);
}


