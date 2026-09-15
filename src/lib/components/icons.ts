export type IconName =
	| 'github'
	| 'linkedin'
	| 'twitter'
	| 'instagram'
	| 'mail'
	| 'sun'
	| 'moon'
	| 'menu'
	| 'close'
	| 'arrow-right'
	| 'external-link'
	| 'download'
	| 'map-pin'
	| 'briefcase'
	| 'graduation'
	| 'sparkles'
	| 'code'
	| 'send';

type Icon = {
	fill: boolean;
	body: string;
};

export const icons = {
	github: {
		fill: true,
		body: '<path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"/>'
	},
	linkedin: {
		fill: false,
		body: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>'
	},
	twitter: {
		fill: true,
		body: '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>'
	},
	instagram: {
		fill: false,
		body: '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>'
	},
	mail: {
		fill: false,
		body: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>'
	},
	sun: {
		fill: false,
		body: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>'
	},
	moon: {
		fill: false,
		body: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>'
	},
	menu: {
		fill: false,
		body: '<line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>'
	},
	close: {
		fill: false,
		body: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'
	},
	'arrow-right': {
		fill: false,
		body: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>'
	},
	'external-link': {
		fill: false,
		body: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>'
	},
	download: {
		fill: false,
		body: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>'
	},
	'map-pin': {
		fill: false,
		body: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>'
	},
	briefcase: {
		fill: false,
		body: '<rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>'
	},
	graduation: {
		fill: false,
		body: '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>'
	},
	sparkles: {
		fill: false,
		body: '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/>'
	},
	code: {
		fill: false,
		body: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>'
	},
	send: {
		fill: false,
		body: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>'
	}
} satisfies Record<IconName, Icon>;
