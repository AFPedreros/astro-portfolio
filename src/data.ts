export const experiences = [
	{
		companyName: 'Fox Ordering',
		companyUrl: 'https://foxordering.com/',
		timeRange: 'Jun 2024 - Present',
		jobTitle: 'Front End Developer',
		highlights: [
			'Lead and only front-end developer: made most technical decisions for the refactor of the in-house CRM from a React + Vite SPA to TanStack Start (TanStack Router, Query and Form) while shipping new modules on a Django backend.',
			'The CRM replaces third-party sales tools for 200+ users; the migration is underway, starting with a first group of 50.',
			'Launched 2 headless Shopify storefronts with Next.js and about 5 Astro marketing sites, including foxordering.com (EN/ES).',
			'Unit tests with Vitest, E2E tests with Cypress and Django backend contributions, using an AI-assisted workflow with Claude Code.'
		]
	},
	{
		companyName: 'Pixju',
		companyUrl: 'https://pixju.com/',
		timeRange: 'Mar 2024 - Jun 2024',
		jobTitle: 'Front End Developer',
		highlights: [
			'Built interactive Leaflet maps for an enterprise security-risk platform, with markers and geographic layers to visualize security data.',
			'Migrated about a quarter of the backend from JavaScript to TypeScript.'
		]
	},
	{
		companyName: 'Shambala',
		companyUrl: 'https://www.shambala.life/',
		timeRange: 'Sep 2023 - Mar 2024',
		jobTitle: 'Full Stack Developer',
		highlights: [
			"Built the company's main website and the front end of its learning platform (LMS) with Next.js 14.",
			'Turned the LMS into a more social platform with a NestJS backend and WebSockets for group chats and messaging, plus a forum.'
		]
	},
	{
		companyName: 'Partner',
		companyUrl: 'https://partnercomunicacion.co/',
		timeRange: 'Feb 2023 - Sep 2023',
		jobTitle: 'Front End Developer',
		highlights: [
			"Built Next.js apps to process invoices from a photo (OCR) and to create newsletter templates, and maintained the company's WordPress sites."
		]
	}
];

export const projects = [
	{
		name: 'PickleFox',
		url: 'https://pickle-fox.vercel.app/',
		description:
			'Platform for the pickleball community in Colombia: courts by city, players by level, partner search, matches and tournaments. Built almost entirely by me.',
		stack: ['Next.js', 'PostgreSQL', 'Neon']
	},
	{
		name: 'Ágape Medicina Estética',
		url: 'https://tienda.agapemedicinaestetica.com/',
		description:
			'Freelance project: online skincare store for an aesthetic medicine clinic in Spain, with a Next.js front end on headless WooCommerce.',
		stack: ['Next.js', 'WooCommerce', 'Headless']
	},
	{
		name: 'Fox Ordering',
		url: 'https://foxordering.com/',
		description:
			'Marketing site for an online ordering platform for restaurants, in English and Spanish.',
		stack: ['Astro', 'Tailwind CSS', 'i18n']
	}
];

export const skills = [
	{ category: 'Core', items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'SQL'] },
	{
		category: 'Front End',
		items: [
			'React',
			'Next.js',
			'TanStack Start',
			'TanStack Router',
			'TanStack Query',
			'TanStack Form',
			'Astro',
			'Vite',
			'Tailwind CSS'
		]
	},
	{
		category: 'Back End & Data',
		items: ['Node.js', 'NestJS', 'Django', 'PostgreSQL', 'Prisma', 'Drizzle']
	},
	{ category: 'E-commerce & CMS', items: ['Shopify', 'WooCommerce', 'WordPress', 'Payload'] },
	{ category: 'Testing & Tooling', items: ['Vitest', 'Cypress', 'Git', 'Vercel', 'Figma'] },
	{ category: 'AI Workflow', items: ['Claude Code', 'Custom agent skills'] }
];
