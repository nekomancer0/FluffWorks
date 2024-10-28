<script lang="ts">
	export let updates: { text: string; date: string }[];
</script>

<main>
	<h1>UPDATES</h1>

	<img src="/line.png" alt="" class="line" />
	<div class="updates">
		{#each updates as update}
			<div class="update">
				<h2>{update.date}</h2>
				<p>{update.text}</p>
			</div>
		{/each}
	</div>
</main>

<style lang="scss">
	main {
		height: 77.5%;
		width: 50%;
		margin-inline: 3%;
		margin-bottom: 5%;
		background-color: #fbfbfb;
		box-shadow: 4px 4px 20px 1px black;
		padding: 15px;

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 5px;

		.updates {
			text-overflow: clip;
			overflow-y: auto;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 10px;

			.update {
				display: flex;
				flex-direction: column;
				align-items: center;

				p {
					text-align: justify;
					font-size: 0.8rem;
				}
			}
		}

		h1 {
			text-align: center;
		}

		.line {
			width: 60%;
		}
	}

	@media only screen and (max-width: 768px) {
		main {
			width: 90%;
			height: auto;
		}
	}
</style>
