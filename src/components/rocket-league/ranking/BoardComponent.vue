<template lang="html">
	<table>
		<tbody>
			<tr>
				<td></td>
				<td></td>
				<td colspan="6">
					<div>
						<span>Wins</span>
						<span>Goals</span>
						<span>Shots</span>
						<span>Saves</span>
						<span>Assists</span>
						<span>Score</span>
					</div>
				</td>
			</tr>
			<template v-for="(team, index) in this.teams">
				<TeamCompoonent :t="team" v-bind:key="index" :class="{winner: team.winner}"></TeamCompoonent>
			</template>
		</tbody>
	</table>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { Planning } from "../../../../../api - typings/types";

import TeamCompoonent from "./TeamComponent.vue";

@Component({
	components: {
		TeamCompoonent,
	}
})
export default class BoardComponent extends Vue {
	teams: {
		name: string,
		wins: number,
		goals: number,
		shots: number,
		saves: number,
		assists: number,
		score: number,
		rank: number,
		rank_count: number;
		winner: boolean,
	}[] = [];
	
	created() {
		this.update();
		setInterval(() => {
			this.update();
		}, 1000 * 20);
	}

	update() {
		const host = document.location.hostname === "localhost" ? "http://localhost" : "https://api.diwit.tk";
		const tournamentId: number = 1;

		fetch(`${host}/tournaments/${tournamentId}/`)
		.then((response: Response): Response => {
			if(!response.ok) {
				throw new Error("Error");
			}
			return response;
		})
		.then((reponse: Response): any => reponse.json())
		.then((planning: Planning) => {
			const all_matches = planning.tournament_rounds.map(r => r.round_matches).flat(1);
			const all_results = planning.tournament_rounds.map(r => r.round_matches.map(m => m.match_games.map(g => g.game_results))).flat(3);
			this.teams = planning.tournament_teams.map((team) => {
				const team_results = all_results.filter(e => e.result_team_id === team.team_id);
				const our_matches = all_matches.filter(m => m.match_teams.find(t => t.team_id === team.team_id));
				console.table(our_matches);
				// our_matches.filter(m => m.ga) // TODO
				return {
					name: team.team_name,
					wins: /*all_matches
					.filter(m => m.match_teams.find(t => t.team_id === team.team_id))
					.filter((m) => {
						
						const max = Math.max(... m.match_games.map(m => m.game_results.map(r => r.result_goals)).flat(2));
						// TODO
					}).length,*/
					[0, 2, 6, 5, 3, 0, 8, 5, 1][team.team_id],
					goals: team_results.reduce((p, c) => p + c.result_goals, 0),
					shots: team_results.reduce((p, c) => p + c.result_shots, 0),
					saves: team_results.reduce((p, c) => p + c.result_saves, 0),
					assists: team_results.reduce((p, c) => p + c.result_assists, 0),
					score: team_results.reduce((p, c) => p + c.result_score, 0),
				};
			})
			.sort((a, b) => (b.wins - a.wins) || (b.goals - a.goals) || (b.score - a.score))
			.map((t, i, a) => ({
				...t,
				rank: i + 1,
				rank_count: a.length,
				winner: (i === 0),
			}));
		})
		.then(() => this.$forceUpdate())
		.catch((error) => console.error(error));
	}
}
</script>

<style lang="scss" scoped>
@import "./../style.scss";

table {
	border-collapse: collapse;
	zoom: calc(100% * 1.25);
	margin: auto;

	tbody {
		display: inline-block;

		>tr:first-of-type {

			display: flex;
			position: relative;

			>td {

				border: solid 2px transparent;
				width: 3em;
				height: 1.75em;
				min-height: 1.75em;
				line-height: 1.75em;
				font-size: 1.25em;

				&:nth-of-type(2) {
					width: 15em;
					padding-left: 10px;
				}

				&:last-of-type {

					width: 19.4em;
					border: none;

					>div {

						display: flex;
						flex-direction: row;
						flex-wrap: nowrap;
						justify-content: space-around;

						position: relative;
						height: 2em;
						
						background-color: #044969;
						border-color: #2CAEE2;
						border-style: solid;

						@extend %top-rounded !optional;

						box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.603);

						>span {
							font-size: 0.6em;
						}

					}

				}
			
			}
		}
	}
}

</style>
