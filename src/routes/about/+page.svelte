<script>
	import Navbar from '../components/Navbar.svelte';

	export let data;
</script>

<Navbar />

<div class="container">
	<h1>ABOUT US</h1>

	<div class="about">
		<div>
			<p>
				<b>FluffWorks</b> est un collectif créatif et audacieux, né de la passion pour l’imaginaire et
				la diversité.
			</p>

			<p>
				<b>Notre mission</b> est de donner vie à une multitude de projets dans des domaines variés, notamment
				le jeu vidéo, l’animation et les jeux de société, tout en puisant dans la richesse des univers
				fantastiques. Nous visons à créer des expériences immersives et inclusives qui captivent et inspirent.
			</p>

			<p>
				<b>Chez FluffWorks</b>, l’imagination n’a pas de limites. Nos projets, qu’il s’agisse d’une
				série animée dans l’esprit de Hazbin Hotel ou Murder Drones, ou d’un jeu de cartes original,
				sont façonnés avec une esthétique unique : un mélange captivant de fantasy, de minimalisme
				et d’éléments «mignons» et «fluffy», inspirés du Furry Fandom. Cette esthétique nous permet
				de construire des mondes accueillants et enchanteurs, où la magie du détail et la douceur
				des formes jouent un rôle essentiel.
			</p>

			<p>
				<b>Nos valeurs</b>, au cœur de chaque création, reflètent un engagement profond envers la
				collaboration, la créativité et l’inclusivité.
			</p>
		</div>
		<div>
			<p>
				Nous prônons la diversité sous toutes ses formes, que ce soit dans les récits que nous
				explorons ou les communautés que nous représentons. FluffWorks s’ancre dans des valeurs
				fortes de soutien au Furry Fandom et à la communauté LGBT+, faisant de chaque projet une
				opportunité d’offrir des espaces où chaque voix, chaque différence, est célébrée.
			</p>

			<p>
				<b>Le ton de FluffWorks</b> se veut doux, rêveur et curieux. Nous croyons que l’art de raconter
				des histoires, quelle que soit sa forme, doit inviter à l’évasion, mais aussi à la réflexion.
				FluffWorks est un lieu où l’on ose rêver, où l’on partage ses idées, et où l’on s’efforce de
				rendre le monde plus inclusif à travers l’art et le divertissement.
			</p>

			<p>
				<b>Chez FluffWorks</b>, l’imagination n’a pas de limites. Nos projets, qu’il s’agisse d’une
				série animée dans l’esprit de Hazbin Hotel ou Murder Drones, ou d’un jeu de cartes original,
				sont façonnés avec une esthétique unique : un mélange captivant de fantasy, de minimalisme
				et d’éléments «mignons» et «fluffy», inspirés du Furry Fandom. Cette esthétique nous permet
				de construire des mondes accueillants et enchanteurs, où la magie du détail et la douceur
				des formes jouent un rôle essentiel.
			</p>

			<p>
				Nous invitons chacun à rejoindre notre aventure, à découvrir des univers fantastiques et à
				participer à une communauté créative qui valorise la diversité et l’innovation. FluffWorks,
				c’est plus qu’un projet, c’est une expérience, un voyage vers des mondes où l’imagination et
				l’inclusion se rencontrent pour créer quelque chose d’unique.
			</p>
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
		margin-top: 3%;

		h1 {
			text-align: center;
		}

		div.about {
			margin-left: 5%;
			display: flex;
			gap: 3%;

			div {
				width: 50%;
				gap: 10px;
				display: flex;

				flex-direction: column;
				p {
					text-align: justify;
					font-weight: 500;
					font-size: 0.9rem;
				}
			}
		}
	}

	@media only screen and (max-width: 768px) {
		.container {
			h1 {
				text-align: center;
			}

			div.about {
				margin-left: 5%;
				display: flex;
				width: 100%;
				flex-direction: column;
				align-items: center;
				justify-content: center;

				gap: 10px;

				div {
					width: 100%;
				}
			}
		}
	}
</style>
