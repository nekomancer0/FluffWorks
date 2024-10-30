<script>
	import Navbar from '../components/Navbar.svelte';
	import Product from '../components/Product.svelte';
	import * as m from '$lib/paraglide/messages.js';

	export let data;
</script>

<Navbar />

<div class="container">
	<div class="recent_merch">
		<h1>{m.the_merch()}</h1>

		<div class="merchs">
			{#if data.products.length === 0}
				<p class="nothing_text">{m.nomerch()}</p>
			{/if}
			{#each data.products as product}
				<Product
					product={{
						description: product.description,
						name: product.name,
						id: product.id,
						image: product.image,
						price: product.price
					}}
				></Product>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		margin-bottom: 3%;

		.recent_merch {
			text-overflow: clip;
			overflow-y: auto;

			margin-top: 2%;
			height: 100%;
			display: flex;
			flex-direction: column;

			h1 {
				text-align: center;
			}

			.merchs {
				display: flex;
				flex-wrap: wrap;
				gap: 5px;
				justify-content: center;
			}
		}
	}

	@media only screen and (max-width: 768px) {
		.container {
			flex-direction: column;
			margin-left: auto;
			margin-right: auto;
			margin-top: 2%;

			gap: 20px;
		}
	}
</style>
