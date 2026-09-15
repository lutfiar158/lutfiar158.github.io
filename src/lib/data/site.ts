import type { IconName } from '$lib/components/icons';

export type Social = {
	label: string;
	href: string;
	icon: IconName;
};

export type Project = {
	title: string;
	description: string;
	tags: string[];
	href: string;
	source: string;
	accent: string;
};

export type TimelineItem = {
	period: string;
	title: string;
	org: string;
	description: string;
};

export type Site = {
	name: string;
	firstName: string;
	role: string;
	location: string;
	available: boolean;
	tagline: string;
	email: string;
	resumeUrl: string;
	nav: { label: string; href: string }[];
	socials: Social[];
};

export const site: Site = {
	name: "Lutfiar Rahman Ma'arif",
	firstName: 'Lutfi',
	role: 'Mahasiswa Sistem Informasi',
	location: 'Majalengka, Indonesia',
	available: true,
	tagline:
		'I craft fast, accessible, and beautiful web apps — turning ideas into clean, scalable products.',
	email: 'lutfirahman248@gmail.com',
	resumeUrl: '/resume.pdf',
	nav: [
		{ label: 'Home', href: '#home' },
		{ label: 'About', href: '#about' },
		{ label: 'Projects', href: '#projects' },
		{ label: 'Resume', href: '#resume' },
		{ label: 'Contact', href: '#contact' }
	],
	socials: [
		{ label: 'GitHub', href: 'https://github.com/', icon: 'github' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
		{ label: 'X (Twitter)', href: 'https://x.com/', icon: 'twitter' },
		{ label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' }
	]
};

export const about = {
	highlights: [
		{ value: '4+', label: 'Years Experience' },
		{ value: '25+', label: 'Projects Delivered' },
		{ value: '12+', label: 'Happy Clients' }
	],
	paragraphs: [
		"Saya adalah seorang Mahasiswa baru Sistem Informasi di Universitas Negeri Semarang. sekaligus seorang Web Developer.",
		"Saya fokus pada penulisan kode yang bersih dan mudah dipelihara serta menciptakan pengalaman pengguna yang nyaman dan mudah diakses. Saya masih terus belajar dan ingin mengembangkan kemampuan saya."
	]
};

export const skills = [
	{
		category: 'Frontend',
		items: ['React', 'TypeScript', 'Tailwind CSS', 'HTML & CSS']
	},
	{
		category: 'Backend',
		items: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'REST APIs']
	},
	{
		category: 'Tools & Others',
		items: ['Git', 'Docker', 'Vite']
	}
];

export const projects: Project[] = [
	{
		title: 'SkyCommerce',
		description:
			'A full-featured e-commerce platform with cart, payments, and a powerful admin dashboard.',
		tags: ['SvelteKit', 'PostgreSQL', 'Prisma', 'Stripe'],
		href: 'https://example.com',
		source: 'https://github.com/',
		accent: 'from-sky-400 to-blue-600'
	},
	{
		title: 'TaskFlow',
		description:
			'A collaborative kanban board with real-time updates, drag-and-drop, and team workspaces.',
		tags: ['React', 'Node.js', 'Socket.io', 'Redis'],
		href: 'https://example.com',
		source: 'https://github.com/',
		accent: 'from-cyan-400 to-sky-600'
	},
	{
		title: 'Weatherly',
		description:
			'A minimal weather app with geolocation, 7-day forecasts, and beautiful data visualization.',
		tags: ['Svelte', 'OpenWeather API', 'Chart.js'],
		href: 'https://example.com',
		source: 'https://github.com/',
		accent: 'from-blue-400 to-indigo-500'
	},
	{
		title: 'DevBlog',
		description:
			'A blazing-fast markdown blog with full-text search, syntax highlighting, and RSS.',
		tags: ['SvelteKit', 'MDSveX', 'Tailwind CSS'],
		href: 'https://example.com',
		source: 'https://github.com/',
		accent: 'from-sky-500 to-cyan-400'
	},
	{
		title: 'FitTrack',
		description:
			'A fitness tracking dashboard that visualizes workouts, streaks, and personal records.',
		tags: ['React', 'D3.js', 'Supabase'],
		href: 'https://example.com',
		source: 'https://github.com/',
		accent: 'from-cyan-500 to-teal-400'
	},
	{
		title: 'SnipVault',
		description:
			'A keyboard-first code snippet manager with tags, favorites, and instant search.',
		tags: ['Svelte', 'IndexedDB', 'PWA'],
		href: 'https://example.com',
		source: 'https://github.com/',
		accent: 'from-blue-500 to-sky-400'
	}
];

export const experience: TimelineItem[] = [
	{
		period: '2023 — Present',
		title: 'Senior Full-Stack Developer',
		org: 'TechNova',
		description:
			'Leading a team building a SaaS analytics platform used by 50k+ users. Own the architecture and release process.'
	},
	{
		period: '2021 — 2023',
		title: 'Frontend Developer',
		org: 'PixelWorks Studio',
		description:
			'Built responsive, accessible interfaces for client projects across e-commerce, fintech, and media.'
	},
	{
		period: '2019 — 2021',
		title: 'Junior Web Developer',
		org: 'Startup Hub',
		description:
			'Shipped MVPs and maintained production web apps with React and Node.js.'
	}
];

export const education: TimelineItem[] = [
	{
		period: '2026 - Present',
		title: 'Mahasiswa Sistem Informasi',
		org: 'Universitas Negeri Semarang',
		description:
			'Mahasiswa baru Sistem Informasi di Universitas Negeri Semarang. Saya masih terus belajar dan ingin mengembangkan kemampuan saya.'
	},
	{
		period: '2022 - 2025',
		title: 'Alumni SMK Negeri 1 Kadipaten',
		org: 'SMK Negeri 1 Kadipaten',
		description:
			'Menyelesaikan pendidikan di SMK Negeri 1 Kadipaten dengan jurusan Rekayasa Perangkat Lunak. Saya belajar tentang pengembangan perangkat lunak dan pemrograman.'
	}
];
