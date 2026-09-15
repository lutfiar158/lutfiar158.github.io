<script lang="ts">
	import Icon from './Icon.svelte';

	function toggle() {
		const dark = document.documentElement.classList.toggle('dark');
		localStorage.setItem('theme', dark ? 'dark' : 'light');
	}
</script>

<button
	type="button"
	onclick={toggle}
	aria-label="Toggle theme"
	class="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground"
>
	<Icon name="sun" size={20} class="dark:hidden" />
	<Icon name="moon" size={20} class="hidden dark:block" />
</button>
