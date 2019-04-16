<template>
    <div>
        <div class="row col">
            <search-field></search-field>
        </div>
        <div class="row col">
            <search-results :results="results"></search-results>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import SearchResults from '@/components/SearchResults.vue';
    import {SearchResult} from '@/models/SearchResult'

    @Component({
        components: {SearchResults}
    })
    export default class MusicSearch extends Vue{
        results:SearchResult[] = [
            {
                id: '1',
                image: 'http://placekitten.com/300/300',
                name: 'kot'
            },
            {
                id: '2',
                image: 'http://placekitten.com/300/300',
                name: 'kot 2'
            }
        ];
    }
</script>

<style scoped>

</style>
