<script lang="ts">
	import { site } from '$lib/data/site';
	import Icon from './Icon.svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	let open = $state(false);
</script>

<header class="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
	<nav class="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
		<a
			href="#home"
			class="font-display text-lg font-bold tracking-tight"
			onclick={() => (open = false)}
		>
			{site.firstName}<span class="text-primary">.</span>
		</a>

		<div class="hidden items-center gap-1 md:flex">
			{#each site.nav as item}
				<a
					href={item.href}
					class="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
				>
					{item.label}
				</a>
			{/each}
			<div class="ml-2">
				<ThemeToggle />
			</div>
		</div>

		<div class="flex items-center gap-1 md:hidden">
			<ThemeToggle />
			<button
				type="button"
				onclick={() => (open = !open)}
				aria-label="Toggle menu"
				aria-expanded={open}
				class="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition hover:bg-muted"
			>
				{#if open}
					<Icon name="close" size={22} />
				{:else}
					<Icon name="menu" size={22} />
				{/if}
			</button>
		</div>
	</nav>

	{#if open}
		<div class="border-t border-border/70 bg-background/95 px-4 py-4 backdrop-blur-md md:hidden">
			<div class="flex flex-col gap-1">
				{#each site.nav as item}
					<a
						href={item.href}
						onclick={() => (open = false)}
						class="rounded-xl px-4 py-3 text-base font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
					>
						{item.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</header>
