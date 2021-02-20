<template lang="html">
	<tr class="player">
		<td>{{ player.player_name }}</td>
		<td>
			<img
				v-bind:src="'/resources/img/games/rocket-league/other/ranks/' + player.player_real_rank_name + '.png'"
				:alt="player.player_real_rank_name"
				:title="player.player_real_rank_name"
				/>
		</td>
	</tr>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { PlayersTarget } from "../../../../../api - typings/types";

@Component({
	name: "player-component"
})
export default class PlayerComponent extends Vue {
	@Prop({ required: true }) private player: PlayersTarget;
}
</script>

<style lang="scss" scoped>
@import "./../style.scss";

tr.player {

	// border: solid #06486B 2px;

	&:first-of-type {
		@extend %top-rounded !optional;

		>td {
			&:first-of-type {
				@extend %top-left-rounded !optional;
			}
			&:last-of-type {
				@extend %top-right-rounded !optional;
			}
		}
	}

	&:last-of-type {
		@extend %bottom-rounded;

		>td {
			&:first-of-type {
				@extend %bottom-left-rounded !optional;
			}
			&:last-of-type {
				@extend %bottom-right-rounded !optional;
			}
		}
	}

	>td {
		height: 1.5em;
		border: solid #06486B 2px;
		padding: 5px;
		display: inline-block;
		font-size: 1.25em;
		line-height: 1.5em;
		text-align: center;
		font-weight: 700;
	}

	>td:first-of-type {
		width: 15em;
		max-width: 80%;
		background-color: #000F1E;
	}

	>td:last-of-type {
		width: 2em;
		max-width: 20%;
		background-color: #163246;

		>img {

			height: 80%;
			width: auto;

			height: 100%;
			width: auto;
			margin: auto;
			display: block;

			filter: drop-shadow(0px 0px 5px black);
		}

	}

}
</style>
