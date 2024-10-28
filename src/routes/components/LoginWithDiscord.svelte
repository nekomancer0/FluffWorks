<script>
	// Define your backend URL for Discord authentication
	const discordAuthUrl = 'https://your-backend-url.com/auth/discord';

	function loginWithDiscord() {
		window.location.href = discordAuthUrl;
	}
</script>

<button class="discord-button" on:click={loginWithDiscord}>
	<img
		class="discord-icon"
		src="https://cdn.iconscout.com/icon/free/png-256/discord-3-569463.png"
		alt="Discord logo"
	/>
	Login with Discord
</button>

<style>
	/* Basic styling for the button */
	.discord-button {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #5865f2; /* Discord's brand color */
		color: white;
		font-weight: bold;
		padding: 10px 15px;
		border-radius: 5px;
		border: none;
		cursor: pointer;
		transition: background-color 0.2s ease;
	}

	.discord-button:hover {
		background-color: #4a5ad4;
	}

	.discord-icon {
		margin-right: 10px;
		height: 20px;
	}
</style>
