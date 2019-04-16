<template>
    <div class="card">
        <div class="card-body">
            <div class="card-title">
                <slot name="title"></slot>
            </div>
            <slot></slot>
            <div v-if="$slots.footer" class="card-footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component({})
    export default class Card extends Vue{

    }
</script>

<style scoped>

</style>
