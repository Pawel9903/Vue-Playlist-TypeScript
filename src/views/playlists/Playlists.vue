<template>
    <div class="row">
        <div class="col">
            <playlists-list :playlists="playlists" :selected="selected" @selected-change="selected = $event"></playlists-list>
        </div>
        <div class="col">
            <playlist-details :playlist="selected" :selected="selected" ></playlist-details>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component'
    import PlaylistDetails from '@/views/playlists/componenets/PlaylistDetails.vue';
    import PlaylistsList from '@/views/playlists/componenets/PlaylistsList.vue';
    import {Playlist} from "@/models/Playlist";

    @Component({
        components: {PlaylistsList, PlaylistDetails}

        /* Vue options */
    })
    export default class Playlists extends Vue {
        playlists: Playlist[] = [
            {
                id: 123,
                name: "Vue Hits",
                favorite: true,
                color: "#FF00FF"
            },
            {
                id: 1,
                name: "Vue top 20",
                favorite: false,
                color: "#00FFFF"
            },
            {
                id: 12,
                name: "Vue top holiday",
                favorite: true,
                color: "#A52A2A"
            },
        ];

        selected: Playlist = this.playlists[0];
    }
</script>

<style scoped>

</style>
