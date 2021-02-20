<template lang="html">
    <div class="team">
        <span>{{ team_name }}</span>
        <span>{{ team_score }}</span>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
	name: "team-component"
})
export default class TeamComponent extends Vue {
    @Prop({ required: true }) private team_name: string;
    @Prop({ required: true }) private team_score: number;
}
</script>

<style lang="scss" scoped>
@import "./../style.scss";

div.team {
    z-index: 2;
    display: flex;
    width: fit-content;
    position: absolute;
    box-shadow: 0px 0px 3px 1px black;
    line-height: 0.75em;

    @extend %rounded !optional;

    > span {
        max-width: 100px;
        height: 1em;
        color: white;
        font-size: 1em;
        padding: 0.2em;
        text-align: center;
        border: solid 2px #27587e;
		line-height: 1em;

        &:first-of-type {
            min-width: 11em;
            background-color: #000f1e;
        }

        &:last-of-type {
            width: 2em;
            min-width: 2em;
            background-color: #163246;
        }
    }

    &:first-of-type {
        left: -10%;
        float: left;
        flex-flow: row;

        @extend %left-rounded !optional;

        > span {
            &:nth-of-type(1) {
                @extend %left-rounded !optional;
            }

            &:nth-of-type(2) {
                @extend %right-rounded !optional;
                border-left: none;
            }
        }
    }

    &:last-of-type {
        right: -10%;
        float: left;
        flex-flow: row-reverse;

        @extend %right-rounded !optional;

        > span {
            &:nth-of-type(1) {
                background-color: #000f1e;

                @extend %right-rounded !optional;
            }

            &:nth-of-type(2) {
                background-color: #163246;
                border-right: none;

                @extend %left-rounded !optional;
            }
        }
    }

	&.winner {
		box-shadow: 0px 0px 7px 0px #30b5eb;

		>span {
			color: #010E20;
			font-weight: 700;

			&:first-of-type {
				background-image: linear-gradient(#0097F8, #31B6EC, #0097F8);
				border-color: #0097F8;
			}

			&:last-of-type {
				background-image: linear-gradient(#A5DCFB, #B6E4FA, #A5DCFB);
				border-color: #A5DCFB;
			}
		}
	}
}
</style>
