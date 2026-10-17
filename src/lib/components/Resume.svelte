<script lang="ts">
	import { education, experience } from '$lib/data/site';
	import Icon from './Icon.svelte';
	import Section from './Section.svelte';
</script>

<Section
	id="resume"
	eyebrow="Journey"
	title="Projects & education"
	description="A transparent snapshot of the projects I'm building and what I'm learning."
>
	<div class="grid gap-12 lg:grid-cols-2">
		<div>
			<h3 class="font-display flex items-center gap-2 text-xl font-semibold">
				<Icon name="code" size={20} class="text-primary" />
				Project Experience
			</h3>
			<ol class="mt-8 space-y-8">
				{#each experience as item}
					<li class="relative border-l border-border pl-6">
						<span
							class="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background"
						></span>
						<span class="text-xs font-semibold uppercase tracking-wider text-primary">
							{item.period}
						</span>
						<h4 class="font-display mt-1 text-lg font-semibold">{item.title}</h4>
						<p class="text-sm font-medium text-muted-foreground">{item.org}</p>
						<p class="mt-2 text-sm leading-relaxed text-muted-foreground">
							{item.description}
						</p>
					</li>
				{/each}
			</ol>
		</div>

		<div>
			<h3 class="font-display flex items-center gap-2 text-xl font-semibold">
				<Icon name="graduation" size={20} class="text-primary" />
				Education
			</h3>
			<ol class="mt-8 space-y-8">
				{#each education as item}
					<li class="relative border-l border-border pl-6">
						<span
							class="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background"
						></span>
						<span class="text-xs font-semibold uppercase tracking-wider text-primary">
							{item.period}
						</span>
						<h4 class="font-display mt-1 text-lg font-semibold">{item.title}</h4>
						<p class="text-sm font-medium text-muted-foreground">{item.org}</p>
						<p class="mt-2 text-sm leading-relaxed text-muted-foreground">
							{item.description}
						</p>
					</li>
				{/each}
			</ol>
		</div>
	</div>
</Section>
