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
        <div v-if="mode === 'edit'">
            <h3>Form</h3>
            <!--        .form-group*3>label+input.form-control-->
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" class="form-control" v-model="playlist.name">
            </div>
            <div class="form-group">
                <label for="favorite">Favorite:</label>
                <input id="favorite" name="favorite" type="checkbox" v-model="playlist.favorite">
            </div>
            <div class="form-group">
                <label for="color">Color:</label>
                <input type="color" name="color" id="color" v-model="playlist.color" @input="playlist.color = $event.target.value">
            </div>
            <div>
                <input type="button" value="Save" @click="save" class="btn btn-success mr-1">
                <input type="button" value="Cancel" @click="cancel" class="btn btn-danger">
            </div>
        </div>
        <div v-else></div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import {Playlist, Track} from "@/models/Playlist";
    import { Prop } from  'vue-property-decorator';

    @Component({
        /* Vue options */
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

        save(){
            this.mode = 'show';
        };

        cancel(){
            this.mode = 'show';
        };
    }
</script>

<style scoped>

</style>
