<template>
  <div class="home-songs">
    <playlist-card></playlist-card>
    <home-hot-songs></home-hot-songs>
    <home-mv></home-mv>
  </div>
</template>

<script>
import PlaylistCard from 'components/content/playlistcard/PlaylistCard';
import HomeHotSongs from 'components/content/homehotsongs/HomeHotSongs';
import HomeMv from 'components/content/homehotsongs/HomeMv';

export default {
  name:'HomeSongs',
  components:{
    PlaylistCard,
    HomeHotSongs,
    HomeMv
  },


 
}
</script>

<style scoped>

</style>