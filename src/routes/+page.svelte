<script lang="ts">
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Resume from '$lib/components/Resume.svelte';
</script>

<svelte:head>
	<title>Lutfiar Rahman Maarif — Aspiring Full-Stack Developer</title>
	<meta
		name="description"
		content="Portfolio of Lutfiar Rahman Maarif, an Information Systems student building web projects with SvelteKit, TypeScript, and Tailwind CSS while learning full-stack development."
	/>
	<meta name="theme-color" content="#0284c7" />
</svelte:head>

<Hero />
<About />
<Projects />
<Resume />
<Contact />
