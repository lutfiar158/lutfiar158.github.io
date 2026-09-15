<script lang="ts">
	import { site } from '$lib/data/site';
	import Icon from './Icon.svelte';
	import Section from './Section.svelte';

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		const form = event.currentTarget as HTMLFormElement;
		const data = new FormData(form);
		const name = String(data.get('name') ?? '');
		const email = String(data.get('email') ?? '');
		const message = String(data.get('message') ?? '');
		const subject = encodeURIComponent(`Portfolio message from ${name}`);
		const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
		window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
	}
</script>

<Section
	id="contact"
	eyebrow="Contact"
	title="Let&apos;s work together"
	description="Have a project in mind or just want to say hi? My inbox is always open."
>
	<div class="grid gap-10 lg:grid-cols-2">
		<div class="space-y-4">
			<a
				href="mailto:{site.email}"
				class="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-primary/60"
			>
				<span
					class="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
				>
					<Icon name="mail" size={22} />
				</span>
				<span>
					<span class="block text-sm text-muted-foreground">Email</span>
					<span class="block font-medium">{site.email}</span>
				</span>
			</a>

			<div
				class="flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
			>
				<span
					class="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
				>
					<Icon name="map-pin" size={22} />
				</span>
				<span>
					<span class="block text-sm text-muted-foreground">Location</span>
					<span class="block font-medium">{site.location}</span>
				</span>
			</div>

			<div class="flex items-center gap-3 pt-2">
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

		<form
			onsubmit={handleSubmit}
			class="space-y-4 rounded-2xl border border-border bg-card p-6"
		>
			<div class="grid gap-4 sm:grid-cols-2">
				<div>
					<label for="name" class="mb-1.5 block text-sm font-medium">Name</label>
					<input
						id="name"
						name="name"
						type="text"
						required
						placeholder="Your name"
						class="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
					/>
				</div>
				<div>
					<label for="email" class="mb-1.5 block text-sm font-medium">Email</label>
					<input
						id="email"
						name="email"
						type="email"
						required
						placeholder="you@example.com"
						class="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
					/>
				</div>
			</div>
			<div>
				<label for="message" class="mb-1.5 block text-sm font-medium">Message</label>
				<textarea
					id="message"
					name="message"
					required
					rows="5"
					placeholder="Tell me about your project..."
					class="w-full resize-none rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
				></textarea>
			</div>
			<button
				type="submit"
				class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg shadow-sky-500/20 transition hover:opacity-90 sm:w-auto"
			>
				<Icon name="send" size={18} />
				Send Message
			</button>
		</form>
	</div>
</Section>
