<template lang="html">
    <div class="layout">
        <component v-bind:is="currentPageComponentName"></component>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import TodoComponent from "./TodoComponent.vue";

type Link = {
	name: string;
	link: string;
	component: Vue;
}

@Component({
	components: {
		TodoComponent,
	},
	name: "todo-layout-component"
})
export default class TodoLayoutComponent extends Vue {
    links: Link[] = [
        {
            name: "Home",
            link: "home",
            component: new TodoComponent(),
        }
    ];

    get currentPageObject(): Link {
        return this.links.find(l => l.link === this.$route.params.page)!;
    }

    get currentPageComponent(): Vue {
        return this.currentPageObject.component;
    }

    get currentPageComponentName(): string {
        return this.currentPageComponent.$options.name!;
    }
}
</script>

<style lang="scss" scoped></style>
