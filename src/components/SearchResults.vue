<template>
    <div class="card-group">
        <album-card v-for="n in 4" :key="n">
        </album-card>
    </div>
</template>

<script lang="ts">
    import AlbumCard from "./AlbumCard";
    import { Component, Vue } from "vue-property-decorator";

    @Component({
        components: {AlbumCard}
    })
    export default class SearchResults extends Vue{
    }
</script>

<style scoped>

</style>
