<script lang="ts">
	import { enhance } from '$app/forms';
	import Navbar from '../components/Navbar.svelte';
	import type { ActionData } from './$types';

	import { socket } from '$lib/socket';
	import { onMount } from 'svelte';
	import { chatData } from '$lib/stores/chat';

	let {
		form,
		data
	}: {
		form: ActionData;
		data: {
			user: {
				id: string;
				username: string;
			};
			messages: { text: string; username: string }[];
		};
	} = $props();

	socket.on('login', (callback) => {
		callback(data.user);
	});

	let messages = data.messages;
	chatData.set(messages);

	let msgDiv: HTMLDivElement;
	let formEl: HTMLFormElement;

	onMount(() => {
		let i = 0;
		socket.on('chat', (message) => {
			if (i >= 1) {
				i = 0;
				return;
			}

			i++;

			chatData.set([message, ...$chatData]);
		});

		let inter = setInterval(() => {
			if (form != null) {
				clearInterval(inter);

				socket.emit('chat', form);
			}

			return;
		});
	});
</script>

<Navbar />

<div class="container">
	<h1>Chat</h1>

	<div class="messages max-w-sm overflow-hidden rounded bg-white p-4 shadow-md" bind:this={msgDiv}>
		{#key $chatData}
			{#each $chatData as message}
				<p><b>{message.username}</b>: {message.text}</p>
			{/each}
		{/key}
	</div>
	<form
		method="post"
		action="?/message"
		use:enhance
		class="message_form mb-4 w-full max-w-sm rounded bg-white px-8 pb-8 pt-6 shadow-md"
		bind:this={formEl}
	>
		<div class="flex items-center border-b border-red-500 py-2">
			<input
				name="text"
				class="mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-gray-700 focus:outline-none"
				type="text"
				placeholder="Your message text..."
				aria-label="Message text"
				autocomplete="off"
			/>
			<button
				class="flex-shrink-0 rounded border-4 border-red-500 bg-red-500 px-2 py-1 text-sm text-white hover:border-teal-700 hover:bg-teal-700"
				type="submit"
			>
				Send
			</button>
		</div>
	</form>
</div>

<style lang="scss">
	.messages {
		margin-bottom: 2%;
		display: flex;
		flex-direction: column;
		gap: 10px;
		height: 200px;
		text-overflow: clip;
		overflow-y: auto;

		p {
			border-radius: 15px;
			border: 1px solid #0f0f0f;
			padding: 4px;
			text-indent: 10px;
		}
	}

	.message_form,
	.messages {
		margin-inline: auto;
	}
	.container {
		margin-block: 3%;
	}

	h1 {
		text-align: center;
	}
</style>
