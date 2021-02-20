<template lang="html">
    <span class="matchname">{{ name }}</span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
	name: "match-name-component"
})
export default class MatchNameComponent extends Vue {
    @Prop({ required: true }) private name: string;
}
</script>

<style lang="scss" scoped>
@import "./../style.scss";

span.matchname {
    z-index: 0;
    position: relative;
    left: calc(50% - 4em);
    bottom: 0.8em;
    background-color: #000f1e;
    color: white;
    padding-top: 0.1em;
    padding-left: 1.5em;
    padding-right: 1.5em;
    padding-bottom: 1.2em;
    font-size: 1.4em;

    @extend %stretched-left !optional;

    @extend %rounded !optional;

    @extend %glowing !optional;
}
</style>
