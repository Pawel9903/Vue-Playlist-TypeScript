<template>
    <div class="card">
        <img :src="album.image" class="card-img-top" alt="#"/>
        <div class="card-body">
            <h5 class="card-title">{{album.name}}</h5>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from "vue-property-decorator";
    import {SearchResult} from "@/models/SearchResult";

    @Component({
    })
    export default class AlbumCard extends Vue {
        @Prop() album!:SearchResult;
    }
</script>

<style scoped>

</style>
