<template lang="html">
    <div>
        <h1 style="font-size:10em;">TODO <small>{{ this.$route.params.game }} | {{ this.$route.params.page }}</small></h1>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
	name: "todo-component"
})
export default class TodoComponent extends Vue {}
</script>

<style lang="scss" scoped></style>
