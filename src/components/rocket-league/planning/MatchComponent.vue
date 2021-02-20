<template lang="html">
    <div class="match" v-bind:class="{ final: isFinal }">
        <TeamComponent
			v-bind:team_name="match.match_teams[0].team_name"
			v-bind:team_score="teamScore(match.match_teams[0].team_id)"
			v-bind:class="{ winner: isWinner(match.match_teams[0].team_id) }">
		</TeamComponent>
        <TeamComponent
			v-bind:team_name="match.match_teams[1].team_name"
			v-bind:team_score="teamScore(match.match_teams[1].team_id)"
			v-bind:class="{ winner: isWinner(match.match_teams[1].team_id) }">
		</TeamComponent>
        <MatchNameComponent v-if="isFinal" v-bind:name="match.match_name"></MatchNameComponent>
        <table class="games">
            <thead>
                <tr>
                    <th title="Score">Sc</th>
                    <th title="Assists">As</th>
                    <th title="Saves">Sa</th>
                    <th title="Shots">Sh</th>
                    <th title="Goals">G</th>
                    <th :title="'Best of ' + match.match_games.length + ' games'">BO{{ match.match_games.length }}</th>
                    <th title="Goals">G</th>
                    <th title="Shots">Sh</th>
                    <th title="Saves">Sa</th>
                    <th title="Assists">As</th>
                    <th title="Scores">Sc</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(game, index) in match.match_games">
                    <GameComponent v-bind:game="game" v-bind:key="index"></GameComponent>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import TeamComponent from "./TeamComponent.vue";
import MatchNameComponent from "./MatchNameComponent.vue";
import GameComponent from "./GameComponent.vue";

import { Match, RocketLeagueResult } from "../../../../../api - typings/types";

@Component({
    components: {
        TeamComponent,
        MatchNameComponent,
        GameComponent
	},
	name: "match-component"
})
export default class MatchComponent extends Vue {
    @Prop({ required: true }) private match: Match<RocketLeagueResult>;
	
	get isFinal(): boolean {
		return /.*final.*/i.test(this.match.match_name);
	}

	isWinner(team_id: number): boolean {
		const scores = this.match.match_teams.map(t => this.teamScore(t.team_id) || 0);
		const best_score = Math.max(... scores);
		const score = this.teamScore(team_id);

		return true
			&& score === best_score // has best score
			&& scores.filter(s => s === best_score).length === 1 // no ex aequo
			&& (score || 0) > this.match.match_games.length / 2; // has at least more than half
	}

	teamScore(team_id: number): number | null {
		if(this.match.match_games.every(g => g.game_results.every(r => r.result_goals === null))) {
			return null;
		}

		return this.match.match_games.reduce((p, game) => {
			const most_goals = Math.max(... game.game_results.map(result => result.result_goals));

			if( true
				&& game.game_results.filter(r => r.result_goals === most_goals).length === 1 // no ex aequo
				&& game.game_results.find(r => r.result_team_id === team_id)!.result_goals === most_goals // wins a game
				) {
				++p;
			}
			return p;
		}, 0);
	}
}
</script>

<style lang="scss" scoped>
@import "./../style.scss";

div.match {
	position: relative;
	min-width: max-content;

    &.final {
        > div:nth-last-of-type(1),
        > div:nth-last-of-type(2) {
            top: 10px;
        }
    }

    &:not(.final) {
        > div:nth-last-of-type(1),
        > div:nth-last-of-type(2) {
            top: -20px;
        }
    }

    table.games {
        z-index: 1;
        position: relative;
        border-collapse: separate;
        border-spacing: 0;
        border: solid 2px #27587e;
        border-top-color: white;
        max-width: 100%;

        @extend %bottom-rounded !optional;

        > thead {
            > tr {
                background-color: #27587e;
                width: 3em;
                max-width: 3em;
                min-width: 3em;

                > th {
                    padding-top: 0.6em;
                    color: white;
                }
            }
        }
    }

    &:not(:first-of-type) {
        margin-top: 3.5em;
    }
}
</style>
