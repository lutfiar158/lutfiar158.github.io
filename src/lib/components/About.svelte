<script lang="ts">
	import { about, skills } from '$lib/data/site';
	import Icon from './Icon.svelte';
	import Section from './Section.svelte';
</script>

<Section
	id="about"
	eyebrow="About Me"
	title="Turning ideas into real products"
	description="A little bit about who I am and the tools I work with every day."
>
	<div class="grid gap-10 lg:grid-cols-5">
		<div class="lg:col-span-3">
			{#each about.paragraphs as paragraph}
				<p class="mb-4 text-lg leading-relaxed text-muted-foreground">{paragraph}</p>
			{/each}

			<div class="mt-8 grid gap-4 sm:grid-cols-3">
				{#each about.highlights as item}
					<div class="rounded-2xl border border-border bg-card p-5 text-center">
						<div class="font-display text-3xl font-bold text-primary">{item.value}</div>
						<div class="mt-1 text-sm text-muted-foreground">{item.label}</div>
					</div>
				{/each}
			</div>
		</div>

		<div class="lg:col-span-2">
			<div class="rounded-2xl border border-border bg-card p-6">
				<h3 class="font-display flex items-center gap-2 text-lg font-semibold">
					<Icon name="sparkles" size={20} class="text-primary" />
					Skills &amp; Tools
				</h3>
				<div class="mt-6 space-y-6">
					{#each skills as group}
						<div>
							<h4 class="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
								{group.category}
							</h4>
							<div class="mt-3 flex flex-wrap gap-2">
								{#each group.items as skill}
									<span
										class="rounded-full border border-border bg-muted/60 px-3 py-1.5 text-sm font-medium text-foreground transition hover:border-primary/60 hover:bg-primary/10"
									>
										{skill}
									</span>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</Section>
