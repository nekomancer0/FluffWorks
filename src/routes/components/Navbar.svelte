<script lang="ts">
	import { goto } from '$app/navigation';

	export let user: { username: string; id: string } | null;

	let menuOpen = false; // Variable pour ouvrir/fermer le menu mobile
</script>

<img src="/background.png" alt="" class="bg" />

<svelte:head>
	<title>FluffWorks</title>
</svelte:head>

<nav>
	<div class="logo">
		<img src="/logo.png" on:click={() => goto('/')} alt="FluffWorks Logo" />
	</div>

	<!-- Bouton pour ouvrir le menu mobile -->
	<button class="hamburger" on:click={() => (menuOpen = !menuOpen)}> ☰ </button>

	<!-- Liens de navigation -->
	<div class="links" class:open={menuOpen}>
		<a href="/merch">Merch</a>
		<a href="/projects">Projects</a>
		<a href="/about">About</a>
		<a href="/contact">Contact</a>

		{#if !user}
			<a href="/login" on:click={() => goto('/login')}>Login</a>
			<a href="/register" on:click={() => goto('/register')}>Register</a>
		{/if}

		{#if user}
			<p>Welcome {user.username}</p>
		{/if}

		<a class="snipcart-checkout" href="#">
			<span>🛒</span>
			<span class="snipcart-items-count"></span>
		</a>
	</div>
</nav>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Aclonica&family=Dosis:wght@200..800&display=swap');

	:global(body, html) {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		user-select: none;
		-moz-user-select: none;
		-webkit-user-select: none;
	}

	:global(img) {
		-webkit-user-drag: none;
	}

	:global(p, a, span, label) {
		font-family: Dosis;
	}

	:global(h1) {
		font-family: Aclonica;
		color: white;
		font-weight: bold;
		font-size: 1.9rem;
		text-shadow:
			3px 0 #a41623,
			-3px 0 #a41623,
			0 3px #a41623,
			0 -3px #a41623,
			2px 2px #a41623,
			-2px -2px #a41623,
			2px -2px #a41623,
			-2px 2px #a41623;
	}

	:global(.snipcart-layout__content h2) {
		text-shadow: none;
		font-family: Aclonica;
		text-transform: capitalize;
	}

	:global(h2) {
		font-family: Aclonica;
		color: white;
		font-weight: bold;
		font-size: 1.1rem;
		text-shadow:
			2px 0 #a41623,
			-2px 0 #a41623,
			0 2px #a41623,
			0 -2px #a41623,
			1px 1px #a41623,
			-1px -1px #a41623,
			1px -1px #a41623,
			-1px 1px #a41623;
	}

	.bg {
		z-index: -1;
		position: absolute;
		height: 100%;
		width: 100%;
		background-size: auto;
		background-position: 100% 100%;
	}

	@media screen and (max-width: 768px) {
		:global(body, html) {
			overflow: auto;
		}

		:global(h1) {
			font-family: Aclonica;
			color: white;
			font-weight: bold;
			font-size: 1.6rem;
			text-shadow:
				3px 0 #a41623,
				-3px 0 #a41623,
				0 3px #a41623,
				0 -3px #a41623,
				2px 2px #a41623,
				-2px -2px #a41623,
				2px -2px #a41623,
				-2px 2px #a41623;
		}

		:global(h2) {
			font-family: Aclonica;
			color: white;
			font-weight: bold;
			font-size: 1rem;
			text-shadow:
				2px 0 #a41623,
				-2px 0 #a41623,
				0 2px #a41623,
				0 -2px #a41623,
				1px 1px #a41623,
				-1px -1px #a41623,
				1px -1px #a41623,
				-1px 1px #a41623;
		}

		nav {
			display: flex;
			padding-inline: 1px;
			align-items: unset;
			justify-content: center;
			gap: 10px;

			.links {
				img {
					height: 40px;
				}
				gap: 10px;
			}
		}
	}

	nav {
		width: 100%;
		height: 80px;
		background-color: #fbfbfb;
		box-shadow: 4px 4px 20px 1px black;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-inline: 30px;

		.logo img {
			height: 50px;
			cursor: pointer;
		}

		.hamburger {
			display: none;
			background: none;
			border: none;
			font-size: 2rem;
			cursor: pointer;
		}

		.links {
			display: flex;
			align-items: center;
			gap: 30px;

			a {
				font-size: 1.2rem;
			}

			.snipcart-checkout {
				padding: 10px;
				font-size: 18px;
				cursor: pointer;
				border: 1px solid gray;

				.snipcart-items-count {
					font-weight: bold;
					color: #a41623;
					margin-left: 5px;
				}
			}
		}

		/* Styles pour mobile */
		@media screen and (max-width: 768px) {
			.hamburger {
				display: block;
			}

			.links {
				display: none;
				position: absolute;
				top: 80px;
				left: 0;
				width: 100%;
				background-color: #fbfbfb;
				flex-direction: column;
				align-items: center;
				padding: 20px 0;
				box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
				gap: 15px;

				a {
					font-size: 1.5rem;
				}
			}

			/* Classe pour afficher le menu */
			.links.open {
				display: flex;
			}
		}
	}
</style>
