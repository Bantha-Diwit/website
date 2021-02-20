<template lang="html">
	<div class="team">
		<table>
			<thead>
				<tr>
					<th scope="col" colspan="1">
						<span>{{ team.team_name }}</span>
					</th>
					<th scope="col" colspan="1">
						<span></span>
					</th>
				</tr>
			</thead>
			<tbody>
				<template v-for="(player, index) in team.team_players">
					<PlayerComponent v-bind:player="player" v-bind:key="index"></PlayerComponent>
				</template>
			</tbody>
		</table>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { TeamsTarget } from "../../../../../api - typings/types";

import PlayerComponent from "./PlayerComponent.vue";

@Component({
  	components: {
		PlayerComponent,
	},
	name: "team-component",
})
export default class TeamComponent extends Vue {
	@Prop({ required: true }) private team: TeamsTarget;
}
</script>

<style lang="scss" scoped>
@import "./../style.scss";

div.team {
	margin: 1em;

	>table {
		
		border-collapse: collapse;

		@extend %rounded !optional;

		>thead {

			display: block;

			>tr {

				display: inline-block;

				>th {
					display: inline-block;
					border: solid transparent 2px;
					padding: 5px;
					font-size: 1.25em;

					&:first-of-type {

						width: 15em;

						>span {
							width: 80%;
							max-width: 80%;
							display: block;
							height: 2.5em;
					
							background-color: #06486B;
							border: solid 2px #32B3ED;
					
							@extend %rounded !optional;
					
							text-align: center;
							font-size: 1em;
							line-height: 2em;
							font-weight: 700;
					
							padding-left: 0.5em;
							padding-right: 0.5em;
					
					
							top: 1em;
					
							margin: auto;
					
							position: relative;
							z-index: 0;
						}
		
					}

					&:last-of-type {
						width: 2em;
					}
				}
			}

		}

		>tbody {
			box-shadow: 0px 0px 3px 1px black;

			position: relative;
			z-index: 1;

			@extend %rounded !optional;

		}

	}

}
</style>
