<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>Music app</h1>
<!--        <playlists></playlists>-->
        <music-search></music-search>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import Playlists from "@/views/playlists/Playlists.vue";
  import MusicSearch from '@/views/search/MusicSearch.vue';

  @Component({
    components: {
      MusicSearch,
      Playlists: Playlists
    }
    /* Vue options */
  })
  export default class App extends Vue{
    showMessage() {
      console.log('message');
    }
  }
</script>l
<style lang="scss">
</style>
