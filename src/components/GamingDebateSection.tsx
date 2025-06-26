import { motion } from 'motion/react';
import { Gamepad2 } from 'lucide-react';
import { BrainSection } from './BrainSection';

export const GamingDebateSection = () => (
	<BrainSection className="rounded-2xl bg-gradient-to-br from-blue-400/75 via-indigo-500/75 to-purple-600/75 text-white backdrop-blur-md">
		<div className="mx-auto max-w-4xl space-y-8 text-center">
			<motion.div
				whileHover={{
					rotate: [0, -10, 10, -10, 10, 0],
					scale: 1.1
				}}
				transition={{ duration: 0.5 }}
				className="text-8xl"
			>
				<Gamepad2 className="mx-auto h-24 w-24 text-blue-200" />
			</motion.div>
			<motion.h2 className="text-5xl font-black md:text-7xl" whileHover={{ scale: 1.05 }}>
				2:00 PM
			</motion.h2>
			<motion.div
				className="rounded-3xl border border-white/30 bg-white/20 p-8 backdrop-blur-sm"
				whileHover={{ scale: 1.02, rotateY: 5 }}
				transition={{ type: 'spring', stiffness: 300 }}
			>
				<div className="mb-4 text-6xl">🎮</div>
				<h3 className="mb-4 text-3xl font-bold md:text-4xl">
					"Debating whether to start a new video game"
				</h3>
				<div className="space-y-4">
					<motion.div
						className="rounded-lg border-l-4 border-green-400 bg-green-500/30 p-4"
						initial={{ x: -50, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.2 }}
					>
						<strong>Pro:</strong> That new RPG looks amazing! 🗡️
					</motion.div>
					<motion.div
						className="rounded-lg border-l-4 border-red-400 bg-red-500/30 p-4"
						initial={{ x: 50, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.4 }}
					>
						<strong>Con:</strong> I have 47 unfinished games... 😅
					</motion.div>
					<motion.div
						className="text-2xl"
						animate={{ rotate: [0, 360] }}
						transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
					>
						🤔
					</motion.div>
				</div>
			</motion.div>
		</div>
	</BrainSection>
);
