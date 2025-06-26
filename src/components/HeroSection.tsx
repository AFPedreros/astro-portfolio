import { motion, useTransform } from 'motion/react';
import { BrainSection } from './BrainSection';
import { PulsingBrain } from './PulsingBrain';

export const HeroSection = () => (
	<BrainSection className="relative rounded-2xl bg-gradient-to-br from-indigo-500/75 via-purple-500/75 to-pink-500/75 text-white backdrop-blur-md">
		<div className="relative z-10 space-y-8 text-center">
			<motion.div className="space-y-4">
				<PulsingBrain />
				<motion.h1
					className="text-6xl font-black tracking-tight md:text-8xl"
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, delay: 0.5 }}
				>
					A Day in My
				</motion.h1>
				<motion.h2
					className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-7xl font-black text-transparent md:text-9xl"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 1 }}
				>
					BRAIN
				</motion.h2>
			</motion.div>
			<motion.p
				className="text-xl font-medium opacity-90 md:text-2xl"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5 }}
			>
				A chaotic journey through my daily thoughts
			</motion.p>
		</div>
	</BrainSection>
);
