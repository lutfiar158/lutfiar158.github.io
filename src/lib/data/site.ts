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
	demo?: string;
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
	nav: { label: string; href: string }[];
	socials: Social[];
};

export const site: Site = {
	name: 'Lutfiar Rahman Maarif',
	firstName: 'Lutfi',
	role: 'Aspiring Full-Stack Developer',
	location: 'Indonesia',
	available: false,
	tagline:
		'I build responsive web interfaces and am expanding into backend development, databases, and testing through practical projects.',
	email: 'lutfirahman248@gmail.com',
	nav: [
		{ label: 'Home', href: '#home' },
		{ label: 'About', href: '#about' },
		{ label: 'Projects', href: '#projects' },
		{ label: 'Journey', href: '#resume' },
		{ label: 'Contact', href: '#contact' }
	],
	socials: [{ label: 'GitHub', href: 'https://github.com/lutfiar158', icon: 'github' }]
};

export const about = {
	highlights: [
		{ value: '2026', label: 'Started university' },
		{ value: 'Web', label: 'Current focus' },
		{ value: 'Full-stack', label: 'Learning goal' }
	],
	paragraphs: [
		'Saya mahasiswa Sistem Informasi di Universitas Negeri Semarang yang sedang membangun kemampuan pengembangan web lewat proyek nyata.',
		'Saat ini saya fokus pada frontend dengan SvelteKit, TypeScript, dan Tailwind CSS. Target berikutnya adalah memperdalam backend, database relasional, autentikasi yang aman, dan automated testing—sambil mendokumentasikan proses serta keputusan teknis di tiap proyek.'
	]
};

export const skills = [
	{
		category: 'Currently Using',
		items: ['SvelteKit', 'Svelte', 'TypeScript', 'Tailwind CSS', 'HTML & CSS']
	},
	{
		category: 'Development Tools',
		items: ['Git', 'GitHub', 'Vite']
	},
	{
		category: 'Next Learning Focus',
		items: ['SQL', 'PostgreSQL', 'Server-side validation', 'Automated testing']
	}
];

export const projects: Project[] = [
	{
		title: 'Personal Portfolio Website',
		description:
			'A responsive portfolio website built with SvelteKit, TypeScript, and Tailwind CSS to present my profile, projects, education, and contact information.',
		tags: ['SvelteKit', 'Svelte 5', 'TypeScript', 'Tailwind CSS'],
		demo: 'https://lutfiar.me',
		source: 'https://github.com/lutfiar158/lutfiar158.github.io',
		accent: 'from-sky-400 to-blue-600'
	},
	{
		title: 'Team Portfolio & Landing Page',
		description:
			'A collaborative single-page portfolio built with semantic HTML and Tailwind CSS CLI, featuring team profiles, service information, and contact links.',
		tags: ['HTML5', 'Tailwind CSS CLI', 'Responsive UI'],
		source: 'https://github.com/lutfiar158/landing-page-kelompok1',
		accent: 'from-cyan-400 to-teal-600'
	}
];

export const experience: TimelineItem[] = [
	{
		period: '2026 — Present',
		title: 'Personal Portfolio Website',
		org: 'Personal Project',
		description:
			'Building and documenting a responsive portfolio with SvelteKit and TypeScript. Improving code organization, documentation, accessibility, and deployment quality.'
	},
	{
		period: '2026',
		title: 'Team Portfolio & Landing Page',
		org: 'Collaborative Project',
		description:
			'Contributed to a single-page portfolio project using semantic HTML and Tailwind CSS CLI, with an emphasis on layout, responsive styling, and clear project documentation.'
	}
];

export const education: TimelineItem[] = [
	{
		period: '2026 — Present',
		title: 'Information Systems',
		org: 'Universitas Negeri Semarang',
		description:
			'Studying Information Systems while building practical web development skills through personal and collaborative projects.'
	},
	{
		period: '2022 — 2025',
		title: 'Software Engineering',
		org: 'SMK Negeri 1 Kadipaten',
		description:
			'Completed vocational education in Software Engineering, with an interest in programming and software development.'
	}
];
