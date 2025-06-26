import { motion } from 'motion/react';

export const PulsingBrain = () => (
	<motion.div
		animate={{
			scale: [1, 1.1, 1],
			rotate: [0, 5, -5, 0]
		}}
		transition={{
			duration: 2,
			repeat: Number.POSITIVE_INFINITY,
			ease: 'easeInOut'
		}}
		className="text-8xl md:text-9xl"
	>
		🧠
	</motion.div>
);
