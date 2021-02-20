<template>
  <div class="play-mv" v-if="id!=null&&detail!=null">
    <div class="content">
      <div class="layout-left">
       <div class="title"  v-if="detail!=null">
        <div class="left-mv">MV</div>
        <div class="name">{{detail.name}}</div>
        <div class="artist">{{detail.artistName}}</div>
       </div>
       <div class="video" v-if="url!=null">
          <video :src="url" controls autoplay  class="video-play"></video>
       </div>
      
       <div class="recommend">
          <recommends class="rec" :recommends="recommends" v-if="isShow" />
          <div class="norecommends" v-else>暂时还没有评论哦~</div>
       </div>
      </div>
      <div class="right">
        <div class="desc">
          <p>MV介绍</p>
          <div class="base">
            <div class="date">发布时间：{{detail.publishTime}}</div>
            <div class="playcount">播放次数：{{detail.playCount}}次</div>
            <div class="clear"></div>
          </div>
          <div class="mv-desc" v-if="detail.desc!=''">
              <span>简介：</span>
              {{detail.desc}}
          </div>
          <div class="nomv-desc" v-else>
            <span>作者比较懒，暂无简介~</span>
          </div>
        </div>
        <div class="alia">
          <p>相关推荐</p>
          <simi-mv-item :mv-list="simiMv" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getMvDetail,
  getMVUrl,
  getMVComment,
  getSimiMv,
  MV
} from "network/mv";
import Recommends from './childComps/Recommends';
import SimiMvItem from './childComps/SimiMvItem';
export default {
  name:'PlayMv',
  components:{
    Recommends,
    SimiMvItem
  },
  data() {
    return {
      id:null,
      detail: null,
      url: null,
      limit:20,
      recommends:null,
      isShow:false,
      simiMv: [],
    }
  },
  created() {
    this.id = this.$route.params.id;
    if(this.id) {
       this.getBaseInfo()
    }
  },
  methods:{
    getBaseInfo() {
      getMvDetail(this.id).then(res => {
        this.detail = res.data
        // console.log(this.detail);
      });
      getMVUrl(this.id).then(res => {
        this.url = res.data.url;
        // console.log(res);
      });
      getMVComment(this.id,this.limit).then(res => {
       this.recommends = res;
       console.log(res);
       if(this.recommends.comments.length != 0) {
         this.isShow = !this.isShow
       }
      });
      getSimiMv(this.id).then(res => {
       for(let i of res.mvs) {
         let mv = new MV(i.id, i.cover, i.name, i.artistName, i.playCount);
         this.simiMv.push(mv)
         console.log(this.simiMv);
         if (i == res.mvs.length - 1) {
            return;
          }
       }
      })
    }
  }
}
</script>

<style scoped>
.play-mv {
  position: relative;
  position: fixed;
  overflow: auto;
  top: 54px;
  left: 18%;
  width: 82%;
  height: calc(100% - 54px - 59px);
  padding: 20px 100px;
  background-color: #252525;
  height: 100%;
}
.content {
  display: flex;
}
.layout-left {
  width: 70%;
}
.title {
  display: flex;
}
.left-mv {
  padding: 5px;
  border: 1px solid red;
  color: red;
}
.title .name {
 line-height: 30px;
 margin-left: 20px;
 font-size: 16px;
 color: azure;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
}
.title .artist {
 line-height: 32px;
 margin-left: 20px;
 font-size: 13px;
 color: rgb(201, 201, 201);
}
.video {
  margin-top: 20px;
  width: 100%;
 
}
.video-play {
  outline-style: none;
  width: 100%;
  height: 100%;
}
.norecommends {
  width: 70%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  margin-top: 60px;
  font-size: 18px;
  color: azure;
}
.right {
  margin-left: 30px;
  flex: 1;
}
.desc p,
.alia p {
  font-size: 18px;
  color: azure;
  padding-bottom: 15px;
}
.base {
  display: flex;
  font-size: 13px;
  color: rgb(201, 201, 201);
  margin-bottom: 10px;
}
.base .playcount {
  margin-left: 50px;
}
.mv-desc,.nomv-desc {
 font-size: 13px;
 color: rgb(201, 201, 201);
}
.mv-desc span {
 font-size: 13px;
 color: rgb(71, 141, 233);
}
.alia p {
  padding-top: 20px;
}
</style>