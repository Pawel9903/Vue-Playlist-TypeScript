<template>
    <div>
        <h3>Lista</h3>
<!--        .list-group>.list-group-item-->
        <div class="list-group">
            <div v-for="(playlist, index) of playlists" :key="playlist.id" class="list-group-item" :class="isSelected(playlist)" @click="select(playlist)" >{{ index+1 }}.{{ playlist.name }}</div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import {Playlist} from "@/models/Playlist";

    @Component({
        /* Vue options */
    })
    export default class PlaylistList extends Vue {
        playlists: Playlist[] = [
            {
                id: 123,
                name: "Vue Hits",
                favorite: true,
                color: "#ff00ff"
            },
            {
                id: 1,
                name: "Vue top 20",
                favorite: false,
                color: "#fffbbb"
            },
            {
                id: 12,
                name: "Vue top holiday",
                favorite: true,
                color: "#fffccc"
            },
        ];
        selected?: Playlist = this.playlists[0];

        isSelected(playlist:Playlist){
            return { active: this.selected && this.selected.id == playlist.id }
        }

        select(playlist:Playlist){
            this.selected = playlist
        }
    }
</script>

<style scoped>

</style>
