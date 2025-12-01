"use client";

import { motion } from "framer-motion";

export default function MotionFade({ children, delay = 0, inView = true }) {
	const common = {
		transition: { duration: 0.5, ease: "easeOut", delay },
	};
	if (inView) {
		return (
			<motion.div
				initial={{ opacity: 0, y: 8 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "0px 0px -10% 0px" }}
				{...common}
			>
				{children}
			</motion.div>
		);
	}
	return (
		<motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} {...common}>
			{children}
		</motion.div>
	);
}


