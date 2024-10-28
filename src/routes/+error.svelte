<script>
	import { page } from '$app/stores';
	import Navbar from './components/Navbar.svelte';
</script>

<Navbar></Navbar>

<main>
	<h1
		class="mb-4
		text-4xl
		font-bold
		leading-none
		tracking-tight
		md:text-5xl
		lg:text-6xl"
	>
		Erreur {$page.status}
	</h1>
	<p>{$page.error?.message}</p>
	<a href="/">Retour à l'accueil</a>
</main>

<style lang="scss">
	main {
		height: calc(100vh - 100px);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		a {
			color: #a41623;

			&:hover {
				text-decoration-line: underline;
			}
		}
	}
</style>
