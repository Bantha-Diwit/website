<template lang="html">
    <div class="teams">
		<template v-for="(team, index) in teams">
			<TeamComponent v-bind:team="team" v-bind:key="index"></TeamComponent>
		</template>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { RocketLeagueTeam, Tournament } from "../../../../../api - typings/mod";

import TeamComponent from "./TeamComponent.vue";

@Component({
	components: {
		TeamComponent,
	},
	name: "teams-component"
})
export default class TeamsComponent extends Vue {
    teams: RocketLeagueTeam[] = [];

	public created(): void {
		this.update();
	}

	public update(): void {
		const host: string = document.location.hostname === "localhost" ? "http://localhost" : "https://api.diwit.tk";
		const tournamentId: number = 1;

		fetch(`${host}/tournaments/${tournamentId}/`)
		.then((response: Response): Response => {
			if(!response.ok) {
				throw new Error("Error");
			}
			return response;
		})
		.then((response: Response): Promise<object> => response.json())
		.then((response: Tournament) => {
			this.teams = response.tournament_teams;
		})
		.then(() => this.$forceUpdate())
		.catch((error) => console.error(error));
	}
}
</script>

<style lang="scss" scoped>
@import "./../style.scss";

div.teams {
	width: 90%;
	max-width: 90%;
	height: 100%;
	max-height: 100%;

	margin: auto;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;

	column-gap: 3em;
	row-gap: 3em;
}
</style>
