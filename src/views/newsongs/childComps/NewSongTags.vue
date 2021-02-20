<template>
  <div class="new-song">
    <div class="new-song-tag">
    <div class="tags" 
    v-for="(item,index) in tags"
    @click="itemClick(index)"
    :class="{active:currentIndex == index}">{{item.title}}
    </div>
    
    </div>
    <new-song-item :songs="songs"></new-song-item>
  </div>
</template>

<script>
import NewSongItem from './NewSongItem';
import {getTopSongs} from 'network/playlist';
export default {
  name:'NewSongTags',
  components:{
    NewSongItem
  },
  props:{
    tags:{
      type:Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
       songs: [],
       currentIndex:0
    }
  },
  created() {
    getTopSongs(this.tags[0].type).then(res => {
        console.log(res);
        this.songs = res.data
      })
 },
  methods:{
    itemClick(index) {
      this.currentIndex = index
      getTopSongs(this.tags[this.currentIndex].type).then(res => {
        console.log(res);
        this.songs = res.data
      })
    },
   
  }
}
</script>

<style scoped>
.new-song-tag {
  display: flex;
  margin: 20px 0;
}
.tags {
  cursor: pointer;
  font-size: 14px;
  color: rgb(146, 146, 146);
  margin:0 20px
}
.active {
  color: orange;
}
</style>