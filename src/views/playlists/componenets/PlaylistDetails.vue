<template>
    <card>
<!--        <template v-slot:[ getSlotName() ]=""></template>-->
        <template #title>
            <h3>Details</h3>
        </template>
        <div>
            <div class="mb-5">
                <div>
                    <dl>
                        <dt>Name:</dt>
                        <dd>{{ playlist.name }}</dd>
                        <dt>Favorite:</dt>
                        <dd>{{ playlist.favorite | yesno }}</dd>
                        <dt>Color:</dt>
                        <dd :style="{ color: playlist.color }">{{ playlist.color }}</dd>
                    </dl>
                </div>
            </div>
        </div>
        <template #footer>
            <input class="btn btn-info" type="button" value="Edit" @click="$emit('edit')">
        </template>
    </card>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import {Playlist, Track} from "@/models/Playlist";
    import {Prop} from "vue-property-decorator";
    import PlaylistForm from "@/views/playlists/componenets/PlaylistForm.vue";

    @Component({
        components: {PlaylistForm},
        filters: {
            yesno(value: boolean) {
                return value ? "Yes" : "No";
            }
        }
    })
    export default class PlaylistDetails extends Vue {

        @Prop({
            required: true
        })
        playlist!: Playlist;
    }
</script>

<style scoped>

</style>
