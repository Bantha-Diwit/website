<template lang="html">
    <div class="round" v-bind:class="{current}">
        <h2>
            {{ round.round_name }}<span>{{ round.round_time }}</span>
        </h2>
        <div class="grid">
            <div class="spacer">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <template v-for="(match, index) in round.round_matches">
                <div class="content" v-bind:key="'content-' + index">
                    <div></div>
                    <div>
                        <MatchComponent v-bind:match="match"></MatchComponent>
                    </div>
                    <div></div>
                </div>
                <div class="spacer" v-bind:key="'spacer-' + index">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import MatchComponent from "./MatchComponent.vue";

import { RoundsTarget } from "../../../../../api - typings/types";

@Component({
    components: {
        MatchComponent
	},
	name: "round-component"
})
export default class RoundComponent extends Vue {
    @Prop({ required: true }) private round: RoundsTarget;

	get current() {
		return false; // TODO
	}
}

//  v-bind:class="{upper: 1 + (index * 2) < round.getMatches().length, lower: 1 + (index * 2) > round.getMatches().length}"
</script>

<style lang="scss" scoped>
@import "./../style.scss";

div.round {
    scroll-snap-align: start;
	margin: auto;
	max-width: 100%;

	@media only screen and (max-width: 600px) {
		padding: 0em;
	}

    > h2 {
        color: white;
        margin-top: 0;
        margin-bottom: 0;
        font-size: 3em;
        line-height: 0.6em;
        font-weight: 700;
        text-overflow: clip;

        @extend %stretched-left !optional;

        > span {
            display: inline;
            position: relative;
            font-size: 0.7em;

            &::before {
                content: " - ";
            }
        }
    }

    > div.grid {
        display: grid;
        grid-auto-flow: row;
        // overflow-x: auto;

        > div {
            display: grid;
            grid-template-columns: 3em auto auto 3em;

            &.upper {
                &:first-of-type {
                    > div:first-of-type {
                        border-top: solid 2px red;
                    }
                }

                > div:first-of-type {
                    border-left: solid 2px red;
                }
            }

            &.lower {
                &:last-of-type {
                    > td:last-of-type {
                        border-bottom: solid 2px red;
                    }
                }

                > td:last-of-type {
                    border-right: solid 2px red;
                }
            }

            &.spacer {
                > div {
                    min-width: 2em;
                    min-height: 2em;
                    display: inline-block;
                }
            }

            &.content {
                > div:nth-of-type(even) {
                    max-width: 100%;
                }
            }
        }
    }

	&.current {
		>h2 {
			color: #ffca52;
			filter: drop-shadow(0px 0px 4px #ffca52);
		}
	}

    &:first-of-type {
    }

    &:nth-last-of-type(2) {
    }

    &:not(:first-of-type):not(:nth-last-of-type(2)):not(:last-of-type) {
    }

    &:last-of-type {
        max-width: 100%;
		margin-top: -5em;

        > div {
            @extend %scrollbar !optional;
        }

        @media only screen and (min-width: 600px) {
            > div.grid {
                grid-auto-flow: column;
                max-width: unset;

                > div {
					grid-template-rows: 3.5em auto 2em;
                    grid-template-columns: unset;

					&.content {
						
					}

                    &.spacer {
                        min-width: 6em;
						grid-template-rows: 0em auto 0em;
                    }
                }
            }
        }
    }
}
</style>
