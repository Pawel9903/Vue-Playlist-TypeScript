<template>
    <div>
        <div class="row col">
            <search-field></search-field>
        </div>
        <div class="row col">
            <search-results></search-results>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import SearchResults from '@/components/SearchResults.vue';

    @Component({
        components: {SearchResults}
    })
    export default class MusicSearch extends Vue{
    }
</script>

<style scoped>

</style>
