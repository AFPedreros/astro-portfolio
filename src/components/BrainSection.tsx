import type React from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface BrainSectionProps {
	children: React.ReactNode;
	className?: string;
	delay?: number;
}

export const BrainSection = ({ children, className = '', delay = 0 }: BrainSectionProps) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 100 }}
			animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
			transition={{ duration: 0.8, delay }}
			className={`flex min-h-screen items-center justify-center p-8 ${className}`}
		>
			{children}
		</motion.div>
	);
};
