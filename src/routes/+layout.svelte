<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import { user } from '$lib/stores/session';
	let { children, data } = $props();

	user.set(data.locals.user);
</script>

<ParaglideJS {i18n}>
	{@render children()}
</ParaglideJS>
