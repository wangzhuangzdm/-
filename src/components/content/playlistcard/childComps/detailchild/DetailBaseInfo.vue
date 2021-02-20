<template>
  <div class="base"  v-if="baseInfo!=null">
    <div class="title">
      <img :src="baseInfo.img" alt="">
    </div>
    <div class="content">
      <div class="top">
        <span>{{baseInfo.name}}</span>
         <div class="top-right">
           <div class="songnum">
             <p>歌曲数</p>
             <p>{{baseInfo.trackCount}}</p>
           </div>
           <div class="playnum">
             <p>播放量</p>
             <p>{{baseInfo.playCount}}</p>
           </div>
         </div>
      </div>

      <div class="center">
        <div class="logo">
         <div class="logo-img">
            <img :src="baseInfo.avatarUrl" alt="">
         </div>
          <p>{{baseInfo.nickname}}</p>
        </div>
        <div class="playall" @click="playAll">
           <img src="~assets/img/playmusic/bofang.svg" alt />
          播放全部
        </div>
      </div>

      <div class="desc">
        <div class="tag">
          标签：
           <span>{{baseInfo.tags}}</span>
        </div>
        <div class="desc-item">
          简介：
          <span>{{baseInfo.title}}</span>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import {getSongUrl} from "network/suggest"
export default {
 name:'DetailBaseInfo',
 props:{
   baseInfo:{
     type: Object,
     default() {
       return {}
     }
   },
   musiclist:{
      type:Array,
      default() {
        return []
      }
    }
 },
 methods:{
   playAll() {
     let playAllLsit =[];
     for (let i = 0, length = this.musiclist.length; i < length; i++) {
      getSongUrl(this.musiclist[i].id).then(res => {
        playAllLsit.push(res);
        // console.log(typeof playAllLsit);
        this.$store.commit('playMusic',playAllLsit)
      })
    }
    //  console.log(this.musiclist);
   }
 }
}
</script>

<style scoped>
.base {
  width: 100%;
  display: flex;
}
.title {
  width: 18%;
  height: 18%;
}
.title img {
  width: 100%;
  height: 100%;
}
.content {
  flex: 1;
}
.top {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
}
.top span {
  font-size: 20px;
  color: #DCDDE4; 
}
.top-right {
  display: flex;
  text-align: center;
  font-size: 14px;
}
.top-right .songnum {
  margin-right: 50px;
}
.top-right p {
  padding: 3px;
}

/* .center {

} */
.center .logo {
  display: flex;
  text-align: center;
  padding: 0 30px;
  margin: 20px 0;
  line-height: 40px;
}
.logo-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 10px 0 0;
}
.center .logo img {
  width: 100%;
  height: 100%;
}
.logo p {
  font-size: 16px;
  color: rgb(195, 195, 193);
}
.playall {
  width: 150px;
  height: 40px;
  background: #cd2929;
  margin: 30px 30px;
  color: #DCDDE4; 
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}
.playall img {
  width: 20px;
  height: 20px;
  vertical-align: -5px;
}
.desc {
  margin: 0 30px;
  color: #DCDDE4;
}
.desc .tag {
 padding: 5px 0;
}
</style>