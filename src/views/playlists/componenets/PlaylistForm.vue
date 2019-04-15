<template>
    <div>

        <h3>Form</h3>
        <!--        .form-group*3>label+input.form-control-->
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" class="form-control" v-model="draft.name">
        </div>
        <div class="form-group">
            <label for="favorite">Favorite:</label>
            <input id="favorite" name="favorite" type="checkbox" v-model="draft.favorite">
        </div>
        <div class="form-group">
            <label for="color">Color:</label>
            <input type="color" name="color" id="color" v-model="draft.color"
                   @input="draft.color = $event.target.value">
        </div>
        <div>
            <input type="button" value="Save" @click="$emit('save', playlist)" class="btn btn-success mr-1">
            <input type="button" value="Cancel" @click="cancel" class="btn btn-danger">
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import {Playlist} from "@/models/Playlist";
    import {Prop, Emit} from "vue-property-decorator";

    @Component({})
    export default class PlaylistForm extends Vue {
        @Prop()
        playlist!: Playlist;
        draft!: Playlist;
        created(){
            this.draft = { ...this.playlist };
        }

        save() {
            this.$emit("cancel", this.playlist)
        };

        cancel() {
            this.$emit("cancel")
        };
    }
</script>

<style scoped>

</style>
