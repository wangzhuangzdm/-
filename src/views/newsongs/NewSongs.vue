<template>
  <div class="new-song">
    <new-song-tag :tags="tags"></new-song-tag>
  </div>
</template>

<script>
import NewSongTag from './childComps/NewSongTags';
export default {
  name:'NewSongs',
  components:{
    NewSongTag,
  },
  data() {
   return {
      tags:[
      { title: "全部", type: 0 },
      { title: "华语", type: 7 },
      { title: "欧美", type: 96 },
      { title: "日本", type: 8 },
      { title: "韩国", type: 16 }
      ],
      
   }
 }
}
</script>

<style  scoped>
.new-song {
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