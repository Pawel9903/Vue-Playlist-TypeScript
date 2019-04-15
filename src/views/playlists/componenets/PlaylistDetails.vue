<template>
    <div>
        <div class="mb-5">
            <div>
                <h3>Details</h3>
                <dl>
                    <dt>Name:</dt>
                    <dd>{{ playlist.name }}</dd>
                    <dt>Favorite:</dt>
                    <dd>{{ playlist.favorite? 'Yes' : 'No' }}</dd>
                    <dt>Color:</dt>
                    <dd :style="{ color: playlist.color }">{{ playlist.color }}</dd>
                </dl>
                <input class="btn btn-info" type="button" value="Edit" @click="edit">
            </div>
        </div>
            <playlist-form v-if="mode === 'edit'" :playlist="playlist"></playlist-form>

    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import {Playlist, Track} from "@/models/Playlist";
    import { Prop } from  'vue-property-decorator';
    import PlaylistForm from '@/views/playlists/componenets/PlaylistForm.vue';

    @Component({
        components: {PlaylistForm}
    })
    export default class PlaylistDetails extends Vue {

        @Prop({
            required:true
        })
        playlist!: Playlist;

        mode = 'show';

        edit(){
            this.mode = 'edit';
        };

        // save(){
        //     this.mode = 'show';
        // };
        //
        // cancel(){
        //     this.mode = 'show';
        // };
    }
</script>

<style scoped>

</style>
