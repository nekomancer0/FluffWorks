<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import { user } from '$lib/stores/session';
	import SvelteSeo from 'svelte-seo';
	import { page } from '$app/stores';

	let { children, data } = $props();

	user.set(data.locals.user);
</script>

{#key $page.url.pathname}
	<SvelteSeo
		title="FluffWorks | Website"
		description="Work in progress FluffWorks Website"
		keywords="fluffworks website furry company kemono furries fluffy fantasy video games game videos society board utility dev development web site services projects service project kemonomimi uwu owo"
		openGraph={{
			images: [{ url: '/logo.png' }],
			title: 'FluffWorks | Website',
			description: 'Work in progress FluffWorks Website',
			site_name: 'FluffWorks'
		}}
		applicationName="FluffWorks"
		twitter={{
			card: 'app',
			creator: 'FluffWorks',
			description: 'Work in progress FluffWorks Website',
			image: '/logo.png',
			title: 'FluffWorks | Website'
		}}
	/>
{/key}

<ParaglideJS {i18n}>
	{@render children()}
</ParaglideJS>
