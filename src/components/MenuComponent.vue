<template lang="html">
    <div class="menu">
        <nav class="side-nav">
            <template v-for="game in games">
                <router-link v-bind:to="'/' + game.link + '/'" v-bind:key="game.name" >
                    <img v-bind:src="`/resources/img/games/${game.link}/logo/${game.img}`" v-bind:alt="game.name" />
                </router-link>
            </template>
        </nav>
        <section>
            <keep-alive>
                <component v-bind:is="currentComponentName"></component>
            </keep-alive>
        </section>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import TodoLayoutComponent from "./todo/TodoLayoutComponent.vue";
import HomeLayoutComponent from "./home/HomeLayoutComponent.vue";
import RocketLeagueLayoutComponent from "./rocket-league/RocketLeagueLayoutComponent.vue";
import LeagueOfLegendsLayoutComponent from "./league-of-legends/LeagueOfLegendsLayoutComponent.vue";
import MinecraftLayoutComponent from "./minecraft/MinecraftLayoutComponent.vue";

type Game = {
    name: string;
    img: string;
    link: string;
    component: Vue;
};

@Component({
    components: {
		TodoLayoutComponent,
		HomeLayoutComponent,
        RocketLeagueLayoutComponent,
		LeagueOfLegendsLayoutComponent,
		MinecraftLayoutComponent,
	},
	name: "menu-component"
})
export default class MenuComponent extends Vue {
    games: Game[] = [ 
        {
            name: "Home",
            img: "Bantha.png",
            link: "home",
            component: new HomeLayoutComponent(),
        },
        {
            name: "Rocket League",
            img: "Rocket League.png",
            link: "rocket-league",
            component: new RocketLeagueLayoutComponent(),
        },
		/*
        {
            name: "League of Legends",
            img: "League of Legends.png",
            link: "league-of-legends",
            component: new TodoLayoutComponent(),
        },
        {
            name: "Minecraft",
            img: "Minecraft.png",
            link: "minecraft",
            component: new TodoLayoutComponent(),
        },
		*/
	];

	get game(): string {
		return this.$route.params.game;
	}

    get currentGameObject(): Game {
        return this.games.find(((g: Game): boolean => g.link === this.game).bind(this))!;
    }

    get currentComponent(): Vue {
        return this.currentGameObject.component;
    }

    get currentComponentName(): string {
        return this.currentComponent.$options.name!;
    }
}
</script>

<style lang="scss" scoped>
div.menu {
    height: 100%;
	max-height: 100%;
    width: 100%;
	max-width: 100%;

    display: grid;
    grid-template-areas: "side main";
    grid-template-columns: 50px calc(100% - 50px);

    > nav.side-nav {
		width: 50px;
		max-width: 50px;
		height: 100%;
		max-height: 100%;

        grid-area: side;

        background-color: #070707;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        > a {
            margin: 20px 0 20px 0;
            display: inline-block;
            width: 60%;

            &:first-of-type {
                justify-self: start;
            }

            &.router-link-active {
                > img {
                    filter: grayscale(0) brightness(1) !important;
                }
            }

            > img {
                display: block;
                margin: auto;
                width: 100%;
                height: auto;
                filter: grayscale(1) brightness(0.8);

                &:hover {
                    transition: filter ease-in-out 0.2s;
                    filter: grayscale(0) brightness(1);
                }
            }
        }
    }

    > section {
        width: 100%;
		max-width: 100%;
		height: 100%;
		max-height: 100%;

		grid-area: main;

		overflow: hidden;
    }

    @media only screen and (max-width: 600px) {
        grid-template-areas: "side" "main";
        grid-template-rows: 50px calc(100% - 50px);
		grid-template-columns: 100%;

        > nav.side-nav {
            width: 100%;
			max-width: 100%;
			height: 50px;
			max-height: 50px;

            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;

            > a {
                height: 60%;
                margin: 0;
                width: min-content;

                > img {
                    height: 100%;
                    width: auto;
                }
            }
        }

        > section {
			width: 100%;
            max-width: 100%;
			height: 100%;
            max-height: 100%;
        }
    }
}
</style>
