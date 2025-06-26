import { motion } from 'motion/react';
import { ChefHat } from 'lucide-react';
import { BrainSection } from './BrainSection';

export const AvocadoToastSection = () => (
	<BrainSection className="via-emerald-500/57 rounded-2xl bg-gradient-to-br from-green-400/75 to-teal-600/75 text-white backdrop-blur-md">
		<div className="mx-auto max-w-4xl space-y-8 text-center">
			<motion.div
				animate={{
					rotate: [0, 5, -5, 0],
					scale: [1, 1.05, 1]
				}}
				transition={{
					duration: 2,
					repeat: Number.POSITIVE_INFINITY,
					ease: 'easeInOut'
				}}
				className="text-8xl"
			>
				<ChefHat className="mx-auto h-24 w-24 text-green-200" />
			</motion.div>
			<motion.h2 className="text-5xl font-black md:text-7xl" whileHover={{ scale: 1.05 }}>
				6:00 PM
			</motion.h2>
			<motion.div
				className="rounded-3xl border border-white/30 bg-white/20 p-8 backdrop-blur-sm"
				whileHover={{ scale: 1.02 }}
			>
				<div className="mb-4 text-6xl">🥑</div>
				<h3 className="mb-4 text-3xl font-bold md:text-4xl">"Making the perfect avocado toast"</h3>
				<motion.div
					className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ staggerChildren: 0.2 }}
				>
					{[
						{ step: '1', text: 'Find the perfect avocado', emoji: '🥑' },
						{ step: '2', text: 'Toast bread to golden perfection', emoji: '🍞' },
						{ step: '3', text: 'Add mysterious seasoning', emoji: '✨' }
					].map((item, i) => (
						<motion.div
							key={i}
							className="rounded-lg bg-white/10 p-4"
							initial={{ y: 20, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ delay: i * 0.2 }}
							whileHover={{ scale: 1.05, rotate: 2 }}
						>
							<div className="mb-2 text-3xl">{item.emoji}</div>
							<div className="text-lg font-bold">Step {item.step}</div>
							<div className="text-sm opacity-90">{item.text}</div>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</div>
	</BrainSection>
);
