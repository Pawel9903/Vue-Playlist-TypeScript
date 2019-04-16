<template>
    <div class="card-group">
        <album-card v-for="result in results" :album="result" :key="result.id">
        </album-card>
    </div>
</template>

<script lang="ts">
    import AlbumCard from "@/components/AlbumCard.vue";
    import { Component, Vue, Prop } from "vue-property-decorator";
    import {SearchResult} from "@/models/SearchResult";

    @Component({
        components: {AlbumCard}
    })
    export default class SearchResults extends Vue{
        @Prop() results!: SearchResult[];
    }
</script>

<style scoped>

</style>
