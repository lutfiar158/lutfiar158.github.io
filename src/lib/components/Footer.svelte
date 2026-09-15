<script lang="ts">
	import { site } from '$lib/data/site';
	import Icon from './Icon.svelte';

	const year = new Date().getFullYear();
</script>

<footer class="border-t border-border/70">
	<div
		class="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6"
	>
		<p class="text-sm text-muted-foreground">
			&copy; {year} {site.name}. All rights reserved.
		</p>
		<div class="flex items-center gap-2">
			{#each site.socials as social}
				<a
					href={social.href}
					target="_blank"
					rel="noreferrer"
					aria-label={social.label}
					class="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-primary"
				>
					<Icon name={social.icon} size={18} />
				</a>
			{/each}
		</div>
	</div>
</footer>
