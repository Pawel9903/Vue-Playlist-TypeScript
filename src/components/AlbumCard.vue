<template>
    <div class="card">
        <img src="http://placekitten.com/300/300" class="card-img-top" alt="#"/>
        <div class="card-body">
            <h5 class="card-title">Album</h5>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component({
    })
    export default class AlbumCard extends Vue {
        query = 'batman';
        results = [];
    }
</script>

<style scoped>

</style>
