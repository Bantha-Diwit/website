<template lang="html">
	<tr class="team" :style="'z-index:' + (this.t.rank_count - this.t.rank) + ';'">
		<td>{{ this.t.rank }}<span>{{ this.rank_th(this.t.rank) }}</span></td>
		<td class="name">{{ this.t.name }}</td>
		<td>{{ this.t.wins }}</td>
		<td>{{ this.t.goals }}</td>
		<td>{{ this.t.shots }}</td>
		<td>{{ this.t.saves }}</td>
		<td>{{ this.t.assists }}</td>
		<td>{{ this.t.score }}</td>
	</tr>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class TeamComponent extends Vue {
	@Prop({ required: true }) private t: {
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
	};

	rank_th(rank: number): string {
		const j = rank % 10, k = rank % 100;
		switch(true) {
			case j === 1 && k !== 11:
				return "st";
			case j === 2 && k !== 12:
				return "nd";
			case j === 3 && k !== 13:
				return "rd";
			default:
				return "th";
		}
	}

}
</script>

<style lang="scss" scoped>
@import "./../style.scss";

tr.team {

	@extend %rounded !optional;

	box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.603);
	display: flex;
	position: relative;

	>td {
		background-color: #163246;
		border: solid 2px #255478;


		width: 3em;
		min-width: 3em;
		height: 1.75em;
		min-height: 1.75em;

		line-height: 1.75em;
		font-size: 1.25em;
		text-align: center;

		&:first-of-type {
			@extend %left-rounded !optional;
			>span {
				font-size: 0.75em;
			}
		}

		&.name {
			background-color: #000F1E;

			width: 15em;
			min-width: 15em;

			text-align: start;
			padding-left: 10px;
		}

		&:last-of-type {
			@extend %right-rounded !optional;
		}

	}

	&.winner {
		>td {
			font-weight: 700;
			&:first-of-type {
				background-image: linear-gradient(#A5DCFB, #B6E4FA, #A5DCFB);
				border-color: #A5DCFB;
				color: #010E20;
			}
			&:nth-of-type(2) {
				background-image: linear-gradient(#0097F8, #31B6EC, #0097F8);
				border-color: #0097F8;
				color: #010E20;
			}
		}
	}

}

</style>
