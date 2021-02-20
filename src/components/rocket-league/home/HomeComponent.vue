<template lang="html">
    <div class="home">
        <div>
            <img
                src="/resources/img/games/rocket-league/other/home/Rocket-League.png"
                alt="Rocket League" />
            <img
                src="/resources/img/games/rocket-league/other/home/X.png"
                alt="versus" />
            <img
                src="/resources/img/games/rocket-league/other/home/Bantha-Diwit.png"
                alt="Bantha Diwit" />
        </div>
        <div>
            <h1>Tournoi 2v2 (Championnat)</h1>
            <h2>06 février 2021, 20h00</h2>
        </div>
        <div>
            <h3>Équipes au choix</h3>
            <span>(Envoyez la composition de votre équipe en MP à Wagi pls)</span>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
	name: "home-component",
})
export default class HomeComponent extends Vue {}
</script>

<style lang="scss" scoped>
@import "./../style.scss";

div.home {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-left: 2em;
    margin-right: 2em;

	height: 100%;
	max-height: 100%;

    > * {
        text-align: center;
    }

    > div:nth-of-type(1) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        column-gap: 40px;
        max-width: 100%;
        max-height: 20%;

        > img {
            max-height: 100%;
            max-width: 33%;

            &:nth-of-type(2) {
                max-height: 80px;
            }
        }
    }

    > div:nth-of-type(2) {
        @extend %stretched-center !optional;

        > h1 {
            font-size: 3em;
        }
        > h2 {
            font-size: 3em;
        }
        > * {
            margin: 0.5em;
        }
    }

    > div:nth-of-type(3) {
        > h3 {
            font-size: 3em;
            margin: 0;
        }
        > span {
            font-size: 1em;
        }
    }
}
</style>
