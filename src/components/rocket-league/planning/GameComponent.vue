<template lang="html">
    <tr class="game">
        <td>{{ game.game_results[0].result_score }}</td>
        <td>{{ game.game_results[0].result_assists }}</td>
        <td>{{ game.game_results[0].result_saves }}</td>
        <td>{{ game.game_results[0].result_shots }}</td>
        <td>{{ game.game_results[0].result_goals }}</td>
        <td class="name">{{ game.game_name }}</td>
        <td>{{ game.game_results[1].result_goals }}</td>
        <td>{{ game.game_results[1].result_shots }}</td>
        <td>{{ game.game_results[1].result_saves }}</td>
        <td>{{ game.game_results[1].result_assists }}</td>
        <td>{{ game.game_results[1].result_score }}</td>
    </tr>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { Game } from "../../../../../api - typings/types";

@Component({
	name: "game-component",
})
export default class GameComponent extends Vue {
    @Prop({ required: true }) private game: Game;
}
</script>

<style lang="scss" scoped>
@import "./../style.scss";

tr.game {
    > td {
        height: 1em;
        width: 2.5em;
        min-width: 2.5em;
        max-width: 2.5em;
        border: solid 1px #2c5a7c80;
        background-color: #000f1e;
        color: white;
        text-align: center;
        font-weight: 100;
        font-size: 0.7em;

        &.name {
            padding-left: 5px;
            padding-right: 5px;
            font-size: 0.8em;
            min-width: 64px;
        }

        &:not(&.name) {
            min-width: 1em;
        }

        &:nth-child(1) > input {
            text-align: right;
        }

        &:nth-child(2) > input {
            text-align: left;
        }

        &:last-child {
            > td {
                &,
                & > * {
                    &:nth-child(1) {
                        @extend %bottom-left-rounded !optional;
                    }

                    &:nth-child(2) {
                        @extend %bottom-right-rounded !optional;
                    }
                }
            }
        }
    }

    &:last-of-type {
        @extend %bottom-rounded !optional;

        > td {
            &:first-of-type {
                @extend %bottom-left-rounded !optional;
            }

            &:last-of-type {
                @extend %bottom-right-rounded !optional;
            }
        }
    }
}
</style>
