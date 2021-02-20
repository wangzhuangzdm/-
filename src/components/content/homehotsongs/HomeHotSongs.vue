<template>
 <div>
  <div class="title">热门音乐</div>
  <div class="hot-songs">
    <div class="content" v-for="(item,index) in list" :key="item.id"
    @click="playClick(item.id)">
      <div class="number">{{index-0+1}}</div>
      <div class="img-wrap">
        <img :src="item.picUrl" alt="" class="song-img">
        <div class="icon">
            <img src="~assets/img/playmusic/bofang.svg" alt="" class="icon-img" />
        </div>
      </div>
       <div class="song-content">
            <p class="song-name">{{ item.name }}</p>
            <p class="singer">{{ item.song.artists[0].name }}</p>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
import { getHotSongs } from "network/playlist";
import {getSongUrl} from "network/suggest"
export default {
  name:'HomeNewSongs',
  data() {
    return {
      list:[]
    }
  },
  created() {
   getHotSongs().then(res => {
     this.list = res.result
      // console.log( this.list);
    })
  },
  methods:{
    playClick(id) {
      getSongUrl(id).then(res => {
        this.$store.commit('playMusic',res)
      })
    }
  }

}
</script>

<style scoped>
.hot-songs {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 500px;
  flex-direction: column;
 
}
.title {
  font-size: 20px;
  color: #DCDDE4;
  margin-left: 25px;
}
.content {
  height: 80px;
  margin: 10px;
  width: 45%;
  display: flex;
  align-items: center;
  margin-left: 40px;
  cursor: pointer;
}
.content .number {
  margin: 0 15px 0 5px;
  font-size: 15px;
  color: #B1B1B1;
}
.content:hover {
   background: #2e3035;
}
.img-wrap {
  position: relative;
  width: 80px;
  height:80px;
}
.img-wrap .song-img {
 
  width: 100%;
  height: 100%;
}
.icon {
  position: absolute;
  bottom: 24px;
  right: 25px;
  width: 25px;
  width: 25px;
}
.icon-img {
  width: 100%;
  height: 100%;

}
.song-content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
}
.song-content .song-name {
  margin-bottom: 20px;
  color: #DCDDE4;
  font-size: 13px;
}
.song-content .singer {
  color: #B1B1B1;
  font-size: 15px;
}
</style>