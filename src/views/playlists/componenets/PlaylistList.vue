<template>
    <div>
<!--        .list-group>.list-group-item-->
        <div class="list-group">
            <div v-for="(playlist, index) of playlists" :key="playlist.id" class="list-group-item" :class="isSelected(playlist)" @click="selectedChange(playlist)" >{{ index+1 }}.{{ playlist.name }}</div>
        </div>
        <b>Number of favorites: {{ favoritesCount }}</b>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import {Playlist} from "@/models/Playlist";
    import { Prop, Emit } from  'vue-property-decorator';

    @Component({})
    export default class PlaylistList extends Vue {

        @Prop({
            required:true
        })
        playlists!: Playlist[];

        @Prop({
            required: true
        })
        selected?: Playlist;

        get favoritesCount(this: PlaylistList){
            return this.playlists.filter(p => p.favorite).length;
        }

        isSelected(playlist:Playlist){
            return { active: this.selected && this.selected.id == playlist.id }
        }

        @Emit() selectedChange(playlist:Playlist){
            return playlist;
        }
    }
</script>

<style scoped>

</style>
