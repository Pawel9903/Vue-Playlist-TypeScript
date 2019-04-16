<template>

    <!--        .form-group*3>label+input.form-control-->
    <form @submit.prevent="save">
        <card>

            <template #title>
                <h3>Form</h3>
            </template>
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" class="form-control" v-model="draft.name" ref="nameRef">
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
            <template #footer>
                <input type="submit" value="Save" class="btn btn-success mr-1">
                <input type="button" value="Cancel" @click="cancel" class="btn btn-danger">
            </template>
        </card>
    </form>

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

        created() {
            this.draft = {...this.playlist};
            // this.$style['placki']
        }

        mounted() {
            if (this.$refs.nameRef instanceof HTMLInputElement) {
                this.$refs.nameRef.focus();
            }
        }

        save() {
            this.$emit("save", this.draft);
        };

        cancel() {
            this.$emit("cancel");
        };
    }
</script>

<style scoped>
    .placki {
        color: red;
    }
</style>
