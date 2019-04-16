<template>
    <div class="row">
        <div class="col">
            <search-field v-model="query" @search="search" placeholder="Search"></search-field>
            <playlist-list :playlists="filteredResults" :selected="selected" @selected-change="select($event)"></playlist-list>
        </div>
        <div v-if="selected" class="col">
            <playlist-details v-if="mode === 'show'" :playlist="selected" :selected="selected" @edit="edit" ></playlist-details>
            <playlist-form  v-if="mode === 'edit'" :playlist="selected" @cancel="cancel" @save="save"></playlist-form>
        </div>
        <div v-else>
            <b>Please select playlist</b>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component'
    import PlaylistDetails from '@/views/playlists/componenets/PlaylistDetails.vue';
    import PlaylistList from '@/views/playlists/componenets/PlaylistList.vue';
    import {Playlist} from "@/models/Playlist";
    import PlaylistForm from '@/views/playlists/componenets/PlaylistForm.vue';

    @Component({
        components: {PlaylistForm, PlaylistList, PlaylistDetails}

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

        query = '';
        filterQuery = '';
        mode = 'show';
        selected: Playlist | null = null;

        search(query:string){
            this.filterQuery = query;
        }

        get filteredResults(){
            return this.playlists.filter(p => p.name.includes(this.filterQuery));
        }

        edit(){
            this.mode = 'edit';
        };

        save(draft:Playlist){
            const index = this.playlists.findIndex(p => p.id == draft.id);
            if(index !== -1){
                this.playlists.splice(index, 1, draft);
            }
            this.selected = draft;
            this.mode = 'show';
        };

        cancel(){
            this.mode = 'show';
        };

        select(select: Playlist){
            this.selected = this.selected && this.selected.id == select.id ? null :select;
        }
    }
</script>

<style scoped>

</style>
