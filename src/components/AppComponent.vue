<template>
    <MenuComponent></MenuComponent>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import MenuComponent from "./MenuComponent.vue";

@Component({
    components: {
        MenuComponent
	},
	name: "app-component"
})
export default class AppComponent extends Vue {
}
</script>

<style lang="scss">
html {
	width: 100%;
	max-width: 100%;
	height: 100%;
	max-height: 100%;

    body {
		height: 100%;
		max-height: 100%;
		width: 100%;
		max-width: 100%;

        margin: 0;
        padding: 0;

		* {
			user-select: none;
		}
    }
}
</style>
