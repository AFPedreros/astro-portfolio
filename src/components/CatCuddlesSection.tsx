import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { BrainSection } from './BrainSection';

export const CatCuddlesSection = () => (
	<BrainSection className="rounded-2xl bg-gradient-to-br from-pink-300/75 via-rose-400/75 to-purple-400/75 text-white backdrop-blur-md">
		<div className="mx-auto max-w-4xl space-y-8 text-center">
			<motion.div
				animate={{
					rotate: [0, 10, -10, 0],
					scale: [1, 1.1, 1]
				}}
				transition={{
					duration: 2,
					repeat: Number.POSITIVE_INFINITY,
					ease: 'easeInOut'
				}}
				className="text-8xl"
			>
				<Heart className="mx-auto h-24 w-24 text-pink-200" />
			</motion.div>
			<motion.h2 className="text-5xl font-black md:text-7xl" whileHover={{ scale: 1.05 }}>
				10:30 AM
			</motion.h2>
			<motion.div
				className="relative overflow-hidden rounded-3xl border border-white/30 bg-white/20 p-8 backdrop-blur-sm"
				whileHover={{ scale: 1.02 }}
			>
				<motion.div
					className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20"
					animate={{ x: ['-100%', '100%'] }}
					transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
				/>
				<div className="relative z-10">
					<div className="mb-4 text-6xl">🐱</div>
					<h3 className="mb-4 text-3xl font-bold md:text-4xl">"Cuddling with my cats"</h3>
					<p className="text-xl opacity-90">
						Brain.exe has stopped working. Pure serotonin mode activated.
					</p>
					<motion.div
						className="mt-4 flex justify-center space-x-2"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.5 }}
					>
						{['😻', '💕', '🥰', '😴'].map((emoji, i) => (
							<motion.span
								key={i}
								className="text-3xl"
								animate={{
									y: [0, -10, 0],
									rotate: [0, 10, -10, 0]
								}}
								transition={{
									duration: 1.5,
									delay: i * 0.2,
									repeat: Number.POSITIVE_INFINITY
								}}
							>
								{emoji}
							</motion.span>
						))}
					</motion.div>
				</div>
			</motion.div>
		</div>
	</BrainSection>
);
