<template lang="html">
    <div class="layout" v-bind:class="page">
		<nav class="top-bar">
            <template v-for="(link, index) in links">
                <router-link v-bind:to="'/rocket-league/' + link.link" v-bind:key="index">{{ link.name }}</router-link>
            </template>
        </nav>
		<div class="content">
			<header>
				<h1>{{ currentPageObject.name }}</h1>
				<img src="/resources/img/games/home/logo/Bantha.png" alt="Bantha" />
				<div></div>
			</header>
			<main>
				<keep-alive>
					<component v-bind:is="currentPageComponentName"></component>
				</keep-alive>
			</main>
			<footer>
				<img src="/resources/img/games/rocket-league/logo/Rocket League.png" alt="Rocket League" />
				<div></div>
			</footer>
		</div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import HomeComponent from "./home/HomeComponent.vue";
import PlanningComponent from "./planning/PlanningComponent.vue";
import RankingComponent from "./ranking/RankingComponent.vue";
import TeamsComponent from "./teams/TeamsComponent.vue";

type Link = {
    name: string;
    link: string;
    component: Vue;
};

@Component({
	components: {
		HomeComponent,
		PlanningComponent,
		RankingComponent,
		TeamsComponent,
	},
	name: "rocket-league-layout-component"
})
export default class RocketLeagueLayoutComponent extends Vue {
    links: Link[] = [
        {
            name: "Home",
            link: "home",
            component: new HomeComponent()
        },
        {
            name: "Planning",
            link: "planning",
            component: new PlanningComponent()
        },
        {
            name: "Ranking",
            link: "ranking",
            component: new RankingComponent()
        },
        {
            name: "Teams",
            link: "teams",
            component: new TeamsComponent()
        }
	];
	
	get page(): string {
		return this.$route.params.page;
	}

    get currentPageObject(): Link {
        return this.links.find(l => l.link === this.page)!;
    }

    get currentPageComponent(): Vue {
        return this.currentPageObject.component;
    }

    get currentPageComponentName(): string {
        return this.currentPageComponent.$options.name!;
    }
}
</script>

<style lang="scss" scoped>

@import url("https://fonts.googleapis.com/css2?family=Jura&display=swap");
@import "./style.scss";

div.layout {
	width: 100%;
	max-width: 100%;
	height: 100%;
	max-height: 100%;

	display: grid;
	grid-template-areas: "links" "content";
	grid-template-rows: 50px calc(100% - 50px);

	&.home {
		div.content {
			background-image: url("/resources/img/games/rocket-league/backgrounds/background-rocket-league-home.png");
		}
	}

	&:not(.home) {
		div.content {
			background-image: url("/resources/img/games/rocket-league/backgrounds/background-rocket-league-other-logo.png");
		}
	}

	* {
		font-family: Jura !important;
	}

	nav.top-bar {
		width: calc(100% - 1.5em);
		max-width: calc(100% - 1.5em);
		height: 50px;
		max-height: 50px;

		grid-area: links;

		background-color: #ebebee;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-items: start;
		column-gap: 3em;
		padding-left: 1.5em;

		> a {
			font-size: 1.25em;
			color: #070707;
			text-decoration: none;
			font-weight: bolder;

			&.router-link-active {
				color: #dc8e19;
			}
		}
	}

	div.content {
		width: calc(100% - 6em);
		max-width: calc(100% - 6em);
		height: calc(100% - 3.2em);
		max-height: calc(100% - 3.2em);

		overflow: hidden;

		grid-area: content;
		
		background-size: cover;
		background-position: center;
		color: white;
											
		padding-top: 1.7em;
		padding-right: 3em;
		padding-bottom: 1.5em;
		padding-left: 3em;

		display: flex;
		flex-direction: column;

		@media only screen and (max-width: 600px) {
			padding-top: 0em;
			padding-right: 1em;
			padding-bottom: 1em;
			padding-left: 1em;
			height: calc(100% - 1em);
		}

		> header {
			display: grid;
			grid-template-areas: "title logo" "line line";
			align-items: end;
			grid-template-columns: 1fr auto;
			flex-shrink: 0;

			> h1 {
				font-size: 4.5em;
				margin: 0;
				text-transform: uppercase;
				grid-area: title;
				@extend %stretched-left !optional;
			}

			> img {
				height: 4em;
				float: right;
				grid-area: logo;
				margin-bottom: 10px;

				@-moz-document url-prefix() {
					display: none;
				}
			}

			> div {
				grid-area: line;
				height: 5px;
				background-color: white;
			}
		}

		> main {
			padding-top: 1em;
			padding-bottom: 1em;

			flex-shrink: 1;
			flex-grow: 1;

			overflow-y: auto;

			@extend %scrollbar !optional;
		}

		> footer {
			display: flex;
			flex-shrink: 0;

			> img {
				height: 3em;
				display: inline-flex;
			}

			> div {
				height: 3px;
				background-color: white;
				display: inline-flex;
				flex-grow: 1;
				align-self: flex-end;
			}
		}

	}

	@media only screen and (max-width: 600px) {
		nav.top-bar {
			width: 100%;
			max-width: 100%;

			padding: 0;

			flex-wrap: wrap;
			justify-content: space-evenly;
		}

		div.content {
			width: calc(100% - 1em);
			max-width: calc(100% - 1em);
			height: calc(100% - 1em);
			max-height: calc(100% - 1em);
			padding: 0.5em;

			>header {
				>h1 {
					font-size: 3em;
				}
				>img {
					height: 2em;
				}
			}

			>main {
				// @extend %no-scrollbar !optional;
			}

			>footer {
				>img {
					height: 2em;
				}
			}

		}
	}
}

</style>
