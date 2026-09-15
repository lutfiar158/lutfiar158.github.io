<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		id,
		eyebrow,
		title,
		description,
		children
	}: {
		id: string;
		eyebrow?: string;
		title: string;
		description?: string;
		children: Snippet;
	} = $props();
</script>

<section {id} class="scroll-mt-20 py-16 sm:py-24">
	<div class="mx-auto w-full max-w-6xl px-4 sm:px-6">
		<div class="mb-10 sm:mb-14">
			{#if eyebrow}
				<span
					class="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary"
				>
					<span class="h-px w-6 bg-primary"></span>
					{eyebrow}
				</span>
			{/if}
			<h2 class="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
				{title}
			</h2>
			{#if description}
				<p class="mt-4 max-w-2xl text-muted-foreground">{description}</p>
			{/if}
		</div>
		{@render children()}
	</div>
</section>
