import { motion } from 'motion/react';
import { Moon } from 'lucide-react';
import { BrainSection } from './BrainSection';

export const NightSection = () => (
	<BrainSection className="rounded-2xl bg-gradient-to-br from-indigo-900/75 via-purple-900/75 to-black/75 text-white backdrop-blur-md">
		<div className="mx-auto max-w-4xl space-y-8 text-center">
			<motion.div
				animate={{
					opacity: [1, 0.3, 1],
					scale: [1, 0.95, 1]
				}}
				transition={{
					duration: 3,
					repeat: Number.POSITIVE_INFINITY,
					ease: 'easeInOut'
				}}
				className="text-8xl"
			>
				<Moon className="mx-auto h-24 w-24 text-blue-200" />
			</motion.div>
			<motion.h2 className="text-5xl font-black md:text-7xl" whileHover={{ scale: 1.05 }}>
				11:00 PM
			</motion.h2>
			<motion.div
				className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm"
				whileHover={{ scale: 1.02 }}
			>
				<motion.div
					className="mb-4 text-6xl"
					animate={{
						rotate: [0, -10, 10, 0],
						scale: [1, 0.9, 1]
					}}
					transition={{
						duration: 4,
						repeat: Number.POSITIVE_INFINITY,
						ease: 'easeInOut'
					}}
				>
					😴
				</motion.div>
				<h3 className="mb-4 text-3xl font-bold md:text-4xl">"Brain.exe shutting down..."</h3>
				<motion.div
					className="space-y-2 font-mono text-lg"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ staggerChildren: 0.5 }}
				>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.5 }}
					>
						{'>'} Saving random thoughts... ✓
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 1 }}
					>
						{'>'} Clearing browser tabs... ✓
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 1.5 }}
					>
						{'>'} Preparing tomorrow's chaos... ✓
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 2 }}
						className="text-green-400"
					>
						{'>'} Sleep mode activated 💤
					</motion.div>
				</motion.div>
			</motion.div>

			<motion.p
				className="mt-8 text-xl opacity-70"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 0.7 }}
				transition={{ delay: 2.5 }}
			>
				Tomorrow: Repeat with 47% more chaos
			</motion.p>
		</div>
	</BrainSection>
);
