<script>
	import Navbar from './components/Navbar.svelte';
	import Product from './components/Product.svelte';
	import Updates from './components/Updates.svelte';

	export let data;
</script>

<Navbar user={data.user} />

<div class="container">
	<Updates updates={data.updates} />
	<div class="recent_merch">
		<h1>RECENT MERCH</h1>

		<div class="merchs">
			<Product
				product={{
					description: 'Aaaaa',
					name: 'aaaa',
					id: 'aaa',
					image: '/placeholder.png',
					price: '18'
				}}
			></Product>

			<Product
				product={{
					description: 'Aaaaa',
					name: 'aaaa',
					id: 'aaa',
					image: '/placeholder.png',
					price: '18'
				}}
			></Product>
			<Product
				product={{
					description: 'Aaaaa',
					name: 'aaaa',
					id: 'aaa',
					image: '/placeholder.png',
					price: '18'
				}}
			></Product>
			<Product
				product={{
					description: 'Aaaaa',
					name: 'aaaa',
					id: 'aaa',
					image: '/placeholder.png',
					price: '18'
				}}
			></Product>
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
