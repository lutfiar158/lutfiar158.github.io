<script lang="ts">
	import { icons, type IconName } from './icons';

	let {
		name,
		size = 20,
		class: className = ''
	}: {
		name: IconName;
		size?: number;
		class?: string;
	} = $props();

	const icon = $derived(icons[name]);
</script>

{#if icon.fill}
	<svg
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="currentColor"
		class={className}
		aria-hidden="true"
	>
		{@html icon.body}
	</svg>
{:else}
	<svg
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="1.75"
		stroke-linecap="round"
		stroke-linejoin="round"
		class={className}
		aria-hidden="true"
	>
		{@html icon.body}
	</svg>
{/if}
