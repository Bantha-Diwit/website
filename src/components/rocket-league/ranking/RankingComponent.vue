<template lang="html">
    <div class="ranking">
        <BoardComponent></BoardComponent>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import BoardComponent from "./BoardComponent.vue";

@Component({
	name: "ranking-component",
	components: {
		BoardComponent,
	}
})
export default class RankingComponent extends Vue {
	
}
</script>

<style lang="scss" scoped>
@import "./../style.scss";

div.ranking {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
}
</style>
