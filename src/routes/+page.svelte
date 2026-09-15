<script lang="ts">
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Resume from '$lib/components/Resume.svelte';
</script>

<svelte:head>
	<title>Raka Pratama — Full-Stack Developer</title>
	<meta name="theme-color" content="#0284c7" />
</svelte:head>

<Hero />
<About />
<Projects />
<Resume />
<Contact />
