<template lang="html">
    <div class="layout">
        <img src="/resources/img/games/home/logo/Bantha.png" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
    name: "home-layout-component"
})
export default class HomeLayoutComponent extends Vue {}
</script>

<style lang="scss" scoped>
div.layout {
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #baedf1;

    > img {
        max-width: 30%;
    }
}
</style>
