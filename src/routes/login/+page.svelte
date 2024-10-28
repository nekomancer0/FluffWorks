<script lang="ts">
	import { enhance } from '$app/forms';
	import Navbar from '../components/Navbar.svelte';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<Navbar user={null} />

<div class="form w-full max-w-xs">
	<form
		method="post"
		action="?/login"
		use:enhance
		class="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
	>
		<div class="mb-4">
			<label for="username" class="mb-2 block text-sm font-bold text-gray-700"> Username </label>

			<input
				class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
				id="username"
				type="text"
				placeholder="Username"
				name="username"
				autocomplete="off"
			/>
		</div>
		<div class="mb-4">
			<label for="password" class="mb-2 block text-sm font-bold text-gray-700"> Password </label>

			<input
				class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
				id="password"
				type="password"
				placeholder="Password"
				name="password"
			/>
		</div>
		<div class="flex items-center justify-between">
			<button
				class="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
				type="submit"
			>
				Sign In
			</button>

			<a
				class="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
				href="#"
			>
				Forgot Password?
			</a>
		</div>
	</form>
</div>

<p style="color: red">{form?.message ?? ''}</p>

<style lang="scss">
	.form {
		display: flex;
		justify-content: center; /* Centre horizontalement */
		align-items: center; /* Centre verticalement */
		min-height: 100vh; /* Prend la hauteur totale de la page */
		margin: 0;
		margin-inline: auto;

		button {
			background-color: #a41623;
		}

		a {
			color: #a41623;
		}
	}
</style>
