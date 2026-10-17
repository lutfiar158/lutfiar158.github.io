<script lang="ts">
	import { projects } from '$lib/data/site';
	import Icon from './Icon.svelte';
	import Section from './Section.svelte';
</script>

<Section
	id="projects"
	eyebrow="Projects"
	title="Things I&apos;ve built"
	description="A selection of real projects I've worked on while developing my web skills."
>
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each projects as project}
			<article
				class="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/10"
			>
				<div
					class="relative flex aspect-video items-center justify-center overflow-hidden bg-linear-to-br {project.accent}"
				>
					<div
						class="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10"
						aria-hidden="true"
					></div>
					<div
						class="absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-black/10"
						aria-hidden="true"
					></div>
					<Icon name="code" size={40} class="text-white/80 transition group-hover:scale-110" />
				</div>

				<div class="flex flex-1 flex-col p-5">
					<h3 class="font-display text-lg font-semibold">{project.title}</h3>
					<p class="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
						{project.description}
					</p>

					<div class="mt-4 flex flex-wrap gap-2">
						{#each project.tags as tag}
							<span
								class="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
							>
								{tag}
							</span>
						{/each}
					</div>

					<div class="mt-5 flex items-center gap-4 border-t border-border pt-4">
						{#if project.demo}
							<a
								href={project.demo}
								target="_blank"
								rel="noreferrer"
								class="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition hover:underline"
							>
								Live Demo
								<Icon name="external-link" size={15} />
							</a>
						{/if}
						<a
							href={project.source}
							target="_blank"
							rel="noreferrer"
							class="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition hover:text-foreground"
						>
							<Icon name="github" size={15} />
							Source Code
						</a>
					</div>
				</div>
			</article>
		{/each}
	</div>
</Section>
