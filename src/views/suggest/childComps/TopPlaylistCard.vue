<template>
  <div class="wrap" v-if="topPlayList[0] != null" @click="onClickCard">
    <div class="top-playlist-card">
      <div class="img-wrap">
        <img :src="topPlayList[0].coverImgUrl" alt="">
      </div>
      <div class="content">
        <div class="tag-wrap">
          <span>精品歌单</span>
        </div>
        <p class="name">{{ topPlayList[0].name }}</p>
        <p class="desc">{{ topPlayList[0].description }}</p>
      </div>
    </div>
    <div class="background" :style="{ backgroundImage: `url(${topPlayList[0].coverImgUrl})` }"></div>
    <div class="background-mask"></div>
  </div>
</template>

<script>
export default {
  name:'TopPlaylistCard',
  props:{
    topPlayList:{
      type:Array,
      default() {
        return []
      }
    }
  },
  methods:{
   onClickCard() {
    this.$router.push(`/musiclistdetail/${this.topPlayList[0].id}`)
    }
  }
}
</script>

<style scoped>
.wrap {
  position: relative;
  width: 100%;
  height: 190px;
  background-color: #fff;
  overflow: hidden;
  cursor: pointer;
}
.top-playlist-card {
  position: relative;
  z-index: 1;
  display: flex;
  padding: 16px;
  overflow: hidden;
}
.img-wrap {
  width: 160px;
  /* height: 220px; */
}
.img-wrap>img {
  width: 160px;
  /* height: 100%; */
}
.content {
 margin-left: 10px;
}
.background {
  position: absolute;
  top: 0;
  filter: blur(15px);
  width: 100%;
  height: 100%;
  z-index: 0;
}
.background-mask {
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  z-index: 0;
}
.tag-wrap {
  padding: 4px 16px;
  margin-bottom: 16px;
  width: 90px;
  border: 1px solid rgb(248, 167, 15);
  color: orange;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;
 
}
.name {
   margin-bottom: 8px;
   font-size: 16px;
   color: #fff;
}
.desc {
  font-size: 12px;
  color: rgb(194, 193, 193);
  line-height: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}
</style>