<script>
	export let product = {
		id: 'unique-product-id',
		name: 'Nom du produit',
		price: 'Prix',
		image: "URL de l'image",
		description: 'Description du produit'
	};
</script>

<div class="product">
	<div class="inline">
		<img src={product.image} alt={product.name} width="200" />
		<div>
			<p>{product.description}</p>
		</div>
	</div>
	<p><b>Prix</b> : ${product.price}</p>
	<button
		class="snipcart-add-item"
		data-item-id={product.id}
		data-item-price={product.price}
		data-item-url="/"
		data-item-name={product.name}
		data-item-description={product.description}
		data-item-image={product.image}
	>
		Ajouter au panier
	</button>
</div>

<style lang="scss">
	.product {
		background-color: #d4af37;
		box-shadow: 4px 4px 20px 1px black;
		padding: 15px;
		margin-inline: auto;
		width: 48.5%;
		height: 48%;

		color: #fbfbfb;

		.inline {
			display: flex;
			gap: 8px;

			img {
				width: 50%;
			}

			div {
				color: #fbfbfb;
				display: flex;
				flex-direction: column;
				align-items: center;
				text-align: justify;
			}
		}

		button {
			color: #fbfbfb;
			background-color: #a41623;
			font-size: 0.8rem;
			padding: 7px;
			border-radius: 15px;
		}

		:global(h2) {
			text-shadow: none;
			text-transform: capitalize;
			color: #0f0f0f;
			text-align: center;
			text-decoration-line: underline;
			margin-bottom: 5px;
		}
	}
</style>
