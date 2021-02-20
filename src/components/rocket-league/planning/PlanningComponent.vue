<template lang="html">
    <div class="planning" v-if="planning">
        <template v-for="(round, index) in planning.tournament_rounds">
            <div
                v-if="planning.tournament_rounds.length > 1 && index == planning.tournament_rounds.length - 1"
                class="line-break"
                v-bind:key="'line-' + index"
            ></div>
            <RoundComponent v-bind:round="round" v-bind:key="'round-' + index"></RoundComponent>
        </template>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import { Planning } from "../../../../../api - typings/types";

import RoundComponent from "./RoundComponent.vue";

@Component({
    components: {
        RoundComponent
	},
	name: "planning-component"
})
export default class PlanningComponent extends Vue {
    planning: Planning | null = null;

    mounted(): void {
		this.update();
		setInterval(() => {
			this.update();
		}, 1000 * 20);
	}

	update() {
		const host = document.location.hostname === "localhost" ? "http://localhost" : "https://api.diwit.tk";
		const id = 1;
		
		fetch(`${host}/tournaments/${id}`)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Could not fetch");
			}
			return response;
		})
		.then((response) => response.json())
		.then((response: Planning) => this.planning = response)
		.then(() => this.$forceUpdate())
		.catch((error) => console.error(error));
	}
}
</script>

<style lang="scss" scoped>
@import "./../style.scss";

div.planning {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
	row-gap: 5em;
    align-items: center;

	margin-top: 6em;
	margin-bottom: 2em;
	margin-left: 5em;
	margin-right: 5em;

    > div.line-break {
        flex-basis: 100%;
    }

	@media only screen and (max-width: 600px) {
		margin: 0;
	}
}
</style>
