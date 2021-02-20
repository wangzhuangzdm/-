<template>
  <div class="suggest">
    <!-- <top-playlist-card :topPlayList="topPlayList"></top-playlist-card> -->
    <suggest-tabs :tags="tags"></suggest-tabs>
    <!-- <music-list-card class="music-list" :playlists="playlists"></music-list-card> -->
  </div>
</template>

<script>
// import TopPlaylistCard from './childComps/TopPlaylistCard';
import SuggestTabs from './childComps/SuggestTabs';
// import MusicListCard from './childComps/MusicListCard';
import {getHighquality,getMusicListHot,
getPlaylist} from 'network/playlist';

export default {
  name:'Suggest',
  components:{
    // TopPlaylistCard,
    SuggestTabs,
    // MusicListCard
  },
  data() {
    return {
      topPlayList:[],
      tags:[ 
      "全部",
      "欧美",
      "华语",
      "流行",
      "说唱",
      "摇滚",
      "民谣",
      "电子",
      "轻音乐",
      "影视原声",
      "ACG",
      "怀旧",],
    }
  },
}
</script>

<style  scoped>
.suggest {
  position: fixed;
  overflow: auto;
  top: 54px;
  left: 18%;
  width: 82%;
  padding: 20px;
  background-color: #252525;
  height: 100%;
}
</style>