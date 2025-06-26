import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { HeroSection } from './HeroSection';
import { MorningSection } from './MorningSection';
import { CatCuddlesSection } from './CatCuddlesSection';
import { GamingDebateSection } from './GamingDebateSection';
import { AvocadoToastSection } from './AvocadoToastSection';
import { NightSection } from './NightSection';

export default function BrainDay() {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end end']
	});

	const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

	return (
		<div ref={containerRef} className="relative flex flex-col gap-y-10 overflow-hidden">
			{/* Animated Background */}
			<motion.div style={{ y: backgroundY }} className="fixed inset-0 -z-10 bg-primary" />

			{/* Hero Section */}
			<HeroSection />

			{/* Morning - CSS Tricks */}
			<MorningSection />

			{/* Mid-Morning - Cat Cuddles */}
			<CatCuddlesSection />

			{/* Afternoon - Gaming Debate */}
			<GamingDebateSection />

			{/* Evening - Avocado Toast */}
			<AvocadoToastSection />

			{/* Night - Brain Shutdown */}
			<NightSection />
		</div>
	);
}
