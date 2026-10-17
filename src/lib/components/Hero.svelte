<script lang="ts">
	import { site } from '$lib/data/site';
	import Icon from './Icon.svelte';
</script>

<section id="home" class="relative overflow-hidden pb-20 pt-14 sm:pb-28 sm:pt-20">
	<div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
		<div
			class="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-sky-400/20 blur-3xl sm:h-96 sm:w-96"
		></div>
		<div
			class="absolute -left-24 top-40 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl sm:h-96 sm:w-96"
		></div>
	</div>

	<div
		class="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8"
	>
		<div>
			<span
				class="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground"
			>
				<span class="relative flex h-2 w-2">
					<span
						class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-50"
					></span>
					<span class="relative inline-flex h-2 w-2 rounded-full bg-sky-500"></span>
				</span>
				Building and learning
			</span>

			<h1
				class="font-display mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
			>
				Hi, I&apos;m
				<span class="bg-linear-to-r from-sky-400 to-cyan-500 bg-clip-text text-transparent">
					{site.name}
				</span>
			</h1>

			<p class="font-display mt-4 text-xl font-medium text-muted-foreground sm:text-2xl">
				{site.role}
			</p>

			<p class="mt-6 max-w-xl text-lg text-muted-foreground">{site.tagline}</p>

			<div class="mt-8 flex flex-wrap gap-3">
				<a
					href="#projects"
					class="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg shadow-sky-500/20 transition hover:opacity-90"
				>
					View Projects
					<Icon name="arrow-right" size={18} />
				</a>
				<a
					href="#contact"
					class="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-semibold text-foreground transition hover:border-primary/60"
				>
					Contact Me
				</a>
			</div>

			<div class="mt-8 flex items-center gap-3">
				{#each site.socials as social}
					<a
						href={social.href}
						target="_blank"
						rel="noreferrer"
						aria-label={social.label}
						class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
					>
						<Icon name={social.icon} size={20} />
					</a>
				{/each}
			</div>
		</div>

		<div class="flex justify-center lg:justify-end">
			<div class="relative w-full max-w-md">
				<div
					class="absolute inset-0 -rotate-3 rounded-3xl bg-linear-to-br from-sky-400 to-cyan-500 opacity-40 blur-sm"
				></div>
				<div class="relative overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
					<div class="flex items-center gap-1.5 border-b border-border bg-muted/60 px-4 py-3">
						<span class="h-3 w-3 rounded-full bg-red-400"></span>
						<span class="h-3 w-3 rounded-full bg-amber-400"></span>
						<span class="h-3 w-3 rounded-full bg-emerald-400"></span>
						<span class="ml-3 font-mono text-xs text-muted-foreground">profile.ts</span>
					</div>
					<pre class="overflow-x-auto p-5 font-mono text-sm leading-relaxed sm:text-[15px]"><code><span class="text-sky-500">const</span> <span class="text-cyan-400">profile</span> <span class="text-sky-500">=</span> <span class="text-muted-foreground">&#123;</span>
  <span class="text-foreground">name</span><span class="text-sky-500">:</span> <span class="text-emerald-500">'{site.name}'</span><span class="text-muted-foreground">,</span>
  <span class="text-foreground">role</span><span class="text-sky-500">:</span> <span class="text-emerald-500">'{site.role}'</span><span class="text-muted-foreground">,</span>
  <span class="text-foreground">location</span><span class="text-sky-500">:</span> <span class="text-emerald-500">'{site.location}'</span><span class="text-muted-foreground">,</span>
  <span class="text-foreground">stack</span><span class="text-sky-500">:</span> <span class="text-muted-foreground">[</span><span class="text-emerald-500">'SvelteKit'</span><span class="text-muted-foreground">,</span> <span class="text-emerald-500">'TypeScript'</span><span class="text-muted-foreground">],</span>
  <span class="text-foreground">goal</span><span class="text-sky-500">:</span> <span class="text-emerald-500">'Full-stack developer'</span>
<span class="text-muted-foreground">&#125;;</span>
</code></pre>
				</div>
			</div>
		</div>
	</div>
</section>
