<template>
  <div>
    <div class="playlist-card">
      <div
        class="songs-card"
        v-for="(item, index) in playlists"
        :key="item.id"
        @click="clickDetail(item.id)"
      >
        <img :src="item.coverImgUrl" alt="" />
        <div class="desc-wrap">
           <span class="desc">{{ item.description }}</span>
        </div>
        <div class="button">
          <img src="~assets/img/content/1.png" alt="" class="button-img">
        </div>
        <div class="songs-name">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getPersonalized } from "network/playlist";
import {detailMixin} from "assets/common/mixin"
export default {
  name:'MusicListCard',
  props:{
    playlists:{
      type:Array,
      default() {
        return []
      }
    }
  },
  mixins: [detailMixin],
  created() {
    getPersonalized(this.limit).then((res) => {
      this.homeSongList = res.result;
      // console.log(this.homeSongList);
    });
  },
  methods:{
   clickDetail(id) {
      this.$router.push("/musiclistdetail/"+id);
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 20px;
  color: #DCDDE4;
  margin-left: 25px;
}
.playlist-card {
  
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  cursor: pointer;
}
.songs-card {
  position: relative;
  width: 17%;
  height:17%;
  margin: 10px 0 30px 0;


}
.songs-card img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
 
}
.desc-wrap {
  position: absolute;
  border-radius: 12px;
  left: 0;
  right: 0;
  top: 0;
  padding: 6px;
  background-color: rgba(0, 0, 0, 0.4);
  transform: translateY(-100%);
  opacity: 0;
  transition: all 0.4s;
  height: 40px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.songs-card:hover .desc-wrap {
  transform: translateY(0);
  opacity: 1;
}
.desc-wrap .desc {
  font-size: 13px;
  color: #DCDDE4;
  overflow: hidden;
 
}
.button {
  position: absolute;
  bottom: 50px;
  right: 30px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  opacity: 0;
  transition: all 0.4s;
}
.button .button-img {
  width: 100%;
  height: 100%;
  
}
.songs-card:hover .button {
  opacity: 0.7;
}
.songs-name {
  font-size: 13px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 5px;
  color: #B1B1B1;
}
</style>