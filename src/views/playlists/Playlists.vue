<template>
    <div class="row">
        <div class="col">
            <playlists-list></playlists-list>
        </div>
        <div class="col">
            <playlist-details></playlist-details>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component'
    import PlaylistDetails from '@/views/playlists/componenets/PlaylistDetails.vue';
    import PlaylistsList from '@/views/playlists/componenets/PlaylistsList.vue';

    @Component({
        components: {PlaylistsList, PlaylistDetails}

        /* Vue options */
    })
    export default class Playlists extends Vue {
    }
</script>

<style scoped>

</style>
