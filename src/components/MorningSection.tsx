import { motion } from 'motion/react';
import { Sun } from 'lucide-react';
import { BrainSection } from './BrainSection';

export const MorningSection = () => (
	<BrainSection className="rounded-2xl bg-gradient-to-br from-yellow-300/75 via-orange-400/75 to-red-400/75 text-gray-900 backdrop-blur-md">
		<div className="mx-auto max-w-4xl space-y-8 text-center">
			<motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }} className="text-8xl">
				<Sun className="mx-auto h-24 w-24 text-yellow-700" />
			</motion.div>
			<motion.h2 className="text-5xl font-black md:text-7xl" whileHover={{ scale: 1.05 }}>
				7:00 AM
			</motion.h2>
			<motion.div
				className="rounded-3xl border border-white/30 bg-white/20 p-8 backdrop-blur-sm"
				whileHover={{ scale: 1.02, rotate: 1 }}
				transition={{ type: 'spring', stiffness: 300 }}
			>
				<div className="mb-4 text-6xl">🧠</div>
				<h3 className="mb-4 text-3xl font-bold md:text-4xl">
					"Thinking about CSS tricks no one asked for"
				</h3>
				<motion.div
					className="rounded-lg bg-gray-900 p-4 font-mono text-lg text-green-400"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 0.5 }}
				>
					.brain {'{'}
					<br />
					&nbsp;&nbsp;overflow: hidden;
					<br />
					&nbsp;&nbsp;thoughts: infinite;
					<br />
					&nbsp;&nbsp;coffee-dependency: 100%;
					<br />
					{'}'}
				</motion.div>
			</motion.div>
		</div>
	</BrainSection>
);
