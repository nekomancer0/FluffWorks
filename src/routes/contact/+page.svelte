<script>
	import Navbar from '../components/Navbar.svelte';
	import * as m from '$lib/paraglide/messages.js';
	import SvelteSeo from 'svelte-seo';
	import { page } from '$app/stores';

	export let data;
</script>

{#key $page.url.pathname}
	<SvelteSeo
		title="FluffWorks | Contact"
		description="Contact FluffWorks"
		keywords="fluffworks website furry company kemono furries fluffy fantasy video games game videos society board utility dev development web site services projects service project kemonomimi uwu owo"
		openGraph={{
			images: [{ url: '/logo.png' }],
			title: 'FluffWorks | Contact',
			description: 'Contact FluffWorks',
			site_name: 'FluffWorks'
		}}
		applicationName="FluffWorks"
		twitter={{
			card: 'app',
			creator: 'FluffWorks',
			description: 'Contact FluffWorks',
			image: '/logo.png',
			title: 'FluffWorks | Contact'
		}}
	/>
{/key}
<Navbar />

<div class="container">
	<div class="inline">
		<div class="block">
			<div class="contact-us box">
				<h1>{m.contact_us()}</h1>
				<div class="center">
					<p><b>E-mail</b>: contact@fluffworks.quest</p>
					<p><b>Phone</b>: +33 00 00 00 00 00</p>
				</div>
			</div>
			<div class="join-us box">
				<h1>{m.join_us()}</h1>

				<div class="center">
					<p><b>Jobs</b>: jobs@fluffworks.quest</p>
					<p><b>Phone</b>: +33 00 00 00 00 00</p>
				</div>
			</div>
		</div>
		<div class="socials">
			<h1>{m.socials()}</h1>
			<div class="icons">
				<a href="https://discord.gg/RAKqUDkgaJ" target="_blank"><img src="/discord.svg" alt="" /></a
				>
				<a href="https://www.linkedin.com/company/fluffworks/" target="_blank"
					><img src="/linkedin.svg" alt="" /></a
				>
				<a href="https://www.youtube.com/@fluffworks-yt" target="_blank"
					><img src="/youtube.svg" alt="" /></a
				>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		align-items: center;
		flex-direction: column;
		margin-top: 2%;
		width: 100%;
		height: 100%;

		.inline {
			display: flex;
			gap: 6%;
			width: 80%;
			height: 80%;

			.block {
				display: flex;
				flex-direction: column;
				gap: 60px;
				width: 100%;
				margin-inline: 5%;
				transform: translateX(-20%);

				.box {
					background-color: #d4af37;
					box-shadow: 4px 4px 20px 1px black;
					padding: 10px;
					width: 100%;
					height: 70%;

					.center {
						color: white;
						display: flex;
						height: 50%;

						flex-direction: column;
						justify-content: center;
						margin-left: 3%;
					}
				}
			}
		}

		.socials {
			width: 100%;

			.icons {
				display: flex;
				justify-content: center;
				margin-top: 5%;
				gap: 5px;

				img {
					width: 55px;

					&:hover {
						cursor: pointer;
					}
				}
			}
		}

		h1 {
			text-align: center;
		}
	}

	@media only screen and (max-width: 768px) {
		.container {
			h1 {
				text-align: center;
			}

			.inline {
				display: flex;
				flex-direction: column;
				margin-left: auto;
				margin-right: auto;
				width: 90%;
				margin-right: 0;

				.block {
					transform: translateX(-8%);
					height: 70%;

					.box {
					}
				}
			}
		}
	}
</style>
